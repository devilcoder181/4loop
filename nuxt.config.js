export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '4LOOP Electromechanical - #1 in Dubai',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.4loop.ae' },
      { name: 'description', content: 'No Matter how big or Small, Complex or Straight Forward your installation requirements in Major Fire & Electrome- chanical Works, Four loop Team is ready to meet them and you can be sure of quality workmanship, commitment and expertise each time , Every Time'},
        { name: 'keywords', content: 'Electromechanical Planning & Estimation of Projects Site Supervision Own Labor Force Full own Site Commissioning Maintenance Contracts'},
        { name: 'author', content: '4LOOP LLC'},
        { property: 'og:image', content: '/apple-icon-180x180.png'},
        { property: 'og:description', content: 'No Matter how big or Small, Complex or Straight Forward your installation requirements in Major Fire & Electrome- chanical Works, Four loop Team is ready to meet them and you can be sure of quality workmanship, commitment and expertise each time , Every Time'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', size: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', size: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', size: '72x72', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', size: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', size: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', size: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', size: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', size: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type:'image/png', size: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'icon', type:'image/png', size: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type:'image/png', size: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type:'image/png', size: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  styleResources: {
    scss: ['@/assets/styles/frontend-components/_variables.scss', '@/assets/styles/frontend-components/_mixin.scss']
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
