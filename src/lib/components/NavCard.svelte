<script lang="ts">
	export let title: string;
	export let buttonText: string;
	export let href: string;
	export let slug: string | null = null;
	export let bgColor: string | null = null;
	export let linearGradient: string | null = null;
	export let imageEntry: ImageEntry | null = null;

	let bgImageActual: string = '';
	if (linearGradient !== null) {
	}
</script>

<div class="NavSlider-outer" style:background-color={bgColor}>
	<header>{title}</header>
	<svelte:element this={slug !== null ? 'p' : null} class="slug">{slug}</svelte:element>
	<a {href} class="button-link">{buttonText}</a>
</div>

<style lang="scss">
</style>
