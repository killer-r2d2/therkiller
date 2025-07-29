import tailwindcss from '@tailwindcss/vite';
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
		'/.well-known/**': { redirect: '/' }, // Handle Chrome DevTools requests
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
	vite: {
		plugins: [tailwindcss()],
	},

	css: ['~/assets/css/main.css'],
	devtools: { enabled: true },
	modules: [
		'@nuxt/image',
		'@nuxt/content',
		'@nuxt/eslint',
		'@nuxt/icon',
		'@nuxtjs/supabase',
	],

	supabase: {
		redirect: false,
	},
	runtimeConfig: {
		public: {
			supabaseUrl: process.env.SUPABASE_URL,
			supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
			supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY,
		},
	},

	compatibilityDate: '2024-12-21',
});
