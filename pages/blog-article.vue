<template>
  <!-- Loading state -->
  <div v-if="isLoading" class="min-h-screen bg-gradient-to-br from-white via-neutral-cream to-primary-50">
    <div class="py-20 text-center">
      <div class="animate-pulse">
        <!-- Hero loading skeleton -->
        <div class="h-32 bg-gradient-to-br from-primary-600 to-primary-900 mb-8"></div>
        <div class="container-site px-4 sm:px-6">
          <div class="h-12 bg-primary-200 max-w-2xl mx-auto mb-6 rounded-2xl"></div>
          <div class="h-6 bg-primary-100 max-w-md mx-auto mb-8 rounded-full"></div>
          <div class="h-80 bg-primary-100 max-w-4xl mx-auto mb-8 rounded-2xl"></div>
          <div class="space-y-4 max-w-4xl mx-auto">
            <div class="h-6 bg-primary-100 w-full rounded"></div>
            <div class="h-6 bg-primary-100 w-3/4 rounded"></div>
            <div class="h-6 bg-primary-100 w-full rounded"></div>
            <div class="h-6 bg-primary-100 w-2/3 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Article not found -->
  <div v-else-if="!article" class="min-h-screen bg-gradient-to-br from-white via-neutral-cream to-primary-50 flex items-center justify-center">
    <div class="text-center max-w-md mx-auto px-4">
      <div class="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.007-5.824-2.562M15 6.306A7.962 7.962 0 0112 5c-2.34 0-4.29 1.007-5.824 2.562"></path>
        </svg>
      </div>
      <h2 class="text-4xl font-bold text-primary mb-4">Article Not Found</h2>
      <p class="text-lg text-neutral-600 mb-8">
        Sorry, we couldn't find the article you're looking for. It may have been moved or doesn't exist.
      </p>
      <router-link to="/blog" class="btn-primary btn-lg">← Back to Blog</router-link>
    </div>
  </div>

  <!-- Article content -->
  <div v-else class="bg-gradient-to-br from-white via-neutral-cream to-primary-50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden opacity-5">
      <div class="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full animate-bounce-light"></div>
      <div class="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-12 md:py-16 overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div class="absolute -right-40 -top-40 w-96 h-96 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute -left-20 top-1/2 w-80 h-80 bg-accent-light rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="max-w-4xl mx-auto">
          <!-- Back to blog link -->
          <div class="mb-8">
            <router-link to="/blog" class="inline-flex items-center gap-2 text-primary-100 hover:text-white transition-colors duration-200" @click="trackBackToBlog">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to all articles
            </router-link>
          </div>

          <!-- Article header -->
          <header class="text-center">
            <div class="flex items-center justify-center gap-4 mb-6">
              <span class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium">
                <span class="text-lg">📖</span>
                {{ article.category }}
              </span>
              <span class="text-primary-200">•</span>
              <span class="text-primary-200">{{ formatDate(article.date) }}</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {{ article.title }}
            </h1>
            
            <div class="flex items-center justify-center gap-3 mb-8">
              <div class="w-12 h-12 rounded-full bg-accent bg-opacity-20 flex items-center justify-center text-accent-light text-lg font-bold">
                {{ article.author.charAt(0) }}
              </div>
              <div class="text-left">
                <p class="text-white font-semibold">{{ article.author }}</p>
                <p class="text-primary-200 text-sm">Article Author</p>
              </div>
            </div>
          </header>
        </div>
      </div>

      <!-- Wave divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#FFFFFF" preserveAspectRatio="none" class="w-full h-20">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>

    <article ref="articleContent" class="container-site section-padding relative z-10">

        <!-- Featured image or placeholder -->
        <div class="mb-12">
          <div
            v-if="article.featuredImage"
            class="rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500"
          >
            <img
              :src="article.featuredImage"
              :alt="article.title"
              class="w-full max-h-96 object-cover"
            />
          </div>
          <div
            v-else
            class="w-full h-64 md:h-80 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center transform hover:scale-105 transition-transform duration-500"
            :style="getPlaceholderStyle(article.category)"
          >
            <div class="text-center">
              <div
                class="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-white"
                >
                  <path
                    d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                  ></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <line x1="10" y1="9" x2="8" y2="9"></line>
                </svg>
              </div>
              <h3 class="text-white font-bold text-xl px-6">{{ article.category }} Article</h3>
            </div>
          </div>
        </div>

        <!-- Article content -->
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-neutral-100">
          <div
            class="prose prose-lg prose-primary max-w-none"
            v-html="article.content"
          ></div>
        </div>

        <!-- Tags -->
        <div class="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-neutral-100">
          <div class="text-center mb-6">
            <span class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              🏷️ Topics & Tags
            </span>
            <h4 class="text-2xl font-bold text-primary">Article Topics</h4>
          </div>
          <div class="flex flex-wrap gap-3 justify-center">
            <span
              v-for="tag in article.tags"
              :key="tag"
              class="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              #{{ tag }}
            </span>
          </div>
        </div>

        <!-- Related articles -->
        <div v-if="relatedArticles.length > 0" class="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-100">
          <div class="text-center mb-12">
            <span class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              📚 Continue Reading
            </span>
            <h3 class="text-3xl md:text-4xl font-bold text-primary mb-4">You Might Also Like</h3>
            <p class="text-lg text-neutral-text max-w-2xl mx-auto">
              Discover more insights and guides related to this topic
            </p>
          </div>
          
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="relatedArticle in relatedArticles"
              :key="relatedArticle.id"
              class="group bg-neutral-50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100"
            >
              <!-- Mini featured image or placeholder -->
              <div class="h-32 relative overflow-hidden">
                <img
                  v-if="relatedArticle.featuredImage"
                  :src="relatedArticle.featuredImage"
                  :alt="relatedArticle.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  v-else
                  class="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                  :style="getPlaceholderStyle(relatedArticle.category)"
                >
                  <span class="inline-flex items-center gap-2 bg-white bg-opacity-20 text-white px-3 py-2 rounded-full text-sm font-medium">
                    <span class="text-base">📖</span>
                    {{ relatedArticle.category }}
                  </span>
                </div>
                
                <!-- Overlay on hover -->
                <div class="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              <div class="p-6">
                <h4 class="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  <router-link
                    :to="`/blog/${relatedArticle.slug}`"
                    @click="trackRelatedArticleClick(relatedArticle)"
                  >
                    {{ relatedArticle.title }}
                  </router-link>
                </h4>
                <p class="text-neutral-600 text-sm mb-4">
                  {{ formatDate(relatedArticle.date) }}
                </p>
                <router-link
                  :to="`/blog/${relatedArticle.slug}`"
                  class="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold transition-colors duration-200"
                  @click="trackRelatedArticleClick(relatedArticle)"
                >
                  Read Article
                  <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, inject } from "vue";
