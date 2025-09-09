<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 md:py-32 overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div class="absolute -right-40 -top-40 w-96 h-96 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute -left-20 top-1/2 w-80 h-80 bg-accent-light rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <!-- Floating particles -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div class="absolute top-20 left-20 w-4 h-4 bg-accent-300 rounded-full animate-bounce-light" style="animation-delay: 0.5s"></div>
        <div class="absolute top-40 right-32 w-6 h-6 bg-accent-200 rounded-full animate-bounce-light" style="animation-delay: 1.5s"></div>
        <div class="absolute bottom-32 left-1/3 w-5 h-5 bg-accent-400 rounded-full animate-bounce-light" style="animation-delay: 2s"></div>
        <div class="absolute bottom-20 right-20 w-3 h-3 bg-accent-300 rounded-full animate-bounce-light" style="animation-delay: 0.8s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge with Emoji -->
          <span class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span class="text-lg">♿</span>
            WCAG 2.1 AA Compliant
          </span>

          <!-- Main Headline -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight">
            Web Accessibility 
            <span class="block text-accent-300 animate-slide-up" style="animation-delay: 0.1s">
              Matters for Everyone
            </span>
          </h1>

          <!-- Description -->
          <p class="text-xl md:text-2xl text-primary-100 mb-8 animate-slide-up leading-relaxed" style="animation-delay: 0.2s">
            Make your website accessible to everyone. Comply with Canadian and US accessibility laws while expanding your reach to over 1 billion people with disabilities worldwide.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up" style="animation-delay: 0.3s">
            <a href="#contact-form" class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2" @click="trackCTAClick('Get Accessibility Audit', 'Hero')">
              Get Free Audit Quote
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            <a href="#laws" class="btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300" @click="trackCTAClick('Learn About Laws', 'Hero')">
              Learn About Laws
            </a>
          </div>

          <!-- Trust indicators -->
          <div class="flex flex-wrap justify-center items-center gap-8 pt-12 animate-slide-up" style="animation-delay: 0.4s">
            <div class="flex items-center gap-2 text-primary-100">
              <span class="text-accent-300 text-2xl">🏆</span>
              <span class="text-sm font-medium">100+ Compliant Sites</span>
            </div>
            <div class="flex items-center gap-2 text-primary-100">
              <span class="text-accent-300 text-2xl">⚡</span>
              <span class="text-sm font-medium">24hr Response</span>
            </div>
            <div class="flex items-center gap-2 text-primary-100">
              <span class="text-accent-300 text-2xl">✅</span>
              <span class="text-sm font-medium">WCAG 2.1 AA Certified</span>
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

    <!-- Statistics Section -->
    <section class="py-20 bg-gradient-to-br from-white via-neutral-cream to-primary-50 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div class="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center mb-16">
          <span class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            📊 Accessibility Impact
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
            The Numbers Don't Lie
          </h2>
          <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
            Web accessibility isn't just the right thing to do—it's a massive business opportunity
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-8 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl font-bold text-white">1.3B</span>
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">People Worldwide</h3>
              <p class="text-neutral-text leading-relaxed">Live with disabilities and benefit from accessible websites</p>
            </div>
          </div>

          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-8 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl font-bold text-white">22%</span>
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">of Canadians</h3>
              <p class="text-neutral-text leading-relaxed">Have a disability that affects their daily activities</p>
            </div>
          </div>

          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div class="p-8 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl font-bold text-white">98%</span>
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">of Websites</h3>
              <p class="text-neutral-text leading-relaxed">Fail basic accessibility tests, missing significant audiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Canadian and US Laws Section -->
    <section id="laws" class="py-20 bg-gradient-to-br from-primary-50 via-white to-neutral-cream relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div class="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center mb-16">
          <span class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⚖️ Legal Compliance
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
            Legal Requirements for Web Accessibility
          </h2>
          <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
            Both Canada and the United States have comprehensive laws requiring digital accessibility. Non-compliance can result in significant legal and financial consequences.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <!-- Canadian Laws -->
          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
            <div class="p-8">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold text-2xl">🇨🇦</span>
                </div>
                <h3 class="text-2xl font-bold text-primary">Canadian Laws</h3>
              </div>

              <div class="space-y-6">
                <div class="border-l-4 border-accent-300 pl-4">
                  <h4 class="text-lg font-semibold text-primary mb-2">Accessible Canada Act (ACA)</h4>
                  <p class="text-neutral-text mb-3 leading-relaxed">
                    Requires federally regulated organizations to identify, remove, and prevent accessibility barriers in their digital platforms.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                        <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-neutral-text text-sm">Applies to federal government, banks, telecommunications, transportation</span>
                    </li>
                    <li class="flex items-start">
                      <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                        <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-neutral-text text-sm">WCAG 2.1 Level AA compliance required</span>
                    </li>
                    <li class="flex items-start">
                      <div class="bg-red-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                        <svg class="h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-neutral-text text-sm">Penalties up to <strong class="text-red-600">$250,000</strong> per violation</span>
                    </li>
                  </ul>
                </div>

                <div class="border-l-4 border-primary-300 pl-4">
                  <h4 class="text-lg font-semibold text-primary mb-2">Provincial Human Rights Codes</h4>
                  <p class="text-neutral-text mb-3 leading-relaxed">
                    All provinces prohibit discrimination based on disability, extending to digital accessibility.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <div class="bg-primary bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                        <svg class="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-neutral-text text-sm">Ontario: AODA (Accessibility for Ontarians with Disabilities Act)</span>
                    </li>
                    <li class="flex items-start">
                      <div class="bg-primary bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                        <svg class="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-neutral-text text-sm">Manitoba: Accessibility for Manitobans Act</span>
                    </li>
                    <li class="flex items-start">
                      <div class="bg-primary bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                        <svg class="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-neutral-text text-sm">Nova Scotia: Accessibility Act</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- US Laws -->
          <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
            <div class="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <div class="p-8">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold text-2xl">🇺🇸</span>
                </div>
                <h3 class="text-2xl font-bold text-primary">US Laws</h3>
              </div>

              <div class="space-y-6">
                <div class="border-l-4 border-accent-300 pl-4">
                  <h4 class="text-lg font-semibold text-primary mb-2">Americans with Disabilities Act (ADA)</h4>
                  <p class="text-neutral-text mb-3 leading-relaxed">
                    Prohibits discrimination based on disability, increasingly interpreted to include websites and digital platforms.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                        <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-neutral-text text-sm">Applies to places of public accommodation</span>
                    </li>
                    <li class="flex items-start">
                      <div class="bg-red-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                        <svg class="h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-neutral-text text-sm">Over <strong class="text-red-600">4,000</strong> ADA web lawsuits filed in 2023</span>
                    </li>
                    <li class="flex items-start">
                      <div class="bg-red-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                        <svg class="h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-neutral-text text-sm">Average settlement costs <strong class="text-red-600">$75,000-$175,000</strong></span>
                    </li>
                  </ul>
                </div>

                <div class="border-l-4 border-primary-300 pl-4">
                  <h4 class="text-lg font-semibold text-primary mb-2">Section 508</h4>
                  <p class="text-neutral-text mb-3 leading-relaxed">
                    Requires federal agencies to make their electronic information accessible to people with disabilities.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <div class="bg-primary bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                        <svg class="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-neutral-text text-sm">WCAG 2.1 Level AA compliance required</span>
                    </li>
                    <li class="flex items-start">
                      <div class="bg-primary bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                        <svg class="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-neutral-text text-sm">Applies to government contractors</span>
                    </li>
                    <li class="flex items-start">
                      <div class="bg-primary bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                        <svg class="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-neutral-text text-sm">Regular compliance monitoring and reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <a href="#contact-form" class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2" @click="trackCTAClick('Ensure Your Compliance', 'Laws Section')">
            Ensure Your Compliance
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Why Accessibility Matters Section -->
    <section id="benefits" class="py-16 lg:py-24 bg-white">
      <div class="container-site px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            Beyond Compliance: Why Accessibility Matters
          </h2>
          <p class="text-xl text-neutral-600 leading-relaxed">
            Accessibility isn't just about avoiding lawsuits—it's about creating better experiences for everyone and growing your business.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-primary-900 mb-2">Expanded Market Reach</h3>
            <p class="text-neutral-600">
              Reach 22% of Canadians and 26% of Americans with disabilities, representing over $490 billion in annual disposable income.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-primary-900 mb-2">Better SEO Rankings</h3>
            <p class="text-neutral-600">
              Accessible websites rank higher in search results due to better structure, faster loading, and improved user experience.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-primary-900 mb-2">Enhanced Brand Reputation</h3>
            <p class="text-neutral-600">
              Demonstrate your commitment to inclusion and social responsibility, building trust with all customers.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-primary-900 mb-2">Legal Protection</h3>
            <p class="text-neutral-600">
              Avoid costly lawsuits and compliance issues by proactively meeting accessibility standards.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-primary-900 mb-2">Improved Performance</h3>
            <p class="text-neutral-600">
              Accessible websites load faster, have cleaner code, and provide better experiences for all users.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-primary-900 mb-2">Innovation Driver</h3>
            <p class="text-neutral-600">
              Accessible design promotes innovation and creative solutions that benefit everyone, not just people with disabilities.
            </p>
          </div>
        </div>

        <div class="text-center">
          <a href="#contact-form" class="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center" @click="trackCTAClick('Start Your Accessibility Journey', 'Benefits Section')">
            Start Your Accessibility Journey
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Our Accessibility Services Section -->
    <section id="services" class="py-16 lg:py-24 bg-neutral-50">
      <div class="container-site px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            Our Accessibility Services
          </h2>
          <p class="text-xl text-neutral-600 leading-relaxed">
            We help businesses achieve and maintain WCAG 2.1 AA compliance through comprehensive auditing, remediation, and ongoing support.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-12">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0-8v8m2-8h2.5a2.5 2.5 0 010 5H13m0 0v3"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary-900 mb-4">Accessibility Auditing</h3>
            <p class="text-neutral-600 mb-6">
              Comprehensive evaluation of your website against WCAG 2.1 AA standards with detailed reporting and prioritized remediation recommendations.
            </p>
            <ul class="text-sm text-neutral-600 space-y-2 mb-6">
              <li class="flex items-start">
                <span class="text-accent-600 mr-2">✓</span>
                Automated and manual testing
              </li>
              <li class="flex items-start">
                <span class="text-accent-600 mr-2">✓</span>
                Screen reader compatibility testing
              </li>
              <li class="flex items-start">
                <span class="text-accent-600 mr-2">✓</span>
                Keyboard navigation assessment
              </li>
              <li class="flex items-start">
                <span class="text-accent-600 mr-2">✓</span>
                Color contrast analysis
              </li>
            </ul>
            <a href="#contact-form" class="text-accent-600 font-medium hover:text-accent-700 flex items-center" @click="trackCTAClick('Request Audit', 'Services - Auditing')">
              Request Audit
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary-900 mb-4">Accessibility Remediation</h3>
            <p class="text-neutral-600 mb-6">
              Expert implementation of accessibility fixes and improvements to ensure your website meets compliance standards.
            </p>
            <ul class="text-sm text-neutral-600 space-y-2 mb-6">
              <li class="flex items-start">
                <span class="text-accent-600 mr-2">✓</span>
                Code remediation and optimization
              </li>
              <li class="flex items-start">
                <span class="text-accent-600 mr-2">✓</span>
                ARIA implementation
              </li>
              <li class="flex items-start">
                <span class="text-accent-600 mr-2">✓</span>
                Focus management improvements
              </li>
              <li class="flex items-start">
                <span class="text-accent-600 mr-2">✓</span>
                Alternative text optimization
              </li>
            </ul>
            <a href="#contact-form" class="text-accent-600 font-medium hover:text-accent-700 flex items-center" @click="trackCTAClick('Get Remediation', 'Services - Remediation')">
              Get Remediation
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary-900 mb-4">Ongoing Compliance</h3>
            <p class="text-neutral-600 mb-6">
              Continuous monitoring and support to ensure your website maintains accessibility compliance as you add new content and features.
            </p>
            <ul class="text-sm text-neutral-600 space-y-2 mb-6">
              <li class="flex items-start">
                <span class="text-accent-600 mr-2">✓</span>
                Monthly accessibility monitoring
              </li>
              <li class="flex items-start">
                <span class="text-accent-600 mr-2">✓</span>
                Team training and guidelines
              </li>
              <li class="flex items-start">
                <span class="text-accent-600 mr-2">✓</span>
                Content review processes
              </li>
              <li class="flex items-start">
                <span class="text-accent-600 mr-2">✓</span>
                Compliance reporting
              </li>
            </ul>
            <a href="#contact-form" class="text-accent-600 font-medium hover:text-accent-700 flex items-center" @click="trackCTAClick('Learn More', 'Services - Ongoing Compliance')">
              Learn More
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="text-center">
          <a href="#contact-form" class="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center" @click="trackCTAClick('Discuss Your Needs', 'Services Section')">
            Discuss Your Needs
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Call-to-Action Before Contact Form -->
    <section class="py-16 bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600">
      <div class="container-site px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Website Accessible?
          </h2>
          <p class="text-xl text-primary-100 mb-8 leading-relaxed">
            Don't wait for a lawsuit or compliance issue. Get started with a comprehensive accessibility audit today and protect your business while expanding your reach.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact-form" class="bg-white text-primary-700 hover:bg-neutral-100 font-semibold text-lg px-8 py-4 rounded-xl inline-flex items-center justify-center shadow-lg transition-all duration-200" @click="trackCTAClick('Get Your Free Audit Quote', 'Pre-Contact CTA')">
              Get Your Free Audit Quote
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <ContactForm :services="accessibilityServices" />
  </div>
