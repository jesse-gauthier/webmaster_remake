<template>
  <div class="min-h-screen">
    <!-- Enhanced Hero Section -->
    <section aria-labelledby="hero-title" class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 md:py-32 overflow-hidden">
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

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge with Emoji -->
          <span class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span class="text-lg">⚡</span>
            WordPress Expertise
          </span>

          <h1 id="hero-title" class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight">
            Expert WordPress
            <span class="block text-accent-300 animate-slide-up" style="animation-delay: 0.1s">Development Services</span>
          </h1>
          <p class="text-xl md:text-2xl text-primary-100 mb-8 animate-slide-up leading-relaxed" style="animation-delay: 0.2s">
            Custom WordPress solutions tailored to your business needs, from simple websites to complex e-commerce platforms.
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up" style="animation-delay: 0.3s">
            <router-link to="/contact#contact-form" class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
              Get Started
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </router-link>
            <router-link to="/portfolio" class="btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300">
              View Our Work
            </router-link>
          </div>

          <!-- Enhanced trust indicators -->
          <div class="flex flex-wrap justify-center items-center gap-8 pt-12 animate-slide-up" style="animation-delay: 0.4s">
            <div class="flex items-center gap-3">
              <div class="bg-accent bg-opacity-20 rounded-full p-2">
                <svg class="h-6 w-6 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">WordPress Experts</div>
                <div class="text-xs text-primary-200">Certified Developers</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="bg-primary-300 bg-opacity-30 rounded-full p-2">
                <svg class="h-6 w-6 text-primary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Secure & Fast</div>
                <div class="text-xs text-primary-200">Optimized Performance</div>
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

    <!-- Enhanced Services Section -->
    <section aria-labelledby="services-title" class="py-20 bg-gradient-to-br from-white via-neutral-cream to-primary-50 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div class="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center mb-16">
          <span class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            🛠️ Our Expertise
          </span>
          <h2 id="services-title" class="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our WordPress Services
          </h2>
          <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed mb-6">
            We deliver high-quality WordPress solutions that help businesses build their online presence, engage with their audience, and grow their revenue.
          </p>
          <router-link
            to="/technology-stack"
            class="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors duration-200 bg-accent bg-opacity-10 px-4 py-2 rounded-full hover:bg-opacity-20"
          >
            <Icon
              icon="mdi:server"
              width="18"
              height="18"
              aria-hidden="true"
            />
            Explore our full technology stack beyond WordPress
            <Icon
              icon="mdi:chevron-right"
              width="16"
              height="16"
              aria-hidden="true"
            />
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100"
          >
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-8">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    :icon="service.icon"
                    width="28"
                    height="28"
                    class="text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 class="text-2xl font-bold text-primary mb-0">{{ service.title }}</h3>
              </div>
              <p class="text-neutral-text mb-6 leading-relaxed">{{ service.description }}</p>
              <ul class="space-y-3">
                <li
                  v-for="(feature, fIndex) in service.features"
                  :key="fIndex"
                  class="flex items-start"
                >
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
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
    <section aria-labelledby="process-title" class="py-20 bg-gradient-to-br from-primary-50 via-white to-neutral-cream relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-10">
        <div class="absolute top-20 left-20 w-32 h-32 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-20 right-20 w-24 h-24 bg-primary rounded-full animate-bounce-light" style="animation-delay: 1.5s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center mb-16">
          <span class="inline-block bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            📋 Our Process
          </span>
          <h2 id="process-title" class="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Development Process
          </h2>
          <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
            We follow a streamlined process to ensure your WordPress project is delivered on time, within budget, and exceeds your expectations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, index) in process" :key="index" class="relative group">
            <!-- Enhanced connection line -->
            <div
              v-if="index < process.length - 1"
              class="hidden lg:block absolute top-1/4 left-full w-full h-1 bg-gradient-to-r from-primary to-accent z-0"
            ></div>

            <div class="bg-white rounded-2xl shadow-xl p-8 text-center h-full relative z-10 transform group-hover:-translate-y-2 transition-all duration-500 border border-neutral-100 group-hover:shadow-2xl">
              <div
                class="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-600 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                {{ index + 1 }}
              </div>
              <h4 class="text-2xl font-bold text-primary mb-4">{{ step.title }}</h4>
              <p class="text-neutral-text leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Testimonials -->
    <section aria-labelledby="testimonials-title" class="py-20 bg-gradient-to-br from-white via-primary-25 to-neutral-cream relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div class="absolute top-40 right-40 w-80 h-80 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-40 left-40 w-60 h-60 bg-primary rounded-full animate-bounce-light" style="animation-delay: 2s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center mb-16">
          <span class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⭐ Client Success Stories
          </span>
          <h2 id="testimonials-title" class="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about our transformative WordPress services.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="group bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-500 border border-neutral-100 hover:shadow-2xl"
          >
            <div class="flex mb-6">
              <svg class="h-6 w-6 text-accent mr-1" v-for="star in 5" :key="star" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="text-neutral-text italic mb-6 text-lg leading-relaxed">"{{ testimonial.quote }}"</p>
            <div class="flex items-center">
              <div class="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div class="ml-4">
                <h5 class="font-bold text-primary text-lg mb-0">{{ testimonial.name }}</h5>
                <p class="text-neutral-text font-medium mb-0">
                  {{ testimonial.company }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="section-padding bg-primary-50">
      <div class="container-site">
        <div class="text-center mb-12">
          <h2>Transparent Pricing</h2>
          <p class="max-w-content mx-auto">
            Choose the WordPress development package that suits your business
            needs and budget.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(plan, index) in plans"
            :key="index"
            :class="[
              'card',
              'card-hover',
              index === 1
                ? 'border-2 border-accent-500 relative transform md:-translate-y-4'
                : '',
            ]"
          >
            <div
              v-if="index === 1"
              class="bg-accent-500 text-center text-neutral-cream py-2 text-sm font-semibold"
            >
              MOST POPULAR
            </div>
            <div class="card-body text-center">
              <h3 class="mb-2">{{ plan.name }}</h3>
              <p class="text-neutral-600 mb-4">{{ plan.description }}</p>
              <div class="mb-6">
                <span class="text-4xl font-bold text-primary-600"
                  >${{ plan.price }}</span
                >
                <span class="text-neutral-500">{{ plan.billing }}</span>
              </div>
              <ul class="text-left mb-6">
                <li
                  v-for="(feature, fIndex) in plan.features"
                  :key="fIndex"
                  class="flex items-start mb-3"
                >
                  <span class="text-accent-500 mr-2">✓</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
              <router-link
                to="/contact#contact-form"
                :class="[index === 1 ? 'btn-primary' : 'btn-outline', 'w-full']"
              >
                Get Started
              </router-link>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <p class="mb-4">Need a custom solution?</p>
          <router-link to="/contact#contact-form" class="btn-secondary"
            >Contact Us for Custom Pricing</router-link
          >
        </div>
      </div>
    </section>

    <!-- Enhanced CTA Section -->
    <section aria-labelledby="cta-title" class="relative bg-gradient-to-br from-accent-600 via-accent-700 to-accent-900 py-20 md:py-32 overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div class="absolute -right-20 -top-20 w-80 h-80 bg-primary rounded-full animate-bounce-light"></div>
        <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-accent-300 rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
        <div class="absolute right-1/3 top-1/4 w-32 h-32 bg-primary-300 rounded-full animate-bounce-light" style="animation-delay: 2s"></div>
      </div>

      <!-- Floating particles -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div class="absolute top-20 left-20 w-4 h-4 bg-primary-300 rounded-full animate-bounce-light" style="animation-delay: 0.5s"></div>
        <div class="absolute top-40 right-32 w-3 h-3 bg-primary-400 rounded-full animate-bounce-light" style="animation-delay: 1.5s"></div>
        <div class="absolute bottom-32 left-1/3 w-5 h-5 bg-accent-300 rounded-full animate-bounce-light" style="animation-delay: 2.5s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Badge with Emoji -->
          <span class="inline-flex items-center gap-2 bg-primary bg-opacity-20 text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span class="text-lg">🚀</span>
            WordPress Transformation
          </span>

          <h2 id="cta-title" class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight">
            Ready to Transform Your
            <span class="block text-accent-200 animate-slide-up" style="animation-delay: 0.1s">WordPress Site?</span>
          </h2>
          <p class="text-xl md:text-2xl text-accent-100 mb-8 animate-slide-up leading-relaxed" style="animation-delay: 0.2s">
            Let's discuss how our expert WordPress development services can help your business grow and thrive online.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up" style="animation-delay: 0.3s">
            <router-link
              to="/contact#contact-form"
              class="btn-primary bg-white text-accent-600 hover:bg-neutral-100 btn-lg transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              Schedule a Free Consultation
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </router-link>
            <router-link to="/portfolio" class="btn-outline btn-lg text-white border-white hover:bg-white hover:text-accent-600 transform hover:scale-105 transition-all duration-300">
              View Our Portfolio
            </router-link>
          </div>

          <!-- Enhanced trust indicators -->
          <div class="flex flex-wrap justify-center items-center gap-8 pt-12 animate-slide-up" style="animation-delay: 0.4s">
            <div class="flex items-center gap-3">
              <div class="bg-primary bg-opacity-20 rounded-full p-2">
                <svg class="h-6 w-6 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Free Consultation</div>
                <div class="text-xs text-accent-200">No Commitment</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="bg-accent-300 bg-opacity-30 rounded-full p-2">
                <svg class="h-6 w-6 text-accent-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Fast Turnaround</div>
                <div class="text-xs text-accent-200">Quick Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="section-padding">
      <div class="container-site">
        <div class="mx-auto">
          <div ref="contactRoot" class="async-contact-form">
            <Suspense v-if="contactShouldLoad">
              <template #default>
                <AsyncContactForm />
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
            <noscript>
              <p class="text-sm text-neutral-600">
                Enable JavaScript to load the contact form.
              </p>
            </noscript>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced FAQ Section -->
    <section aria-labelledby="faq-title" class="py-20 bg-gradient-to-br from-neutral-50 via-white to-primary-50 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div class="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-20 right-20 w-32 h-32 bg-accent rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center mb-16">
          <span class="inline-block bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            ❓ Common Questions
          </span>
          <h2 id="faq-title" class="text-4xl md:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our WordPress development services and expertise.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="mb-6"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full text-left bg-white p-6 rounded-2xl shadow-xl flex justify-between items-center focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-20 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 border border-neutral-100"
              :aria-expanded="item.open" :aria-controls="`faq-content-${index}`"
            >
              <span class="font-bold text-primary text-lg pr-4">{{ item.question }}</span>
              <div class="flex-shrink-0">
                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center">
                  <svg class="h-6 w-6 text-white transform transition-transform duration-300"
                    :class="{ 'rotate-180': item.open }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </button>
            <div
              v-if="item.open"
              :id="`faq-content-${index}`"
              class="bg-white px-6 pb-6 rounded-b-2xl border-t border-neutral-100 shadow-xl"
            >
              <div class="pt-6">
                <p class="text-neutral-text text-lg leading-relaxed mb-0">{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onBeforeUnmount,
  defineAsyncComponent,
  watchEffect,
} from 'vue';
import { Icon } from '@iconify/vue';
import { useSeo } from '~/composables/useSeo';

