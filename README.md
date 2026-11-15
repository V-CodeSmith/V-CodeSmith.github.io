# Portfolio — Mohammad Azhdari (V-CodeSmith)

A single-page portfolio in Nuxt 4: warm paper, one ink, one electric accent,
oversized Bricolage type and soft squircle cards. Everything is plain CSS — no
UI framework, no CSS framework.

## Run it

```sh
npm install
npm run dev        # http://localhost:3000
npm run generate   # static site in .output/public
```

## Make it yours

- `app/constants/seo.ts` — name, handle, title, description, email, socials,
  canonical origin (`SITE_URL`) and the whole JSON-LD `@graph`. The head meta,
  OG tags, canonical and structured data all read from this one file.
- `app/constants/content.ts` — stack, approach, the eight process rules,
  projects, skills, AI notes and contact links.
- `app/pages/index.vue` — the page. `app/assets/styles/main.css` holds the
  design tokens (paper, ink, accent, radii, motion).
- `public/` — `robots.txt`, `sitemap.xml`, `llms.txt`, `humans.txt`,
  `.well-known/security.txt`, the Google Search Console verification file and
  `og.png`. Update the origin and dates in these files when `SITE_URL` changes.

### Still worth a look

- Project copy in `app/constants/content.ts` — keep it in sync with the
  `hasPart` entries in `seo.ts`.
- `public/og.png` — regenerate after copy changes (a 1200×630 capture of the
  homepage).
- `public/google*.html` — the Google Search Console verification file; replace
  it if you re-verify the domain.

## Deploy

`.github/workflows/deploy.yml` builds the site with `npm run generate` and
publishes `.output/public` to GitHub Pages on every push to `main`.

The workflow assumes a user site at the repo root (`V-CodeSmith.github.io`).
For a project page served from `/<repo>/`, set
`NUXT_APP_BASE_URL: /${{ github.event.repository.name }}/` on the generate step
and use that origin in `SITE_URL`.

In the repository: **Settings → Pages → Build and deployment → Source: GitHub
Actions**, then push to `main`.
