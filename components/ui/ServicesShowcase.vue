<!-- Enhanced Services Showcase -->
<template>
  <section class="py-20 bg-gradient-to-br from-neutral-cream via-white to-primary-50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden opacity-5">
      <div class="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full animate-bounce-light"></div>
      <div class="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
    </div>

    <div class="container-site relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
          🎯 What We Do Best
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
          Our Core Services
        </h2>
        <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
          We combine cutting-edge technology with creative design to deliver digital solutions 
          that drive real business results and exceed expectations.
        </p>
      </div>

      <!-- Enhanced Services Tabs -->
      <div class="mb-20">
        <div class="flex flex-wrap justify-center mb-12 gap-3">
          <button 
            v-for="(tab, index) in tabs" 
            :key="index" 
            @click="activeTab = index"
            class="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
            :class="activeTab === index ? 
              'bg-gradient-to-r from-primary to-accent text-white shadow-lg' : 
              'bg-white text-neutral-text hover:bg-neutral-50 shadow-sm border border-neutral-200'"
          >
            <span class="flex items-center gap-2">
              <component :is="getTabIcon(index)" class="w-4 h-4" />
              {{ tab.label }}
            </span>
          </button>
        </div>

        <!-- Enhanced Tab Content -->
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100">
          <transition name="slide" mode="out-in">
            <div :key="activeTab" class="grid lg:grid-cols-2 gap-0">
              <!-- Enhanced Image Side -->
              <div class="relative bg-gradient-to-br from-primary-100 to-accent-100 h-80 lg:h-auto overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                <component 
                  v-if="activeTab === 0" 
                  :is="WebDesignSvg" 
                  class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
                />
                <component 
                  v-else-if="activeTab === 1" 
                  :is="WebDevelopmentSvg" 
                  class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
                />
                <component 
                  v-else-if="activeTab === 2" 
                  :is="ECommerceSvg" 
                  class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
                />
                <component 
                  v-else-if="activeTab === 3" 
                  :is="SeoSvg" 
                  class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
                />
                <component 
                  v-else-if="activeTab === 4" 
                  :is="MaintenanceSvg" 
                  class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
                />
                
                <!-- Floating badge -->
                <div class="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span class="text-sm font-semibold text-primary">{{ tabs[activeTab].label }}</span>
                </div>
              </div>

              <!-- Enhanced Content Side -->
              <div class="p-8 lg:p-12">
                <div class="flex items-center gap-3 mb-6">
                  <div class="bg-gradient-to-r from-primary to-accent p-3 rounded-xl text-white">
                    <component :is="getTabIcon(activeTab)" class="w-6 h-6" />
                  </div>
                  <h3 class="text-3xl font-bold text-primary">{{ tabs[activeTab].label }}</h3>
                </div>
                
                <p class="text-lg text-neutral-text mb-8 leading-relaxed">
                  {{ tabs[activeTab].description }}
                </p>

                <h4 class="font-semibold text-primary-dark mb-4 text-lg">What's Included:</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div 
                    v-for="(feature, fIndex) in tabs[activeTab].features" 
                    :key="fIndex" 
                    class="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors duration-200"
                  >
                    <div class="bg-accent bg-opacity-20 rounded-full p-1 flex-shrink-0">
                      <svg class="h-4 w-4 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-neutral-700">{{ feature }}</span>
                  </div>
                </div>

                <a href="/services" class="btn-primary inline-flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                  Learn More About {{ tabs[activeTab].label }}
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Enhanced Service Stats -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
          <div class="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
          </div>
          <div class="text-4xl font-bold text-accent mb-2">100+</div>
          <div class="text-sm font-medium text-neutral-600">Projects Completed</div>
        </div>
        
        <div class="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
          <div class="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <div class="text-4xl font-bold text-primary mb-2">98%</div>
          <div class="text-sm font-medium text-neutral-600">Client Satisfaction</div>
        </div>
        
        <div class="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
          <div class="bg-gradient-to-br from-accent-600 to-primary-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="text-4xl font-bold text-accent mb-2">12+</div>
          <div class="text-sm font-medium text-neutral-600">Years Experience</div>
        </div>
        
        <div class="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
          <div class="bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </div>
          <div class="text-4xl font-bold text-primary mb-2">24/7</div>
          <div class="text-sm font-medium text-neutral-600">Support Available</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, h } from 'vue'

import WebDesignSvg from './WebDesignSvg.vue'
import WebDevelopmentSvg from './WebDevelopmentSvg.vue'
import ECommerceSvg from './ECommerceSvg.vue'
import SeoSvg from './SeoSvg.vue'
import MaintenanceSvg from './MaintenanceSvg.vue'

const activeTab = ref(0)

// Icon components for tabs
const getTabIcon = (index) => {
  const icons = [
    // Web Design
    () => h('svg', { class: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z' })
    ]),
    // Web Development
    () => h('svg', { class: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
    ]),
    // E-Commerce
    () => h('svg', { class: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01' })
    ]),
    // SEO
    () => h('svg', { class: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
    ]),
    // Maintenance
    () => h('svg', { class: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }),
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' })
    ])
  ]
  return icons[index] || icons[0]
}

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
/* Enhanced transition styles for tab changes */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Additional hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}
</style>
