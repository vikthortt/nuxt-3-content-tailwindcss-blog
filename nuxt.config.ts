import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {rel: 'icon', href: 'favicon.png'}
      ]
    },
  },
  css: ["@/assets/css/fonts.css"],
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    highlight: {
      theme: "dracula-soft",
    },
  },
});
