<script lang="ts">
	import Article from '$components/Article.svelte';
	import MainBlock from '$components/MainBlock.svelte';
	import SubHeading from '$components/SubHeading.svelte';
	import Title from '$components/Title.svelte';
</script>

<svelte:head>
	<meta name="description" content="FAQ for parents." />
	<title>GSLC School - Parents</title>
</svelte:head>

<MainBlock maxWidth="74ex">
	<Title title="Uniforms" />
	<Article
		text="GSLS believes that the way the child feels about himself and the way
  they dress directly influences their attitude about school. Since school can be thought of as the
  child’s workplace, the way he or she dresses should reflect this philosophy. The School Board
  has adopted an official school uniform. All students in grades K-5 will wear their uniforms
  except on special days that will be specified. Our school uniform offers students several choices
  in the form of colors and styles of clothing, while providing consistency, neatness, safety and a
  sense of modesty. We want to dress our best out of respect for our Lord."
	/>
	<SubHeading hrule={true} label="Attire" />
	<Article
		text="The school uniform attire consists of a polo shirt, slacks, shorts, skorts, jumpers, dresses,
  sweatshirts or cardigans, which can be ordered through the school. If purchasing outside of
  GSLS, these items should be khaki or navy. A white blouse or shirt may be worn. Socks or tights
  must be worn in solid colors; white, khaki, or navy. Leather shoes or athletic style sneakers are
  acceptable. The school requires the purchase of at least one polo shirt with the school’s logo
  on it from the school."
	/>
	<SubHeading hrule={true} label="Rules" />
	<Article>
		<ol>
			<li>
				<p>
					All shorts, jumpers, skorts, and skirts must be worn at an appropriate length. Avoid
					sagging or tight-fitting uniforms.
				</p>
			</li>
			<li><p>All students may wear shorts year-round.</p></li>
			<li>
				<p>To maintain modesty, girls should wear shorts under skirts, jumpers, and dresses.</p>
			</li>
			<li><p><strong>Make-up of any kind is prohibited.</strong></p></li>
			<li>
				<p>
					For health and safety reasons, all students must wear socks and closed toe shoes. Athletic
					or dress shoes are acceptable. <strong
						>Sandal-style shoes and flip flops may not be worn.</strong
					>
				</p>
			</li>
			<li>
				<p>
					Hairstyles should be clean, well-groomed, and out of the eyes. Hair length should not
					interfere with physical activities or be a distraction in the classroom.
				</p>
			</li>
			<li><p>On PE days, athletic shoes/gym shoes should be worn.</p></li>
		</ol>
	</Article>
	<SubHeading hrule={true} />
	<Article
		text="We expect both students and parents to adhere to and support these guidelines. Any child not
  in compliance with these guidelines will be asked to correct the infraction and a note will be
  sent to the parent explaining the problem. The administrative personnel reserve the right to
  have a child call home for proper clothing when out of dress code."
	/>
</MainBlock>

<style lang="scss">
</style>
