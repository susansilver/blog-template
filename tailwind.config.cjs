/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/banner.webp')",
      },

      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
