<script setup lang="ts">
const route = useRoute();

const slugParam = route.params.slug;
const slugSegments = Array.isArray(slugParam)
	? slugParam
	: typeof slugParam === 'string'
		? [slugParam]
		: [];

const blogContentPath = `/blog/${slugSegments.join('/')}`;

const { data: blogPost } = await useAsyncData(`blogPost:${blogContentPath}`, () =>
	queryCollection('content').path(blogContentPath).first()
);
</script>

<template>
	<main>
		<BaseSection>
			<BaseContainer>
				<!-- create a back button -->
				<NuxtLink to="/" class="mb-8 max-w-max text-accent hover:text-accent-hover inline-flex items-center gap-2 transition-colors duration-200 motion-reduce:transition-none">
					<Icon name="lucide:arrow-left" size="26" />
					back
				</NuxtLink>

				<!-- Display the content only if the blogPost is available -->
				<ContentRenderer
					v-if="blogPost"
					:value="blogPost"
					class="prose-themed prose prose-p:font-serif prose-strong:font-serif prose-strong:text-accent prose-li:font-serif"
				/>
				<p v-else class="text-muted">
					Post not found.
				</p>
			</BaseContainer>
		</BaseSection>
	</main>
</template>
