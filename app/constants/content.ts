import { SITE } from './seo'

export const MAIN_STACK = [
  { name: 'Vue', note: 'Vue 3, Composition API' },
  { name: 'Nuxt', note: 'Nuxt 4, SSR and static' },
  { name: 'Laravel', note: 'Laravel and Blade' },
  { name: 'TypeScript', note: 'Typed end to end' }
] as const

export const AT_A_GLANCE = [
  { label: 'Based in', value: 'Ardabil, Iran' },
  { label: 'Working', value: 'Remote-first' },
  { label: 'Focus', value: 'Vue 3 and Nuxt 4' },
  { label: 'Languages', value: 'Persian, English' },
  { label: 'Updated', value: 'November 2026' }
] as const

export const APPROACH = {
  lead: 'Solo by default. In pairs, I take the frontend.',
  body: [
    'I prefer plain CSS, few dependencies, and code that reads like one person wrote it on purpose. Every project gets its own components and its own rhythm; no two should look alike.',
    'Structured, simple, dynamic where it earns it. If a new developer cannot tell where things live in thirty seconds, the structure failed.'
  ],
  rules: [
    'Design in the browser, not in a screenshot.',
    'Ship the states nobody remembers: loading, empty, error, success.',
    'Motion is signal. If it does not explain something, it goes.',
    'One accent colour, used sparingly enough to still mean something.'
  ]
} as const

export const PROCESS = [
  {
    title: 'Style',
    body: 'Minimal and current. Nothing heavy, nothing dated. Every project gets its own look instead of a recycled template.',
    tone: 'plain'
  },
  {
    title: 'Motion',
    body: 'Light animation with weight. CSS first, GSAP only for the moments that matter. Never decoration, always signal.',
    tone: 'plain'
  },
  {
    title: 'Security',
    body: 'Encryption and security are defaults, not features. Every input is hostile until proven otherwise.',
    tone: 'outline'
  },
  {
    title: 'Structure',
    body: 'Clean folders, clean assets, obvious names. A new developer should find any file in half a minute.',
    tone: 'plain'
  },
  {
    title: 'Version control',
    body: 'Git from the first commit. Small branches, readable history, no force-pushes to shared branches.',
    tone: 'plain'
  },
  {
    title: 'Docs',
    body: 'Optional until someone else reads the code. Then they get a README that explains the why, not the what.',
    tone: 'outline'
  },
  {
    title: 'DevOps',
    body: 'Small helpers that remove friction: deploy scripts, one-command setups, boring management.',
    tone: 'accent'
  },
  {
    title: 'State',
    body: 'More care for loading, error, empty and success than most interfaces bother with. That is where products are judged.',
    tone: 'plain'
  }
] as const

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  name: string
  kind: string
  stack: string[]
  year: string
  summary: string
  features: string[]
  links: ProjectLink[]
  status?: string
  monogram: string
  tint: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Karan',
    kind: 'Project and task management platform',
    stack: ['Vue 3', 'Laravel', 'Blade'],
    year: '2025 — now',
    summary:
      'Project and task management for organisations: the full lifecycle from planning to monitoring and final evaluation, with individual and team task organisation and shared progress tracking.',
    features: [
      'Full lifecycle, planning through final evaluation',
      'Individual and team task organisation',
      'Shared progress tracking across a project',
      'Main app in Vue 3, production and plan sites in Blade'
    ],
    links: [{ label: 'Open Karan', href: 'https://karanim.ir/' }],
    monogram: 'K',
    tint: '#e5e7f4'
  },
  {
    name: 'Scan Business',
    kind: 'Business diagnostics and renewal',
    stack: ['Vue 3', 'Laravel'],
    year: '2025',
    summary:
      'A business diagnostics and renewal platform backed by the Ministry of Industry, Mine and Trade: a free initial diagnosis, then detailed assessments against recognised maturity models.',
    features: [
      'Free initial business diagnosis',
      'Assessments against EFQM, BPMM, APQC and Palladium',
      'Scoped for small, medium and large organisations',
      'Readiness scoring by headcount, assets and annual sales'
    ],
    links: [{ label: 'Open Scan Business', href: 'https://scanbusiness.ir/' }],
    monogram: 'S',
    tint: '#ede9dc'
  },
  {
    name: 'NIGC',
    kind: 'Staff CRM, field PWA and Gaziom',
    stack: ['Vue 3', 'PWA'],
    year: '2024 — 2025',
    summary:
      'Three independent Vue applications for the National Iranian Gas Company: a staff CRM, a field-operations PWA and a reward-based app. Each with its own identity rather than one shared template.',
    features: [
      'Three separate apps, one team',
      'Multi-theme support across all three',
      'Realtime photo capture for field tasks',
      'Security-focused build for internal use',
      'Rich, current-generation interfaces'
    ],
    links: [
      { label: 'Open CRM', href: 'https://crm.nigc-ar.ir/' },
      { label: 'Open PWA', href: 'https://es.nigc-ar.ir/pwa2' }
    ],
    monogram: 'N',
    tint: '#e2e9f1'
  },
  {
    name: 'Cafe Mahour',
    kind: 'Reservation-first cafe platform',
    stack: ['Nuxt 3'],
    year: '2023',
    summary:
      'A cafe site designed around consultants and brokers who need a quiet table for a client meeting: reserve a space, order from the menu, get to business. Full restaurant logic behind a reservation front.',
    features: [
      'Table reservations with bundled packages',
      'Cafe-defined menu and products',
      'Two-level admin: cafe owner and platform owner',
      'Full restaurant flow, not a static menu page'
    ],
    links: [],
    status: 'Private deployment',
    monogram: 'C',
    tint: '#efe4d5'
  },
  {
    name: 'Baam',
    kind: 'Professional qualification system',
    stack: ['Nuxt 4'],
    year: '2025 — now',
    summary:
      'A platform where inspectors, evaluators and auditors prove their readiness: build a resume, pick the roles you want, and see exactly what is missing for each path.',
    features: [
      'Built-in resume maker',
      'Role selection and favourites',
      'Automatic per-role skill-gap analysis',
      'Suggested assessments, courses and reading',
      'Tasks and states handled end to end'
    ],
    links: [],
    status: 'In development',
    monogram: 'B',
    tint: '#e5e9e1'
  },
  {
    name: 'Asayroom',
    kind: 'Therapy platform',
    stack: ['Vue 3', 'Nuxt 4'],
    year: '2024 — now',
    summary:
      'A national platform for psychology, psychiatry and counselling, built for kids, teens, adults and couples with different needs, schedules and treatment styles. Multilingual, in-person and online.',
    features: [
      'Video and image level verification',
      'Article system with four nested categories',
      'Training and consulting packages',
      'In-app wallets and payment gateways',
      'Assessments and matching tests',
      'Admin dashboard for almost every screen'
    ],
    links: [{ label: 'Open Asayroom', href: 'https://asayroom.ir' }],
    monogram: 'A',
    tint: '#e6e4f7'
  }
]

