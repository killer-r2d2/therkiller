<script setup>
const { data: blogPostList } = useAsyncData("blogPostList", () => {
  return queryContent("/blog").find();
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
      <div
        class="flex flex-col md:flex-row justify-between gap-12 md:grid md:grid-cols-3"
      >
        <div v-for="blogPost in blogPostList" :key="blogPost._path" class="">
          <NuxtLink :to="blogPost._path" class="no-underline group">
              <div class="">
                <div class="flex justify-between mb-2 group-hover:text-primary-400 transition-all ease-in-out delay-150">
                  <h3>
                    {{ blogPost.title }}
                  </h3>
                  <p class="text-sm relative top-1">
                    {{ formatDate(blogPost.dates.published) }}
                  </p>
                </div>
                <div v-if="blogPost.image" class="aspect-[5/3] mb-2">
                  <img
                    :src="blogPost.image"
                    :alt="blogPost.title"
                    class="object-cover h-full w-full"
                  />
                </div>
                <p class="group-hover:text-white">
                  {{ blogPost.description }}
                </p>
              </div>
          </NuxtLink>
        </div>
      </div>
    </BaseContainer>
  </BaseSection>
</template>