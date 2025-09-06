<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 md:py-32 overflow-hidden"
    >
      <!-- Background decorative elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div class="absolute -right-40 -top-40 w-96 h-96 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute -left-20 top-1/2 w-80 h-80 bg-accent-light rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <!-- Floating particles -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div class="absolute top-20 left-20 w-4 h-4 bg-accent-300 rounded-full animate-bounce-light" style="animation-delay: 0.5s"></div>
        <div class="absolute top-1/2 right-1/4 w-6 h-6 bg-primary-300 rounded-full animate-bounce-light" style="animation-delay: 1.5s"></div>
        <div class="absolute bottom-20 right-20 w-8 h-8 bg-accent-200 rounded-full animate-bounce-light" style="animation-delay: 2s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge with Emoji -->
          <span class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span class="text-lg">🚀</span>
            Our Technology Stack
          </span>

          <!-- Main Headline -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight">
            Cutting-Edge Technologies for
            <span class="block text-accent-300 animate-slide-up" style="animation-delay: 0.1s">
              Modern Web Solutions
            </span>
          </h1>

          <!-- Description -->
          <p class="text-xl md:text-2xl text-primary-100 mb-8 animate-slide-up leading-relaxed" style="animation-delay: 0.2s">
            We leverage the latest technologies and frameworks to build robust, scalable, and high-performing digital solutions that stand the test of time.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up" style="animation-delay: 0.3s">
            <router-link to="/contact" class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
              Start Your Project
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </router-link>
            <router-link to="/services" class="btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300">
              View Our Services
            </router-link>
          </div>

          <!-- Trust indicators -->
          <div class="flex flex-wrap justify-center items-center gap-8 pt-12 animate-slide-up" style="animation-delay: 0.4s">
            <div class="flex items-center gap-2 text-primary-200">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-sm font-medium">Enterprise Grade</span>
            </div>
            <div class="flex items-center gap-2 text-primary-200">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-sm font-medium">Production Ready</span>
            </div>
            <div class="flex items-center gap-2 text-primary-200">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-sm font-medium">Scalable Architecture</span>
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

    <!-- Frontend Technologies Section -->
    <section
      class="py-20 bg-gradient-to-br from-white via-neutral-cream to-primary-50 relative overflow-hidden"
    >
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div class="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center mb-16">
          <span class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            🎨 Frontend Technologies
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
            Modern Frontend Development
          </h2>
          <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
            We build responsive, interactive user interfaces using the latest frontend technologies and frameworks.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Vue.js Card -->
          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon icon="mdi:vuejs" width="28" height="28" class="text-white" />
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">Vue.js 3</h3>
              <p class="text-neutral-text mb-6 leading-relaxed">Progressive JavaScript framework for building user interfaces with the Composition API.</p>

              <ul class="space-y-3">
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">Reactive data binding</span>
                </li>
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">Component-based architecture</span>
                </li>
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">Excellent performance</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Nuxt.js Card -->
          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon icon="mdi:nuxt" width="28" height="28" class="text-white" />
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">Nuxt.js 4</h3>
              <p class="text-neutral-text mb-6 leading-relaxed">Full-stack Vue framework with SSR, SSG, and powerful developer experience.</p>

              <ul class="space-y-3">
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">Server-side rendering</span>
                </li>
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">Auto-imports & routing</span>
                </li>
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">Built-in SEO optimization</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Tailwind CSS Card -->
          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon icon="mdi:tailwind" width="28" height="28" class="text-white" />
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">Tailwind CSS</h3>
              <p class="text-neutral-text mb-6 leading-relaxed">Utility-first CSS framework for rapidly building custom user interfaces.</p>

              <ul class="space-y-3">
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">Utility-first approach</span>
                </li>
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">Responsive design</span>
                </li>
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">Customizable design system</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Backend & Infrastructure Section -->
    <section
      class="py-20 bg-gradient-to-br from-primary-50 via-white to-neutral-cream relative overflow-hidden"
    >
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div class="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-20 right-20 w-48 h-48 bg-accent rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center mb-16">
          <span class="inline-block bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⚡ Backend & Infrastructure
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
            Powerful Backend Solutions
          </h2>
          <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
            Robust server-side technologies and cloud infrastructure for scalable, secure, and high-performance applications.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Node.js Card -->
          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon icon="mdi:nodejs" width="28" height="28" class="text-white" />
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">Node.js</h3>
              <p class="text-neutral-text mb-6 leading-relaxed">JavaScript runtime for building scalable server-side applications.</p>

              <ul class="space-y-3">
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">Event-driven architecture</span>
                </li>
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">High concurrency</span>
                </li>
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">Rich ecosystem</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Python Card -->
          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon icon="mdi:language-python" width="28" height="28" class="text-white" />
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">Python</h3>
              <p class="text-neutral-text mb-6 leading-relaxed">Versatile programming language for web development, APIs, and data processing.</p>

              <ul class="space-y-3">
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">Django & FastAPI</span>
                </li>
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">Data science & ML</span>
                </li>
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">Rapid development</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Database Card -->
          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon icon="mdi:database" width="28" height="28" class="text-white" />
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">Databases</h3>
              <p class="text-neutral-text mb-6 leading-relaxed">Modern database solutions for reliable data storage and retrieval.</p>

              <ul class="space-y-3">
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">PostgreSQL & MySQL</span>
                </li>
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">MongoDB & Redis</span>
                </li>
                <li class="flex items-start">
                  <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-neutral-text">ACID compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cloud & Tools Section -->
    <section
      class="py-20 bg-gradient-to-br from-white via-neutral-cream to-accent-50 relative overflow-hidden"
    >
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div class="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center mb-16">
          <span class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            ☁️ Cloud & DevOps Tools
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
            Modern Development Tools
          </h2>
          <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
            Professional development workflow with modern cloud platforms, deployment tools, and monitoring solutions.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Vercel Card -->
          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-6">
              <div class="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon icon="mdi:triangle" width="20" height="20" class="text-white" />
              </div>
              <h3 class="text-lg font-bold text-primary mb-3">Vercel</h3>
              <p class="text-neutral-text text-sm leading-relaxed">Global edge deployment platform</p>
            </div>
          </div>

          <!-- AWS Card -->
          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-6">
              <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon icon="mdi:aws" width="20" height="20" class="text-white" />
              </div>
              <h3 class="text-lg font-bold text-primary mb-3">AWS</h3>
              <p class="text-neutral-text text-sm leading-relaxed">Comprehensive cloud services platform</p>
            </div>
          </div>

          <!-- Docker Card -->
          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-6">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon icon="mdi:docker" width="20" height="20" class="text-white" />
              </div>
              <h3 class="text-lg font-bold text-primary mb-3">Docker</h3>
              <p class="text-neutral-text text-sm leading-relaxed">Containerization & deployment</p>
            </div>
          </div>

          <!-- Git Card -->
          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-6">
              <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon icon="mdi:git" width="20" height="20" class="text-white" />
              </div>
              <h3 class="text-lg font-bold text-primary mb-3">Git & GitHub</h3>
              <p class="text-neutral-text text-sm leading-relaxed">Version control & collaboration</p>
            </div>
          </div>
        </div>

        <!-- Additional Tools Grid -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
              <Icon icon="mdi:eslint" width="20" height="20" class="text-purple-600" />
            </div>
            <span class="text-sm font-medium text-neutral-text">ESLint</span>
          </div>
          
          <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div class="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-2">
              <Icon icon="mdi:code-json" width="20" height="20" class="text-pink-600" />
            </div>
            <span class="text-sm font-medium text-neutral-text">Prettier</span>
          </div>
          
          <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
              <Icon icon="mdi:test-tube" width="20" height="20" class="text-green-600" />
            </div>
            <span class="text-sm font-medium text-neutral-text">Vitest</span>
          </div>
          
          <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
              <Icon icon="mdi:robot" width="20" height="20" class="text-blue-600" />
            </div>
            <span class="text-sm font-medium text-neutral-text">Playwright</span>
          </div>
          
          <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
              <Icon icon="mdi:package-variant" width="20" height="20" class="text-orange-600" />
            </div>
            <span class="text-sm font-medium text-neutral-text">Vite</span>
          </div>
          
          <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-2">
              <Icon icon="mdi:state-machine" width="20" height="20" class="text-teal-600" />
            </div>
            <span class="text-sm font-medium text-neutral-text">Pinia</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 md:py-32 overflow-hidden"
    >
      <!-- Background elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div class="absolute -right-40 -top-40 w-96 h-96 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute -left-20 top-1/2 w-80 h-80 bg-accent-light rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <!-- Floating particles -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div class="absolute top-20 left-20 w-4 h-4 bg-accent-300 rounded-full animate-bounce-light" style="animation-delay: 0.5s"></div>
        <div class="absolute top-1/2 right-1/4 w-6 h-6 bg-primary-300 rounded-full animate-bounce-light" style="animation-delay: 1.5s"></div>
        <div class="absolute bottom-20 right-20 w-8 h-8 bg-accent-200 rounded-full animate-bounce-light" style="animation-delay: 2s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <span class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span class="text-lg">💡</span>
            Ready to Build?
          </span>

          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Build Your Next Project with
            <span class="block text-accent-300">Modern Technology</span>
          </h2>
          
          <p class="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
            Get a free consultation to discuss which technologies are best suited for your project goals and requirements.
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-6">
            <router-link to="/contact" class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
              Get Free Consultation
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </router-link>
            <router-link to="/services" class="btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300">
              View Our Services
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useSeo } from '~/composables/useSeo';
import { useAnalytics } from '~/composables/useAnalytics';
import { Icon } from '@iconify/vue';

// Get analytics methods
const { trackPageView } = useAnalytics();

// Use Nuxt's built-in SEO capabilities
useSeo({
  title: 'Technology Stack | Modern Web Development Tools & Frameworks',
  description: 'Discover our comprehensive technology stack including Vue.js, Nuxt.js, Node.js, Python, cloud platforms, and modern development tools for building scalable web applications.',
  url: '/technology-stack'
});

// Track page view when component mounts
onMounted(() => {
  trackPageView("/technology-stack", "Technology Stack Page");
});
</script>

<style scoped>
/* Custom animations for floating elements */
@keyframes bounce-light {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
}

.animate-bounce-light {
  animation: bounce-light 6s ease-in-out infinite;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

/* Container site class for consistent layout */
.container-site {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container-site {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container-site {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>