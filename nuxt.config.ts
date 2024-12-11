// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['./assets/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase'],
  plugins: ['~/plugins/supabase'],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY
    }
  },
  supabase: {
    redirect: false,
  }
})
