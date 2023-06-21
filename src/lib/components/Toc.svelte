<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	export const tocList = writable(new Map<string, string>());
</script>

<script lang="ts">
	import HoverBold from '$components/HoverBold.svelte';

	export let label: string | null = 'This Page';
	export let divider: FontIcon | null = null;
	//{
	//	class: 'material-symbols-outlined',
	//	text: 'horizontal_rule'
	//};
	export let cols: string = '1 / 2';
	export let hide: boolean = false;
</script>

<div class="Toc-outer" style:display={hide ? 'none' : 'grid'} style:grid-column={cols}>
	{#if label}
		<h3 class="label">{label}</h3>
	{/if}
	{#each [...$tocList] as entry}
		{#if divider}
			<div class={`divider ${divider.class}`}>{divider.text}</div>
		{/if}
		<a
			href={`#${entry[0]}`}
			class="toc-link"
			style:padding-block={divider !== null ? '0px' : '0.3rem'}><HoverBold text={entry[1]} /></a
		>
	{/each}
</div>

<style lang="scss">
	.Toc-outer {
		margin-block-start: 3rem;
		align-self: start;
		justify-self: center;
		position: sticky;
		top: calc(var(--navbarHeight, 3rem) * 1.2);
		justify-items: center;
		color: var(--tocColor, gray);
		font-size: 1.2rem;
		padding: 1rem;
		max-width: 100%;
		overflow: hidden;
		text-align: center;
		border-radius: 1rem;
		background-color: #fefeff;
		box-shadow: var(--galleryShadow, var(--softShadow, 0px 0px 8px 5px #ddd));

		.divider {
			line-height: 1rem;
		}

		.toc-link {
			text-decoration: none;
			color: inherit;
		}
	}
</style>
