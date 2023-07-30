/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        primary: '#164641',
        secondary: '#D9ED82',
        lightText:"#869EA6"
      },
      backgroundImage: {
        gradient:
          'linear-gradient(180deg, #20433F 0.34%, rgba(0, 0, 0, 0.00) 76.99%)',
        gradient2:
          'linear-gradient(182deg, rgba(0, 0, 0, 0.21) 0%, #065951 99.27%)',
      },
    },
  },
  plugins: [],
}
