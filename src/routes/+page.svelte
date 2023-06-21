<script lang="ts">
	import MainBlock from '$components/MainBlock.svelte';
	import Title from '$components/Title.svelte';
	import Article from '$components/Article.svelte';
	import { mainLanding } from '$utils/ImageImports/ImageImports';
	import Hero from '$components/Hero.svelte';
	import AutoGrid from '$components/AutoGrid.svelte';
	import Card from '$components/Card.svelte';
</script>

<Hero shadeMode={null} height="75vh" imageEntry={mainLanding.fuzz('church_at_sunrise')} />

<MainBlock maxWidth="90ex">
	<Title title="Welcome" />
	<Article
		imageEntry={mainLanding.fuzz('pastor_and')}
		imageMaxHeight={{ below: '80vh', above: '40vh' }}
		text={[
			"Welcome to Good Shepherd Lutheran Church and School! Founded in 1963 Good Shepherd has been serving the Santa Rosa Peninsula by bringing God's Word and Sacrament for 60 years! Good Shepherd is a healthy congregation made up of seniors, young families, and everyone in between.",
			'Come as you are, visitors, guests, seekers, and old Lutherans alike. We welcome you to our congregation and look forward to meeting you!'
		]}
	/>
</MainBlock>

<MainBlock>
	<AutoGrid>
		<Card
			defaultHref="/church"
			title="To Church"
			imageEntry={mainLanding.fuzz('sanctuary')}
			links={[
				{ href: '/church/about', text: 'What We Believe' },
				{ href: '/church/ministries', text: 'Ministries' },
				{ href: '/church', text: 'More...' }
			]}
		/>
		<Card
			defaultHref="/school"
			title="To School"
			imageEntry={mainLanding.fuzz('flag')}
			links={[
				{ href: '/school/enroll', text: 'Now Enrolling!' },
				{ href: '/school/programs', text: 'Programs' },
				{ href: '/school', text: 'More...' }
			]}
		/>
	</AutoGrid>
</MainBlock>
