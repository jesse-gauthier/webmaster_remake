<template>
  <CalendlyEmbed
    v-if="showCalendly"
    calendlyLink="https://calendly.com/your-link"
    :showBadgeWidget="false"
  />
  <div>
    <!-- Hero Section -->
    <section class="bg-primary-600 text-white py-20 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden opacity-10">
        <div
          class="absolute -right-20 -top-20 w-96 h-96 bg-accent rounded-full"
        ></div>
        <div
          class="absolute -left-32 top-1/2 w-80 h-80 bg-white rounded-full"
        ></div>
        <div
          class="absolute right-20 -bottom-20 w-64 h-64 bg-primary-300 rounded-full"
        ></div>
      </div>

      <div class="container-site relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1
            class="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in"
          >
            Turn Your Business Vision into Reality with Zero Dev-Team Overhead
          </h1>
          <p
            class="text-xl md:text-2xl mb-8 text-primary-100 animate-fade-in"
            style="animation-delay: 0.1s"
          >
            Join our Startup Partnership Program: Premium Web Application
            Development with Aligned Interests
          </p>
          <div
            class="flex flex-wrap justify-center gap-4 animate-fade-in"
            style="animation-delay: 0.2s"
          >
            <a
              href="#startupForm"
              class="btn-primary bg-white text-primary-600 hover:bg-neutral-100 btn-lg"
            >
              Start Your Tech Partnership → $1,500 to Begin
            </a>
            <a
              href="#cost-comparison"
              class="btn-outline border-white text-white hover:bg-primary-500 hover:border-primary-500 btn-lg"
            >
              Calculate Your Development Savings
            </a>
          </div>
        </div>
      </div>

      <!-- Sticky Floating CTA Bar (appears on scroll) -->
      <div
        class="fixed bottom-0 left-0 right-0 bg-accent-600 py-3 z-50 transform translate-y-full opacity-0 transition-all duration-300"
        id="sticky-cta"
      >
        <div class="container-site">
          <div class="flex justify-center">
            <a
              href="/contact#contact-form"
              class="btn-primary bg-white text-accent-600 hover:bg-neutral-100 shadow-lg"
            >
              Book Your Free Strategy Call (24hr Response Guaranteed)
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Value Proposition -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container-site">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
            Custom SaaS Development with a True Partnership Model
          </h2>
          <p class="text-lg text-neutral-text">
            Transform your business idea into reality with our Startup
            Partnership Program. We build custom web-based SaaS applications for
            ambitious entrepreneurs at a fraction of the traditional cost. For
            just $1,500 admin fee and a 5-8% equity stake (5-8 years), you get
            more than just development – you gain a committed technical partner
            invested in your long-term success. Our skin in the game means we're
            dedicated to helping your business grow.
          </p>
        </div>

        <!-- Proven Track Record Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="bg-primary-50 p-8 rounded-lg text-center">
            <div class="text-5xl font-bold text-primary mb-4">12+</div>
            <div class="text-lg text-neutral-text">
              Years of Industry Expertise
            </div>
          </div>
          <div class="bg-primary-50 p-8 rounded-lg text-center">
            <div class="text-5xl font-bold text-primary mb-4">400%</div>
            <div class="text-lg text-neutral-text">
              Year-over-Year Client Growth
            </div>
          </div>
          <div class="bg-primary-50 p-8 rounded-lg text-center">
            <div class="text-5xl font-bold text-primary mb-4">98%</div>
            <div class="text-lg text-neutral-text">
              Client Satisfaction Rate
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div
            class="p-8 rounded-lg text-center bg-white shadow-lg border border-neutral-100"
          >
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon
                icon="mdi:currency-usd"
                class="text-primary-600 text-2xl"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">
              Minimal Upfront Investment
            </h3>
            <ul class="text-left space-y-2">
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Only $1,500 admin fee</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>No massive development costs</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Preserve your capital for growth</span>
              </li>
            </ul>
          </div>

          <div
            class="p-8 rounded-lg text-center bg-white shadow-lg border border-neutral-100"
          >
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon
                icon="mdi:handshake"
                class="text-primary-600 text-2xl"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">
              True Partnership Model
            </h3>
            <ul class="text-left space-y-2">
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>5-8% equity stake</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>5-8 years commitment</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Aligned success interests</span>
              </li>
            </ul>
          </div>

          <div
            class="p-8 rounded-lg text-center bg-white shadow-lg border border-neutral-100"
          >
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon
                icon="mdi:code-tags"
                class="text-primary-600 text-2xl"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">
              Full-Service Development
            </h3>
            <ul class="text-left space-y-2">
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Custom SaaS application</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Ongoing maintenance</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Technical partnership</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="text-center">
          <a href="#cost-comparison" class="btn-accent">
            Save $48,500+ on Development Costs
            <Icon
              icon="mdi:arrow-right"
              class="ml-2"
              width="18"
              height="18"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>

    <!-- Development Process -->
    <section class="py-16 md:py-24 bg-neutral-50">
      <div class="container-site">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Streamlined Development Process
          </h2>
          <p class="text-lg text-neutral-text">
            We follow a proven methodology to transform your vision into a
            successful, market-ready application with a clear focus on business
            value and user experience.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div class="bg-white p-8 rounded-lg shadow-sm relative">
            <div
              class="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md"
            >
              1
            </div>
            <div class="pt-5 text-center">
              <h3 class="text-xl font-semibold text-primary mb-3">
                Discovery Phase
              </h3>
              <ul class="text-left space-y-2">
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>In-depth business analysis</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Market opportunity assessment</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Feature prioritization</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Technical requirements gathering</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm relative">
            <div
              class="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md"
            >
              2
            </div>
            <div class="pt-5 text-center">
              <h3 class="text-xl font-semibold text-primary mb-3">
                Planning & Design
              </h3>
              <ul class="text-left space-y-2">
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>UX/UI design</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Wireframing</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Prototyping</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Mobile-responsive layouts</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm relative">
            <div
              class="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md"
            >
              3
            </div>
            <div class="pt-5 text-center">
              <h3 class="text-xl font-semibold text-primary mb-3">
                Development
              </h3>
              <ul class="text-left space-y-2">
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Custom application build</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Regular progress updates</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Quality assurance testing</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Cross-browser compatibility</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm relative">
            <div
              class="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md"
            >
              4
            </div>
            <div class="pt-5 text-center">
              <h3 class="text-xl font-semibold text-primary mb-3">
                Launch & Support
              </h3>
              <ul class="text-left space-y-2">
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Market deployment</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>24/7 technical support</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Continuous optimization</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-accent mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Performance monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Expertise -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container-site">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
            Enterprise-Grade Development Stack
          </h2>
          <p class="text-lg text-neutral-text">
            We leverage modern, scalable technologies to build applications that
            are secure, performant, and future-proof. Our technical expertise
            spans across the entire development lifecycle.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="bg-primary-50 p-8 rounded-lg">
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                icon="mdi:shield-outline"
                class="text-primary-600 text-2xl"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-xl font-semibold text-primary mb-4 text-center">
              Security & Performance
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>End-to-end encryption</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>OWASP compliance</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Serverless architecture</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>CDN integration</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Advanced caching strategies</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Penetration testing</span>
              </li>
            </ul>
          </div>

          <div class="bg-primary-50 p-8 rounded-lg">
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                icon="mdi:source-branch"
                class="text-primary-600 text-2xl"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-xl font-semibold text-primary mb-4 text-center">
              Development Standards
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Mobile-first approach</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Clean, scalable code</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Comprehensive testing</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Version control</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>CI/CD implementation</span>
              </li>
            </ul>
          </div>

          <div class="bg-primary-50 p-8 rounded-lg">
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                icon="mdi:checklist"
                class="text-primary-600 text-2xl"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-xl font-semibold text-primary mb-4 text-center">
              Quality Assurance
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Cross-browser testing</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Load testing</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Security scanning</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Accessibility compliance</span>
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-2"
                  width="18"
                  height="18"
                  aria-hidden="true"
                />
                <span>Performance benchmarking</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="text-center">
          <a href="/contact" target="_blank" class="btn-primary">
            Get Your Free Technical Assessment
          </a>
        </div>
      </div>
    </section>

    <!-- Investment Comparison -->
    <section
      id="cost-comparison"
      class="py-16 md:py-24 bg-accent-600 text-white"
    >
      <div class="container-site">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Smart Investment, Maximum Value
          </h2>
          <p class="text-lg text-accent-100">
            Compare the traditional approaches to development with our
            partnership model and see why entrepreneurs choose us.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden text-neutral-800"
          >
            <div class="bg-neutral-100 p-6">
              <h3 class="text-xl font-bold text-primary text-center">
                Traditional Agency
              </h3>
            </div>
            <div class="p-6">
              <div class="text-3xl font-bold text-center text-primary mb-4">
                $50,000-$150,000
              </div>
              <p class="text-center text-neutral-text mb-6">
                Upfront investment
              </p>

              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <Icon
                    icon="mdi:close"
                    class="text-error mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>No ongoing commitment</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:close"
                    class="text-error mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Additional costs for maintenance</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:close"
                    class="text-error mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Pay regardless of success</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden text-neutral-800"
          >
            <div class="bg-neutral-100 p-6">
              <h3 class="text-xl font-bold text-primary text-center">
                In-House Development
              </h3>
            </div>
            <div class="p-6">
              <div class="text-3xl font-bold text-center text-primary mb-4">
                $80,000-$120,000
              </div>
              <p class="text-center text-neutral-text mb-6">
                Per year, per developer
              </p>

              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <Icon
                    icon="mdi:close"
                    class="text-error mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Benefits & overhead costs</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:close"
                    class="text-error mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Management complexity</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:close"
                    class="text-error mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Infrastructure costs</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden text-neutral-800 transform scale-105 z-10 border-2 border-accent"
          >
            <div class="bg-accent p-6">
              <h3 class="text-xl font-bold text-white text-center">
                Our Partnership Program
              </h3>
            </div>
            <div class="p-6">
              <div class="text-3xl font-bold text-center text-accent mb-4">
                $1,500
              </div>
              <p class="text-center text-neutral-text mb-6">
                + 5-8% equity stake
              </p>

              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-success mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Full technical partnership</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-success mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Aligned success interests</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-success mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>Ongoing maintenance included</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check"
                    class="text-success mt-1 mr-2"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span>No hidden costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center">
          <a
            href="#breakdown"
            class="btn-lg bg-white text-accent-600 hover:bg-neutral-100"
          >
            See Detailed Cost Breakdown
          </a>
        </div>
      </div>
    </section>

    <!-- Comprehensive Services -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container-site">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
            Comprehensive Services
          </h2>
          <p class="text-lg text-neutral-text">
            Our partnership includes everything you need to transform your idea
            into a successful business.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div
            class="p-6 rounded-lg border border-neutral-100 hover:shadow-lg transition-shadow"
          >
            <Icon
              icon="mdi:laptop"
              class="text-accent text-3xl mb-4"
              width="40"
              height="40"
              aria-hidden="true"
            />
            <h3 class="text-lg font-semibold mb-2">
              Custom Web Application Development
            </h3>
            <p class="text-neutral-text text-sm">
              Tailored SaaS solutions designed specifically for your business
              needs and goals.
            </p>
          </div>

          <div
            class="p-6 rounded-lg border border-neutral-100 hover:shadow-lg transition-shadow"
          >
            <Icon
              icon="mdi:wordpress"
              class="text-accent text-3xl mb-4"
              width="40"
              height="40"
              aria-hidden="true"
            />
            <h3 class="text-lg font-semibold mb-2">
              WordPress & Shopify Solutions
            </h3>
            <p class="text-neutral-text text-sm">
              Custom themes, plugins, and e-commerce solutions built on trusted
              platforms.
            </p>
          </div>

          <div
            class="p-6 rounded-lg border border-neutral-100 hover:shadow-lg transition-shadow"
          >
            <Icon
              icon="mdi:brush"
              class="text-accent text-3xl mb-4"
              width="40"
              height="40"
              aria-hidden="true"
            />
            <h3 class="text-lg font-semibold mb-2">UX/UI Design</h3>
            <p class="text-neutral-text text-sm">
              Intuitive user experiences with beautiful, conversion-focused
              interface designs.
            </p>
          </div>

          <div
            class="p-6 rounded-lg border border-neutral-100 hover:shadow-lg transition-shadow"
          >
            <Icon
              icon="mdi:cart"
              class="text-accent text-3xl mb-4"
              width="40"
              height="40"
              aria-hidden="true"
            />
            <h3 class="text-lg font-semibold mb-2">E-commerce Integration</h3>
            <p class="text-neutral-text text-sm">
              Seamless payment processing, inventory management, and shopping
              experiences.
            </p>
          </div>

          <div
            class="p-6 rounded-lg border border-neutral-100 hover:shadow-lg transition-shadow"
          >
            <Icon
              icon="mdi:magnify"
              class="text-accent text-3xl mb-4"
              width="40"
              height="40"
              aria-hidden="true"
            />
            <h3 class="text-lg font-semibold mb-2">SEO Optimization</h3>
            <p class="text-neutral-text text-sm">
              Technical SEO and content optimization to improve visibility and
              drive organic traffic.
            </p>
          </div>

          <div
            class="p-6 rounded-lg border border-neutral-100 hover:shadow-lg transition-shadow"
          >
            <Icon
              icon="mdi:tools"
              class="text-accent text-3xl mb-4"
              width="40"
              height="40"
              aria-hidden="true"
            />
            <h3 class="text-lg font-semibold mb-2">Monthly Maintenance</h3>
            <p class="text-neutral-text text-sm">
              Ongoing updates, security patches, and performance optimization
              for your application.
            </p>
          </div>

          <div
            class="p-6 rounded-lg border border-neutral-100 hover:shadow-lg transition-shadow"
          >
            <Icon
              icon="mdi:comment-processing-outline"
              class="text-accent text-3xl mb-4"
              width="40"
              height="40"
              aria-hidden="true"
            />
            <h3 class="text-lg font-semibold mb-2">Technical Consultations</h3>
            <p class="text-neutral-text text-sm">
              Expert guidance on technology decisions, strategies, and growth
              opportunities.
            </p>
          </div>

          <div
            class="p-6 rounded-lg border border-neutral-100 hover:shadow-lg transition-shadow"
          >
            <Icon
              icon="mdi:cellphone"
              class="text-accent text-3xl mb-4"
              width="40"
              height="40"
              aria-hidden="true"
            />
            <h3 class="text-lg font-semibold mb-2">Mobile-Responsive Design</h3>
            <p class="text-neutral-text text-sm">
              Applications that work seamlessly across all devices and screen
              sizes.
            </p>
          </div>
        </div>

        <div class="text-center">
          <a href="#journey" class="btn-primary">
            Start Your SaaS Journey for $1,500
          </a>
          <a href="#options" class="btn-outline ml-4">
            Compare Partnership Options
          </a>
        </div>
      </div>
    </section>

    <!-- FAQs -->
    <section class="py-16 md:py-24 bg-neutral-50">
      <div class="container-site">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p class="text-lg text-neutral-text">
            Get answers to common questions about our Startup Partnership
            Program
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-primary mb-3">
                How does the equity partnership work?
              </h3>
              <p class="text-neutral-text">
                Our partnership model is simple: you pay a small upfront fee of
                $1,500, and we take a 5-8% equity stake in your business for 5-8
                years (determined by your project's complexity). This aligns our
                incentives with your success - we only win when you win. After
                the term, the equity reverts back to you, giving you full
                ownership of both your business and technology.
              </p>
            </div>
          </div>

          <div class="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-primary mb-3">
                What's included in the development scope?
              </h3>
              <p class="text-neutral-text">
                Our development scope includes everything you need to bring your
                application to market: business analysis, UX/UI design, frontend
                and backend development, testing, deployment, and ongoing
                maintenance. We start with a core MVP (Minimum Viable Product)
                that you can take to market, then iteratively improve based on
                user feedback and business needs.
              </p>
            </div>
          </div>

          <div class="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-primary mb-3">
                How long does development typically take?
              </h3>
              <p class="text-neutral-text">
                Development timelines vary depending on the complexity of your
                project, but most MVPs are ready for market within 3-6 months.
                We work in agile sprints, delivering incremental value and
                maintaining open communication throughout the process. This
                approach allows us to adapt to changing requirements and get
                your product to market as quickly as possible.
              </p>
            </div>
          </div>

          <div class="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-primary mb-3">
                What happens after launch?
              </h3>
              <p class="text-neutral-text">
                After launch, our partnership continues. We provide ongoing
                maintenance, security updates, and technical support as part of
                our agreement. We also help with feature enhancements, scaling,
                and technical strategy as your business grows. Unlike
                traditional agencies that hand off the project and move on, we
                remain active partners committed to your long-term success.
              </p>
            </div>
          </div>

          <div class="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-primary mb-3">
                Can I buy out the equity stake later?
              </h3>
              <p class="text-neutral-text">
                Yes, our agreements include buyout options that allow you to
                purchase back the equity at a predetermined valuation multiple
                if you choose to. This gives you flexibility as your business
                grows and attracts investment. We're happy to discuss these
                terms during our initial consultations to find an arrangement
                that works for your business goals.
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link to="/contact#contact-form" class="btn-primary">
            Get Your Free Consultation & Project Roadmap
          </router-link>
          <a href="#guide" class="btn-outline ml-4">
            Download Our Partnership Guide
          </a>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section id="contact" class="py-16 md:py-24 bg-primary-600 text-white">
      <div class="container-site">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Idea into a Profitable SaaS Business?
          </h2>
          <p class="text-xl text-primary-100 mb-8">
            Lock in 5% equity rate - limited time offer. Only 3 partnership
            spots left this month.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link
              to="/contact#contact-form"
              class="btn-lg bg-white text-primary-600 hover:bg-neutral-100"
            >
              Schedule Your Free Consultation
            </router-link>
            <a
              href="#seo-checklist"
              class="btn-lg border-2 border-white text-white hover:bg-primary-500"
            >
              Download Our Free SEO Checklist
            </a>
          </div>

          <!-- Trust Badges -->
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16">
            <div class="p-4 bg-primary-500 rounded-lg">
              <div class="font-bold text-xl mb-1">12+</div>
              <div class="text-sm">Years Industry Experience</div>
            </div>
            <div class="p-4 bg-primary-500 rounded-lg">
              <div class="font-bold text-xl mb-1">98%</div>
              <div class="text-sm">Client Satisfaction Rate</div>
            </div>
            <div class="p-4 bg-primary-500 rounded-lg">
              <div class="font-bold text-xl mb-1">400%</div>
              <div class="text-sm">Client Growth Achievement</div>
            </div>
            <div class="p-4 bg-primary-500 rounded-lg">
              <div class="font-bold text-xl mb-1">24/7</div>
              <div class="text-sm">Support Guarantee</div>
            </div>
            <div class="p-4 bg-primary-500 rounded-lg">
              <div class="font-bold text-xl mb-1">100+</div>
              <div class="text-sm">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-8 bg-white">
      <div class="container-site">
        <div class="text-center">
          <p class="text-lg font-semibold text-primary">Get in Touch:</p>
          <p class="text-neutral-text">
            Email:
            <a
              href="mailto:Contact@ottawawebmasters.ca"
              class="text-accent hover:underline"
              >Contact@ottawawebmasters.ca</a
            >
            | Visit:
            <a
              href="https://www.ottawawebmasters.ca"
              class="text-accent hover:underline"
              >www.ottawawebmasters.ca</a
            >
            | 24/7 Support Available
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';
import CalendlyEmbed from './CalendlyEmbed.vue';

const showCalendly = ref(false);

const openCalendly = () => {
  showCalendly.value = true;
};

// Logic to show sticky CTA on scroll
onMounted(() => {
  const handleScroll = () => {
    const stickyCta = document.getElementById('sticky-cta');
    if (stickyCta) {
      // Show sticky CTA after scrolling down 500px
      if (window.scrollY > 500) {
        stickyCta.classList.add('opacity-100');
        stickyCta.classList.remove('opacity-0', 'translate-y-full');
      } else {
        stickyCta.classList.remove('opacity-100');
        stickyCta.classList.add('opacity-0', 'translate-y-full');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<style scoped>
/* Animations */
.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #4292ac;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2e5944;
}
</style>