</template>

<script setup>
import { ref, onMounted, inject, computed } from 'vue';
import { useRoute } from 'vue-router';

// Use landing page layout
definePageMeta({
  layout: 'landing-page'
});

// Analytics injection
const analytics = inject('analytics', null);
const gtag = inject('gtag', null);

// Get current route for URL parameter tracking
const route = useRoute();

// Tracking data
const trackingData = ref({
  utmSource: '',
  utmMedium: '',
  utmCampaign: '',
  utmTerm: '',
  utmContent: '',
  referrer: '',
  landingPage: '/accessibility',
  sessionId: '',
  timestamp: ''
});

// Generate session ID
const generateSessionId = () => {
  return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
};

// Track UTM parameters and referrer
const trackPageVisit = () => {
  // Capture URL parameters
  trackingData.value.utmSource = route.query.utm_source || '';
  trackingData.value.utmMedium = route.query.utm_medium || '';
  trackingData.value.utmCampaign = route.query.utm_campaign || '';
  trackingData.value.utmTerm = route.query.utm_term || '';
  trackingData.value.utmContent = route.query.utm_content || '';
  trackingData.value.referrer = document.referrer || 'direct';
  trackingData.value.sessionId = generateSessionId();
  trackingData.value.timestamp = new Date().toISOString();

  // Store in session storage for form submission tracking
  sessionStorage.setItem('accessibilityLandingData', JSON.stringify(trackingData.value));

  // Determine traffic source
  let trafficSource = 'direct';
  if (trackingData.value.utmSource) {
    trafficSource = trackingData.value.utmSource;
  } else if (trackingData.value.referrer && trackingData.value.referrer !== 'direct') {
    if (trackingData.value.referrer.includes('google.com')) trafficSource = 'organic_google';
    else if (trackingData.value.referrer.includes('facebook.com')) trafficSource = 'social_facebook';
    else if (trackingData.value.referrer.includes('linkedin.com')) trafficSource = 'social_linkedin';
    else if (trackingData.value.referrer.includes('twitter.com') || trackingData.value.referrer.includes('t.co')) trafficSource = 'social_twitter';
    else trafficSource = 'referral';
  }

  // Track page view with enhanced data
  if (analytics) {
    analytics.pageView('/accessibility');
    analytics.trackEvent('Landing Page', 'view', 'Accessibility Landing Page');
    analytics.trackEvent('Traffic Source', 'landing', trafficSource);
    
    // Track UTM parameters if present
    if (trackingData.value.utmCampaign) {
      analytics.trackEvent('Campaign', 'landing', trackingData.value.utmCampaign);
    }
  }

  // Enhanced Google Analytics 4 tracking
  if (gtag) {
    gtag('event', 'page_view', {
      page_title: 'Web Accessibility Services Landing Page',
      page_location: window.location.href,
      page_referrer: trackingData.value.referrer,
      campaign_source: trackingData.value.utmSource,
      campaign_medium: trackingData.value.utmMedium,
      campaign_name: trackingData.value.utmCampaign,
      campaign_term: trackingData.value.utmTerm,
      campaign_content: trackingData.value.utmContent,
      traffic_source: trafficSource,
      landing_page: 'accessibility',
      session_id: trackingData.value.sessionId
    });

    // Track as a custom event for better segmentation
    gtag('event', 'accessibility_landing_view', {
      event_category: 'Landing Page',
      event_label: 'Accessibility Services',
      traffic_source: trafficSource,
      utm_source: trackingData.value.utmSource || 'none',
      utm_medium: trackingData.value.utmMedium || 'none',
      utm_campaign: trackingData.value.utmCampaign || 'none'
    });
  }
};

