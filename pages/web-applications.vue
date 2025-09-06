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
            <span class="text-lg">⚡</span>
            Custom Development Solutions
          </span>

          <h1
            id="hero-title"
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight"
          >
            Advanced Web
            <span
              class="block text-accent-300 animate-slide-up"
              style="animation-delay: 0.1s"
              >Application Development</span
            >
          </h1>
          <p
            class="text-xl md:text-2xl text-primary-100 mb-8 animate-slide-up leading-relaxed"
            style="animation-delay: 0.2s"
          >
            Build powerful, scalable web applications that streamline your
            business processes and deliver exceptional user experiences.
          </p>

          <div
            class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up"
            style="animation-delay: 0.3s"
          >
            <router-link
              to="/contact"
              class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              Start Your Project
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
            <router-link
              to="/portfolio"
              class="btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
            >
              View Our Work
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
                  Custom Solutions
                </div>
                <div class="text-xs text-primary-200">
                  Tailored to Your Needs
                </div>
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
                  High Performance
                </div>
                <div class="text-xs text-primary-200">
                  Scalable Architecture
                </div>
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
            🚀 Our Expertise
          </span>
          <h2
            id="services-title"
            class="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Web Application Services
          </h2>
          <p
            class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed"
          >
            We specialize in building custom web applications that solve complex
            business challenges and streamline operations with modern technology
            stacks.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in webAppServices"
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
                  <path :d="service.icon"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">
                {{ service.title }}
              </h3>
              <p class="text-neutral-text mb-6 leading-relaxed">
                {{ service.description }}
              </p>
              <ul class="space-y-3">
                <li
                  v-for="(feature, fIndex) in service.features"
                  :key="fIndex"
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
                  <span class="text-neutral-text">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
            📋 Our Process
          </span>
          <h2
            id="process-title"
            class="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Development Process
          </h2>
          <p
            class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed"
          >
            Our proven development methodology ensures your web application is
            delivered on time, within budget, and exceeds your expectations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div
            v-for="(step, index) in developmentProcess"
            :key="index"
            class="relative group"
          >
            <!-- Enhanced connection line -->
            <div
              v-if="index < developmentProcess.length - 1"
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
              <h4 class="text-xl font-bold text-primary mb-4">
                {{ step.title }}
              </h4>
              <p class="text-neutral-text leading-relaxed text-sm">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack Section -->
    <section
      aria-labelledby="tech-title"
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
            💻 Technology Stack
          </span>
          <h2
            id="tech-title"
            class="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Modern Technologies
          </h2>
          <p
            class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed"
          >
            We use cutting-edge technologies and frameworks to build robust,
            scalable, and maintainable web applications.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(tech, index) in technologies"
            :key="index"
            class="relative group"
          >
            <div
              class="bg-white rounded-2xl shadow-xl p-8 text-center h-full relative z-10 transform group-hover:-translate-y-2 transition-all duration-500 border border-neutral-100 group-hover:shadow-2xl"
            >
              <div
                class="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-600 text-white flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                {{ tech.icon }}
              </div>
              <h4 class="text-xl font-bold text-primary mb-4">
                {{ tech.category }}
              </h4>
              <ul class="space-y-2">
                <li
                  v-for="(item, itemIndex) in tech.items"
                  :key="itemIndex"
                  class="text-neutral-text text-sm"
                >
                  {{ item }}
                </li>
              </ul>
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
            Ready to Build
          </span>

          <h2
            id="cta-title"
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight"
          >
            Ready to Build Your
            <span
              class="block text-accent-300 animate-slide-up"
              style="animation-delay: 0.1s"
              >Dream Application?</span
            >
          </h2>
          <p
            class="text-xl md:text-2xl text-primary-100 mb-8 animate-slide-up leading-relaxed"
            style="animation-delay: 0.2s"
          >
            Let's discuss your vision and create a powerful web application that
            drives your business forward. Get a free technical roadmap and
            opportunity assessment.
          </p>
          <div
            class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up"
            style="animation-delay: 0.3s"
          >
            <router-link
              to="/contact"
              class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              Request Consultation
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
            <router-link
              to="/services"
              class="btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
            >
              Explore All Services
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
                  Free Assessment
                </div>
                <div class="text-xs text-primary-200">No Obligation</div>
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
                  Proven Results
                </div>
                <div class="text-xs text-primary-200">Successful Launches</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouteSeo } from '@/composables/useRouteSeo';

