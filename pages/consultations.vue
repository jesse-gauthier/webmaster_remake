<template>
  <div class="min-h-screen">
    <!-- Enhanced Hero Section -->
    <section
      aria-labelledby="hero-title"
      class="relative bg-gradient-to-br from-accent-600 via-accent-700 to-accent-900 py-20 md:py-32 overflow-hidden"
    >
      <!-- Background decorative elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div
          class="absolute -right-40 -top-40 w-96 h-96 bg-primary rounded-full animate-bounce-light"
        ></div>
        <div
          class="absolute -left-20 top-1/2 w-80 h-80 bg-primary-light rounded-full animate-bounce-light"
          style="animation-delay: 1s"
        ></div>
        <div
          class="absolute right-1/4 -bottom-20 w-64 h-64 bg-primary-300 rounded-full animate-bounce-light"
          style="animation-delay: 2s"
        ></div>
      </div>

      <!-- Floating particles -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div
          class="absolute top-20 left-20 w-4 h-4 bg-primary-300 rounded-full animate-bounce-light"
          style="animation-delay: 0.5s"
        ></div>
        <div
          class="absolute top-40 right-32 w-3 h-3 bg-primary-400 rounded-full animate-bounce-light"
          style="animation-delay: 1.5s"
        ></div>
        <div
          class="absolute bottom-32 left-1/3 w-5 h-5 bg-accent-300 rounded-full animate-bounce-light"
          style="animation-delay: 2.5s"
        ></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge with Emoji -->
          <span
            class="inline-flex items-center gap-2 bg-primary bg-opacity-20 text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in"
          >
            <span class="text-lg">💡</span>
            Expert Strategic Guidance
          </span>

          <h1
            id="hero-title"
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight"
          >
            Professional Website
            <span
              class="block text-accent-200 animate-slide-up"
              style="animation-delay: 0.1s"
              >Consultations</span
            >
          </h1>
          <p
            class="text-xl md:text-2xl text-accent-100 mb-8 animate-slide-up leading-relaxed"
            style="animation-delay: 0.2s"
          >
            Get expert advice and strategic insights to optimize your website,
            improve performance, and drive meaningful business results.
          </p>

          <div
            class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up"
            style="animation-delay: 0.3s"
          >
            <a
              href="#booking"
              class="btn-primary bg-white text-accent-600 hover:bg-neutral-100 btn-lg transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              Schedule Consultation
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </a>
            <a
              href="#services"
              class="btn-outline btn-lg text-white border-white hover:bg-white hover:text-accent-600 transform hover:scale-105 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          <!-- Enhanced trust indicators -->
          <div
            class="flex flex-wrap justify-center items-center gap-8 pt-12 animate-slide-up"
            style="animation-delay: 0.4s"
          >
            <div class="flex items-center gap-3">
              <div class="bg-primary bg-opacity-20 rounded-full p-2">
                <svg
                  class="h-6 w-6 text-primary-200"
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
                  Expert Analysis
                </div>
                <div class="text-xs text-accent-200">Proven Strategies</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="bg-accent-300 bg-opacity-30 rounded-full p-2">
                <svg
                  class="h-6 w-6 text-accent-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">
                  Measurable Results
                </div>
                <div class="text-xs text-accent-200">Data-Driven Insights</div>
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

    <!-- Enhanced Services Section -->
    <section
      id="services"
      aria-labelledby="services-title"
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
            🎯 Our Expertise
          </span>
          <h2
            id="services-title"
            class="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Consultation Services
          </h2>
          <p
            class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed"
          >
            Our comprehensive consultation services provide strategic insights
            and actionable recommendations to optimize your digital presence and
            drive business growth.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(service, index) in consultationServices"
            :key="index"
            class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100"
          >
            <div class="h-2 bg-gradient-to-r from-accent to-primary"></div>
            <div class="p-8">
              <div class="flex items-center mb-6">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path :d="service.icon"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-primary mb-0">
                  {{ service.title }}
                </h3>
              </div>
              <p class="text-neutral-text mb-6 leading-relaxed">
                {{ service.description }}
              </p>
              <ul class="space-y-3 mb-6">
                <li
                  v-for="(item, itemIndex) in service.items"
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
              <a
                href="#booking"
                class="btn-primary inline-flex items-center gap-2 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                {{ service.cta }}
                <svg
                  class="w-4 h-4"
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section
      aria-labelledby="testimonials-title"
      class="py-20 bg-gradient-to-br from-white via-primary-25 to-neutral-cream relative overflow-hidden"
    >
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div
          class="absolute top-40 right-40 w-80 h-80 bg-accent rounded-full animate-bounce-light"
        ></div>
        <div
          class="absolute bottom-40 left-40 w-60 h-60 bg-primary rounded-full animate-bounce-light"
          style="animation-delay: 2s"
        ></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <TestimonialComponent />
      </div>
    </section>

    <!-- Enhanced Process Section -->
    <section
      aria-labelledby="process-title"
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
            📋 Our Approach
          </span>
          <h2
            id="process-title"
            class="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Our Consultation Process
          </h2>
          <p
            class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed"
          >
            We follow a structured approach to ensure you get maximum value from
            our consultations and actionable insights for your business.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in consultationProcess"
            :key="index"
            class="relative group"
          >
            <!-- Enhanced connection line -->
            <div
              v-if="index < consultationProcess.length - 1"
              class="hidden lg:block absolute top-1/4 left-full w-full h-1 bg-gradient-to-r from-primary to-accent z-0"
            ></div>

            <div
              class="bg-white rounded-2xl shadow-xl p-8 text-center h-full relative z-10 transform group-hover:-translate-y-2 transition-all duration-500 border border-neutral-100 group-hover:shadow-2xl"
            >
              <div
                class="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-600 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                {{ index + 1 }}
              </div>
              <h4 class="text-2xl font-bold text-primary mb-4">
                {{ step.title }}
              </h4>
              <p class="text-neutral-text leading-relaxed">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Booking Section -->
    <section
      id="booking"
      aria-labelledby="booking-title"
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
            📅 Get Started
          </span>
          <h2
            id="booking-title"
            class="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Schedule Your Consultation
          </h2>
          <p
            class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed"
          >
            Ready to take your website to the next level? Book a consultation
            with our experts and get actionable insights tailored to your
            business.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div ref="contactRoot" class="async-contact-form">
            <ClientOnly>
              <Suspense v-if="contactShouldLoad">
                <template #default>
                  <AsyncContactForm :services="consultationOptions" />
                </template>
                <template #fallback>
                  <div
                    class="flex items-center justify-center py-16"
                    aria-busy="true"
                  >
                    <div
                      class="animate-spin h-8 w-8 border-4 border-primary-200 border-t-primary-500 rounded-full"
                    ></div>
                    <span class="sr-only">Loading contact form...</span>
                  </div>
                </template>
              </Suspense>
              <div v-else class="flex items-center justify-center py-16">
                <p class="text-sm text-neutral-600">Loading contact form...</p>
              </div>
              <template #fallback>
                <div class="flex items-center justify-center py-16">
                  <p class="text-sm text-neutral-600">
                    Enable JavaScript to load the contact form.
                  </p>
                </div>
              </template>
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced CTA Section -->
    <section
      aria-labelledby="cta-title"
      class="relative bg-gradient-to-br from-accent-600 via-accent-700 to-accent-900 py-20 md:py-32 overflow-hidden"
    >
      <!-- Background decorative elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div
          class="absolute -right-20 -top-20 w-80 h-80 bg-primary rounded-full animate-bounce-light"
        ></div>
        <div
          class="absolute -left-20 -bottom-20 w-64 h-64 bg-accent-300 rounded-full animate-bounce-light"
          style="animation-delay: 1s"
        ></div>
        <div
          class="absolute right-1/3 top-1/4 w-32 h-32 bg-primary-300 rounded-full animate-bounce-light"
          style="animation-delay: 2s"
        ></div>
      </div>

      <!-- Floating particles -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div
          class="absolute top-20 left-20 w-4 h-4 bg-primary-300 rounded-full animate-bounce-light"
          style="animation-delay: 0.5s"
        ></div>
        <div
          class="absolute top-40 right-32 w-3 h-3 bg-primary-400 rounded-full animate-bounce-light"
          style="animation-delay: 1.5s"
        ></div>
        <div
          class="absolute bottom-32 left-1/3 w-5 h-5 bg-accent-300 rounded-full animate-bounce-light"
          style="animation-delay: 2.5s"
        ></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Badge with Emoji -->
          <span
            class="inline-flex items-center gap-2 bg-primary bg-opacity-20 text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in"
          >
            <span class="text-lg">🚀</span>
            Transform Your Digital Presence
          </span>

          <h2
            id="cta-title"
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight"
          >
            Ready to Unlock Your
            <span
              class="block text-accent-200 animate-slide-up"
              style="animation-delay: 0.1s"
              >Website's Potential?</span
            >
          </h2>
          <p
            class="text-xl md:text-2xl text-accent-100 mb-8 animate-slide-up leading-relaxed"
            style="animation-delay: 0.2s"
          >
            Get expert insights and strategic recommendations that will
            transform your online presence and drive meaningful business
            results.
          </p>
          <div
            class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up"
            style="animation-delay: 0.3s"
          >
            <a
              href="#booking"
              class="btn-primary bg-white text-accent-600 hover:bg-neutral-100 btn-lg transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              Book Free Consultation
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </a>
            <a
              href="#services"
              class="btn-outline btn-lg text-white border-white hover:bg-white hover:text-accent-600 transform hover:scale-105 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          <!-- Enhanced trust indicators -->
          <div
            class="flex flex-wrap justify-center items-center gap-8 pt-12 animate-slide-up"
            style="animation-delay: 0.4s"
          >
            <div class="flex items-center gap-3">
              <div class="bg-primary bg-opacity-20 rounded-full p-2">
                <svg
                  class="h-6 w-6 text-primary-200"
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
                  Free Initial Consultation
                </div>
                <div class="text-xs text-accent-200">No Obligation</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="bg-accent-300 bg-opacity-30 rounded-full p-2">
                <svg
                  class="h-6 w-6 text-accent-100"
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
                  Actionable Results
                </div>
                <div class="text-xs text-accent-200">Proven Strategies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import TestimonialComponent from '~/components/ui/TestimonialComponent.vue';
