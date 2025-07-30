<script setup lang="ts">

</script>

<template>
  <nav class="my-12 md:my-12 lg:my-24 ">
    <div class="flex justify-end container mx-auto">
      <div class="border-2 border-primary-400/20 bg-primary-400/20 backdrop-blur-[1px] max-w-max flex items-center justify-center gap-x-4 rounded-full p-2">
        <NuxtLink to="/"
          class="flex items-center justify-center w-[26px] h-[26px] text-primary-400 hover:text-primary-300 transition-colors duration-200">
          <span class="sr-only">Go to Home Page</span>
          <Icon name="lucide:home" size="26" />
        </NuxtLink>
        <NuxtLink to="/login"
          class="flex items-center justify-center w-[26px] h-[26px] text-primary-400 hover:text-primary-300 transition-colors duration-200">
          <span class="sr-only">Go to Login Page</span>
          <Icon name="lucide:circle-user" size="26" />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>