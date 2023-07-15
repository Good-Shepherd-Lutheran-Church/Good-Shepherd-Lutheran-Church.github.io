<script lang="ts">
	import Spacing from '$utils/CssActions/Spacing';
	import { fly } from 'svelte/transition';

	export let text: string[];
	export let headingSizes: number[] = [];
	export let bgColor: string | null = null;
	export let bgImage: string | null = 'linear-gradient(#1127, #1127)';
	export let align: string = 'start';
	export let justify: string = 'start';
	export let translateX: string | null = null;
	export let translateY: string | null = null;
	export let spacing: Spacing = { margin: '1rem', padding: '1rem', marginBlockStart: '4rem' };
	export let radius: string | null = null;
	export let color: string = 'inherit';
	export let capitalize: boolean = false;
	export let border: string | null = null;
	export let baseFontSize: string | null = '1.3rem';
	export let transitionState: boolean = true;

	text.forEach((_, i) => {
		if (headingSizes[i] === undefined) {
			headingSizes.push(i + 1 <= 6 ? i + 1 : 6);
		}
	});
</script>

{#if transitionState}
	<div
		class="PageTitle-outer"
		use:Spacing={spacing}
		style:background-image={bgImage}
		style:background-color={bgColor}
		style:align-self={align}
		style:justify-self={justify}
		style:transform={`translateX(${translateX || '0%'}) translateY(${translateY || '0%'})`}
		style:border-radius={radius}
		style:color
		style:text-transform={capitalize ? 'capitalize' : null}
		style:border
		style:font-size={baseFontSize}
		transition:fly={{ y: -200 }}
	>
		{#each text as part, i}
			<svelte:element this={`h${headingSizes[i]}`}>{part}</svelte:element>
		{/each}
		<slot />
	</div>
{/if}

<style lang="scss">
	.PageTitle-outer {
		display: inline-flex;
		flex-direction: column;
	}
</style>