// SEO Setup
useSeo({
  title: 'WordPress Development Services | Custom WordPress Solutions',
  description:
    'Professional WordPress development services including custom themes, plugin development, migrations, and maintenance. Expert WordPress solutions tailored to your business needs.',
  url: '/wordpress',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'WordPress Development Services',
    description:
      'Custom WordPress development, themes, plugins, and maintenance',
    provider: {
      '@type': 'Organization',
      name: 'Ottawa Webmasters',
    },
    serviceType: 'WordPress Development',
  },
});

// Inline async ContactForm
const AsyncContactForm = defineAsyncComponent(
  () => import('@/components/forms/ContactForm.vue')
);
const contactShouldLoad = ref(false);
const contactRoot = ref(null);
let contactObserver;
const contactLoadIfIntersecting = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
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

// Services data
const services = ref([
  {
    title: 'Custom WordPress Development',
    icon: 'mdi:wordpress',
    description:
      'Tailored WordPress websites designed to meet your specific business requirements.',
    features: [
      'Custom theme development',
      'Plugin development & integration',
      'E-commerce functionality',
      'Performance optimization',
      'Mobile-responsive design',
    ],
  },
  {
    title: 'WordPress Maintenance',
    icon: 'mdi:wrench',
    description:
      'Keep your WordPress site secure, updated, and running at peak performance.',
    features: [
      'Regular WordPress updates',
      'Security monitoring & hardening',
      'Performance optimization',
      'Daily/weekly backups',
      'Technical support',
    ],
  },
  {
    title: 'WordPress Migration',
    icon: 'mdi:arrow-left-right',
    description:
      'Seamless migration of your existing website to WordPress or between hosts.',
    features: [
      'Zero downtime migration',
      'Data & content transfer',
      'SEO preservation',
      'Performance testing',
      'Post-migration support',
    ],
  },
]);

