<script lang="ts">
	import AutoGrid from '$components/AutoGrid.svelte';
	import Button from '$components/Button.svelte';
	import MainBlock from '$components/MainBlock.svelte';
	import Title from '$components/Title.svelte';
	import { setContext } from 'svelte';

	const doAlert = (formData: object) => {
		console.log(formData);
	};
	setContext('formContext', {
		formId: 'email-contact-form',
		labelInputGrouping: false,
		formLabelPosition: 'right'
	});
</script>

<MainBlock maxWidth="70ex">
	<Title title="Telephone" />
	<AutoGrid>
		<Button href="tel:1-850-932-9127" text="School (850) 932-9127" />
		<Button href="tel:1-850-932-3263" text="Church (850) 932-3263" />
	</AutoGrid>
	<Title title="Location" />
	<div class="map-container">
		<!-- <iframe
			title="Embedded Google map for the church and school."
			src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13766.1874799546!2d-87.0455735!3d30.3922225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8890db5cd86af007%3A0x81daadf374b2d0a1!2sGood%20Shepherd%20Lutheran%20Church%20and%20School!5e0!3m2!1sen!2sus!4v1687336466237!5m2!1sen!2sus"
			width="600"
			height="450"
			style="border:0;"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		/> -->
	</div>
</MainBlock>

<MainBlock maxWidth="90ex">
	<Title title="Email Us" />
</MainBlock>

<style lang="scss">
</style>
