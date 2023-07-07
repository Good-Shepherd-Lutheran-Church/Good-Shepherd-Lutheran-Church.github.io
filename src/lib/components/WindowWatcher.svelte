<script context="module" lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { writable, type Writable } from 'svelte/store';
	export let below: Writable<Record<BPNames, boolean | undefined>> = writable({
		xs: false,
		sm: undefined,
		md: undefined,
		lg: undefined,
		xl: undefined
	});

	export const zeroScroll: Writable<boolean> = writable(false);
</script>

<script lang="ts">
	export let breakpoints: Record<BPNames, number> = {
		xl: 1200,
		lg: 992,
		md: 768,
		sm: 576,
		xs: 0
	};

	export let zeroScrollMargin = 50;
	let windowOuterWidth: number;

	$: {
		if (windowOuterWidth !== undefined) {
			$below.sm = windowOuterWidth < breakpoints.sm ? true : false;
			$below.md = windowOuterWidth < breakpoints.md ? true : false;
			$below.lg = windowOuterWidth < breakpoints.lg ? true : false;
			$below.xl = windowOuterWidth < breakpoints.xl ? true : false;
		}
	}

	let scrollY: number;

	$: {
		if (scrollY !== undefined) {
			$zeroScroll = scrollY <= zeroScrollMargin;
		}
	}
</script>

<svelte:window bind:scrollY bind:outerWidth={windowOuterWidth} />
