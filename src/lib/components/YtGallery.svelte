<script lang="ts">
	import { onMount } from 'svelte';
	import { ytSearchEtag } from '$lib/stores';

	export let channelId: string;
	export let apiKey: string;
	export let maxResults: number = 5;

	const reqUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`;
</script>

<div class="YtGallery-outer">
	<div id="player" />
</div>

<style lang="scss">
</style>
