export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mkt-place',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/nuxtClientInit.client.js',
    '@/plugins/utils.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxt/image',
    '@nuxtjs/universal-storage',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'MktPlace',
      name: 'Martket Place',
      author: 'Caio Alfonso',
      description: 'Encontre seu produto aqui',
      theme_color: '#9237B8',
    },
    manifest: {
      name: 'Onisaúde',
      short_name: 'Onisaúde',
      background_color: '#9237B8',
      description: 'Encontre seu produto aqui',
      display: 'standalone',
      theme_color: '#9237B8',
      lang: 'pt-br',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
