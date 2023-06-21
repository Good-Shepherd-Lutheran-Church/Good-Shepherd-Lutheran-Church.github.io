<script lang="ts">
	export let label: string | null = null;
	export let name: string;
	export let id: string | null = null;
	export let labelPosition: 'top' | 'bottom' | 'left' | 'right' = 'left';
	export let state: boolean = false;
	export let indicatorSize: string = '1rem';

	let flexDirection = labelPosition === 'left' || labelPosition === 'right' ? 'row' : 'column';
	let labelOrder = labelPosition === 'top' || labelPosition === 'left' ? 1 : 3;
</script>

<label
	class="Toggle-outer"
	style:flex-direction={flexDirection}
	style:--indicatorSize={indicatorSize}
>
	<span class="label" style:order={labelOrder} style:display={label ? 'inline' : 'none'}
		>{label}</span
	>
	<div class="inset" style:order="2">
		<input bind:checked={state} type="checkbox" {name} {id} />
		<div class="custom-indicator" class:active-toggle={state} />
	</div>
</label>

<style lang="scss">
	label.Toggle-outer {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;

		span.label {
			margin-inline: 0.7rem;
			margin-block: 0.3rem;
		}

		.inset {
			display: grid;
			width: calc(var(--indicatorSize) * 2.3);
			height: calc(var(--indicatorSize) * 1.5);
			border-radius: 1rem;
			border: 1px solid black;
			background-color: var(--toggleInsetColor, #eee);
			padding-inline: 0.3rem;
			box-shadow: 2px 1px 2px 0px inset black;

			input {
				visibility: hidden;
				grid-column: 1 / 2;
				grid-row: 1 / 2;
			}

			.custom-indicator {
				grid-column: 1 / 2;
				grid-row: 1 / 2;
				width: var(--indicatorSize);
				height: var(--indicatorSize);
				border-radius: var(--indicatorSize);
				background-color: var(--toggleIndicatorColor, #ddd);
				box-shadow: 2px 1px 2px 1px #444;
				align-self: center;
				transition: transform 80ms ease-in-out;
				border: 1px solid black;

				&.active-toggle {
					transform: translate(var(--indicatorSize));
				}
			}
		}
	}
</style>
