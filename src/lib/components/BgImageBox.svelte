<script lang="ts">
	// This is a component that acts as a container with a background image
	// and/or a linear-gradient. It might be used for things like heroes,
	// page titles, or cards.

	type BackgroundParameters = {
		position?: string;
		repeat?: string;
		size?: string;
		clip?: string;
		attachment?: string;
		origin?: string;
	};
	export let overlayMode: 'gradient' | 'darken' | 'lighten' | null = null;
	export let darkenColor: string = '#0008';
	export let lightenColor: string = '#FFF5';
	export let gradient: string = '';
	export let imageEntry: ImageEntry | null = null;
	export let display: string = 'grid';
	export let gridColumn: string | null = null;
	export let gridRow: string | null = null;
	export let bgPosition: string | null = null;
	export let bgSize: 'auto' | 'contain' | 'cover' | string | null = 'cover';
	export let bgRepeat: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y' | 'round' | 'space' | null =
		'no-repeat';
	export let bgAttachment: 'fixed' | 'local' | 'scroll' | string | null = null;
	export let bgOrigin: string | null = null;
	export let width: string | null = '100%';
	export let height: string | null = '100%';
	export let border: string | null = null;
	export let boxShadow: string | null = null;

	// Any supplied gradient will be overwritten if overlayMode is darken or lighten
	if (overlayMode === 'darken') {
		gradient = `${darkenColor} 100%, transparent 100%`;
	}
	if (overlayMode === 'lighten') {
		gradient = `${lightenColor} 100%, transparent 100%`;
	}

	// Construct background-image value
	let bgImageString = '';
	if (gradient !== '') {
		bgImageString += `linear-gradient(${gradient})${imageEntry !== null ? ', ' : ''}`;
	}
	if (imageEntry !== null) {
		bgImageString += `image-set(${imageEntry.imageSet})`;
	}
</script>

<div
	class="BgImageBox-outer"
	style:grid-column={gridColumn}
	style:grid-row={gridRow}
	style:display
	style:background-image={bgImageString}
	style:background-position={bgPosition}
	style:background-repeat={bgRepeat}
	style:background-size={bgSize}
	style:background-attachment={bgAttachment}
	style:background-origin={bgOrigin}
	style:width
	style:height
	style:border
	style:box-shadow={boxShadow}
>
	<slot />
</div>

<style lang="scss">
	.BgImageBox-outer {
	}
</style>
