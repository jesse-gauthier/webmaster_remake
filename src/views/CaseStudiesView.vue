<template>
  <div>
    <!-- Hero Section -->
    <section
      aria-labelledby="case-studies-hero-title"
      class="bg-primary-light py-16 md:py-24"
    >
      <div class="container-site px-4 sm:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h1
            id="case-studies-hero-title"
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
          >
            Case Studies
          </h1>
          <p class="text-lg text-neutral-text mb-8">
            Deep dive into our most successful projects. Explore the challenges,
            solutions, and results we delivered for our clients across various
            industries.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="bg-white py-8">
      <div class="container-site px-4 sm:px-6">
        <div class="flex flex-wrap justify-center gap-3">
          <button
            @click="activeFilter = 'all'"
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
            :class="
              activeFilter === 'all'
                ? 'bg-primary text-white'
                : 'bg-neutral-100 text-neutral-text hover:bg-neutral-200'
            "
            aria-label="Show all case studies"
          >
            All Projects
          </button>
          <button
            v-for="category in categories"
            :key="category"
            @click="activeFilter = category"
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize"
            :class="
              activeFilter === category
                ? 'bg-primary text-white'
                : 'bg-neutral-100 text-neutral-text hover:bg-neutral-200'
            "
            :aria-label="`Show ${category} case studies`"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Case Studies List -->
    <section class="py-16 bg-white">
      <div class="container-site px-4 sm:px-6">
        <div class="grid grid-cols-1 gap-16">
          <!-- Case Study Item (repeated for each study) -->
          <div
            v-for="study in filteredCaseStudies"
            :key="study.id"
            class="case-study-item"
            :id="study.id"
            :data-category="study.category"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <!-- Image Column (alternating layout) -->
              <div
                :class="[
                  'case-study-image',
                  study.id % 2 === 0 ? 'lg:order-2' : 'lg:order-1',
                ]"
              >
                <div class="relative">
                  <div
                    :style="`background-image: url(${study.images.featured}); background-position: center; background-size: contain; background-repeat: no-repeat;`"
                    class="rounded-lg shadow-lg w-full h-64 md:h-80"
                    :aria-label="`${study.title} project screenshot`"
                  ></div>
                  <div class="absolute top-4 right-4">
                    <span
                      class="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full capitalize"
                    >
                      {{ study.category }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Content Column -->
              <div
                :class="[
                  'case-study-content',
                  study.id % 2 === 0 ? 'lg:order-1' : 'lg:order-2',
                ]"
              >
                <h2 class="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {{ study.title }}
                </h2>

                <p class="text-lg text-neutral-text mb-6">
                  {{ study.summary }}
                </p>

                <!-- Challenge Box -->
                <div class="bg-neutral-50 p-6 rounded-lg mb-6">
                  <h3 class="text-xl font-semibold text-primary mb-2">
                    The Challenge
                  </h3>
                  <p class="text-neutral-text">{{ study.challenge }}</p>
                </div>

                <!-- Solution Box -->
                <div class="bg-neutral-50 p-6 rounded-lg mb-6">
                  <h3 class="text-xl font-semibold text-primary mb-2">
                    Our Solution
                  </h3>
                  <p class="text-neutral-text mb-4">{{ study.solution }}</p>

                  <!-- Technologies Used -->
                  <div class="flex flex-wrap gap-2 mt-4">
                    <div
                      v-for="tech in study.technologies"
                      :key="tech"
                      class="px-3 py-1 bg-white text-primary-dark text-sm rounded-full shadow-sm"
                    >
                      {{ tech }}
                    </div>
                  </div>
                </div>

                <!-- Results Box -->
                <div class="bg-accent-light p-6 rounded-lg">
                  <h3 class="text-xl font-semibold text-primary mb-2">
                    Results
                  </h3>
                  <ul class="space-y-2">
                    <li
                      v-for="(result, idx) in study.results"
                      :key="idx"
                      class="flex items-start"
                    >
                      <i class="fas fa-chart-line text-accent mt-1 mr-3"></i>
                      <span class="text-neutral-text">{{ result }}</span>
                    </li>
                  </ul>
                </div>

                <!-- CTA Button -->
                <div class="mt-8">
                  <a
                    :href="study.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-outline"
                    :aria-label="`Visit ${study.title} website`"
                  >
                    View Live Project
                    <i class="fas fa-external-link-alt ml-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Client Testimonial -->
            <div class="mt-12 bg-primary-light p-8 rounded-lg">
              <blockquote class="relative z-10">
                <div
                  class="absolute top-0 left-0 text-primary opacity-10 text-6xl"
                >
                  <i class="fas fa-quote-left"></i>
                </div>
                <p class="text-lg text-primary-dark mb-4 relative z-10 italic">
                  {{ study.testimonial.quote }}
                </p>
                <footer class="flex items-center">
                  <div
                    class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mr-4"
                  >
                    {{ study.testimonial.author.charAt(0) }}
                  </div>
                  <div>
                    <p class="font-semibold text-primary-dark">
                      {{ study.testimonial.author }}
                    </p>
                    <p class="text-sm text-neutral-text">
                      {{ study.testimonial.position }},
                      {{ study.testimonial.company }}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>

            <!-- Project Gallery (if applicable) -->
            <div
              v-if="study.images.gallery && study.images.gallery.length > 0"
              class="mt-16"
            >
              <h3 class="text-xl font-semibold text-primary mb-6">
                Project Gallery
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  v-for="(image, idx) in study.images.gallery"
                  :key="idx"
                  class="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    :src="image.src"
                    :alt="image.alt"
                    class="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <!-- Divider -->
            <div
              v-if="study.id !== caseStudies.length"
              class="mt-16 border-t border-neutral-200"
            ></div>
          </div>

          <!-- No results message -->
          <div
            v-if="filteredCaseStudies.length === 0"
            class="text-center py-12"
          >
            <p class="text-lg text-neutral-text">
              No case studies found in this category. Please try another filter.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      aria-labelledby="case-studies-cta-title"
      class="bg-accent py-16 md:py-24"
    >
      <div class="container-site px-4 sm:px-6">
        <div class="text-center max-w-3xl mx-auto">
          <h2
            id="case-studies-cta-title"
            class="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Create Your Success Story?
          </h2>
          <p class="text-lg text-white opacity-90 mb-8">
            Let's collaborate to transform your vision into a successful digital
            solution. Contact us today to get started on your project.
          </p>
          <router-link
            to="/contact"
            class="btn-lg bg-white text-accent hover:bg-neutral-cream rounded-md"
          >
            Start Your Project
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// Active filter for case studies
const activeFilter = ref("all");

