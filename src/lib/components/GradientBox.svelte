<script lang="ts">
	import { tweened } from 'svelte/motion';
	import * as Easing from 'svelte/easing';

	// Gradient props
	export let colors: string[];
	export let stops: number[] | null = null;
	export let borderWidth: string = '10px';
	export let stepMode: 'continuous' | 'discrete' = 'continuous';

	// Animation props
	export let animationMode: 'none' | 'infinite' | 'hover' | 'onState';
	export let infiniteMode: 'loop' | 'alternate' = 'loop';
	export let startAngle: number = 0;
	export let endAngle: number = 360;
	export let duration: number = 4000;
	export let backDuration: number = duration;
	export let easingName: keyof typeof Easing = 'linear';
	export let state: boolean = false;

	const easing = Easing[easingName];

	let currentAngle = tweened(0, { duration, easing });
	async function loopAnimation() {
		while (1) {
			await currentAngle.set(endAngle);
			await currentAngle.set(startAngle, {
				duration: infiniteMode === 'alternate' ? backDuration : 0
			});
		}
	}
	if (animationMode === 'infinite') {
		loopAnimation();
	}

	$: {
		if (animationMode === 'hover' || animationMode === 'onState') {
			$currentAngle = state ? endAngle : startAngle;
		}
	}

	// Continuous (CSS default): 100%/(n-1) distances
	// [index * distance]
	//
	// Discrete: 100%/n distances
	// Pairs! [index * distance, index+1 * distance]

	if (stops === null) {
		stops = [];
		const distance = stepMode === 'continuous' ? 100 / (colors.length - 1) : 100 / colors.length;
		for (let index = 0; index < colors.length; index++) {
			stops.push(index * distance);
		}
		if (stepMode === 'discrete') {
			stops.push(100);
		}
	}

	let colorPart: string = '';
	function buildColorPart() {
		colorPart = colors
			.map((color, i) => {
				if (stops !== null) {
					return `${color} ${stops[i]}%${stepMode === 'discrete' ? ` ${stops[i + 1]}%` : ''}`;
				}
			})
			.join(', ');
	}
	buildColorPart();

	$: gradientString = `linear-gradient(${$currentAngle}deg, ${colorPart})`;
</script>

<div
	class="GradientBox-outer"
	style:border-image="repeating-linear-gradient(45deg, red , blue 15%) 50 / 20px"
	on:mouseenter={() => {
		state = true;
	}}
	on:mouseleave={() => {
		state = false;
	}}
>
	<div class="mask" style:margin={borderWidth}>
		<slot />
	</div>
</div>

<style lang="scss">
	.GradientBox-outer {
		justify-self: start;
		.mask {
			width: 400px;
			height: 400px;
			background-color: transparent;
			z-index: 99;
		}
	}
</style>
