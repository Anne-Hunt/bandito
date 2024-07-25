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
  }
  // auth: {
  //   strategies: {
  //     auth0: {
  //       domain: 'domain.auth0.com',
  //       clientId: '....',
  //       audience: 'https://my-api-domain.com/'
  //     }
  //   }
  // }
})