<script lang="ts">
	import Image from '$components/Image.svelte';
	import { setContext } from 'svelte';
	import AutoGrid from './AutoGrid.svelte';
	import Button from './Button.svelte';

	export let title: string | null = null;
	export let src: string | null = null;
	export let srcset: string | null = null;
	export let imageEntry: ImageEntry | null = null;
	export let defaultHref: string | null = null;
	export let text: string | null = null;
	export let links: LinkEntry[] | null = null;
	export let smallFontSize: string | null = '1.1em';
	export let bigFontSize: string | null = '1.1em';
	export let id: string | null = null;
	export let maxTextHeight: string | null = '12rem';
	export let textAlign: 'left' | 'right' | 'center' | 'justify' | null = null;

	setContext('inCard', true);
	let paragraphWidth: number;
	$: isSmallCard = paragraphWidth < 200;
</script>

<div class="Card-outer" {id}>
	{#if title}
		<svelte:element this={defaultHref ? 'a' : 'div'} class="title" href={defaultHref}
			>{title}</svelte:element
		>
	{/if}

	{#if imageEntry || src}
		<svelte:element this={defaultHref ? 'a' : 'div'} class="image" href={defaultHref}
			><Image {src} {srcset} {imageEntry} objectFit="scale-down" /></svelte:element
		>
	{/if}

	{#if text}
		<p
			bind:clientWidth={paragraphWidth}
			class="text"
			class:small-card={isSmallCard}
			style:font-size={isSmallCard ? smallFontSize : bigFontSize}
			style:max-height={maxTextHeight}
			style:text-align={textAlign}
			style:hyphens={textAlign === 'justify' ? 'auto' : 'none'}
		>
			{text}
		</p>
	{/if}

	<div class="slotted-content">
		<slot />
	</div>

	{#if links}
		<div class="links-wrapper">
			<AutoGrid min="5rem" max="1fr" fitOrFill="fit">
				{#each links as link}
					<Button {...link} />
				{/each}
			</AutoGrid>
		</div>
	{/if}
</div>

<style lang="scss">
	div.Card-outer {
		display: flex;
		flex-flow: column nowrap;
		border-radius: 1em;
		overflow: hidden;
		box-shadow: 0px 0px 8px 5px #ddd;
		row-gap: 0.6rem;

		.title {
			display: flex;
			justify-content: center;
			background-color: var(--cardTitleBgColor, var(--navbarBgColor));
			color: var(--cardTitleColor, var(--navbarColor));
			padding: 0.8rem;
			font-size: 1.5em;
			text-decoration: none;
		}
		a.title:hover {
			text-decoration: underline;
		}

		.image {
			display: flex;
			max-height: 40vh;
		}

		p.text {
			line-height: 1.5em;
			padding-inline: 1rem;
			overflow-y: auto;

			&.small-card {
				text-align: justify;
				hyphens: auto;
			}
		}

		:last-child:not(.image) {
			padding-block-end: 1rem;
		}

		.links-wrapper {
			padding-inline: 1rem;
		}

		.slotted-content {
			padding-inline: 1rem;
		}
	}
</style>
