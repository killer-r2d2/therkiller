<script setup>
const { data: blogPostList } = useAsyncData("blogPostList", () => {
  return queryContent("/blog").find();
});
</script>

<template>
  <BaseSection>
    <BaseContainer>
      <div class="flex flex-col md:flex-row justify-between">
        <div
          v-for="blogPost in blogPostList"
          :key="blogPost._path"
          class="card article"
        >
          <NuxtLink :to="blogPost._path">
            <section class="blog-post-card card article">
              <div class="media">
                <div class="media-content has-text-centered">
                  <h3 class="title article-title has-text-weight-bold">
                    {{ blogPost.title }}
                  </h3>
                  <!-- if there is an image, render the image -->
                  <div v-if="blogPost.image" class="image is-16by9">
                    <img
                      :src="blogPost.image"
                      :alt="blogPost.title"
                      class="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
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
