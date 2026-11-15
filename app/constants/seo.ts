/**
 * Single source of truth for every SEO signal on the site.
 * Imported by nuxt.config.ts so the same values drive <head>, JSON-LD and the
 * static files in public/ (robots.txt, sitemap.xml, llms.txt).
 *
 * Change the canonical origin in ONE place: SITE_URL.
 */
export const SITE_URL = "https://v-codesmith.github.io";

export const SITE = {
  url: SITE_URL,
  home: `${SITE_URL}/`,
  name: "Mohammad Azhdari",
  nativeName: "محمد اژدری",
  handle: "V-CodeSmith",
  brand: "Kowshan",
  title: "Mohammad Azhdari (V-CodeSmith) — Fullstack Vue & Nuxt Developer",
  shortTitle: "V-CodeSmith — Fullstack Vue & Nuxt Developer",
  description:
    "Mohammad Azhdari (V-CodeSmith) — fullstack developer with four years of Vue and Nuxt work and a Laravel backend. Member of the Kowshan studio, remote-first from Iran.",
  ogDescription:
    "Four years of fullstack work: Nuxt 4, Vue 3, Laravel and Python. Production platforms for project management, business diagnostics, and energy — not demos.",
  email: "mohammad.ajdari.2002@gmail.com",
  city: "Ardabil",
  region: "Ardabil",
  country: "IR",
  github: "https://github.com/V-CodeSmith",
  telegram: "https://t.me/mamadx008",
  instagram: "https://instagram.com/mohammad_azhdari81",
  uiKit: "https://kowshan-ui-kit.pages.dev/",
  ogImage: `${SITE_URL}/og.png`,
  ogImageAlt:
    "V-CodeSmith — Mohammad Azhdari, fullstack Vue and Nuxt developer, portfolio homepage",
  lastUpdated: "2026-11-15",
  locale: "en_US",
} as const;

const PERSON_ID = `${SITE_URL}/#person`;
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFILE_ID = `${SITE_URL}/#profilepage`;
const BREADCRUMB_ID = `${SITE_URL}/#breadcrumb`;

/**
 * One @graph instead of five separate <script> blocks: every node is wired by
 * @id, so Google reads Person, Kowshan, the site and the projects as a single
 * connected entity instead of orphaned fragments.
 */
