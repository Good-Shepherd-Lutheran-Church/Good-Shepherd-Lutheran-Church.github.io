<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import Toc, { tocList } from '$components/Toc.svelte';
	import WindowWatcher, { below } from '$components/WindowWatcher.svelte';
	import { colors } from '$lib/colors';
	import { onMount } from 'svelte';
	import { forceSidebar } from '$lib/stores';
	import CrossLogo from '$images/transparent-cross-white-scaled.png?url';

	onMount(() => {
		for (const color in $colors.lightTheme) {
			const colorValue = ($colors.lightTheme as { [key: string]: string })[color];
			document.body.style.setProperty(`--${color}`, colorValue);
		}
	});
</script>

<WindowWatcher />
<div
	class="main-content-grid"
	class:no-sidebar={!$forceSidebar && ($tocList.size < 3 || $below.md)}
>
	<Navbar title="Good Shepherd" logoSrc={CrossLogo} />
	<div class="toc-wrapper">
		<Toc />
	</div>
	<slot />
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto:wght@200;400;600&display=swap');

	:root {
		font-family: 'Montserrat', sans-serif;
		--softShadow: 0px 0px 8px 5px #ddd;
		scroll-behavior: smooth !important;
	}
	:global(*) {
		padding: 0;
		margin: 0;
	}
	.main-content-grid {
		display: grid;
		grid-template-columns: [fullbleed-start sidebar-start] 1fr [sidebar-end main-start] 5fr [main-end fullbleed-end];
		.toc-wrapper {
			display: contents;
		}
	}

	.main-content-grid.no-sidebar {
		grid-template-columns: [fullbleed-start sidebar-start] 0 [sidebar-end main-start] 1fr [main-end fullbleed-end];
		justify-items: center;
		.toc-wrapper {
			display: none;
		}
	}
</style>
