<script setup lang="ts">

</script>

<template>
  <nav class="my-12 md:my-12 lg:my-24">
    <BaseContainer class="flex justify-center gap-x-12">
      <NuxtLink to="/"
        class="flex items-center text-right text-primary-400 hover:text-primary-300 transition-colors duration-200">
        <span class="sr-only">Go to Home Page</span>
        <Icon name="lucide:home" size="26" />
      </NuxtLink>
      <NuxtLink to="/login"
        class="flex items-center text-right text-primary-400 hover:text-primary-300 transition-colors duration-200">
        <span class="sr-only">Go to Login Page</span>
        <Icon name="lucide:circle-user" size="26" />
      </NuxtLink>
    </BaseContainer>
  </nav>
</template>