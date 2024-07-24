<script setup>
const { data: blogPostList } = useAsyncData("blogPostList", async () => {
  const posts = await queryContent("/blog").find();
  return posts.sort((a, b) => new Date(b.dates.published) - new Date(a.dates.published));
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("de-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
</script>

<template>
  <BaseSection>
    <BaseContainer>
      <h2 class="font-sans mb-8 text-2xl">Blog</h2>
      <ul class="flex flex-wrap gap-12">
        <li
          v-for="blogPost in blogPostList"
          :key="blogPost._path"
          class="flex flex-col shadow-2xl bg-primary-900 text-white rounded-2xl group flex-1 min-h-[300px]"
        >
          <NuxtLink :to="blogPost._path" class="no-underline flex flex-col h-full">
            <div class="p-4 flex flex-col flex-grow">
              <div class="group-hover:opacity-80 transition-all ease-in-out duration-75 flex-grow">
                <p class="text-sm mb-2">{{ formatDate(blogPost.dates.published) }}</p>
                <h3 class="mb-2 text-base">{{ blogPost.title }}</h3>
              </div>
              <div v-if="blogPost.image" class="relative pb-[60%] rounded-2xl mb-2">
                <NuxtImg
                  :src="blogPost.image"
                  :alt="blogPost.title"
                  class="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
              <p class="text-sm">{{ blogPost.tags }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </BaseContainer>
  </BaseSection>
</template>
