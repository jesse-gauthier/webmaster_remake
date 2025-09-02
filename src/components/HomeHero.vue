<!-- HeroSection.vue -->
<template>
  <section class="relative bg-neutral-cream overflow-hidden">
    <!-- Background Pattern Element -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div
        class="absolute -right-20 -top-20 w-96 h-96 bg-accent rounded-full"
      ></div>
      <div
        class="absolute -left-32 top-1/2 w-80 h-80 bg-primary rounded-full"
      ></div>
      <div
        class="absolute right-20 -bottom-20 w-64 h-64 bg-primary-300 rounded-full"
      ></div>
    </div>

    <!-- Main Hero Content -->
    <div class="container-site relative z-10 py-12 sm:py-16 md:py-24 lg:py-32">
      <div class="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- Left Column - Text Content -->
        <div class="space-y-4 sm:space-y-6 max-w-lg">
          <span class="badge badge-accent inline-block mb-2 animate-fade-in text-xs sm:text-sm"
            >Web Development & Design</span
          >
          <h1
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-primary animate-slide-up leading-tight"
            style="animation-delay: 0.1s"
          >
            Transforming Ideas Into Digital Experiences
          </h1>
          <p
            class="text-base sm:text-lg text-neutral-text animate-slide-up"
            style="animation-delay: 0.2s"
          >
            We craft modern, responsive websites and applications that drive
            results for your business. Your success is our priority.
          </p>
          <div
            class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 animate-slide-up"
            style="animation-delay: 0.3s"
          >
            <a href="/services" class="btn-primary btn-lg hover:text-white text-center"
              >Our Services</a
            >
            <a href="/portfolio" class="btn-outline btn-lg text-center">View Our Work</a>
          </div>
          <!-- Trust Indicators -->
          <div
            class="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-6 animate-slide-up"
            style="animation-delay: 0.4s"
          >
            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span class="text-xs sm:text-sm font-semibold">98% Client Satisfaction</span>
            </div>
            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-xs sm:text-sm font-semibold">100+ Projects Delivered</span>
            </div>
          </div>
        </div>

        <!-- Right Column - Hero Image -->
        <div
          class="relative flex justify-center lg:justify-end animate-fade-in"
          style="animation-delay: 0.2s"
        >
          <div class="relative w-full max-w-md lg:max-w-full">
            <!-- Main Hero Image -->
            <img 
              src="/images/hero-image.jpg" 
              alt="Web design and development illustration"
              class="rounded-lg shadow-lg relative z-10 w-full h-auto aspect-[3/2]"
              loading="eager"
              width="600"
              height="400"
              style="min-height: 400px;"
              onerror="this.src='https://via.placeholder.com/600x400/EDF5F0/2E5944?text=Web+Masters';" 
            />

            <!-- Decorative Elements -->
            <div
              class="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-md transform -rotate-6 z-0"
            ></div>
            <div
              class="absolute -top-4 -right-4 w-32 h-32 border-4 border-accent rounded-md transform rotate-6 z-0"
            ></div>

            <!-- Floating Card Elements - Only visible on medium screens and up -->
            <div
              class="hidden md:block absolute -bottom-6 -left-12 bg-white p-4 rounded-lg shadow-lg z-20 transform -rotate-3 animate-bounce-light"
            >
              <div class="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-accent"
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
                <div>
                  <p class="text-sm font-medium text-neutral-text">
                    Affordable Pricing
                  </p>
                  <p class="text-xs text-neutral-500">
                    Customized to your needs
                  </p>
                </div>
              </div>
            </div>

            <div
              class="hidden md:block absolute -top-4 -right-6 bg-white p-4 rounded-lg shadow-lg z-20 transform rotate-3 animate-bounce-light"
              style="animation-delay: 1s"
            >
              <div class="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-primary"
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
                <div>
                  <p class="text-sm font-medium text-neutral-text">
                    Lightning Fast
                  </p>
                  <p class="text-xs text-neutral-500">Optimized performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wave Divider at Bottom -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 80"
        fill="#FFFFFF"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
// No additional setup required for this component
</script>
