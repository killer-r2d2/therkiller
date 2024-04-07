<script setup>
const { data: content } = await useAsyncData("home", () =>
  queryContent("/").findOne()
);
</script>

<template>
  <div>
    <div class="grid h-screen place-items-center" id="header">
      <div class="mx-auto max-w-7xl">
        <div class="text-center">
          <h1 class="mt-1 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {{ content.title }}
          </h1>
          <div class="mx-auto mt-5 mb-8 max-w-2xl">
            <ContentDoc class="prose prose-p:text-2xl text-white prose-a:text-white prose-a:text-2xl prose-a:hover:text-opacity-75"/>
          </div>
          <div class="flex justify-evenly"><Socials /></div>
        </div>
      </div>
    </div>
  </div>
</template>

