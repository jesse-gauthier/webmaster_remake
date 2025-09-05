<template>
  <div class="min-h-screen">
    <!-- Enhanced Hero Section -->
    <section
      aria-labelledby="hero-title"
      class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 md:py-32 overflow-hidden"
    >
      <!-- Background decorative elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div
          class="absolute -right-40 -top-40 w-96 h-96 bg-accent rounded-full animate-bounce-light"
        ></div>
        <div
          class="absolute -left-20 top-1/2 w-80 h-80 bg-accent-light rounded-full animate-bounce-light"
          style="animation-delay: 1s"
        ></div>
        <div
          class="absolute right-1/4 -bottom-20 w-64 h-64 bg-accent-300 rounded-full animate-bounce-light"
          style="animation-delay: 2s"
        ></div>
      </div>

      <!-- Floating particles -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div
          class="absolute top-20 left-20 w-4 h-4 bg-accent-300 rounded-full animate-bounce-light"
          style="animation-delay: 0.5s"
        ></div>
        <div
          class="absolute top-40 right-32 w-3 h-3 bg-accent-400 rounded-full animate-bounce-light"
          style="animation-delay: 1.5s"
        ></div>
        <div
          class="absolute bottom-32 left-1/3 w-5 h-5 bg-primary-300 rounded-full animate-bounce-light"
          style="animation-delay: 2.5s"
        ></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge with Emoji -->
          <span
            class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in"
          >
            <span class="text-lg">🛠️</span>
            Website Maintenance Services
          </span>

          <h1
            id="hero-title"
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight"
          >
            Keep Your Website
            <span
              class="block text-accent-300 animate-slide-up"
              style="animation-delay: 0.1s"
              >Running Perfectly</span
            >
          </h1>
          <p
            class="text-xl md:text-2xl text-primary-100 mb-8 animate-slide-up leading-relaxed"
            style="animation-delay: 0.2s"
          >
            Professional maintenance services to keep your website secure, fast,
            and up-to-date so you can focus on growing your business.
          </p>

          <div
            class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up"
            style="animation-delay: 0.3s"
          >
            <a
              href="#pricing"
              class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              View Maintenance Plans
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
            <router-link
              to="/contact"
              class="btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
            >
              Get Custom Quote
            </router-link>
          </div>

          <!-- Enhanced trust indicators -->
          <div
            class="flex flex-wrap justify-center items-center gap-8 pt-12 animate-slide-up"
            style="animation-delay: 0.4s"
          >
            <div class="flex items-center gap-3">
              <div class="bg-accent bg-opacity-20 rounded-full p-2">
                <svg
                  class="h-6 w-6 text-accent-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">
                  24/7 Monitoring
                </div>
                <div class="text-xs text-primary-200">Always Protected</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="bg-primary-300 bg-opacity-30 rounded-full p-2">
                <svg
                  class="h-6 w-6 text-primary-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">
                  Expert Support
                </div>
                <div class="text-xs text-primary-200">Professional Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          fill="#FFFFFF"
          preserveAspectRatio="none"
          class="w-full h-20"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>

    <!-- Enhanced Features Section -->
    <section
      aria-labelledby="features-title"
      class="py-20 bg-gradient-to-br from-white via-neutral-cream to-primary-50 relative overflow-hidden"
    >
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div
          class="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full animate-bounce-light"
        ></div>
        <div
          class="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full animate-bounce-light"
          style="animation-delay: 1s"
        ></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center mb-16">
          <span
            class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            🔧 Core Services
          </span>
          <h2
            id="features-title"
            class="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Complete Maintenance Coverage
          </h2>
          <p
            class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed"
          >
            Our comprehensive maintenance services ensure your website stays
            secure, fast, and fully functional around the clock.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in maintenanceFeatures"
            :key="index"
            class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100"
          >
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-8">
              <div
                class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path :d="feature.icon"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">
                {{ feature.title }}
              </h3>
              <p class="text-neutral-text mb-6 leading-relaxed">
                {{ feature.description }}
              </p>
              <ul class="space-y-3">
                <li
                  v-for="(item, itemIndex) in feature.items"
                  :key="itemIndex"
                  class="flex items-start"
                >
                  <div
                    class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0"
                  >
                    <svg
                      class="h-3 w-3 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span class="text-neutral-text">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Maintenance Matters Section -->
    <section
      aria-labelledby="importance-title"
      class="py-20 bg-gradient-to-br from-primary-50 via-white to-neutral-cream relative overflow-hidden"
    >
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-10">
        <div
          class="absolute top-20 left-20 w-32 h-32 bg-accent rounded-full animate-bounce-light"
        ></div>
        <div
          class="absolute bottom-20 right-20 w-24 h-24 bg-primary rounded-full animate-bounce-light"
          style="animation-delay: 1.5s"
        ></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center mb-16">
          <span
            class="inline-block bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            💡 Why It Matters
          </span>
          <h2
            id="importance-title"
            class="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Why Website Maintenance is Critical
          </h2>
          <p
            class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed"
          >
            Regular maintenance isn't just nice to have—it's essential for
            keeping your website secure, fast, and performing at its best.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(reason, index) in whyMaintenance"
            :key="index"
            class="relative group"
          >
            <div
              class="bg-white rounded-2xl shadow-xl p-8 text-center h-full relative z-10 transform group-hover:-translate-y-2 transition-all duration-500 border border-neutral-100 group-hover:shadow-2xl"
            >
              <div
                class="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-600 text-white flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                {{ reason.icon }}
              </div>
              <h4 class="text-2xl font-bold text-primary mb-4">
                {{ reason.title }}
              </h4>
              <p class="text-neutral-text leading-relaxed">
                {{ reason.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Pricing Section -->
    <section
      id="pricing"
      class="py-20 bg-gradient-to-br from-white via-neutral-cream to-primary-50 relative overflow-hidden"
    >
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div
          class="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full animate-bounce-light"
        ></div>
        <div
          class="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full animate-bounce-light"
          style="animation-delay: 1s"
        ></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center mb-16">
          <span
            class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            💰 Pricing Plans
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
            Maintenance Plans
          </h2>
          <p
            class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed"
          >
            Choose the maintenance plan that's right for your website. All plans
            include our core maintenance services with varying levels of
            support.
          </p>
        </div>

        <PricingSection />
      </div>
    </section>

    <!-- Enhanced FAQ Section -->
    <section
      aria-labelledby="faq-title"
      class="py-20 bg-gradient-to-br from-neutral-cream via-white to-primary-50 relative overflow-hidden"
    >
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div
          class="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full animate-bounce-light"
        ></div>
        <div
          class="absolute bottom-20 right-20 w-32 h-32 bg-accent rounded-full animate-bounce-light"
          style="animation-delay: 1s"
        ></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center mb-16">
          <span
            class="inline-block bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            ❓ Common Questions
          </span>
          <h2
            id="faq-title"
            class="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Frequently Asked Questions
          </h2>
          <p
            class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed"
          >
            Have questions about our maintenance services? We've compiled
            answers to the most common inquiries from our clients.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-6">
            <button
              @click="toggleFaq(index)"
              class="w-full text-left bg-white p-6 rounded-2xl shadow-xl flex justify-between items-center focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-20 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 border border-neutral-100"
              :aria-expanded="openFaq === index"
              :aria-controls="`faq-content-${index}`"
            >
              <span class="font-bold text-primary text-lg pr-4">{{
                faq.question
              }}</span>
              <div class="flex-shrink-0">
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center"
                >
                  <svg
                    class="h-6 w-6 text-white transform transition-transform duration-300"
                    :class="{ 'rotate-180': openFaq === index }"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </button>
            <div
              v-show="openFaq === index"
              :id="`faq-content-${index}`"
              class="bg-white px-6 pb-6 rounded-b-2xl border-t border-neutral-100 shadow-xl"
            >
              <div class="pt-6">
                <p class="text-neutral-text text-lg leading-relaxed">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced CTA Section -->
    <section
      aria-labelledby="cta-title"
      class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 md:py-32 overflow-hidden"
    >
      <!-- Background decorative elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div
          class="absolute -right-20 -top-20 w-80 h-80 bg-accent rounded-full animate-bounce-light"
        ></div>
        <div
          class="absolute -left-20 -bottom-20 w-64 h-64 bg-primary-300 rounded-full animate-bounce-light"
          style="animation-delay: 1s"
        ></div>
        <div
          class="absolute right-1/3 top-1/4 w-32 h-32 bg-accent-300 rounded-full animate-bounce-light"
          style="animation-delay: 2s"
        ></div>
      </div>

      <!-- Floating particles -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div
          class="absolute top-20 left-20 w-4 h-4 bg-accent-300 rounded-full animate-bounce-light"
          style="animation-delay: 0.5s"
        ></div>
        <div
          class="absolute top-40 right-32 w-3 h-3 bg-accent-400 rounded-full animate-bounce-light"
          style="animation-delay: 1.5s"
        ></div>
        <div
          class="absolute bottom-32 left-1/3 w-5 h-5 bg-primary-300 rounded-full animate-bounce-light"
          style="animation-delay: 2.5s"
        ></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Badge with Emoji -->
          <span
            class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in"
          >
            <span class="text-lg">🚀</span>
            Get Started Today
          </span>

          <h2
            id="cta-title"
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight"
          >
            Ready to Protect Your
            <span
              class="block text-accent-300 animate-slide-up"
              style="animation-delay: 0.1s"
              >Website Investment?</span
            >
          </h2>
          <p
            class="text-xl md:text-2xl text-primary-100 mb-8 animate-slide-up leading-relaxed"
            style="animation-delay: 0.2s"
          >
            Don't wait for problems to arise. Keep your website secure, fast,
            and fully functional with our professional maintenance services.
          </p>
          <div
            class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up"
            style="animation-delay: 0.3s"
          >
            <router-link
              to="/contact"
              class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              Start Maintenance Plan
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </router-link>
            <a
              href="#pricing"
              class="btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
            >
              Compare Plans
            </a>
          </div>

          <!-- Enhanced trust indicators -->
          <div
            class="flex flex-wrap justify-center items-center gap-8 pt-12 animate-slide-up"
            style="animation-delay: 0.4s"
          >
            <div class="flex items-center gap-3">
              <div class="bg-accent bg-opacity-20 rounded-full p-2">
                <svg
                  class="h-6 w-6 text-accent-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">
                  No Setup Fees
                </div>
                <div class="text-xs text-primary-200">Start Immediately</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="bg-primary-300 bg-opacity-30 rounded-full p-2">
                <svg
                  class="h-6 w-6 text-primary-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">
                  Money-Back Guarantee
                </div>
                <div class="text-xs text-primary-200">Risk-Free Trial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSeo } from '~/composables/useSeo';

// SEO Setup
useSeo({
  title: 'Website Maintenance Services | Keep Your Site Secure & Fast',
  description:
    'Professional website maintenance services including security updates, performance optimization, content updates, and 24/7 monitoring. Keep your website running perfectly.',
  url: '/maintenance',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Maintenance Services',
    description:
      'Professional website maintenance including security, performance, and content updates',
    provider: {
      '@type': 'Organization',
      name: 'WebMaster',
    },
    serviceType: [
      'Website Maintenance',
      'Security Updates',
      'Performance Optimization',
      'Content Updates',
    ],
  },
});

