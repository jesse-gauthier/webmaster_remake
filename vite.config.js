import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunks
          'vendor-vue': ['vue', 'vue-router', 'pinia'],
          'vendor-ui': ['@vueuse/head'],
          
          // Feature-based chunks
          'blog': [
            '/src/views/BlogsView.vue',
            '/src/views/BlogArticleView.vue',
            '/src/components/BlogCard.vue',
            '/src/components/BlogPagination.vue'
          ],
          'forms': [
            '/src/components/ContactForm.vue',
            '/src/components/NewClientForm.vue',
            '/src/components/SeoAuditForm.vue',
            '/src/views/StartupPartnershipForm.vue'
          ],
          'services': [
            '/src/views/ServicesView.vue',
            '/src/views/WordPressView.vue',
            '/src/views/ShopifyView.vue',
            '/src/views/MaintenanceView.vue',
            '/src/views/ConsultationsView.vue'
          ]
        },
        // Optimize chunk file names
        chunkFileNames: (chunkInfo) => {
          const name = chunkInfo.name
          if (name.includes('node_modules')) {
            return 'vendor/[name].[hash].js'
          }
          return 'chunks/[name].[hash].js'
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]
          
          // Group assets by type
          if (/png|jpe?g|gif|tiff|bmp|ico/i.test(extType)) {
            return 'assets/images/[name].[hash].[ext]'
          }
          if (/svg/i.test(extType)) {
            return 'assets/icons/[name].[hash].[ext]'
          }
          if (/css/i.test(extType)) {
            return 'assets/styles/[name].[hash].[ext]'
          }
          if (/woff2?|eot|ttf|otf/i.test(extType)) {
            return 'assets/fonts/[name].[hash].[ext]'
          }
          return 'assets/[name].[hash].[ext]'
        }
      }
    },
    // Optimize build settings
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    // Enable gzip compression for better performance
    reportCompressedSize: true
  },

  server: {
    headers: {
      // Frame protection
      'X-Frame-Options': 'SAMEORIGIN',
      
      // Enhanced CSP - more restrictive for development
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://calendly.com https://*.calendly.com https://embed.tawk.to 'unsafe-inline' 'unsafe-eval'", // unsafe-eval needed for Vite dev
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://embed.tawk.to",
        "font-src 'self' https://fonts.gstatic.com https://embed.tawk.to",
        "img-src 'self' data: https: blob:",
        "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.tawk.to wss://*.tawk.to ws://localhost:*", // ws for HMR
        "frame-src 'self' https://calendly.com https://*.calendly.com https://*.tawk.to",
        "frame-ancestors 'self'",
        "form-action 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "media-src 'self'",
        "worker-src 'self'",
        "manifest-src 'self'"
      ].join('; '),
      
      // Content type protection
      'X-Content-Type-Options': 'nosniff',
      
      // XSS protection
      'X-XSS-Protection': '1; mode=block',
      
      // HTTPS enforcement
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
      
      // Referrer policy
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      
      // Permissions policy
      'Permissions-Policy': [
        'camera=()',
        'microphone=()',
        'geolocation=(self)',
        'interest-cohort=()',
        'accelerometer=()',
        'gyroscope=()',
        'magnetometer=()',
        'payment=()',
        'usb=()'
      ].join(', '),
      
      // Cross-origin policies - relaxed for Tawk.to integration
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
      // Removed 'Cross-Origin-Embedder-Policy': 'require-corp' to allow Tawk.to
      'Cross-Origin-Resource-Policy': 'cross-origin'
    }
  }
})