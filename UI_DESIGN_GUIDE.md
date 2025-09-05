# UI Design Guide for WebMaster Website

This guide provides a comprehensive overview of the UI patterns, components, and design system used throughout the WebMaster website. Use this as a reference when building new pages to maintain consistency and follow established design patterns.

## Table of Contents

- [Design System Overview](#design-system-overview)
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Layout Structure](#layout-structure)
- [Component Patterns](#component-patterns)
- [Page Structure Templates](#page-structure-templates)
- [Animation & Effects](#animation--effects)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)

## Design System Overview

The WebMaster website follows a modern, professional design system built with:

- **Framework**: Vue.js 3 with Nuxt.js
- **Styling**: Tailwind CSS with custom design tokens
- **Typography**: Inter (body) and Montserrat (headings)
- **Icons**: Iconify (@iconify/vue)
- **Animations**: CSS transforms and transitions

## Color Palette

### Primary Colors (Forest Green)

```css
--primary: #2e5944 /* Main brand color */ --primary-dark: #1b3d2f
  /* Darker variant */ --primary-light: #edf5f0 /* Light backgrounds */
  --primary-50: #f4f7f5 --primary-100: #e8f0eb --primary-200: #d1e1d7
  --primary-300: #b4ccc0 --primary-400: #8eae9d --primary-500: #5e8f77
  --primary-600: #2e5944 /* Main primary */ --primary-700: #1b3d2f
  /* Darker primary */ --primary-800: #17332a --primary-900: #122921;
```

### Accent Colors (Steel Blue)

```css
--accent: #4292ac /* Main accent color */ --accent-dark: #357d96
  /* Hover states */ --accent-light: #d5e6ec /* Light backgrounds */
  --accent-50: #f0f7fa --accent-100: #ddeef4 --accent-200: #bee0ea
  --accent-300: #94ccd9 --accent-400: #68b3c6 --accent-500: #4292ac
  /* Main accent */ --accent-600: #357d96 /* Darker accent */
  --accent-700: #2a6275 --accent-800: #224e5d --accent-900: #193a46;
```

### Neutral Colors

```css
--neutral-cream: #f7f3e8 /* Background color */ --neutral-text: #2d2d2d
  /* Primary text */;
```

## Typography

### Font Families

- **Headings**: Montserrat (400, 500, 600, 700)
- **Body Text**: Inter (300, 400, 500, 600, 700)

### Heading Hierarchy

```css
h1: text-4xl md:text-5xl lg:text-6xl font-bold
h2: text-4xl md:text-5xl font-bold
h3: text-2xl font-bold
h4: text-xl font-bold
h5: text-lg font-semibold
h6: text-base font-semibold
```

### Body Text

```css
Paragraph: text-lg md:text-xl leading-relaxed
Small Text: text-sm
Large Text: text-xl md:text-2xl
```

## Layout Structure

### Container Classes

```css
.container-site: Custom container with max-width and padding
.section-padding: py-20 (consistent section spacing)
```

### Grid Patterns

```css
/* Common grid layouts */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3    /* Service cards */
grid-cols-1 md:grid-cols-2                   /* Two-column content */
grid-cols-1 md:grid-cols-4                   /* Process steps */
```

## Component Patterns

### Hero Sections

All hero sections follow this pattern:

```vue
<section
  class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 md:py-32 overflow-hidden"
>
  <!-- Background decorative elements -->
  <div class="absolute inset-0 overflow-hidden opacity-20">
    <div class="absolute -right-40 -top-40 w-96 h-96 bg-accent rounded-full animate-bounce-light"></div>
    <div class="absolute -left-20 top-1/2 w-80 h-80 bg-accent-light rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
  </div>

  <!-- Floating particles -->
  <div class="absolute inset-0 overflow-hidden opacity-30">
    <div class="absolute top-20 left-20 w-4 h-4 bg-accent-300 rounded-full animate-bounce-light" style="animation-delay: 0.5s"></div>
  </div>

  <div class="container-site px-4 sm:px-6 relative z-10">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Badge with Emoji -->
      <span class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
        <span class="text-lg">🚀</span>
        Badge Text
      </span>

      <!-- Main Headline -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight">
        Main Headline
        <span class="block text-accent-300 animate-slide-up" style="animation-delay: 0.1s">
          Highlighted Text
        </span>
      </h1>

      <!-- Description -->
      <p class="text-xl md:text-2xl text-primary-100 mb-8 animate-slide-up leading-relaxed" style="animation-delay: 0.2s">
        Hero description text
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up" style="animation-delay: 0.3s">
        <router-link to="/contact" class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
          Primary CTA
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
        <router-link to="/portfolio" class="btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300">
          Secondary CTA
        </router-link>
      </div>

      <!-- Trust indicators -->
      <div class="flex flex-wrap justify-center items-center gap-8 pt-12 animate-slide-up" style="animation-delay: 0.4s">
        <!-- Trust indicator items -->
      </div>
    </div>
  </div>

  <!-- Wave divider -->
  <div class="absolute bottom-0 left-0 right-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#FFFFFF" preserveAspectRatio="none" class="w-full h-20">
      <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
    </svg>
  </div>
</section>
```

### Content Sections

Standard content sections follow this pattern:

```vue
<section
  class="py-20 bg-gradient-to-br from-white via-neutral-cream to-primary-50 relative overflow-hidden"
>
  <!-- Background decoration -->
  <div class="absolute inset-0 overflow-hidden opacity-5">
    <div class="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full animate-bounce-light"></div>
    <div class="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
  </div>

  <div class="container-site px-4 sm:px-6 relative z-10">
    <div class="text-center mb-16">
      <span class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
        🎯 Section Badge
      </span>
      <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
        Section Title
      </h2>
      <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
        Section description
      </p>
    </div>

    <!-- Content grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Grid items -->
    </div>
  </div>
</section>
```

### Service/Feature Cards

```vue
<div class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100">
  <div class="h-2 bg-gradient-to-r from-primary to-accent"></div>
  <div class="p-8">
    <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon icon="icon-name" width="28" height="28" class="text-white" />
    </div>
    <h3 class="text-2xl font-bold text-primary mb-4">Card Title</h3>
    <p class="text-neutral-text mb-6 leading-relaxed">Card description</p>

    <!-- Feature list -->
    <ul class="space-y-3">
      <li class="flex items-start">
        <div class="bg-accent bg-opacity-20 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
          <svg class="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <span class="text-neutral-text">Feature item</span>
      </li>
    </ul>
  </div>
</div>
```

### CTA Sections

```vue
<section
  class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 md:py-32 overflow-hidden"
>
  <!-- Background elements -->
  <div class="absolute inset-0 overflow-hidden opacity-20">
    <!-- Decorative elements -->
  </div>

  <div class="container-site px-4 sm:px-6 relative z-10">
    <div class="text-center max-w-4xl mx-auto">
      <span class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6">
        <span class="text-lg">🚀</span>
        CTA Badge
      </span>

      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        CTA Headline
        <span class="block text-accent-300">Highlighted Text</span>
      </h2>
      
      <p class="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
        CTA description
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center gap-6">
        <!-- CTA buttons -->
      </div>
    </div>
  </div>
</section>
```

## Page Structure Templates

### Standard Service Page Structure

1. **Hero Section** - Service-specific hero with background gradient
2. **Features/Benefits Section** - Grid of service features
3. **Process Section** - Step-by-step process cards
4. **Testimonials Section** - Client testimonials grid
5. **Pricing Section** (optional) - Pricing tiers
6. **FAQ Section** - Expandable FAQ items
7. **CTA Section** - Final call-to-action

### Home Page Structure

1. **Hero Section** - Main value proposition
2. **Services Showcase** - Tabbed services overview
3. **Awards/Trust Signals** - Company credibility
4. **Technology Stack** - Technical capabilities
5. **Work Process** - How we work
6. **Pricing** - Package options
7. **Contact Form** - Lazy-loaded contact form

## Animation & Effects

### CSS Classes for Animations

```css
animate-fade-in          /* Fade in effect */
animate-slide-up         /* Slide up effect */
animate-bounce-light     /* Gentle bounce animation */
```

### Animation Delays

Use inline styles for staggered animations:

```html
style="animation-delay: 0.1s" style="animation-delay: 0.2s"
style="animation-delay: 0.3s"
```

### Hover Effects

```css
transform hover:scale-105 transition-all duration-300    /* Scale on hover */
hover:shadow-2xl                                        /* Shadow on hover */
group-hover:scale-110                                   /* Group hover effects */
```

## Responsive Design

### Breakpoint Strategy

```css
/* Mobile First Approach */
Base: Mobile styles (< 768px)
md: Tablet (768px+)
lg: Desktop (1024px+)
xl: Large Desktop (1280px+)
```

### Common Responsive Patterns

```css
/* Text sizing */
text-4xl md:text-5xl lg:text-6xl

/* Grid layouts */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Spacing */
py-20 md:py-32
gap-8 md:gap-12

/* Flex direction */
flex-col sm:flex-row
```

## Button Styles

### Primary Button

```css
.btn-primary {
  @apply bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-dark transition-colors duration-200;
}
```

### Secondary Button

```css
.btn-outline {
  @apply border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-200;
}
```

### Large Button

```css
.btn-lg {
  @apply px-8 py-4 text-lg;
}
```

## Background Patterns

### Gradient Backgrounds

```css
/* Hero gradients */
bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900

/* Section gradients */
bg-gradient-to-br from-white via-neutral-cream to-primary-50
bg-gradient-to-br from-primary-50 via-white to-neutral-cream
```

### Decorative Elements

All sections include floating decorative circles with animation delays for visual interest.

## Accessibility

### ARIA Labels

```html
aria-labelledby="section-title" aria-describedby="section-description"
aria-expanded="true/false" (for FAQ toggles)
```

### Focus States

```css
focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-20
```

### Screen Reader Support

```html
<span class="sr-only">Screen reader text</span>
```

## Best Practices

1. **Consistency**: Use the same spacing, colors, and typography patterns across all pages
2. **Performance**: Lazy load components when possible (contact forms, images)
3. **SEO**: Include proper heading hierarchy and semantic HTML
4. **Mobile-First**: Design for mobile first, then enhance for larger screens
5. **Accessibility**: Include proper ARIA labels and focus states
6. **Animation**: Use consistent animation timing and easing
7. **Loading States**: Provide loading states for async components

## Common UI Components to Reuse

1. **Section Headers** - Badge + title + description pattern
2. **Service Cards** - Consistent card layout with hover effects
3. **Process Steps** - Numbered step cards with connecting lines
4. **Testimonials** - Customer review cards with ratings
5. **CTA Sections** - Consistent call-to-action layout
6. **FAQ Accordions** - Expandable question/answer pairs
7. **Trust Indicators** - Badge-style credibility markers

This guide should be referenced when creating new pages to ensure consistency with the established design system and user experience patterns.
