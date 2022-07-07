/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "content/**/*.{md,yml,json,yaml,toml,csv}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      header: ["Karla"],
      body: ['"Merriweather Sans"'],
    },
    extend: {
      colors: {
        primary: "#16212B",
        secondary: "#213A55",
        "dark-gray": "#67788D",
        gray: "#B2C3D1",
        white: "#D5D6D7"
      },
      fontFamily: {
        sans: ["Karla"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
