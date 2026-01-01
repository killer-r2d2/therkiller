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
				<NuxtLink to="/" class="mb-8 max-w-max text-primary-400 inline-flex items-center gap-2">
					<Icon name="lucide:arrow-left" size="26" style="color: text-primary-400" />
					back
				</NuxtLink>

				<!-- Display the content only if the blogPost is available -->
				<ContentRenderer
					v-if="blogPost"
					:value="blogPost"
					class="prose text-white prose-headings:text-white prose-p:font-serif prose-a:text-white prose-strong:font-serif prose-strong:text-primary-400 prose-li:font-serif"
				/>
				<p v-else class="text-white">
					Post not found.
				</p>
			</BaseContainer>
		</BaseSection>
	</main>
</template>
