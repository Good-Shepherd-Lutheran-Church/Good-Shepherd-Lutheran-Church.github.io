<script lang="ts">
	export let fitOrFill: 'fit' | 'fill' = 'fit';
	export let min: string = '100px';
	export let max: string = 'max-content';
	export let rowGap: string | null = '1rem';
	export let columnGap: string | null = '0.5rem';
</script>

<div
	class="AutoGrid-outer"
	style:grid-template-columns={`repeat(auto-${fitOrFill}, minmax(${min}, ${max}))`}
	style:row-gap={rowGap}
	style:column-gap={columnGap}
>
	<slot />
</div>

<style lang="scss">
	.AutoGrid-outer {
		display: grid;
		justify-content: center;
	}
</style>
