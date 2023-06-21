<script>
	import Accordion from '$components/Accordion.svelte';
	import AccordionItem from '$components/AccordionItem.svelte';
	import Article from '$components/Article.svelte';
	import AutoGrid from '$components/AutoGrid.svelte';
	import Button from '$components/Button.svelte';
	import MainBlock from '$components/MainBlock.svelte';
	import SubHeading from '$components/SubHeading.svelte';
	import Title from '$components/Title.svelte';
	import { churchAbout, lifeTogether } from '$utils/ImageImports/ImageImports';
	import Gallery from '$components/Gallery.svelte';
</script>

<svelte:head>
	<meta name="description" content="A page about the Church and the Faith." />
	<title>About the Church</title>
</svelte:head>

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

<MainBlock maxWidth="90ex">
	<Title title="What We Believe" />
	<Article
		text={[
			'Good Shepherd Lutheran is a Bible believing, Sacramental, Liturgical congregation that believes in the one <strong>Triune God: God the Father</strong>, creator of all that exists; <strong>Jesus Christ, the Son</strong>, who suffered and died for the sins of all human beings, and who rose to life again in the ultimate victory over death and Satan; and the <strong>Holy Spirit</strong>, who creates and strengthens faith through God’s Word and Sacraments.',
			'Being Lutheran, our congregations accept and teach Bible-based teachings of Martin Luther that inspired the reformation of the Christian Church in the 16th century. The teaching of Luther and the reformers can be summarized in three short phrases: Grace alone, Faith alone, Scripture alone.'
		]}
	/>
	<SubHeading hrule={true} imageEntry={churchAbout.fuzz('grace')} />
	<Article
		text="God loves the people of the world, even though they are sinful, rebel against Him and do not deserve His love. He sent Jesus, His Son, to love the unlovable and save the ungodly."
	/>
	<SubHeading hrule={true} imageEntry={churchAbout.fuzz('faith')} />
	<Article
		text="By His suffering and death as the substitute for all people of all time, Jesus purchased and won forgiveness and eternal life for them. Those who hear this Good News and believe it have the eternal life that it offers. God creates faith in Christ and gives people forgiveness through Him."
	/>
	<SubHeading hrule={true} imageEntry={churchAbout.fuzz('scripture')} />
	<Article
		text="The Bible, both the Old Testament and the New Testament, is God’s inerrant and infallible Word, in which He reveals His Law and His Gospel, His plan of salvation for all who believe in Jesus Christ. It is the sole rule and norm for Christian doctrine."
	/>
</MainBlock>

<MainBlock>
	<Title title="Who Is Jesus?" />
	<Article
		float="right"
		imageEntry={churchAbout.fuzz('who-is-jesus')}
		text="For more than 2,000 years people have asked the question, “Who is Jesus?”. We were not present when Jesus lived on this earth, but in the Bible we have the record of his birth, life, death on the cross, and resurrection. Study of the Bible, God’s Word, will enable you to seek out the answer to this age-old question."
	/>
</MainBlock>

<MainBlock maxWidth="90ex">
	<Title title={`"What About?" Series`} />
	<Article
		text={`“What About?” is a series of pamphlets that addresses doctrinal topics, moral issues, and concerns in the church to help Christians grow in their understanding of these important questions.`}
	/>
	<AutoGrid max="200px" fitOrFill="fill"
		><Button
			{...{
				href: 'https://resources.lcms.org/reading-study/what-about-pamphlets/?_gl=1*c0d1al*_ga*MTQzNzc1MDg4OS4xNjcyOTUyNjE2*_ga_Z0184DBP2L*MTY4MTIzMzk0MC43LjEuMTY4MTIzMzk5OS4wLjAuMA',
				text: 'What About?',
				target: '_blank'
			}}
		/></AutoGrid
	>
</MainBlock>

<MainBlock maxWidth="90ex">
	<Title title="History of Good Shepherd" tocTitle="History" />
	<Accordion>
		<AccordionItem label="Founding">
			<p>
				The congregation had its spiritual start in 1961 when a group of concerned Christians
				recognized the need for a Lutheran church in Gulf Breeze and extended a call to the Reverend
				LeRoy Beutel in June 1963. Rev. Beutel oversaw final construction. It finished in early
				September and the congregation held its first service in the new building on September 22,
				1963. Fifty-one members attended the first service. Sunday school classes began on September
				29 of the same year.
			</p>
			<p>
				Pastor Beutel completed his pastoral assignment in 1970. The Reverend Robert Cardero began
				his ministry in June 1970. Pastor Cardero served the congregation until September 1979.
				Captain Martin J. Doerman, USN, retired, accepted a contract in February 1980 to serve the
				congregation part time, which he did until 1986. Reverend J. Eugene Kunos accepted the
				position of acting pastor from 1986 until July 1988. Following Pastor Kunos the Reverend
				Richard G. Lohmeyer accepted a call as full time pastor, serving from 1988 until 2003.
			</p>
		</AccordionItem>
		<AccordionItem label="New Church">
			<p>
				The voters assembly approved a search for new site and the construction of a new building in
				February 1992. Mr. Alf Barth, architect, designed the new facility. The congregation
				purchased 14 acres east of Gulf Breeze and held a ground breaking in August 1992. Laborers
				for Christ arrived on site in November 1994 and began construction. The members of Good
				Shepherd worked side-by-side with the Laborers to complete construction. The congregation
				dedicated the new facility on September 24, 1995.
			</p>
		</AccordionItem>
		<AccordionItem label="New School">
			<p>
				The first educational facility for the congregation and community opened on August 16, 1998
				with the start of the Little Lambs Children’s Academy. Good Shepherd Lutheran School formed
				in 2014 and presently offers a Christ-centered education to students in grades PK3, VPK, and
				early elementary education. The congregation dedicated the new educational building in
				spring 2003.
			</p>
		</AccordionItem>
		<AccordionItem label="Into The Future">
			<p>
				As the body of Christ at Good Shepherd Lutheran Church looks forward to the future, we see a
				wonderful opportunity to bring the message of Christ to this growing and vibrant community.
				Of course, challenges and obstacles loom ahead as they always have. However, walking in step
				with Christ the congregation continues to grow, move ahead, and remain faithful to its
				calling of providing a Christ-centered community for its members and the greater community.
			</p>
		</AccordionItem>
	</Accordion>
</MainBlock>

<MainBlock maxWidth="90ex">
	<Title title="National Church" />
	<Article
		imageEntry={churchAbout.fuzz('LCMS')}
		text={[
			'Good Shepherd is a member of the Lutheran Church–Missouri Synod (LCMS), and is affiliated with the LCMS-Southern District, headquartered in Slidell, LA.',
			`The LCMS is a denomination that confesses the historic, orthodox Christian faith, a faith built on “the foundation of the apostles and prophets, Christ Jesus himself being the cornerstone ” <a
          href="https://www.biblegateway.com/passage/?search=eph+2.20&version=ESV" target="_blank">(Eph. 2:20)</a>.`,
			'The LCMS, headquartered in St. Louis, Mo., is mission-oriented and Bible-based. Today, the LCMS has nearly 2 million baptized members in more than 6,000 congregations and some 9,000 pastors. Two seminaries and nine colleges and universities operate under the auspices of the LCMS, and its congregations operate the largest Protestant parochial school system in America.'
		]}
	/>
	<AutoGrid max="200px" fitOrFill="fill"
		><Button
			{...{
				href: 'https://lcms.org',
				text: 'LCMS.org',
				target: '_blank'
			}}
		/></AutoGrid
	>
</MainBlock>
