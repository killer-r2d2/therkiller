<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const goBack = () => {
	const previousLocation = window.history.state?.back;

	if (typeof previousLocation === 'string') {
		router.back();
		return;
	}

	void router.push('/blog');
};

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
				<button
					type="button"
					class="mb-8 inline-flex max-w-max cursor-pointer items-center gap-2 text-accent underline transition-colors duration-200 hover:text-accent-hover hover:opacity-80 motion-reduce:transition-none"
					@click="goBack"
				>
					<Icon name="lucide:arrow-left" size="26" />
					Back
				</button>

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
