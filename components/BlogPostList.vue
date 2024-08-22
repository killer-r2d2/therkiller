<script setup>
const { $blogRepository } = useNuxtApp();

const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return $blogRepository.getAllPosts();
});
</script>

<template>
  <BaseSection>
    <BaseContainer>
      <h2 class="font-sans mb-8 text-2xl">Blog</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <li
          v-for="blogPost in blogPostList"
          :key="blogPost._path"
          class="flex flex-col shadow-2xl bg-primary-900 text-white rounded-2xl group flex-1 col-span-1 relative"
        >
          <BlogCard :blogPost="blogPost" />
        </li>
      </ul>
    </BaseContainer>
  </BaseSection>
</template>
