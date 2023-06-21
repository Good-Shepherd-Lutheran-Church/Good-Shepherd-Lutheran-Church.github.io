<script lang="ts">
	export let cols: string | null = '1 / 3';
	export let height: string = '40vh';
	export let imageAttach: 'fixed' | 'local' | null = 'fixed';
	export let imageRepeat: 'no-repeat' | 'repeat-x' | 'repeat-y' | null = 'no-repeat';
	export let imagePositionX: string | null = '50%';
	export let imagePositionY: string | null = '50%';
	export let imageSize: 'cover' | 'contain' | null = 'cover';
	export let imageEntry: ImageEntry | null = null;
	export let shadeMode: 'darken' | 'lighten' | 'gradient' | null = 'darken';
	export let darkenColor: string = '#0009';
	export let lightenColor: string = '#FFF4';
	export let gradientString: string | null = null;
	export let src: string | null = null;

	switch (shadeMode) {
		case null:
			gradientString = '';
			break;
		case 'gradient':
			if (gradientString === null) {
				throw new Error(
					`Fatal: Hero with 'shadeMode=gradient' must include a 'gradientString' like 'linear-gradient(#5555 30%, #9999 80%)'. Note that the string doesn't end with a semicolon.`
				);
			}
			gradientString = gradientString + ', ';
			break;
		case 'darken':
			gradientString = `linear-gradient(${darkenColor} 100%, transparent 100%), `;
			break;
		case 'lighten':
			gradientString = `linear-gradient(${lightenColor} 100%, transparent 100%), `;
			break;
	}

	if (src !== null) {
		gradientString += `url("${src}")`;
	} else {
		gradientString += `image-set(${imageEntry?.imageSet}`;
	}
</script>

<header
	class="Hero-outer"
	style:grid-column={cols}
	style:height
	style:background-attachment={imageAttach}
	style:background-repeat={imageRepeat}
	style:background-position-x={imagePositionX}
	style:background-position-y={imagePositionY}
	style:background-size={imageSize}
	style:background-image={gradientString}
>
	<slot />
</header>

<style lang="scss">
	header.Hero-outer {
		display: grid;
		width: 100%;
		height: 100%;
	}
</style>
