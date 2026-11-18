<template>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" :href="`${meta.path}#main`" :aria-label="`${dict.hero.fullName} — ${dict.nav.about}`">
        <span class="brand-mark" aria-hidden="true">{{ locale === 'fa' ? 'ا' : 'M' }}</span>
        <span class="brand-text">
          <span class="brand-name">{{ dict.hero.fullName }}</span>
          <span class="brand-role">{{ SITE.handle }} · {{ dict.seo.jobTitle }}</span>
        </span>
      </a>

      <nav class="nav" :aria-label="dict.nav.sections">
        <a v-for="link in links" :key="link.href" class="nav-link" :href="link.href">
          {{ link.label }}
        </a>
      </nav>

      <div class="header-actions">
        <div class="lang-switch" role="group" :aria-label="dict.nav.switchLabel">
          <a
            href="/"
            class="lang-link"
            :class="{ 'is-active': locale === 'en' }"
            :aria-current="locale === 'en' ? 'page' : undefined"
          >
            EN
          </a>
          <a
            href="/fa"
            class="lang-link"
            :class="{ 'is-active': locale === 'fa' }"
            :aria-current="locale === 'fa' ? 'page' : undefined"
          >
            فا
          </a>
        </div>

        <a class="header-cta ripple" :href="`${meta.path}#contact`">{{ dict.nav.getInTouch }}</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { SITE } from '~/constants/seo'
import { LOCALE_META, type Dictionary, type LocaleCode } from '~/i18n'

const { locale, dict } = defineProps<{
  locale: LocaleCode
  dict: Dictionary
}>()

const meta = computed(() => LOCALE_META[locale])

const links = computed(() => [
  { label: dict.nav.about, href: `${meta.value.path}#about` },
  { label: dict.nav.projects, href: `${meta.value.path}#projects` },
  { label: dict.nav.stack, href: `${meta.value.path}#stack` },
  { label: dict.nav.ai, href: `${meta.value.path}#ai` }
])
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
  gap: 24px;
  margin-inline-start: auto;
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

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: none;
}

/* Material 3 segmented button for the language switch */

.lang-switch {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  border: 1px solid var(--md-outline-variant);
  border-radius: var(--radius-pill);
  background: var(--md-surface-container-lowest);
  box-shadow: var(--md-elevation-1);
}

.lang-link {
  padding: 5px 11px;
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.06em;
  color: var(--md-on-surface-variant);
  transition:
    background-color 0.2s var(--md-motion-standard),
    color 0.2s var(--md-motion-standard);
}

.lang-link:hover {
  background: var(--md-surface-container-high);
  color: var(--md-on-surface);
}

.lang-link.is-active {
  background: var(--md-secondary-container);
  color: var(--md-on-secondary-container);
  font-weight: 600;
}

.header-cta {
  position: relative;
  padding: 9px 16px;
  border: 1px solid var(--md-outline);
  border-radius: var(--radius-pill);
  font-size: 0.84rem;
  font-weight: 500;
  overflow: hidden;
  isolation: isolate;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color 0.2s var(--md-motion-standard),
    border-color 0.2s var(--md-motion-standard),
    color 0.2s var(--md-motion-standard);
}

.header-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: currentColor;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s var(--md-motion-standard);
}

.header-cta:hover::before {
  opacity: var(--md-state-hover);
}

.header-cta:focus-visible::before {
  opacity: var(--md-state-focus);
}

.header-cta:hover {
  background: var(--md-surface-container-lowest);
  border-color: var(--md-on-surface);
}

@media (max-width: 900px) {
  .nav {
    display: none;
  }

  .header-actions {
    margin-left: auto;
  }
}

@media (max-width: 620px) {
  .brand-role {
    display: none;
  }

  .header-cta {
    display: none;
  }
}
</style>
