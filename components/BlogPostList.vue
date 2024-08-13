<script setup>
const { data: blogPostList } = useAsyncData("blogPostList", async () => {
  const posts = await queryContent("/blog").find();
  return posts.sort(
    (a, b) => new Date(b.dates.published) - new Date(a.dates.published)
  );
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
          class="flex flex-col shadow-2xl bg-primary-900 text-white rounded-2xl group flex-1 col-span-1"
        >
          <BlogCard :blogPost="blogPost" />
        </li>
      </ul>
    </BaseContainer>
  </BaseSection>
</template>
