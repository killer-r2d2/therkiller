<script setup></script>
<template>
  <BaseSection>
    <BaseContainer>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-5 overflow-hidden sm:mx-0 md:grid-cols-3 p-5"
        >
          <NuxtLink
            to="https://nuxt.com/"
            target="_blank"
            aria-label="Visit Nuxtjs"
            class="transform scale-100 transition-all hover:scale-110 duration-300"
          >
            <div class="p-4 h-full border-2 border-white rounded-lg flex justify-center items-center">
              <LogoNuxt class="max-w-24" />
            </div>
          </NuxtLink>
          
          <NuxtLink
            to="https://tailwindcss.com/"
            target="_blank"
            aria-label="Visit Tailwind CSS"
            class="transform scale-100 transition-all hover:scale-110 duration-300"
          >
            <div class="p-4 h-full border-2 border-white rounded-lg flex justify-center items-center">
              <LogoTailwind class="max-w-24" />
            </div>
          </NuxtLink>

          <NuxtLink
            to="https://getkirby.com//"
            target="_blank"
            aria-label="Visit Kirby cms"
            class="transform scale-100 transition-all hover:scale-110 duration-300"
          >
            <div class="p-4 h-full border-2 border-white rounded-lg flex justify-center items-center">
              <LogoKirby class="max-w-24" />
            </div>
          </NuxtLink>

          <NuxtLink
            to="https://strapi.io/"
            target="_blank"
            aria-label="Visit Strapi.io Headless CMS"
            class="transform scale-100 transition-all hover:scale-110 duration-300"
          >
            <div class="p-4 h-full border-2 border-white rounded-lg flex justify-center items-center">
              <LogoStrapi class="max-w-24" />
            </div>
          </NuxtLink>

          <NuxtLink
            to="https://nextjs.org/"
            target="_blank"
            aria-label="Visit Nextjs"
            class="transform scale-100 transition-all hover:scale-110 duration-300"
          >
            <div class="p-4 h-full border-2 border-white rounded-lg flex justify-center items-center">
              <LogoNextjs class="max-w-24" />
            </div>
          </NuxtLink>

          <NuxtLink
            to="https://supabase.com/"
            target="_blank"
            aria-label="Visit Supabase"
            class="transform scale-100 transition-all hover:scale-110 duration-300"
          >
            <div class="p-4 h-full border-2 border-white rounded-lg flex justify-center items-center">
              <LogoSupabase class="max-w-24" />
            </div>
          </NuxtLink>
        </div>
    </BaseContainer>
  </BaseSection>
</template>
