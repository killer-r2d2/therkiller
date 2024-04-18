// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  content: {
    markdown: {
      // anchorLinks value false
      anchorLinks: false,
    }
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ["@nuxt/image", '@nuxt/content'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})