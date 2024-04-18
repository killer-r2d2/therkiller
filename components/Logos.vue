<script setup></script>
<template>
  <BaseSection>
    <BaseContainer>
        <div
          class=" grid grid-cols-1 sm:grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3"
        >
          <div class="bg-white/5 p-8 sm:p-10">
            <NuxtLink
              to="https://nuxt.com/"
              target="_blank"
              aria-label="Visit Nuxtjs"
              class="w-full object-contain inline-flex justify-center"
            >
              <LogoNuxt class="max-w-24" />
            </NuxtLink>
          </div>
          <div class="bg-white/5 p-6 sm:p-10 inline-flex items-center">
            <NuxtLink
              to="https://tailwindcss.com/"
              target="_blank"
              aria-label="Visit Tailwind CSS"
              class="w-full object-contain inline-flex justify-center"
            >
              <LogoTailwind class="max-w-24" />
            </NuxtLink>
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <NuxtLink
              to="https://laravel.com/"
              target="_blank"
              aria-label="Visit Kirby cms"
              class="w-full object-contain inline-flex justify-center"
            >
              <LogoKirby class="max-w-24" />
            </NuxtLink>
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <NuxtLink
              to="https://strapi.io/"
              target="_blank"
              aria-label="Visit Strapi.io Headless CMS"
              class="w-full object-contain inline-flex justify-center"
            >
              <LogoStrapi class="max-w-24" />
            </NuxtLink>
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <NuxtLink
              to="https://nextjs.org/"
              target="_blank"
              aria-label="Visit Nextjs"
              class="w-full object-contain inline-flex justify-center"
            >
              <LogoNextjs class="max-w-24" />
            </NuxtLink>
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <NuxtLink
              to="https://supabase.com/"
              target="_blank"
              aria-label="Visit Supabase"
              class="w-full object-contain inline-flex justify-center"
            >
              <LogoSupabase class="max-w-24" />
            </NuxtLink>
          </div>
        </div>
    </BaseContainer>
  </BaseSection>
</template>
