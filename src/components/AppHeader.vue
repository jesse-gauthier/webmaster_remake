<!-- AccessibleHeaderNav.vue -->
<template>
  <header class="bg-white shadow-md fixed w-full top-0 z-sticky" role="banner">
    <div class="container-site h-header flex items-center justify-between">
      <!-- Brand Logo/Name -->
      <Logo />
      <!-- Desktop Navigation -->
      <nav
        class="hidden lg:flex items-center space-x-nav-item"
        aria-label="Main navigation"
      >
        <!-- Parent Nav Items -->
        <template v-for="(item, index) in navItems" :key="index">
          <!-- Regular link if no children -->
          <router-link
            v-if="!item.children"
            :to="item.url"
            class="font-medium text-neutral-text hover:text-accent focus:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 rounded-sm p-1"
            :class="{ 'text-accent': item.active }"
            :aria-current="item.active ? 'page' : undefined"
          >
            {{ item.name }}
          </router-link>

          <!-- Dropdown if has children -->
          <div v-else class="relative group">
            <button
              class="flex items-center font-medium text-neutral-text group-hover:text-accent focus:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 rounded-sm p-1"
              :class="{ 'text-accent': item.active }"
              :aria-expanded="item.expanded ? 'true' : 'false'"
              aria-haspopup="true"
              :id="`desktop-menu-button-${index}`"
              @click="toggleDesktopDropdown(index)"
              @keydown.escape="closeDesktopDropdown(index)"
            >
              {{ item.name }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1 transition-transform duration-200"
                :class="{ 'rotate-180': item.expanded }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div
              v-show="item.expanded"
              class="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-20"
              :id="`desktop-menu-${index}`"
              role="menu"
              :aria-labelledby="`desktop-menu-button-${index}`"
            >
              <router-link
                v-for="(child, childIndex) in item.children"
                :key="childIndex"
                :to="child.url"
                class="block px-4 py-2 text-sm text-neutral-text hover:bg-neutral-50 hover:text-accent focus:bg-neutral-50 focus:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500"
                :class="{
                  'text-accent': child.active,
                  'bg-neutral-50': child.active,
                }"
                :aria-current="child.active ? 'page' : undefined"
                role="menuitem"
                @click="closeDesktopDropdown(index)"
              >
                {{ child.name }}
              </router-link>
            </div>
          </div>
        </template>
        <router-link
          to="/contact"
          class="btn-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
        >
          Get in Touch
        </router-link>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden p-2 rounded-md text-neutral-text hover:text-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
        @click="toggleMenu"
        aria-expanded="false"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        ref="mobileMenuButton"
      >
        <svg
          v-if="!isOpen"
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Drawer with transition -->
    <Transition
      name="drawer"
      @after-enter="onMobileMenuOpen"
      @after-leave="onMobileMenuClose"
    >
      <div
        v-show="isOpen"
        class="lg:hidden fixed inset-0 z-modal"
        aria-labelledby="mobile-menu-heading"
        role="dialog"
        aria-modal="true"
        id="mobile-menu"
      >
        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-neutral-900 bg-opacity-50 transition-opacity"
          @click="closeMenu"
          aria-hidden="true"
        ></div>

        <!-- Drawer -->
        <div
          class="relative w-full max-w-xs h-full bg-white flex flex-col overflow-y-auto shadow-xl float-right p-4"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div
            class="flex justify-between items-center border-b border-neutral-100 pb-4 mb-4"
          >
            <h2 id="mobile-menu-heading" class="text-lg font-bold">Menu</h2>
            <button
              ref="closeButton"
              class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 p-1"
              @click="closeMenu"
              aria-label="Close menu"
            >
              <svg
                class="h-6 w-6 text-neutral-text"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav class="flex-1 flex flex-col">
            <div class="space-y-2">
              <template v-for="(item, index) in navItems" :key="index">
                <!-- Regular link if no children -->
                <router-link
                  v-if="!item.children"
                  :to="item.url"
                  class="block px-3 py-2 rounded-md text-base font-medium text-neutral-text hover:bg-neutral-50 hover:text-accent focus:bg-neutral-50 focus:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  :class="{ 'text-accent': item.active }"
                  :aria-current="item.active ? 'page' : undefined"
                  @click="closeMenu"
                  :tabindex="isOpen ? 0 : -1"
                >
                  {{ item.name }}
                </router-link>

                <!-- Expandable section if has children -->
                <div v-else class="space-y-1">
                  <button
                    class="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-neutral-text hover:bg-neutral-50 hover:text-accent focus:bg-neutral-50 focus:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500"
                    :class="{ 'text-accent': item.active }"
                    :aria-expanded="item.expanded ? 'true' : 'false'"
                    :aria-controls="`mobile-submenu-${index}`"
                    @click="toggleMobileDropdown(index)"
                    :tabindex="isOpen ? 0 : -1"
                  >
                    <span>{{ item.name }}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 ml-1 transition-transform duration-200"
                      :class="{ 'rotate-180': item.expanded }"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    v-show="item.expanded"
                    :id="`mobile-submenu-${index}`"
                    class="mt-1 pl-4 border-l-2 border-neutral-100"
                  >
                    <router-link
                      v-for="(child, childIndex) in item.children"
                      :key="childIndex"
                      :to="child.url"
                      class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-50 hover:text-accent focus:bg-neutral-50 focus:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500"
                      :class="{
                        'text-accent': child.active,
                        'bg-neutral-50': child.active,
                      }"
                      :aria-current="child.active ? 'page' : undefined"
                      @click="closeMenu"
                      :tabindex="isOpen ? 0 : -1"
                    >
                      {{ child.name }}
                    </router-link>
                  </div>
                </div>
              </template>
            </div>
            <router-link
              to="/contact"
              class="btn-primary text-center mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
              @click="closeMenu"
              :tabindex="isOpen ? 0 : -1"
            >
              Get in Touch
            </router-link>
          </nav>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Spacer to prevent content from hiding behind fixed header -->
  <div class="h-header" aria-hidden="true"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useRoute } from "vue-router";

