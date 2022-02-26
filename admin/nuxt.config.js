import colors from 'vuetify/es5/util/colors'
import fa from 'vuetify/es5/locale/fa'
export default {
  ssr: false,
  head: {
    titleTemplate: '%s - shop',
    title: 'shop',
    htmlAttrs: {
      lang: 'fa',
      dir: 'rtl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/main.scss'],
  env: {
    baseUrl: 'http://localhost:1000/',
  },
  plugins: ['~/plugins/apiCaller'],

  components: true,

  buildModules: ['@nuxtjs/vuetify'],

  modules: ['@nuxtjs/axios'],

  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    rtl: true,
    lang: {
      locales: { fa },
      current: 'fa',
    },
    icons: {
      iconfont: 'mdiSvg',
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {},
}
