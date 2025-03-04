// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import { useSeo } from '@/composables/useSeo'
import { seoConfig } from '@/config/seo.config'

// Import views
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'
import WordPressView from '@/views/WordPressView.vue'
import ShopifyView from '@/views/ShopifyView.vue'
import MaintenanceView from '@/views/MaintenanceView.vue'
import ConsultationsView from '@/views/ConsultationsView.vue'
import PolicyView from '@/views/PolicyView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/wordpress',
    name: 'WordPress',
    component: WordPressView,
  },
  {
    path: '/shopify',
    name: 'Shopify',
    component: ShopifyView,
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: MaintenanceView,
  },
  {
    path: '/consultations',
    name: 'Consultations',
    component: ConsultationsView,
  },
  {
    path: '/policies',
    name: 'Policy',
    component: PolicyView,
  },
  // 404 page
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      seo: {
        title: 'Page Not Found',
        description: 'The page you are looking for does not exist',
        noindex: true, // Tell search engines not to index 404 pages
      },
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Smooth scroll to top on route change
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

// SEO route guard
router.beforeEach((to, from, next) => {
  // Check if the route has SEO meta
  if (to.meta.seo) {
    const seoData = to.meta.seo

    // Apply SEO data
    useSeo({
      title: seoData.title,
      description: seoData.description,
      url: to.path,
      type: seoData.type || 'website',
      image: seoData.image,
      structuredData: seoData.structuredData,
    })

    // Handle noindex pages
    if (seoData.noindex) {
      const metaTag = document.createElement('meta')
      metaTag.setAttribute('name', 'robots')
      metaTag.setAttribute('content', 'noindex, nofollow')
      document.head.appendChild(metaTag)
    }
  }

  next()
})

export default router
