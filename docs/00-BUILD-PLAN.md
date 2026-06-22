# VAUNT.CO — BUILD HANDOFF PLAN

> **READ THIS FIRST.** This is the cross-session source of truth for rebuilding vaunt.co.
> Written 2026-06-22. The full original specs live in Google Drive (IDs below) and are
> re-readable via the Google Drive MCP (`mcp__2a78fbc2-...__read_file_content`).

---

## 0. WHAT THIS IS

Rebuild **vaunt.co** — Vaunt is a Detroit-based full-service marketing agency (websites +
the **Vaunt Marketing System / VMS** CRM). The new site is a **flashy, cinematic showcase**:
dark glassmorphism, electric-blue glow, faint starfield, and a **floating 3D portfolio
cluster as the hero centerpiece**. Goal: highlight the work + the power of working with Vaunt.

Owner: Jacob Brikho (jacob@vaunt.co). Replaces a Webflow site.

## 1. DECISIONS LOCKED (do not re-litigate)

- **Repo root:** `/Users/oasis/CLAUDE/VAUNT/` — standalone project, its own git repo. **Launch Claude Code from here.**
  Vaunt is a separate business from SporeShield; nothing here depends on the SPORE SHIELD folder.
- **Stack:** **Vite + React + TypeScript + Tailwind CSS + Framer Motion**, with **static
  prerendering / SSG** (use `vite-react-ssg` with react-router). User explicitly said
  "VITE SPA PRERENDERED." Matches sporeshield.com (Vite + prerender, ranks well).
  HARD REQUIREMENT: every route outputs real prerendered HTML + per-page meta. No blank client-only SPA.
- **Host:** Replit (static deploy). Bridge via GitHub: Claude Code → GitHub repo → import into Replit.
- **21st.dev Magic MCP** was added at user scope (`~/.claude.json`, server name `magic`,
  pkg `@21st-dev/magic@latest`). Use `magic__*` tools for component spikes where helpful.
  NOTE: the bespoke dark-glass aesthetic is mostly hand-built; Magic is a helper, not the driver.
- **UI/UX skill:** `ui-ux-pro-max` is installed. Its auto design-system search mis-fires to
  "Neo Brutalism" for this query — IGNORE that; the **glassmorphism spec below wins**. DO use its
  UX/accessibility/motion/performance checklists (§ below).
