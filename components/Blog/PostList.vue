<script setup>
	const { getAllPosts } = useBlog();
	const blogPostList = await getAllPosts();
</script>

<template>
	<BaseSection>
		<BaseContainer>
			<h2 class="mb-8 font-sans text-2xl">Blog</h2>
			<ul class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
				<li
					v-for="blogPost in blogPostList"
					:key="blogPost._path"
					class="group relative col-span-1 flex flex-1 flex-col rounded-2xl bg-primary-900 text-white shadow-2xl"
				>
					<BlogCard :blog-post="blogPost" />
				</li>
			</ul>
		</BaseContainer>
	</BaseSection>
</template>
