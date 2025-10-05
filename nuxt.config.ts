// https://nuxt.com/docs/api/configuration/nuxt-config
import "./lib/env";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",

  ],
  eslint: {
    config: {
      standalone: false, // <---
    },
  },
  colorMode: {
    dataValue: "theme",
  },
});