import Logo from "@/assets/logo.vue";

// Menu state
const isOpen = ref(false);
const closeButton = ref(null);
const mobileMenuButton = ref(null);
let previousActiveElement = null;

// Get current route
const route = useRoute();

// Initialize nav items with expanded state
const navItems = ref([
  {
    name: "Home",
    url: "/",
    active: false,
    expanded: false,
  },
  {
    name: "Services",
    url: "#",
    active: false,
    expanded: false,
    children: [
      {
        name: "Web Design",
        url: "/services#web-design",
        active: false,
      },
      {
        name: "Web Development",
        url: "/services#web-development",
        active: false,
      },
      {
        name: "E-Commerce",
        url: "/services#e-commerce",
        active: false,
      },
      {
        name: "SEO",
        url: "/services#seo",
        active: false,
      },
      {
        name: "Maintenance",
        url: "/services#maintenance",
        active: false,
      },
    ],
  },
  {
    name: "Portfolio",
    url: "/portfolio",
    active: false,
    expanded: false,
  },
  {
    name: "About",
    url: "/about",
    active: false,
    expanded: false,
  },
  {
    name: "Resources",
    url: "#",
    active: false,
    expanded: false,
    children: [
      {
        name: "Blog",
        url: "/blog",
        active: false,
      },
      {
        name: "SEO Checklist",
        url: "/seo-checklist",
        active: false,
      },
    ],
  },
]);

// Update active state based on current route
const updateActiveState = () => {
  const currentPath = route.path;

  navItems.value.forEach((item) => {
    // Set active state for main nav items
    item.active = item.url === currentPath || currentPath.startsWith(item.url);

    // Check active state for children
    if (item.children) {
      item.children.forEach((child) => {
        child.active =
          child.url === currentPath ||
          (currentPath.includes(child.url) && child.url !== "#");
        // If a child is active, mark parent as active
        if (child.active) {
          item.active = true;
        }
      });
    }
  });
};

