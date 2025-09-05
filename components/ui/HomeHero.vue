<!-- Enhanced Hero Section -->
<template>
  <section
    class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 min-h-screen overflow-hidden hero-section"
  >
    <!-- Dynamic Background Pattern Elements -->
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
      <div
        class="absolute left-1/4 top-20 w-32 h-32 bg-primary-300 rounded-full animate-bounce-light"
        style="animation-delay: 3s"
      ></div>
    </div>

    <!-- Floating Particles -->
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
      <div
        class="absolute top-1/2 right-20 w-2 h-2 bg-accent-200 rounded-full animate-bounce-light"
        style="animation-delay: 3.5s"
      ></div>
    </div>

    <!-- Main Hero Content -->
    <div class="container-site relative z-10 py-20 sm:py-24 md:py-32 lg:py-40">
      <div class="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <!-- Left Column - Enhanced Text Content -->
        <div class="space-y-6 sm:space-y-8 max-w-2xl">
          <!-- Badge with Emoji -->
          <span
            class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in"
          >
            <span class="text-lg">🚀</span>
            Web Development & Design Experts
          </span>

          <!-- Main Headline -->
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white animate-slide-up leading-tight"
          >
            Building Digital
            <span
              class="block text-accent-300 animate-slide-up"
              style="animation-delay: 0.1s"
            >
              Experiences
            </span>
            <span
              class="block text-primary-100 animate-slide-up"
              style="animation-delay: 0.2s"
            >
              That Convert
            </span>
          </h1>

          <!-- Enhanced Description -->
          <p
            class="text-xl sm:text-2xl text-primary-100 animate-slide-up leading-relaxed"
            style="animation-delay: 0.3s"
          >
            We transform your vision into powerful digital solutions that drive
            growth, engage customers, and deliver measurable results for your
            business.
          </p>

          <!-- CTA Buttons with Enhanced Styling -->
          <div
            class="flex flex-col sm:flex-row gap-4 pt-6 animate-slide-up"
            style="animation-delay: 0.4s"
          >
            <a
              href="/services"
              class="btn-primary btn-lg hover:text-white text-center transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
            >
              Explore Services
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
            <a
              href="/portfolio"
              class="btn-outline btn-lg text-center text-white border-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>

          <!-- Enhanced Trust Indicators -->
          <div
            class="flex flex-wrap items-center gap-8 pt-8 animate-slide-up"
            style="animation-delay: 0.5s"
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
                  100+ Projects
                </div>
                <div class="text-xs text-primary-200">
                  Successfully Delivered
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="bg-primary-300 bg-opacity-30 rounded-full p-2">
                <svg
                  class="h-6 w-6 text-primary-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">
                  98% Satisfaction
                </div>
                <div class="text-xs text-primary-200">Happy Clients</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="bg-accent-600 bg-opacity-30 rounded-full p-2">
                <svg
                  class="h-6 w-6 text-accent-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Ottawa Based</div>
                <div class="text-xs text-primary-200">Local Expertise</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Enhanced Hero Visual with aspect ratio -->
        <div
          class="relative flex justify-center lg:justify-end animate-fade-in"
          style="animation-delay: 0.2s"
        >
          <div class="relative w-full max-w-lg lg:max-w-full">
            <!-- Main Hero Image with fixed aspect ratio to prevent layout shift -->
            <div class="relative group">
              <div
                class="absolute -inset-4 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              ></div>
              <!-- Optimized hero image using Nuxt Image (Vercel docs quickstart) -->
              <NuxtImg
                src="/images/hero-image.jpg"
                alt="Web design and development illustration"
                width="600"
                height="450"
                sizes="(max-width: 1024px) 100vw, 600px"
                format="webp"
                preload
                decoding="async"
                fetchpriority="high"
                class="rounded-xl w-full h-auto transform group-hover:scale-105 transition-all duration-500"
              />
            </div>

            <!-- Enhanced Floating Card Elements with fixed positioning -->
            <div
              class="hidden md:block absolute -bottom-8 -left-16 w-64 h-32 z-20"
            >
              <div
                class="bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-2xl transform -rotate-3 animate-bounce-light border border-accent/20 w-full h-full"
              >
                <div class="flex items-center gap-4 h-full">
                  <div class="bg-accent rounded-full p-3 flex-shrink-0">
                    <svg
                      class="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-base font-semibold text-primary truncate">
                      Affordable Pricing
                    </p>
                    <p class="text-sm text-neutral-600 truncate">
                      Tailored to your budget
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="hidden md:block absolute -top-6 -right-12 w-64 h-32 z-20"
            >
              <div
                class="bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-2xl transform rotate-3 animate-bounce-light border border-primary/20 w-full h-full"
                style="animation-delay: 1s"
              >
                <div class="flex items-center gap-4 h-full">
                  <div class="bg-primary rounded-full p-3 flex-shrink-0">
                    <svg
                      class="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-base font-semibold text-primary truncate">
                      Lightning Fast
                    </p>
                    <p class="text-sm text-neutral-600 truncate">
                      Optimized performance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional floating element -->
            <div
              class="hidden lg:block absolute top-1/4 -left-8 bg-gradient-to-br from-accent-500 to-accent-600 p-6 rounded-2xl shadow-xl z-20 transform animate-bounce-light"
              style="animation-delay: 2s"
            >
              <div class="text-white text-center">
                <div class="text-2xl font-bold mb-1">24/7</div>
                <div class="text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Wave Divider -->
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
</template>

<script setup>
// NuxtImg is auto-registered by @nuxt/image module.
</script>
