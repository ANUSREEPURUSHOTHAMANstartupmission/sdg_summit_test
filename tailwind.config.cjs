const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Georgia', ...defaultTheme.fontFamily.sans],
				'goals': ['GiorgioSans-Bold', ...defaultTheme.fontFamily.sans],
				'heading': ['Merriweather', ...defaultTheme.fontFamily.sans],
				'other' : ['Work Sans', ...defaultTheme.fontFamily.sans],
				'conent' : ['Dancing Script', ...defaultTheme.fontFamily.sans],
				'data' : ['Helvetica Neue', ...defaultTheme.fontFamily.sans],


				
			},

			backgroundImage: {
				'panel': "url('/sdg_summit_test/img/AdobeStock_601366423.jpeg')",
				'talks': "url('/sdg_summit_test/img/talk.jpeg')",
				'master': "url('/sdg_summit_test/img/master.jpeg')",
				'workshop': "url('/sdg_summit_test/img/workshop.jpeg')",
				'showcase': "url('/sdg_summit_test/img/showcase.jpeg')",
				'investor': "url('/sdg_summit_test/img/investorconnect.jpeg')",
				'flea': "url('/sdg_summit_test/img/flea.jpeg')",
				'networking': "url('/sdg_summit_test/img/networking.jpeg')",
				'stati': "url('/sdg_summit_test/img/ststi.mp4')",


				'sdg1':"url('/sdg_summit_test/img/SDG1.svg')",
				'sdg2':"url('/sdg_summit_test/img/SDG2.svg')",
				'sdg3':"url('/sdg_summit_test/img/SDG3.svg')",
				'sdg4':"url('/sdg_summit_test/img/SDG4.svg')",
				'sdg5':"url('/sdg_summit_test/img/SDG5.svg')",
				'sdg6':"url('/sdg_summit_test/img/SDG6.svg')",
				'sdg7':"url('/sdg_summit_test/img/SDG7.svg')",
				'sdg8':"url('/sdg_summit_test/img/SDG8.svg')",
				'sdg9':"url('/sdg_summit_test/img/SDG9.svg')",
				'sdg10':"url('/sdg_summit_test/img/SDG10.svg')",
				'sdg11':"url('/sdg_summit_test/img/SDG11.svg')",
				'sdg12':"url('/sdg_summit_test/img/SDG12.svg')",
				'sdg13':"url('/sdg_summit_test/img/SDG13.svg')",
				'sdg14':"url('/sdg_summit_test/img/SDG14.svg')",
				'sdg15':"url('/sdg_summit_test/img/SDG15.svg')",
				'sdg16':"url('/sdg_summit_test/img/SDG16.svg')",
				'sdg17':"url('/sdg_summit_test/img/SDG17.svg')",
				'sdg18':"url('/sdg_summit_test/img/18.svg')"
			  },
			gridTemplateColumns: ['responsive'],
			
			rotate: {
				'8': '5deg',
			  },
			  
		}
	},
	plugins: [
		require("tailwindcss-scoped-groups"),
		require('flowbite/plugin'),
	],
}
