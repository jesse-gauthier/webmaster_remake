/**
 * Sets up smooth scrolling for all anchor links with hash targets
 */
export function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })

        // Optionally update the URL hash without scrolling
        history.pushState(null, null, targetId)
      }
    })
  })
}
