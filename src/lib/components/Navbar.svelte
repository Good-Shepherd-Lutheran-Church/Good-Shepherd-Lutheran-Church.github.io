<script context="module" lang="ts">
	export const navbarStartsTransparent: Writable<boolean> = writable(false);
</script>

<script lang="ts">
	import LinksFromPaths from '$utils/LinksFromPaths/LinksFromPaths';
	import HoverBold from '$components/HoverBold.svelte';
	import { below, zeroScroll } from '$components/WindowWatcher.svelte';
	import { onMount } from 'svelte';
	import { beforeNavigate } from '$app/navigation';
	import { slide } from 'svelte/transition';
	import { spring } from 'svelte/motion';
	import Rotate from './Rotate.svelte';
	import { writable, type Writable } from 'svelte/store';

	export let homeHref: string = '/';
	export let title: string | null = null;
	export let subtitle: string | null = null;
	export let src: string | null = null;
	export let alt: string = 'Our Logo';
	export let dropdownIcon: FontIcon = { class: 'material-symbols-outlined', text: 'chevron_right' };
	export let menuIcon: FontIcon = { class: 'material-symbols-outlined', text: 'menu' };
	export let cols: string = '1 / 3';

	const rootDirectories = new LinksFromPaths().rootDirectory.subdirectories;
	let drawerOpen = false;
	let currentDropdown: number | null;
	const menuIconRotation = spring(0, { damping: 0.4 });
	$: $menuIconRotation = drawerOpen ? 90 : 0;
	function dropdownClicked(i: number) {
		if (i === currentDropdown) {
			currentDropdown = null;
		} else {
			currentDropdown = i;
		}
	}
	onMount(() => {
		window.addEventListener('click', () => {
			currentDropdown = null;
			drawerOpen = false;
		});
	});
	beforeNavigate(() => {
		$navbarStartsTransparent = false;
		currentDropdown = null;
		drawerOpen = false;
	});
	$: if ($below.sm) {
		currentDropdown = null;
	} else {
		drawerOpen = false;
	}
	let isHovered: boolean = false;
</script>

