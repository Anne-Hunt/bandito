// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "nuxt-mdi"],
  app: {
    head: {
      title: 'Bandito',
      meta: [
        { name: 'description', content: 'For Raccoons By Raccoons' }
      ],
      link: [
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }

  },
  runtimeConfig: {
    connectionString: process.env.CONNECTION_STRING,

  },
  // auth: {
  //   strategies: {
  //     auth0: {
  //       domain: process.env.AUTH_DOMAIN,
  //       clientId: process.env.AUTH_CLIENT_ID,
  //       audience: process.env.AUTH_AUDIENCE
  //     }
  //   }
  // }
})