// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;700&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', "shadcn-nuxt", "@nuxtjs/color-mode"],
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },
})