// Process steps
const process = ref([
  {
    title: 'Discovery',
    description:
      'We analyze your business needs and goals to develop a strategic plan for your WordPress project.',
  },
  {
    title: 'Design',
    description:
      'Our designers create wireframes and mockups of your WordPress site based on your brand guidelines.',
  },
  {
    title: 'Development',
    description:
      'Our WordPress experts build your custom website with clean, optimized code and the latest technologies.',
  },
  {
    title: 'Launch',
    description:
      'We thoroughly test your site before deployment and provide training on how to manage your new WordPress site.',
  },
]);

// Client-side contact form intersection observer
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

// Testimonials
const testimonials = ref([
  {
    quote:
      'Working with this team was a game-changer for our business. Our new WordPress site increased our conversion rate by 45% in the first month.',
    name: 'Sarah Johnson',
    company: 'Marketing Director, TechCorp',
  },
  {
    quote:
      'The WordPress maintenance service has saved us countless hours and prevented several potential security issues. Worth every penny!',
    name: 'Michael Chen',
    company: 'CEO, GrowthStart',
  },
  {
    quote:
      'The migration to WordPress was smooth and seamless. Our team was up and running on the new platform with minimal training.',
    name: 'Laura Martinez',
    company: 'Operations Manager, CreativeHub',
  },
]);

