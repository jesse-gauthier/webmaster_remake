<template>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-16 md:py-20 overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden opacity-20">
            <div class="absolute -right-40 -top-40 w-96 h-96 bg-accent rounded-full animate-bounce-light"></div>
            <div class="absolute -left-20 top-1/2 w-80 h-80 bg-accent-light rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
        </div>

        <!-- Floating particles -->
        <div class="absolute inset-0 overflow-hidden opacity-30">
            <div class="absolute top-20 left-20 w-4 h-4 bg-accent-300 rounded-full animate-bounce-light" style="animation-delay: 0.5s"></div>
            <div class="absolute top-32 right-32 w-3 h-3 bg-primary-300 rounded-full animate-bounce-light" style="animation-delay: 1.5s"></div>
            <div class="absolute bottom-20 right-40 w-2 h-2 bg-accent-200 rounded-full animate-bounce-light" style="animation-delay: 2s"></div>
        </div>

        <div class="container-site px-4 sm:px-6 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <!-- Badge -->
                <span class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                    <span class="text-lg">📚</span>
                    Knowledge Hub
                </span>

                <!-- Main Headline -->
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight">
                    Our Blog
                    <span class="block text-accent-300 animate-slide-up" style="animation-delay: 0.1s">
                        & Insights
                    </span>
                </h1>

                <!-- Description -->
                <p class="text-xl md:text-2xl text-primary-100 mb-8 animate-slide-up leading-relaxed" style="animation-delay: 0.2s">
                    Insights, guides, and expert advice on web development, e-commerce, and digital strategy.
                </p>
            </div>
        </div>

        <!-- Wave divider -->
        <div class="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#FFFFFF" preserveAspectRatio="none" class="w-full h-20">
                <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
        </div>
    </section>

    <!-- Content Section -->
    <div class="bg-gradient-to-br from-white via-neutral-cream to-primary-50 relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute inset-0 overflow-hidden opacity-5">
            <div class="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full animate-bounce-light"></div>
            <div class="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
        </div>

        <div class="container-site section-padding relative z-10">

            <!-- Search Bar -->
            <div class="max-w-2xl mx-auto mb-12">
                <div class="text-center mb-8">
                    <span class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                        🔍 Search & Filter
                    </span>
                    <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Find What You're Looking For
                    </h2>
                    <p class="text-lg text-neutral-text max-w-xl mx-auto">
                        Search through our collection of insights and guides
                    </p>
                </div>
                
                <div class="relative group">
                    <input type="text" v-model="searchQuery" placeholder="Search articles, categories, or topics..."
                        class="w-full pl-12 pr-12 py-4 text-lg border border-neutral-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary transition-all duration-300 bg-white shadow-lg group-hover:shadow-xl" @input="handleSearch" />
                    <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 group-focus-within:text-primary transition-colors duration-300" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <button v-if="searchQuery" @click="clearSearch"
                        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-accent transition-colors duration-200 p-1">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Category Filter -->
            <div class="text-center mb-12">
                <h3 class="text-2xl font-bold text-primary mb-6">Browse by Category</h3>
                <div class="flex flex-wrap gap-3 justify-center">
                    <button @click="selectedCategory = ''" :class="[
                        'px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105',
                        selectedCategory === '' 
                            ? 'bg-accent text-white shadow-lg' 
                            : 'bg-white text-neutral-700 border border-neutral-200 hover:border-accent hover:text-accent hover:shadow-md'
                    ]">
                        All Articles
                    </button>
                    <button v-for="category in categories" :key="category" @click="selectedCategory = category" :class="[
                        'px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105',
                        selectedCategory === category 
                            ? 'bg-accent text-white shadow-lg' 
                            : 'bg-white text-neutral-700 border border-neutral-200 hover:border-accent hover:text-accent hover:shadow-md'
                    ]">
                        {{ category }}
                    </button>
                </div>
            </div>

            <!-- Blog List -->
            <div v-if="filteredBlogs.length > 0" class="mb-16">
                <div class="text-center mb-12">
                    <h3 class="text-2xl font-bold text-primary mb-4">Latest Articles</h3>
                    <p class="text-lg text-neutral-text">
                        {{ totalFilteredBlogs }} article{{ totalFilteredBlogs !== 1 ? 's' : '' }} found
                    </p>
                </div>
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <BlogCard v-for="blog in filteredBlogs" :key="blog.id" :blog="blog" />
                </div>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-20">
                <div class="max-w-md mx-auto">
                    <div class="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.007-5.824-2.562M15 6.306A7.962 7.962 0 0112 5c-2.34 0-4.29 1.007-5.824 2.562"></path>
                        </svg>
                    </div>
                    <h3 class="text-3xl font-bold text-primary mb-4">No Articles Found</h3>
                    <p class="text-lg text-neutral-600 mb-8">
                        We couldn't find any articles matching your search criteria. Try adjusting your filters or search terms.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <button @click="selectedCategory = ''" class="btn-primary">View All Articles</button>
                        <button v-if="searchQuery" @click="clearSearch" class="btn-outline">Clear Search</button>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div v-if="totalPages > 1" class="mt-16">
                <BlogPagination :current-page="currentPage" :total-pages="totalPages" @page-change="handlePageChange" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import blogData from '~/data/blogs.json';