// Categories
const categories = [
  "web design",
  "web application",
  "e-commerce",
  "blog management",
];

// Case studies data
const caseStudies = [
  {
    id: 1,
    title: "The County Cooperage",
    category: "e-commerce",
    summary:
      "An artisanal wine barrel manufacturer needed an e-commerce solution that showcased their craftsmanship while enabling direct sales to wineries and enthusiasts.",
    challenge:
      "The County Cooperage needed a premium e-commerce platform that could handle custom barrel orders with various specifications, showcase their craftsmanship, and educate customers about their traditional wine barrel manufacturing process. They also needed a way to manage inventory across their retail and wholesale channels.",
    solution:
      "We developed a custom e-commerce solution with advanced product configuration options, allowing customers to specify wood types, toasting levels, and sizes. We integrated a blog with educational content about cooperage and wine barrel aging. The website features high-quality photography and videography showcasing the manufacturing process.",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Stripe",
      "Shopify API",
      "Responsive Design",
    ],
    results: [
      "43% increase in online sales in the first quarter after launch",
      "68% reduction in customer service inquiries due to improved product information",
      "Average session duration increased from 1:45 to 4:20 minutes",
      "Wholesale order value increased by 22%",
    ],
    testimonial: {
      quote:
        "The website perfectly captures the traditional craftsmanship that goes into our barrels while providing a modern shopping experience. Our customers can now easily configure exactly what they need, and our sales have increased significantly since launch.",
      author: "Michael Thompson",
      position: "Owner",
      company: "The County Cooperage",
    },
    images: {
      featured: "/src/assets/countycooperage.svg",
      gallery: [
        { src: "/images/hero-image.jpg", alt: "County Cooperage product page" },
        {
          src: "/images/hero-image.jpg",
          alt: "Custom barrel configuration tool",
        },
        { src: "/images/hero-image.jpg", alt: "County Cooperage mobile view" },
      ],
    },
    link: "https://www.thecountycooperage.ca",
  },
  {
    id: 2,
    title: "GottaGo Ottawa",
    category: "blog management",
    summary:
      "A nonprofit organization working to improve access to public washrooms for homeless individuals through partnerships with local businesses.",
    challenge:
      "GottaGo Ottawa needed a platform to raise awareness about the lack of public washroom facilities, coordinate volunteer efforts, process donations, and maintain an up-to-date database of participating businesses offering their facilities to those in need. Their existing website was outdated and difficult to maintain.",
    solution:
      "We created a WordPress website with custom post types for participating businesses, enabling automatic generation of an interactive map showing available facilities. We implemented a donation system integrated with Stripe and PayPal, a volunteer sign-up portal, and a blog to share news and advocacy efforts. The mobile-first design ensures users can find facilities while on the move.",
    technologies: [
      "WordPress",
      "Custom Theme",
      "Google Maps API",
      "Donation Integration",
      "Responsive Design",
    ],
    results: [
      "Volunteer sign-ups increased by 156% in the first three months",
      "Monthly donations increased by 78% compared to the previous platform",
      "Mobile usage of the bathroom locator increased by 340%",
      "35 new businesses joined the program after the website launch",
    ],
    testimonial: {
      quote:
        "The new website has completely transformed our ability to serve the community. The interactive map makes it easy for people to find bathrooms when they need them, and the streamlined donation system has significantly increased our funding for advocacy work.",
      author: "Sarah Jenkins",
      position: "Executive Director",
      company: "GottaGo Ottawa",
    },
    images: {
      featured: "/src/assets/gottago.svg",
      gallery: [
        {
          src: "/images/hero-image.jpg",
          alt: "GottaGo Ottawa interactive map",
        },
        { src: "/images/hero-image.jpg", alt: "GottaGo donation page" },
        {
          src: "/images/hero-image.jpg",
          alt: "GottaGo mobile bathroom finder",
        },
      ],
    },
    link: "https://new.gottago-ottawa.ca/",
  },
  {
    id: 3,
    title: "UpMedia Video Production",
    category: "web design",
    summary:
      "A professional video production company needed a portfolio website that would showcase their work and attract high-value corporate clients.",
    challenge:
      "UpMedia needed a website that could effectively display their video portfolio with minimal load times while conveying their premium positioning. They required an easy-to-update system for adding new projects and testimonials, as well as integrating their booking system for production consultations.",
    solution:
      "We designed a visually striking WordPress website with optimized video embedding from multiple sources (Vimeo, YouTube) that maintains fast loading times. The portfolio system allows for categorization by industry and project type, with detailed case studies for each production. We implemented a custom booking system integrated with their Google Calendar for scheduling consultations.",
    technologies: [
      "WordPress",
      "Custom Theme",
      "Video Optimization",
      "Calendly Integration",
      "Lazy Loading",
    ],
    results: [
      "Page load time decreased by 65% despite featuring more video content",
      "Consultation bookings increased by 42% in the first month",
      "Average project value increased by 28% due to improved portfolio presentation",
      "Organic search traffic increased by 83% within three months",
    ],
    testimonial: {
      quote:
        "Our new website perfectly reflects the quality of our video work. The portfolio layout makes it easy for potential clients to see relevant examples, and the consultation booking system has dramatically increased our qualified leads. The site looks amazing on all devices too.",
      author: "Jason Reynolds",
      position: "Creative Director",
      company: "UpMedia Productions",
    },
    images: {
      featured: "/src/assets/upmedia.svg",
      gallery: [
        { src: "/images/hero-image.jpg", alt: "UpMedia portfolio page" },
        { src: "/images/hero-image.jpg", alt: "UpMedia video showcase" },
        { src: "/images/hero-image.jpg", alt: "UpMedia booking system" },
      ],
    },
    link: "https://www.upmedia.video/",
  },
  {
    id: 4,
    title: "Luma CRM",
    category: "web application",
    summary:
      "A custom CRM application designed for sales teams to efficiently manage leads and customer interactions with an intuitive, mobile-first interface.",
    challenge:
      "Traditional CRM systems were too complex and inflexible for smaller sales teams, resulting in low adoption rates and inconsistent use. Luma needed a streamlined, intuitive CRM that sales representatives would actually use in the field, with powerful automation and analytics capabilities.",
    solution:
      "We developed a custom Vue.js-based CRM application with a mobile-first approach. The system features a visual pipeline management interface, automated follow-up reminders, email integration, and comprehensive reporting. The interface was designed with extensive user testing to ensure it matched the actual workflow of sales representatives.",
    technologies: [
      "Vue.js",
      "Node.js",
      "MongoDB",
      "REST API",
      "PWA",
      "Real-time Notifications",
    ],
    results: [
      "92% user adoption rate compared to 46% with their previous CRM",
      "Average deal closing time reduced by 23 days",
      "Sales team productivity increased by 34%",
      "Mobile usage accounting for 76% of all system interactions",
    ],
    testimonial: {
      quote:
        "Luma CRM has revolutionized how our sales team works. The mobile interface is so intuitive that our reps actually enjoy using it in the field. The visual pipeline and automated reminders ensure nothing falls through the cracks, and our closing rate has improved dramatically as a result.",
      author: "David Chen",
      position: "Sales Director",
      company: "TechVision Solutions",
    },
    images: {
      featured: "/src/assets/lumacrm.svg",
      gallery: [
        { src: "/images/hero-image.jpg", alt: "Luma CRM dashboard" },
        { src: "/images/hero-image.jpg", alt: "Luma CRM mobile interface" },
        { src: "/images/hero-image.jpg", alt: "Luma CRM sales pipeline view" },
      ],
    },
    link: "https://lumacrm.ca",
  },
];

// Filter case studies based on active filter
const filteredCaseStudies = computed(() => {
  if (activeFilter.value === "all") {
    return caseStudies;
  } else {
    return caseStudies.filter((study) => study.category === activeFilter.value);
  }
});

// SEO metadata update on component mount
onMounted(() => {
  // Update page title and meta description
  document.title = "Case Studies | Web Development Success Stories | WebMaster";

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      "Explore our web development case studies showcasing successful projects across e-commerce, custom applications, WordPress sites, and more. See real results from our work."
    );
  }

  // Add structured data for better SEO
  const script = document.createElement("script");
  script.setAttribute("type", "application/ld+json");
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: caseStudies.map((study, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        name: study.title,
        url: `${window.location.origin}/case-studies#${study.id}`,
        description: study.summary,
      },
    })),
  });
  document.head.appendChild(script);
});
</script>

<style scoped>
/* Animation for case study items */
.case-study-item {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.case-study-item:hover {
  transform: translateY(-5px);
}

/* Add scroll behavior for anchor links */
html {
  scroll-behavior: smooth;
}

/* Ensure proper image aspect ratios */
img {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
</style>