const openFaq = ref(null);

const toggleFaq = index => {
  if (openFaq.value === index) {
    openFaq.value = null;
  } else {
    openFaq.value = index;
  }
};

// Maintenance features data
const maintenanceFeatures = [
  {
    title: 'Security & Updates',
    description:
      'Keep your website protected with regular security patches, core updates, and vulnerability monitoring.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    items: [
      'Core software updates',
      'Plugin & theme updates',
      'Security vulnerability patches',
      'Malware scanning & removal',
    ],
  },
  {
    title: 'Performance Optimization',
    description:
      'Ensure your website loads fast and provides an excellent user experience with regular optimization.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    items: [
      'Page speed optimization',
      'Image compression',
      'Database cleanup',
      'Cache management',
    ],
  },
  {
    title: 'Content Management',
    description:
      'Keep your website content fresh and relevant with regular updates and content optimization.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    items: [
      'Content updates',
      'Blog post management',
      'Image optimization',
      'SEO content review',
    ],
  },
  {
    title: 'Monitoring & Support',
    description:
      '24/7 monitoring and professional support to ensure your website stays online and functional.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    items: [
      '24/7 uptime monitoring',
      'Broken link checking',
      'Email support',
      'Monthly reports',
    ],
  },
  {
    title: 'Backup & Recovery',
    description:
      'Regular backups and disaster recovery planning to protect your website data and ensure business continuity.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
    items: [
      'Automated daily backups',
      'Cloud storage solutions',
      'One-click restore',
      'Disaster recovery planning',
    ],
  },
  {
    title: 'Technical Support',
    description:
      'Expert technical support to resolve issues quickly and keep your website running smoothly.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    items: [
      'Bug fixes & troubleshooting',
      'Plugin conflicts resolution',
      'Performance issue diagnosis',
      'Priority support queue',
    ],
  },
];

