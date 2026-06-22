# VAUNT — vaunt.co

Marketing website for **Vaunt**, a Detroit-based full-service marketing agency
(websites + the **Vaunt Marketing System / VMS**). Dark glassmorphism, electric-blue
glow, faint starfield, and a floating portfolio cluster as the hero centerpiece.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS** (brand tokens in `src/index.css` + `tailwind.config.js`)
- **Framer Motion** (scroll reveals, magnetic hover, marquees)
- **vite-react-ssg** — every route is **prerendered to real HTML** with per-page
  `<title>`/meta/canonical/OG (see `src/lib/Seo.tsx`). This is intentional: the site
  ships crawlable HTML, not a blank client-only SPA.
- **lucide-react** icons (no emoji).

## Develop

```bash
npm install
npm run dev          # http://localhost:5173
```

## Build & preview (production / SSG)

```bash
npm run build        # prerenders all routes into dist/ + writes sitemap.xml
npm run preview      # serve dist/ on http://localhost:5000
npm run lint         # tsc --noEmit type check
```

`npm run build` outputs static HTML for every page (`/`, `/about`, `/services` and
all 10 service detail pages, `/portfolio`, `/vms`, `/blog`, `/testimonials`, `/work`,
`/partner-program`, `/contact`, `/terms`, `/privacy`, `404`) plus `sitemap.xml` and
`robots.txt`.

## Deploy (Replit static)

The repo is the GitHub bridge: push here → import into Replit → deploy as a **Static**
deployment. `.replit` is preconfigured:

- Build: `npm ci && npm run build`
- Public dir: `dist`

For SPA fallback on unknown URLs, point the host's not-found handler at `404.html`
(Replit static serves it automatically).

## Configuration / environment

Copy `.env.example` → `.env` (or set Replit **Secrets**):

| Var | Purpose |
| --- | --- |
| `VITE_GHL_WEBHOOK_URL` | GoHighLevel endpoint the **Contact** form POSTs to |
| `VITE_GHL_NEWSLETTER_URL` | GoHighLevel endpoint the **Newsletter** form POSTs to |

Until these are set, forms show a friendly success state without sending.

## Editing content

All copy/data lives in `src/data/` — no CMS:

- `site.ts` — NAP, social, SEO defaults
- `services.ts` — 10 services (drives nav, footer, detail pages, routes)
- `vms.ts` — VMS narrative blocks + 16-row comparison table
- `smartFeatures.ts`, `content.ts` (Why Us / FAQ / testimonials / blog / team)
- `portfolio.ts` — portfolio items. Add a real screenshot by setting `thumbnail`
  to a path under `public/portfolio/…`; otherwise a branded placeholder renders.
- `logos.ts` — client logos + tech stack marquees

## Open items for Jacob (TODOs in code)

- **Logo:** official VAUNT wordmark SVG (currently a styled placeholder in `src/components/ui/Logo.tsx`).
- **GHL:** Vaunt location ID + API key / form webhook URLs (set the env vars above)
  and the **reviews widget** snippet (mount point `#ghl-reviews-widget` in
  `src/components/sections/Testimonials.tsx`).
- **reCAPTCHA:** add the Vaunt site key in `src/components/forms/ContactForm.tsx`.
- **Portfolio media:** drop real screenshots/video into `public/portfolio/…` and wire
  `thumbnail` paths in `src/data/portfolio.ts`.
- **OG image:** export a PNG of `public/og-image.svg` for widest social support.
- **YouTube URL:** confirm channel link in `src/data/site.ts`.

---

Built with Claude Code.
