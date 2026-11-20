<template>
  <div class="page">
    <div class="progress" aria-hidden="true">
      <i :style="{ transform: `scaleX(${progress})` }" />
    </div>

    <a class="skip" href="#main">{{ dict.skip }}</a>

    <SiteHeader :locale="locale" :dict="dict" />

    <main id="main">
      <section ref="heroEl" class="hero container" @pointermove="onPointerMove">
        <div class="hero-relief" aria-hidden="true">
          <svg viewBox="0 0 320 320" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round">
            <defs>
              <path id="hero-petal" d="M160 104 C 174 78 176 46 160 22 C 144 46 146 78 160 104 Z" />
              <circle id="hero-boss" cx="160" cy="40" r="2.4" />
            </defs>
            <circle cx="160" cy="160" r="152" />
            <circle cx="160" cy="160" r="146" />
            <circle cx="160" cy="160" r="58" />
            <circle cx="160" cy="160" r="50" />
            <g>
            <use href="#hero-petal" transform="rotate(0 160 160)" />
            <use href="#hero-petal" transform="rotate(30 160 160)" />
            <use href="#hero-petal" transform="rotate(60 160 160)" />
            <use href="#hero-petal" transform="rotate(90 160 160)" />
            <use href="#hero-petal" transform="rotate(120 160 160)" />
            <use href="#hero-petal" transform="rotate(150 160 160)" />
            <use href="#hero-petal" transform="rotate(180 160 160)" />
            <use href="#hero-petal" transform="rotate(210 160 160)" />
            <use href="#hero-petal" transform="rotate(240 160 160)" />
            <use href="#hero-petal" transform="rotate(270 160 160)" />
            <use href="#hero-petal" transform="rotate(300 160 160)" />
            <use href="#hero-petal" transform="rotate(330 160 160)" />
            </g>
            <g>
            <use href="#hero-boss" transform="rotate(15 160 160)" />
            <use href="#hero-boss" transform="rotate(45 160 160)" />
            <use href="#hero-boss" transform="rotate(75 160 160)" />
            <use href="#hero-boss" transform="rotate(105 160 160)" />
            <use href="#hero-boss" transform="rotate(135 160 160)" />
            <use href="#hero-boss" transform="rotate(165 160 160)" />
            <use href="#hero-boss" transform="rotate(195 160 160)" />
            <use href="#hero-boss" transform="rotate(225 160 160)" />
            <use href="#hero-boss" transform="rotate(255 160 160)" />
            <use href="#hero-boss" transform="rotate(285 160 160)" />
            <use href="#hero-boss" transform="rotate(315 160 160)" />
            <use href="#hero-boss" transform="rotate(345 160 160)" />
            </g>
            <circle cx="160" cy="160" r="13" />
          </svg>
        </div>

        <div class="hero-spotlight" aria-hidden="true" />

        <div class="hero-copy" data-reveal>
          <p class="eyebrow">
            <span class="eyebrow-dot" aria-hidden="true" />
            {{ dict.hero.eyebrow }}
          </p>

          <h1 class="hero-name display">
            {{ dict.hero.firstName }}
            <span class="hero-name-last">
              {{ accentHeadline(dict.hero.lastName) }}<span class="dot-accent">.</span>
            </span>
          </h1>

          <p class="hero-lede">{{ dict.hero.lede }}</p>

          <div class="hero-actions">
            <a class="btn btn--primary ripple" :href="`${meta.path}#contact`">
              {{ dict.hero.primaryCta }}
            </a>
            <a
              class="btn btn--ghost ripple"
              :href="SITE.github"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ dict.hero.secondaryCta }}
            </a>
          </div>
        </div>

        <aside class="hero-aside" data-reveal style="--delay: 120ms">
          <div class="hero-card">
            <p class="mono mono--muted">{{ dict.hero.currentlyLabel }}</p>
            <p>{{ dict.hero.currentlyBody }}</p>
            <div class="hero-card-meta">
              <span>{{ dict.hero.timezone }}</span>
              <span class="hero-time">{{ clock || '--:--' }}</span>
              <span>{{ dict.hero.remote }}</span>
            </div>
          </div>

          <div class="hero-mark" aria-hidden="true">
            <svg
              class="hero-mark-star"
              viewBox="0 0 120 100"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linejoin="round"
            >
              <polygon class="kaviani-rays" points="60 4 63.8 40.8 79.8 30.2 69.2 46.2 106 50 69.2 53.8 79.8 69.8 63.8 59.2 60 96 56.2 59.2 40.2 69.8 50.8 53.8 14 50 50.8 46.2 40.2 30.2 56.2 40.8" />
              <circle class="kaviani-ring" cx="60" cy="50" r="7.5" />
              <path class="kaviani-jewel" d="M60 42.4 L67.6 50 L60 57.6 L52.4 50 Z" />
            </svg>
          </div>
        </aside>
      </section>

      <section class="stack-strip" :aria-label="dict.stack.aria">
        <div class="container stack-strip-inner">
          <p class="mono mono--muted stack-strip-label">{{ dict.stack.label }}</p>
          <ul class="stack-list">
            <li v-for="(item, index) in dict.stack.items" :key="item.name" class="stack-item">
              <span class="mono stack-index">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="stack-name">{{ item.name }}</span>
              <span class="stack-note">{{ item.note }}</span>
            </li>
          </ul>
        </div>
      </section>

      <div class="marquee" aria-hidden="true">
        <div class="marquee-track">
          <span v-for="(word, index) in marqueeWords" :key="index" class="marquee-item">
            {{ word }}<em>·</em>
          </span>
        </div>
      </div>

      <section id="about" class="section container">
        <div class="section-grid">
          <div data-reveal>
            <p class="eyebrow">
              <span class="eyebrow-dot" aria-hidden="true" />
              {{ dict.about.eyebrow }}
            </p>
            <h2 class="h2 display">{{ dict.about.heading }}</h2>

            <div class="prose">
              <p v-for="paragraph in dict.about.paragraphs" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
          </div>

          <aside class="glance" data-reveal style="--delay: 100ms">
            <p class="mono mono--muted">{{ dict.about.glanceLabel }}</p>
            <dl class="glance-list">
              <div v-for="row in dict.about.glance" :key="row.label" class="glance-row">
                <dt>{{ row.label }}</dt>
                <dd>{{ row.value }}</dd>
              </div>
            </dl>
            <p class="glance-note">{{ dict.about.glanceNote }}</p>
          </aside>
        </div>
      </section>

      <section id="approach" class="section container">
        <div class="approach-grid">
          <div class="approach-lead" data-reveal>
            <p class="mono">{{ dict.approach.label }}</p>
            <h2 class="h2 display">{{ dict.approach.heading }}</h2>
            <p class="approach-lead-text">{{ dict.approach.lead }}</p>
          </div>

          <div class="approach-body" data-reveal style="--delay: 100ms">
            <p v-for="paragraph in dict.approach.body" :key="paragraph">{{ paragraph }}</p>
            <ul class="rules">
              <li v-for="(rule, index) in dict.approach.rules" :key="rule">
                <span class="mono">{{ String(index + 1).padStart(2, '0') }}</span>
                <span>{{ rule }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="process" class="section container">
        <header class="section-head" data-reveal>
          <p class="eyebrow">
            <span class="eyebrow-dot" aria-hidden="true" />
            {{ dict.process.eyebrow }}
          </p>
          <h2 class="h2 display">{{ dict.process.heading }}</h2>
          <p class="section-lede">{{ dict.process.lede }}</p>
        </header>

        <ul class="process-grid">
          <li
            v-for="(item, index) in process"
            :key="item.title"
            class="process-card"
            :class="`process-card--${item.tone}`"
            data-reveal
            :style="{ '--delay': `${(index % 3) * 70}ms` }"
          >
            <span class="mono process-index">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </li>
        </ul>
      </section>

      <section id="projects" class="section container">
        <header class="section-head" data-reveal>
          <p class="eyebrow">
            <span class="eyebrow-dot" aria-hidden="true" />
            {{ dict.projects.eyebrow }}
          </p>
          <h2 class="h2 display">{{ dict.projects.heading }}</h2>
          <p class="section-lede">{{ dict.projects.lede }}</p>
        </header>

        <div class="project-list">
          <article
            v-for="(project, index) in projects"
            :key="project.id"
            class="project"
            :style="{ '--tint': project.tint }"
            data-reveal
          >
            <div class="project-main">
              <div class="project-top">
                <span class="mono">{{ String(index + 1).padStart(2, '0') }}</span>
                <span class="project-year">{{ project.year }}</span>
              </div>

              <h3 class="project-name display">{{ project.name }}</h3>
              <p class="project-kind mono">{{ project.kind }}</p>
              <p class="project-summary">{{ project.summary }}</p>

              <ul class="project-features">
                <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
              </ul>

              <div class="project-actions">
                <a
                  v-for="link in project.links"
                  :key="link.href"
                  class="btn btn--dark ripple"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ link.label }} ↗
                </a>
                <span v-if="project.status" class="pill">{{ project.status }}</span>
              </div>
            </div>

            <div class="project-side">
              <ul class="project-stack" :aria-label="dict.projects.stackAria">
                <li v-for="tech in project.stack" :key="tech" class="chip">{{ tech }}</li>
              </ul>
              <span class="project-monogram" aria-hidden="true">{{ project.monogram }}</span>
            </div>
          </article>
        </div>
      </section>

      <section id="stack" class="section container">
        <header class="section-head" data-reveal>
          <p class="eyebrow">
            <span class="eyebrow-dot" aria-hidden="true" />
            {{ dict.skills.eyebrow }}
          </p>
          <h2 class="h2 display">{{ dict.skills.heading }}</h2>
          <p class="section-lede">{{ dict.skills.lede }}</p>
        </header>

        <div class="skill-grid">
          <div
            v-for="group in dict.skills.groups"
            :key="group.label"
            class="skill-group"
            data-reveal
          >
            <p class="mono mono--muted">{{ group.label }}</p>
            <ul class="chip-list">
              <li v-for="item in group.items" :key="item" class="chip">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="ai" class="section container">
        <div class="ai-band" data-reveal>
          <p class="eyebrow eyebrow--invert">
            <span class="eyebrow-dot" aria-hidden="true" />
            {{ dict.ai.eyebrow }}
          </p>
          <h2 class="h2 display">
            {{ accentHeadline(dict.ai.heading) }}<span class="dot-accent">.</span>
          </h2>
          <p class="ai-band-text">{{ dict.ai.lede }}</p>
        </div>

        <ul class="ai-grid">
          <li
            v-for="(note, index) in dict.ai.notes"
            :key="note.title"
            class="ai-card"
            data-reveal
            :style="{ '--delay': `${index * 60}ms` }"
          >
            <span class="mono mono--muted">{{ note.label }}</span>
            <h3>{{ note.title }}</h3>
            <p>{{ note.body }}</p>
          </li>
        </ul>

        <p class="ai-foot" data-reveal>{{ dict.ai.foot }}</p>
      </section>

      <section id="contact" class="section container">
        <div class="contact" data-reveal>
          <div>
            <p class="eyebrow">
              <span class="eyebrow-dot" aria-hidden="true" />
              {{ dict.contact.eyebrow }}
            </p>
            <h2 class="contact-title display">
              {{ accentHeadline(dict.contact.heading) }}<span class="dot-accent">.</span>
            </h2>
            <p class="contact-lede">{{ dict.contact.lede }}</p>
          </div>

          <div class="contact-actions">
            <a class="contact-email ripple" :href="`mailto:${CONTACT.email}`">
              {{ CONTACT.email }}
              <span aria-hidden="true">↗</span>
            </a>

            <ul class="social-list">
              <li v-for="social in CONTACT.socials" :key="social.label">
                <a :href="social.href" target="_blank" rel="noopener noreferrer">
                  <span>{{ social.label }}</span>
                  <span class="mono">{{ social.handle }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter :dict="dict" />
  </div>
</template>

<script setup lang="ts">
import { CONTACT, PROCESS_TONES, PROJECTS } from '~/constants/content'
import { SITE } from '~/constants/seo'
import { DICTIONARIES, LOCALE_META, type Dictionary, type LocaleCode } from '~/i18n'

const { locale } = defineProps<{ locale: LocaleCode }>()

const dict: Dictionary = DICTIONARIES[locale]
const meta = LOCALE_META[locale]

type ProjectId = keyof Dictionary['projects']['items']

usePortfolioSeo(locale)
useReveal()

const projects = computed(() =>
  PROJECTS.map((project) => {
    const text = dict.projects.items[project.id as ProjectId]
    return {
      ...project,
      kind: text.kind,
      summary: text.summary,
      features: text.features,
      status: text.status,
      links: project.links.map((link, index) => ({
        ...link,
        label: text.links[index] ?? ''
      }))
    }
  })
)

const process = PROCESS_TONES.map((tone, index) => ({
  ...dict.process.items[index],
  tone
}))

const marqueeWords = [...dict.stack.marquee, ...dict.stack.marquee]

/* Headings already carry their own full stop: never add a second accent dot. */
function accentHeadline(text: string) {
  return text.replace(/[.۔]+$/, '')
}

/* Material 3 ripple: one delegated listener instead of per-element handlers. */
function startRipple(event: PointerEvent) {
  const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('.ripple')
  if (!target) return
  const rect = target.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height) * 2
  const wave = document.createElement('span')
  wave.className = 'ripple-wave'
  wave.style.width = `${size}px`
  wave.style.height = `${size}px`
  wave.style.left = `${event.clientX - rect.left - size / 2}px`
  wave.style.top = `${event.clientY - rect.top - size / 2}px`
  target.appendChild(wave)
  wave.addEventListener('animationend', () => wave.remove())
}

/* Scroll progress */
const progress = ref(0)

function onScroll() {
  const root = document.documentElement
  const max = root.scrollHeight - root.clientHeight
  progress.value = max > 0 ? Math.min(root.scrollTop / max, 1) : 0
}

/* Hero spotlight */
const heroEl = ref<HTMLElement | null>(null)

function onPointerMove(event: PointerEvent) {
  const el = heroEl.value
  if (!el || event.pointerType === 'touch') return
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  el.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

/* Local time in Ardabil */
const clock = ref('')
let clockTimer: ReturnType<typeof setInterval> | undefined

function tick() {
  clock.value = new Intl.DateTimeFormat(locale === 'fa' ? 'fa-IR' : 'en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Tehran'
  }).format(new Date())
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  document.addEventListener('pointerdown', startRipple)
  tick()
  clockTimer = setInterval(tick, 30000)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  document.removeEventListener('pointerdown', startRipple)
  if (clockTimer) clearInterval(clockTimer)
})
</script>
