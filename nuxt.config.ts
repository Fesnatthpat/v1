// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  css: ['~/assets/css/main.css', '~/assets/css/style.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
