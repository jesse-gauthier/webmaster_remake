<template>
    <div class="card card-hover h-full flex flex-col">
        <div class="relative h-48 overflow-hidden">
            <!-- Placeholder image if no featuredImage is available -->
            <div v-if="!blog.featuredImage" class="bg-primary-100 h-full flex items-center justify-center">
                <span class="text-primary text-xl">{{ blog.title.charAt(0) }}</span>
            </div>
            <!-- Actual image if available -->
            <img v-else :src="blog.featuredImage" :alt="blog.title" class="w-full h-full object-cover">
            <!-- Category badge -->
            <span class="badge badge-accent absolute top-4 right-4">{{ blog.category }}</span>
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
</script>