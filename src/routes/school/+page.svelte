<script lang="ts">
	import Article from '$components/Article.svelte';
	import AutoGrid from '$components/AutoGrid.svelte';
	import Button from '$components/Button.svelte';
	import MainBlock from '$components/MainBlock.svelte';
	import Title from '$components/Title.svelte';
	import { schoolLanding } from '$utils/ImageImports/ImageImports';
</script>

<MainBlock maxWidth="90ex">
	<Article
		text={`Good Shepherd Lutheran School presently
    offers a Christ-centered education to students in grades PK3yo, VPK, and into early elementary
    school. With weekly Chapel, as well as religion classes and weekly visits from Pastor Jim,
    Christ permeates the core of our school and is Good Shepherd Lutheran Church’s largest
    mission.`}
		imageEntry={schoolLanding.fuzz('field_day')}
		imageMaxHeight={{ below: '80vh', above: '40vh' }}
	/>
</MainBlock>

<MainBlock maxWidth="100ex">
	<Title title="Learn More" />
	<AutoGrid min="40%">
		<Button text="Programs Offered" href="/school/programs" />
		<Button text="Meet Our Teachers" href="/school/staff" />
		<Button text="Information For Parents" href="/school/programs" />
		<Button text="Enrollment for '23-24 School Year" href="/school/programs" />
	</AutoGrid>
</MainBlock>

<style lang="scss">
</style>
