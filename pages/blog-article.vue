<template>
  <div class="container-site section-padding">
    <!-- Loading state -->
    <div v-if="isLoading" class="py-16 text-center">
      <div class="animate-pulse">
        <div class="h-8 bg-primary-100 max-w-2xl mx-auto mb-4 rounded"></div>
        <div class="h-4 bg-primary-50 max-w-md mx-auto mb-8 rounded"></div>
        <div class="h-64 bg-primary-50 max-w-4xl mx-auto mb-8 rounded"></div>
        <div class="h-4 bg-primary-50 max-w-4xl mx-auto mb-2 rounded"></div>
        <div class="h-4 bg-primary-50 max-w-3xl mx-auto mb-2 rounded"></div>
        <div class="h-4 bg-primary-50 max-w-4xl mx-auto mb-2 rounded"></div>
      </div>
    </div>

    <!-- Article not found -->
    <div v-else-if="!article" class="py-16 text-center">
      <h2 class="mb-4">Article Not Found</h2>
      <p class="text-neutral-600 mb-6">
        Sorry, we couldn't find the article you're looking for.
      </p>
      <router-link to="/blog" class="btn-primary">Back to Blog</router-link>
    </div>

    <!-- Article content -->
    <article v-else ref="articleContent">
      <!-- Back to blog link -->
      <div class="mb-8">
        <router-link to="/blog" class="btn-text" @click="trackBackToBlog">
          ← Back to all articles
        </router-link>
      </div>

      <!-- Article header -->
      <header class="mb-8">
        <div class="flex items-center gap-2 mb-4">
          <span class="badge badge-accent">{{ article.category }}</span>
          <span class="text-sm text-neutral-600">{{
            formatDate(article.date)
          }}</span>
        </div>
        <h1 class="mb-4">{{ article.title }}</h1>
        <div class="flex items-center mb-6">
          <div
            class="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white mr-3"
          >
            {{ article.author.charAt(0) }}
          </div>
          <div>
            <p class="font-medium">{{ article.author }}</p>
          </div>
        </div>
      </header>

      <!-- Featured image or placeholder -->
      <div class="mb-8">
        <div
          v-if="article.featuredImage"
          class="rounded-lg shadow-md overflow-hidden"
        >
          <img
            :src="article.featuredImage"
            :alt="article.title"
            class="w-full max-h-96 object-cover"
          />
        </div>
        <div
          v-else
          class="w-full h-48 md:h-64 rounded-lg shadow-md overflow-hidden flex items-center justify-center"
          :style="getPlaceholderStyle(article.category)"
        >
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-3 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
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
            <h3 class="text-white font-medium px-6">{{ article.category }}</h3>
          </div>
        </div>
      </div>

      <!-- Article content -->
      <div
        class="prose prose-lg max-w-none mb-12"
        v-html="article.content"
      ></div>

      <!-- Tags -->
      <div class="mb-8">
        <h4 class="mb-3">Topics:</h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="bg-neutral-50 px-3 py-1 rounded-full text-sm text-neutral-700"
          >
            #{{ tag }}
          </span>
        </div>
      </div>

      <!-- Related articles -->
      <div
        v-if="relatedArticles.length > 0"
        class="border-t border-neutral-100 pt-8 mt-8"
      >
        <h3 class="mb-6">You might also like</h3>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="relatedArticle in relatedArticles"
            :key="relatedArticle.id"
            class="card card-hover overflow-hidden"
          >
            <!-- Mini featured image or placeholder -->
            <div class="h-24 relative">
              <img
                v-if="relatedArticle.featuredImage"
                :src="relatedArticle.featuredImage"
                :alt="relatedArticle.title"
                class="w-full h-full object-cover"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center"
                :style="getPlaceholderStyle(relatedArticle.category)"
              >
                <span
                  class="badge badge-light text-white bg-white bg-opacity-20"
                >
                  {{ relatedArticle.category }}
                </span>
              </div>
            </div>

            <div class="card-body">
              <h4 class="mb-2">
                <router-link
                  :to="`/blog/${relatedArticle.slug}`"
                  class="text-primary hover:text-primary-dark"
                  @click="trackRelatedArticleClick(relatedArticle)"
                >
                  {{ relatedArticle.title }}
                </router-link>
              </h4>
              <p class="text-sm text-neutral-600">
                {{ formatDate(relatedArticle.date) }}
              </p>
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
/* Additional styles for blog content */
.prose h2 {
  color: var(--primary);
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.prose h3 {
  color: var(--primary);
  margin-top: 1.25rem;
  margin-bottom: 0.75rem;
}

.prose ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.prose p {
  margin-bottom: 1rem;
}
</style>
