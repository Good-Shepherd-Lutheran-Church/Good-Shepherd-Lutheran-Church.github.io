<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';
	export let below: Writable<Record<BPNames, boolean | undefined>> = writable({
		xs: false,
		sm: undefined,
		md: undefined,
		lg: undefined,
		xl: undefined
	});
</script>

<script lang="ts">
	export let breakpoints: Record<BPNames, number> = {
		xl: 1200,
		lg: 992,
		md: 768,
		sm: 576,
		xs: 0
	};
	let windowOuterWidth: number;

	$: {
		if (windowOuterWidth !== undefined) {
			$below.sm = windowOuterWidth < breakpoints.sm ? true : false;
			$below.md = windowOuterWidth < breakpoints.md ? true : false;
			$below.lg = windowOuterWidth < breakpoints.lg ? true : false;
			$below.xl = windowOuterWidth < breakpoints.xl ? true : false;
		}
	}
</script>

<svelte:window bind:outerWidth={windowOuterWidth} />
