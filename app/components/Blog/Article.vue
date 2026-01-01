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
    <NuxtLink :to="blogPost.path" class="no-underline flex flex-col max-w-max">
      <div>
        <time v-if="blogPost.dates?.published" class="text-sm">{{
          formatDate(blogPost.dates.published)
        }}</time>
        <h1>{{ blogPost.title }}</h1>
        <p v-if="blogPost.tags" class="text-xs">{{ blogPost.tags }}</p>
      </div>
    </NuxtLink>
  </article>
</template>