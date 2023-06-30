<script lang="ts">
	import Article from '$components/Article.svelte';
	import MainBlock from '$components/MainBlock.svelte';
	import SubHeading from '$components/SubHeading.svelte';
	import Title from '$components/Title.svelte';
	import Programs from '$lib/assets/static-data/gslc.programs.json';
	import Persons from '$lib/assets/static-data/gslc.persons.json';
	import { schoolPrograms } from '$lib/utils/ImageImports/ImageImports';
	import AutoGrid from '$components/AutoGrid.svelte';
	import Button from '$components/Button.svelte';
	import TocTarget from '$components/TocTarget.svelte';

	function getTeachers(program: string) {
		if (
			program === 'VPK' ||
			program === 'Pre-K' ||
			program === 'STEM' ||
			program === 'Aftercare' ||
			program === 'PE'
		) {
			return Persons.filter((person) => person.program?.includes(program)).map((teacher) => {
				return {
					href: `/school/staff#${teacher.name.replace(/ |\'|\./g, '')}`,
					text: teacher.name
				};
			});
		} else {
			return Persons.filter((person) => {
				return (
					person.program?.includes('Kindergarten') ||
					person.program?.includes('First') ||
					person.program?.includes('Second') ||
					person.program?.includes('Third') ||
					person.program?.includes('Fourth') ||
					person.program?.includes('Fifth')
				);
			}).map((teacher) => {
				return {
					href: `/school/staff#${teacher.name.replace(/ |\'|\./g, '')}`,
					text: teacher.name
				};
			});
		}
	}

	let learnMoreLinks = [
		{ href: '/school/enroll', text: 'Enrollment' },
		{ href: '/contact', text: 'Contact Us' }
	];
</script>

<svelte:head>
	<meta name="description" content="A page that describes our school programs." />
	<title>School Programs</title>
</svelte:head>

<div class="todo-program" id="PE" />
<div class="todo-program" id="STEM" />

{#each Programs as program, i}
	<MainBlock maxWidth="80ex">
		<Title title={program.name} />
		<Article
			text={program.description}
			imageEntry={schoolPrograms.fuzz(program.imageTerm)}
			float={i % 2 === 0 ? 'left' : 'right'}
		/>
		{#if getTeachers(program.name).length}
			<SubHeading hrule={true} label="Teachers" />
			<AutoGrid>
				{#each getTeachers(program.name) as link}
					<Button {...link} />
				{/each}
			</AutoGrid>
		{/if}
		<SubHeading hrule={true} label="Learn More" />
		<AutoGrid>
			{#each learnMoreLinks as link}
				<Button {...link} />
			{/each}
		</AutoGrid>
	</MainBlock>
{/each}

<style lang="scss">
	.todo-program {
		visibility: hidden;
	}
</style>
