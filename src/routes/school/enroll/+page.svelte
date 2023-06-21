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
	<Title title="2023-2024 Tuition Rates and Rules" tocTitle="Tuition" />
	<Article
		imageEntry={schoolLanding.fuzz('logo')}
		imageMaxWidth={{ below: '100%', above: '20%' }}
		text="Tuition is payable in 9 installments, and payments are due 10 days after billing date every month beginning
  August and ending April. A late fee of $25.00 will be added if not paid on time. A fee of $25.00 will be added for
  all returned checks. If tuition is not paid within 5 days after the late fee is assessed, the child may be withheld
  from class until the bill is paid in full."
	/>
	<AutoGrid />
	<SubHeading hrule={true} label="Tuition Rates" />
	<Table
		columnCount={2}
		data={[
			'Administration Fee',
			'$300 (nonrefundable) due upon registration.',
			'Captial Improvement Fee',
			'$200 (nonrefundable) due upon registration.'
		]}
	/>
	<SubHeading hrule={true} label="Preschool" />
	<Table
		columnCount={3}
		data={[
			'5 days a week',
			'$5,535.00/year',
			'(M, T, W, Th, F)',
			'3 days a week',
			'$3,500.00/year',
			'(M, W, F)',
			'2 days a week',
			'$2,500.00/year',
			'(T, Th)'
		]}
	/>
	<SubHeading hrule={true} label="Kindergarten — 3rd Grade (5 days a week)" />
	<Table
		columnCount={2}
		data={[
			'Tuition',
			'$6376.00',
			'Curriculum Free',
			'$325.00',
			'Testing Fee',
			'$50.00',
			'Tutoring (Reading & Math)',
			'$300.00',
			'Instructional/Digital Service Fee',
			'$350.00'
		]}
	/>
	<SubHeading hrule={true} label="4th — 5th Grade (5 days a week)" />
	<Table
		columnCount={2}
		data={[
			'Tuition',
			'$5800.00',
			'Curriculum Fee',
			'$325.00',
			'Testing Fee',
			'$50.00',
			'Tutoring (Reading & Math)',
			'$300.00',
			'Instructional/Digital Service Fee',
			'$350.00'
		]}
	/>
	<SubHeading hrule={true} label="Scholarship Programs" />
	<p>Step Up For Students/FES.</p>
	<p>Please call for assistance:</p>
	<AutoGrid justify="start"><Button href="/contact" text="Contact Us" /></AutoGrid>
</MainBlock>

<MainBlock maxWidth="90ex">
	<Title title="2023-2024 VPK" tocTitle="VPK" />
	<Article
		text="VPK is free for all children 4 years of age in Florida. Call 1-866-FL-READY or (850) 983-5313 or go online to
  https://www.elcsantarosa.org and go to the parent link to complete the voucher."
	/>
	<SubHeading hrule={true} label="State Resources and Information" />
	<AutoGrid>
		<Button href="tel:1-866-357-3239" text="1-866-FL-READY" />
		<Button href="tel:1-850-983-5313" text="Or (850) 983-5313" />
		<Button href="https://www.elcsantarosa.org" text="ELC Santa Rosa" target="_blank" />
	</AutoGrid>
	<AutoGrid><Button href="/contact" text="Contact Us" /></AutoGrid>
</MainBlock>

<MainBlock maxWidth="96ex">
	<Title title="Extended Care Options" tocTitle="Extended Care" />
	<Table
		columnCount={3}
		data={[
			'$7.00/hour per child',
			'Monthly contract',
			'Available from dismissal until 5:30 PM.',
			'$7.00/hour per child',
			'Non-contracted aftercare with 24-hour notice and availability',
			'Available until 5:30 PM.',
			'Complimentary',
			'Morning care',
			'M-F starting at 7:00am',
			'$40/week',
			'VPK students may attend our Enrichment Program',
			'Fridays from 8 AM – 2 PM at $40.'
		]}
	/>
	<Article
		text="Contracted Aftercare is due monthly in advance. Aftercare fees not paid within 10 days of billing will incur a
  $25.00 late fee. If payment is not received within 5 days after the late fee is assessed, child may be withheld from
  aftercare until the bill is paid in full."
	/>
	<AutoGrid justify="start"><Button href="/contact" text="Contact Us" /></AutoGrid>
</MainBlock>

<style lang="scss">
</style>
