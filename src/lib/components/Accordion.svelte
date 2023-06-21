<script lang="ts">
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	const activeAccordionLabel: Writable<string | null> = writable(null);
	setContext('activeAccordionLabel', activeAccordionLabel);
</script>

<div class="Accordion-outer">
	<slot />
</div>

<style lang="scss">
	div.Accordion-outer {
		font-size: 1.2rem;
		border: 1px solid var(--borderColor);
	}
</style>