import blogData from "~/data/blogs.json";
import { getGradientForCategory } from "~/utils/gradientUtils";
import { useRouteSeo } from "~/composables/useRouteSeo";

// Apply SEO from route meta
useRouteSeo();

const route = useRoute();
const slug = computed(() => route.params.slug);
const article = ref(null);
const isLoading = ref(true);
const articleContent = ref(null);

// Get analytics service
const analytics = inject("analytics");

// Track page view when article loads
const trackArticleView = () => {
  if (article.value) {
    analytics.pageView(`/blog/${article.value.slug}`);
    analytics.trackEvent(
      "Blog",
      "article_view",
      article.value.title,
      article.value.id
    );

    // Track additional article data
    analytics.trackEvent("Content", "category_view", article.value.category);

    // Track tags as separate events for better analytics segmentation
    if (article.value.tags && article.value.tags.length) {
      article.value.tags.forEach((tag) => {
        analytics.trackEvent("Content", "tag_view", tag);
      });
    }
  }
};

// Track related article clicks
const trackRelatedArticleClick = (relatedArticle) => {
  analytics.trackEvent(
    "Blog",
    "related_article_click",
    relatedArticle.title,
    relatedArticle.id
  );
};

// Track back to blog button click
const trackBackToBlog = () => {
  analytics.trackEvent("Navigation", "click", "back_to_blog_button");
};

