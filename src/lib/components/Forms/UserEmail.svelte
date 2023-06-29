<script lang="ts">
	import TextBase from '$components/Forms/TextBase.svelte';

	export let name: string = 'user-email';
	export let label: string = 'Your Email';
	export let bigColumns: OneThruTwelve = 6;
	export let smallColumns: OneThruSix = 6;
	export let forceNewRow: boolean = false;
	export let required: boolean = false;
</script>

<TextBase type="email" {name} {label} {bigColumns} {smallColumns} {forceNewRow} {required} />