export const SKILL_GROUPS = [
  {
    label: 'Primary',
    items: ['Vue 3', 'Nuxt 4', 'Laravel', 'PHP', 'TypeScript', 'JavaScript', 'CSS']
  },
  {
    label: 'Also used',
    items: ['Blade', 'Python', 'Django', 'Vite', 'Tailwind', 'GSAP', 'SQL']
  },
  {
    label: 'Systems',
    items: ['Linux', 'Git', 'GitHub Actions', 'Cloudflare Pages', 'Cloudflare Workers']
  },
  {
    label: 'Practice',
    items: [
      'Design systems',
      'Accessibility',
      'Web performance',
      'Responsive layout',
      'Form and state design',
      'Web application security'
    ]
  }
] as const

export const AI_NOTES = [
  {
    label: 'Ideas',
    title: 'Talking first',
    body: 'I bounce an idea around before writing a line. Conversation, not code generation.'
  },
  {
    label: 'Design',
    title: 'Boring CSS',
    body: 'Spacing math, responsive rules, repetitive styles. The parts I already know, just faster.'
  },
  {
    label: 'Search',
    title: 'Replacing ten tabs',
    body: 'Docs, error messages, small syntax I forgot. One question instead of a search spiral.'
  },
  {
    label: 'Control',
    title: 'Lead, not follow',
    body: 'I build the base and the structure. AI works inside my rules, not the other way around.'
  }
] as const

export const CONTACT = {
  email: SITE.email,
  socials: [
    { label: 'GitHub', handle: '@V-CodeSmith', href: SITE.github },
    { label: 'Telegram', handle: '@mamadx008', href: SITE.telegram },
    { label: 'Instagram', handle: '@mohammad_azhdari81', href: SITE.instagram },
    { label: 'UI kit', handle: 'Kowshan UI Kit', href: SITE.uiKit }
  ]
} as const
