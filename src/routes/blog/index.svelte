<script>
	import { posts } from '../../posts'
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
	article {
		padding: 1em 0;
		border: 1px solid black;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each posts as post}
		<article>
			<a href="/blog/{post.permalink}">
				<h2>{post.title}</h2>
				<p>{post.summary}</p>
			</a>
		</article>
	{/each}
</ul>