<nav
	class="Navbar-outer"
	style:grid-column={cols}
	class:transparent={!isHovered && $zeroScroll && $navbarStartsTransparent}
	class:fixed={$navbarStartsTransparent}
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
>
	{#if src}
		<div class="navbar-logo-container">
			<a href={homeHref} class="navbar-top-link">
				<img {src} {alt} />
			</a>
		</div>
	{/if}

	{#if title}
		<div class="navbar-title-container">
			<a href={homeHref} class="navbar-top-link"><HoverBold text={title} /></a>
		</div>
	{/if}

	{#if subtitle}
		<div class="navbar-subtitle-container">
			<a href={homeHref} class="navbar-top-link"><HoverBold text={subtitle} /></a>
		</div>
	{/if}

	<div class="navbar-links-expanded">
		{#if !$below.sm}
			{#each rootDirectories as topDirectory, i}
				{#if topDirectory.subdirectories.length}
					<div class="dropdown">
						<div
							class="dropdown-indicator"
							on:click|stopPropagation={() => dropdownClicked(i)}
							on:keypress|stopPropagation={() => dropdownClicked(i)}
						>
							<Rotate state={currentDropdown === i}
								><HoverBold iconClass={dropdownIcon.class} text={dropdownIcon.text} /></Rotate
							>
						</div>
						<div class="dropdown-label">
							<a href={topDirectory.currentPath} class="navbar-top-link"
								><HoverBold text={topDirectory.name} /></a
							>
						</div>
						{#if i === currentDropdown}
							<div class="dropdown-link-container" transition:slide={{ duration: 80 }}>
								{#each topDirectory.subdirectories as subdirectory}
									<a href={subdirectory.currentPath} class="dropdown-link">{subdirectory.name}</a>
								{/each}
							</div>
						{/if}
					</div>
				{:else}
					<a
						href={topDirectory.currentPath}
						class="navbar-top-link"
						style:order={topDirectory.name === 'contact' ? '9' : null}
						><HoverBold text={topDirectory.name} /></a
					>
				{/if}
			{/each}
		{/if}
	</div>

	{#if $below.sm}
		<div
			class="navbar-toggle"
			on:click|stopPropagation={() => {
				drawerOpen = !drawerOpen;
			}}
			on:keypress|stopPropagation={() => {
				drawerOpen = !drawerOpen;
			}}
		>
			<Rotate state={drawerOpen}
				><HoverBold iconClass={menuIcon.class} text={menuIcon.text} /></Rotate
			>
		</div>
	{/if}

	{#if $below.sm && drawerOpen}
		<div class="navbar-links-collapsed" transition:slide>
			{#each rootDirectories as topDirectory}
				<a href={topDirectory.currentPath} class="navbar-collapsed-item"
					><HoverBold text={topDirectory.name} /></a
				>
				{#if topDirectory.subdirectories.length}
					{#each topDirectory.subdirectories as subitem}
						<div class="navbar-subitem-group">
							<a href={subitem.currentPath} class="navbar-collapsed-subitem"
								><HoverBold text={subitem.name} /></a
							>
						</div>
					{/each}
				{/if}
			{/each}
		</div>
	{/if}
</nav>

<style lang="scss">
	nav.Navbar-outer {
		box-shadow: 0px 0px 2px 2px #0005;
		justify-self: stretch !important;
		position: sticky;
		top: 0px;
		left: 0px;
		right: 0px;
		font-family: var(--navbarFont, 'Montserrat', sans-serif);
		font-weight: 300;
		display: grid;
		grid-template:
			'logo title subtitle expanded toggle' var(--navbarHeight, 3rem)
			'drawer drawer drawer drawer drawer'
			/ auto auto 1fr auto auto;
		align-items: center;
		background-image: linear-gradient(
			to bottom left,
			var(--secondaryColor),
			var(--secondaryColorDark)
		);
		color: var(--primaryColor, white);
		font-size: var(--navbarBaseFs, 1.4rem);
		padding-inline: 1rem;
		user-select: none;
		z-index: 999;

		&.fixed {
			position: fixed;
			top: 0;
		}
		&.transparent {
			background-image: linear-gradient(
				var(--secondaryColorTransparent),
				var(--secondaryColorTransparent)
			);
		}

		.navbar-top-link {
			color: inherit;
			text-decoration: none;
		}

		.navbar-logo-container {
			grid-area: logo;
		}

		.navbar-title-container {
			grid-area: title;
			font-size: var(--navbarTitleFs, 1.6rem);
		}

		.navbar-subtitle-container {
			grid-area: subtitle;
		}

		.navbar-links-expanded {
			grid-area: expanded;
			display: flex;
			column-gap: 1rem;
			justify-items: center;
			align-items: center;

			.dropdown {
				display: flex;
				align-items: center;
				position: relative;

				.dropdown-indicator {
					font-size: 120%;
					margin-inline-end: -4px;
					cursor: pointer;
				}

				.dropdown-link-container {
					display: flex;
					flex-flow: column nowrap;
					position: absolute;
					top: calc(var(--navbarHeight, 2rem));
					right: 30%;
					border: 1px solid gray;
					border-radius: 0.2rem;
					overflow: hidden;
					row-gap: 0.3rem;
					background-color: var(--dropdownBg, var(--primaryColor, white));

					.dropdown-link {
						font-size: var(--dropdownLinkFs, 1.3rem);
						text-transform: capitalize;
						text-decoration: none;
						color: var(--dropdownColor, var(--textColor, black));
						background-color: var(--dropdownBg, var(--primaryColor, white));
						padding-inline: 0.3rem;

						&:hover {
							color: var(--dropdownBg, var(--primaryColor, white));
							background-color: var(--dropdownColor, var(--secondaryColorDark, black));
						}
					}
				}
			}
		}

		.navbar-links-collapsed {
			grid-area: drawer;
			padding-block: 1rem;
			.navbar-collapsed-item {
				color: inherit;
			}
			.navbar-subitem-group {
				padding-inline-start: 0.3rem;
				margin-inline-start: 10%;
				border-inline-start: 2px solid var(--primaryColor, white);
				.navbar-collapsed-subitem {
					color: inherit;
				}
			}
		}

		.navbar-toggle {
			grid-area: toggle;
		}
	}
</style>