// Track CTA clicks with source information
const trackCTAClick = (ctaName, ctaLocation) => {
  const landingData = JSON.parse(sessionStorage.getItem('accessibilityLandingData') || '{}');
  
  if (analytics) {
    analytics.trackEvent('CTA Click', ctaName, `${ctaLocation} - Accessibility Landing`);
  }

  if (gtag) {
    gtag('event', 'accessibility_cta_click', {
      event_category: 'Engagement',
      event_label: ctaName,
      cta_location: ctaLocation,
      landing_page: 'accessibility',
      utm_source: landingData.utmSource || 'none',
      utm_medium: landingData.utmMedium || 'none',
      utm_campaign: landingData.utmCampaign || 'none',
      traffic_source: landingData.referrer || 'direct',
      session_id: landingData.sessionId || 'unknown'
    });
  }
};

// Track section scroll events
const trackSectionView = (sectionName) => {
  if (analytics) {
    analytics.trackEngagement('Landing Page', 'accessibility', `viewed_${sectionName}`, 1);
  }

  if (gtag) {
    gtag('event', 'accessibility_section_view', {
      event_category: 'Engagement',
      event_label: sectionName,
      landing_page: 'accessibility'
    });
  }
};

// Initialize tracking on mount
onMounted(() => {
  trackPageVisit();
  
  // Set up intersection observer for section tracking
  const observerOptions = {
    threshold: 0.5, // Trigger when 50% of element is visible
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        if (sectionId) {
          trackSectionView(sectionId);
        }
      }
    });
  }, observerOptions);

  // Observe key sections
  const sections = document.querySelectorAll('#laws, #services, #benefits, #contact-form');
  sections.forEach(section => observer.observe(section));
});

