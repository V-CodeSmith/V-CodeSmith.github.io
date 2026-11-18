import { PROJECTS } from '~/constants/content'
import { SITE, SITE_URL } from '~/constants/seo'
import type { Dictionary } from './en'
import type { LocaleCode } from './index'

const PERSON_ID = `${SITE_URL}/#person`
const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
const PROFILE_ID = `${SITE_URL}/#profilepage`
const BREADCRUMB_ID = `${SITE_URL}/#breadcrumb`

type ProjectId = keyof Dictionary['projects']['items']

export function buildStructuredData(locale: LocaleCode, dict: Dictionary) {
  const home = locale === 'fa' ? `${SITE_URL}/fa` : `${SITE_URL}/`
  const inLanguage = locale === 'fa' ? 'fa-IR' : 'en'
  const ogImage = `${SITE_URL}${dict.seo.ogImage}`

  const hasPart = PROJECTS.map((project) => {
    const text = dict.projects.items[project.id as ProjectId]
    const link = project.links[0]

    return {
      '@type': 'SoftwareApplication',
      name: project.name,
      applicationCategory: project.id === 'asayroom' ? 'HealthApplication' : 'BusinessApplication',
      operatingSystem: 'Web',
      ...(link ? { url: link.href } : {}),
      description: text.jsonDescription,
      author: { '@id': PERSON_ID }
    }
  })

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: SITE.name,
        alternateName: [SITE.handle, SITE.nativeName],
        url: home,
        image: ogImage,
        jobTitle: dict.seo.jobTitle,
        description: dict.seo.personDescription,
        email: `mailto:${SITE.email}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: dict.about.glance[0]?.value ?? SITE.city,
          addressRegion: SITE.region,
          addressCountry: SITE.country
        },
        areaServed: [
          { '@type': 'City', name: locale === 'fa' ? 'اردبیل' : 'Ardabil' },
          { '@type': 'City', name: locale === 'fa' ? 'تبریز' : 'Tabriz' },
          { '@type': 'City', name: locale === 'fa' ? 'تهران' : 'Tehran' },
          { '@type': 'Place', name: locale === 'fa' ? 'سراسر جهان (دورکار)' : 'Worldwide (remote)' }
        ],
        sameAs: [SITE.github, SITE.telegram, SITE.instagram, SITE.uiKit],
        knowsAbout: [
          'Vue.js',
          'Nuxt',
          'Laravel',
          'PHP',
          'TypeScript',
          'JavaScript',
          'Node.js',
          'Python',
          'Linux administration',
          'SQL',
          'Web application security',
          'Blade',
          'CSS'
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: dict.seo.jobTitle,
          skills:
            'Nuxt 4, Vue 3, Laravel, PHP, Python, TypeScript, Linux, SQL, web security',
          occupationLocation: { '@type': 'Country', name: locale === 'fa' ? 'ایران' : 'Iran' }
        },
        worksFor: { '@id': ORG_ID },
        knowsLanguage: [
          { '@type': 'Language', name: locale === 'fa' ? 'فارسی' : 'Persian', alternateName: 'fa' },
          { '@type': 'Language', name: locale === 'fa' ? 'انگلیسی' : 'English', alternateName: 'en' }
        ]
      },
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: SITE.brand,
        alternateName: SITE.handle,
        url: home,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/favicon.svg`,
          width: 56,
          height: 56
        },
        image: ogImage,
        description:
          locale === 'fa'
            ? 'کوشان یک استودیو نرم‌افزاری مستقل و کوچک است — سه توسعه‌دهنده و یک طراح — که پلتفرم‌های وب را با Vue، Nuxt، Laravel و Python می‌سازد.'
            : 'Kowshan is a small independent software studio — three developers and one designer — building web platforms with Vue, Nuxt, Laravel and Python.',
        member: { '@id': PERSON_ID },
        email: `mailto:${SITE.email}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: locale === 'fa' ? 'اردبیل' : SITE.city,
          addressRegion: locale === 'fa' ? 'اردبیل' : SITE.region,
          addressCountry: SITE.country
        },
        areaServed: [
          { '@type': 'Country', name: locale === 'fa' ? 'ایران' : 'Iran' },
          { '@type': 'Place', name: locale === 'fa' ? 'سراسر جهان (دورکار)' : 'Worldwide (remote)' }
        ],
        numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 4 },
        sameAs: [SITE.github, SITE.uiKit],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: locale === 'fa' ? 'درخواست پروژه' : 'project inquiries',
            email: `mailto:${SITE.email}`,
            availableLanguage: ['en', 'fa']
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: home,
        name: dict.seo.shortTitle,
        alternateName: 'V-CodeSmith Portfolio',
        description: dict.seo.description,
        inLanguage,
        publisher: { '@id': PERSON_ID },
        copyrightHolder: { '@id': PERSON_ID }
      },
      {
        '@type': 'ProfilePage',
        '@id': PROFILE_ID,
        url: home,
        name: dict.seo.title,
        description: dict.seo.description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': PERSON_ID },
        mainEntity: { '@id': PERSON_ID },
        inLanguage,
        dateModified: SITE.lastUpdated,
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: ogImage,
          width: 1200,
          height: 630,
          caption: dict.seo.ogImageAlt
        },
        breadcrumb: { '@id': BREADCRUMB_ID },
        hasPart
      },
      {
        '@type': 'BreadcrumbList',
        '@id': BREADCRUMB_ID,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: locale === 'fa' ? 'خانه' : 'Home',
            item: home
          }
        ]
      }
    ]
  }
}
