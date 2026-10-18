import tailwindcss from '@tailwindcss/vite';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// Opt in to Nuxt 5 compatibility defaults.
	future: {
		compatibilityVersion: 5,
	},
	nitro: {
		// Static generation is used to pre-render your pages as static HTML files. This can greatly improve the performance and SEO of your website.
		static: true,
	},

	routeRules: {
		'/': { prerender: true }, // Pre-renders the home page
		'/blog/**': { prerender: true }, // Pre-renders all blog pages
		'/.well-known/**': { redirect: '/' }, // Handle Chrome DevTools requests
	},

	app: {
		head: {
			script: [
				{
					defer: true,
					src: 'https://umami.therkiller.dev/script.js',
					'data-website-id': 'b6fb3b6a-95e9-42e3-8fb9-f7cd44579e00',
				},
			],
		},
		pageTransition: {
			name: 'page',
			mode: 'out-in',
		},
	},

	image: {
		format: ['webp'],
	},
	icon: {
		clientBundle: {
			icons: [
				'lucide:arrow-left',
				'lucide:arrow-right',
				'lucide:menu',
				'lucide:moon',
				'lucide:sun',
				'lucide:x',
			],
			scan: false,
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},

	css: ['~/assets/css/main.css'],
	devtools: { enabled: true },
	modules: ['@nuxt/image', '@nuxt/content', '@nuxt/eslint', '@nuxt/icon'],

	compatibilityDate: '2026-03-28',
});
