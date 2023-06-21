<script lang="ts">
	import Card from '$components/Card.svelte';
	import AutoGrid from '$components/AutoGrid.svelte';
	import MainBlock from '$components/MainBlock.svelte';
	import { churchDirectory } from '$utils/ImageImports/ImageImports';
</script>

<svelte:head>
	<meta name="description" content="A page about the church's staff." />
	<title>Church Directory</title>
</svelte:head>

<MainBlock>
	<AutoGrid max="50ex">
		<Card
			title="James A d’Entremont III"
			imageEntry={churchDirectory.fuzz('pastor')}
			text="Pastor"
			links={[
				{ href: 'tel:8509323263', text: '(850) 932-3263' },
				{ href: 'mailto:Pastor.GoodShepherdGB@Outlook.com', text: 'Email' }
			]}
		/>
	</AutoGrid>
	<AutoGrid max="50ex">
		<Card
			title="Myra"
			text="Office Manager"
			links={[
				{ href: 'tel:8509323263', text: '(850) 932-3263' },
				{ href: 'mailto:GoodShepherdGB@outlook.com', text: 'Email' }
			]}
		/>
	</AutoGrid>
</MainBlock>

<style lang="scss">
</style>
