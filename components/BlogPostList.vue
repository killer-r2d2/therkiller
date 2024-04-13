<script setup>
const { data: blogPostList } = useAsyncData("blogPostList", () => {
  return queryContent("/blog").find();
});
</script>

<template>
  <BaseSection>
    <BaseContainer>
      <div class="flex flex-col md:flex-row justify-between gap-8 md:grid md:grid-cols-3">
        <div
          v-for="blogPost in blogPostList"
          :key="blogPost._path"
          class=""
        >
          <NuxtLink :to="blogPost._path">

              <div class="">
                <div class="">
                  <h3 class="title article-title has-text-weight-bold mb-4">
                    {{ blogPost.title }}
                  </h3>
                  <div v-if="blogPost.image" class="aspect-square">
                    <img
                      :src="blogPost.image"
                      :alt="blogPost.title"
                      class="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </div>
          </NuxtLink>
        </div>
      </div>
    </BaseContainer>
  </BaseSection>
</template>

<style>
.blog-post-card {
  padding-top: 2.5rem;
  padding-bottom: 3rem;
}

.blog-post-card .card-content {
  padding: 1rem;
}

.blog-post-card .title {
  margin-bottom: 1rem;
}
</style>
