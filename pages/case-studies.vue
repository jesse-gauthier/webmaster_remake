<template>
  <div>
    <!-- Enhanced Hero Section -->
    <section
      aria-labelledby="case-studies-hero-title"
      class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 md:py-32 overflow-hidden"
    >
      <!-- Background decorative elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div class="absolute -right-40 -top-40 w-96 h-96 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute -left-20 top-1/2 w-80 h-80 bg-accent-light rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
        <div class="absolute right-1/4 -bottom-20 w-64 h-64 bg-accent-300 rounded-full animate-bounce-light" style="animation-delay: 2s"></div>
      </div>

      <!-- Floating particles -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div class="absolute top-20 left-20 w-4 h-4 bg-accent-300 rounded-full animate-bounce-light" style="animation-delay: 0.5s"></div>
        <div class="absolute top-40 right-32 w-3 h-3 bg-accent-400 rounded-full animate-bounce-light" style="animation-delay: 1.5s"></div>
        <div class="absolute bottom-32 left-1/3 w-5 h-5 bg-primary-300 rounded-full animate-bounce-light" style="animation-delay: 2.5s"></div>
        <div class="absolute top-1/2 right-20 w-2 h-2 bg-accent-200 rounded-full animate-bounce-light" style="animation-delay: 3.5s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge with Emoji -->
          <span class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span class="text-lg">📊</span>
            Real Results, Real Stories
          </span>
          
          <h1
            id="case-studies-hero-title"
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight"
          >
            Success Stories &
            <span class="block text-accent-300 animate-slide-up" style="animation-delay: 0.1s">Case Studies</span>
          </h1>
          <p class="text-xl md:text-2xl text-primary-100 mb-8 animate-slide-up leading-relaxed max-w-3xl mx-auto" style="animation-delay: 0.2s">
            Deep dive into our most successful projects. Explore the challenges, solutions, and measurable results we delivered for our clients across various industries.
          </p>

          <!-- Enhanced case studies stats -->
          <div class="flex flex-wrap justify-center items-center gap-8 pt-8 animate-slide-up" style="animation-delay: 0.3s">
            <div class="flex items-center gap-3">
              <div class="bg-accent bg-opacity-20 rounded-full p-2">
                <svg class="h-6 w-6 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">4 Case Studies</div>
                <div class="text-xs text-primary-200">Detailed Analysis</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="bg-primary-300 bg-opacity-30 rounded-full p-2">
                <svg class="h-6 w-6 text-primary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Proven Results</div>
                <div class="text-xs text-primary-200">Measurable Impact</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="bg-accent-600 bg-opacity-30 rounded-full p-2">
                <svg class="h-6 w-6 text-accent-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Happy Clients</div>
                <div class="text-xs text-primary-200">Success Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#FFFFFF" preserveAspectRatio="none" class="w-full h-20">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>

    <!-- Enhanced Filter Section -->
    <section class="py-16 bg-gradient-to-br from-neutral-cream via-white to-primary-50 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div class="absolute top-10 right-10 w-32 h-32 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-10 left-10 w-24 h-24 bg-primary rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <span class="inline-block bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            🔍 Filter & Explore
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
            Browse by Category
          </h2>
          <p class="text-lg text-neutral-text max-w-2xl mx-auto">
            Filter our case studies by project type to find examples most relevant to your needs
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <button
            @click="activeFilter = 'all'"
            class="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            :class="
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-xl'
                : 'bg-white text-neutral-text hover:bg-neutral-50 border border-neutral-200 hover:border-primary/20'
            "
            aria-label="Show all case studies"
          >
            All Projects
          </button>
          <button
            v-for="category in categories"
            :key="category"
            @click="activeFilter = category"
            class="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg capitalize"
            :class="
              activeFilter === category
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-xl'
                : 'bg-white text-neutral-text hover:bg-neutral-50 border border-neutral-200 hover:border-primary/20'
            "
            :aria-label="`Show ${category} case studies`"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Enhanced Case Studies List -->
    <section class="py-20 bg-white relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-3">
        <div class="absolute top-40 right-20 w-96 h-96 bg-primary rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-40 left-20 w-80 h-80 bg-accent rounded-full animate-bounce-light" style="animation-delay: 2s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="grid grid-cols-1 gap-24">
          <!-- Case Study Item (repeated for each study) -->
          <div
            v-for="study in filteredCaseStudies"
            :key="study.id"
            class="case-study-item bg-gradient-to-br from-white to-neutral-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-neutral-100 transition-all duration-500 hover:shadow-3xl transform hover:-translate-y-2"
            :id="study.id"
            :data-category="study.category"
          >
            <!-- New Layout: Logo centered at top, Challenge/Solution below, Results on right -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <!-- Left Column: Logo + Challenge/Solution -->
              <div class="lg:col-span-2">
                <!-- Logo Section -->
                <div class="text-center mb-8">
                  <div class="inline-block relative">
                    <div
                      class="rounded-2xl shadow-xl h-full w-full bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center p-6 mb-6 border border-primary-100"
                    >
                      <img
                        :src="study.images.featured"
                        :alt="`${study.title} logo`"
                        class="w-full h-auto object-contain filter drop-shadow-lg"
                      />
                    </div>
                    <span
                      class="inline-block bg-gradient-to-r from-primary to-accent text-white text-sm px-4 py-2 rounded-full capitalize font-semibold shadow-lg"
                    >
                      {{ study.category }}
                    </span>
                  </div>

                  <h2
                    class="text-2xl md:text-3xl font-bold text-primary mt-4 mb-3"
                  >
                    {{ study.title }}
                  </h2>

                  <p class="text-lg text-neutral-text max-w-2xl mx-auto">
                    {{ study.summary }}
                  </p>
                </div>

                <!-- Enhanced Challenge and Solution Side by Side -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <!-- Challenge Box -->
                  <div class="bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl shadow-xl border border-primary-100">
                    <div class="flex items-center mb-4">
                      <div class="bg-gradient-to-r from-primary to-primary-600 rounded-full p-2 mr-3">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                      </div>
                      <h3 class="text-xl font-bold text-primary">
                        The Challenge
                      </h3>
                    </div>
                    <p class="text-neutral-text leading-relaxed">
                      {{ study.challenge }}
                    </p>
                  </div>

                  <!-- Solution Box -->
                  <div class="bg-gradient-to-br from-white to-accent-50 p-8 rounded-2xl shadow-xl border border-accent-100">
                    <div class="flex items-center mb-4">
                      <div class="bg-gradient-to-r from-accent to-accent-600 rounded-full p-2 mr-3">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                      </div>
                      <h3 class="text-xl font-bold text-primary">
                        Our Solution
                      </h3>
                    </div>
                    <p class="text-neutral-text leading-relaxed">
                      {{ study.solution }}
                    </p>
                  </div>
                </div>

                <!-- Enhanced CTA Button -->
                <div class="text-center mt-10">
                  <a
                    :href="study.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    :aria-label="`Visit ${study.title} website`"
                  >
                    View Live Project
                    <Icon
                      icon="mdi:open-in-new"
                      class="ml-3 transition-transform group-hover:translate-x-1 group-hover:scale-110"
                      width="20"
                      height="20"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>

              <!-- Enhanced Right Column: Results -->
              <div class="lg:col-span-1">
                <div class="bg-gradient-to-br from-accent-50 to-white p-8 rounded-2xl h-fit sticky top-8 shadow-xl border border-accent-100">
                  <div class="flex items-center mb-6">
                    <div class="bg-gradient-to-r from-accent to-accent-600 rounded-full p-2 mr-3">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-primary">
                      Results Achieved
                    </h3>
                  </div>
                  <ul class="space-y-4">
                    <li
                      v-for="(result, idx) in study.results"
                      :key="idx"
                      class="flex items-start p-4 bg-white rounded-xl shadow-sm border border-accent-100"
                    >
                      <Icon
                        icon="mdi:chart-line-variant"
                        class="text-accent mt-1 mr-3 flex-shrink-0"
                        width="24"
                        height="24"
                        aria-hidden="true"
                      />
                      <span class="text-neutral-text font-medium leading-relaxed">{{
                        result
                      }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Enhanced Client Testimonial -->
            <div class="mt-16 bg-gradient-to-br from-primary-50 to-accent-50 p-10 rounded-3xl shadow-2xl border border-primary-100 relative overflow-hidden">
              <!-- Background decoration -->
              <div class="absolute top-4 right-4 opacity-10">
                <svg class="w-20 h-20 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"/>
                </svg>
              </div>
              
              <blockquote class="relative z-10">
                <div class="text-center mb-6">
                  <span class="inline-block bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Client Testimonial
                  </span>
                </div>
                
                <p class="text-xl text-primary-dark mb-8 relative z-10 italic font-medium leading-relaxed text-center">
                  "{{ study.testimonial.quote }}"
                </p>
                <footer class="flex items-center justify-center">
                  <div
                    class="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-xl font-bold mr-4 shadow-xl"
                  >
                    {{ study.testimonial.author.charAt(0) }}
                  </div>
                  <div class="text-center">
                    <p class="font-bold text-primary text-lg">
                      {{ study.testimonial.author }}
                    </p>
                    <p class="text-neutral-600 font-medium">
                      {{ study.testimonial.position }}
                    </p>
                    <p class="text-primary font-semibold">
                      {{ study.testimonial.company }}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>

            <!-- Enhanced Key Features Section -->
            <div class="mt-16 bg-gradient-to-br from-white to-neutral-50 p-10 rounded-3xl shadow-2xl border border-neutral-100">
              <div class="flex items-center mb-8">
                <div class="bg-gradient-to-r from-primary to-accent rounded-full p-3 mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-primary">
                  Technologies & Features Delivered
                </h3>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  v-for="tech in study.technologies"
                  :key="tech"
                  class="flex items-center p-6 bg-gradient-to-r from-white to-primary-50 rounded-2xl shadow-lg border border-primary-100 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                >
                  <Icon
                    icon="mdi:check-circle"
                    class="text-accent mr-4 flex-shrink-0"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  />
                  <span class="text-neutral-text font-semibold">{{ tech }}</span>
                </div>
              </div>
            </div>

            <!-- Divider -->
            <div
              v-if="study.id !== caseStudies.length"
              class="mt-16 border-t border-neutral-200"
            ></div>
          </div>

          <!-- No results message -->
          <div
            v-if="filteredCaseStudies.length === 0"
            class="text-center py-12"
          >
            <p class="text-lg text-neutral-text">
              No case studies found in this category. Please try another filter.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Call to Action -->
    <section
      aria-labelledby="case-studies-cta-title"
      class="relative bg-gradient-to-br from-accent-600 via-accent-700 to-primary-800 py-20 md:py-32 overflow-hidden"
    >
      <!-- Background decorative elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div class="absolute -left-20 -top-20 w-80 h-80 bg-white rounded-full animate-bounce-light"></div>
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-300 rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <!-- Floating particles -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div class="absolute top-20 right-20 w-4 h-4 bg-white rounded-full animate-bounce-light" style="animation-delay: 0.5s"></div>
        <div class="absolute bottom-32 left-32 w-3 h-3 bg-primary-200 rounded-full animate-bounce-light" style="animation-delay: 2s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Badge -->
          <span class="inline-flex items-center gap-2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span class="text-lg">🚀</span>
            Your Success Story Awaits
          </span>

          <h2
            id="case-studies-cta-title"
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 animate-slide-up leading-tight"
          >
            Ready to Create Your
            <span class="block text-accent-200 animate-slide-up" style="animation-delay: 0.1s">Success Story?</span>
          </h2>
          <p class="text-xl md:text-2xl text-white opacity-90 mb-12 animate-slide-up leading-relaxed" style="animation-delay: 0.2s">
            Let's collaborate to transform your vision into a successful digital solution. Join our portfolio of satisfied clients and achieve measurable results.
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up" style="animation-delay: 0.3s">
            <router-link
              to="/contact"
              class="btn-lg bg-white text-accent hover:bg-neutral-cream hover:text-accent-600 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              Start Your Project
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </router-link>
            <router-link
              to="/portfolio"
              class="btn-lg border-2 border-white text-white hover:bg-white hover:text-accent-600 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              View More Work
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import { useSeo } from '~/composables/useSeo';
import countyCooperageImage from '~/assets/countycooperage.svg';
import gottaGoImage from '~/assets/gottago.svg';
import upMediaImage from '~/assets/upmedia.svg';
import lumaCrmImage from '~/assets/lumacrm.svg';

// Active filter for case studies
const activeFilter = ref('all');

// Categories
const categories = [
  'web design',
  'web application',
  'e-commerce',
  'blog management',
];

// Case studies data
const caseStudies = [
  {
    id: 1,
    title: 'The County Cooperage',
    category: 'e-commerce',
    summary:
      'An artisanal wine barrel manufacturer needed an e-commerce solution that showcased their craftsmanship while enabling direct sales to wineries and enthusiasts.',
    challenge:
      'The County Cooperage needed a premium e-commerce platform that could handle custom barrel orders with various specifications, showcase their craftsmanship, and educate customers about their traditional wine barrel manufacturing process. They also needed a way to manage inventory across their retail and wholesale channels.',
    solution:
      'We developed a custom e-commerce solution with advanced product configuration options, allowing customers to specify wood types, toasting levels, and sizes. We integrated a blog with educational content about cooperage and wine barrel aging. The website features high-quality photography and videography showcasing the manufacturing process.',
    technologies: [
      'Vue.js',
      'Tailwind CSS',
      'Stripe',
      'Shopify API',
      'Responsive Design',
    ],
    results: [
      '43% increase in online sales in the first quarter after launch',
      '68% reduction in customer service inquiries due to improved product information',
      'Average session duration increased from 1:45 to 4:20 minutes',
      'Wholesale order value increased by 22%',
    ],
    testimonial: {
      quote:
        'The website perfectly captures the traditional craftsmanship that goes into our barrels while providing a modern shopping experience. Our customers can now easily configure exactly what they need, and our sales have increased significantly since launch.',
      author: 'Joe Thompson',
      position: 'Owner',
      company: 'The County Cooperage',
    },
    images: {
      featured: countyCooperageImage,
    },
    link: 'https://www.thecountycooperage.ca',
  },
  {
    id: 2,
    title: 'GottaGo Ottawa',
    category: 'blog management',
    summary:
      'A nonprofit organization working to improve access to public washrooms for homeless individuals through partnerships with local businesses.',
    challenge:
      'GottaGo Ottawa needed a platform to raise awareness about the lack of public washroom facilities, coordinate volunteer efforts, process donations, and maintain an up-to-date database of participating businesses offering their facilities to those in need. Their existing website was outdated and difficult to maintain.',
    solution:
      'We created a WordPress website with custom post types for participating businesses, enabling automatic generation of an interactive map showing available facilities. We implemented a donation system integrated with Stripe and PayPal, a volunteer sign-up portal, and a blog to share news and advocacy efforts. The mobile-first design ensures users can find facilities while on the move.',
    technologies: [
      'WordPress',
      'Custom Theme',
      'Google Maps API',
      'Donation Integration',
      'Responsive Design',
    ],
    results: [
      'Volunteer sign-ups increased by 156% in the first three months',
      'Monthly donations increased by 78% compared to the previous platform',
      'Mobile usage of the bathroom locator increased by 340%',
      '35 new businesses joined the program after the website launch',
    ],
    testimonial: {
      quote:
        'The new website has completely transformed our ability to serve the community. The interactive map makes it easy for people to find bathrooms when they need them, and the streamlined donation system has significantly increased our funding for advocacy work.',
      author: 'Sarah Jenkins',
      position: 'Executive Director',
      company: 'GottaGo Ottawa',
    },
    images: {
      featured: gottaGoImage,
    },
    link: 'https://new.gottago-ottawa.ca/',
  },
  {
    id: 3,
    title: 'UpMedia Video Production',
    category: 'web design',
    summary:
      'A professional video production company needed a portfolio website that would showcase their work and attract high-value corporate clients.',
    challenge:
      'UpMedia needed a website that could effectively display their video portfolio with minimal load times while conveying their premium positioning. They required an easy-to-update system for adding new projects and testimonials, as well as integrating their booking system for production consultations.',
    solution:
      'We designed a visually striking WordPress website with optimized video embedding from multiple sources (Vimeo, YouTube) that maintains fast loading times. The portfolio system allows for categorization by industry and project type, with detailed case studies for each production. We implemented a custom booking system integrated with their Google Calendar for scheduling consultations.',
    technologies: [
      'WordPress',
      'Custom Theme',
      'Video Optimization',
      'Calendly Integration',
      'Lazy Loading',
    ],
    results: [
      'Page load time decreased by 65% despite featuring more video content',
      'Consultation bookings increased by 42% in the first month',
      'Average project value increased by 28% due to improved portfolio presentation',
      'Organic search traffic increased by 83% within three months',
    ],
    testimonial: {
      quote:
        'Our new website perfectly reflects the quality of our video work. The portfolio layout makes it easy for potential clients to see relevant examples, and the consultation booking system has dramatically increased our qualified leads. The site looks amazing on all devices too.',
      author: 'Jason Reynolds',
      position: 'Creative Director',
      company: 'UpMedia Productions',
    },
    images: {
      featured: upMediaImage,
    },
    link: 'https://www.upmedia.video/',
  },
  {
    id: 4,
    title: 'Luma CRM',
    category: 'web application',
    summary:
      'A custom CRM application designed for sales teams to efficiently manage leads and customer interactions with an intuitive, mobile-first interface.',
    challenge:
      'Traditional CRM systems were too complex and inflexible for smaller sales teams, resulting in low adoption rates and inconsistent use. Luma needed a streamlined, intuitive CRM that sales representatives would actually use in the field, with powerful automation and analytics capabilities.',
    solution:
      'We developed a custom Vue.js-based CRM application with a mobile-first approach. The system features a visual pipeline management interface, automated follow-up reminders, email integration, and comprehensive reporting. The interface was designed with extensive user testing to ensure it matched the actual workflow of sales representatives.',
    technologies: [
      'Vue.js',
      'Node.js',
      'MongoDB',
      'REST API',
      'PWA',
      'Real-time Notifications',
    ],
    results: [
      '92% user adoption rate compared to 46% with their previous CRM',
      'Average deal closing time reduced by 23 days',
      'Sales team productivity increased by 34%',
      'Mobile usage accounting for 76% of all system interactions',
    ],
    testimonial: {
      quote:
        'Luma CRM has revolutionized how our sales team works. The mobile interface is so intuitive that our reps actually enjoy using it in the field. The visual pipeline and automated reminders ensure nothing falls through the cracks, and our closing rate has improved dramatically as a result.',
      author: 'David Chen',
      position: 'Sales Director',
      company: 'TechVision Solutions',
    },
    images: {
      featured: lumaCrmImage,
    },
    link: 'https://lumacrm.ca',
  },
];

// Filter case studies based on active filter
const filteredCaseStudies = computed(() => {
  if (activeFilter.value === 'all') {
    return caseStudies;
  } else {
    return caseStudies.filter(study => study.category === activeFilter.value);
  }
});

// Use Nuxt's built-in SEO capabilities
useSeo({
  title: 'Case Studies | Web Development Success Stories',
  description:
    'Explore our web development case studies showcasing successful projects across e-commerce, custom applications, WordPress sites, and more. See real results from our work.',
  url: '/case-studies',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: caseStudies.map((study, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Article',
        name: study.title,
        url: `/case-studies#${study.id}`,
        description: study.summary,
      },
    })),
  },
});
</script>

<style scoped>
/* Add scroll behavior for anchor links */
html {
  scroll-behavior: smooth;
}
</style>
