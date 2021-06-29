import googleAnalytics from "./modules/googleAnalytics.js"

const buildModules = [
  '@nuxtjs/color-mode',
  ["@nuxtjs/google-analytics", googleAnalytics]
]

export default buildModules
