<script setup lang="ts">
	import type { Collections } from '@nuxt/content';

	const props = defineProps<{
		blogPost: Collections['content'];
		headingLevel?: 'h2' | 'h3';
	}>();

	const { blogPost } = toRefs(props);

	const formatDate = (date: string) => {
		return new Date(date).toLocaleDateString('de-CH', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		});
	};
</script>

<template>
	<article>
		<NuxtLink :to="blogPost.path" class="flex max-w-max flex-col no-underline">
			<div>
				<time v-if="blogPost.dates?.published" class="text-sm text-muted">
					{{ formatDate(blogPost.dates.published) }}
				</time>
				<component :is="headingLevel ?? 'h2'">{{ blogPost.title }}</component>
				<p v-if="blogPost.tags" class="text-xs text-muted">
					{{ blogPost.tags }}
				</p>
			</div>
		</NuxtLink>
	</article>
</template>
