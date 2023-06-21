<script lang="ts">
	import type { ImageDirectory } from '$lib/utils/ImageImports/ImageImports';
	import Image from '$components/Image.svelte';
	import { belowSm } from '$components/WindowWatcher.svelte';
	import HoverBold from './HoverBold.svelte';
	import Toggle from './Toggle.svelte';
	import isVis from '$utils/IsVis/IsVis';

	export let imageDirectory: ImageDirectory;
	export let title: string | null = null;
	export let currentIndex: number = 0;
	export let maxWidths: MaxSize = { below: '100%', above: '60vw' };
	export let maxHeights: MaxSize = { below: '80vh', above: '60vh' };
	export let autoplayDelayMs: number | null = null;
	export let autoplayToggleEnabled: boolean = true;
	export let slideBackIcon: FontIcon = {
		class: 'material-symbols-outlined',
		text: 'keyboard_double_arrow_left'
	};
	export let slideForwardIcon: FontIcon = {
		class: 'material-symbols-outlined',
		text: 'keyboard_double_arrow_right'
	};
	export let thumbBackIcon: FontIcon = {
		class: 'material-symbols-outlined',
		text: 'chevron_left'
	};
	export let thumbForwardIcon: FontIcon = {
		class: 'material-symbols-outlined',
		text: 'chevron_right'
	};

	let thumbsEl: HTMLElement;
	let thumbRefs: HTMLElement[] = [];
	let autoplayHoverPause: boolean = false;

	function slideForward() {
		if (currentIndex >= imageDirectory.data.length - 1) {
			currentIndex = 0;
		} else {
			currentIndex++;
		}
		autoScrollThumbs();
	}

	function slideBack() {
		if (currentIndex === 0) {
			currentIndex = imageDirectory.data.length - 1;
		} else {
			currentIndex--;
		}
		autoScrollThumbs();
	}

	function autoScrollThumbs() {
		thumbRefs[currentIndex].scrollIntoView({
			behavior: 'smooth',
			block: 'nearest'
		});
	}

	if (autoplayDelayMs !== null) {
		setInterval(() => {
			if (thumbsEl && isVis(thumbsEl, 3) && !autoplayHoverPause && autoplayToggleEnabled) {
				slideForward();
			}
		}, autoplayDelayMs);
	}
</script>

<div class="Gallery-outer">
	<div
		class="Gallery-inner"
		on:mouseenter={() => (autoplayHoverPause = true)}
		on:mouseleave={() => (autoplayHoverPause = false)}
	>
		{#if title}
			<div class="title">{title}</div>
		{/if}

		<div
			class="viewport"
			style:aspect-ratio={imageDirectory.averageAr}
			style:max-width={$belowSm ? maxWidths.below : maxWidths.above}
			style:max-height={$belowSm ? maxHeights.below : maxHeights.above}
		>
			{#each imageDirectory.data as slideEntry, i}
				{#if i === currentIndex}
					<Image loading={i <= 3 ? 'eager' : 'lazy'} imageEntry={slideEntry} />
				{/if}
			{/each}
		</div>

		<div class="thumbs" bind:this={thumbsEl}>
			<div class="thumbs-inner">
				{#each imageDirectory.data as thumbEntry, i}
					<div
						class="thumb-image-wrapper"
						on:click={() => {
							currentIndex = i;
							autoScrollThumbs();
						}}
						on:keypress={() => {
							currentIndex = i;
							autoScrollThumbs();
						}}
						bind:this={thumbRefs[i]}
						style:filter={currentIndex === i ? 'grayscale(0)' : 'grayscale(1)'}
					>
						<Image src={thumbEntry.thumb} />
					</div>
				{/each}
			</div>
		</div>

		<div class="slide-back slide-button" on:click={slideBack} on:keypress={slideBack}>
			<HoverBold iconClass={slideBackIcon.class} text={slideBackIcon.text} />
		</div>

		<div class="slide-forward slide-button" on:click={slideForward} on:keypress={slideForward}>
			<HoverBold iconClass={slideForwardIcon.class} text={slideForwardIcon.text} />
		</div>

		<div
			class="thumb-back thumb-button"
			on:click={() => {
				thumbsEl.scrollBy({ left: -110, behavior: 'smooth' });
			}}
			on:keypress={() => {
				thumbsEl.scrollBy({ left: -110, behavior: 'smooth' });
			}}
		>
			<HoverBold iconClass={thumbBackIcon.class} text={thumbBackIcon.text} />
		</div>

		<div
			class="thumb-forward thumb-button"
			on:click={() => {
				thumbsEl.scrollBy({ left: 110, behavior: 'smooth' });
			}}
			on:keypress={() => {
				thumbsEl.scrollBy({ left: 110, behavior: 'smooth' });
			}}
		>
			<HoverBold iconClass={thumbForwardIcon.class} text={thumbForwardIcon.text} />
		</div>

		<div class="caption" />

		{#if autoplayDelayMs !== null}
			<div class="autoplay">
				<Toggle bind:state={autoplayToggleEnabled} label="Auto Play" name="gallery-autoplay" />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.Gallery-outer {
		display: flex;
		.Gallery-inner {
			width: 100%;
			box-shadow: var(--galleryShadow, var(--softShadow, 0px 0px 15px 5px #ddd));
			border: 1px solid lightgray;
			padding: 0.5rem;
			border-radius: 0.5rem;
			user-select: none;
			display: grid;
			row-gap: 0.3rem;
			place-items: center;
			grid-template:
				'title title title'
				'slide-back viewport slide-forward'
				'caption caption caption'
				'thumb-back thumbs thumb-forward'
				'.... autoplay autoplay'
				/ auto 1fr auto;

			.slide-button {
				display: flex;
				align-items: center;
				font-size: 3rem;
				height: 100%;
			}
			.thumb-button {
				display: flex;
				align-items: center;
				font-size: 3rem;
				height: 100%;
				font-size: 2rem;
			}

			.title {
				grid-area: title;
			}
			.slide-back {
				grid-area: slide-back;
			}
			.viewport {
				display: flex;
				grid-area: viewport;
				width: 100%;
			}
			.slide-forward {
				grid-area: slide-forward;
			}
			.caption {
				grid-area: caption;
			}
			.thumb-back {
				grid-area: thumb-back;
			}
			.thumbs {
				grid-area: thumbs;
				position: relative;
				width: 100%;
				height: 80px;
				overflow: hidden;
				scroll-padding-inline: 20px;

				.thumbs-inner {
					display: grid;
					grid-auto-columns: 100px;
					grid-auto-rows: 80px;
					grid-auto-flow: column;
					position: absolute;
					top: 0px;
					left: 0px;
				}
			}

			.thumb-forward {
				grid-area: thumb-forward;
			}

			.autoplay {
				grid-area: autoplay;
				justify-self: end;
			}
		}
	}
</style>
