<script setup>
</script>
<template>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="-mx-6 grid grid-cols-1 sm:grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
        <div class="bg-white/5 p-8 sm:p-10">
          <NuxtLink to="https://nuxt.com/" target="_blank" class="max-h-12 w-full object-contain">
            <LogoNuxt />
          </NuxtLink>
        </div>
        <div class="bg-white/5 p-6 sm:p-10 inline-flex items-center">
          <NuxtLink to="https://tailwindcss.com/" target="_blank" class="max-h-12 w-full object-contain">
            <LogoTailwind />
          </NuxtLink>
        </div>
        <div class="bg-white/5 p-6 sm:p-10">
          <NuxtLink to="https://laravel.com/" target="_blank" class="max-h-12 w-full object-contain">
            <LogoKirby />
          </NuxtLink>
        </div>
        <div class="bg-white/5 p-6 sm:p-10">
          <NuxtLink to="https://strapi.io/" target="_blank" class="max-h-12 w-full object-contain">
            <LogoStrapi />
          </NuxtLink>
        </div>
        <div class="bg-white/5 p-6 sm:p-10">
          <NuxtLink to="https://nextjs.org/" target="_blank" class="max-h-12 w-full object-contain">
            <LogoNextjs />
          </NuxtLink>
        </div>
        <div class="bg-white/5 p-6 sm:p-10">
          <NuxtLink to="https://vercel.com/" target="_blank" class="max-h-12 w-full object-contain">
            <LogoSupabase />
          </NuxtLink>
        </div>
      </div>
    </div>
</template>
