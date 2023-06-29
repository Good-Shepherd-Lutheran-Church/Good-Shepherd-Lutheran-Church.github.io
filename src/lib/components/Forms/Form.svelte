<script lang="ts">
	import { below } from '$components/WindowWatcher.svelte';
	import { onMount, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { slide } from 'svelte/transition';

	// FormContext init
	export let formId: string;
	export let reqIndicator: string = ' *';
	export let callbackArray: CallbackArray = [];
	export let formDataObj: FormDataObj = writable({});

	let isCollapsed: Writable<boolean> = writable(true);
	let hasRequired: Writable<boolean> = writable(false);
	setContext<FormContext>('formContext', {
		formId,
		isCollapsed,
		reqIndicator,
		callbackArray,
		formDataObj,
		hasRequired
	});

	export let formState: FormState = 'awaitUser';
	export let pendingMessage: string = 'Working';
	export let successMessage: string = 'Form submitted.';
	export let errorMessage: string = 'Sorry, we encountered an error.';

	export let breakOn: BPNames = 'md';
	export let reqExplain: string = '* - required';
	export let updateDataOnInput: boolean = true;

	let errorCode: string;

	async function onSubmit(evt: SubmitEvent) {
		evt.preventDefault();
		fireFormDataEvent();
		if (callbackArray.length) {
			formState = 'pending';
			for (const [i, callback] of callbackArray.entries()) {
				const pass = await callback(evt, formDataObj);
				errorCode = pass.message;
				if (pass.isError) {
					formState = 'fail';
					return;
				}
				// Can't be error now
				if (i >= callbackArray.length - 1) {
					formState = 'success';
				}
			}
		}
	}

	$: $isCollapsed = $below[breakOn] || false;

	let formElement: HTMLFormElement;

	function onFormData(evt: FormDataEvent) {
		$formDataObj = Object.fromEntries(evt.formData);
	}

	function fireFormDataEvent() {
		new FormData(formElement);
	}

	function onInput() {
		if (updateDataOnInput) {
			fireFormDataEvent();
		}
	}

	onMount(() => {
		fireFormDataEvent();
	});
</script>

<form
	id={formId}
	class="Form-outer"
	bind:this={formElement}
	style:grid-template-columns={$isCollapsed ? 'repeat(6, 1fr)' : 'repeat(12, 1fr)'}
	style:font-size="1.1rem"
	on:input={onInput}
	on:formdata={onFormData}
	on:submit={onSubmit}
>
	{#if formState === 'awaitUser'}
		<slot />
	{:else if formState === 'pending'}
		<div class="state-display pending-display">
			<i class="state-icon pending-icon material-symbols-outlined">pending</i>
			<p class="state-text pending-text">{pendingMessage}</p>
		</div>
	{:else if formState === 'success'}
		<div class="state-display success-display">
			<i class="state-icon success-icon material-symbols-outlined" transition:slide={{ axis: 'x' }}
				>check_circle</i
			>
			<p class="state-text success-text" transition:slide={{ axis: 'y' }}>{successMessage}</p>
		</div>
	{:else if formState === 'fail'}
		<div class="state-display error-display" transition:slide>
			<i class="state-icon error-icon material-symbols-outlined">error</i>
			<p class="state-text error-text">{errorMessage} (Code: {errorCode})</p>
		</div>
	{/if}
	{#if $hasRequired}
		<strong style:grid-column={'1 / span 6'}>{reqExplain}</strong>
	{/if}
</form>

<style lang="scss">
	.Form-outer {
		display: grid;
		gap: 1rem;
		.state-display {
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			gap: 1.2rem;
			font-size: 1.3em;

			.state-icon {
				font-size: 500%;
				&.state-icon.error-icon {
					color: var(--errorColor, darkred);
				}
				&.state-icon.pending-icon {
					color: var(--secondaryColor, darkblue);
				}
				&.state-icon.success-icon {
					color: var(--success, darkgreen);
				}
			}
		}
	}
</style>
