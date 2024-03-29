<script lang="ts">
	import Article from '$components/Article.svelte';
	import AutoGrid from '$components/AutoGrid.svelte';
	import Button from '$components/Button.svelte';
	import MainBlock from '$components/MainBlock.svelte';
	import Title from '$components/Title.svelte';
	import { schoolLanding } from '$utils/ImageImports/ImageImports';
	import { onMount } from 'svelte';
	import { below } from '$components/WindowWatcher.svelte';

	let calendarMode: string = 'MONTH';
	onMount(() => {
		if ($below.md) {
			calendarMode = 'AGENDA';
		}
	});
</script>

<svelte:head>
	<meta name="description" content="A landing page for the school." />
	<title>GSLC School</title>
</svelte:head>

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
		<Button text="Information For Parents" href="/school/parents" />
		<Button text="Enrollment for '23-24 School Year" href="/school/programs" />
		<Button text="Standards of Ethical Conduct" href="/school/parents#Ethical%20Conduct" />
	</AutoGrid>
</MainBlock>

<MainBlock maxWidth="100ex">
	<Title title="School Supply List" />
	<Article
		centerText
		text={[
			'We would appreciate any help with these items. They are not mandatory.',
			'<strong>Thank you!</strong>'
		]}
	/>
	<Article centerText>
		<AutoGrid justify="space-between" min="15rem">
			<li>Paper towels</li>
			<li>Clorox wipes</li>
			<li>Kleenex</li>
			<li>Hand sanitizer</li>
			<li>Lysol Spray</li>
			<li>White copy paper</li>
			<li>Assorted color copy paper</li>
			<li>White card stock</li>
			<li>Assorted color card stock</li>
			<li>Gallon Ziplock bags</li>
			<li>Quart Ziplock bags</li>
			<li>Sandwich Ziplock bags</li>
			<li>Black Sharpies</li>
			<li>Color Sharpies</li>
			<li>Black dry erase markers</li>
			<li>Color dry erase markers</li>
			<li>Magic Erasers</li>
			<li>Baby Wipes</li>
			<li>Elmers glue sticks</li>
			<li>White Elmers Glue</li>
			<li>Clear Elmers Glue</li>
			<li>Highlighters</li>
			<li>Blue ink pens</li>
			<li>Black ink pens</li>
		</AutoGrid>
	</Article>
</MainBlock>

<MainBlock maxWidth="100ex">
	<Title title="School Calendar" />
	<iframe
		src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&mode=${calendarMode}&src=NzFkNzRmZTZhZGQwYTFhNTRlMjFhNGVhN2FkMmFhNzRkZmQyMWRlZjMwZGVjMzAyZTc5OTU5ODcwYjJlYjhkNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23009688`}
		style="border:solid 1px #777"
		style:width="100%"
		style:height="100vh"
		frameborder="0"
		scrolling="no"
	/>
</MainBlock>
