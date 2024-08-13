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
  <NuxtLink
    :to="props.blogPost._path"
    class="no-underline flex flex-col h-full"
  >
    <div class="p-4 flex flex-col flex-grow">
      <div
        v-if="props.blogPost.image"
        class="relative pb-[60%] rounded-2xl mb-2"
      >
        <NuxtImg
          :src="props.blogPost.image"
          :alt="props.blogPost.title"
          class="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
          loading="lazy"
          quality="65"
          format="webp"
        />
      </div>
      <div
        class="group-hover:opacity-80 transition-all ease-in-out duration-75 flex-grow"
      >
        <p class="text-sm mb-2">
          {{ formatDate(props.blogPost.dates.published) }}
        </p>
        <h3 class="mb-2 text-base">{{ props.blogPost.title }}</h3>
      </div>
      <p class="text-sm">{{ props.blogPost.tags }}</p>
    </div>
  </NuxtLink>
</template>
