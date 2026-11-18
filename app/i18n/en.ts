const en = {
  seo: {
    title: 'Mohammad Azhdari (V-CodeSmith) — Fullstack Vue & Nuxt Developer',
    shortTitle: 'V-CodeSmith — Fullstack Vue & Nuxt Developer',
    description:
      'Mohammad Azhdari (V-CodeSmith) — fullstack developer with four years of Vue and Nuxt work and a Laravel backend. Member of the Kowshan studio, remote-first from Iran.',
    ogDescription:
      'Four years of fullstack work: Nuxt 4, Vue 3, Laravel and Python. Production platforms for project management, business diagnostics, and energy — not demos.',
    ogImage: '/og.png',
    ogImageAlt:
      'Mohammad Azhdari — V-CodeSmith, fullstack Vue and Nuxt developer, portfolio homepage',
    jobTitle: 'Fullstack Developer',
    personDescription:
      'Fullstack developer with four years of experience building production platforms. Main specialty is Vue 3 and Nuxt 4 on the front, Laravel and PHP on the back, with Python and Linux in the mix.'
  },
  nav: {
    about: 'About',
    projects: 'Projects',
    stack: 'Stack',
    ai: 'AI',
    contact: 'Contact',
    getInTouch: 'Get in touch',
    switchLabel: 'Language',
    en: 'EN',
    fa: 'فا'
  },
  skip: 'Skip to content',
  hero: {
    eyebrow: 'Fullstack developer · Frontend specialty',
    firstName: 'Mohammad',
    lastName: 'Azhdari',
    lede: 'I build and maintain production interfaces: design systems, role-heavy dashboards and multilingual sites that have to stay fast after launch. Vue 3 and Nuxt 4 up front, Laravel behind, remote-first from Ardabil, Iran.',
    primaryCta: 'Start a conversation →',
    secondaryCta: 'GitHub ↗',
    currentlyLabel: 'Currently',
    currentlyBody:
      'Fullstack in a small product team. Vue, Nuxt and Laravel, remote from Ardabil.',
    timezone: 'GMT+3:30',
    remote: 'Remote-first',
    mark: 'MA'
  },
  stack: {
    label: 'Main stack',
    aria: 'Main stack',
    items: [
      { name: 'Vue', note: 'Vue 3, Composition API' },
      { name: 'Nuxt', note: 'Nuxt 4, SSR and static' },
      { name: 'Laravel', note: 'Laravel and Blade' },
      { name: 'TypeScript', note: 'Typed end to end' }
    ],
    marquee: [
      'Vue 3',
      'Nuxt 4',
      'Laravel',
      'TypeScript',
      'RTL interfaces',
      'Design systems',
      'Performance',
      'Accessibility'
    ]
  },
  about: {
    eyebrow: 'Who I am',
    heading: 'Fullstack, close to the product.',
    paragraphs: [
      "I'm Mohammad Azhdari, known online as V-CodeSmith. Fullstack developer with a frontend specialty: Vue 3, Nuxt 4 and TypeScript in the browser, Laravel and PHP on the server, and a stubborn dislike of interfaces that look like a template.",
      'Most of what I build is production, not demo: therapy platforms, internal tooling for a national gas company, reservation systems. Screens with roles, permissions, state and edge cases that all have to behave on a slow connection.',
      "I care about structure, motion with a reason, and the states people forget to design: loading, empty, error, success. I don't claim every corner of the language — I know enough to ship real work with it, and I keep learning on the job."
    ],
    glanceLabel: 'At a glance',
    glance: [
      { label: 'Based in', value: 'Ardabil, Iran' },
      { label: 'Working', value: 'Remote-first' },
      { label: 'Focus', value: 'Vue 3 and Nuxt 4' },
      { label: 'Languages', value: 'Persian, English' },
      { label: 'Updated', value: 'November 2026' }
    ],
    glanceNote:
      'Open to contract and freelance fullstack work alongside my current role.'
  },
  approach: {
    label: 'Style',
    heading: 'How I write.',
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
  },
  process: {
    eyebrow: 'Process',
    heading: 'Eight rules, every project.',
    lede: 'Unless you would rather I skipped them.',
    items: [
      {
        title: 'Style',
        body: 'Minimal and current. Nothing heavy, nothing dated. Every project gets its own look instead of a recycled template.'
      },
      {
        title: 'Motion',
        body: 'Light animation with weight. CSS first, GSAP only for the moments that matter. Never decoration, always signal.'
      },
      {
        title: 'Security',
        body: 'Encryption and security are defaults, not features. Every input is hostile until proven otherwise.'
      },
      {
        title: 'Structure',
        body: 'Clean folders, clean assets, obvious names. A new developer should find any file in half a minute.'
      },
      {
        title: 'Version control',
        body: 'Git from the first commit. Small branches, readable history, no force-pushes to shared branches.'
      },
      {
        title: 'Docs',
        body: 'Optional until someone else reads the code. Then they get a README that explains the why, not the what.'
      },
      {
        title: 'DevOps',
        body: 'Small helpers that remove friction: deploy scripts, one-command setups, boring management.'
      },
      {
        title: 'State',
        body: 'More care for loading, error, empty and success than most interfaces bother with. That is where products are judged.'
      }
    ]
  },
  projects: {
    eyebrow: 'Selected work',
    heading: "Things I've built.",
    lede: 'Production platforms, internal tools and systems that had to keep working. Some public, some behind closed doors.',
    stackAria: 'Stack',
    items: {
      karan: {
        kind: 'Project and task management platform',
        summary:
          'Project and task management for organisations: the full lifecycle from planning to monitoring and final evaluation, with individual and team task organisation and shared progress tracking.',
        jsonDescription:
          'Project and task management platform for organizations — full lifecycle from planning to monitoring and final evaluation, with individual and team task organization and shared progress tracking. Main app in Vue 3, with its production and plan sites written in Blade.',
        features: [
          'Full lifecycle, planning through final evaluation',
          'Individual and team task organisation',
          'Shared progress tracking across a project',
          'Main app in Vue 3, production and plan sites in Blade'
        ],
        links: ['Open Karan']
      },
      'scan-business': {
        kind: 'Business diagnostics and renewal',
        summary:
          'A business diagnostics and renewal platform backed by the Ministry of Industry, Mine and Trade: a free initial diagnosis, then detailed assessments against recognised maturity models.',
        jsonDescription:
          'Business diagnostics and renewal platform backed by the Ministry of Industry, Mine and Trade. Free initial diagnosis, plus detailed assessments against EFQM, BPMM, APQC and Palladium maturity models — for small, medium and large organizations defined by headcount, assets and annual sales.',
        features: [
          'Free initial business diagnosis',
          'Assessments against EFQM, BPMM, APQC and Palladium',
          'Scoped for small, medium and large organisations',
          'Readiness scoring by headcount, assets and annual sales'
        ],
        links: ['Open Scan Business']
      },
      nigc: {
        kind: 'Staff CRM, field PWA and Gaziom',
        summary:
          'Three independent Vue applications for the National Iranian Gas Company: a staff CRM, a field-operations PWA and a reward-based app. Each with its own identity rather than one shared template.',
        jsonDescription:
          'Internal CRM for the National Iranian Gas Company, one of three independent Vue applications with its own visual identity, alongside a field-operations PWA with in-app photo capture.',
        features: [
          'Three separate apps, one team',
          'Multi-theme support across all three',
          'Realtime photo capture for field tasks',
          'Security-focused build for internal use',
          'Rich, current-generation interfaces'
        ],
        links: ['Open CRM', 'Open PWA']
      },
      'cafe-mahour': {
        kind: 'Reservation-first cafe platform',
        summary:
          'A cafe site designed around consultants and brokers who need a quiet table for a client meeting: reserve a space, order from the menu, get to business. Full restaurant logic behind a reservation front.',
        jsonDescription:
          'Reservation-first platform for a cafe built around consultants and brokers: table booking, bundled packages, menu and a two-level admin.',
        features: [
          'Table reservations with bundled packages',
          'Cafe-defined menu and products',
          'Two-level admin: cafe owner and platform owner',
          'Full restaurant flow, not a static menu page'
        ],
        links: [],
        status: 'Private deployment'
      },
      baam: {
        kind: 'Professional qualification system',
        summary:
          'A platform where inspectors, evaluators and auditors prove their readiness: build a resume, pick the roles you want, and see exactly what is missing for each path.',
        jsonDescription:
          'Professional qualification platform for inspectors, evaluators and auditors: resume builder, job selection and automatic skill-gap analysis.',
        features: [
          'Built-in resume maker',
          'Role selection and favourites',
          'Automatic per-role skill-gap analysis',
          'Suggested assessments, courses and reading',
          'Tasks and states handled end to end'
        ],
        links: [],
        status: 'In development'
      },
      asayroom: {
        kind: 'Therapy platform',
        summary:
          'A national platform for psychology, psychiatry and counselling, built for kids, teens, adults and couples with different needs, schedules and treatment styles. Multilingual, in-person and online.',
        jsonDescription:
          'National therapy platform for psychology, psychiatry and counselling — multilingual, in-person and online, with video verification, nested article categories, assessments and in-app payments.',
        features: [
          'Video and image level verification',
          'Article system with four nested categories',
          'Training and consulting packages',
          'In-app wallets and payment gateways',
          'Assessments and matching tests',
          'Admin dashboard for almost every screen'
        ],
        links: ['Open Asayroom']
      }
    }
  },
  skills: {
    eyebrow: 'Toolbox',
    heading: "Things I've touched.",
    lede: "Not a skills scoreboard. Tools and ideas I've crossed paths with, some deeply, some only enough to know what they are.",
    groups: [
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
    ]
  },
  ai: {
    eyebrow: 'How I use AI',
    heading: 'A tool, not a teammate.',
    lede: 'It handles the boring parts and I keep the decisions. Anything I plan to maintain, I write myself: the structure, the base, the calls.',
    notes: [
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
    ],
    foot: 'Every output gets read before it ships. When it is wrong, I am the fallback.'
  },
  contact: {
    eyebrow: 'Contact',
    heading: "Let's make something worth looking at.",
    lede: 'Fullstack work, frontend or both. Email is fastest; I answer everything.'
  },
  footer: {
    filesLabel: 'Site files',
    humans: 'humans.txt',
    llms: 'llms.txt',
    sitemap: 'sitemap.xml',
    github: 'GitHub ↗',
    built: 'Built with Nuxt 4'
  }
}

export type Dictionary = typeof en
export default en
