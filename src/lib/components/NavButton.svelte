<script lang="ts">
	export let text: string | null = null;
	export let fontIcon: FontIcon | null = null;
	export let startWeight: number | 'normal' | 'lighter' | 'bold' | 'bolder' = 'normal';
	export let hoverWeight: number | 'normal' | 'lighter' | 'bold' | 'bolder' = 'bold';
	export let align: string = 'center';
	export let order: string | null = null;
	export let href: string | null = null;
	if (text === null && fontIcon !== null) {
		text = fontIcon.text;
	}
</script>

<svelte:element
	this={href !== null ? 'a' : 'div'}
	href={href !== null ? href : null}
	class="NavButton-outer"
	style:align-items={align}
	style:--startWeight={startWeight}
	style:--hoverWeight={hoverWeight}
	style:order
>
	<div class={`visible ${fontIcon?.class}`}>{text}</div>
	<div class={`hidden ${fontIcon?.class}`}>{text}</div>
</svelte:element>

<style lang="scss">
	.NavButton-outer {
		display: grid;
		height: 100%;
		color: var(--navbarTextColor, var(--primaryColor));
		text-decoration: none;
		text-transform: capitalize;
		cursor: pointer;

		.visible {
			color: inherit;
			grid-column: 1 / 2;
			grid-row: 1 / 2;
			font-weight: var(--startWeight);
		}

		.hidden {
			visibility: hidden;
			grid-column: 1 / 2;
			grid-row: 1 / 2;
			font-weight: var(--hoverWeight);
		}

		&:hover {
			.visible {
				font-weight: var(--hoverWeight);
			}
		}
	}
</style>
