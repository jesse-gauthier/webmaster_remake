<template>
    <div class="flex justify-center items-center my-8 gap-2">
        <!-- Previous page button -->
        <button @click="onPageChange(currentPage - 1)" :disabled="currentPage === 1" :class="[
            'px-3 py-1 rounded border',
            currentPage === 1
                ? 'text-neutral-400 border-neutral-200 bg-neutral-50 cursor-not-allowed'
                : 'text-primary border-primary-200 hover:bg-primary-50'
        ]">
            &larr;
        </button>

        <!-- Page numbers -->
        <div class="flex gap-1">
            <template v-for="page in visiblePageNumbers" :key="page">
                <!-- Ellipsis -->
                <span v-if="page === '...'" class="px-3 py-1 text-neutral-500">
                    ...
                </span>

                <!-- Page number button -->
                <button v-else @click="onPageChange(page)" :class="[
                    'px-3 py-1 rounded border',
                    page === currentPage
                        ? 'bg-primary text-white border-primary font-medium'
                        : 'text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                ]">
                    {{ page }}
                </button>
            </template>
        </div>

        <!-- Next page button -->
        <button @click="onPageChange(currentPage + 1)" :disabled="currentPage === totalPages" :class="[
            'px-3 py-1 rounded border',
            currentPage === totalPages
                ? 'text-neutral-400 border-neutral-200 bg-neutral-50 cursor-not-allowed'
                : 'text-primary border-primary-200 hover:bg-primary-50'
        ]">
            &rarr;
        </button>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    },
    totalPages: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['page-change']);

const onPageChange = (page) => {
    if (page < 1 || page > props.totalPages) return;
    emit('page-change', page);
};

// Calculate which page numbers to show
const visiblePageNumbers = computed(() => {
    if (props.totalPages <= 7) {
        // If 7 or fewer pages, show all
        return Array.from({ length: props.totalPages }, (_, i) => i + 1);
    }

    // Always show first and last page
    const pages = [1];

    // Calculate range around current page
    let rangeStart = Math.max(2, props.currentPage - 1);
    let rangeEnd = Math.min(props.totalPages - 1, props.currentPage + 1);

    // Adjust range to show 3 pages when possible
    if (rangeEnd - rangeStart < 2) {
        if (rangeStart === 2) {
            rangeEnd = Math.min(props.totalPages - 1, rangeEnd + 1);
        } else if (rangeEnd === props.totalPages - 1) {
            rangeStart = Math.max(2, rangeStart - 1);
        }
    }

    // Add ellipsis at the beginning if needed
    if (rangeStart > 2) {
        pages.push('...');
    }

    // Add the range of pages
    for (let i = rangeStart; i <= rangeEnd; i++) {
        pages.push(i);
    }

    // Add ellipsis at the end if needed
    if (rangeEnd < props.totalPages - 1) {
        pages.push('...');
    }

    // Add the last page
    if (props.totalPages > 1) {
        pages.push(props.totalPages);
    }

    return pages;
});
</script>