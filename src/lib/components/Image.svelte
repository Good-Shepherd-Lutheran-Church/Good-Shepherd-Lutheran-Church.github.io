<script lang="ts">
	export let objectFit: 'cover' | 'contain' | 'scale-down' = 'contain';
	export let objectPosition: string | null = null;
	export let imageEntry: ImageEntry | null = null;
	export let src: string | null = null;
	export let srcset: string | null = null;
	export let alt: string | null = null;
	export let loading: 'eager' | 'lazy' = 'eager';
	export let lightBoxEnable: boolean = false;

	if (imageEntry !== null) {
		src = imageEntry.src;
		srcset = imageEntry.srcset;
	}

	let isExpanded: boolean = false;

	function handleClick() {
		if (lightBoxEnable) {
			isExpanded = !isExpanded;
		}
	}
</script>

<div class="lightbox-background" class:expand={isExpanded} />

<img
	{loading}
	{src}
	{srcset}
	{alt}
	style:object-fit={objectFit}
	style:object-position={objectPosition}
	class:expand={isExpanded}
	on:click|stopPropagation={handleClick}
	on:keypress|stopPropagation={handleClick}
/>

<style lang="scss">
	img {
		width: 100%;
		height: auto;

		&.expand {
			position: fixed;
			top: calc(2vw + var(--navbarHeight, 3rem));
			left: 2vw;
			right: 0;
			bottom: 0;
			height: 96vh;
			width: 96vw;
			z-index: 1201;
		}
	}

	.lightbox-background {
		display: none;

		&.expand {
			display: block;
			position: fixed;
			top: var(--navbarHeight, 3rem);
			left: 0;
			right: 0;
			bottom: 0;
			background-color: darkgray;
			z-index: 1200;
		}
	}
</style>
