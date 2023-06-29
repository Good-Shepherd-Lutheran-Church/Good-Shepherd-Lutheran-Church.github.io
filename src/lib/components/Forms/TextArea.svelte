<script lang="ts">
	import { getContext } from 'svelte';

	export let name: string;
	let id: string = name;
	export let label: string | null = null;
	export let bigColumns: OneThruTwelve = 9;
	export let smallColumns: OneThruSix = 6;
	export let forceNewRow: boolean = true;
	export let required: boolean = true;

	const formContext: FormContext = getContext('formContext');
	const { formId, isCollapsed, reqIndicator, hasRequired } = formContext;
	if (required) {
		$hasRequired = true;
	}
</script>

<label
	for={id}
	form={formId}
	class="TextArea-outer"
	style:grid-column-start={forceNewRow ? 1 : null}
	style:grid-column-end={$isCollapsed ? `span ${smallColumns}` : `span ${bigColumns}`}
>
	<svelte:element this={label === null ? null : 'label'} class="label-text">{label}</svelte:element>
	<textarea form={formId} {id} {name} rows="8" {required} />
</label>

<style lang="scss">
	label.TextArea-outer {
		display: flex;
		flex-flow: column nowrap;
		row-gap: var(--formRowGap, 0.3rem);
		.label-text {
			display: inline-block;
		}
		textarea {
			padding: 0.3rem;
			font-size: inherit;
		}
	}
</style>
