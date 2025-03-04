<!-- AccessibleHeaderNav.vue -->
<template>
  <header class="bg-white shadow-md fixed w-full top-0 z-sticky">
    <div class="container-site h-header flex items-center justify-between">
      <!-- Brand Logo/Name -->
      <div class="flex items-center">
        <router-link to="/"
          class="text-2xl font-bold font-heading text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 rounded-sm">
          Web Masters
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center space-x-nav-item" aria-label="Main navigation">
        <router-link v-for="(item, index) in navItems" :key="index" :to="item.url"
          class="font-medium text-neutral-text hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 rounded-sm p-1"
          :class="{ 'text-accent': item.active }" :aria-current="item.active ? 'page' : undefined">
          {{ item.name }}
        </router-link>
        <router-link to="/contact"
          class="btn-primary ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500">
          Get in Touch
        </router-link>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu"
        class="lg:hidden text-neutral-text hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 p-1 rounded-sm"
        aria-expanded="isOpen" aria-label="Toggle main menu" aria-controls="mobile-menu">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Drawer with transition -->
    <Transition name="drawer" @after-enter="onMobileMenuOpen" @after-leave="onMobileMenuClose">
      <div v-show="isOpen" class="lg:hidden fixed inset-0 z-modal" aria-labelledby="mobile-menu-heading" role="dialog"
        aria-modal="true" id="mobile-menu">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-neutral-900 bg-opacity-50 transition-opacity" @click="closeMenu"
          aria-hidden="true"></div>

        <!-- Drawer -->
        <div
          class="absolute right-0 top-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
          role="document">
          <!-- Menu header -->
          <div class="p-5 border-b border-neutral-200">
            <h2 id="mobile-menu-heading" class="text-lg font-semibold text-primary">Menu</h2>

            <!-- Close button -->
            <button @click="closeMenu"
              class="absolute top-4 right-4 text-neutral-text hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent-500 rounded-sm p-1"
              aria-label="Close menu" ref="closeButton">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Mobile Nav Items -->
          <nav class="p-5 flex flex-col space-y-4" aria-label="Mobile navigation">
            <router-link v-for="(item, index) in navItems" :key="index" :to="item.url"
              class="py-2 px-3 font-medium text-neutral-text hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 rounded-sm"
              :class="{ 'text-accent': item.active, 'bg-neutral-50': item.active }"
              :aria-current="item.active ? 'page' : undefined" @click="closeMenu" tabindex="isOpen ? 0 : -1">
              {{ item.name }}
            </router-link>
            <router-link to="/contact"
              class="btn-primary text-center mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
              @click="closeMenu" tabindex="isOpen ? 0 : -1">
              Get in Touch
            </router-link>
          </nav>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Spacer to prevent content from hiding behind fixed header -->
  <div class="h-header"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRoute } from 'vue-router'

// Menu state
const isOpen = ref(false)
const closeButton = ref(null)
let previousActiveElement = null

// Get current route to determine active state
const route = useRoute()

// Navigation items - updated to use route paths
const navItems = ref([
  { name: 'Home', url: '/', active: false },
  { name: 'Services', url: '/services', active: false },
  { name: 'Portfolio', url: '/portfolio', active: false },
  { name: 'About', url: '/about', active: false },
])

// Update active state based on current route
const updateActiveState = () => {
  navItems.value.forEach(item => {
    // Mark as active if current path matches the navigation item url
    // For home page, check for exact match to avoid matching every route
    if (item.url === '/') {
      item.active = route.path === '/'
    } else {
      item.active = route.path.startsWith(item.url)
    }
  })
}

// Toggle menu
const toggleMenu = () => {
  if (!isOpen.value) {
    // Store the currently focused element to restore focus later
    previousActiveElement = document.activeElement
  }

  isOpen.value = !isOpen.value

  // Prevent scrolling when menu is open
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''

    // Restore focus
    if (previousActiveElement) {
      previousActiveElement.focus()
    }
  }
}

// Close menu
const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''

  // Restore focus
  if (previousActiveElement) {
    previousActiveElement.focus()
  }
}

// When mobile menu finishes opening, focus on the close button
const onMobileMenuOpen = () => {
  nextTick(() => {
    if (closeButton.value) {
      closeButton.value.focus()
    }
  })
}

// After mobile menu closes
const onMobileMenuClose = () => {
  // Ensure the body can scroll again
  document.body.style.overflow = ''
}

// Handle escape key to close menu
const handleEscKey = (event) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeMenu()
  }
}

// Close mobile menu when window is resized to desktop size
const handleResize = () => {
  if (window.innerWidth >= 1024 && isOpen.value) {
    closeMenu()
  }
}

// Focus trap within the mobile menu for accessibility
const handleTabKey = (event) => {
  if (!isOpen.value) return

  const mobileMenu = document.getElementById('mobile-menu')
  if (!mobileMenu) return

  const focusableElements = mobileMenu.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  )

  if (focusableElements.length === 0) return

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  // If shift + tab and on first element, move to last element
  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault()
    lastElement.focus()
  }
  // If tab and on last element, move to first element
  else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault()
    firstElement.focus()
  }
}

// Setup event listeners and initialize active state
onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleEscKey)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      handleTabKey(e)
    }
  })

  // Set initial active state
  updateActiveState()
})

// Clean up event listeners
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleEscKey)
  window.removeEventListener('keydown', handleTabKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Transition for drawer animation */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-enter-active>div:last-child,
.drawer-leave-active>div:last-child {
  transition: transform 0.3s ease-in-out;
}

.drawer-enter-from>div:last-child,
.drawer-leave-to>div:last-child {
  transform: translateX(100%);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}
</style>
