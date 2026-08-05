<script setup lang="ts">
	useSeoMeta({
		title: 'Blog | therkiller.dev',
		description: 'All blog posts from therkiller.dev.',
	});
</script>

<template>
	<main>
		<BlogPostList
			heading="All blog posts"
			description="Browse the complete collection of articles about web development, tooling, testing, and self-hosting."
			heading-level="h1"
		/>
	</main>
</template>
