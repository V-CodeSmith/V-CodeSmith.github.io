# Portfolio — Mohammad Azhdari (V-CodeSmith)

A bilingual portfolio in Nuxt 4: English at `/` and Persian at `/fa`, with an RTL
layout and its own SEO and JSON-LD per language. Warm paper, one ink, one
electric accent, oversized Bricolage type (Vazirmatn for Persian) and soft
squircle cards. Everything is plain CSS — no UI framework, no CSS framework.

## Run it

```sh
npm install
npm run dev        # http://localhost:3000
npm run generate   # static site in .output/public
```

## Languages

- `app/i18n/en.ts` and `app/i18n/fa.ts` — all page copy per locale.
- `app/i18n/structured-data.ts` — the Person / Organization / WebSite /
  ProfilePage graph, localized (`inLanguage`, job title, project descriptions).
- `app/composables/usePortfolioSeo.ts` — title, description, OG tags, canonical
  and `hreflang` alternates (`en`, `fa-IR`, `x-default`).
- `app/pages/index.vue` and `app/pages/fa.vue` both render
  `<PortfolioPage :locale>`; the layout direction and fonts switch on
  `html[dir='rtl']`.
- `app/constants/content.ts` — locale-neutral data: project links, years, stack,
  tints, monograms, process tones, contact links.

Adding a third language: add a dictionary in `app/i18n`, a route page, an entry
in `app/i18n/index.ts`, then extend the sitemap and the hreflang links.

## Make it yours

- `app/constants/seo.ts` — name, handle, email, socials and canonical origin
  (`SITE_URL`). Head meta and JSON-LD build on these values per locale.
- `app/pages/index.vue` — thin route; the page itself is
  `app/components/PortfolioPage.vue`.
- `app/assets/styles/main.css` — design tokens; `page.css` holds the section
  styles, RTL overrides and the marquee/spotlight/progress details.
- `public/` — `robots.txt`, `sitemap.xml` (both languages with alternates),
  `llms.txt`, `humans.txt`, `.well-known/security.txt`, the Google Search
  Console verification file, and `og.png` / `og-fa.png`.

### Still worth a look

- Project copy in the dictionaries — keep it in sync with `PROJECTS` in
  `app/constants/content.ts`.
- `public/og.png` and `public/og-fa.png` — regenerate after copy changes
  (1200×630 captures of each homepage).
- `public/google*.html` — the Search Console verification file; replace it if
  you re-verify the domain.

## Deploy

`.github/workflows/deploy.yml` builds the site with `npm run generate` and
publishes `.output/public` to GitHub Pages on every push to `main`.

The workflow assumes a user site at the repo root (`V-CodeSmith.github.io`).
For a project page served from `/<repo>/`, set
`NUXT_APP_BASE_URL: /${{ github.event.repository.name }}/` on the generate step
and use that origin in `SITE_URL` and the route pages.

In the repository: **Settings → Pages → Build and deployment → Source: GitHub
Actions**, then push to `main`.
