<template>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" :href="`${meta.path}#main`" :aria-label="`${dict.hero.fullName} — ${dict.nav.about}`">
        <span class="brand-mark" aria-hidden="true">
          <svg
            class="brand-cypress"
            viewBox="0 0 24 34"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M12 32C6.6 26 4.9 19.6 5.7 13.6 6.4 8.2 8.8 4.4 12 3c3.2 1.4 5.6 5.2 6.3 10.6.8 6-1 12.4-6.3 18.4Z"
            />
            <path d="M12 12.4c-2.4 1-3.9 3-4.3 5.9" />
            <path d="M12 12.4c2.4 1 3.9 3 4.3 5.9" />
            <path d="M12 19.6c-1.9.9-3 2.4-3.3 4.4" />
            <path d="M12 19.6c1.9.9 3 2.4 3.3 4.4" />
          </svg>
        </span>
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
    <Teleport to="body">
      <nav class="mobile-nav" :aria-label="dict.nav.sections">
        <a v-for="link in links" :key="link.href" class="mobile-nav-link" :href="link.href">
          <span class="mobile-nav-mark" aria-hidden="true" />
          {{ link.label }}
        </a>
        <a class="mobile-nav-link mobile-nav-link--cta" :href="`${meta.path}#contact`">
          <span class="mobile-nav-mark" aria-hidden="true" />
          {{ dict.nav.getInTouch }}
        </a>
      </nav>
    </Teleport>
    <div class="merlon header-merlon" aria-hidden="true" />
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
  background: rgba(7, 15, 24, 0.84);
  backdrop-filter: blur(18px) saturate(1.05);
  -webkit-backdrop-filter: blur(18px) saturate(1.05);
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
  gap: 12px;
  flex: none;
}

/* An engraved seal instead of an app avatar. */
.brand-mark {
  position: relative;
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid var(--gold-line-strong);
  background: linear-gradient(158deg, rgba(217, 180, 108, 0.16), rgba(217, 180, 108, 0.02));
  color: var(--gold);
}

/* Achaemenid cypress — the tree of freedom — inside the seal. */
.brand-cypress {
  position: relative;
  z-index: 1;
  width: 18px;
  height: auto;
}

.brand-mark::after {
  content: '';
  position: absolute;
  inset: 4px;
  border: 1px solid var(--gold-line);
}

.brand-text {
  display: grid;
  gap: 2px;
  line-height: 1.15;
}

.brand-name {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: var(--ink);
}

.brand-role {
  font-family: var(--font-mono);
  font-size: 0.56rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  opacity: 0.78;
}

.nav {
  display: flex;
  align-items: center;
  gap: 26px;
  margin-inline-start: auto;
}

.nav-link {
  position: relative;
  font-size: 0.82rem;
  color: var(--ink-soft);
  transition: color 0.2s var(--ease);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 1px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s var(--ease);
}

.nav-link:hover {
  color: var(--gold);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: none;
}

/* Two carved plaques: EN / فا */
.lang-switch {
  display: inline-flex;
  align-items: stretch;
  border: 1px solid var(--gold-line);
}

.lang-link {
  padding: 6px 12px;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-muted);
  transition:
    background-color 0.2s var(--motion),
    color 0.2s var(--motion);
}

.lang-link + .lang-link {
  border-inline-start: 1px solid var(--gold-line);
}

.lang-link:hover {
  color: var(--gold);
  background: var(--gold-wash);
}

.lang-link.is-active {
  background: var(--gold-wash);
  color: var(--gold);
  box-shadow: inset 0 -1px 0 var(--gold);
  font-weight: 600;
}

.header-cta {
  --chamfer: 7px;
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 9px 16px;
  border: 1px solid var(--gold-line-strong);
  clip-path: polygon(
    var(--chamfer) 0,
    100% 0,
    100% calc(100% - var(--chamfer)),
    calc(100% - var(--chamfer)) 100%,
    0 100%,
    0 var(--chamfer)
  );
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
  overflow: hidden;
  isolation: isolate;
  -webkit-tap-highlight-color: transparent;
  transition:
    border-color 0.2s var(--motion),
    color 0.2s var(--motion);
}

.header-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: currentColor;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s var(--motion);
}

.header-cta:hover::before {
  opacity: 0.12;
}

.header-cta:hover {
  border-color: var(--gold);
}

.header-cta:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 2px var(--turquoise);
}

.header-merlon {
  position: absolute;
  inset-inline: 0;
  bottom: -13px;
  pointer-events: none;
}

.mobile-nav {
  display: none;
}

@media (max-width: 900px) {
  .nav {
    display: none;
  }

  .header-actions {
    margin-left: auto;
  }

  /* A thumb-reachable frieze of section plaques: the mobile tab bar. */
  .mobile-nav {
    position: fixed;
    inset-inline: 0;
    bottom: 0;
    z-index: 55;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(0, 1fr);
    gap: 1px;
    padding: 5px 6px calc(5px + env(safe-area-inset-bottom));
    border-top: 1px solid var(--gold-line-strong);
    background: rgba(6, 13, 21, 0.94);
    backdrop-filter: blur(18px) saturate(1.05);
    -webkit-backdrop-filter: blur(18px) saturate(1.05);
  }

  .mobile-nav-link {
    display: grid;
    justify-items: center;
    align-content: center;
    gap: 6px;
    min-height: 44px;
    padding: 4px 2px;
    font-family: var(--font-mono);
    font-size: 0.55rem;
    letter-spacing: 0.1em;
    line-height: 1.1;
    text-align: center;
    color: var(--ink-soft);
    -webkit-tap-highlight-color: transparent;
  }

  .mobile-nav-mark {
    width: 5px;
    height: 5px;
    border: 1px solid var(--gold);
    transform: rotate(45deg);
    opacity: 0.5;
  }

  .mobile-nav-link--cta {
    color: var(--gold);
  }

  .mobile-nav-link--cta .mobile-nav-mark {
    background: var(--gold);
    opacity: 0.9;
  }

  .mobile-nav-link:active .mobile-nav-mark {
    background: var(--gold);
    opacity: 1;
  }

  html[dir='rtl'] .mobile-nav-link {
    letter-spacing: 0;
    font-size: 0.6rem;
  }
}

@media (max-width: 640px) {
  .header-inner {
    gap: 12px;
  }

  .brand {
    gap: 10px;
  }

  .brand-mark {
    width: 32px;
    height: 32px;
  }

  .brand-cypress {
    width: 17px;
  }

  .brand-name {
    font-size: 0.94rem;
  }

  .brand-role {
    font-size: 0.55rem;
  }

  .lang-link {
    padding: 6px 10px;
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

@media (max-width: 360px) {
  .mobile-nav-link {
    font-size: 0.5rem;
    letter-spacing: 0.04em;
  }
}
</style>
