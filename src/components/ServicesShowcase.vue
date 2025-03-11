<!-- ServicesVisual.vue -->
<template>
  <section data-aos="fade-up" class="max-w-[95dvw] mx-auto min-h-[50dvh] py-16 px-2"
    aria-labelledby="services-visual-title">
    <div class="container-site">
      <h2 id="services-visual-title" class="capitalize text-4xl font-bold text-center mb-6">
        Our Expertise
      </h2>

      <p class="text-neutral-text text-center max-w-2xl mx-auto mb-16">
        We combine cutting-edge technology with creative design to deliver web solutions
        that help businesses succeed in the digital landscape.
      </p>

      <!-- Services Tabs -->
      <div class="mb-16">
        <div class="flex flex-wrap justify-center mb-8 gap-2">
          <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
            class="px-5 py-2 rounded-full text-sm font-medium transition-colors"
            :class="activeTab === index ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-text hover:bg-neutral-200'">
            {{ tab.label }}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <!-- Using transition for smooth tab changes -->
          <transition name="fade" mode="out-in">
            <div :key="activeTab" class="grid md:grid-cols-2 gap-0">
              <!-- Image Side -->
              <div class="bg-primary-light h-64 md:h-auto overflow-hidden relative">
                <component v-if="activeTab === 0" :is="WebDesignSvg" class="w-full h-full object-cover" />
                <component v-else-if="activeTab === 1" :is="WebDevelopmentSvg" class="w-full h-full object-cover" />
                <component v-else-if="activeTab === 2" :is="ECommerceSvg" class="w-full h-full object-cover" />
                <component v-else-if="activeTab === 3" :is="SeoSvg" class="w-full h-full object-cover" />
                <component v-else-if="activeTab === 4" :is="MaintenanceSvg" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-primary bg-opacity-20"></div>
              </div>

              <!-- Content Side -->
              <div class="p-8 md:p-10">
                <h3 class="text-2xl font-semibold text-primary mb-4">{{ tabs[activeTab].label }}</h3>
                <p class="text-neutral-text mb-6">{{ tabs[activeTab].description }}</p>

                <h4 class="font-semibold text-primary-dark mb-3">What We Offer:</h4>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                  <li v-for="(feature, fIndex) in tabs[activeTab].features" :key="fIndex" class="flex items-start">
                    <svg class="h-5 w-5 text-accent flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                    <span>{{ feature }}</span>
                  </li>
                </ul>

                <!-- <a :href="tabs[activeTab].link" class="btn-primary inline-flex items-center">
                  Learn More
                  <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a> -->
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Service Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="p-6 bg-white rounded-lg shadow-sm">
          <div class="text-4xl font-bold text-accent mb-2">100+</div>
          <div class="text-sm text-neutral-text">Projects Completed</div>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-sm">
          <div class="text-4xl font-bold text-accent mb-2">98%</div>
          <div class="text-sm text-neutral-text">Client Satisfaction</div>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-sm">
          <div class="text-4xl font-bold text-accent mb-2">12+</div>
          <div class="text-sm text-neutral-text">Years Experience</div>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-sm">
          <div class="text-4xl font-bold text-accent mb-2">24/7</div>
          <div class="text-sm text-neutral-text">Support Available</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import WebDesignSvg from './WebDesignSvg.vue'
import WebDevelopmentSvg from './WebDevelopmentSvg.vue'
import ECommerceSvg from './ECommerceSvg.vue'
import SeoSvg from './SeoSvg.vue'
import MaintenanceSvg from './MaintenanceSvg.vue'

const activeTab = ref(0)

const tabs = [
  {
    label: 'Web Design',
    image: '/images/services/web-design.jpg',
    description: 'We craft visually stunning, user-friendly websites that reflect your brand identity and engage your target audience. Our designs are not just beautiful but also functional and conversion-focused.',
    features: [
      'Custom Design Solutions',
      'Mobile Responsive Layouts',
      'UX/UI Design',
      'Brand Identity Integration',
      'Interactive Elements',
      'Accessibility Compliance',
      'Cross-Browser Testing',
      'Wireframing & Prototyping'
    ],
    link: '/services/web-design'
  },
  {
    label: 'Web Development',
    image: '/images/services/web-development.jpg',
    description: 'Our development team builds powerful, scalable websites and web applications using modern technologies and best practices to ensure performance, security, and maintainability.',
    features: [
      'Custom Website Development',
      'Frontend & Backend Solutions',
      'CMS Integration',
      'API Development',
      'Database Design',
      'Performance Optimization',
      'Security Implementation',
      'Technical Documentation'
    ],
    link: '/services/web-development'
  },
  {
    label: 'E-Commerce',
    image: '/images/services/ecommerce.jpg',
    description: 'Transform your business with a robust online store that offers seamless shopping experiences, secure payments, and comprehensive inventory management to drive sales and growth.',
    features: [
      'Custom Shop Development',
      'Product Catalog Management',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing Systems',
      'Customer Account Management',
      'Mobile Shopping Optimization',
      'Sales Analytics'
    ],
    link: '/services/ecommerce'
  },
  {
    label: 'SEO Services',
    image: '/images/services/seo.jpg',
    description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO strategies tailored to your business goals, target audience, and competitive landscape.',
    features: [
      'Technical SEO Audits',
      'Keyword Research & Strategy',
      'On-Page Optimization',
      'Content Strategy',
      'Local SEO',
      'Performance Tracking',
      'Competitor Analysis',
      'Link Building'
    ],
    link: '/services/seo'
  },
  {
    label: 'Maintenance',
    image: '/images/services/maintenance.jpg',
    description: 'Keep your website secure, up-to-date, and performing at its best with our comprehensive maintenance services, regular monitoring, and timely technical support.',
    features: [
      'Regular Updates & Patches',
      'Security Monitoring',
      'Performance Optimization',
      'Backup Management',
      'Technical Support',
      'Content Updates',
      'Bug Fixes',
      'Health Checks & Reports'
    ],
    link: '/services/maintenance'
  }
]
</script>

<style scoped>
h2 {
  font-size: 2em;
}

h3 {
  font-size: 1.8em;
  font-weight: medium;
}

/* Transition styles for tab changes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
