<script setup>

const { getAllPosts } = useBlog();
const blogPostList = await getAllPosts();
</script>

<template>
	<BaseSection>
		<BaseContainer>
			<div class="grid grid-cols-12 gap-x-8 gap-y-16">
				<div class="md:col-span-4 col-span-12">
					<h2 class="mb-8 font-sans text-2xl">Blog</h2>
					<p>
						Why do I write blog posts? It's the joy of discovering new insights. At the same time, I'm learning more about the topics I write about.
					</p>
				</div>
				<ul class="flex flex-col gap-y-8 md:col-span-6 col-span-12 md:col-start-7">
					<li v-for="blogPost in blogPostList" :key="blogPost._path">
						<BlogArticle :blog-post="blogPost" />
					</li>
				</ul>
			</div>
		</BaseContainer>
	</BaseSection>
</template>
