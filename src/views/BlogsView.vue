<template>
    <div class="container-site section-padding">
        <div class="mb-12">
            <h1 class="text-center mb-4">Our Blog</h1>
            <p class="text-center text-neutral-700 max-w-2xl mx-auto">
                Insights, guides, and expert advice on web development, e-commerce, and digital strategy.
            </p>
        </div>

        <!-- Search Bar -->
        <div class="max-w-xl mx-auto mb-8">
            <div class="relative">
                <input type="text" v-model="searchQuery" placeholder="Search articles..."
                    class="form-input pl-10 py-3 w-full" @input="handleSearch" />
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" width="20" height="20"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <button v-if="searchQuery" @click="clearSearch"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap gap-2 mb-8 justify-center">
            <button @click="selectedCategory = ''" :class="[
                'badge badge-light transition-all',
                selectedCategory === '' ? 'bg-accent text-white' : ''
            ]">
                All
            </button>
            <button v-for="category in categories" :key="category" @click="selectedCategory = category" :class="[
                'badge badge-light transition-all',
                selectedCategory === category ? 'bg-accent text-white' : ''
            ]">
                {{ category }}
            </button>
        </div>

        <!-- Blog List -->
        <div v-if="filteredBlogs.length > 0" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard v-for="blog in filteredBlogs" :key="blog.id" :blog="blog" />
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-16">
            <h3 class="mb-4">No blog posts found</h3>
            <p class="text-neutral-600 mb-6">We couldn't find any blog posts matching your criteria.</p>
            <div class="flex justify-center gap-4">
                <button @click="selectedCategory = ''" class="btn-secondary">View All Posts</button>
                <button v-if="searchQuery" @click="clearSearch" class="btn-outline">Clear Search</button>
            </div>
        </div>

        <!-- Pagination -->
        <BlogPagination v-if="totalPages > 1" :current-page="currentPage" :total-pages="totalPages"
            @page-change="handlePageChange" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import blogData from '@/data/blogs.json';
import BlogPagination from '@/components/BlogPagination.vue';
import BlogCard from '@/components/BlogCard.vue';

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