// SEO with dynamic content based on traffic source
const dynamicTitle = computed(() => {
  const baseTitle = 'Web Accessibility Services | WCAG Compliance | Canadian & US Laws';
  if (route.query.utm_campaign) {
    return `${baseTitle} | ${route.query.utm_campaign}`;
  }
  return baseTitle;
});

useHead({
  title: dynamicTitle,
  meta: [
    {
      name: 'description',
      content: 'Professional web accessibility services ensuring WCAG 2.1 AA compliance. Expert auditing, remediation, and ongoing support to meet Canadian ACA and US ADA requirements. Protect your business and expand your reach.'
    },
    {
      name: 'keywords',
      content: 'web accessibility, WCAG compliance, ADA compliance, Accessible Canada Act, accessibility audit, accessibility remediation, inclusive design, disability access'
    },
    {
      property: 'og:title',
      content: 'Web Accessibility Services | WCAG Compliance | Canadian & US Laws'
    },
    {
      property: 'og:description',
      content: 'Make your website accessible to everyone. Professional WCAG 2.1 AA compliance services meeting Canadian and US accessibility laws.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
});

// Services for the contact form dropdown
const accessibilityServices = [
  'Accessibility Audit',
  'Accessibility Remediation', 
  'WCAG 2.1 AA Compliance',
  'ADA Compliance Consultation',
  'Ongoing Accessibility Monitoring',
  'Accessibility Training',
  'Other Accessibility Services'
];

// Expose tracking function for template use
defineExpose({
  trackCTAClick
});
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>