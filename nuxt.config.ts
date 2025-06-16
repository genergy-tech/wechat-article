// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@vueuse/nuxt', "@nuxt/ui"],
  ssr: false,
  runtimeConfig: {
    public: {
      umamiWebsiteID: '',
    }
  },
  app: {
    head: {
      meta: [
        {
          name: 'referrer',
          content: 'no-referrer',
        },
      ],
    },
  },
  proxy: {
    '/mapi/': {
        // target: 'https://www.manage.ixms.tech',
        target: 'https://www.test-manage.ixms.tech',
        // target: 'http://192.168.20.190:8102',
        changeOrigin: true,
        pathRewrite: { '^/api/': '' }
    }
  }
})