- **Animation source:** a Motion.co "3D Creator" prompt contributes TECHNIQUE ONLY — reusable
  components: `Magnet` (mouse-follow magnetic hover → apply to hero portfolio cards), `FadeIn`
  (whileInView, ease [0.25,0.1,0.25,1]), `AnimatedText` (char-by-char reveal → "More Than An
  Agency" / VMS intro), scroll-driven two-row marquee (logo wall + tech stack), sticky-stacking
  scale cards (featured projects), numbered 01–10 list (Services), clamp() fluid type.
  Ignore its colors/fonts/copy/sections/placeholder images.

## 2. SOURCE DOCS IN GOOGLE DRIVE (re-read verbatim as needed)

Drive folder: `1xpbiTesynBmbAL_goj8SNbg1RPF0o_qI`

| Doc | File ID | Use for |
|---|---|---|
| VAUNT-WEBSITE-BUILD-SPEC.md | `15nxymKpnmnNy4tWuUntU1Rqh8Bh5et4knph9RvH9vzI` | **MASTER** — colors, fonts, copy verbatim (§7–§13), section order, SEO |
| VAUNT-PORTFOLIO-SYSTEM.md | `1czrM1v78dvc36ZUCuNvhE8MdSWdMYlldLaaX0LM9YFg` | portfolio grid, data schema, logo wall, asset index w/ file IDs |
| VAUNT-CLAUDE-CODE-BUILD-GUIDE.md | `1Ng0vJXGY512o0c2VzRKPWMdS-d7KAqy5WMSewJSfua4` | section-by-section build process (Raduan method) |
| VAUNT-MOTION-MERGE-AND-WORKFLOW.md | `1KYGbr1wRKSD-QkpF-xzDOjWGf5d3RH73NJkwY5VWEPk` | how to merge Motion.co technique; SEO/prerender rule |

**Design reference screenshots (Drive PNGs, pull via `?id=FILEID&sz=w2000` thumbnail or download):**
- Old vaunt.co full capture: `1rDBRwua-p7z0cERQWhEO9cUSjOwZDTX9` (current site — overall feel)
- SMART WEBSITE section mockup: `1YkOHG_uKA1zdopTgNMXUOtTYVQ9OW4E1`
- VMS section mockup: `1F7771bTdE5xdQRrvSaDWN8wWONzvvabG`

## 3. BRAND TOKENS (exact — Spec §2)

```css
:root{
  --bg-base:#05070A; --bg-elevated:#0E1217; --surface-card:#11151C;
  --surface-glass:rgba(20,28,40,.45);
  --blue:#1D9BF0; --blue-bright:#45B6FF; --blue-deep:#0B63B5; --blue-cta-panel:#1DA0F2;
  --text-primary:#FFFFFF; --text-secondary:#9AA6B5; --text-tertiary:#5C6675;
  --hairline:rgba(255,255,255,.07); --glass-border:rgba(120,180,255,.18);
  --glow-blue:rgba(29,155,240,.45); --glow-soft:rgba(69,182,255,.25);
}
```
- **Glow recipe:** `box-shadow:0 0 0 1px var(--glass-border),0 8px 40px -8px var(--glow-blue);`
- **Glass recipe:** `background:var(--surface-glass);backdrop-filter:blur(18px) saturate(120%);border:1px solid var(--glass-border);border-radius:20px;`
- **Eyebrow labels** (SERVICES, PORTFOLIO, WHY US?): blue, uppercase, letter-spaced.

## 4. TYPOGRAPHY (Spec §3)

- Display/headlines: heavy geometric grotesque, **bold, often italic + UPPERCASE** for heroes
  (DESIGNED TO CAPTIVATE, DETROIT BASED, GLOBAL REACH). Use **Space Grotesk** or Sora/Montserrat ExtraBold. Pick one.
- Body: **Poppins** or **Inter** (400/500/600).
- Emphasis device: first word bold white, rest lighter (**REAL** VOICES, REAL RESULTS).
- Accent words sometimes blue italic ("Designed to *Captivate*", "We Speak *Your* Language").
- Wordmark: existing "VAUNT" logo (V w/ wing). Use provided asset; don't recreate. (Need asset — placeholder SVG for now.)

## 5. HOME SECTION ORDER (Spec §6 — build top→bottom, one at a time)

1. **Hero** — "DESIGNED TO CAPTIVATE" + **floating portfolio cluster centerpiece** (the hard one; do first). Magnet on cards, starfield bg, depth blur on back layers, blue glow under each card. `prefers-reduced-motion` → static cluster.
2. **"MORE THAN AN AGENCY."** positioning strip (AnimatedText). Subline: "Strategy, design, and a marketing system that runs your growth — under one roof."
3. **Services — "Your One-Stop Shop"** (glass cards / numbered 01–10). 10 services (see §7.3 in spec).
4. **Portfolio — "Let Our Work Speak"** — unified filterable masonry grid, tabs All/Websites/Social/Print/Before-After, featured items feed the hero. **NO outbound links — images/video only.**
5. **SMART Websites — "Designed to Impress. Built to Perform."** 7 feature items.
6. **VMS — Vaunt Marketing System — "Cancel, Save, and Organize."** (FEATURED) 4 narrative blocks + comparison table (16 rows, glowing ✓, ~$1,690+/mo + $5k app). CTA "See VMS in action → LET'S TALK".
7. **Why Us — "Dedicated to Your Success"** (Hard Working / Innovative / On Time).
8. **Testimonials — "Real Voices, Real Results"** — **GHL widget embed** slot `#ghl-reviews-widget` (static set is fallback only).
9. **Trusted By Industry Leaders** — logo marquee (mono/white, infinite, glow on hover).
10. **Detroit Based, Global Reach** — glowing blue world map. Bloomfield MI · Fort Lauderdale FL.
11. **Tech stack marquee** (WordPress, Webflow, Figma, GHL, Zapier, etc.).
12. **Blog — "Expert Tips & Resources"** (3 seed posts).
13. **FAQ — "More Questions? Reach Out!"** (6 Q&A in spec §7.10).
14. **Contact — "Let's Talk"** — large solid **blue glass panel**. Fields: First/Last/Email/Phone/Company/Website/Comments + reCAPTCHA. Posts to GHL. Keep TCPA consent text verbatim (Spec §14).
15. **Newsletter — "Subscribe"** (email + submit → GHL).
16. **Footer** — NAP, mission line, social, links, services, locations, legal, "Powered By Vaunt".

**Nav (sticky glass bar):** Home · About · Services ▾ · Portfolio · More ▾ · **[LET'S TALK]** (blue glowing pill).
**Pages:** Home, About, Services index + 10 detail, Portfolio, VMS, Blog, Testimonials, Work, Partner Program, Contact, Terms, Privacy.

> Copy is LOCKED/verbatim — re-read Spec §7–§13 for exact text; invent nothing.

## 6. PORTFOLIO SYSTEM (Portfolio doc)

- Data model = repo JSON: `src/data/portfolio.json` (+ optional `logos.json`). No CMS.
- Item schema: `{id,title,client,category(Websites|Social|Print|Before/After),media_type(image|video),thumbnail_url,full_media_url,before_url,featured,order,tags,alt_text,date_added}`.
- Media in `/public/portfolio/{websites,social,print,video}/` and `/public/logos/` (glob-import the wall).
- Long screenshots: card shows top, hover slow auto-scroll, click → lightbox. Video: poster + hover muted loop, lightbox w/ sound. Before/After: slider. Lazy-load + reduced-motion safe. **No `<a>` wrappers.**
- Asset index (full screenshots ready in Drive, see Portfolio §7): sporeshield `19JnVhpvtRRNT7oz3sfWx25cF2p6H2pp2`, epicurus `1KVRLTNY32NF-4QcDfGnODjN3QnDCrJfC`, friendswhocare `1lyAW5xjkhY7jElGUdQi6UrZhIMbSZ-2j`, metroparcelfreight `1jJeMSzgqsPpPsFnPa0r55HyzMmkszkTS`, execlangser `17kH7HtREhYbqbsXFYbVUx4ZyTuKXJotu`, Greg Davis `1rn7Ijo69MEA7hOEIcpT-42ae2ZBklZu-`, Matrix Collision `1uZbQd5WDs_--5s7lRe6Eg9KNaBB7CRog`, Boxwoods `1drdeAKroVnO_sd9HmesbPTUbXZwrbwbB`, Ticket Care `1E-4SeLJPUnmNhp2jo0SMQ6Dp_IZgxetT`. Videos need compression before use (see Portfolio §6) — start with static screenshots.
- Until real assets are pulled, build with **placeholder cards** wired to the JSON so swapping in real media is one edit.

## 7. INTEGRATIONS

- **GHL forms:** contact + newsletter POST to GoHighLevel. A working GHL sync pattern (Express →
  leadconnectorhq.com) exists at `/Users/oasis/CLAUDE/SPORE SHIELD/replit-files/` — reference for
  SHAPE ONLY. **Vaunt needs its own GHL location ID + key** (the one in that file belongs to a
  different project). Make the webhook endpoint an env var; leave a clear TODO for Jacob's Vaunt GHL creds.
- **GHL reviews widget:** leave `#ghl-reviews-widget` container + load GHL script (don't hardcode reviews).
- **Instagram @vaunt_co:** optional Behold.so embed in Social tab.

## 8. SEO (Spec §15) — non-negotiable, this is why we prerender

- Per-route prerendered HTML + per-page `<title>`/meta/canonical/OG. sitemap.xml + robots.txt.
- Home title: "Digital Marketing Services in Michigan | VAUNT".
- Meta desc: "VAUNT is an innovative full-stack marketing agency helping brands grow through strategic marketing, brand building, and high-impact website design."
- Canonical https://www.vaunt.co. Use `react-helmet-async` or vite-react-ssg `<Head>`.

## 9. UX GUARDRAILS (from ui-ux-pro-max)

Accessibility: contrast ≥4.5:1 (watch --text-secondary on glass), focus rings, aria-labels on icon
buttons, alt text. Motion: 150–300ms micro / ≤400ms transitions, transform+opacity only, ease-out
enter / ease-in exit, stagger 30–50ms, **respect `prefers-reduced-motion`** everywhere (starfield,
floating hero, marquees, auto-scroll). Perf: WebP/AVIF, lazy-load below fold, reserve dimensions
(CLS), `font-display:swap`. Touch ≥44px. SVG icons (Lucide), never emoji. Responsive 375/768/1024/1440.

## 10. BUILD SEQUENCE (next session)

1. Scaffold Vite+React+TS+Tailwind+Framer Motion+`vite-react-ssg`; routing; `npm i`.
2. Design system: tokens in CSS vars + Tailwind theme, glass/glow utilities, rounded scale, fonts,
   `Starfield` component, type scale. Render a **style tile** (button, glass card, eyebrow, heading
   stack, starfield) — Spec/guide say pause for review here, but proceed through sections given the
   user's "TIME TO BUILD" directive unless they ask to gate.
3. Core components: Nav (sticky glass), Button (blue glow pill "LET'S TALK"), GlassCard, Eyebrow,
   SectionHeading, Footer, Marquee, FadeIn/AnimatedText/Magnet wrappers.
4. Build home sections 1→16 in order; copy verbatim from Spec §7–§13.
5. Portfolio JSON system + logo wall glob. Placeholder media wired to swap.
6. SEO: per-page Head, sitemap, robots. GHL form wiring (env-var endpoint + TODO for creds).
7. Replit config (`.replit`, static deploy) + README. `git init`, commit. Push to GitHub when Jacob provides repo.
8. QA: build, prerender check (view-source has real HTML), Lighthouse, reduced-motion, mobile.

## 11. OPEN ITEMS FOR JACOB

- Vaunt VAUNT wordmark SVG/PNG asset (currently will use a styled text/placeholder).
- Vaunt GHL location ID + API key / form webhook URL + reviews widget snippet.
- Confirm YouTube channel URL (Spec §1 marks it "confirm").
- Real portfolio media beyond the ~9 Drive screenshots; video compression.
- GitHub repo URL for the Replit bridge.
