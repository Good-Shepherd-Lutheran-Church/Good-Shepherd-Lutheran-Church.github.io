<script lang="ts">
	import Image from '$components/Image.svelte';

	export let imageEntry: ImageEntry | null = null;
	export let src: string | null = null;
	export let srcset: string | null = null;
	export let alt: string | null = null;
	export let hrule: boolean = false;
	export let label: string | null = null;
	export let labelTab: boolean = true;
	export let labelBox: boolean = false;
	export let lineWidth: string = '2px';
	export let lineColor: string = '#0004';
	export let justifyLabel: 'start' | 'center' | 'end' = 'center';

	if (labelBox === true) {
		labelTab = false;
	}
</script>

<div class="SubHeading-outer" style:--lineWidth={lineWidth} style:--lineColor={lineColor}>
	<svelte:element this={hrule ? 'div' : null} class="hrule" />

	<svelte:element
		this={label ? 'div' : null}
		class="label"
		class:label-tab={labelTab}
		class:label-box={labelBox}
		style:justify-self={justifyLabel}
		style:margin-inline-start={justifyLabel === 'start' ? '1rem' : 'revert'}
		style:margin-inline-end={justifyLabel === 'end' ? '1rem' : 'revert'}
	>
		<div class="start-border" />
		<div class="label-actual" style:padding={labelBox ? '0.5rem' : '0.2rem'}>{label}</div>
		<div class="end-border" />
	</svelte:element>
	<div class="image-wrapper">
		<svelte:component this={src || imageEntry ? Image : null} {src} {srcset} {alt} {imageEntry} />
	</div>
</div>

<style lang="scss">
	div.SubHeading-outer {
		display: grid;
		margin-block-start: 2rem;
		.hrule {
			border-block-start: var(--lineWidth) solid var(--lineColor);
		}
		.label {
			display: flex;
			flex-flow: row nowrap;
			color: var(--subHeadingColor, #0009);

			.label-actual {
				padding: 0.2rem;
				font-size: var(--subHeadingLabelFs, 1.2rem);
			}

			&.label-tab {
				.start-border {
					border-inline-start: var(--lineWidth) solid var(--lineColor);
					transform: skewX(30deg);
					transform-origin: bottom;
				}
				.end-border {
					border-inline-end: var(--lineWidth) solid var(--lineColor);
					transform: skewX(-30deg);
					transform-origin: bottom;
				}
				.label-actual {
					border-block-end: var(--lineWidth) solid var(--lineColor);
				}
			}

			&.label-box {
				border: 1px solid var(--lineColor);
			}
		}
		.image-wrapper {
			display: flex;
			max-height: 20vh;
		}
	}
</style>
