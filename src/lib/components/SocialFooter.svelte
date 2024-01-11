<script lang="ts">
	import FacebookLogo from '$images/social-icons/FindUsOn_Header_2019.png?w=300&format=webp';
	import YouTubeLogo from '$images/social-icons/yt_logo_rgb_light.png?w=300&format=webp';
	import { below } from '$components/WindowWatcher.svelte';

	export let facebookUrl: string | null = null;
	export let youtubeUrl: string | null = null;
	export let copyrightOwner: string;
	export let copyrightDates: string;
	export let cols: string | null = '1 / 3';
</script>

<div class="SocialFooter-outer" style:grid-column={cols}>
	<div class="social-icons" style:flex-direction={$below.md ? 'column' : 'row'}>
		<svelte:element this={facebookUrl !== null ? 'a' : null} href={facebookUrl} target="_blank">
			<img src={FacebookLogo} alt="Facebook icon that links to our Facebook page." />
		</svelte:element>
		<svelte:element this={youtubeUrl !== null ? 'a' : null} href={youtubeUrl} target="_blank">
			<img src={YouTubeLogo} alt="YouTube icon that links to our YouTube page." />
		</svelte:element>
	</div>

	<p class="copyright">©{copyrightOwner}, {copyrightDates}</p>
</div>

<style lang="scss">
	.SocialFooter-outer {
		justify-self: stretch;
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 0.8rem;
		border-top: 5px gray double;
		margin-block-start: 2rem;
		padding-block: 2rem;

		.social-icons {
			display: flex;
			column-gap: 8vw;
			row-gap: 2rem;
			img {
				max-height: 2rem;
			}
		}

		.copyright {
			font-size: 1.4rem;
		}
	}
</style>
