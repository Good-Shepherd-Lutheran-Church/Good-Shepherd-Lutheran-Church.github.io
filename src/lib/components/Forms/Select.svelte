<script lang="ts">
	import { getContext } from 'svelte';

	export let name: string;
	let id: string = name;
	export let label: string;
	export let bigColumns: OneThruTwelve = 4;
	export let smallColumns: OneThruSix = 4;
	export let forceNewRow: boolean = false;
	export let required: boolean = false;

	const formContext: FormContext = getContext('formContext');
	const { formId, isCollapsed, reqIndicator, hasRequired } = formContext;
	if (required) {
		$hasRequired = true;
	}
</script>

<label
	for={id}
	form={formId}
	class="Select-outer"
	style:grid-column-start={forceNewRow ? 1 : null}
	style:grid-column-end={$isCollapsed ? `span ${smallColumns}` : `span ${bigColumns}`}
>
	<span class="label-text">{label}{required ? reqIndicator : ''}</span>
	<select form={formId} {id} {name}>
		<slot />
	</select>
</label>

<style lang="scss">
	label.Select-outer {
		display: flex;
		flex-flow: column nowrap;
		row-gap: var(--formRowGap, 0.3rem);

		.label-text {
			display: inline-block;
		}
		select {
			font-size: inherit;
			padding: 0.3rem;
		}
	}
</style>
