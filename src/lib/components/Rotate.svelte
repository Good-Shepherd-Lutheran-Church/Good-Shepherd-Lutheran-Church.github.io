<script lang="ts">
	import { spring } from 'svelte/motion';
	export let state: boolean;
	export let startAngle: number = 0;
	export let endAngle: number = 90;
	export let options: { damping: number; stiffness: number; precision: number } = {
		damping: 0.4,
		stiffness: 0.2,
		precision: 0.3
	};
	let angle = spring(startAngle, options);
	$: $angle = state ? endAngle : startAngle;
</script>

<div class="Rotate-outer" style:rotate={$angle.toString() + 'deg'}>
	<slot />
</div>

<style lang="scss">
	.Rotate-outer {
		display: flex;
	}
</style>
