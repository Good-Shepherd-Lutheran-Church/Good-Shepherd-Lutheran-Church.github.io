<script lang="ts">
	import { getContext } from 'svelte';

	export let name: string;
	let id: string = name;
	export let type: InputTypes;
	export let label: string;
	export let bigColumns: OneThruTwelve = 12;
	export let smallColumns: OneThruSix = 6;
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
	class="TextBase-outer"
	style:grid-column-start={forceNewRow ? 1 : null}
	style:grid-column-end={$isCollapsed ? `span ${smallColumns}` : `span ${bigColumns}`}
>
	<span class="label-text">{label}{required ? reqIndicator : ''}</span>
	{#if type === 'text'}
		<input form={formId} {name} {id} type="text" {required} />
	{/if}
	{#if type === 'email'}
		<input form={formId} {name} {id} type="email" {required} />
	{/if}
	{#if type === 'url'}
		<input form={formId} {name} {id} type="url" {required} />
	{/if}
	{#if type === 'tel'}
		<input form={formId} {name} {id} type="tel" {required} />
	{/if}
	{#if type === 'search'}
		<input form={formId} {name} {id} type="search" {required} />
	{/if}
	{#if type === 'password'}
		<input form={formId} {name} {id} type="password" {required} />
	{/if}
	{#if type === 'hidden'}
		<input form={formId} {name} {id} type="hidden" {required} />
	{/if}
</label>

<style lang="scss">
	label.TextBase-outer {
		display: flex;
		flex-flow: column nowrap;
		row-gap: var(--formRowGap, 0.3rem);
		.label-text {
			display: inline-block;
		}
		input {
			font-size: inherit;
			padding: 0.3rem;
		}
	}
</style>