export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE.name,
      alternateName: [SITE.handle, SITE.nativeName],
      url: SITE.home,
      image: SITE.ogImage,
      jobTitle: "Fullstack Developer",
      description:
        "Fullstack developer with four years of experience building production platforms. Main specialty is Vue 3 and Nuxt 4 on the front, Laravel and PHP on the back, with Python and Linux in the mix.",
      email: `mailto:${SITE.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.city,
        addressRegion: SITE.region,
        addressCountry: SITE.country,
      },
      areaServed: [
        { "@type": "City", name: "Ardabil" },
        { "@type": "City", name: "Tabriz" },
        { "@type": "City", name: "Tehran" },
        { "@type": "Place", name: "Worldwide (remote)" },
      ],
      sameAs: [SITE.github, SITE.telegram, SITE.instagram, SITE.uiKit],
      knowsAbout: [
        "Vue.js",
        "Nuxt",
        "Laravel",
        "PHP",
        "Python",
        "TypeScript",
        "JavaScript",
        "Linux administration",
        "SQL",
        "Web application security",
        "Blade",
        "CSS",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Fullstack Web Developer",
        skills:
          "Nuxt 4, Vue 3, Laravel, PHP, Python, TypeScript, Linux, SQL, web security",
        occupationLocation: { "@type": "Country", name: "Iran" },
      },
      worksFor: { "@id": ORG_ID },
      knowsLanguage: [
        { "@type": "Language", name: "Persian", alternateName: "fa" },
        { "@type": "Language", name: "English", alternateName: "en" },
      ],
      interactionStatistic: [
        {
          "@type": "InteractionCounter",
          name: "GitHub followers",
          interactionType: { "@type": "FollowAction" },
          userInteractionCount: 211,
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE.brand,
      alternateName: SITE.handle,
      url: SITE.home,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.svg`,
        width: 56,
        height: 56,
      },
      image: SITE.ogImage,
      description:
        "Kowshan is a small independent software studio — three developers and one designer — building web platforms with Vue, Nuxt, Laravel and Python.",
      member: { "@id": PERSON_ID },
      email: `mailto:${SITE.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.city,
        addressRegion: SITE.region,
        addressCountry: SITE.country,
      },
      areaServed: [
        { "@type": "Country", name: "Iran" },
        { "@type": "Place", name: "Worldwide (remote)" },
      ],
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 3,
        maxValue: 4,
      },
      sameAs: [SITE.github, SITE.uiKit],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "project inquiries",
          email: `mailto:${SITE.email}`,
          availableLanguage: ["en", "fa"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE.home,
      name: SITE.shortTitle,
      alternateName: "V-CodeSmith Portfolio",
      description: SITE.description,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
      copyrightHolder: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": PROFILE_ID,
      url: SITE.home,
      name: SITE.title,
      description: SITE.description,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
      inLanguage: "en",
      dateModified: SITE.lastUpdated,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        caption: SITE.ogImageAlt,
      },
      breadcrumb: { "@id": BREADCRUMB_ID },
      hasPart: [
        {
          "@type": "SoftwareApplication",
          name: "Karan",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://karanim.ir/",
          description:
            "Project and task management platform for organizations — full lifecycle from planning to monitoring and final evaluation, with individual and team task organization and shared progress tracking. Main app in Vue 3, with its production and plan sites written in Blade.",
          author: { "@id": PERSON_ID },
        },
        {
          "@type": "SoftwareApplication",
          name: "Scan Business",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://scanbusiness.ir/",
          description:
            "Business diagnostics and renewal platform backed by the Ministry of Industry, Mine and Trade. Free initial diagnosis, plus detailed assessments against EFQM, BPMM, APQC and Palladium maturity models — for small, medium and large organizations defined by headcount, assets and annual sales.",
          author: { "@id": PERSON_ID },
        },
        {
          "@type": "SoftwareApplication",
          name: "NIGC CRM",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://crm.nigc-ar.ir/",
          description:
            "Internal CRM for the National Iranian Gas Company, built as one of three independent Vue applications with its own visual identity.",
          author: { "@id": PERSON_ID },
        },
        {
          "@type": "SoftwareApplication",
          name: "NIGC Field PWA",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://es.nigc-ar.ir/pwa2",
          description:
            "Progressive web app for field operations at the National Iranian Gas Company, with an in-app photo capture flow for tasks.",
          author: { "@id": PERSON_ID },
        },
        {
          "@type": "SoftwareApplication",
          name: "NIGC Gaziom",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Reward-based PWA for the National Iranian Gas Company: tasks, leaderboard, minimal profile and video content, built to promote gas thrift.",
          author: { "@id": PERSON_ID },
        },

        {
          "@type": "SoftwareApplication",
          name: "Cafe Mahour",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Reservation-first platform for a cafe built around consultants and brokers: table booking, bundled packages, menu and a two-level admin.",
          author: { "@id": PERSON_ID },
        },
        {
          "@type": "SoftwareApplication",
          name: "Baam",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Professional qualification platform for inspectors, evaluators and auditors: resume builder, job selection and automatic skill-gap analysis.",
          author: { "@id": PERSON_ID },
        },
        {
          "@type": "SoftwareApplication",
          name: "Asayroom",
          applicationCategory: "HealthApplication",
          operatingSystem: "Web",
          url: "https://asayroom.ir",
          description:
            "National therapy platform for psychology, psychiatry and counselling — multilingual, in-person and online, with video verification, nested article categories, assessments and in-app payments.",
          author: { "@id": PERSON_ID },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": BREADCRUMB_ID,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE.home,
        },
      ],
    },
  ],
} as const;
