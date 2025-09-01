# Navigation Structure

## Main Navigation Items

### Primary Navigation
- **Home** → "/" 
- **Services** → "/services" (with dropdown)
  - WordPress → "/wordPress"
  - Shopify → "/shopify" 
  - Monthly Maintenance → "/maintenance"
  - Consultations → "/consultations"
  - Web Apps → "/web-applications"
  - Startup Partnership → "/startup"
  - Technology Stack → "/technology-stack"
- **Portfolio** → "/portfolio"
- **Case Studies** → "/case-studies"
- **About** → "/about"
- **Blog** → "/blog"

### CTA Button
- **Text**: "Get in Touch"
- **Link**: "/contact"
- **Style**: Primary button

## Mobile Navigation
- Right-side sliding drawer
- Same navigation structure as desktop
- **Menu Title**: "Menu"
- Close button (X) in top right
- **CTA Button**: "Get in Touch" at bottom

## Header Layout
- Fixed header with white background and shadow
- **Logo**: Left side (Logo component)
- **Desktop Nav**: Right side, hidden on mobile (lg:flex)
- **Mobile Button**: Hamburger menu, hidden on desktop (lg:hidden)
- **Height**: Uses "h-header" class
- **Z-index**: Uses "z-sticky" class

## Accessibility Features
- ARIA labels and roles
- Focus management for mobile menu
- Keyboard navigation support (Tab, Escape)
- Focus trap in mobile menu
- Screen reader support
- Active state indicators with aria-current

## Mobile Menu Behavior
- Overlay background with click-to-close
- Slide-in animation from right
- Prevents body scrolling when open
- Auto-closes on window resize to desktop size
- Focus restoration when closed