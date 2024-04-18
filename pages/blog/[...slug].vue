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
        <ContentDoc class="prose text-white prose-headings:text-white prose-strong:text-primary-400"/>
      </BaseContainer>
    </BaseSection>
  </main>
</template>
