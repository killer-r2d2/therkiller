<script setup>
const { path } = useRoute();

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
  <main>
    <BaseSection>
      <BaseContainer>
        <!-- create a back button -->
        <NuxtLink to="/" class="text-primary-400 mb-8 block max-w-max">Back</NuxtLink>
        <ContentDoc class="prose text-white prose-headings:text-white prose-strong:text-primary-400 prose-a:text-white prose-p:font-serif prose-li:font-serif prose-strong:font-serif"/>
      </BaseContainer>
    </BaseSection>
  </main>
</template>
