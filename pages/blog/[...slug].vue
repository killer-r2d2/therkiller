<template>
  <main>
    <BaseSection>
      <BaseContainer>
        <!-- create a back button -->
        <NuxtLink to="/" class="text-primary-400 mb-8 block max-w-max">Back</NuxtLink>

        <!-- Display the content only if the blogPost is available -->
        <ContentDoc class="prose text-white prose-headings:text-white prose-strong:text-primary-400 prose-a:text-white prose-p:font-serif prose-li:font-serif prose-strong:font-serif" />
      </BaseContainer>
    </BaseSection>
  </main>
</template>
