<template>
    <div class="min-h-screen flex flex-col items-center justify-center px-4 bg-neutral-cream">
        <div class="text-center max-w-md">
            <!-- Large Icon -->
            <div class="mb-6 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-32 w-32 md:h-40 md:w-40 text-primary animate-bounce-light" fill="#EDF5F0"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </div>

            <!-- Error Heading -->
            <h1 class="text-5xl md:text-6xl font-bold text-primary mb-4">404</h1>

            <!-- Error Message -->
            <h2 class="text-2xl md:text-3xl font-semibold text-primary mb-4">Page Not Found</h2>
            <p class="text-base md:text-lg text-neutral-text mb-8">
                Oops! The page you're looking for seems to have been struck by lightning.
            </p>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <router-link to="/" class="btn-primary w-full sm:w-auto">
                    Return Home
                </router-link>
                <button @click="goBack" class="btn-outline w-full sm:w-auto">
                    Go Back
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const goBack = () => {
    window.history.length > 1
        ? window.history.go(-1)
        : window.location.href = '/';
};
</script>