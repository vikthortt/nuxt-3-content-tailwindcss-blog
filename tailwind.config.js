/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'content/**/*.{md,yml,json,yaml,toml,csv}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.red[700],
          ...colors.red
        }
      },
      fontFamily: {
        sans: ["Inter"]
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
