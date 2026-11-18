export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  css: ['~/assets/styles/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#f2efe9' },
        { name: 'color-scheme', content: 'light' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/favicon.svg' }
      ]
    }
  },

  components: [{ path: '~/components', pathPrefix: false }],

  imports: {
    dirs: ['constants', 'composables']
  },

  nitro: {
    prerender: {
      routes: ['/', '/fa']
    }
  }
})
