<script context="module" lang="ts">
	export const navbarStartsTransparent: Writable<boolean> = writable(false);
</script>

<script lang="ts">
	import NavButton from '$components/NavButton.svelte';
	import LinksFromPaths from '$utils/LinksFromPaths/LinksFromPaths';
	import { onMount } from 'svelte';
	import Rotate from '$components/Rotate.svelte';
	import { below, scrollIsTop } from '$components/WindowWatcher.svelte';
	import { slide } from 'svelte/transition';
	import { quintIn } from 'svelte/easing';
	import { beforeNavigate } from '$app/navigation';
	import { writable, type Writable } from 'svelte/store';

	export let homeHref: string = '/';
	export let logoSrc: string | null = null;
	export let logoAlt: string | null = null;
	export let title: string | null = null;
	export let dropIcon: FontIcon = { text: 'chevron_right', class: 'material-symbols-outlined' };
	export let menuIcon: FontIcon = { text: 'menu', class: 'material-symbols-outlined' };
	export let cols: string = '1 / 3';

	const topDirectories = new LinksFromPaths().rootDirectory.subdirectories;

	// Handle drawer
	let drawerOpen: boolean = true;
	const menuClicked = () => {
		drawerOpen = !drawerOpen;
	};

	// Handle dropdowns
	let currentDropdown: string | null = null;
	const dropdownClicked = (dropdownName: string) => {
		currentDropdown = dropdownName === currentDropdown ? null : dropdownName;
	};
	onMount(() => {
		window.addEventListener('click', () => {
			currentDropdown = null;
			drawerOpen = false;
		});
	});

	beforeNavigate(() => {
		$navbarStartsTransparent = false;
	});
</script>

<nav
	class="Navbar-outer"
	style:grid-column={cols}
	style:position={$navbarStartsTransparent ? 'fixed' : 'sticky'}
	class:transparent={$navbarStartsTransparent && $scrollIsTop}
>
	<svelte:element this={logoSrc ? 'img' : null} class="logo" src={logoSrc} alt={logoAlt} />

	{#if title !== null}
		<div class="title"><NavButton text={title} href={homeHref} /></div>
	{/if}

	{#if !$below.md}
		<div class="top-links">
			{#each topDirectories as topItem}
				{#if topItem.subdirectories.length}
					<menu class="dropdown">
						<div
							class="dropdown-button"
							on:click|stopPropagation={() => dropdownClicked(topItem.name)}
							on:keypress|stopPropagation={() => dropdownClicked(topItem.name)}
							role="button"
							tabindex="0"
						>
							<Rotate state={currentDropdown === topItem.name}>
								<NavButton fontIcon={dropIcon} />
							</Rotate>
						</div>
						<NavButton href={topItem.currentPath} text={topItem.name} />
						{#if currentDropdown === topItem.name}
							<div
								class="dropdown-item-container"
								transition:slide={{ duration: 220, easing: quintIn }}
							>
								{#each topItem.subdirectories as bottomItem}
									<a href={bottomItem.currentPath} class="dropdown-item">{bottomItem.name}</a>
								{/each}
							</div>
						{/if}
					</menu>
				{:else}
					<NavButton
						href={topItem.currentPath}
						text={topItem.name}
						order={topItem.name === 'contact' ? '-1' : null}
					/>
				{/if}
			{/each}
		</div>
	{/if}

	{#if $below.md && drawerOpen}
		<div class="drawer" transition:slide>
			{#each topDirectories as topItem}
				<div class="drawer-top-link" style:order={topItem.name === 'contact' ? '-1' : null}>
					<NavButton text={topItem.name} href={topItem.currentPath} />
				</div>
				{#each topItem.subdirectories as bottomItem}
					<div class="drawer-bottom-link">
						<NavButton text={bottomItem.name} href={bottomItem.currentPath} />
					</div>
				{/each}
			{/each}
		</div>
	{/if}

	<div
		class="menu-button"
		on:click|stopPropagation={menuClicked}
		on:keypress|stopPropagation={menuClicked}
		style:display={$below.md ? 'grid' : 'none'}
	>
		<Rotate state={drawerOpen}>
			<NavButton fontIcon={menuIcon} />
		</Rotate>
	</div>
</nav>

<style lang="scss">
	.Navbar-outer {
		z-index: 100;
		top: 0;
		left: 0;
		right: 0;
		font-family: 'Roboto', sans-serif;
		font-size: 1.4rem;
		column-gap: 1rem;
		padding-inline: 0.5rem;
		display: grid;
		justify-self: stretch;
		background-image: linear-gradient(to bottom, var(--secondaryColor), var(--secondaryColorDark));
		grid-template:
			'logo title links bars' 3rem
			'drawer drawer drawer drawer' auto;
		grid-template-columns: auto 1fr auto auto;
		user-select: none;

		&.transparent {
			background-image: linear-gradient(
				var(--secondaryColorTransparent),
				var(--secondaryColorTransparent)
			);
		}

		.logo {
			grid-area: logo;
			align-self: center;
		}

		.title {
			display: grid;
			height: 100%;
			grid-area: title;
			margin-inline-end: auto;
			font-size: 120%;
		}

		.top-links {
			display: grid;
			column-gap: 0.8rem;
			grid-auto-flow: column;
			grid-area: links;
			height: 100%;

			.dropdown {
				display: grid;
				grid-auto-flow: column;
				position: relative;
				height: 100%;

				.dropdown-item-container {
					display: grid;
					position: absolute;
					top: calc(3rem * 0.9);
					right: 20%;
					background-color: white;
					padding-block: 0.3rem;
					border-radius: 0.5rem;
					box-shadow: 0 0 5px gray;

					.dropdown-item {
						color: var(--textColor);
						text-decoration: none;
						text-transform: capitalize;
						padding: 0.1rem 0.8rem;
						background-color: var(--primaryColor);

						&:hover {
							text-decoration: underline;
						}
					}
				}
			}
		}

		.menu-button {
			grid-area: bars;
			overflow-x: hidden;
		}

		.drawer {
			grid-area: drawer;
			display: grid;
			padding-block-end: 1rem;

			.drawer-top-link {
				justify-self: start;
				margin-block-start: 0.8rem;
				margin-block-end: 0.2rem;
			}

			.drawer-bottom-link {
				justify-self: start;
				margin-inline-start: 2rem;
				border-inline-start: 2px solid white;
				padding-inline-start: 0.3rem;
			}
		}
	}
</style>
