<script lang="ts">
	import { belowMd } from '$components/WindowWatcher.svelte';

	export let formId: string;
	export let defaultAction: Function | string;
	export let toOptions: { text: string; value: string; action?: () => any | string }[] | null =
		null;

	let selectedTo: string;
	let currentAction: Function | string;

	$: {
		for (const opt of toOptions as { text: string; value: string; action?: () => any | string }[]) {
			if (opt.value === selectedTo) {
				currentAction = opt.action !== undefined ? opt.action : defaultAction;
				break;
			}
		}
	}
	function interceptSubmit(evt: Event) {
		if (currentAction instanceof Function) {
			evt.preventDefault();
			currentAction(Object.fromEntries(new FormData(evt.target as HTMLFormElement)), evt);
		}
	}
</script>

<form
	class="EmailForm-outer"
	method="GET"
	action={currentAction instanceof Function ? null : currentAction}
	on:submit={interceptSubmit}
	id={formId}
	style:grid-template-columns={$belowMd ? '1fr' : '1fr 1fr'}
>
	<label for="name" class="input-group">
		<span class="label-text">Your Name</span>
		<input type="text" id="name" name="name" />
	</label>
	<label for="email" class="input-group">
		<span class="label-text">Your Email</span>
		<input type="email" name="email" id="email" />
	</label>
	{#if toOptions !== null}
		<label for="email-to" class="input-group">
			<span class="label-text">To</span>
			<select id="email-to" name="email-to" bind:value={selectedTo}>
				{#each toOptions as selectOption}
					<option value={selectOption.value}>{selectOption.text}</option>
				{/each}
			</select>
		</label>
	{/if}
	<label for="subject" class="input-group">
		<span class="label-text">Subject</span>
		<input type="text" name="subject" id="subject" />
	</label>

	<label for="message" class="input-group">
		<textarea name="message" id="message" cols="30" rows="10" />
	</label>

	<button>Send</button>
</form>

<style lang="scss">
	.EmailForm-outer {
		display: grid;
		width: 100%;
		.input-group {
			display: flex;
			width: 100%;
			.label-text {
				width: min-content;
				white-space: min-content;
			}
			input {
				width: 80%;
			}
		}
	}
</style>
