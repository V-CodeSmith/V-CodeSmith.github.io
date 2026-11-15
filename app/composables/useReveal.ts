/**
 * Reveals [data-reveal] blocks as they enter the viewport.
 * The `reveal-ready` class is only added on the client, so content stays
 * visible when JavaScript does not run.
 */
export function useReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!nodes.length) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.documentElement.classList.add('reveal-ready')

    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-in'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          observer?.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    nodes.forEach((node) => observer?.observe(node))
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
