<script setup lang="ts">
// Import the BlogPost type
import type { BlogPost } from '@/types/blogPost';
const props = defineProps<{
  blogPost: BlogPost;
}>()
// helper function to format dates in:
// example: 01-05-2024
// swiss format: 5. Mai 2024
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("de-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
</script>

<template>
  <div class="relative h-full group">
    <div class="after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[5px] after:bg-gradient-to-r after:from-transparent after:via-primary-400 after:to-transparent after:rounded-md after:shadow-lg after:transition-all after:duration-300 after:ease-in-out after:scale-x-0 group-hover:after:scale-x-100 h-full">
      <NuxtLink
        :to="props.blogPost._path"
        class="no-underline flex flex-col h-full z-10 opacity-80 hover:opacity-100"
      >
        <div class="p-4 flex flex-col flex-grow">
          <div class="flex-grow">
            <p class="text-sm mb-2">
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
