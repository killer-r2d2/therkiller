// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				// Nuxt 3 compatibility
				future: {
								compatibilityVersion: 4,
				},
				nitro: {
								// Static generation is used to pre-render your pages as static HTML files. This can greatly improve the performance and SEO of your website.
								static: true,
				},

				routeRules: {
								'/': { prerender: true }, // Pre-renders the home page
								'/blog/**': { prerender: true }, // Pre-renders all blog pages
				},

				app: {
								pageTransition: {
												name: 'page',
												mode: 'out-in',
								},
				},

				image: {
								format: ['webp'],
				},

				content: {
								markdown: {
												// anchorLinks value false
												anchorLinks: false,
								},
				},

				css: ['~/assets/css/main.css'],
				devtools: { enabled: true },
				modules: ['@nuxt/image', '@nuxt/content', '@nuxt/eslint'],

				postcss: {
								plugins: {
												tailwindcss: {},
												autoprefixer: {},
								},
				},

				compatibilityDate: '2024-12-21',
});