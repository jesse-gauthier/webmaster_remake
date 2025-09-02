<!-- WorkProcess.vue -->
<template>
  <section data-aos="fade-up" class="max-w-[95dvw] mx-auto min-h-[50dvh] py-16" aria-labelledby="process-title">
    <div class="container-site">
      <h2 id="process-title" class="capitalize text-4xl font-bold text-center mb-6">
        How We Work
      </h2>

      <p class="text-neutral-text text-center max-w-2xl mx-auto mb-16">
        Our streamlined process ensures we deliver exceptional results for every project.
        We focus on communication, quality, and achieving your business goals.
      </p>

      <!-- Process Steps -->
      <div class="relative">
        <!-- Connection Line (Desktop) -->
        <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary-light -translate-y-1/2 z-0"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Step 1 -->
          <div class="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow z-10">
            <div
              class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md">
              1</div>
            <div class="pt-6 text-center">
              <h3 class="text-xl font-semibold text-primary mb-3">Discovery</h3>
              <p class="text-neutral-text">
                We start by understanding your business, goals, target audience, and project requirements through
                in-depth consultation.
              </p>
              <ul class="mt-4 text-left text-sm space-y-2">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-accent flex-shrink-0 mr-1.5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Initial consultation</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-accent flex-shrink-0 mr-1.5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Needs assessment</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-accent flex-shrink-0 mr-1.5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Project scope definition</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow z-10">
            <div
              class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md">
              2</div>
            <div class="pt-6 text-center">
              <h3 class="text-xl font-semibold text-primary mb-3">Planning & Design</h3>
              <p class="text-neutral-text">
                We create a strategic plan and design concepts that align with your brand identity and project goals.
              </p>
              <ul class="mt-4 text-left text-sm space-y-2">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-accent flex-shrink-0 mr-1.5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sitemap creation</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-accent flex-shrink-0 mr-1.5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Wireframing</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-accent flex-shrink-0 mr-1.5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Visual design mockups</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow z-10">
            <div
              class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md">
              3</div>
            <div class="pt-6 text-center">
              <h3 class="text-xl font-semibold text-primary mb-3">Development</h3>
              <p class="text-neutral-text">
                Our development team builds your website or application using modern technologies and best practices.
              </p>
              <ul class="mt-4 text-left text-sm space-y-2">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-accent flex-shrink-0 mr-1.5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Front-end coding</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-accent flex-shrink-0 mr-1.5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Back-end development</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-accent flex-shrink-0 mr-1.5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integration & testing</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow z-10">
            <div
              class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md">
              4</div>
            <div class="pt-6 text-center">
              <h3 class="text-xl font-semibold text-primary mb-3">Launch & Support</h3>
              <p class="text-neutral-text">
                We deploy your project, provide training, and offer ongoing support to ensure long-term success.
              </p>
              <ul class="mt-4 text-left text-sm space-y-2">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-accent flex-shrink-0 mr-1.5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Final testing</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-accent flex-shrink-0 mr-1.5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Deployment</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-accent flex-shrink-0 mr-1.5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Training & ongoing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>

    <TestimonialComponent />
  </section>
</template>

<script setup>
import TestimonialComponent from './TestimonialComponent.vue';

</script>

<style scoped>
h2 {
  font-size: 2em;
}

h3 {
  font-size: 1.8em;
  font-weight: medium;
}

/* Process steps hover effects */
.relative.bg-white {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.relative.bg-white:hover {
  transform: translateY(-5px);
}

/* Number circle animation */
.absolute.w-12.h-12.rounded-full {
  transition: all 0.3s ease;
}

.relative.bg-white:hover .absolute.w-12.h-12.rounded-full {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

/* Testimonial section */
.mt-20.bg-neutral-cream {
  position: relative;
  overflow: hidden;
}

.mt-20.bg-neutral-cream::before {
  content: '';
  position: absolute;
  top: -40px;
  left: -40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--primary-color, #2E5944);
  opacity: 0.1;
}

.mt-20.bg-neutral-cream::after {
  content: '';
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--accent-color, #4292AC);
  opacity: 0.1;
}

@media (hover: hover) {
  .md\:w-1\/3 .w-24.h-24 {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .md\:w-1\/3:hover .w-24.h-24 {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
}
</style>
