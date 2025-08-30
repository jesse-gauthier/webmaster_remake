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
    sourcemap: true
  },

  server: {
    headers: {
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://calendly.com https://*.calendly.com 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com; frame-src 'self' https://calendly.com https://*.calendly.com; frame-ancestors 'self'; form-action 'self'; base-uri 'self'; object-src 'none'",
      'X-Content-Type-Options': 'nosniff',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
    }
  }
})