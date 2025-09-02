export default defineNuxtConfig({
  compatibilityDate: '2025-09-02',
  devtools: { enabled: true },

  // CSS Configuration
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Auto-imports
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  // Build Configuration
  build: {
    transpile: ['@fortawesome/fontawesome-svg-core', '@fortawesome/pro-solid-svg-icons', '@fortawesome/free-brands-svg-icons']
  },

  // Head Configuration
  app: {
    head: {
      title: 'Webmaster Services - Professional Web Development & SEO',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional web development and SEO services. Custom websites, WordPress, Vue.js, and comprehensive SEO solutions.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Runtime Configuration
  runtimeConfig: {
    // Private keys (only available on server-side)
    // apiSecret: process.env.API_SECRET,

    // Public keys (exposed to client-side)
    public: {
      gtmId: process.env.NUXT_PUBLIC_GTM_ID || '',
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID || '',
      luckyOrangeId: process.env.NUXT_PUBLIC_LUCKY_ORANGE_ID || ''
    }
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  // Tailwind Configuration
  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true
  },

  // Robots Configuration
  robots: {
    UserAgent: '*',
    Allow: '/',
    Disallow: ['/admin', '/.nuxt', '/api/'],
    Sitemap: 'https://ottawawebmasters.ca/sitemap.xml'
  },

  // Sitemap Configuration
  sitemap: {
    hostname: 'https://ottawawebmasters.ca',
    gzip: true,
    routes: async () => {
      // Add any dynamic routes here
      return []
    }
  },

  // SEO Configuration (built-in Nuxt)
  seo: {
    redirectToCanonicalSiteUrl: true
  },

  // Nitro Configuration
  nitro: {
    prerender: {
      routes: [
        '/',
        '/about',
        '/services',
        '/portfolio',
        '/contact',
        '/blog',
        '/case-studies',
        '/seo-checklist',
        '/startup-partnership'
      ]
    }
  },

  // Router Configuration
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
})
