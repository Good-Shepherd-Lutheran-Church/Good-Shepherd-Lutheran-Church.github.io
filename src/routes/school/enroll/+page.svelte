<script lang="ts">
	import Article from '$components/Article.svelte';
	import MainBlock from '$components/MainBlock.svelte';
	import Title from '$components/Title.svelte';
</script>

<MainBlock maxWidth="74ex">
	<Title title="Aftercare" tocTitle="Aftercare" />
	<Article>
		<p>
			<strong
				>$7.00/hour per child by monthly contract (Available from dismissal until 5:30 PM.)</strong
			>
		</p>
		<p>
			<strong
				>$7.00/hour for non-contracted aftercare with 24-hour notice and availability. (Available
				until 5:30 PM.)</strong
			>
		</p>
		<p>
			Contracted Aftercare is due monthly in advance. Aftercare fees not paid within 10 days of
			billing will incur a $25.00 late fee. If payment is not received within 5 days after the late
			fee is assessed, child may be withheld from aftercare until the bill is paid in full.
		</p>
		<p><strong>Complimentary</strong> morning care M-F starting at 7:00 AM.</p>
	</Article>
</MainBlock>

<style lang="scss">
	p {
		margin-block-end: 1rem;
	}
</style>
