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
        <ContentDoc class="prose text-white prose-headings:text-white"/>
      </BaseContainer>
    </BaseSection>
  </main>
</template>