// Scroll depth tracking
let scrollObserver = null;
const setupScrollDepthTracking = () => {
  if (!articleContent.value) return;

  // Create markers for tracking scroll depth
  const article = articleContent.value;
  const articleHeight = article.scrollHeight;

  // Create intersection observer for tracking scroll depth at 25%, 50%, 75%, and 100%
  const scrollMarkers = [0.25, 0.5, 0.75, 1];
  const trackedDepths = new Set();

  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const percentageScrolled = Math.round(
            (entry.intersectionRect.bottom / articleHeight) * 100
          );

          // Track at specific thresholds
          for (const marker of scrollMarkers) {
            const threshold = marker * 100;
            if (
              percentageScrolled >= threshold &&
              !trackedDepths.has(threshold)
            ) {
              trackedDepths.add(threshold);
              analytics.trackEvent("Content", "scroll_depth", `${threshold}%`);
            }
          }
        }
      });
    },
    {
      threshold: scrollMarkers,
    }
  );

  scrollObserver.observe(article);
};

// Load article data based on the slug
const loadArticle = () => {
  isLoading.value = true;

  setTimeout(() => {
    article.value = blogData.find((blog) => blog.slug === slug.value) || null;
    isLoading.value = false;

    // Scroll to top when article loads
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Track the article view for analytics
    trackArticleView();

    // Set up scroll depth tracking after article loads
    setTimeout(() => {
      setupScrollDepthTracking();
    }, 500);
  }, 300);
};

// Watch for route changes to reload article data
watch(slug, () => {
  loadArticle();
});

onMounted(() => {
  loadArticle();
});

onUnmounted(() => {
  // Clean up observer when component is destroyed
  if (scrollObserver) {
    scrollObserver.disconnect();
  }
});

// Computed properties
const relatedArticles = computed(() => {
  if (!article.value) return [];

  // Find articles in the same category, excluding the current one
  return blogData
    .filter(
      (blog) =>
        blog.id !== article.value.id &&
        (blog.category === article.value.category ||
          blog.tags.some((tag) => article.value.tags.includes(tag)))
    )
    .slice(0, 3);
});

// Helper functions
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

// Use the utility function for consistent gradients
const getPlaceholderStyle = (category) => {
  return getGradientForCategory(category);
};
</script>

<style>
/* Enhanced styles for blog content */
.prose-primary {
  color: var(--neutral-text);
  line-height: 1.8;
}

.prose-primary h2 {
  color: var(--primary);
  font-size: 2rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-100);
}

.prose-primary h3 {
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.prose-primary h4 {
  color: var(--primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.prose-primary p {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  text-align: justify;
}

.prose-primary ul, .prose-primary ol {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.prose-primary ul {
  list-style-type: disc;
}

.prose-primary ol {
  list-style-type: decimal;
}

.prose-primary li {
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
}

.prose-primary blockquote {
  border-left: 4px solid var(--accent);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  background: var(--primary-50);
  padding: 1.5rem;
  border-radius: 0.5rem;
  color: var(--primary-700);
}

.prose-primary a {
  color: var(--accent);
  text-decoration: underline;
  font-weight: 500;
}

.prose-primary a:hover {
  color: var(--accent-dark);
}

.prose-primary strong {
  color: var(--primary);
  font-weight: 600;
}

.prose-primary code {
  background: var(--primary-50);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.9em;
  color: var(--primary-700);
}

.prose-primary pre {
  background: var(--primary-900);
  color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin: 2rem 0;
  overflow-x: auto;
}

.prose-primary pre code {
  background: transparent;
  padding: 0;
  color: inherit;
}

.prose-primary img {
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
}
</style>
