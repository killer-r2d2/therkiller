<script setup lang="ts">
	import type { BlogPost } from '~/types/blogPost';
	const props = defineProps<{
		blogPost: BlogPost;
	}>();
	// helper function to format dates in:
	// example: 01-05-2024
	// swiss format: 5. Mai 2024
	const formatDate = (date: string) => {
		return new Date(date).toLocaleDateString('de-CH', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		});
	};
</script>

<template>
	<div class="group relative h-full">
		<div
			class="h-full after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[5px] after:scale-x-0 after:rounded-md after:bg-linear-to-r after:from-transparent after:via-primary-400 after:to-transparent after:shadow-lg after:transition-all after:duration-300 after:ease-in-out after:content-[''] group-hover:after:scale-x-100"
		>
			<NuxtLink
				:to="props.blogPost._path"
				class="z-10 flex h-full flex-col no-underline opacity-80 hover:opacity-100"
			>
				<div class="flex grow flex-col p-4">
					<div class="grow">
						<p class="mb-2 text-sm">
							{{ formatDate(props.blogPost.dates.published) }}
						</p>
						<h3 class="mb-2 text-base">{{ props.blogPost.title }}</h3>
					</div>
					<p class="text-sm">{{ props.blogPost.tags }}</p>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>
