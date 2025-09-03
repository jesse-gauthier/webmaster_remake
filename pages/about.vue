<template>
  <div>
    <!-- Enhanced Hero Section -->
    <section id="hero-section" class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 md:py-32 overflow-hidden">
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
      </div>

      <div class="container-site relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge with Emoji -->
          <span class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span class="text-lg">👋</span>
            Meet Your Web Development Partners
          </span>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight">
            About Ottawa
            <span class="block text-accent-300 animate-slide-up" style="animation-delay: 0.1s">Webmasters</span>
          </h1>
          <p class="text-xl md:text-2xl text-primary-100 mb-8 animate-slide-up leading-relaxed" style="animation-delay: 0.2s">
            Your trusted partner for exceptional web solutions that drive real results and meaningful growth for businesses in Ottawa and beyond.
          </p>

          <!-- Enhanced trust indicators -->
          <div class="flex flex-wrap justify-center items-center gap-8 pt-8 animate-slide-up" style="animation-delay: 0.3s">
            <div class="flex items-center gap-3">
              <div class="bg-accent bg-opacity-20 rounded-full p-2">
                <svg class="h-6 w-6 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">5+ Years Experience</div>
                <div class="text-xs text-primary-200">Proven Track Record</div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="bg-primary-300 bg-opacity-30 rounded-full p-2">
                <svg class="h-6 w-6 text-primary-100" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">100% Satisfaction</div>
                <div class="text-xs text-primary-200">Guaranteed Quality</div>
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

    <!-- Enhanced Who We Are Section -->
    <section id="who-we-are" class="py-20 bg-gradient-to-br from-white via-neutral-cream to-primary-50 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div class="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <div class="container-site relative z-10">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <span class="inline-block bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              🏢 Our Story
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
              Who We Are
            </h2>
            <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
              A passionate team of web professionals dedicated to transforming your digital presence
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-6">
              <div class="prose prose-lg max-w-none">
                <p class="text-neutral-800 text-lg leading-relaxed">
                  We are a dedicated team of web design and development
                  specialists based in Ottawa, passionate about creating
                  exceptional websites for small businesses.
                </p>
                <p class="text-neutral-800 text-lg leading-relaxed">
                  Our mission is simple: empower small businesses with quality
                  digital solutions that drive real results. This guiding
                  principle shapes every service we offer and every project we
                  undertake.
                </p>
                <p class="text-neutral-800 text-lg leading-relaxed">
                  With our combined expertise and client-focused approach, we
                  deliver websites that not only look great but also perform
                  exceptionally well in today's competitive digital landscape.
                </p>
              </div>
              
              <!-- Enhanced stats -->
              <div class="grid grid-cols-2 gap-6 py-8">
                <div class="text-center">
                  <div class="text-3xl font-bold text-primary mb-2">50+</div>
                  <div class="text-sm text-neutral-600">Projects Completed</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-accent mb-2">5+</div>
                  <div class="text-sm text-neutral-600">Years Experience</div>
                </div>
              </div>

              <a
                href="#audit"
                @click="trackButtonClick('who-we-are-audit-button')"
                class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
              >
                Get Your Free SEO Audit
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
            
            <div class="relative">
              <!-- Enhanced team visualization -->
              <div class="bg-white rounded-2xl shadow-2xl p-8 border border-accent/10">
                <div class="space-y-6">
                  <!-- Team member cards -->
                  <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl">
                    <div class="bg-gradient-to-br from-primary-500 to-primary-600 rounded-full w-12 h-12 flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-primary">Web Developers</div>
                      <div class="text-sm text-neutral-600">Full-stack expertise</div>
                    </div>
                  </div>

                  <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl">
                    <div class="bg-gradient-to-br from-accent-500 to-accent-600 rounded-full w-12 h-12 flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-primary">UI/UX Designers</div>
                      <div class="text-sm text-neutral-600">Creative excellence</div>
                    </div>
                  </div>

                  <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl">
                    <div class="bg-gradient-to-br from-primary-400 to-accent-500 rounded-full w-12 h-12 flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-primary">Digital Strategists</div>
                      <div class="text-sm text-neutral-600">Growth focused</div>
                    </div>
                  </div>
                </div>

                <!-- Floating badge -->
                <div class="absolute -top-4 -right-4 bg-gradient-to-br from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-medium transform rotate-12 shadow-lg">
                  Ottawa Based ⭐
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Do Section -->
    <section id="what-we-do" class="py-20 bg-white relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div class="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-20 right-20 w-48 h-48 bg-accent rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>
      <div class="container-site relative z-10">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <span class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              💼 Our Expertise
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
              What We Do
            </h2>
            <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to your business needs and growth objectives
            </p>
          </div>
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="lg:order-1">
              <!-- Services illustration placeholder -->
              <div class="bg-white rounded-lg shadow-lg p-6">
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-primary-50 p-4 rounded text-center">
                    <svg
                      class="w-10 h-10 mx-auto mb-2 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span class="font-medium text-primary-700">WordPress</span>
                  </div>
                  <div class="bg-primary-50 p-4 rounded text-center">
                    <svg
                      class="w-10 h-10 mx-auto mb-2 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      ></path>
                    </svg>
                    <span class="font-medium text-primary-700">Shopify</span>
                  </div>
                  <div class="bg-primary-50 p-4 rounded text-center">
                    <svg
                      class="w-10 h-10 mx-auto mb-2 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      ></path>
                    </svg>
                    <span class="font-medium text-primary-700">Joomla</span>
                  </div>
                  <div class="bg-primary-50 p-4 rounded text-center">
                    <svg
                      class="w-10 h-10 mx-auto mb-2 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span class="font-medium text-primary-700">Magento</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-6 lg:order-2">
              <div class="prose prose-lg max-w-none">
                <p class="text-neutral-800 text-lg leading-relaxed">
                  We serve startups, e-commerce ventures, and small businesses
                  across Ottawa and Canada. Our expertise spans leading platforms
                  like WordPress, Shopify, Joomla, and Magento.
                </p>
                <p class="text-neutral-800 text-lg leading-relaxed">
                  From custom design and development to e-commerce solutions and
                  ongoing maintenance, we provide comprehensive web services
                  tailored to your specific needs.
                </p>
                <p class="text-neutral-800 text-lg leading-relaxed">
                  Whatever your digital vision, we have the expertise to bring it
                  to life and help your business thrive online.
                </p>
              </div>

              <a
                href="#audit"
                @click="trackButtonClick('what-we-do-audit-button')"
                class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
              >
                Get Your Free SEO Audit
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Why We Do It Section -->
    <section id="why-we-do" class="py-20 bg-gradient-to-br from-neutral-cream via-white to-accent-50 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div class="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-20 left-20 w-48 h-48 bg-accent rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <div class="container-site relative z-10">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <span class="inline-block bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              💖 Our Mission
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why We Do It
            </h2>
            <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
              Driven by passion and purpose, we're here to help your business thrive in the digital world
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-6">
              <div class="prose prose-lg max-w-none">
                <p class="text-neutral-800 text-lg leading-relaxed">
                  We understand the challenges businesses face—balancing time,
                  money, and growth. We empathize with these struggles because
                  we've been there too.
                </p>
                <p class="text-neutral-800 text-lg leading-relaxed">
                  That's why we specialize in creating websites that not only meet
                  your needs but also help you overcome these challenges
                  effectively.
                </p>
                <p class="text-neutral-800 text-lg leading-relaxed">
                  Our passion lies in seeing our clients succeed and grow. We
                  believe that a well-crafted website is more than just an online
                  presence—it's a powerful business tool that opens new
                  opportunities and drives meaningful results.
                </p>
              </div>
            </div>
            
            <div class="relative">
              <!-- Enhanced values cards -->
              <div class="bg-white rounded-2xl shadow-2xl p-8 border border-accent/10">
                <div class="space-y-6">
                  <div class="group p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div class="flex items-center gap-4">
                      <div class="bg-gradient-to-br from-primary-500 to-primary-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-xl font-bold text-primary mb-2">Time-Efficient Solutions</h4>
                        <p class="text-neutral-700">Websites designed to save you time and simplify management</p>
                      </div>
                    </div>
                  </div>

                  <div class="group p-6 bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div class="flex items-center gap-4">
                      <div class="bg-gradient-to-br from-accent-500 to-accent-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-xl font-bold text-primary mb-2">Cost-Effective Approach</h4>
                        <p class="text-neutral-700">Budget-friendly options that deliver maximum value</p>
                      </div>
                    </div>
                  </div>

                  <div class="group p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div class="flex items-center gap-4">
                      <div class="bg-gradient-to-br from-primary-400 to-accent-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-xl font-bold text-primary mb-2">Growth-Focused Designs</h4>
                        <p class="text-neutral-700">Websites built to scale with your business</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Floating testimonial -->
                <div class="absolute -bottom-4 -right-4 bg-gradient-to-br from-accent-500 to-accent-600 text-white p-4 rounded-xl shadow-lg transform rotate-6">
                  <div class="text-center">
                    <div class="text-lg font-bold mb-1">⭐⭐⭐⭐⭐</div>
                    <div class="text-xs">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEO Audit Component (lazy) -->
    <AsyncSeoAuditForm id="audit-section" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { inject } from 'vue';
