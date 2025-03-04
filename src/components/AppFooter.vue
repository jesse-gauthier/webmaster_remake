<script setup>
import { ref } from 'vue'

const currentYear = new Date().getFullYear()

const footerLinks = {
  Services: [
    { name: 'WordPress', url: '/wordpress' },
    { name: 'Shopify', url: '/shopify' },
    { name: 'Monthly Maintenance', url: '/maintenance' },
    { name: 'Consultations', url: '/consultations' }
  ],
  Company: [
    { name: 'About Us', url: '/about' }
  ],
  Legal: [
    { name: 'Policies', url: '/policies' },
  ]
}
</script>

<template>
  <footer class="bg-primary text-white">
    <div class="container-site px-4 sm:px-6 lg:px-8 py-10">
      <!-- Quick Links -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(links, category) in footerLinks" :key="category" class="space-y-3">
          <h3 class="text-lg font-semibold mb-3 text-white">{{ category }}</h3>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.name">
              <router-link :to="link.url" class="text-primary-light hover:text-accent transition-colors text-sm">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-10 pt-6 border-t border-primary-dark text-center">
        <p class="text-primary-light text-sm">
          &copy; {{ currentYear }} Web Masters. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
