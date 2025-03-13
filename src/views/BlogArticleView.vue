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
            <p class="text-neutral-600 mb-6">Sorry, we couldn't find the article you're looking for.</p>
            <router-link to="/blog" class="btn-primary">Back to Blog</router-link>
        </div>

        <!-- Article content -->
        <article v-else>
            <!-- Back to blog link -->
            <div class="mb-8">
                <router-link to="/blog" class="btn-text">
                    ← Back to all articles
                </router-link>
            </div>

            <!-- Article header -->
            <header class="mb-8">
                <div class="flex items-center gap-2 mb-4">
                    <span class="badge badge-accent">{{ article.category }}</span>
                    <span class="text-sm text-neutral-600">{{ formatDate(article.date) }}</span>
                </div>
                <h1 class="mb-4">{{ article.title }}</h1>
                <div class="flex items-center mb-6">
                    <div class="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white mr-3">
                        {{ article.author.charAt(0) }}
                    </div>
                    <div>
                        <p class="font-medium">{{ article.author }}</p>
                    </div>
                </div>
            </header>

            <!-- Featured image -->
            <div v-if="article.featuredImage" class="mb-8">
                <img :src="article.featuredImage" :alt="article.title"
                    class="w-full max-h-96 object-cover rounded-lg shadow-md">
            </div>

            <!-- Article content -->
            <div class="prose prose-lg max-w-none mb-12" v-html="article.content"></div>

            <!-- Tags -->
            <div class="mb-8">
                <h4 class="mb-3">Topics:</h4>
                <div class="flex flex-wrap gap-2">
                    <span v-for="tag in article.tags" :key="tag"
                        class="bg-neutral-50 px-3 py-1 rounded-full text-sm text-neutral-700">
                        #{{ tag }}
                    </span>
                </div>
            </div>

            <!-- Related articles -->
            <div v-if="relatedArticles.length > 0" class="border-t border-neutral-100 pt-8 mt-8">
                <h3 class="mb-6">You might also like</h3>
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div v-for="relatedArticle in relatedArticles" :key="relatedArticle.id" class="card card-hover">
                        <div class="card-body">
                            <h4 class="mb-2">
                                <router-link :to="`/blog/${relatedArticle.slug}`"
                                    class="text-primary hover:text-primary-dark">
                                    {{ relatedArticle.title }}
                                </router-link>
                            </h4>
                            <p class="text-sm text-neutral-600">{{ formatDate(relatedArticle.date) }} • {{
                                relatedArticle.category }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import blogData from '@/data/blogs.json';

const route = useRoute();
const slug = computed(() => route.params.slug);
const article = ref(null);
const isLoading = ref(true);

// Load article data based on the slug
const loadArticle = () => {
    isLoading.value = true;

    setTimeout(() => {
        article.value = blogData.find(blog => blog.slug === slug.value) || null;
        isLoading.value = false;

        // Scroll to top when article loads
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Track page view for analytics
        if (article.value && typeof window.trackEvent === 'function') {
            window.trackEvent('blog_article_view', {
                article_id: article.value.id,
                article_title: article.value.title,
                article_category: article.value.category
            });
        }
    }, 300);
};

// Watch for route changes to reload article data
watch(slug, () => {
    loadArticle();
});

onMounted(() => {
    loadArticle();
});

// Computed properties
const relatedArticles = computed(() => {
    if (!article.value) return [];

    // Find articles in the same category, excluding the current one
    return blogData
        .filter(blog =>
            blog.id !== article.value.id &&
            (
                blog.category === article.value.category ||
                blog.tags.some(tag => article.value.tags.includes(tag))
            )
        )
        .slice(0, 3);
});

// Helper functions
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
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