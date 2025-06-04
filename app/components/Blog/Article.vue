<script setup lang="ts">
import type { BlogPost } from '~/types/blogPost';

const props = defineProps<{
  blogPost: BlogPost;
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
    <NuxtLink :to="blogPost._path" class="no-underline flex flex-col max-w-max">
      <div>
        <time class="text-sm">{{ formatDate(blogPost.dates.published) }}</time>
        <h1>{{ blogPost.title }}</h1>
        <p>{{ blogPost.tags }}</p>
      </div>
    </NuxtLink>
  </article>
</template>