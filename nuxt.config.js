const HOST = "http://localhost:3000"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '. /Abdullah',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {src: 'https://kit.fontawesome.com/4d8d9d6354.js'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/app.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/aos",
      ssr: false
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  sitemap: {
    hostname: 'http://localhost:3000',
    gzip: true,
  },

  robots: {
    Sitemap: `${HOST}/sitemap.xml`
  },

  env: {
    EMAIL: process.env.EMAIL,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
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
