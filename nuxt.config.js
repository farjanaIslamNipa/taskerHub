export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: `${process.env.APP_NAME}`,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [
      // Bootstrap Js cdn
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', integrity:"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM", crossorigin:"anonymous" },
      // Google autocomplete api
      {src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCMwCSdUrceC9GydbcIo-AG26HZBXCTR7c&libraries=places"}
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png?v2', sizes: '32x32' },
      // Bootstrap css
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC", crossorigin:"anonymous" },
      // Fontawsome icon css
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css', integrity:"sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==", crossorigin:"anonymous", referrerpolicy:"no-referrer" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
    '~/assets/css/frontend/style.css',
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-datepicker', ssr: false },
    { src: '~plugins/vue-js-modal.js', ssr: false },
    { src: '~plugins/vue-tag-input.js', ssr: false },
    { src: '~plugins/vue-multiselect.js', ssr: false },
    { src: '~plugins/vue-google-autocomplete', ssr: false },
    { src: '~plugins/aos', ssr: false },
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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["aos"],
  },
  router: {
    extendRoutes(nuxtRoutes) {
      nuxtRoutes.map(route => {
        route.path = route.path.replace('/frontend', '');
        route.name = route.name.replace('frontend-', '');
        route.path = route.path.replace('/website', '');
        route.name = route.name.replace('website-', '');
        route.path = route.path.replace('/customer', '');
        route.name = route.name.replace('customer-', '');
        route.path = route.path.replace('/backend', '');
        route.name = route.name.replace('backend-', '');
        route.path = route.path.replace('/auth', '');
        route.name = route.name.replace('auth-', '');
        return route;
      });
    },
},
publicRuntimeConfig: {
  APP_NAME: process.env.APP_NAME
},
}
