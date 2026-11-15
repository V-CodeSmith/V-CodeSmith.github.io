<template>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#main" aria-label="Mohammad Azhdari — back to top">
        <span class="brand-mark" aria-hidden="true">M</span>
        <span class="brand-text">
          <span class="brand-name">{{ SITE.name }}</span>
          <span class="brand-role">{{ SITE.handle }} · fullstack</span>
        </span>
      </a>

      <nav class="nav" aria-label="Sections">
        <a v-for="link in links" :key="link.href" class="nav-link" :href="link.href">
          {{ link.label }}
        </a>
      </nav>

      <a class="header-cta" href="#contact">Get in touch</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { SITE } from '~/constants/seo'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'AI', href: '#ai' }
]
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid var(--line);
  background: rgba(242, 239, 233, 0.82);
  backdrop-filter: blur(14px) saturate(1.1);
  -webkit-backdrop-filter: blur(14px) saturate(1.1);
}

.header-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  min-height: var(--header-h);
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;
  flex: none;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 31px;
  height: 31px;
  border-radius: 9px;
  corner-shape: squircle;
  background: var(--ink);
  color: var(--paper);
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.brand-text {
  display: grid;
  gap: 1px;
  line-height: 1.15;
}

.brand-name {
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: -0.015em;
}

.brand-role {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

.nav {
  display: flex;
  align-items: center;
  gap: 26px;
  margin-left: auto;
}

.nav-link {
  position: relative;
  font-size: 0.87rem;
  color: var(--ink-soft);
  transition: color 0.2s var(--ease);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s var(--ease);
}

.nav-link:hover {
  color: var(--ink);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.header-cta {
  flex: none;
  padding: 9px 16px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  font-size: 0.84rem;
  font-weight: 500;
  transition:
    background-color 0.25s var(--ease),
    color 0.25s var(--ease),
    border-color 0.25s var(--ease);
}

.header-cta:hover {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--paper);
}

@media (max-width: 760px) {
  .nav {
    display: none;
  }

  .header-cta {
    margin-left: auto;
  }
}

@media (max-width: 420px) {
  .brand-role {
    display: none;
  }
}
</style>
