<script lang="ts">
	import Card from '$components/Card.svelte';
	import MainBlock from '$components/MainBlock.svelte';
	import Title from '$components/Title.svelte';
	import Persons from '$lib/assets/static-data/gslc.persons.json';
	import { directory } from '$utils/ImageImports/ImageImports';
	import AutoGrid from '$components/AutoGrid.svelte';
	type Teacher =
		| {
				name: string;
				role: string[];
				bio: string;
				program: string[];
				imageTerm: string;
		  }
		| {
				name: string;
				role: string[];
				bio: string;
				imageTerm: string;
				program?: undefined;
		  }
		| {
				name: string;
				role: string[];
				program: string[];
				bio: string;
				imageTerm?: undefined;
		  };
	function makeProgramLinks(teacher: Teacher): LinkEntry[] | null {
		return teacher.program
			? teacher.program.map((prog) => {
					if (
						prog !== 'VPK' &&
						prog !== 'Pre-K' &&
						prog !== 'Aftercare' &&
						prog !== 'STEM' &&
						prog !== 'PE'
					) {
						return { href: `/school/programs/#K-5`, text: prog };
					} else {
						return { href: `/school/programs/#${prog}`, text: prog };
					}
			  })
			: null;
	}
</script>

<svelte:head>
	<meta name="description" content="A directory of school teachers and administrators." />
	<title>School Staff Directory</title>
</svelte:head>

<MainBlock>
	<Title title="Teachers" />
	<AutoGrid min="20rem">
		{#each Persons as teacher}
			{#if teacher.role.includes('teacher')}
				<Card
					id={teacher.name.replace(/ |\'|\./g, '')}
					title={teacher.name}
					imageEntry={teacher.imageTerm ? directory.fuzz(teacher.imageTerm) : null}
					text={teacher.bio}
					textAlign="justify"
					links={makeProgramLinks(teacher)}
				/>
			{/if}
		{/each}
	</AutoGrid>
</MainBlock>

<MainBlock>
	<Title title="Administrators" />
	<AutoGrid max="25rem">
		{#each Persons as admin}
			{#if admin.role.includes('administrator')}
				<Card
					imageEntry={admin.imageTerm ? directory.fuzz(admin.imageTerm) : null}
					title={admin.name}
					text={admin.bio}
					textAlign="justify"
				/>
			{/if}
		{/each}
	</AutoGrid>
</MainBlock>

<style lang="scss">
</style>
