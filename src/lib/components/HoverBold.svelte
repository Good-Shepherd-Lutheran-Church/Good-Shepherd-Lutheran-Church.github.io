<script lang="ts">
	export let iconClass: string | null = null;
	export let text: string;
	export let baseWeight: 'normal' | 'bold' | 'bolder' | number = 400;
	export let hoverWeight: 'normal' | 'bold' | 'bolder' | number = 500;
	export let hoverState: boolean = false;
</script>

<div class="HoverBold-outer">
	<div
		class="inner"
		class:force-hover={hoverState}
		style:--baseWeight={baseWeight}
		style:--hoverWeight={hoverWeight}
	>
		<span class={`visible ${iconClass}`}>{text}</span>
		<span class={`spacer ${iconClass}`}>{text}</span>
	</div>
</div>

<style lang="scss">
	.HoverBold-outer {
		display: inline-block;
		.inner {
			display: grid;
			place-items: center;
			text-transform: capitalize;
			.visible {
				font-weight: var(--baseWeight);
				grid-column: 1 / 2;
				grid-row: 1 / 2;
				font-size: inherit;

				&:hover,
				&.force-hover {
					font-weight: var(--hoverWeight);
				}
			}

			.spacer {
				visibility: hidden;
				font-weight: var(--hoverWeight);
				grid-column: 1 / 2;
				grid-row: 1 / 2;
			}
		}
	}
</style>
