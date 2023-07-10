<script lang="ts">
	import MainBlock from '$components/MainBlock.svelte';
	import Article from '$components/Article.svelte';
	import { churchLanding } from '$utils/ImageImports/ImageImports';
	import AutoGrid from '$components/AutoGrid.svelte';
	import Button from '$components/Button.svelte';
	import Hero from '$components/Hero.svelte';
	import Title from '$components/Title.svelte';
	import Gallery from '$components/Gallery.svelte';
	import { lifeTogether } from '$utils/ImageImports/ImageImports';
</script>

<svelte:head>
	<meta name="description" content="A landing page for the church side of the site." />
	<title>Good Shepherd</title>
</svelte:head>

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
	<Title title="Life Together" />
	<Article
		text="As the Body of Christ, the Christian life is a life lived in community, together we walk through life
  supporting one another, grieving with one another, sharing joy with one another, celebrating with one
  another, and worshiping with one another. The rhythm of the year encourages us to gather, and to share
  this life God has given to us. Here at Good Shepherd, we are all about living life together, whether that be
  volunteering for Vacation Bible School, or attending one of our family events, or coming to our 5 th
  Sunday Potluck, or even joining the youth on one of their many adventures."
	/>
	<Gallery autoplayDelayMs={3500} imageDirectory={lifeTogether} />
</MainBlock>

<style lang="scss">
	.church-landing-buttons {
		align-self: end;
		margin-block-end: 1.8rem;
	}
</style>
