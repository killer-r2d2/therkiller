<script setup lang="ts">
	const props = withDefaults(
		defineProps<{
			heading: string;
			description: string;
			limit?: number;
			showAllLink?: boolean;
			headingLevel?: 'h1' | 'h2';
		}>(),
		{
			limit: undefined,
			showAllLink: false,
			headingLevel: 'h2',
		}
	);

	const { getAllPosts } = useBlog();
	const { data: allBlogPosts } = await getAllPosts();

	const blogPostList = computed(() => {
		const posts = allBlogPosts.value ?? [];

		return props.limit === undefined
			? posts
			: posts.slice(0, Math.max(0, props.limit));
	});

	const articleHeadingLevel = computed(() =>
		props.headingLevel === 'h1' ? 'h2' : 'h3'
	);
</script>

<template>
	<BaseSection>
		<BaseContainer>
			<div class="grid grid-cols-12 gap-x-8 gap-y-16">
				<div class="col-span-12 md:col-span-4">
					<component :is="headingLevel" class="mb-8 font-sans text-2xl">
						{{ heading }}
					</component>
					<p>{{ description }}</p>
				</div>
				<div class="col-span-12 md:col-span-6 md:col-start-7">
					<ul class="flex flex-col gap-y-8">
						<li v-for="blogPost in blogPostList" :key="blogPost.path">
							<BlogArticle
								:blog-post="blogPost"
								:heading-level="articleHeadingLevel"
							/>
						</li>
					</ul>
					<NuxtLink
						v-if="showAllLink"
						to="/blog"
						class="mt-10 inline-flex items-center gap-2 text-accent transition-colors duration-200 hover:text-accent-hover motion-reduce:transition-none"
					>
						View all blog posts
						<Icon name="lucide:arrow-right" size="20" aria-hidden="true" />
					</NuxtLink>
				</div>
			</div>
		</BaseContainer>
	</BaseSection>
</template>
