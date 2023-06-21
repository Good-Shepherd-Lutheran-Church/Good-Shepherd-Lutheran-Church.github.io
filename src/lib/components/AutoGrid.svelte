<script lang="ts">
	export let fitOrFill: 'fit' | 'fill' = 'fit';
	export let min: string = '100px';
	export let max: string = 'max-content';
	export let rowGap: string | null = '1rem';
	export let columnGap: string | null = '0.5rem';
	export let justify: string = 'center';
</script>

<div
	class="AutoGrid-outer"
	style:grid-template-columns={`repeat(auto-${fitOrFill}, minmax(${min}, ${max}))`}
	style:row-gap={rowGap}
	style:column-gap={columnGap}
	style:justify-content={justify}
>
	<slot />
</div>

<style lang="scss">
	.AutoGrid-outer {
		display: grid;
	}
</style>
