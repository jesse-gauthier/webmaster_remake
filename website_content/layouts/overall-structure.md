# Website Layout Structure

## Overall Application Structure

### App.vue Layout
- **Skip Links**: Accessibility skip navigation (hidden until focused)
  - "Skip to main content" 
  - "Skip to footer"
- **Header**: Fixed header with AppHeader component
- **Main Content**: `<main>` element with RouterView
- **Footer**: AppFooter component  
- **Modal**: WebAppModal component with transition effects
- **Cookie Consent**: CookieConsentBar component
- **Structured Data Components**: 
  - BreadcrumbStructuredData
  - WebsiteStructuredData
- **Analytics**: Vercel SpeedInsights integration

### Header (AppHeader.vue)
- **Layout**: Fixed header with white background and shadow
- **Container**: Uses "container-site" class for consistent width
- **Structure**: Flexbox layout with space-between
  - Left: Logo component
  - Right: Desktop navigation + CTA button
  - Mobile: Hamburger menu button

### Navigation Structure
- **Desktop**: Horizontal navigation with dropdowns
- **Mobile**: Right-sliding drawer with overlay
- **Accessibility**: Full ARIA support, keyboard navigation, focus trapping
- **Active States**: Visual indicators for current page/section

## Design System

### Typography Scale (Tailwind Config)
- **xs**: 0.75rem (12px) - line-height: 1rem
- **sm**: 0.875rem (14px) - line-height: 1.25rem  
- **base**: 1rem (16px) - line-height: 1.5rem
- **lg**: 1.125rem (18px) - line-height: 1.75rem
- **xl**: 1.25rem (20px) - line-height: 1.75rem
- **2xl**: 1.5rem (24px) - line-height: 2rem
- **3xl**: 1.875rem (30px) - line-height: 2.25rem
- **4xl**: 2.25rem (36px) - line-height: 2.5rem
- **5xl**: 3rem (48px) - line-height: 1
- **6xl**: 3.75rem (60px) - line-height: 1

### Font Families
- **Heading Font**: Montserrat, sans-serif
- **Body Font**: Open Sans, sans-serif

### Color System
#### Primary Colors (Forest Green)
- **Primary**: #2E5944 (main brand color)
- **Primary Dark**: #1B3D2F
- **Primary Light**: #EDF5F0
- **50**: #F4F7F5 → **900**: #122921

#### Accent Colors (Steel Blue)
- **Accent**: #4292AC
- **Accent Dark**: #357D96 
- **Accent Light**: #D5E6EC
- **50**: #F0F7FA → **900**: #193A46

#### Neutral Colors
- **Neutral Cream**: #F7F3E8 (background)
- **Neutral Text**: #2D2D2D (off-black text)
- **50**: #F7F3E8 → **900**: #2D2D2D

### Component Classes

#### Button Components
- **.btn-primary**: Accent background, cream text, hover effects
- **.btn-secondary**: Primary background, cream text
- **.btn-outline**: Transparent background, primary border/text
- **.btn-text**: Text-only button with accent color
- **Size variants**: .btn-sm, .btn-lg

#### Card Components  
- **.card**: White background, rounded corners, shadow
- **.card-hover**: Hover lift effect with enhanced shadow
- **.card-header/.card-body/.card-footer**: Structured content areas

#### Form Components
- **.form-input**: Standardized input styling with focus states
- **.form-label**: Consistent label typography
- **.form-error**: Error message styling

#### Alert Components
- **.alert-info/.alert-success/.alert-warning/.alert-error**: Status messages with color coding

### Layout Utilities
- **container-site**: Max-width container (1280px) with responsive padding
- **section-padding**: Responsive vertical padding for sections
- **h-header**: Header height variable
- **z-sticky, z-modal, etc.**: Z-index scale for layering

### Spacing System
- **section**: 80px - Standard section spacing
- **header**: 80px - Header height
- **footer**: 200px - Footer height
- **nav-item**: 2rem - Navigation item spacing

## Page Layout Patterns

### Standard Page Structure
1. **Hero Section**: Large banner with title, description, CTAs
2. **Content Sections**: Alternating background colors (white/cream)
3. **CTA Section**: Usually primary background with contrast text
4. **Components**: Reusable blocks (forms, testimonials, etc.)

### Background Color Rotation
- **Primary Light**: Light sections (#EDF5F0)
- **White**: Main content sections  
- **Neutral Cream**: Alternating sections (#F7F3E8)
- **Primary**: CTA sections (#2E5944)

### Grid Systems
- **Services Grid**: `repeat(auto-fit, minmax(300px, 1fr))`
- **Portfolio Grid**: `repeat(auto-fit, minmax(350px, 1fr))`
- **Standard Grid**: CSS Grid with responsive columns (1-3 columns)

### Responsive Breakpoints
- **sm**: 640px - Small tablets
- **md**: 768px - Tablets  
- **lg**: 1024px - Laptops
- **xl**: 1280px - Desktops
- **2xl**: 1536px - Large screens

## Animation & Transitions

### CSS Animations (Tailwind Config)
- **fade-in**: 0.5s ease-in-out opacity transition
- **slide-up**: 0.5s ease-out translateY + opacity  
- **bounce-light**: 2s infinite subtle bounce

### Component Transitions
- **Modal**: Fade in/out with backdrop
- **Mobile Menu**: Slide-in from right with overlay
- **Cards**: Hover lift effects
- **Buttons**: Transform and shadow transitions

## Accessibility Features

### ARIA Implementation
- **Landmarks**: main, nav, header, footer roles
- **Labels**: aria-label, aria-labelledby for all interactive elements  
- **States**: aria-expanded, aria-current for navigation
- **Live Regions**: aria-live for form feedback

### Keyboard Navigation
- **Focus Management**: Visible focus indicators
- **Tab Order**: Logical tabindex flow
- **Focus Trapping**: In modals and mobile menu
- **Skip Links**: Hidden navigation shortcuts

### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **Alt Text**: Descriptive image alternatives
- **Form Labels**: Explicit label associations
- **Status Messages**: Screen reader announcements