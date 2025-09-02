export default defineNuxtPlugin(() => {
  const { $config } = useNuxtApp()
  const clarityProjectId = 'f8qppto63t'

  // Only run in production and if project ID is provided
  if (process.client && clarityProjectId && process.env.NODE_ENV === 'production') {
    // Microsoft Clarity tracking script
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", clarityProjectId);

    console.log('Microsoft Clarity initialized with project ID:', clarityProjectId)
  } else if (process.client) {
    console.log('Microsoft Clarity disabled in development or missing project ID')
  }
})
