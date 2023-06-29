<script lang="ts">
	import TextBase from '$components/Forms/TextBase.svelte';

	export let name: string = 'user-name';
	export let label: string = 'Your Name';
	export let bigColumns: OneThruTwelve = 6;
	export let smallColumns: OneThruSix = 6;
	export let forceNewRow: boolean = false;
	export let required: boolean = true;
</script>

<TextBase type="text" {name} {label} {bigColumns} {smallColumns} {forceNewRow} {required} />
