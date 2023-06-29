<script lang="ts">
	import Article from '$components/Article.svelte';
	import AutoGrid from '$components/AutoGrid.svelte';
	import Button from '$components/Button.svelte';
	import MainBlock from '$components/MainBlock.svelte';
	import SubHeading from '$components/SubHeading.svelte';
	import Table from '$components/Table.svelte';
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

<MainBlock maxWidth="100ex">
	<Title title="School Supply List" />
	<Article
		centerText
		text={['We would appreciate any help with these items. They are not mandatory.', 'Thank you!']}
	/>
	<Article centerText>
		<AutoGrid justify="end" min="15rem">
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
