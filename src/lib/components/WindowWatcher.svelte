<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	export const belowXl = writable();
	export const belowLg = writable();
	export const belowMd = writable();
	export const belowSm = writable();
</script>

<script lang="ts">
	export let breakpoints: { xl: number; lg: number; md: number; sm: number } = {
		xl: 1200,
		lg: 992,
		md: 768,
		sm: 576
	};
	let windowOuterWidth: number;

	$: {
		if (windowOuterWidth !== undefined) {
			$belowSm = windowOuterWidth < breakpoints.sm ? true : false;
			$belowMd = windowOuterWidth < breakpoints.md ? true : false;
			$belowLg = windowOuterWidth < breakpoints.lg ? true : false;
			$belowXl = windowOuterWidth < breakpoints.xl ? true : false;
		} else {
			$belowSm = undefined;
			$belowMd = undefined;
			$belowLg = undefined;
			$belowXl = undefined;
		}
	}
</script>

<svelte:window bind:outerWidth={windowOuterWidth} />
