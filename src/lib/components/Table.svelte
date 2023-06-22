<script lang="ts">
	export let columnCount: number | null = null;
	export let columnLabels: string[] | null = null;
	export let data: string[] | null = null;
	export let borders: boolean = true;
	export let boldLabels: boolean = true;
	export let labelTextAlign: 'start' | 'center' | 'end' = 'center';
	export let labelTextJustify: 'start' | 'center' | 'end' = 'start';
	export let cellTextAlign: 'start' | 'center' | 'end' = 'center';
	export let cellTextJustify: 'start' | 'center' | 'end' = 'start';

	if (columnCount === null && columnLabels === null) {
		throw new Error('Fatal: Table must be passed columnCount or columnLabels.');
	}

	columnCount = columnLabels !== null ? columnLabels.length : columnCount;
</script>

<div class="Table-outer" style:grid-template-columns={`repeat(${columnCount}, auto)`}>
	{#if columnLabels !== null}
		{#each columnLabels as columnLabel}
			<span
				class="column-label"
				style:font-weight={boldLabels ? 'bold' : null}
				style:border={borders ? '1px solid gray' : null}
				style:align-items={labelTextAlign}
				style:justify-content={labelTextJustify}>{columnLabel}</span
			>
		{/each}
	{/if}
	{#if $$slots.default}
		<slot />
	{:else if data}
		{#each data as cell}
			<span
				class="cell"
				style:border={borders ? '1px solid gray' : null}
				style:align-items={cellTextAlign}
				style:justify-content={cellTextJustify}>{cell}</span
			>
		{/each}
	{/if}
</div>

<style lang="scss">
	.Table-outer {
		display: grid;
		font-size: var(--tableFs);

		.column-label,
		.cell {
			display: flex;
			padding-block: 0.2em;
			padding-inline: 0.6rem;
		}
	}
</style>
