import { SITE, SITE_URL } from '~/constants/seo'
import { DICTIONARIES, LOCALE_META, type LocaleCode } from '~/i18n'
import { buildStructuredData } from '~/i18n/structured-data'

export function usePortfolioSeo(locale: LocaleCode) {
  const dict = DICTIONARIES[locale]
  const meta = LOCALE_META[locale]
  const canonical = `${SITE_URL}${meta.path}`
  const enUrl = `${SITE_URL}/`
  const faUrl = `${SITE_URL}/fa`
  const ogImage = `${SITE_URL}${dict.seo.ogImage}`

  useHead({
    htmlAttrs: { lang: meta.htmlLang, dir: meta.dir },
    title: dict.seo.title,
    link: [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', hreflang: 'en', href: enUrl },
      { rel: 'alternate', hreflang: 'fa-IR', href: faUrl },
      { rel: 'alternate', hreflang: 'x-default', href: enUrl },
      { rel: 'alternate', type: 'text/plain', href: `${SITE_URL}/llms.txt`, title: 'llms.txt' },
      { rel: 'me', href: SITE.github },
      { rel: 'me', href: SITE.telegram }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(buildStructuredData(locale, dict))
      }
    ]
  })

  useSeoMeta({
    description: dict.seo.description,
    author: SITE.name,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    ogType: 'profile',
    ogSiteName: `${SITE.handle} — ${SITE.brand}`,
    ogLocale: locale === 'fa' ? 'fa_IR' : 'en_US',
    ogTitle: dict.seo.title,
    ogDescription: dict.seo.ogDescription,
    ogUrl: canonical,
    ogImage,
    ogImageAlt: dict.seo.ogImageAlt,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterCard: 'summary_large_image',
    twitterTitle: dict.seo.title,
    twitterDescription: dict.seo.ogDescription,
    twitterImage: ogImage,
    twitterImageAlt: dict.seo.ogImageAlt
  })
}
