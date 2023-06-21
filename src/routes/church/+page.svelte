<script lang="ts">
	import MainBlock from '$components/MainBlock.svelte';
	import Article from '$components/Article.svelte';
	import { churchLanding } from '$utils/ImageImports/ImageImports';
	import AutoGrid from '$components/AutoGrid.svelte';
	import Button from '$components/Button.svelte';
	import Hero from '$components/Hero.svelte';
</script>

<Hero imageEntry={churchLanding.fuzz('pews')} height="60vh">
	<div class="church-landing-buttons">
		<AutoGrid min="220px">
			<Button --buttonFs="1.8rem" href="/church/about" text="Who We Are" />
			<Button --buttonFs="1.8rem" href="/church/ministries" text="Ministries" />
			<Button --buttonFs="1.8rem" href="/church/sermons" text="Sermons" />
			<Button --buttonFs="1.8rem" href="/church/directory" text="Our People" />
		</AutoGrid>
	</div>
</Hero>

<MainBlock maxWidth="90ex">
	<Article
		text={[
			'Welcome to Good Shepherd Lutheran Church',
			'Find out more about our faith and our community!'
		]}
	/>
</MainBlock>

<style lang="scss">
	.church-landing-buttons {
		align-self: end;
		margin-block-end: 1.8rem;
	}
</style>
