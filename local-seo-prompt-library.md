# Local SEO Prompt Library — Claude Cowork

20 paste-ready prompts for local home-services SEO, organized by area. Adapted from Sarvesh Shrivastava's framework, cleaned and de-scrambled (7 prompts in the original had opening lines displaced to the bottom — fixed here).

**Tool requirements:** Prompts 9, 16, 17 assume SEMrush. Prompt 14 assumes Ahrefs. Prompts 10, 12, 20 assume Google Search Console / GA4. All GBP prompts just need Chrome. Swap in whatever stack you actually have, or have Claude pull data manually where a tool is missing.

**Order of execution** (don't run all 20 at once): see the 12-week rollout at the bottom.

---

## STEP 0 — Load business context first

Run this once at the start of any SEO session. Below the generic template is a pre-filled Spore Shield version you can paste directly (fill the bracketed gaps I didn't have).

### Generic template
```
Here is everything you need to know about my business before we start any SEO work. Reference this every time I ask you to run an audit, build a strategy, or analyze competitors. Never ask me for this information again.

BUSINESS BASICS: Business name / Address / Phone / Website / Google Business Profile URL / Years in business / Team size

SERVICES + MARKET: Primary service / Secondary services / Service areas (5 cities) / Target customer / Average job value

SEO GOALS: Top 5 keywords I want to rank for / Keywords I currently rank for / Keywords I should rank for but don't

CURRENT STANDINGS: Google reviews (total, rating, new/month) / GBP monthly views / Monthly website traffic / Current map pack status / Biggest SEO problem right now (one honest sentence)

COMPETITORS: 3x [name — GBP URL — website — why they're beating me]

WHAT I'VE ALREADY TRIED: [agency, DIY, tools, what worked/didn't]

HOW I WANT YOU TO WORK: Prioritize quick wins unless I say otherwise. Tag every recommendation with impact (high/med/low) and time-to-result. Output comparisons in spreadsheet format. If unsure, say so — don't guess. Never ask me for this info again.
```

### Pre-filled — Spore Shield
```
Here is everything you need to know about my business before we start any SEO work. Reference this every time I ask you to run an audit, strategy, or competitor analysis. Never ask me for this again.

BUSINESS BASICS:
Business name: Spore Shield
Phone: (248) 955-2269
Website: sporeshield.com (pricing: sporeshield.com/pricing)
Google Business Profile URL: [PASTE GBP URL]
Address: [PASTE — West Bloomfield / Metro Detroit MI]
Years in business: [X] / Team size: solo operator (owner handles all lead calls)

SERVICES + MARKET:
Primary service: mold inspection and air sampling
Secondary services: post-remediation clearance testing, pre-purchase mold inspection, commercial/tenant inspections, moisture-source diagnosis
Service areas: West Bloomfield, [city2], [city3], [city4], [city5] (Metro Detroit)
Target customer: pre-purchase home buyers, homeowners with suspected mold, realtors/restoration referrals
Average job value: $[X] (pull real tiers from sporeshield.com/pricing — never estimate)

SEO GOALS:
Top 5 keywords to rank for: mold inspection [city], mold testing [city], mold inspection near me, pre-purchase mold inspection [city], [keyword5]
Currently rank for: [keyword1], [keyword2]
Should rank for but don't: [keyword1], [keyword2]

CURRENT STANDINGS:
Google reviews: [X] total, [X] stars, [X]/month
GBP monthly views / website traffic: [X] / [X]
Map pack status: [ranking for X, not for Y]
Biggest SEO problem right now: [one honest sentence]

COMPETITORS:
1. [name — GBP URL — website — why they beat me]
2. [name — GBP URL — website — why they beat me]
3. [name — GBP URL — website — why they beat me]

HOW I WORK: Quick wins first unless I say otherwise. Tag every rec with impact + time-to-result. Spreadsheet format for comparisons. Don't guess — flag uncertainty. Direct, no fluff. Never ask me for this info again.
```

---

## PART 1 — Google Business Profile (1–8)

### 1. GBP category audit
*Wrong primary/secondary categories = invisible for high-intent searches. Start here.*
```
Open Chrome and go to Google Maps. Search "[service] in [city]" for these 3 keywords: [keyword1], [keyword2], [keyword3]. For each search, note which competitors show up in the Map Pack. Then open each competitor's GBP listing and extract their primary category and all secondary categories.

Put everything in a spreadsheet, one tab per keyword. Columns: business name, primary category, secondary categories, star rating, review count, ranking position. Highlight any categories competitors have that I'm missing.

Then give me a prioritized list of categories to add, ranked by how many top competitors have them. Start with categories all 3 competitors share (non-negotiable). End with categories only 1 competitor has (differentiation opportunities).
```

### 2. GBP attributes audit
*Attributes ("free estimates," "veteran-owned," "24/7") affect rankings AND click-through.*
```
Open Chrome and go to my GBP at [URL] and these competitors: [URL1], [URL2], [URL3]. For each listing, extract every visible attribute/tag (e.g. "veteran-owned," "free estimates," "offers online appointments," "24/7 availability").

Spreadsheet. Columns: attribute name, my listing (yes/no), competitor 1/2/3 (yes/no). Highlight every attribute competitors have that I'm missing. Then split into three lists: attributes ALL competitors have (table stakes), 2 of 3 (strong rec), only 1 (differentiation).

For each missing attribute, give likely ranking impact (high/med/low) and whether it also affects click-through rate.
```

### 3. Competitor review teardown
*Velocity beats total count. Mine competitor reviews for your own keyword/review strategy.*
```
Open Chrome and go to these competitor GBP listings: [URL1], [URL2], [URL3]. For each, read the last 50 reviews and extract: total review count, average rating, reviews in last 30/60/90 days, top 5 most-mentioned services, top 5 most-mentioned neighborhoods/cities, most-mentioned staff names, recurring complaints or negative themes, and the top 5 keywords/phrases I should train my customers to mention in reviews based on what's working for competitors.
```

### 4. Review response strategy
*Responding to reviews improves ranking. Each response is keyword-rich content you control.*
```
Open Chrome and go to my GBP at [URL] and competitors: [URL1], [URL2], [URL3]. For each, analyze the last 30 owner responses. Extract: response rate %, avg response time, whether responses mention specific services/locations, avg response length, tone, how negative reviews are handled. Spreadsheet comparing me vs competitors.

Then build a review-response template system:
- 3 variations for 5-star reviews that naturally include [service keyword] + [city keyword]
- 3 variations for 4-star (acknowledge the gap, invite return)
- 3 variations for 3-star (accountability + resolution)
- 3 variations for 1–2 star (professional, empathetic, defuses without defensiveness)
Each 40–80 words, sounding like a real person.
```

### 5. GBP posts strategy
*Posts signal an active business. Most competitors don't post — that's the opening.*
```
Open Chrome and go to my GBP at [URL] and competitors: [URL1], [URL2], [URL3]. For each, check the posts section: total posts last 90 days, posts/week, post types (offer/update/event/product), images yes/no, CTA button yes/no, topics, seasonal patterns, engagement if visible. Spreadsheet.

Then build an 8-week GBP posting calendar, 2–3 posts/week, mixing seasonal promos, before/after showcases, neighborhood-specific posts for [area1]/[area2]/[area3], review highlights, team spotlights, and educational posts. Each post must include at least one of [keyword1], [keyword2], [keyword3], be 100–150 words with a clear CTA, and include an image description. Write full copy for weeks 1–4 and detailed outlines for weeks 5–8.
```

### 6. Services section optimization
*Prime keyword real estate you fully control. Cross-check against your website.*
```
Open Chrome and go to my GBP at [URL] and competitors: [URL1], [URL2], [URL3]. For each, extract the full services section: every service, whether it has a description, the full description text, how it's structured. Note which services every competitor lists (non-negotiable) and which only some list (opportunities). Comparison spreadsheet.

Then audit my services section against my website at [URL]: services on my site missing from GBP, GBP services with no description, descriptions weaker than competitors.

Then write optimized descriptions for all my services — each 2–3 sentences / 40–60 words, including the primary service keyword, at least one service area from [area1]/[area2]/[area3], a specific customer benefit, and sounding human. My core services: [service1], [service2], [service3], [service4], [service5].
```

### 7. GBP description optimization
*750 characters of controlled copy. Write 3 versions and test them.*
```
Open Chrome and go to my GBP at [URL] and competitors: [URL1], [URL2], [URL3]. Extract each full GBP description into a spreadsheet: business name, full text, character count, primary keyword used (which), secondary keywords, service areas, trust signals, USPs, CTA (and text), tone.

Analyze what all top competitors mention (non-negotiable), what nobody mentions that I could own, and what I say that nobody else does. Then write 3 optimized descriptions, each under 750 characters:
- V1 keyword-focused (max ranking signal)
- V2 conversion-focused (make them call now)
- V3 trust-focused (experience, reviews, local credibility)
All three include [keyword1], [keyword2], [keyword3] and service areas [area1], [area2], [area3]. Sound human.
```

### 8. GBP photo audit
*Consistency beats volume. 3–5 quality geo-tagged photos/week signals an active business.*
```
Open Chrome and go to my GBP at [URL] and competitors: [URL1], [URL2], [URL3]. For each, analyze the photo section: total count, photos uploaded in last 30/90 days, photo types (team, job site, before/after, trucks, equipment, storefront, completed work), quality (pro vs phone), stock-looking photos, photos with people, photos showing local landmarks, avg photos/week. Spreadsheet comparing me vs each.

Then build an 8-week photo plan: exact number/week to beat the top competitor's velocity by 50%, a weekly shot list (what to photograph, where, why), which weeks prioritize before/afters vs team vs trucks vs completed jobs, a keyword+location naming convention, and geotagging instructions for [area1], [area2], [area3]. No generic office photos.
```

---

## PART 2 — Website (9–13)

### 9. Keyword gap audit *(SEMrush)*
*Find every keyword competitors rank for that you don't — that's the revenue gap.*
```
Open Chrome and log into SEMrush. Open the Keyword Gap tool with my domain [yourdomain.com] and competitors [competitor1.com], [competitor2.com], [competitor3.com].

Filter to keywords where competitors rank positions 1–20 but I don't rank at all; export. Then filter further to: monthly volume 100–2,000, keyword contains one of [city name]/[service type]/"near me"/"emergency"/"best"/"local", and keyword difficulty under 40.

For the top 20: current volume, difficulty, which competitors rank and at what position, whether an existing page of mine could rank with optimization, or whether I need a new page. Spreadsheet sorted by opportunity score (high volume + low difficulty + multiple competitors ranking = highest). Final column "Action Required": "Optimize existing page" or "Create new page".
```

### 10. Money page audit *(Google Search Console)*
*Find page-2 rankings that are one title-tag change from page 1.*
```
Open Chrome and go to Google Search Console at search.google.com/search-console, log in, and open the property for [yourdomain.com]. Set the date range to the last 3 months and export all queries and pages.

For each page, tell me what keywords it ranks for, average position per keyword, impressions and clicks per keyword, and whether the page is actually optimized for that keyword or ranking accidentally.

Then identify: pages in positions 4–15 for high-value keywords (one push from top 3), pages with high impressions but low clicks (title/meta problem), pages with zero rankings (dead weight or untapped), and keywords ranking on the wrong page (cannibalization).

Then a priority action list — quick wins (optimize this week), medium (rebuild this month), long-term (new pages over 90 days). For each: current position, target position, time-to-improvement, and exact on-page changes needed.
```

### 11. Service + city page builder
*Google ranks pages, not sites. One dedicated page per service per city.*
```
I need location-specific service pages. Primary service: [main service]. Cities: [city1], [city2], [city3], [city4], [city5]. Website: [URL]. Target keyword pattern: [service] + [city], [service] near [city], best [service] in [city].

First, open Chrome and check [URL] for which city+service pages already exist and which are missing.

Then for each missing combo, write a fully optimized page: SEO title under 60 chars (service + city), meta description under 155 chars (service + city + reason to click), H1 (service + city, natural), 100-word opening addressing that city's pain point, 150-word "why choose us" specific to that city (landmarks/neighborhoods/area challenges), 200-word service-details section (what's included, the process, what they get), a social-proof placeholder for that city, a 3-question FAQ specific to that city, and a CTA with phone + "Call now for same-day service in [city]".

For each page: exact URL slug, 3 internal-linking opportunities from existing pages, and 2 local citations/directories for that city+service combo.
```

### 12. Google Search Console analysis *(GSC)*
*The page-2 goldmine: rank 11–20 with ≥100 impressions = your highest-priority targets.*
```
Open Chrome and log into Google Search Console at search.google.com/search-console for my property [yourdomain.com]. Export the last 90 days: all queries, all pages, clicks, impressions, CTR, average position.

Find my page-2 goldmine: every keyword ranking position 11–20 with at least 100 impressions/month. For each, open the ranking page and tell me whether the keyword is in the title tag, the H1, the first 100 words; the page word count; whether internal links point to it; and the current meta description.

Then build a 30-day optimization sprint: week 1 = title/H1 fixes for the top 10 page-2 keywords, week 2 = content additions for thin pages (<500 words), week 3 = internal linking fixes (which pages link to which), week 4 = meta description rewrites for high-impression/low-CTR pages. For every fix, write the exact new title tag, H1, and meta — not instructions, the actual copy.
```

### 13. Review sentiment analysis
*Reverse-engineer the exact emotional language customers use, then write copy in it.*
```
Open Chrome and go to competitor GBP listings: [URL1], [URL2], [URL3]. Read the last 100 reviews for each. Deep sentiment analysis across all: top 20 emotional words customers use most (e.g. "relieved," "impressed," "finally," "trustworthy"), top 10 specific outcomes mentioned (e.g. "fixed in one visit," "no mess left behind"), top 5 fears/frustrations mentioned before service (e.g. "worried it would cost a fortune"), the exact phrases customers use when recommending to others, and language patterns in 5-star reviews but not 3-star.

Do the same for my reviews at [my GBP URL]. Compare and tell me where the emotional gaps are. Then rewrite, using real customer language: my GBP description, my homepage headline + subheadline, my review-request script, and 3 social-proof statements for my website.
```

---

## PART 3 — Backlinks + Authority (14–16)

### 14. Competitor backlink audit *(Ahrefs)*
*You don't need hundreds of links — you need the right few. Find where competitors get authority.*
```
Open Chrome and log into Ahrefs. Open Site Explorer, enter [competitor1.com]. Export the full backlink profile filtered to: dofollow only, linking-domain DR 20+, linking-domain traffic 100+ monthly visits, link type not sitewide (no footer/sidebar). Repeat for [competitor2.com] and [competitor3.com].

Find my link opportunities: domains linking to ALL 3 competitors but not me (highest priority), to 2 of 3 (medium), to 1 (review). For each high-priority opportunity: domain + URL, DR, site type (directory/news/blog/association/sponsor), how the competitor earned it (guest post/sponsorship/citation/PR), my realistic chance (high/med/low), and the exact outreach strategy.

Then a 90-day plan: month 1 = 5 easiest (directories, citations, local associations), month 2 = 5 medium (local news, sponsorships, guest posts), month 3 = 5 authority (industry publications, gov, universities). For every link, include the contact method and write the full outreach email.
```

### 15. Local citation audit
*Inconsistent NAP across directories suppresses rankings. Fixes show results within 30 days.*
```
My business info: Name [exact name], Address [exact, incl. suite/unit], Phone [number], Website [URL]. Open Chrome and search my business name across these, one by one: Google Business Profile, Yelp, Bing Places, Apple Maps, Facebook, BBB, Angi, HomeAdvisor, Thumbtack, Houzz, Yellow Pages, Manta, Foursquare, Superpages, Citysearch, plus any [industry]-specific directories.

For each: does my listing exist, name/address/phone/URL exactly as listed, duplicate listings, rating + review count. Spreadsheet, every inconsistency flagged red.

Then: a priority fix list (most damaging first) with step-by-step correction instructions, a list of high-value directories where I have no listing and should create one now, and a monthly citation-maintenance checklist.
```

### 16. Local search intent mapping *(SEMrush)*
*Stop chasing high-volume awareness terms. Map keywords to the buyer journey; prioritize Stage 4.*
```
I want to map target keywords to the buyer journey so I know what to prioritize for revenue vs long-term traffic. Business: [business type] in [city]. Core services: [service1], [service2], [service3].

Open Chrome and log into SEMrush. Pull all keywords in my niche for my service area with volume 20+/month. Categorize each into one of four stages:
- Stage 1 problem-unaware (e.g. "water coming through ceiling")
- Stage 2 problem-aware (e.g. "how to fix a leaking roof")
- Stage 3 solution-aware (e.g. "how to choose an HVAC company")
- Stage 4 ready to hire (e.g. "emergency plumber [city]")

For each stage: total keywords, combined monthly volume, average difficulty, top 10 by volume. Then a strategy per stage: Stage 4 → service pages + GBP, Stage 3 → comparison/FAQ pages, Stage 2 → educational blog content funneling to service pages, Stage 1 → problem-identification content for early trust. Finally, the 5 Stage-4 keywords I should rank for in 90 days and exactly what it takes to rank for each.
```

---

## PART 4 — Content + Tracking (17–20)

### 17. Content gap analysis *(SEMrush)*
*Find every piece of content competitors rank for that you don't have.*
```
Open Chrome and log into SEMrush. Use the Content Gap tool with my domain [yourdomain.com] vs competitors [competitor1.com], [competitor2.com], [competitor3.com].

Filter to keywords where competitors have ranking content but I have nothing. Filter further to: 50–500 monthly searches, contains a question word (how/why/what/when/is/can/does), and relates to problems my service solves.

For the top 20, organize into: problem-awareness ("why is my AC not cooling"), solution-comparison ("repair vs replace water heater"), and local-service ("emergency plumber [city] cost"). For each keyword: a suggested SEO page title, a URL slug, and a 200-word content brief (target keyword, secondary keywords, main questions to answer, word-count recommendation, internal links, bottom CTA). Prioritize problem-awareness content first.
```

### 18. Entity optimization
*Google ranks entities, not just sites. Build your business in the knowledge graph.*
```
I want to build and strengthen my business entity in Google's knowledge graph to improve local rankings and potentially trigger a knowledge panel. Details: Name [exact name], Address [full], Phone [number], Website [URL], GBP [GBP URL], Founded [year], Owner [name], Industry [industry].

Open Chrome and: (1) check for a Knowledge Panel by searching "[business name] [city]" and "[owner name] [business name]" — report what appears; (2) check Wikidata at wikidata.org for my business name — report findings; (3) audit schema at search.google.com/test/rich-results by entering my URL — tell me what schema exists and what's missing; (4) check brand consistency by searching my business name in quotes across Google and noting whether name/address/phone are consistent everywhere.

Then build a complete entity-optimization plan: the exact LocalBusiness JSON-LD schema for my homepage (full, ready to paste), authoritative profiles to claim (Wikipedia if eligible, Crunchbase, LinkedIn company page, industry associations), the anchor text and brand mentions to build across the web, and how to trigger a knowledge panel.
```

### 19. Competitor GBP posting pattern analysis
*Reverse-engineer the timing, format, and seasonality that already work in your market.*
```
Open Chrome and go to competitor GBP listings: [URL1], [URL2], [URL3]. For each, do a forensic analysis of posting history as far back as visible. Per post extract: exact date + time, day of week, post type (offer/update/event/product), word count, image yes/no, CTA button + text, topic/service, neighborhood or city mentioned, price/offer included, hashtags/formatting. One row per post in a spreadsheet.

Then analyze patterns: which days they post most, time-of-day patterns, most-used post types, seasonal topics, highest-frequency months, and gaps I can exploit by posting consistently when they don't.

Then build a posting strategy designed to beat these specific competitors based on the data — optimal days, times, post types, topic mix for my market. Write the first 4 weeks of posts in full.
```

### 20. Monthly SEO performance report *(GSC + GBP + GA4)*
*Track calls and revenue from organic — not vanity traffic.*
```
Open Chrome and access: Google Search Console for [yourdomain.com], Google Business Profile insights for [GBP URL], and Google Analytics 4 for [yourdomain.com] if available. Pull last 30 days vs previous 30 days for every metric below.

From GSC: total organic clicks (+ change), impressions (+ change), avg CTR (+ change), avg position (+ change), top 10 keywords by clicks, top 10 keywords that improved in position, top 10 that dropped, pages that gained the most clicks, pages that lost the most.

From GBP: total profile views, search queries (branded vs discovery), calls, direction requests, website clicks, photo views, review-count change.

From GA4 (if available): organic sessions, organic conversion rate, top organic landing pages by sessions, bounce rate on top pages.

Then a one-page report: 3 wins this month, 3 problems to address, the single most important action for next month, and whether GBP calls went up or down. Readable in 5 minutes, shareable with the team.
```

---

## 12-Week Rollout

| Week | Run | Focus |
|------|-----|-------|
| 1 | Context block, then **1 + 2** | GBP categories + attributes (fastest ranking wins) |
| 2 | **3, 4, 5** | Reviews + GBP posts (velocity target + self-running calendar) |
| 3 | **6, 7, 8** | Services, description, photos (full GBP optimized) |
| 4 | **9, 12** | Keyword gap + GSC (which pages to fix first) |
| 5–6 | **10, 11, 13** | Website audit, city pages, review sentiment |
| 7–8 | **14, 15, 16** | Backlinks, citations, intent mapping |
| 9–10 | **17, 18, 19** | Content gaps, entity, posting patterns (long-term moat) |
| 11–12 | **20** | Monthly report — double down on what moved |

---

## For Vaunt clients
This is a drop-in playbook for the restoration/roofing/home-services clients Vaunt serves. The context block at the top becomes a per-client intake; everything below is a repeatable monthly service. Prompts 1–8 are the GBP retainer, 9–13 the website project, 14–16 the authority build, 17–20 the ongoing content + reporting layer.
