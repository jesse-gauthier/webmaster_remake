/**
 * Utility functions for generating consistent gradients
 */

// Map of categories to specific gradient colors for consistency
const categoryGradients = {
  "Web Development":
    "background: linear-gradient(135deg, #2E5944 0%, #4292AC 100%)",
  SEO: "background: linear-gradient(135deg, #4292AC 0%, #68B3C6 100%)",
  "Website Maintenance":
    "background: linear-gradient(135deg, #5E8F77 0%, #8EAE9D 100%)",
  "E-commerce": "background: linear-gradient(135deg, #357D96 0%, #4292AC 100%)",
  Design: "background: linear-gradient(135deg, #1B3D2F 0%, #2E5944 100%)",
};

/**
 * Generates a visually appealing gradient based on the input string
 * @param {string} category - The category or string to base the gradient on
 * @returns {string} - CSS background style string
 */
export const getGradientForCategory = (category) => {
  // Use mapped gradient if available, otherwise generate one
  if (categoryGradients[category]) {
    return categoryGradients[category];
  }

  // Generate a deterministic gradient based on the string (fallback)
  const hash = category.split("").reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  const h1 = Math.abs(hash % 360);
  const h2 = (h1 + 40) % 360; // slightly different hue

  return `background: linear-gradient(135deg, hsl(${h1}, 70%, 35%) 0%, hsl(${h2}, 80%, 45%) 100%)`;
};

/**
 * Provides a suitable text color (white or dark) based on the category's gradient
 * @param {string} category - The category
 * @returns {string} - CSS color style
 */
export const getTextColorForCategory = (category) => {
  // All our gradients are dark enough for white text
  return "color: white";
};

export default {
  getGradientForCategory,
  getTextColorForCategory,
};
