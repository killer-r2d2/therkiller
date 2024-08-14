<script setup lang="ts">
import { useRoute } from 'vue-router';
const { $blogRepository } = useNuxtApp();
const route = useRoute();

const { data: blogPost, error } = await useAsyncData(`content-${route.path}`, () => {
  return $blogRepository.getPostByPath(route.path);
});
</script>

<template>
  <main>
    <BaseSection>
      <BaseContainer>
        <!-- create a back button -->
        <NuxtLink to="/" class="text-primary-400 mb-8 block max-w-max">Back</NuxtLink>

        <!-- Display the content only if the blogPost is available -->
        <div v-if="pending">Loading...</div>
        <div v-else-if="error">Error loading post: {{ error.message }}</div>
        <ContentDoc v-else class="prose text-white prose-headings:text-white prose-strong:text-primary-400 prose-a:text-white prose-p:font-serif prose-li:font-serif prose-strong:font-serif" />
      </BaseContainer>
    </BaseSection>
  </main>
</template>
