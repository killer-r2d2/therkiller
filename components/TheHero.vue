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
            <ContentDoc class="text-white a:underline"/>
          </div>
          <div class="flex justify-evenly mb-8"><Socials /></div>
          <div><Logos/></div>
        </div>
      </div>
    </div>
  </div>
</template>

