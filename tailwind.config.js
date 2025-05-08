/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./app/components/**/*.{js,vue,ts}',
		'./app/layouts/**/*.vue',
		'./app/pages/**/*.vue',
		'./app/plugins/**/*.{js,ts}',
		'./app/app.vue',
		'./app/error.vue',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Lato', 'sans-serif'],
				serif: ['Roboto Slab', 'serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#4B32FB',
					400: '#54BDC8',
					500: '#4B32FB',
					600: '#136289',
					700: '#0C4368',
					800: '#06314C',
					900: '#0E0E43',
				},
			},
		},
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
