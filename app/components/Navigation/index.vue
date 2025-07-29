<script setup lang="ts">

</script>

<template>
  <nav>
    <BaseSection>
      <BaseContainer class="flex justify-end">
        <NuxtLink to="/login"
          class="flex items-center text-right text-primary-400 hover:text-primary-300 transition-colors duration-200">
          <span class="sr-only">Go to Login Page</span>
          <Icon name="lucide:circle-user" size="26" />    
        </NuxtLink>
      </BaseContainer>
    </BaseSection>
  </nav>
</template>