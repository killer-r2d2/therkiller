<script setup>

const { data: blogPostList } = useAsyncData("blogPostList", async () => {
  const posts = await queryContent("/blog").find();
  return posts.sort((a, b) => new Date(b.dates.published) - new Date(a.dates.published));
});

// helper function to format dates in:
// example: 01-05-2024
// swiss format: 5. Mai 2024
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
      <ul
        class="flex flex-col md:flex-row justify-between gap-12 md:grid md:grid-cols-3"
      >
        <li
          v-for="blogPost in blogPostList"
          :key="blogPost._path"
          class="shadow-2xl bg-primary-900 text-white rounded-2xl group"
        >
          <NuxtLink :to="blogPost._path" class="no-underline">
            <div class="p-4">
              <div
                class="group-hover:opacity-80 transition-all ease-in-out duration-75"
              >
                <p class="text-sm mb-2">
                  {{ formatDate(blogPost.dates.published) }}
                </p>
                <h3 class="mb-2 text-base">
                  {{ blogPost.title }}
                </h3>

              </div>
              <div v-if="blogPost.image" class="aspect-[5/3] rounded-2xl">
                <NuxtImg
                  :src="blogPost.image"
                  :alt="blogPost.title"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  class="rounded-2xl"
                />
              </div>
              <p class="mb-2 text-sm">
                  {{ blogPost.tags }}
                </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </BaseContainer>
  </BaseSection>
</template>
