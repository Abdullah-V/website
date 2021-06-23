import head from './config/head.js'
import css from './config/css.js'
import plugins from './config/plugins.js'
import buildModules from './config/buildModules.js'
import modules from './config/modules.js'
import pwa from './config/pwa.js'
import env from './config/env.js'
import robots from './config/robots.js'
import sitemap from './config/sitemap.js'

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


  // Others

  components: true,

  serverMiddleware: {
    '/api': '~/api'
  },
}
