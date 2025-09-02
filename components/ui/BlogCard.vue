<template>
    <div class="card card-hover h-full flex flex-col">
        <div class="relative h-48 overflow-hidden">
            <!-- Placeholder design if no featuredImage is available -->
            <div v-if="!blog.featuredImage" class="h-full w-full flex items-center justify-center"
                :style="getPlaceholderStyle(blog.category)">
                <div class="text-center px-4">
                    <div
                        class="w-12 h-12 mx-auto mb-2 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="text-white">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <line x1="10" y1="9" x2="8" y2="9"></line>
                        </svg>
                    </div>
                    <span class="text-white text-sm font-medium uppercase tracking-wider">{{ blog.category }}</span>
                </div>
            </div>

            <!-- Actual image if available -->
            <img v-else :src="blog.featuredImage" :alt="blog.title" class="w-full h-full object-cover">

            <!-- Category badge (only shown when image exists) -->
            <span v-if="blog.featuredImage" class="badge badge-accent absolute top-4 right-4">
                {{ blog.category }}
            </span>
        </div>

        <div class="card-body flex-grow">
            <div class="mb-2 text-sm text-neutral-600">
                {{ formatDate(blog.date) }} • {{ blog.author }}
            </div>
            <h3 class="mb-2">
                <router-link :to="`/blog/${blog.slug}`" class="text-primary hover:text-primary-dark">
                    {{ blog.title }}
                </router-link>
            </h3>
            <p class="text-neutral-700 mb-4">{{ blog.excerpt }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in blog.tags" :key="tag"
                    class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">
                    #{{ tag }}
                </span>
            </div>
            <router-link :to="`/blog/${blog.slug}`" class="btn-text mt-auto inline-block">
                Read More →
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { getGradientForCategory } from '~/utils/gradientUtils';

defineProps({
    blog: {
        type: Object,
        required: true
    }
});

// Helper function to format date
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

// Use the utility function for consistent gradients
const getPlaceholderStyle = (category) => {
    return getGradientForCategory(category);
};
</script>