<script lang="ts">
	import { below } from '$components/WindowWatcher.svelte';
	import Image from '$components/Image.svelte';

	export let text: string | string[] | null = null;
	export let src: string | null = null;
	export let srcset: string | null = null;
	export let alt: string | null = null;
	export let imageEntry: ImageEntry | null = null;
	export let float: 'left' | 'right' | null = 'left';
	export let imageMaxWidth: { below: string; above: string } = { below: '80%', above: '50%' };
	export let imageMaxHeight: { below: string; above: string } = { below: '70vh', above: '60vh' };
	export let floatPadding: string = '1rem';
	export let centerText: boolean = false;
	let ar: number = 1;
	if (imageEntry) {
		ar = imageEntry.ar;
	}
	let widthValue: string;
	let heightValue: string;
	$: {
		if (ar >= 1) {
			widthValue = $below.md ? imageMaxWidth.below : imageMaxWidth.above;
			heightValue = 'revert';
		} else {
			widthValue = 'revert';
			heightValue = $below.md ? imageMaxHeight.below : imageMaxHeight.above;
		}
	}

	if (!(text instanceof Array) && text !== null) {
		text = [text];
	}
</script>

<article class="Article-outer" style:display={$below.md ? 'flex' : 'block'}>
	<div
		class="image-wrapper"
		style:float={$below.md ? 'none' : float}
		style:width={widthValue}
		style:height={heightValue}
		style:padding-inline-start={!$below.md && float === 'right' ? floatPadding : '0px'}
		style:padding-inline-end={!$below.md && float === 'left' ? floatPadding : '0px'}
		style:margin-inline={$below.md ? 'auto' : null}
	>
		<Image {src} {srcset} {alt} {imageEntry} objectFit="scale-down" />
	</div>

	{#if text}
		{#each text as paragraph, i}
			<p style:text-align={centerText ? 'center' : null} class:first-paragraph={i === 1}>
				{@html paragraph}
			</p>
		{/each}
	{/if}

	<svelte:element this={$$slots.default ? 'div' : null} class="slotted-content">
		<slot />
	</svelte:element>
</article>

<style lang="scss">
	article.Article-outer {
		flex-flow: column nowrap;
		row-gap: 1rem;
		.image-wrapper {
			display: flex;
		}
		p {
			font-size: var(--articleParagraphFs, var(--paragraphFs, 1.2rem));
			line-height: var(--articleParagraphLh, var(--paragraphLh, 2rem));
			color: var(--articleParagraphColor, var(--paragraphColor, #000a));
			&:not(:last-of-type) {
				padding-block-end: 1rem;
			}
		}
	}
</style>
