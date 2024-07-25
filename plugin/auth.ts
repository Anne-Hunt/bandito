// import { createAuth0 } from '@auth0/auth0-vue'

// export default defineNuxtPlugin((nuxtApp) => {
//   const auth0 = createAuth0({
//     domain: 'dev-1p0yizemjvi0t77y.us.auth0.com',
//     clientId: '4oLUo8PliYOVL3bCqcvSZmfa83MzVb9j',
//     audience: 'https://www.raccoonsynthesizer.com',
//   })

//   if (process.client) {
//     nuxtApp.vueApp.use(auth0)
//   }

//   addRouteMiddleware('auth', () => {
//     if (process.client) {
//       auth0.checkSession()
//       if (!auth0.isAuthenticated.value) {
//         auth0.loginWithRedirect({
//           appState: {
//             target: useRoute().path,
//           },
//         })
//       }
//     }
//   })
// })