import AsyncSeoAuditForm from '~/components/forms/AsyncSeoAuditForm.vue';
import { useSeo } from '~/composables/useSeo';

// SEO Setup
useSeo({
  title: 'About Ottawa Webmasters | Your Trusted Web Development Partner',
  description:
    'Learn about Ottawa Webmasters, your trusted partner for exceptional web solutions. We specialize in custom web design, development, and digital marketing services in Ottawa and beyond.',
  url: '/about',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ottawa Webmasters',
    description: 'Professional web development and design services in Ottawa',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ottawa',
      addressRegion: 'Ontario',
      addressCountry: 'Canada',
    },
    serviceArea: {
      '@type': 'Place',
      name: 'Ottawa and surrounding areas',
    },
  },
});

// Get analytics methods
const analytics = inject('analytics', null);

// Track page view when component mounts
onMounted(() => {
  if (analytics) {
    analytics.pageView('/about');
    analytics.trackEvent('Page', 'view', 'About Page');
  }
});

// Track button clicks
const trackButtonClick = buttonName => {
  if (analytics) {
    analytics.trackEvent('Button', 'click', buttonName);
  }
};

// Track section visibility
const visibleSections = ref(new Set());
const observerRef = ref(null);

// Set up intersection observer to track when sections become visible
onMounted(() => {
  observerRef.value = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting && !visibleSections.value.has(sectionId)) {
          visibleSections.value.add(sectionId);
          if (analytics) {
            analytics.trackEvent('Section', 'view', sectionId);
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe all sections
  document.querySelectorAll('section[id]').forEach(section => {
    observerRef.value.observe(section);
  });
});

// Clean up observer on unmount
onUnmounted(() => {
  if (observerRef.value) {
    observerRef.value.disconnect();
  }
});
</script>
