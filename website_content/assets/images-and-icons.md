# Images and Icons Inventory

## Key Images Used

### Hero & Marketing Images
- **Hero Image**: `/images/hero-image.jpg`
  - Alt text: "Web design and development illustration"
  - Dimensions: 600x400
  - Fallback: Placeholder with "Web Masters" text
  - Used on: Homepage hero section

- **Logo Icon**: `/images/logo_icon.png`
  - Usage: Preloaded, social sharing, SEO metadata
  - Dimensions: 1200x630 (for social sharing)
  - Used in: Header, social meta tags, favicons

- **Favicon**: `/favicon.ico`
  - Preloaded asset
  - Standard favicon format

### Case Study Client Logos
- **County Cooperage**: `/src/assets/countycooperage.svg` (42.07 kB, gzips to 14.80 kB)
- **Got to Go Ottawa**: `/src/assets/gottago.svg` (8.02 kB, gzips to 2.70 kB)  
- **LumaCRM**: `/src/assets/lumacrm.svg` (13.80 kB, gzips to 5.91 kB)
- **UpMedia**: `/src/assets/upmedia.svg`

These are actual client logos used in case studies and portfolio sections.

## Icon System

### FontAwesome Icons (Large Bundle - 237KB Total)
The website uses FontAwesome for icons, but this creates a performance issue:

#### Icon Files
- **fa-solid-900.woff2**: 113.11 kB (solid icons)
- **fa-brands-400.woff2**: 101.09 kB (brand icons - social media, platforms)
- **fa-regular-400.woff2**: 18.89 kB (outlined icons)
- **fa-v4compatibility.woff2**: 4.13 kB (legacy compatibility)

#### Commonly Used Icons

**Navigation & UI**
- `fas fa-code` - Code/development icon
- `fas fa-server` - Server/backend icon  
- `fas fa-shopping-cart` - E-commerce/platforms icon
- `fas fa-search` - Search/SEO icon
- `fas fa-cog` - Settings/maintenance icon
- `fas fa-bars` - Hamburger menu
- `fas fa-times` - Close/X button

**Brand Icons** 
- `fab fa-vuejs` - Vue.js logo (accent color)
- `fab fa-react` - React logo (blue)
- `fab fa-js` - JavaScript logo (yellow)
- `fab fa-css3-alt` - CSS3 logo (blue)
- `fab fa-node-js` - Node.js logo (green)
- `fab fa-php` - PHP logo (purple)
- `fab fa-wordpress` - WordPress logo
- `fab fa-shopify` - Shopify logo

**Business & Contact**
- `fas fa-envelope` - Email icon
- `fas fa-phone` - Phone icon
- `fas fa-map-marker-alt` - Location icon
- `fas fa-star` - Rating stars
- `fas fa-check-circle` - Success/verified icon
- `fas fa-clock` - Time/schedule icon
- `fas fa-dollar-sign` - Pricing icon

### SVG Icons in Components
Custom SVG icons are used inline in components for:

**Services Page Custom SVG**
- Desktop and mobile device illustration
- Code brackets overlay
- Menu lines
- Circle elements
- Comprehensive responsive web design visualization

**Hero Section Decorative Elements**
- Star icons for ratings
- Shield/verification badges  
- Lightning bolt for speed
- Dollar sign for pricing

## Image Optimization Recommendations

### Current Issues
1. **FontAwesome Overload**: 237KB of icon fonts when probably only 20-30 icons are actually used
2. **Missing Image Optimization**: No WebP format or responsive images
3. **No Lazy Loading**: All images load immediately

### Suggested Improvements
1. **Replace FontAwesome**: Use individual SVG icons or icon library like Heroicons/Lucide
2. **Optimize Client Logos**: Already SVG format (good), but could potentially inline small ones
3. **Add Image Formats**: WebP with fallbacks for better compression
4. **Implement Lazy Loading**: For below-the-fold images
5. **Responsive Images**: srcset for different screen sizes

## Asset Organization

### Current Structure (Build Output)
```
dist/assets/
├── fonts/
│   ├── fa-solid-900.woff2
│   ├── fa-brands-400.woff2
│   ├── fa-regular-400.woff2
│   └── fa-v4compatibility.woff2
├── icons/
│   ├── countycooperage.svg
│   ├── gottago.svg
│   ├── lumacrm.svg
│   └── upmedia.svg
├── images/
│   ├── hero-image.jpg
│   └── logo_icon.png
└── styles/
    └── [CSS files]
```

### Recommended Structure
```
assets/
├── icons/
│   ├── ui/ (inline SVGs)
│   ├── brands/ (brand logos)
│   └── social/ (social media icons)
├── images/
│   ├── hero/ (hero images in multiple formats)
│   ├── portfolio/ (project screenshots)
│   └── team/ (team photos if needed)
└── fonts/ (only critical fonts)
```

## Performance Impact

### Current Asset Sizes
- **Total Icon Fonts**: 237KB (significant impact)
- **Client Logos**: ~64KB total (reasonable for SVG)
- **Images**: Varies by hero image size

### Optimization Potential
- **Icon Fonts**: Could reduce to ~20-30KB with selective icons
- **Images**: 20-40% reduction with WebP format
- **Loading**: Faster perceived performance with lazy loading