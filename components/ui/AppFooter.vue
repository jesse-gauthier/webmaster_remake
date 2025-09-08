<script setup>
import { Icon } from '@iconify/vue';
const currentYear = new Date().getFullYear();

const footerLinks = {
  Services: [
    { name: 'WordPress', url: '/wordpress' },
    { name: 'Shopify', url: '/shopify' },
    { name: 'Web Applications', url: '/web-applications' },
    { name: 'Monthly Maintenance', url: '/maintenance' },
    { name: 'Consultations', url: '/consultations' },
    { name: 'SEO Services', url: '/seo' },
  ],
  Company: [
    { name: 'About Us', url: '/about' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' },
  ],
  Resources: [
    { name: 'Free SEO Checklist', url: '/seo-checklist' },
    { name: 'New Client Form', url: '/contact' },
    { name: 'Startup Partnership', url: '/startup-partnership' },
    { name: 'Technology Stack', url: '/technology-stack' },
  ],
  Legal: [
    { name: 'Privacy Policy', url: '/policy#privacy' },
    { name: 'Terms of Service', url: '/policy#terms' },
    { name: 'Cookie Policy', url: '/policy#cookies' },
  ],
};

// Social links now use Iconify icon names instead of Font Awesome classes
const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ottawawebmasters/',
    icon: 'mdi:instagram', // alternatives: 'fa6-brands:instagram', 'simple-icons:instagram'
  },
];
</script>

<template>
  <footer
    id="footer"
    class="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden"
    role="contentinfo"
  >
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div
        class="absolute -right-40 -top-40 w-96 h-96 bg-accent rounded-full"
      ></div>
      <div
        class="absolute -left-20 bottom-20 w-80 h-80 bg-accent-light rounded-full"
      ></div>
      <div
        class="absolute right-1/4 top-20 w-64 h-64 bg-primary-300 rounded-full"
      ></div>
    </div>

    <div class="container-site relative z-10 px-4 sm:px-6 lg:px-8 py-16 pt-20">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
        <!-- Company Info -->
        <div class="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-10 h-10 bg-accent rounded-lg flex items-center justify-center"
            >
              <span class="text-white font-bold text-xl">W</span>
            </div>
            <span class="text-xl font-bold">Web Masters</span>
          </div>
          <p class="text-primary-100 text-sm mb-6 leading-relaxed">
            Ottawa's trusted web development partner. Building digital
            experiences that drive growth and success.
          </p>

          <!-- Social Links -->
          <div class="flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-accent transition-all duration-300 group"
              :aria-label="`Visit our ${social.name} page`"
            >
              <Icon
                :icon="social.icon"
                class="text-primary-100 group-hover:text-white transition-colors"
                width="22"
                height="22"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <!-- Footer Links -->
        <div
          v-for="(links, category) in footerLinks"
          :key="category"
          class="space-y-3"
        >
          <h3
            class="text-lg font-semibold mb-4 text-white flex items-center gap-2"
          >
            <span class="w-8 h-0.5 bg-accent"></span>
            {{ category }}
          </h3>
          <nav :aria-label="`${category} navigation`">
            <ul class="space-y-3" role="list">
              <li v-for="link in links" :key="link.name">
                <router-link
                  :to="link.url"
                  class="text-primary-100 hover:text-accent text-sm transition-all duration-300 hover:translate-x-1 inline-block focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-800 rounded"
                  :aria-current="$route.path === link.url ? 'page' : undefined"
                >
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <!-- Contact Info Bar -->
      <div class="py-8 border-t border-white/10 mb-8">
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left"
        >
          <div class="flex flex-col md:flex-row items-center gap-3">
            <div
              class="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center"
            >
              <Icon
                icon="mdi:email-outline"
                class="text-accent"
                width="22"
                height="22"
                aria-hidden="true"
              />
            </div>
            <div>
              <p class="text-xs text-primary-200 uppercase tracking-wider mb-1">
                Email Us
              </p>
              <a
                href="mailto:contact@ottawawebmasters.ca"
                class="text-white hover:text-accent transition-colors"
              >
                contact@ottawawebmasters.ca
              </a>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center gap-3">
            <div
              class="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center"
            >
              <Icon
                icon="mdi:map-marker"
                class="text-accent"
                width="22"
                height="22"
                aria-hidden="true"
              />
            </div>
            <div>
              <p class="text-xs text-primary-200 uppercase tracking-wider mb-1">
                Location
              </p>
              <span class="text-white">Ottawa, Ontario, Canada</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-white/10">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-primary-100 text-sm text-center md:text-left">
            &copy; {{ currentYear }} Web Masters. All rights reserved.
          </p>

          <div class="flex flex-wrap gap-4 text-sm">
            <router-link
              to="/policy#privacy"
              class="text-primary-100 hover:text-accent transition-colors"
            >
              Privacy Policy
            </router-link>
            <span class="text-primary-300">•</span>
            <router-link
              to="/policy#terms"
              class="text-primary-100 hover:text-accent transition-colors"
            >
              Terms of Service
            </router-link>
            <span class="text-primary-300">•</span>
            <router-link
              to="/policy#cookies"
              class="text-primary-100 hover:text-accent transition-colors"
            >
              Cookie Policy
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative wave at top -->
    <div class="absolute top-0 left-0 right-0 transform rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 80"
        fill="currentColor"
        preserveAspectRatio="none"
        class="w-full h-10 text-white opacity-10"
      >
        <path
          d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  </footer>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
