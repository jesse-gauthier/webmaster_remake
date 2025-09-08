<template>
  <div>
    <!-- Enhanced Hero Section -->
    <section
      aria-labelledby="portfolio-hero-title"
      class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 md:py-32 overflow-hidden"
    >
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
        <div class="absolute top-1/2 right-20 w-2 h-2 bg-accent-200 rounded-full animate-bounce-light" style="animation-delay: 3.5s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge with Emoji -->
          <span class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span class="text-lg">🎨</span>
            Showcase of Excellence
          </span>
          
          <h1
            id="portfolio-hero-title"
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight"
          >
            Our Creative
            <span class="block text-accent-300 animate-slide-up" style="animation-delay: 0.1s">Portfolio</span>
          </h1>
          <p class="text-xl md:text-2xl text-primary-100 mb-8 animate-slide-up leading-relaxed max-w-3xl mx-auto" style="animation-delay: 0.2s">
            Explore our collection of successful projects. Each one represents our commitment to quality, creativity, and delivering results that exceed client expectations.
          </p>

          <!-- Enhanced portfolio stats -->
          <div class="flex flex-wrap justify-center items-center gap-8 pt-8 animate-slide-up" style="animation-delay: 0.3s">
            <div class="flex items-center gap-3">
              <div class="bg-accent bg-opacity-20 rounded-full p-2">
                <svg class="h-6 w-6 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">50+ Projects</div>
                <div class="text-xs text-primary-200">Successfully Delivered</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="bg-primary-300 bg-opacity-30 rounded-full p-2">
                <svg class="h-6 w-6 text-primary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Multiple Industries</div>
                <div class="text-xs text-primary-200">Diverse Expertise</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="bg-accent-600 bg-opacity-30 rounded-full p-2">
                <svg class="h-6 w-6 text-accent-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Award Winning</div>
                <div class="text-xs text-primary-200">Recognized Quality</div>
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

    <!-- Enhanced Portfolio Gallery -->
    <section aria-labelledby="portfolio-gallery-title" class="py-20 bg-gradient-to-br from-white via-neutral-cream to-primary-50 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div class="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span class="inline-block bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚀 Featured Work
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
            Project Gallery
          </h2>
          <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed mb-12">
            Filter by category to explore our diverse range of successful projects and see our expertise in action
          </p>
        </div>

        <!-- Enhanced Category Filter -->
        <div class="mb-16">
          <div class="flex flex-wrap justify-center gap-3 mb-8">
            <button
              @click="activeCategory = 'all'"
              class="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              :class="
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-xl'
                  : 'bg-white text-neutral-text hover:bg-neutral-50 border border-neutral-200 hover:border-primary/20'
              "
              aria-pressed="activeCategory === 'all'"
            >
              All Projects
            </button>
            <button
              v-for="category in uniqueCategories"
              :key="category"
              @click="activeCategory = category"
              class="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg capitalize"
              :class="
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-xl'
                  : 'bg-white text-neutral-text hover:bg-neutral-50 border border-neutral-200 hover:border-primary/20'
              "
              aria-pressed="activeCategory === category"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Portfolio Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="portfolio-card group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:scale-105 border border-neutral-100"
            data-aos="fade-up"
            :data-aos-delay="50 * (index % 3)"
          >
            <!-- Project Image Container with aspect ratio -->
            <div class="relative overflow-hidden aspect-[4/3]">
              <img
                :src="project.image"
                :alt="`${project.title} project thumbnail`"
                class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute top-4 right-4">
                <span
                  class="inline-block bg-gradient-to-r from-primary to-accent text-white text-xs px-4 py-2 rounded-full capitalize font-semibold shadow-lg"
                >
                  {{ project.category }}
                </span>
              </div>
            </div>

            <!-- Project Info -->
            <div class="p-6">
              <h3 class="text-xl font-semibold text-primary mb-2">
                {{ project.title }}
              </h3>
              <p class="text-neutral-text mb-4 line-clamp-3">
                {{ project.description }}
              </p>

              <!-- Enhanced Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-xs bg-gradient-to-r from-primary-50 to-accent-50 text-primary-dark px-3 py-2 rounded-full font-medium border border-primary-100"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results Message -->
        <div v-if="filteredProjects.length === 0" class="text-center py-12">
          <p class="text-lg text-neutral-text">
            No projects found in this category. Please try another filter.
          </p>
        </div>
      </div>
    </section>

    <!-- Enhanced Call to Action -->
    <section
      aria-labelledby="portfolio-cta-title"
      class="relative bg-gradient-to-br from-accent-600 via-accent-700 to-primary-800 py-20 md:py-32 overflow-hidden"
    >
      <!-- Background decorative elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div class="absolute -left-20 -top-20 w-80 h-80 bg-white rounded-full animate-bounce-light"></div>
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-300 rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <!-- Floating particles -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div class="absolute top-20 right-20 w-4 h-4 bg-white rounded-full animate-bounce-light" style="animation-delay: 0.5s"></div>
        <div class="absolute bottom-32 left-32 w-3 h-3 bg-primary-200 rounded-full animate-bounce-light" style="animation-delay: 2s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Badge -->
          <span class="inline-flex items-center gap-2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span class="text-lg">💡</span>
            Let's Work Together
          </span>

          <h2
            id="portfolio-cta-title"
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 animate-slide-up leading-tight"
          >
            Ready to Start Your
            <span class="block text-accent-200 animate-slide-up" style="animation-delay: 0.1s">Next Project?</span>
          </h2>
          <p class="text-xl md:text-2xl text-white opacity-90 mb-12 animate-slide-up leading-relaxed" style="animation-delay: 0.2s">
            Let's create something amazing together. Contact us to discuss your ideas and how we can bring them to life with our proven expertise.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up" style="animation-delay: 0.3s">
            <router-link
              to="/contact"
              class="btn-lg bg-white text-accent hover:bg-neutral-cream hover:text-accent-600 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              Get in Touch
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </router-link>
            <router-link
              to="/case-studies"
              class="btn-lg border-2 border-white text-white hover:bg-white hover:text-accent-600 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              View Case Studies
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useSeo } from '~/composables/useSeo';
import countyCooperageImage from '~/assets/countycooperage.svg';
import gottaGoImage from '~/assets/gottago.svg';
import upMediaImage from '~/assets/upmedia.svg';
import lumacrm from '~/assets/lumacrm.svg';

