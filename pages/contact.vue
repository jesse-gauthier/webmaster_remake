<template>
  <div>
    <!-- Enhanced structured data for contact page -->
    <ContactStructuredData />
    <!-- Enhanced Hero Section -->
    <section
      class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 md:py-32 overflow-hidden"
    >
      <!-- Background Pattern Elements -->
      <div class="absolute inset-0 overflow-hidden opacity-10">
        <div
          class="absolute -right-40 -top-40 w-96 h-96 bg-accent rounded-full animate-bounce-light"
        ></div>
        <div
          class="absolute -left-20 top-1/2 w-80 h-80 bg-accent-light rounded-full"
          style="animation-delay: 1s"
        ></div>
        <div
          class="absolute right-1/4 -bottom-20 w-64 h-64 bg-accent-300 rounded-full animate-bounce-light"
          style="animation-delay: 2s"
        ></div>
      </div>

      <div class="container-site relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge -->
          <span
            class="inline-block bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in"
          >
            🚀 Ready to Get Started?
          </span>

          <!-- Main Title -->
          <h1
            class="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up leading-tight"
          >
            Let's Build Something
            <span class="text-accent-300">Amazing</span> Together
          </h1>

          <!-- Subtitle -->
          <p
            class="text-xl md:text-2xl text-primary-100 mb-8 animate-slide-up max-w-3xl mx-auto leading-relaxed"
            style="animation-delay: 0.2s"
          >
            From concept to launch, we're here to transform your digital vision
            into reality. Let's discuss your project and explore the
            possibilities.
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style="animation-delay: 0.4s"
          >
            <a
              href="#contact-form"
              class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="#quick-contact"
              class="btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
            >
              Quick Contact
            </a>
          </div>

          <!-- Trust Indicators -->
          <div
            class="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-12 animate-slide-up"
            style="animation-delay: 0.6s"
          >
            <div class="flex items-center gap-2 text-primary-100">
              <svg
                class="w-5 h-5 text-accent-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span class="text-sm font-medium">100+ Projects Completed</span>
            </div>
            <div class="flex items-center gap-2 text-primary-100">
              <svg
                class="w-5 h-5 text-accent-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-sm font-medium">24-Hour Response Time</span>
            </div>
            <div class="flex items-center gap-2 text-primary-100">
              <svg
                class="w-5 h-5 text-accent-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-sm font-medium">Ottawa-Based Team</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave Divider -->
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

    <!-- Quick Contact Options -->
    <section id="quick-contact" class="py-16 bg-white">
      <div class="container-site">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
              Choose Your Preferred Way to Connect
            </h2>
            <p class="text-lg text-neutral-text max-w-2xl mx-auto">
              We offer multiple ways to get in touch. Pick the option that works
              best for you.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Email Contact -->
            <div
              class="card card-hover p-8 text-center group transition-all duration-300"
            >
              <div
                class="bg-accent bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300"
              >
                <svg
                  class="w-10 h-10 text-accent group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-primary">
                Send Us an Email
              </h3>
              <p class="text-neutral-600 mb-4">
                Get a detailed response within 24 hours
              </p>
              <a
                href="mailto:contact@ottawawebmasters.ca"
                class="btn-primary hover:text-white"
              >
                contact@ottawawebmasters.ca
              </a>
            </div>

            <!-- Project Form -->
            <div
              class="card card-hover p-8 text-center group transition-all duration-300"
            >
              <div
                class="bg-primary bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300"
              >
                <svg
                  class="w-10 h-10 text-primary group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-primary">
                Project Brief Form
              </h3>
              <p class="text-neutral-600 mb-4">
                Tell us about your project in detail
              </p>
              <a href="#contact-form" class="btn-secondary hover:text-white">
                Fill Out Form
              </a>
            </div>

            <!-- Schedule Call -->
            <div
              class="card card-hover p-8 text-center group transition-all duration-300"
            >
              <div
                class="bg-accent-600 bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300"
              >
                <svg
                  class="w-10 h-10 text-accent-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-primary">
                Schedule a Call
              </h3>
              <p class="text-neutral-600 mb-4">
                15-minute consultation to discuss your needs
              </p>
              <a href="/consultations" class="btn-outline">
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact-form" class="py-20 bg-white">
      <div class="container-site">
        <div class="mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tell Us About Your Project
            </h2>
            <p class="text-lg text-neutral-text">
              Fill out the form below and we'll get back to you within 24 hours
              with a detailed response.
            </p>
          </div>

          <div ref="contactRoot" class="contact-form-wrapper">
            <ClientOnly fallback-tag="div">
              <template #fallback>
                <div class="bg-neutral-cream rounded-2xl p-8 text-center">
                  <div class="animate-pulse">
                    <div
                      class="h-4 bg-neutral-300 rounded w-3/4 mx-auto mb-4"
                    ></div>
                    <div
                      class="h-4 bg-neutral-300 rounded w-1/2 mx-auto mb-6"
                    ></div>
                    <div class="space-y-4">
                      <div class="h-12 bg-neutral-300 rounded"></div>
                      <div class="h-12 bg-neutral-300 rounded"></div>
                      <div class="h-32 bg-neutral-300 rounded"></div>
                      <div class="h-12 bg-primary-300 rounded"></div>
                    </div>
                  </div>
                  <p class="text-sm text-neutral-600 mt-4">
                    Loading contact form...
                  </p>
                </div>
              </template>
              <ContactFormComponent />
            </ClientOnly>

            <!-- No JavaScript Fallback -->
            <noscript>
              <div
                class="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center"
              >
                <h3 class="text-xl font-semibold text-primary mb-4">
                  JavaScript Required
                </h3>
                <p class="text-neutral-text mb-6">
                  Our contact form requires JavaScript to function. Please
                  enable JavaScript in your browser or use one of the
                  alternative contact methods above.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:contact@ottawawebmasters.ca"
                    class="btn-primary"
                  >
                    Email Us Directly
                  </a>
                  <a href="/consultations" class="btn-outline">
                    Schedule a Call
                  </a>
                </div>
              </div>
            </noscript>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced FAQ Section -->
    <section class="py-20 bg-gradient-to-br from-neutral-cream to-primary-50">
      <div class="container-site">
        <div class="max-w-4xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <span
              class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Got Questions?
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p class="text-xl text-neutral-text max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and
              pricing.
            </p>
          </div>

          <!-- FAQ Grid -->
          <div class="grid md:grid-cols-2 gap-8">
            <div class="card card-hover p-8 group">
              <div class="flex items-start gap-4">
                <div
                  class="bg-accent bg-opacity-10 rounded-lg p-3 group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-accent group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-primary mb-3">
                    How long does a typical project take?
                  </h3>
                  <p class="text-neutral-text leading-relaxed">
                    Most custom website projects take between 4-8 weeks from
                    start to finish, depending on the scope and complexity. Our
                    WordPress and Shopify implementations typically range from
                    2-6 weeks.
                  </p>
                </div>
              </div>
            </div>

            <div class="card card-hover p-8 group">
              <div class="flex items-start gap-4">
                <div
                  class="bg-primary bg-opacity-10 rounded-lg p-3 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-primary group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-primary mb-3">
                    Do you offer maintenance services?
                  </h3>
                  <p class="text-neutral-text leading-relaxed">
                    Yes! We offer comprehensive maintenance packages for both
                    WordPress and Shopify websites, including regular updates,
                    security monitoring, performance optimization, and technical
                    support.
                  </p>
                </div>
              </div>
            </div>

            <div class="card card-hover p-8 group">
              <div class="flex items-start gap-4">
                <div
                  class="bg-accent-600 bg-opacity-10 rounded-lg p-3 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300 flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-accent-600 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-primary mb-3">
                    What info do you need for a quote?
                  </h3>
                  <p class="text-neutral-text leading-relaxed">
                    To provide an accurate quote, we typically need to
                    understand your business goals, target audience, desired
                    functionality, content requirements, and any design
                    preferences. The more details you can provide, the more
                    accurate our estimate will be.
                  </p>
                </div>
              </div>
            </div>

            <div class="card card-hover p-8 group">
              <div class="flex items-start gap-4">
                <div
                  class="bg-primary-600 bg-opacity-10 rounded-lg p-3 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-primary-600 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-primary mb-3">
                    Do you work with remote clients?
                  </h3>
                  <p class="text-neutral-text leading-relaxed">
                    Absolutely! While we're based in Ottawa, we work with
                    clients across Canada and internationally. Our process is
                    designed to work smoothly regardless of location, with
                    regular communication via video calls and collaborative
                    tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA at bottom of FAQ -->
          <div class="text-center mt-16">
            <p class="text-lg text-neutral-text mb-6">
              Still have questions? We'd love to help!
            </p>
            <a
              href="#contact-form"
              class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ContactFormComponent from '~/components/forms/ContactForm.vue';
import ContactStructuredData from '~/components/seo/ContactStructuredData.vue';
import { useSeo } from '~/composables/useSeo';

// SEO Setup with enhanced structured data
useSeo({
  title: 'Contact Ottawa Webmasters | Get Your Free Consultation',
  description:
    'Contact Ottawa Webmasters for professional web development, design, and SEO services. Get your free consultation today and transform your online presence.',
  url: '/contact',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Ottawa Webmasters',
    description:
      'Get in touch with Ottawa Webmasters for professional web services',
    provider: {
      '@type': 'Organization',
      name: 'Ottawa Webmasters',
      email: 'contact@ottawawebmasters.ca',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ottawa',
        addressRegion: 'ON',
        addressCountry: 'CA',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'contact@ottawawebmasters.ca',
        availableLanguage: 'English',
      },
    },
  },
});

const contactRoot = ref(null);
</script>
