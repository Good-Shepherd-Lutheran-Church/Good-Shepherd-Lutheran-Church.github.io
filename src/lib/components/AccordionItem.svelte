<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Rotate from './Rotate.svelte';
	import { slide } from 'svelte/transition';

	export let label: string;
	export let icon: FontIcon = { class: 'material-symbols-outlined', text: 'chevron_right' };

	const uniqueLabel: string = label + Math.round(Math.random() * 100000).toString();

	let activeAccordionLabel: Writable<string | null> = getContext('activeAccordionLabel');
	if ($activeAccordionLabel === null) {
		$activeAccordionLabel = uniqueLabel;
	}

	function handleClick() {
		if ($activeAccordionLabel === uniqueLabel) {
			$activeAccordionLabel = null;
		} else {
			$activeAccordionLabel = uniqueLabel;
		}
	}
</script>

<div class="AccordionItem-outer">
	<div class="label-container" on:click={handleClick} on:keypress={handleClick}>
		<Rotate state={$activeAccordionLabel === uniqueLabel}>
			<span class={`label-icon ${icon.class}`}>{icon.text}</span>
		</Rotate>
		<span class="label-text">{label}</span>
	</div>
	{#if $activeAccordionLabel === uniqueLabel}
		<div class="content-container" transition:slide>
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	div.AccordionItem-outer {
		.label-container {
			display: flex;
			align-items: center;
			background-image: linear-gradient(
				to top left,
				var(--secondaryColor),
				var(--secondaryColorDark)
			);
			color: var(--textSecondaryColor);
			padding: 0.2rem;
			border-block: 1px solid var(--primaryColor);
		}

		.content-container {
			display: flex;
			flex-flow: column nowrap;
			row-gap: 0.8rem;
			padding-block: 0.8rem;
			padding-inline: 0.5rem;
			color: var(--textPrimaryColor);
			text-indent: 2rem;
		}
	}
</style>
