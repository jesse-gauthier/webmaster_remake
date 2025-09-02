<template>
  <div>
    <!-- Hero Section -->
    <section
      aria-labelledby="tech-stack-hero-title"
      class="bg-primary-light py-16 md:py-24"
    >
      <div class="container-site px-4 sm:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h1
            id="tech-stack-hero-title"
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
          >
            Our Technology Stack
          </h1>
          <p class="text-lg text-neutral-text mb-8">
            We leverage cutting-edge technologies and proven platforms to build
            robust, scalable, and high-performing digital solutions that drive
            real business results.
          </p>
        </div>
      </div>
    </section>

    <!-- Framework Categories -->
    <section aria-labelledby="frameworks-title" class="py-16 bg-white">
      <div class="container-site px-4 sm:px-6">
        <h2
          id="frameworks-title"
          class="text-2xl md:text-3xl font-bold text-primary mb-12 text-center"
        >
          Web Development Technologies
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Frontend Technologies -->
          <div
            class="bg-neutral-50 rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            data-aos="fade-up"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4"
              >
                <Icon
                  icon="mdi:code-braces"
                  class="text-primary text-xl"
                  width="22"
                  height="22"
                  aria-hidden="true"
                />
              </div>
              <h3 class="text-xl font-semibold text-primary">Frontend</h3>
            </div>

            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <Icon
                    icon="mdi:vuejs"
                    class="text-accent text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-medium text-primary-dark">Vue.js</span>
                  <p class="text-sm text-neutral-text mt-1">
                    Our primary JavaScript framework for building interactive
                    user interfaces with a component-based architecture.
                  </p>
                </div>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <Icon
                    icon="mdi:react"
                    class="text-blue-500 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-medium text-primary-dark">React</span>
                  <p class="text-sm text-neutral-text mt-1">
                    Component-based UI library for building complex, interactive
                    web applications with a virtual DOM for optimal performance.
                  </p>
                </div>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <Icon
                    icon="mdi:language-javascript"
                    class="text-yellow-500 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-medium text-primary-dark"
                    >JavaScript / TypeScript</span
                  >
                  <p class="text-sm text-neutral-text mt-1">
                    Core scripting languages for creating dynamic content and
                    functionality on the web.
                  </p>
                </div>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <Icon
                    icon="mdi:language-css3"
                    class="text-blue-600 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-medium text-primary-dark"
                    >Tailwind CSS / SCSS</span
                  >
                  <p class="text-sm text-neutral-text mt-1">
                    Modern CSS frameworks for creating custom, responsive
                    designs with utility-first approach.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Backend Technologies -->
          <div
            class="bg-neutral-50 rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4"
              >
                <Icon
                  icon="mdi:server"
                  class="text-primary text-xl"
                  width="22"
                  height="22"
                  aria-hidden="true"
                />
              </div>
              <h3 class="text-xl font-semibold text-primary">Backend</h3>
            </div>

            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <Icon
                    icon="mdi:nodejs"
                    class="text-green-600 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-medium text-primary-dark">Node.js</span>
                  <p class="text-sm text-neutral-text mt-1">
                    JavaScript runtime for building fast, scalable server-side
                    and networking applications.
                  </p>
                </div>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <Icon
                    icon="mdi:language-php"
                    class="text-purple-600 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-medium text-primary-dark">PHP</span>
                  <p class="text-sm text-neutral-text mt-1">
                    Server-side scripting language designed for web development
                    and powering major platforms like WordPress.
                  </p>
                </div>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <Icon
                    icon="mdi:database"
                    class="text-blue-500 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-medium text-primary-dark"
                    >MySQL / MongoDB</span
                  >
                  <p class="text-sm text-neutral-text mt-1">
                    Relational and NoSQL database systems for storing,
                    organizing, and retrieving data efficiently.
                  </p>
                </div>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <Icon
                    icon="mdi:graphql"
                    class="text-gray-600 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-medium text-primary-dark"
                    >REST / GraphQL APIs</span
                  >
                  <p class="text-sm text-neutral-text mt-1">
                    Modern API architectures for efficient client-server
                    communication and data exchange.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <!-- DevOps & Infrastructure -->
          <div
            class="bg-neutral-50 rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4"
              >
                <Icon
                  icon="mdi:cloud-outline"
                  class="text-primary text-xl"
                  width="22"
                  height="22"
                  aria-hidden="true"
                />
              </div>
              <h3 class="text-xl font-semibold text-primary">Infrastructure</h3>
            </div>

            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <Icon
                    icon="mdi:aws"
                    class="text-orange-500 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-medium text-primary-dark"
                    >AWS / Digital Ocean</span
                  >
                  <p class="text-sm text-neutral-text mt-1">
                    Cloud platforms for deploying and hosting applications with
                    scalability and reliability.
                  </p>
                </div>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <Icon
                    icon="mdi:docker"
                    class="text-blue-500 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-medium text-primary-dark"
                    >Docker / Kubernetes</span
                  >
                  <p class="text-sm text-neutral-text mt-1">
                    Containerization for consistent development, deployment, and
                    scaling of applications.
                  </p>
                </div>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <Icon
                    icon="mdi:lock"
                    class="text-gray-600 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-medium text-primary-dark"
                    >SSL / Security</span
                  >
                  <p class="text-sm text-neutral-text mt-1">
                    Implementation of security best practices to protect your
                    website and user data.
                  </p>
                </div>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <Icon
                    icon="mdi:speedometer"
                    class="text-green-600 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-medium text-primary-dark"
                    >Performance Optimization</span
                  >
                  <p class="text-sm text-neutral-text mt-1">
                    Techniques and tools to ensure fast load times and smooth
                    user experiences.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CMS Platforms Section -->
    <section aria-labelledby="cms-platforms-title" class="py-16 bg-neutral-50">
      <div class="container-site px-4 sm:px-6">
        <h2
          id="cms-platforms-title"
          class="text-2xl md:text-3xl font-bold text-primary mb-12 text-center"
        >
          Content Management Systems
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- WordPress -->
          <div
            class="bg-white rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            data-aos="fade-up"
          >
            <div class="flex flex-col items-center mb-6 text-center">
              <div class="w-20 h-20 mb-4">
                <Icon
                  icon="mdi:wordpress"
                  class="text-5xl text-[#21759b]"
                  width="60"
                  height="60"
                  aria-hidden="true"
                />
              </div>
              <h3 class="text-xl font-semibold text-primary">WordPress</h3>
            </div>

            <p class="text-neutral-text mb-6 text-center">
              The world's most popular CMS powering over 40% of all websites on
              the internet.
            </p>

            <ul class="space-y-3">
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >Custom theme development</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >Plugin customization and development</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >WooCommerce integration</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >Performance optimization</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >Security hardening</span
                >
              </li>
            </ul>

            <div class="mt-6 text-center">
              <router-link to="/wordpress" class="btn-outline">
                WordPress Services
              </router-link>
            </div>
          </div>

          <!-- Shopify -->
          <div
            class="bg-white rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="flex flex-col items-center mb-6 text-center">
              <div class="w-20 h-20 mb-4">
                <Icon
                  icon="mdi:shopify"
                  class="text-5xl text-[#7AB55C]"
                  width="60"
                  height="60"
                  aria-hidden="true"
                />
              </div>
              <h3 class="text-xl font-semibold text-primary">Shopify</h3>
            </div>

            <p class="text-neutral-text mb-6 text-center">
              Leading e-commerce platform for building online stores with
              powerful sales features.
            </p>

            <ul class="space-y-3">
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >Store setup and configuration</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >Custom theme development</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >App integration and development</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >Product migration and setup</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >Payment gateway integration</span
                >
              </li>
            </ul>

            <div class="mt-6 text-center">
              <router-link to="/shopify" class="btn-outline">
                Shopify Services
              </router-link>
            </div>
          </div>

          <!-- Custom Web Apps -->
          <div
            class="bg-white rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="flex flex-col items-center mb-6 text-center">
              <div class="w-20 h-20 mb-4">
                <Icon
                  icon="mdi:source-branch"
                  class="text-5xl text-primary"
                  width="60"
                  height="60"
                  aria-hidden="true"
                />
              </div>
              <h3 class="text-xl font-semibold text-primary">
                Custom Web Applications
              </h3>
            </div>

            <p class="text-neutral-text mb-6 text-center">
              Bespoke web applications built with modern frameworks to meet
              specific business needs.
            </p>

            <ul class="space-y-3">
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >SaaS application development</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >Customer portals and dashboards</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >E-commerce platforms</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >Content management systems</span
                >
              </li>
              <li class="flex items-start">
                <Icon
                  icon="mdi:check"
                  class="text-accent mt-1 mr-3"
                  width="16"
                  height="16"
                  aria-hidden="true"
                />
                <span class="text-sm text-neutral-text"
                  >API development and integration</span
                >
              </li>
            </ul>

            <div class="mt-6 text-center">
              <router-link to="/web-applications" class="btn-outline">
                Web Application Services
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Development Approach -->
    <section aria-labelledby="approach-title" class="py-16 bg-white">
      <div class="container-site px-4 sm:px-6">
        <h2
          id="approach-title"
          class="text-2xl md:text-3xl font-bold text-primary mb-12 text-center"
        >
          Our Development Methodology
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1" data-aos="fade-right">
            <div class="bg-neutral-50 p-6 rounded-lg mb-6">
              <h3 class="text-xl font-semibold text-primary mb-4">
                Modern Development Practices
              </h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check-circle"
                    class="text-accent mt-1 mr-3"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span class="text-neutral-text"
                    >Agile development methodology with regular client
                    feedback</span
                  >
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check-circle"
                    class="text-accent mt-1 mr-3"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span class="text-neutral-text"
                    >Responsive design for all devices and screen sizes</span
                  >
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check-circle"
                    class="text-accent mt-1 mr-3"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span class="text-neutral-text"
                    >Accessibility compliance (WCAG standards)</span
                  >
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check-circle"
                    class="text-accent mt-1 mr-3"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span class="text-neutral-text"
                    >SEO-friendly code and structure</span
                  >
                </li>
              </ul>
            </div>

            <div class="bg-neutral-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-primary mb-4">
                Quality Assurance
              </h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check-circle"
                    class="text-accent mt-1 mr-3"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span class="text-neutral-text"
                    >Comprehensive testing across browsers and devices</span
                  >
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check-circle"
                    class="text-accent mt-1 mr-3"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span class="text-neutral-text"
                    >Performance optimization for fast load times</span
                  >
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check-circle"
                    class="text-accent mt-1 mr-3"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span class="text-neutral-text"
                    >Security best practices implementation</span
                  >
                </li>
                <li class="flex items-start">
                  <Icon
                    icon="mdi:check-circle"
                    class="text-accent mt-1 mr-3"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  />
                  <span class="text-neutral-text"
                    >Code reviews and automated testing</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="order-1 md:order-2" data-aos="fade-left">
            <img
              src="/images/hero-image.jpg"
              alt="Our development team at work"
              class="rounded-lg shadow-lg"
              width="600"
              height="400"
            />
            <p class="text-sm text-neutral-text mt-4 italic">
              Our team follows industry-leading development practices to ensure
              high-quality, maintainable, and scalable code.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      aria-labelledby="tech-stack-cta-title"
      class="bg-accent py-16 md:py-24"
    >
      <div class="container-site px-4 sm:px-6">
        <div class="text-center max-w-3xl mx-auto">
          <h2
            id="tech-stack-cta-title"
            class="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Build Your Next Digital Project?
          </h2>
          <p class="text-lg text-white opacity-90 mb-8">
            Let's discuss how our technology expertise can help bring your
            vision to life. Book a free consultation to explore the
            possibilities.
          </p>
          <router-link
            to="/contact"
            class="btn-lg bg-white text-accent hover:bg-neutral-cream rounded-md"
          >
            Schedule a Consultation
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Icon } from '@iconify/vue';

// Add AOS animation on component mount
onMounted(() => {
  // Check if AOS is available (you would need to add AOS library to your project)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }
});
</script>

<style scoped>
/* Optional: Add custom styles specific to this page */
</style>
