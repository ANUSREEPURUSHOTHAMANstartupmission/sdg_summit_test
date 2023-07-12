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
				'panel': "url('img/AdobeStock_601366423.jpeg')",
				'talks': "url('img/talk.jpeg')",
				'master': "url('img/master.jpeg')",
				'workshop': "url('img/workshop.jpeg')",
				'showcase': "url('img/showcase.jpeg')",
				'investor': "url('img/investorconnect.jpeg')",
				'flea': "url('img/flea.jpeg')",
				'networking': "url('img/networking.jpeg')",
				'stati': "url('img/ststi.mp4')",


				'sdg1':"url('img/SDG1.svg')",
				'sdg2':"url('img/SDG2.svg')",
				'sdg3':"url('img/SDG3.svg')",
				'sdg4':"url('img/SDG4.svg')",
				'sdg5':"url('img/SDG5.svg')",
				'sdg6':"url('img/SDG6.svg')",
				'sdg7':"url('img/SDG7.svg')",
				'sdg8':"url('img/SDG8.svg')",
				'sdg9':"url('img/SDG9.svg')",
				'sdg10':"url('img/SDG10.svg')",
				'sdg11':"url('img/SDG11.svg')",
				'sdg12':"url('img/SDG12.svg')",
				'sdg13':"url('img/SDG13.svg')",
				'sdg14':"url('img/SDG14.svg')",
				'sdg15':"url('img/SDG15.svg')",
				'sdg16':"url('img/SDG16.svg')",
				'sdg17':"url('img/SDG17.svg')",
				'sdg18':"url('img/18.svg')"
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
