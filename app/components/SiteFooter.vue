<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <p class="footer-name">{{ SITE.name }}</p>
        <p class="mono mono--muted">{{ SITE.handle }} · {{ SITE.city }}, Iran</p>
      </div>

      <nav class="footer-links" aria-label="Site files">
        <a href="/humans.txt">humans.txt</a>
        <a href="/llms.txt">llms.txt</a>
        <a href="/sitemap.xml">sitemap.xml</a>
        <a :href="SITE.github" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </nav>

      <p class="footer-meta mono">© 2026 {{ SITE.name }} · Built with Nuxt 4</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { SITE } from '~/constants/seo'
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--line);
  padding-block: 40px 48px;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.footer-brand {
  display: grid;
  gap: 6px;
}

.footer-name {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.025em;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 0.83rem;
}

.footer-links a {
  color: var(--ink-soft);
  transition: color 0.2s var(--ease);
}

.footer-links a:hover {
  color: var(--accent);
}

.footer-meta {
  flex-basis: 100%;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  color: var(--ink-muted);
  font-size: 0.66rem;
}
</style>
