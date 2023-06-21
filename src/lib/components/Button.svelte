<script lang="ts">
	export let href: string;
	export let text: string;
	export let icon: FontIcon | null = null;
	export let target: '_self' | '_blank' = '_self';
	export let linkEntry: LinkEntry | null = null;
	export let external: boolean = false;

	if (linkEntry) {
		href = linkEntry.href;
		text = linkEntry.text;
		if (linkEntry.target !== undefined) {
			target = linkEntry.target;
		}
	}

	if (external || target === '_blank') {
		icon = { class: 'material-symbols-outlined', text: 'open_in_new' };
	}
</script>

<a {href} {target} class="Button-outer">
	<span class="text">{text}</span>
	{#if icon !== null}
		<span class={`icon ${icon.class}`}>{icon.text}</span>
	{/if}
</a>

<style lang="scss">
	a.Button-outer {
		font-size: var(--buttonFs, 1.2rem);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 0.4rem;
		border: 1px solid gray;
		text-decoration: none;
		border-radius: 0.7em;
		background-color: var(--buttonBgColor, var(--navbarColor, white));
		color: var(--buttonColor, var(--navbarBgColor, black));
		transition: background-color 120ms ease, color 120ms ease;

		&:hover {
			background-color: var(--buttonColor, var(--navbarBgColor, black));
			color: var(--buttonBgColor, var(--navbarColor, black));
		}

		.icon {
			margin-inline-start: 0.2rem;
		}
	}
</style>
