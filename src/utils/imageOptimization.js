/**
 * Image optimization utilities
 */

/**
 * Generate responsive image sizes for different breakpoints
 * @param {string} baseSrc - Base image source
 * @param {Object} options - Options for image generation
 * @returns {Object} Object with different image sizes
 */
export function generateResponsiveImages(baseSrc, options = {}) {
  const {
    sizes = ['small', 'medium', 'large'],
    quality = 85,
    format = 'webp'
  } = options

  // In a real implementation, you'd use an image optimization service
  // For now, we'll return the same image but could be enhanced with services like:
  // - Cloudinary
  // - ImageKit
  // - Sharp (server-side)
  
  return {
    small: baseSrc,   // 400w
    medium: baseSrc,  // 800w
    large: baseSrc,   // 1200w
    default: baseSrc
  }
}

/**
 * Generate WebP sources with fallbacks
 * @param {string} src - Original image source
 * @returns {Object} Sources for different formats
 */
export function generateWebPSources(src) {
  const extension = src.split('.').pop().toLowerCase()
  const baseName = src.replace(`.${extension}`, '')
  
  return {
    webp: `${baseName}.webp`,
    avif: `${baseName}.avif`,
    fallback: src
  }
}

/**
 * Calculate aspect ratio from dimensions
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @returns {number} Aspect ratio as percentage
 */
export function calculateAspectRatio(width, height) {
  return (height / width) * 100
}

/**
 * Preload critical images
 * @param {Array} imageSources - Array of image sources to preload
 * @param {Object} options - Preload options
 */
export function preloadImages(imageSources, options = {}) {
  const { as = 'image', fetchPriority = 'high' } = options
  
  imageSources.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = as
    link.href = src
    if (fetchPriority) {
      link.fetchPriority = fetchPriority
    }
    document.head.appendChild(link)
  })
}

/**
 * Lazy load images with Intersection Observer
 * @param {Element} element - Image element to observe
 * @param {Object} options - Observer options
 * @returns {IntersectionObserver} Observer instance
 */
export function createImageObserver(element, options = {}) {
  const {
    rootMargin = '50px',
    threshold = 0.1,
    onVisible = () => {}
  } = options
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        onVisible(entry.target)
        observer.unobserve(entry.target)
      }
    },
    {
      rootMargin,
      threshold
    }
  )
  
  observer.observe(element)
  return observer
}

/**
 * Optimize image loading performance
 * @param {string} src - Image source
 * @param {Object} options - Optimization options
 * @returns {Object} Optimized image configuration
 */
export function optimizeImageLoading(src, options = {}) {
  const {
    priority = 'normal',
    sizes = '100vw',
    quality = 85,
    format = 'auto'
  } = options
  
  // Determine loading strategy based on priority
  const loading = priority === 'high' ? 'eager' : 'lazy'
  const decoding = priority === 'high' ? 'sync' : 'async'
  const fetchPriority = priority === 'high' ? 'high' : 'auto'
  
  return {
    src,
    loading,
    decoding,
    fetchPriority,
    sizes,
    ...generateResponsiveImages(src, { quality, format })
  }
}

/**
 * Image format detection and fallback
 * @param {string} src - Image source
 * @returns {Promise<boolean>} Whether WebP is supported
 */
export function supportsWebP() {
  return new Promise(resolve => {
    const webP = new Image()
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2)
    }
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  })
}

/**
 * Convert images to modern formats (client-side detection)
 * @param {string} src - Original image source
 * @param {Object} options - Conversion options
 * @returns {Promise<string>} Optimized image source
 */
export async function getOptimizedImageSrc(src, options = {}) {
  const { preferWebP = true, fallback = src } = options
  
  if (preferWebP) {
    const webpSupported = await supportsWebP()
    if (webpSupported) {
      const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
      // In production, you'd check if the WebP version exists
      return webpSrc
    }
  }
  
  return fallback
}

/**
 * Image compression utility (client-side)
 * @param {File} file - Image file to compress
 * @param {Object} options - Compression options
 * @returns {Promise<Blob>} Compressed image blob
 */
export function compressImage(file, options = {}) {
  const {
    maxWidth = 1920,
    maxHeight = 1080,
    quality = 0.8,
    format = 'image/jpeg'
  } = options
  
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    
    img.onload = () => {
      // Calculate new dimensions
      let { width, height } = img
      
      if (width > maxWidth) {
        height = (height * maxWidth) / width
        width = maxWidth
      }
      
      if (height > maxHeight) {
        width = (width * maxHeight) / height
        height = maxHeight
      }
      
      // Set canvas size and draw image
      canvas.width = width
      canvas.height = height
      ctx.drawImage(img, 0, 0, width, height)
      
      // Convert to blob
      canvas.toBlob(resolve, format, quality)
    }
    
    img.src = URL.createObjectURL(file)
  })
}

/**
 * Create picture element with multiple sources
 * @param {string} src - Base image source
 * @param {Object} options - Picture options
 * @returns {HTMLElement} Picture element
 */
export function createPictureElement(src, options = {}) {
  const {
    alt = '',
    className = '',
    sizes = '100vw',
    webpSrc = null,
    avifSrc = null
  } = options
  
  const picture = document.createElement('picture')
  
  // Add AVIF source if available
  if (avifSrc) {
    const avifSource = document.createElement('source')
    avifSource.srcset = avifSrc
    avifSource.type = 'image/avif'
    avifSource.sizes = sizes
    picture.appendChild(avifSource)
  }
  
  // Add WebP source if available
  if (webpSrc) {
    const webpSource = document.createElement('source')
    webpSource.srcset = webpSrc
    webpSource.type = 'image/webp'
    webpSource.sizes = sizes
    picture.appendChild(webpSource)
  }
  
  // Add fallback img element
  const img = document.createElement('img')
  img.src = src
  img.alt = alt
  img.className = className
  img.loading = 'lazy'
  img.decoding = 'async'
  picture.appendChild(img)
  
  return picture
}

export default {
  generateResponsiveImages,
  generateWebPSources,
  calculateAspectRatio,
  preloadImages,
  createImageObserver,
  optimizeImageLoading,
  supportsWebP,
  getOptimizedImageSrc,
  compressImage,
  createPictureElement
}