<script setup></script>
<template>
  <BaseSection>
    <BaseContainer>
        <div
          class=" grid grid-cols-1 sm:grid-cols-2 gap-5 overflow-hidden sm:mx-0 md:grid-cols-3"
        >
          <div class="p-4 border-2 border-white rounded-lg flex justify-center items-center ">
            <NuxtLink
              to="https://nuxt.com/"
              target="_blank"
              aria-label="Visit Nuxtjs"
              class="w-full object-contain inline-flex justify-center transform scale-100 transition-all hover:scale-110"
            >
              <LogoNuxt class="max-w-24" />
            </NuxtLink>
          </div>
          <div class="p-4 border-2 border-white rounded-lg flex justify-center items-center">
            <NuxtLink
              to="https://tailwindcss.com/"
              target="_blank"
              aria-label="Visit Tailwind CSS"
              class="w-full object-contain inline-flex justify-center transform scale-100 transition-all hover:scale-110"
            >
              <LogoTailwind class="max-w-24" />
            </NuxtLink>
          </div>
          <div class="p-4 border-2 border-white rounded-lg flex justify-center items-center">
            <NuxtLink
              to="https://getkirby.com//"
              target="_blank"
              aria-label="Visit Kirby cms"
              class="w-full object-contain inline-flex justify-center transform scale-100 transition-all hover:scale-110"
            >
              <LogoKirby class="max-w-24" />
            </NuxtLink>
          </div>
          <div class="p-4 border-2 border-white rounded-lg flex justify-center items-center">
            <NuxtLink
              to="https://strapi.io/"
              target="_blank"
              aria-label="Visit Strapi.io Headless CMS"
              class="w-full object-contain inline-flex justify-center transform scale-100 transition-all hover:scale-110"
            >
              <LogoStrapi class="max-w-24" />
            </NuxtLink>
          </div>
          <div class="p-4 border-2 border-white rounded-lg flex justify-center items-center">
            <NuxtLink
              to="https://nextjs.org/"
              target="_blank"
              aria-label="Visit Nextjs"
              class="w-full object-contain inline-flex justify-center transform scale-100 transition-all hover:scale-110"
            >
              <LogoNextjs class="max-w-24" />
            </NuxtLink>
          </div>
          <div class="p-4 border-2 border-white rounded-lg flex justify-center items-center">
            <NuxtLink
              to="https://supabase.com/"
              target="_blank"
              aria-label="Visit Supabase"
              class="w-full object-contain inline-flex justify-center transform scale-100 transition-all hover:scale-110"
            >
              <LogoSupabase class="max-w-24" />
            </NuxtLink>
          </div>
        </div>
    </BaseContainer>
  </BaseSection>
</template>