// Toggle desktop dropdown
const toggleDesktopDropdown = (index) => {
  // First, close all other dropdowns
  navItems.value.forEach((item, i) => {
    if (i !== index && item.expanded) {
      item.expanded = false;
    }
  });

  // Toggle the clicked dropdown
  navItems.value[index].expanded = !navItems.value[index].expanded;

  // Add click outside listener if a dropdown is open
  if (navItems.value[index].expanded) {
    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);
  }
};

// Close desktop dropdown
const closeDesktopDropdown = (index) => {
  navItems.value[index].expanded = false;
  document.removeEventListener("click", handleClickOutside);
};

// Handle click outside
const handleClickOutside = (event) => {
  const clickedOutside = !event.target.closest(".group");
  if (clickedOutside) {
    navItems.value.forEach((item, index) => {
      if (item.expanded) {
        closeDesktopDropdown(index);
      }
    });
  }
};

// Toggle mobile dropdown
const toggleMobileDropdown = (index) => {
  navItems.value[index].expanded = !navItems.value[index].expanded;
};

// Toggle mobile menu
const toggleMenu = () => {
  if (!isOpen.value) {
    // Store the currently focused element to restore focus later
    previousActiveElement = document.activeElement;
  }

  isOpen.value = !isOpen.value;

  // Update ARIA attributes
  mobileMenuButton.value.setAttribute(
    "aria-expanded",
    isOpen.value ? "true" : "false"
  );

  // Prevent scrolling when menu is open
  if (isOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";

    // Restore focus
    if (previousActiveElement) {
      previousActiveElement.focus();
    }
  }
};

// Close menu
const closeMenu = () => {
  isOpen.value = false;
  document.body.style.overflow = "";

  // Update ARIA attributes
  if (mobileMenuButton.value) {
    mobileMenuButton.value.setAttribute("aria-expanded", "false");
  }

  // Restore focus
  if (previousActiveElement) {
    previousActiveElement.focus();
  }
};

// When mobile menu finishes opening, focus on the close button
const onMobileMenuOpen = () => {
  nextTick(() => {
    if (closeButton.value) {
      closeButton.value.focus();
    }
  });
};

// After mobile menu closes
const onMobileMenuClose = () => {
  // Ensure the body can scroll again
  document.body.style.overflow = "";
};

// Handle escape key to close menu
const handleEscKey = (event) => {
  if (event.key === "Escape") {
    // Close any open desktop dropdowns
    navItems.value.forEach((item, index) => {
      if (item.expanded) {
        closeDesktopDropdown(index);
      }
    });

    // Close mobile menu if open
    if (isOpen.value) {
      closeMenu();
    }
  }
};

// Close mobile menu when window is resized to desktop size
const handleResize = () => {
  if (window.innerWidth >= 1024 && isOpen.value) {
    closeMenu();
  }
};

// Focus trap within the mobile menu for accessibility
const handleTabKey = (event) => {
  if (!isOpen.value) return;

  const mobileMenu = document.getElementById("mobile-menu");
  if (!mobileMenu) return;

  const focusableElements = mobileMenu.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );

  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  // If shift + tab and on first element, move to last element
  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  }
  // If tab and on last element, move to first element
  else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
};

// Setup event listeners and initialize active state
onMounted(() => {
  window.addEventListener("resize", handleResize);
  window.addEventListener("keydown", handleEscKey);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      handleTabKey(e);
    }
  });

  // Set initial active state
  updateActiveState();
});

// Clean up event listeners
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("keydown", handleEscKey);
  window.removeEventListener("keydown", handleTabKey);
  document.removeEventListener("click", handleClickOutside);
  document.body.style.overflow = "";
});
</script>

<style scoped>
/* Transition for drawer animation */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-enter-active > div:last-child,
.drawer-leave-active > div:last-child {
  transition: transform 0.3s ease-in-out;
}

.drawer-enter-from > div:last-child,
.drawer-leave-to > div:last-child {
  transform: translateX(100%);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

/* Improved focus styles */
a:focus,
button:focus {
  outline: 2px solid #4292ac;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .drawer-enter-active,
  .drawer-leave-active,
  .drawer-enter-active > div:last-child,
  .drawer-leave-active > div:last-child {
    transition: none;
  }
}
</style>
