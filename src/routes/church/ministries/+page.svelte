<script lang="ts">
	import Accordion from '$components/Accordion.svelte';
	import AccordionItem from '$components/AccordionItem.svelte';
	import Article from '$components/Article.svelte';
	import AutoGrid from '$components/AutoGrid.svelte';
	import Button from '$components/Button.svelte';
	import MainBlock from '$components/MainBlock.svelte';
	import SubHeading from '$components/SubHeading.svelte';
	import Title from '$components/Title.svelte';
	import TocTarget from '$components/TocTarget.svelte';
	import { churchMinistries } from '$utils/ImageImports/ImageImports';
</script>

<svelte:head>
	<meta name="description" content="A page about the church's ministries." />
	<title>Ministries</title>
</svelte:head>

<MainBlock maxWidth="90ex">
	<Title title="Good Shepherd Lutheran School" tocTitle="School" />
	<Article
		imageEntry={churchMinistries.fuzz('riding')}
		imageMaxWidth={{ below: '85%', above: '60%' }}
		text={[
			`Our first educational facility opened on August 16, 1998 as Little Lambs Children’s Academy,
  serving young children of the church and community. The congregation dedicated a new
  educational building in spring 2003. Then, in 2014, Good Shepherd Lutheran School formed toi
  care for the educational needs of older children.`,
			`Good Shepherd Lutheran School presently
  offers a Christ-centered education to students in grades PK3yo, VPK, and into early elementary
  school. With weekly Chapel, as well as religion classes and weekly visits from Pastor Jim,
  Christ permeates the core of our school and is Good Shepherd Lutheran Church’s largest
  mission.`
		]}
	/>
	<SubHeading label="Learn More" hrule={true} />
	<AutoGrid max="200px" fitOrFill="fit">
		<Button {...{ href: '/school/programs', text: 'Programs' }} />
		<Button {...{ href: '/school/staff', text: 'Teachers' }} />
	</AutoGrid>
</MainBlock>

<MainBlock maxWidth="90ex">
	<TocTarget title="LWML" />
	<SubHeading imageEntry={churchMinistries.fuzz('lwml')} />
	<SubHeading hrule={true} />
	<Article
		text="The Lutheran Women’s Missionary League (LWML) is an official auxiliary of The Lutheran Church—Missouri
  Synod. Since 1942, the LWML has focused on affirming each woman’s relationship with Christ, encouraging and
  equipping women to live out their Christian lives in active mission ministries and to support global missions."
	/>
	<SubHeading label="Learn More" hrule={true} />
	<AutoGrid max="200px" fitOrFill="fit">
		<Button {...{ href: 'https://www.lwml.org/home', text: 'LWML.org', target: '_blank' }} />
	</AutoGrid>
</MainBlock>

<MainBlock maxWidth="90ex">
	<Title title="Teaching Ministries" tocTitle="Teaching" />
	<Accordion>
		<AccordionItem label="Sunday School">
			<p>
				In Matthew 28 we are commanded to Go therefore and make disciples of all nations, baptizing
				them in the name of the Father and of the Son and of the Holy Spirit, teaching them to
				observe all that I have commanded you. And because of this command, and in response to the
				Love Christ has for us, we begin our Christian Educational ministry in Sunday School.
			</p>
			<p>
				Every Sunday during the school year, between services, there are classes for children that
				are led by our amazing volunteers. Adults can join Pastor Jim in the Sanctuary where we will
				be diving deeper into the scriptures in a format that encourages questions. Our Adult
				education continues through the summer, and children are welcome into the Pastor’s Bible
				Study.
			</p>
		</AccordionItem>
		<AccordionItem label="Men of God">
			<p>
				Saturday mornings, men from the congregation and community come together in our fellowship
				hall to share a breakfast, and dive deeper into the Word of God. Breakfast is served at
				7:30am, and Bible Study starts around 8am. This is an opportunity to study the scripture,
				ask questions, and share life with a small group of men.
			</p>
		</AccordionItem>
		<AccordionItem label="Wednesday Morning Women’s Bible Study">
			<p>
				Starting at 10am, this group of women meet seasonally to study books of the Bible, and what
				they mean for our daily life, and what they mean for our walk with God. Please call the
				office to find out when they are meeting.
			</p>
		</AccordionItem>
		<AccordionItem label="Thursday Evening Women’s Bible Study">
			<p>
				Meeting at 7pm on Thursday evenings, this group of ladies delve into the scriptures, do book
				studies, and share life together.
			</p>
		</AccordionItem>
	</Accordion>
</MainBlock>

<MainBlock maxWidth="90ex">
	<Title title="AA" />
	<SubHeading label="Tiger Point Hope" labelBox={true} justifyLabel="start" />
	<p>Mon, Thursday, Friday @ 6PM in the Fellowship Hall. Please enter via South doors.</p>
	<SubHeading label="Midway" labelBox={true} justifyLabel="start" />
	<p>Tuesday @ 6pm. Please enter via the door on the East 2 nd from the South.</p>
	<SubHeading label="Helpful Resources" hrule={true} />
	<AutoGrid min="280px" max="1fr" fitOrFill="fit">
		<Button {...{ href: 'https://www.aa.org', text: 'AA.org', target: '_blank' }} />
		<Button
			{...{
				href: 'https://www.samhsa.gov/find-help/national-helpline',
				text: 'Substance Abuse & Mental Health Services Hotline',
				target: '_blank'
			}}
		/>
	</AutoGrid>
</MainBlock>

<style lang="scss">
</style>