import {
  ref,
  onMounted,
  onBeforeUnmount,
  defineAsyncComponent,
  watchEffect,
} from 'vue';
import { useSeo } from '~/composables/useSeo';

// SEO Setup
useSeo({
  title: 'Expert Website Consultations | Strategic Digital Advice',
  description:
    'Get professional website consultation services including website audits, SEO strategy, conversion optimization, and digital strategy. Expert advice to transform your online presence.',
  url: '/consultations',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Consultation Services',
    description:
      'Expert website consultation including audits, SEO strategy, and digital transformation advice',
    provider: {
      '@type': 'Organization',
      name: 'WebMaster',
    },
    serviceType: [
      'Website Audit',
      'SEO Strategy',
      'Conversion Optimization',
      'Digital Strategy',
    ],
  },
});

const AsyncContactForm = defineAsyncComponent(
  () => import('@/components/forms/ContactForm.vue')
);
const contactShouldLoad = ref(false);
const contactRoot = ref(null);
let contactObserver;

// Consultation service options for the contact form
const consultationOptions = [
  'Website Audit',
  'SEO Strategy Consultation',
  'Conversion Rate Optimization',
  'Digital Strategy Session',
  'Performance Analysis',
  'Comprehensive Consultation Package',
];

// Consultation services data
const consultationServices = [
  {
    title: 'Website Audit',
    description:
      'A comprehensive review of your existing website to identify strengths, weaknesses, and opportunities for improvement.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    cta: 'Book Website Audit',
    items: [
      'Performance analysis and optimization suggestions',
      'UX/UI evaluation and improvement recommendations',
      'SEO assessment and keyword strategy',
      'Security and compliance review',
      'Mobile responsiveness evaluation',
      'Content quality assessment',
    ],
  },
  {
    title: 'SEO Strategy',
    description:
      'Develop a tailored search engine optimization strategy to increase your visibility and drive organic traffic.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    cta: 'Book SEO Consultation',
    items: [
      'Keyword research and competitive analysis',
      'On-page and off-page optimization plan',
      'Content strategy and recommendations',
      'Local SEO optimization for businesses',
      'Technical SEO audit and fixes',
      'Performance tracking and reporting setup',
    ],
  },
  {
    title: 'Conversion Optimization',
    description:
      'Transform your website visitors into customers with targeted conversion rate optimization strategies.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    cta: 'Book CRO Consultation',
    items: [
      'User journey mapping and friction point identification',
      'Call-to-action optimization strategies',
      'A/B testing recommendations and implementation plan',
      'Form and checkout process optimization',
      'Landing page conversion analysis',
      'Analytics setup and conversion tracking',
    ],
  },
  {
    title: 'Digital Strategy',
    description:
      'Develop a comprehensive digital strategy that aligns with your business goals and maximizes your online potential.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    cta: 'Book Strategy Session',
    items: [
      'Business goal alignment and digital opportunity identification',
      'Competitive landscape analysis',
      'Channel strategy and marketing plan',
      'Technology stack recommendations',
      'Budget allocation and ROI planning',
      'Implementation roadmap and timeline',
    ],
  },
];

