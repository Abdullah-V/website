import head from './config/head.js'
import css from './config/css.js'
import plugins from './config/plugins.js'
import buildModules from './config/buildModules.js'
import modules from './config/modules.js'
import pwa from './config/modules/pwa.js'
import env from './config/env.js'
import robots from './config/modules/robots.js'
import sitemap from './config/modules/sitemap.js'
import googleAnalytics from './config/modules/googleAnalytics.js'

export default {
  head,
  css,
  plugins,
  buildModules,
  modules,
  pwa,
  env,
  robots,
  sitemap,
  googleAnalytics,


  // Others

  components: true,

  serverMiddleware: {
    '/api': '~/api'
  },
}
