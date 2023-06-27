<script lang="ts">
	import Title from './Title.svelte';
	import { below } from './WindowWatcher.svelte';

	export let title: string | null = null;
	export let tocTitle: string | null = null;
	export let preventToc: boolean = false;
	export let cols: string = '2 / 3';
	export let maxWidth: string | null = '100%';
</script>

<div
	class="MainBlock-outer"
	style:grid-column={cols}
	style:padding-inline={$below.md
		? 'var(--mainPaddingInlineSm, 1rem)'
		: 'var(--mainPaddingInlineLg, 2rem)'}
	style:padding-block={$below.md
		? 'var(--mainPaddingBlockSm, 0.5rem)'
		: 'var(--mainPaddingBlockLg, 2rem)'}
	style:max-width={maxWidth}
>
	{#if title}
		<Title {title} {tocTitle} {preventToc} size="h2" />
	{/if}

	<slot />
</div>

<style lang="scss">
	.MainBlock-outer {
		display: grid;
		row-gap: 0.8rem;
		width: 100%;
		box-sizing: border-box;
	}
</style>
