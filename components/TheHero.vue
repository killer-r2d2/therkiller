<script setup>
const { data: content } = await useAsyncData("home", () =>
  queryContent("/").findOne()
);
</script>

<template>
  <BaseSection>
    <BaseContainer>
      <div class="text-center">
        <h1
          class="mt-1 text-4xl font-bold tracking-tight sm:text-6xl lg:text-6xl"
        >
          {{ content.title }}
        </h1>
        <div class="mx-auto mt-5 mb-8 max-w-2xl">
          <ContentDoc class="text-white a:underline" />
        </div>
        <div class="flex justify-center mb-8">
          <img class="rounded-full object-cover w-24 h-24" :src="content.profileImage" alt="Profile image Roger Killer">
        </div>
        <div class="flex justify-center gap-x-4 mb-8 lg:mb-0"><SocialLinks /></div>
      </div>
    </BaseContainer>
  </BaseSection>
</template>
