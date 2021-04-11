export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '. /Abdullah',
    meta: [
      { charset: 'utf-8' },
      { name: 'language', content: 'en-EN'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Personal website of Abdullah V.' },
      { name: 'author', content: 'Abdullah Veliyev'},
      { name: 'designer', content: 'Abdullah Veliyev' },
      { name: 'publisher', content: 'Abdullah Veliyev' },
      { name: 'web_author', content: 'Abdullah Veliyev' },
      { name: 'rating', content: 'general'},
      { name: 'revisit-after', content: '1 days'},
      { name: 'keywords', content: 'Abdullah,Veliyev,Abdullah Veliyev,Personal,website,Personal website'},
      { name: 'distribution', content: 'global' },
      { name: 'theme-color', content: '#106EE3' }
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
    {
      src: "~/plugins/vue-notification",
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
    hostname: process.env.BASE,
    gzip: true,
  },

  robots: {
    Sitemap: `${process.env.BASE}/sitemap.xml`
  },

  env: {
    EMAIL: process.env.EMAIL,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    BASE: process.env.BASE
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Website',
      short_name: 'Website',
      description: "Personal website of Abdullah V.",
      theme_color: "#106EE3",
    },
    meta: {
      author: 'Abdullah Veliyev',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   filenames: {
  //     chunk: ({ isDev }) => isDev ? '[name].js' : '[chunkhash].js'
  //   }
  // },

  serverMiddleware: {
    '/api': '~/api'
  },

}
