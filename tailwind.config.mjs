/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',"./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			animation: {
				'infinite-scroll': 'infinite-scroll 15s linear infinite',
			},
			keyframes: {
				'infinite-scroll': {
				from: { transform: 'translateX(0)' },
				to: { transform: 'translateX(-100%)' },
				}
			}
		},
	},
	daisyui: {
		themes: ["light"],
	  },
	plugins: [
		require('daisyui'),
		require('flowbite/plugin')
	],
}
