import { SITE } from './seo'

export type Tone = 'plain' | 'outline' | 'accent'

export interface ProjectLink {
  href: string
}

export interface Project {
  id: string
  name: string
  year: string
  stack: string[]
  links: ProjectLink[]
  monogram: string
  tint: string
}

export const PROJECTS: Project[] = [
  {
    id: 'karan',
    name: 'Karan',
    year: '2025 — now',
    stack: ['Vue 3', 'Laravel', 'Blade'],
    links: [{ href: 'https://karanim.ir/' }],
    monogram: 'K',
    tint: '#4a7bb5'
  },
  {
    id: 'scan-business',
    name: 'Scan Business',
    year: '2025',
    stack: ['Vue 3', 'Laravel'],
    links: [{ href: 'https://scanbusiness.ir/' }],
    monogram: 'S',
    tint: '#c19a4e'
  },
  {
    id: 'nigc',
    name: 'NIGC',
    year: '2024 — 2025',
    stack: ['Vue 3', 'PWA'],
    links: [
      { href: 'https://crm.nigc-ar.ir/' },
      { href: 'https://es.nigc-ar.ir/pwa2' }
    ],
    monogram: 'N',
    tint: '#4f8fb0'
  },
  {
    id: 'cafe-mahour',
    name: 'Cafe Mahour',
    year: '2023',
    stack: ['Nuxt 3'],
    links: [],
    monogram: 'C',
    tint: '#c1684c'
  },
  {
    id: 'baam',
    name: 'Baam',
    year: '2025 — now',
    stack: ['Nuxt 4'],
    links: [],
    monogram: 'B',
    tint: '#3f8f6b'
  },
  {
    id: 'asayroom',
    name: 'Asayroom',
    year: '2024 — now',
    stack: ['Vue 3', 'Nuxt 4'],
    links: [{ href: 'https://asayroom.ir' }],
    monogram: 'A',
    tint: '#7a6aa8'
  }
]

export const PROCESS_TONES: Tone[] = [
  'plain',
  'plain',
  'outline',
  'plain',
  'plain',
  'outline',
  'accent',
  'plain'
]

export interface SocialLink {
  label: string
  handle: string
  href: string
}

export const CONTACT = {
  email: SITE.email,
  socials: [
    { label: 'GitHub', handle: '@V-CodeSmith', href: SITE.github },
    { label: 'Telegram', handle: '@mamadx008', href: SITE.telegram },
    { label: 'Instagram', handle: '@mohammad_azhdari81', href: SITE.instagram },
    { label: 'UI kit', handle: 'Kowshan UI Kit', href: SITE.uiKit }
  ] as SocialLink[]
}
