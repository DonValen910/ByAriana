// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  modules: [],
  plugins: [],
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ByAriana es tu salón de belleza de confianza, especializado en manicura, pedicura, lifting de pestañas y más. Visítanos para una experiencia de belleza inigualable.' },
      ],
      link: [
        { rel: 'icon', type: 'image/webp', href: '/byariana.webp' }
      ]
    }
  },
})