// Use the route SEO composable for this page
useRouteSeo({
  title: 'Custom Web Application Development | Scalable Solutions',
  description:
    'Build powerful, scalable web applications with modern technologies. Custom development solutions tailored to your business needs. Get a free technical roadmap.',
  keywords:
    'web application development, custom software, Vue.js, React, Node.js, database design, API development, scalable applications, business automation',
  ogTitle: 'Custom Web Application Development | Advanced Solutions',
  ogDescription:
    'Transform your business with custom web applications. Modern technology stacks, scalable architecture, and proven development processes.',
  twitterTitle: 'Custom Web Application Development',
  twitterDescription:
    'Build powerful web applications that streamline your business. Custom development with modern technologies.',
});

// Web application services data
const webAppServices = [
  {
    title: 'Custom Business Applications',
    description:
      'Tailored web applications designed to streamline your unique business processes and workflows.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z',
    features: [
      'Workflow automation systems',
      'Customer relationship management',
      'Inventory management systems',
      'Document management platforms',
      'Employee portal applications',
    ],
  },
  {
    title: 'SaaS Platform Development',
    description:
      'Multi-tenant software platforms with subscription management, user authentication, and scalable infrastructure.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    features: [
      'Multi-tenant architecture',
      'Subscription billing integration',
      'Role-based access control',
      'API-first development',
      'Real-time collaboration features',
    ],
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Full-featured online stores with payment processing, inventory management, and customer analytics.',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4m.6 8L6 13h10l4-8H5.4m.6 8L6 13m0 0l-1.5-1.5M6 13v4a2 2 0 002 2h7a2 2 0 002-2v-4m-5 8V9a2 2 0 012-2h2a2 2 0 012 2v8',
    features: [
      'Custom shopping cart systems',
      'Payment gateway integration',
      'Order management workflows',
      'Customer account portals',
      'Analytics and reporting dashboards',
    ],
  },
  {
    title: 'Data Analytics Platforms',
    description:
      'Interactive dashboards and reporting tools that transform your data into actionable business insights.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    features: [
      'Interactive data visualizations',
      'Real-time analytics dashboards',
      'Custom reporting tools',
      'Data integration from multiple sources',
      'Automated alert systems',
    ],
  },
  {
    title: 'API Development & Integration',
    description:
      'RESTful APIs and microservices that connect your applications and enable seamless data exchange.',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    features: [
      'RESTful API development',
      'Third-party service integration',
      'Microservices architecture',
      'API documentation and testing',
      'Webhook and real-time integrations',
    ],
  },
  {
    title: 'Progressive Web Apps',
    description:
      'App-like experiences that work across all devices with offline capabilities and push notifications.',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    features: [
      'Offline functionality',
      'Push notification systems',
      'App-like user interface',
      'Cross-platform compatibility',
      'Fast loading and caching',
    ],
  },
];

// Development process steps
const developmentProcess = [
  {
    title: 'Discovery & Planning',
    description:
      'Define project goals, technical requirements, and create a detailed development roadmap with clear milestones.',
  },
  {
    title: 'Architecture Design',
    description:
      'Design scalable system architecture, choose optimal technology stack, and plan database structure.',
  },
  {
    title: 'Development & Testing',
    description:
      'Build your application using agile methodology with continuous testing and quality assurance.',
  },
  {
    title: 'Deployment & Launch',
    description:
      'Deploy to production environment with performance optimization and security configuration.',
  },
  {
    title: 'Support & Growth',
    description:
      'Ongoing maintenance, feature enhancements, and performance monitoring for continued success.',
  },
];

// Technology stack categories
const technologies = [
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      'Vue.js & Nuxt.js',
      'React & Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Progressive Web Apps',
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      'Node.js & Express',
      'Python & Django',
      'PHP & Laravel',
      'RESTful APIs',
      'GraphQL',
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'Infrastructure',
    icon: '☁️',
    items: [
      'AWS & Azure',
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'CDN Integration',
      'Monitoring & Analytics',
    ],
  },
];
</script>
