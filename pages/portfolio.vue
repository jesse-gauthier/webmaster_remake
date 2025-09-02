<template>
  <div>
    <!-- Hero Section -->
    <section
      aria-labelledby="portfolio-hero-title"
      class="bg-primary-light py-16 md:py-24"
    >
      <div class="container-site px-4 sm:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h1
            id="portfolio-hero-title"
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
          >
            Our Portfolio
          </h1>
          <p class="text-lg text-neutral-text mb-8">
            Explore our collection of successful projects. Each one represents
            our commitment to quality, creativity, and delivering results that
            exceed client expectations.
          </p>
        </div>
      </div>
    </section>

    <!-- Portfolio Gallery -->
    <section aria-labelledby="portfolio-gallery-title" class="py-16 md:py-24">
      <div class="container-site px-4 sm:px-6">
        <!-- Category Filter -->
        <div class="mb-12">
          <div class="flex flex-wrap justify-center gap-3 mb-8">
            <button
              @click="activeCategory = 'all'"
              class="px-5 py-2 rounded-full text-sm font-medium transition-colors"
              :class="
                activeCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-neutral-100 text-neutral-text hover:bg-neutral-200'
              "
              aria-pressed="activeCategory === 'all'"
            >
              All Projects
            </button>
            <button
              v-for="category in uniqueCategories"
              :key="category"
              @click="activeCategory = category"
              class="px-5 py-2 rounded-full text-sm font-medium transition-colors capitalize"
              :class="
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-neutral-100 text-neutral-text hover:bg-neutral-200'
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
            class="portfolio-card group bg-white rounded-lg shadow-card overflow-hidden transition-all duration-300 hover:shadow-lg"
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
                  class="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full capitalize"
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

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-xs bg-primary-light text-primary-dark px-2 py-1 rounded"
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

    <!-- Call to Action -->
    <section
      aria-labelledby="portfolio-cta-title"
      class="bg-accent py-16 md:py-24"
    >
      <div class="container-site px-4 sm:px-6">
        <div class="text-center max-w-3xl mx-auto">
          <h2
            id="portfolio-cta-title"
            class="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Start Your Project?
          </h2>
          <p class="text-lg text-white opacity-90 mb-8">
            Let's create something amazing together. Contact us to discuss your
            ideas and how we can bring them to life.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link
              to="/contact"
              class="btn-lg bg-white text-accent hover:bg-neutral-cream rounded-md"
            >
              Get in Touch
            </router-link>
            <router-link
              to="/case-studies"
              class="btn-lg border-2 border-white text-white hover:bg-accent-500 rounded-md"
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
/* Optional: Add a hover effect for the portfolio cards */
.portfolio-card:hover {
  transform: translateY(-5px);
}

/* Ensure images maintain aspect ratio and don't stretch */
.portfolio-card img {
  transition: transform 0.5s ease;
}

/* Utility class for text truncation */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
