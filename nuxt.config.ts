// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {  
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  image: {
    format: ['webp'],
  },
  content: {
    markdown: {
      // anchorLinks value false
      anchorLinks: false,
    }
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ["@nuxt/image", '@nuxt/content', "@nuxthq/studio"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})