import BlogPagination from '~/components/ui/BlogPagination.vue';
import BlogCard from '~/components/ui/BlogCard.vue';

const route = useRoute();
const router = useRouter();
const blogs = ref([]);
const selectedCategory = ref('');
const searchQuery = ref('');
const isLoading = ref(true);
const postsPerPage = 6;
const currentPage = ref(parseInt(route.query.page) || 1);

onMounted(async () => {
    // Get any existing query parameters
    if (route.query.category) {
        selectedCategory.value = route.query.category;
    }

    if (route.query.search) {
        searchQuery.value = route.query.search;
    }

    // Simulate loading data 
    setTimeout(() => {
        blogs.value = blogData;
        isLoading.value = false;
    }, 300);
});

// Watch for category changes to reset pagination
watch(selectedCategory, () => {
    currentPage.value = 1;
    updateRoute();
});

// Handle search with debounce
let searchTimeout;
const handleSearch = () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        currentPage.value = 1;
        updateRoute();
    }, 300);
};

// Clear search
const clearSearch = () => {
    searchQuery.value = '';
    currentPage.value = 1;
    updateRoute();
};

// Handle page changes
const handlePageChange = (page) => {
    currentPage.value = page;
    updateRoute();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Update the URL with current filters
const updateRoute = () => {
    const query = { ...route.query };

    // Add or remove page parameter
    if (currentPage.value > 1) {
        query.page = currentPage.value;
    } else {
        delete query.page;
    }

    // Add or remove category parameter
    if (selectedCategory.value) {
        query.category = selectedCategory.value;
    } else {
        delete query.category;
    }

    // Add or remove search parameter
    if (searchQuery.value) {
        query.search = searchQuery.value;
    } else {
        delete query.search;
    }

    // Update the URL without reloading the page
    router.replace({ query });
};

// Computed properties
const categories = computed(() => {
    const uniqueCategories = new Set(blogs.value.map(blog => blog.category));
    return Array.from(uniqueCategories);
});

const filteredBlogs = computed(() => {
    // Apply all filters
    let filtered = blogs.value;

    // Category filter
    if (selectedCategory.value) {
        filtered = filtered.filter(blog => blog.category === selectedCategory.value);
    }

    // Search filter
    if (searchQuery.value) {
        const search = searchQuery.value.toLowerCase();
        filtered = filtered.filter(blog =>
            blog.title.toLowerCase().includes(search) ||
            blog.excerpt.toLowerCase().includes(search) ||
            blog.content.toLowerCase().includes(search) ||
            blog.category.toLowerCase().includes(search) ||
            blog.tags.some(tag => tag.toLowerCase().includes(search))
        );
    }

    // Then apply pagination
    const startIndex = (currentPage.value - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return filtered.slice(startIndex, endIndex);
});

const totalFilteredBlogs = computed(() => {
    let filtered = blogs.value;

    // Apply the same filters as in filteredBlogs but without pagination
    if (selectedCategory.value) {
        filtered = filtered.filter(blog => blog.category === selectedCategory.value);
    }

    if (searchQuery.value) {
        const search = searchQuery.value.toLowerCase();
        filtered = filtered.filter(blog =>
            blog.title.toLowerCase().includes(search) ||
            blog.excerpt.toLowerCase().includes(search) ||
            blog.content.toLowerCase().includes(search) ||
            blog.category.toLowerCase().includes(search) ||
            blog.tags.some(tag => tag.toLowerCase().includes(search))
        );
    }

    return filtered.length;
});

const totalPages = computed(() => {
    return Math.ceil(totalFilteredBlogs.value / postsPerPage);
});

// Helper functions
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};
</script>