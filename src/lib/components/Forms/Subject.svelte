<script lang="ts">
	import TextBase from '$components/Forms/TextBase.svelte';

	export let name: string = 'subject';
	export let label: string = 'Subject';
	export let bigColumns: OneThruTwelve = 9;
	export let smallColumns: OneThruSix = 6;
	export let forceNewRow: boolean = true;
	export let required: boolean = false;
</script>

<TextBase type="text" {name} {label} {bigColumns} {smallColumns} {forceNewRow} {required} />
