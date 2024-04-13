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
              class="mt-1 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {{ content.title }}
            </h1>
            <div class="mx-auto mt-5 mb-8 max-w-2xl">
              <ContentDoc class="text-white a:underline" />
            </div>
            <div class="flex justify-center gap-x-4"><Socials /></div>
          </div>
        </BaseContainer>
      </BaseSection>
</template>