// Pricing plans
const plans = ref([
  {
    name: 'Basic',
    description: 'For small businesses starting out',
    price: '999',
    billing: 'one-time',
    features: [
      'Custom WordPress theme',
      'Mobile responsive design',
      'Contact form integration',
      '5 pages of content',
      'Basic SEO setup',
      '1 month of support',
    ],
  },
  {
    name: 'Professional',
    description: 'For growing businesses',
    price: '1,999',
    billing: 'one-time',
    features: [
      'Everything in Basic',
      'E-commerce functionality',
      'Custom plugin integration',
      'Advanced SEO setup',
      'Performance optimization',
      '3 months of support',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For established businesses',
    price: '3,499',
    billing: 'one-time',
    features: [
      'Everything in Professional',
      'Custom plugin development',
      'Multilingual support',
      'Advanced security setup',
      'Membership functionality',
      '6 months of support',
    ],
  },
]);

// FAQs
const faqs = ref([
  {
    question: 'How long does it take to develop a WordPress website?',
    answer:
      'Typically, a custom WordPress website takes 4-8 weeks to complete, depending on the complexity of the project. Basic websites may be completed in as little as 2-3 weeks, while more complex projects with e-commerce or custom functionality may take 8-12 weeks.',
    open: true,
  },
  {
    question: 'Do you provide WordPress hosting services?',
    answer:
      "While we don't directly provide hosting, we partner with premium WordPress hosting providers and can manage the setup and configuration process for you. We'll recommend the best hosting solution based on your website's needs and budget.",
    open: false,
  },
  {
    question: 'Can you work with an existing WordPress website?',
    answer:
      "Absolutely! We can help optimize, redesign, or add new features to your existing WordPress site. We'll first conduct a thorough audit to identify areas for improvement before making any changes.",
    open: false,
  },
  {
    question: 'What about WordPress security?',
    answer:
      'Security is a top priority in all our WordPress development projects. We implement industry best practices including secure coding standards, regular updates, strong authentication, firewall protection, and malware scanning to keep your site secure.',
    open: false,
  },
  {
    question: 'Do you offer ongoing maintenance after the website launch?',
    answer:
      'Yes, we offer various WordPress maintenance packages to keep your site secure, updated, and performing optimally. Our maintenance services include regular updates, security monitoring, backups, performance optimization, and technical support.',
    open: false,
  },
]);

// Methods
const toggleFaq = index => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>
