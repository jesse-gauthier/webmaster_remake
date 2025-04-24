/**
 * Accessibility Utilities
 * 
 * This file contains utility functions to enhance accessibility across the application.
 * It includes helpers for focus management, screen reader announcements, keyboard navigation,
 * and other accessibility-related functionality.
 */

/**
 * Focus Management
 */

/**
 * Traps focus within a specified element - useful for modals, dialogs, etc.
 * @param {Event} event - The keyboard event (used to check for Tab key)
 * @param {HTMLElement} container - The container to trap focus within
 */
export const trapFocus = (event, container) => {
    // Only process Tab key events
    if (event.key !== 'Tab') return;

    // Find all focusable elements
    const focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // If shift+tab on first element, move to last element
    if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
    }
    // If tab on last element, move to first element
    else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
    }
};

/**
 * Saves the currently focused element to restore focus later
 * @returns {HTMLElement} The element that currently has focus
 */
export const saveFocus = () => {
    return document.activeElement;
};

/**
 * Restores focus to a previously saved element
 * @param {HTMLElement} element - The element to restore focus to
 * @param {number} delay - Optional delay in ms before restoring focus
 */
export const restoreFocus = (element, delay = 0) => {
    if (!element || typeof element.focus !== 'function') return;

    if (delay > 0) {
        setTimeout(() => {
            element.focus();
        }, delay);
    } else {
        element.focus();
    }
};

/**
 * Screen Reader Announcements
 */

/**
 * Creates or returns an existing live region for screen reader announcements
 * @param {string} politeness - The aria-live politeness setting ('polite' or 'assertive')
 * @returns {HTMLElement} The live region element
 */
const getLiveRegion = (politeness = 'polite') => {
    const regionId = `sr-live-region-${politeness}`;
    let region = document.getElementById(regionId);

    if (!region) {
        region = document.createElement('div');
        region.id = regionId;
        region.setAttribute('aria-live', politeness);
        region.setAttribute('aria-relevant', 'additions text');
        region.setAttribute('aria-atomic', 'true');
        region.classList.add('sr-only');
        document.body.appendChild(region);
    }

    return region;
};

/**
 * Announces a message to screen readers
 * @param {string} message - The message to announce
 * @param {string} politeness - The aria-live politeness setting ('polite' or 'assertive')
 */
export const announce = (message, politeness = 'polite') => {
    const liveRegion = getLiveRegion(politeness);

    // Clear the region first (some screen readers may not announce if the content doesn't change)
    liveRegion.textContent = '';

    // Set the new message after a brief delay to ensure it's announced
    setTimeout(() => {
        liveRegion.textContent = message;
    }, 50);
};

/**
 * Keyboard Navigation
 */

/**
 * Handles arrow key navigation for a list of items
 * @param {Event} event - The keyboard event
 * @param {Array} items - Array of elements that can be navigated
 * @param {number} currentIndex - The index of the currently focused item
 * @param {Function} onNavigate - Callback when navigation occurs, receives new index
 * @returns {number} The new index after navigation
 */
export const handleArrowNavigation = (event, items, currentIndex, onNavigate) => {
    if (!items || items.length === 0) return currentIndex;

    let newIndex = currentIndex;

    switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
            event.preventDefault();
            newIndex = (currentIndex + 1) % items.length;
            break;
        case 'ArrowUp':
        case 'ArrowLeft':
            event.preventDefault();
            newIndex = (currentIndex - 1 + items.length) % items.length;
            break;
        case 'Home':
            event.preventDefault();
            newIndex = 0;
            break;
        case 'End':
            event.preventDefault();
            newIndex = items.length - 1;
            break;
        default:
            return currentIndex;
    }

    if (typeof onNavigate === 'function') {
        onNavigate(newIndex);
    }

    if (items[newIndex] && typeof items[newIndex].focus === 'function') {
        items[newIndex].focus();
    }

    return newIndex;
};

/**
 * Adds a skip link to the page
 * @param {string} targetId - The ID of the element to skip to
 * @param {string} label - The text for the skip link
 * @returns {HTMLElement} The created skip link element
 */
export const addSkipLink = (targetId, label) => {
    const skipLink = document.createElement('a');
    skipLink.href = `#${targetId}`;
    skipLink.className = 'skip-link';
    skipLink.textContent = label;
    document.body.insertBefore(skipLink, document.body.firstChild);
    return skipLink;
};

/**
 * Accessibility Checking
 */

/**
 * Checks if a color combination meets WCAG contrast requirements
 * @param {string} foreground - Foreground color in hex format (e.g., '#ffffff')
 * @param {string} background - Background color in hex format (e.g., '#000000')
 * @param {string} level - 'AA' or 'AAA' standard
 * @param {boolean} isLargeText - Whether the text is large (>=18pt or >=14pt bold)
 * @returns {boolean} Whether the contrast ratio meets the specified WCAG level
 */
export const meetsContrastRequirements = (foreground, background, level = 'AA', isLargeText = false) => {
    const ratio = getContrastRatio(foreground, background);

    if (level === 'AAA') {
        return isLargeText ? ratio >= 4.5 : ratio >= 7;
    }

    // Default to AA level
    return isLargeText ? ratio >= 3 : ratio >= 4.5;
};

/**
 * Calculates the contrast ratio between two colors
 * @param {string} foreground - Foreground color in hex format (e.g., '#ffffff')
 * @param {string} background - Background color in hex format (e.g., '#000000')
 * @returns {number} The contrast ratio
 */
export const getContrastRatio = (foreground, background) => {
    const fgLuminance = getLuminance(foreground);
    const bgLuminance = getLuminance(background);

    const lighter = Math.max(fgLuminance, bgLuminance);
    const darker = Math.min(fgLuminance, bgLuminance);

    return (lighter + 0.05) / (darker + 0.05);
};

/**
 * Calculates the relative luminance of a color
 * @param {string} color - Color in hex format (e.g., '#ffffff')
 * @returns {number} The relative luminance
 */
const getLuminance = (color) => {
    // Remove # if present
    color = color.replace('#', '');

    // Convert to RGB
    let r = parseInt(color.substr(0, 2), 16) / 255;
    let g = parseInt(color.substr(2, 2), 16) / 255;
    let b = parseInt(color.substr(4, 2), 16) / 255;

    // Apply gamma correction
    r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
    b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

    // Calculate luminance
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

/**
 * CSS Utilities
 */

/**
 * Generates CSS for visually hiding elements while keeping them accessible to screen readers
 * @returns {string} CSS for the sr-only class
 */
export const getSrOnlyCSS = () => `
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  .sr-only-focusable:not(:focus) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

/**
 * Generates CSS for focus indicators that meet WCAG requirements
 * @returns {string} CSS for focus indicators
 */
export const getFocusIndicatorCSS = () => `
  :focus {
    outline: 2px solid #4292ac;
    outline-offset: 2px;
  }
  
  :focus:not(:focus-visible) {
    outline: none;
  }
  
  :focus-visible {
    outline: 2px solid #4292ac;
    outline-offset: 2px;
  }
`;

export default {
    trapFocus,
    saveFocus,
    restoreFocus,
    announce,
    handleArrowNavigation,
    addSkipLink,
    meetsContrastRequirements,
    getContrastRatio,
    getSrOnlyCSS,
    getFocusIndicatorCSS
};
