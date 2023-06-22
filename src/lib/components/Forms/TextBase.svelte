<script context="module" lang="ts">
	type FormLabelPosition = 'left' | 'right' | 'top' | 'bottom';
	interface FormContext {
		formId: string;
		labelInputGrouping?: boolean;
		formLabelPosition?: FormLabelPosition;
	}
</script>

<script lang="ts">
	import { getContext } from 'svelte';

	export let name: string;
	export let label: string;
	export let type: string;
	export let id: string;
	export let placeholder: string | null = null;
	export let required: boolean = false;
	export let requiredIndicator: string = ' *';

	const formContext: FormContext | undefined = getContext('formContext');
	if (typeof formContext === 'undefined') {
		throw new Error(
			`Fatal: TextBase needs a context called 'formContext' with a type of 'FormContext'`
		);
	}
	const labelInputGrouping: boolean = formContext.labelInputGrouping || false;
	const formLabelPosition: FormLabelPosition = formContext.formLabelPosition || 'left';
	const labelPositions: Record<string, { direction: 'row' | 'column'; order: 1 | 3 }> = {
		left: { direction: 'row', order: 1 },
		right: { direction: 'row', order: 3 },
		top: { direction: 'column', order: 1 },
		bottom: { direction: 'column', order: 3 }
	};

	let labelOrder: 1 | 3 | null = null;
	let labelDirection: 'row' | 'column' | null = null;
	let inputOrder: 2 | null = null;
	if (labelInputGrouping === true) {
		labelOrder = labelPositions[formLabelPosition].order;
		labelDirection = labelPositions[formLabelPosition].direction;
		inputOrder = 2;
	}
</script>

<div
	class="TextBase-outer"
	style:display={labelInputGrouping ? 'flex' : 'contents'}
	style:flex-flow={`${labelDirection} nowrap`}
	style:row-gap={labelInputGrouping ? '0.8rem' : null}
	style:column-gap={labelInputGrouping ? '0.8rem' : null}
>
	<label style:order={labelOrder} form={formContext.formId} for={name}
		>{label}{required ? requiredIndicator : ''}</label
	>
	<input
		style:order={inputOrder}
		form={formContext.formId}
		{type}
		{name}
		{id}
		{placeholder}
		{required}
	/>
</div>

<style lang="scss">
</style>