// Why maintenance matters
const whyMaintenance = [
  {
    icon: '🔒',
    title: 'Security',
    description:
      'Protect your website and customer data from hackers, malware, and security vulnerabilities.',
  },
  {
    icon: '⚡',
    title: 'Performance',
    description:
      'Keep your website fast and responsive to provide the best user experience and improve SEO rankings.',
  },
  {
    icon: '📈',
    title: 'Reliability',
    description:
      'Ensure maximum uptime and reliability so your customers can always access your services.',
  },
  {
    icon: '💰',
    title: 'Cost Savings',
    description:
      'Prevent expensive emergency fixes and rebuild costs with proactive maintenance and monitoring.',
  },
];

// FAQs
const faqs = [
  {
    question: 'What exactly is included in the monthly maintenance?',
    answer:
      'Our monthly maintenance includes security updates, performance optimization, content updates, malware scanning, database optimization, and 24/7 uptime monitoring. The specific services may vary based on your selected plan, but all plans include our core protection and optimization services.',
  },
  {
    question: 'How often will my website be updated?',
    answer:
      'We perform maintenance tasks on a regular schedule depending on your plan. Security updates are applied immediately when available, performance optimization is done monthly, and content updates are handled as needed. Our monitoring systems check your site 24/7 for any issues.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      "Yes, you can upgrade or downgrade your maintenance plan at any time. Changes typically take effect at the start of your next billing cycle. We'll work with you to ensure a smooth transition between plans.",
  },
  {
    question: 'Do I really need monthly maintenance for my website?',
    answer:
      'Absolutely. Websites require regular maintenance to stay secure, fast, and up-to-date. Without proper maintenance, websites become vulnerable to security threats, experience performance issues, and can become outdated. Regular maintenance is much more cost-effective than emergency fixes.',
  },
  {
    question:
      'What if I need emergency support outside of regular maintenance?',
    answer:
      "Our premium plans include priority support for urgent issues. Depending on your plan level, you'll have access to our support team via email, phone, or chat. We also offer emergency support services for critical issues that need immediate attention.",
  },
  {
    question: "Will you work on websites you didn't build?",
    answer:
      "Yes, we provide maintenance services for websites built by other developers or agencies. We'll perform an initial audit of your site to understand its structure and identify any immediate issues that need attention.",
  },
  {
    question: 'Do you provide backups of my website?',
    answer:
      "Yes, all our maintenance plans include regular automated backups stored securely in the cloud. We can restore your website quickly if anything goes wrong, and you'll have peace of mind knowing your data is safe.",
  },
];
</script>
