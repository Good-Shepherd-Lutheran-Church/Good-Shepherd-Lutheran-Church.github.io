<script lang="ts">
	import { tocList } from '$components/Toc.svelte';
	import { onDestroy } from 'svelte';
	export let title: string;
	export let tocTitle: string | null = null;

	let id: string;
	if (tocTitle !== null) {
		id = tocTitle.replace(/\W/g, '');
	} else {
		id = title.replace(/\W/g, '');
	}

	const hasCollided = () => {
		for (const tocEntry of $tocList) {
			if (tocEntry[0] === id) {
				return true;
			}
			return false;
		}
	};
	while (hasCollided()) {
		id += new Date().getTime().toString().slice(-5);
	}
	$tocList.set(id, tocTitle || title);
	$tocList = $tocList;

	onDestroy(() => {
		$tocList.delete(id);
		$tocList = $tocList;
	});
</script>

<div class="toc-target" {id} />

<style lang="scss">
	.toc-target {
		visibility: hidden;
		height: 0;
		width: 0;
		scroll-margin-block-start: 5rem;
	}
</style>
