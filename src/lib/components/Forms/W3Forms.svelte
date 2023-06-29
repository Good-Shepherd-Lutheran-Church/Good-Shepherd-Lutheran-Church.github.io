<script lang="ts">
	import { afterUpdate, getContext } from 'svelte';

	const { callbackArray, formDataObj }: FormContext = getContext('formContext');

	async function web3formsSubmitter(evt: SubmitEvent) {
		const json = JSON.stringify($formDataObj);

		return fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		})
			.then(async (response): Promise<CallbackResult> => {
				let json = await response.json();
				if (response.status === 200) {
					return { isError: false, message: json.message };
				}
				return { isError: true, message: json.message };
			})
			.catch((error) => {
				return { isError: true, message: error };
			});
	}

	callbackArray.push(web3formsSubmitter);
</script>

<input
	type="hidden"
	name="from_name"
	value={`Website Email (${$formDataObj['recipient'] || 'church'})`}
/>
<button
	type="submit"
	formaction="https://api.web3forms.com/submit"
	formmethod="post"
	style:font-size="inherit"
	style:padding-block="0.3rem"
	style:grid-column={'1 / span 2'}>Send</button
>

<input type="hidden" name="access_key" value="b88462e0-ea59-4b42-8fc7-a819df01565d" />

<style lang="scss">
</style>
