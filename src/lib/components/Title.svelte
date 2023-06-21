<script lang="ts">
	import TocTarget from '$components/TocTarget.svelte';

	export let size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' = 'h2';
	export let title: string;
	export let tocTitle: string | null = null;
	export let preventToc: boolean = false;

	interface HeadingPreset {
		[key: string]: string | undefined;
		fontSize?: string;
		fontWeight?: string;
		color?: string;
		// top-bottom / left-right | top / right / bottom / left
		borderWidth?: string;
		borderStyle?: string;
		borderColor?: string;
	}

	interface HeadingDict {
		h1?: HeadingPreset;
		h2?: HeadingPreset;
		h3?: HeadingPreset;
		h4?: HeadingPreset;
		h5?: HeadingPreset;
	}

	const defaultHeadingDict: HeadingDict = {
		h1: {
			fontSize: '5rem',
			color: 'var(--headingColor, #000a)',
			borderWidth: '1px 1px 1px 1px var(--heading"border-color", var(--headingColor, #000a))'
		},
		h2: {
			fontSize: '3rem',
			color: 'var(--headingColor, #000a)',
			borderWidth: '0px 0px 2px 0px',
			borderColor: 'var(--heading"border-color", var(--headingColor, #000a))',
			borderStyle: `solid`
		},
		h3: {
			fontSize: '1.5rem',
			color: 'var(--headingColor, #000a)'
		}
	};
	export let styles: HeadingDict | null = null;
	let headingInternal: HeadingDict;
	if (styles !== null) {
		headingInternal = {
			...defaultHeadingDict,
			h1: { ...defaultHeadingDict.h1, ...styles.h1 },
			h2: { ...defaultHeadingDict.h2, ...styles.h2 },
			h3: { ...defaultHeadingDict.h3, ...styles.h3 },
			h4: { ...defaultHeadingDict.h4, ...styles.h4 },
			h5: { ...defaultHeadingDict.h5, ...styles.h5 }
		};
	} else {
		headingInternal = defaultHeadingDict;
	}
	function attachStyles(node: HTMLElement) {
		const settings = headingInternal[size];
		if (settings !== undefined) {
			for (const prop in settings) {
				const maybeUndefined = settings[prop];
				(node.style as Record<string, any>)[prop] = settings[prop];
			}
		}
	}
</script>

<div class="Title-outer">
	{#if !preventToc}
		<TocTarget {title} {tocTitle} />
	{/if}
	<svelte:element this={size} class="title-heading" use:attachStyles>{title}</svelte:element>
</div>

<style lang="scss">
	.Title-outer {
		display: block;
		overflow: hidden;
	}
</style>