// SEO Setup
useSeo({
  title: 'Portfolio | Our Web Development & Design Projects',
  description:
    'Explore our portfolio of successful web development projects including custom websites, e-commerce solutions, and WordPress developments. See our expertise in action.',
  url: '/portfolio',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Ottawa Webmasters Portfolio',
    description:
      'Portfolio showcasing professional web development and design projects',
    creator: {
      '@type': 'Organization',
      name: 'Ottawa Webmasters',
    },
  },
});

// Active category for filtering
const activeCategory = ref('all');

// Portfolio items data
const portfolioItems = [
  {
    id: 'county-cooperage',
    title: 'The County Cooperage',
    category: 'web design',
    description:
      'A ecomerce website for a wine barrel manufacturer featuring product listings, custom orders, and a blog with industry news and tips.',
    image: countyCooperageImage,
    tags: ['Vue.js', 'Tailwind CSS', 'Responsive Design'],
    featured: true,
  },
  {
    id: 'gotta-go',
    title: 'GottaGo Ottawa',
    category: 'blog management',
    description:
      'A nonprofit that works with local businesses to provide public washrooms for the homeless. The website features a blog, donation system, and volunteer sign-ups.',
    image: gottaGoImage,
    tags: ['WordPress', 'Custom Theme', 'Event Integration'],
    featured: true,
  },

  {
    id: 'up-media',
    title: 'UpMedia Video Production',
    category: 'web design',
    description:
      'A video production company website with a portfolio of past projects, client testimonials, and a contact form for inquiries.',
    image: upMediaImage,
    tags: ['WordPress', 'Custom Theme', 'Portfolio Integration'],
    featured: true,
  },
  {
    id: 'LumaCrm',
    title: 'Luma CRM',
    category: 'Web Application',
    description:
      'LumaCRM is a modern, mobile-first customer relationship management system designed for sales teams to efficiently manage leads and customer interactions. Built with a focus on intuitive user experience, the platform features a streamlined pipeline visualization, robust communication tools, and comprehensive analytics.',
    image: lumacrm,
    tags: ['Web App', 'Vue', 'Custom App'],
    featured: true,
  },
];

// Extract unique categories for the filter buttons
const uniqueCategories = computed(() => {
  return [...new Set(portfolioItems.map(item => item.category))];
});

// Filter projects based on active category
const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return portfolioItems;
  } else {
    return portfolioItems.filter(
      project => project.category === activeCategory.value
    );
  }
});
</script>

<style scoped>
/* Utility class for text truncation */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