// Consultation process steps
const consultationProcess = [
  {
    title: 'Discovery',
    description:
      'We start by understanding your business goals, challenges, and current digital presence through detailed discussions.',
  },
  {
    title: 'Analysis',
    description:
      'Our experts conduct a thorough analysis of your website, competitors, and market opportunities using proven methodologies.',
  },
  {
    title: 'Strategy',
    description:
      'We develop customized recommendations and actionable strategies based on our findings and industry best practices.',
  },
  {
    title: 'Implementation',
    description:
      'We guide you through implementing our recommendations or can handle the execution for you with ongoing support.',
  },
];

const contactLoadIfIntersecting = entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      contactShouldLoad.value = true;
      if (contactObserver) contactObserver.disconnect();
    }
  });
};

onMounted(() => {
  if ('IntersectionObserver' in window) {
    contactObserver = new IntersectionObserver(contactLoadIfIntersecting, {
      rootMargin: '200px 0px',
    });
    if (contactRoot.value) contactObserver.observe(contactRoot.value);
  } else {
    contactShouldLoad.value = true;
  }
});

onBeforeUnmount(() => {
  if (contactObserver) contactObserver.disconnect();
});

if (process.client) {
  watchEffect(() => {
    if (!contactShouldLoad.value && contactRoot.value) {
      const rect = contactRoot.value.getBoundingClientRect();
      if (rect.top < window.innerHeight + 200) {
        contactShouldLoad.value = true;
        if (contactObserver) contactObserver.disconnect();
      }
    }
  });
}
</script>
