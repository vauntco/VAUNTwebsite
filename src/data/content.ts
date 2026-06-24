// Misc verbatim content blocks: Why Us, FAQ, Testimonials, Blog, Team (Spec §7–§9).

export interface Pillar {
  name: string
  copy: string
}

// Spec §7.7
export const whyUsPillars: Pillar[] = [
  {
    name: 'Hard Working',
    copy: 'We believe in your success as much as our own. When you succeed, we succeed.',
  },
  {
    name: 'Innovative',
    copy: 'We embrace creativity and forward-thinking solutions to drive growth and keep you ahead of the curve.',
  },
  {
    name: 'On Time',
    copy: "We've never missed a deadline and don't plan to. We're committed to delivering on time, every time.",
  },
]

export interface Faq {
  q: string
  a: string
}

// Spec §7.10 — verbatim
export const faqs: Faq[] = [
  {
    q: 'How much does a website cost?',
    a: 'Our websites start at $1,500, with pricing increasing based on complexity, number of pages, and custom design features. Contact us for a personalized quote based on your specific needs.',
  },
  {
    q: 'What types of payment do you accept?',
    a: 'We accept credit cards, ACH transfers, and checks for payment.',
  },
  {
    q: 'Will I be able to update my website myself?',
    a: "Yes, we build websites with user-friendly platforms, and we'll show you how to make edits easily.",
  },
  {
    q: 'Can you edit my current website?',
    a: "While we prefer to build websites from scratch to ensure the best results, we do take on editing projects at our discretion. Feel free to reach out, and we'll assess your needs!",
  },
  {
    q: 'Can you integrate specific features or tools into my website?',
    a: 'Of course! We can include e-commerce, booking systems, and other tailored integrations.',
  },
  {
    q: 'Do you provide ongoing support after the website launch?',
    a: 'Yes, we offer maintenance packages to keep your site running smoothly.',
  },
]

export interface Testimonial {
  name: string
  org: string
  stars: number
  quote: string
}

// Spec §9 — reference/fallback only (live site uses GHL widget).
export const testimonials: Testimonial[] = [
  {
    name: 'Alyssa Reliford',
    org: 'Salt & Light Child Care',
    stars: 5,
    quote:
      'Hi Jacob, First of all... WOW! I clicked on the link and literal tears came to my eyes. The amount of gratitude I have for you making my vision come to life is immeasurable. Thank you from the bottom of my heart for your patience, professionalism, and incredible expertise. I am normally not at a loss for words, but this... OH MY GOSH, LIKE WOW!! Jacob, I am hardly ever impressed because my standards are through the roof, but with you and what you created... PHENOMENAL job! Thank you times a million, I pray for nothing but success for you!',
  },
  {
    name: 'Rob Robson',
    org: 'COO of Viking Laser Manufacturing',
    stars: 5,
    quote:
      'The team at Vaunt delivered a creative strategy that elevated our brand and increased our client engagement. The results have been outstanding!',
  },
  {
    name: 'Carlos Hesano',
    org: 'President of DRYmedic Restoration',
    stars: 5,
    quote:
      "Jacob and Vaunt transformed our brand with a tailored strategy that boosted visibility and drove growth. We're thrilled with the results!",
  },
  {
    name: 'Emily Ujkaj',
    org: 'Blush Salon',
    stars: 5,
    quote:
      'We had an incredible experience working with Vaunt! Jacob is very insightful, communicative and professional. He and his team conducted an amazing brand photoshoot for our business. We highly recommend Vaunt to anyone looking for professional assistance with marketing and/or web design.',
  },
  {
    name: 'Bailey Hannawa',
    org: 'EFLO Vape',
    stars: 5,
    quote:
      "A huge thank you to Jacob and Vaunt for bringing our vision to life and creating an incredible website. We're excited for what the future holds!",
  },
  {
    name: 'Rita Denha',
    org: 'CEO of Executive Language Services',
    stars: 5,
    quote:
      "We recently had the pleasure of working with Jacob at Vaunt for a complete redesign of our logo, website, and brochure. If you're looking for a reliable, innovative, and detail-oriented marketing and design company, I highly recommend Vaunt. They exceeded our expectations and transformed our brand presence across multiple platforms.",
  },
]

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'ul'; items: string[] }

export interface BlogPost {
  title: string
  date: string
  author: string
  excerpt: string
  slug: string
  cover: string
  readMins: number
  body: BlogBlock[]
}

// Migrated from vaunt.co/post/* (Spec §7.9).
export const blogPosts: BlogPost[] = [
  {
    title: 'Michigan Accountants, Tax Season Is Around the Corner. Is Your Website Ready?',
    date: 'Jan 22, 2026',
    author: 'Jacob Brikho',
    slug: 'michigan-accountants-tax-season-website',
    cover: '/blog/michigan-accountants-tax-season-website/cover.jpg',
    readMins: 4,
    excerpt:
      'Tax season drives a surge of high-intent local searches. Here is how Michigan accounting firms can make sure their website is ready to capture them.',
    body: [
      { type: 'p', text: 'Every year, tax season brings a flood of high-intent searches — people in your city looking for a CPA or accounting firm they can trust, right now. The firms that win those clients are not always the biggest. They are the ones whose website loads fast, looks credible, and makes it easy to get in touch.' },
      { type: 'p', text: 'A site that is slow, outdated, or disconnected from your tools quietly costs you during the busiest weeks of the year. It shows up as missed calls, friction for clients trying to book or send documents, and weaker visibility when locals search.' },
      { type: 'h', text: 'What a high-performing tax firm website actually does' },
      { type: 'p', text: 'It does more than look professional. A great accounting website guides clients, answers their questions quickly, and frees your team to stay focused on billable work instead of fielding the same questions over and over.' },
      { type: 'ul', items: [
        'Clear service pages so prospects instantly understand what you do',
        'Fast load times that keep visitors from bouncing',
        'Simple client interactions — calls, forms, bookings, and payments',
        'Strong local visibility so you show up when your city searches',
      ] },
      { type: 'h', text: 'Website design starting at $999' },
      { type: 'p', text: 'Our packages are streamlined and practical, not bloated. We focus on what actually moves the needle for a firm during tax season — and nothing you do not need.' },
      { type: 'ul', items: [
        'A custom design built around your firm',
        'Google Business Profile optimization for local search',
        '500 business cards to match your new brand',
        'No long-term lock-ins',
      ] },
      { type: 'h', text: 'Already have a website?' },
      { type: 'p', text: 'You may not need a full rebuild. If your site is solid but underperforming, we can enhance it with automation that captures and converts more of the leads you are already getting:' },
      { type: 'ul', items: [
        'An AI receptionist that answers and books appointments 24/7',
        'Automated follow-ups so no lead slips through the cracks',
        'Booking, intake, and workflow automation that saves your team hours',
      ] },
      { type: 'p', text: 'Tax season rewards the prepared. Book a 30-minute strategy session and we will show you exactly where your website is leaving clients on the table — and how to fix it before the rush.' },
    ],
  },
  {
    title: 'Affordable Small Business Web Design That Works',
    date: 'Aug 14, 2025',
    author: 'Jacob Brikho',
    slug: 'affordable-small-business-web-design',
    cover: '/blog/affordable-small-business-web-design/cover.jpg',
    readMins: 4,
    excerpt:
      'Affordable does not have to mean cheap. What actually drives results for small business websites — and where to spend your budget.',
    body: [
      { type: 'p', text: 'Most customers decide whether to trust your business in under three seconds — and that decision is usually based on your website. Roughly three in four people judge a company’s credibility by its online presence, and a mobile-friendly site is no longer optional. It is the baseline.' },
      { type: 'p', text: 'Affordable does not have to mean cheap. It means spending your budget on the things that actually convert, and skipping the bloat that agencies love to bill for.' },
      { type: 'h', text: 'The website problems we see every day' },
      { type: 'ul', items: [
        'Businesses running with no real online presence at all',
        'Designs that fall apart on a phone',
        'Eye-watering upfront quotes — $5,000 and up before anything ships',
        'Sites you cannot update without paying a developer',
      ] },
      { type: 'h', text: 'Why businesses trust our web design' },
      { type: 'p', text: 'We have been building sites since 2018, across just about every industry. We have helped a lawn-care company fill its calendar with bookings and a boutique grow into new locations. The approach is always the same: strategy first, modern design, and SEO baked in from day one — not bolted on later.' },
      { type: 'h', text: 'Your customers are searching right now' },
      { type: 'p', text: 'Whether you are in Southeast Michigan or Florida, someone in your market is searching for what you offer today. The only question is whether they find you or a competitor. Book a free consultation and let us build you a site that earns trust in those first three seconds — and keeps it.' },
    ],
  },
  {
    title: 'Why Your Website Matters More Than Ever (Especially Here in Michigan)',
    date: 'Jul 9, 2025',
    author: 'Jacob Brikho',
    slug: 'why-your-website-matters',
    cover: '/blog/why-your-website-matters/cover.jpg',
    readMins: 4,
    excerpt:
      'Your website is the first impression most customers will ever have of your brand. Here is why it matters more than ever in a competitive Michigan market.',
    body: [
      { type: 'p', text: 'Your website is not a digital brochure anymore. For most customers, it is the very first touchpoint they will ever have with your brand — and in a competitive market like Michigan, from Birmingham to Detroit, that first impression decides whether they reach out or move on.' },
      { type: 'h', text: 'Your website is your first impression' },
      { type: 'p', text: 'A site that works has to nail four things: it loads fast, it looks great on a phone, it is easy to navigate, and it says the right thing the moment someone lands. The hard part is that most owners already sense their site falls short — they just are not sure how to fix it, or they have been burned by a vendor before.' },
      { type: 'h', text: 'Our approach at Vaunt' },
      { type: 'p', text: 'We start with research, not design. Before we touch a layout, we get clear on your customers, your market, and the action you want visitors to take. Then we build something tailored to that — never a recycled template. We have done it for law firm homepages, e-commerce stores, and professional-service redesigns alike.' },
      { type: 'h', text: 'Built on Webflow, built to last' },
      { type: 'p', text: 'We build on Webflow for speed and stability, and so you are not locked out of your own site. You get a fast, secure foundation and the ability to make simple updates yourself, whenever you want.' },
      { type: 'h', text: 'Michigan businesses deserve better' },
      { type: 'p', text: 'You deserve a site built by people who know your market and design for performance — conversions first, with the polish to match. Let’s make something great together.' },
    ],
  },
  {
    title: "Your Website Sucks. Here's How to Fix It",
    date: 'Apr 30, 2025',
    author: 'Jacob Brikho',
    slug: 'your-website-sucks-fix-it',
    cover: '/blog/your-website-sucks-fix-it/cover.jpg',
    readMins: 4,
    excerpt:
      'Outdated, slow, hard to update, and not bringing in leads? Here is an honest look at why most sites underperform — and exactly what a site that converts includes.',
    body: [
      { type: 'p', text: 'Let’s be honest — for a lot of businesses, the website just isn’t cutting it. It looks dated, it’s slow on a phone, it’s a pain to update, and it isn’t bringing in a single lead. If that stings a little, you’re not alone. Most sites quietly underperform. The good news is that it’s very fixable.' },
      { type: 'h', text: 'We build websites that reflect your brand (and convert)' },
      { type: 'p', text: 'A professional web presence matters no matter your industry. We focus on modern, custom design instead of tired templates — a Webflow-based studio serving Michigan and Metro Detroit businesses that want a site that actually works for them.' },
      { type: 'h', text: 'What you get with a Vaunt website' },
      { type: 'ul', items: [
        'A three-week turnaround',
        'Custom Webflow design — no templates',
        'Mobile optimization and fast performance',
        'SEO best practices built in',
        'Contact forms, booking systems, and custom galleries',
        'eCommerce when you need it',
        'Hosting with one hour of updates per month (additional edits at $125/hour)',
      ] },
      { type: 'h', text: 'Who we work with' },
      { type: 'p', text: 'We build for home services, legal, medical and healthcare, industrial, retail, restaurants, and B2B service businesses — anyone who needs their site to pull its weight.' },
      { type: 'h', text: 'Let’s make your website work harder' },
      { type: 'p', text: 'Your website should be your hardest-working salesperson. Sites start at $3,000, with hosting at $150/month. Reach out and let’s turn that underperforming page into something that actually grows the business.' },
    ],
  },
  {
    title: "Your Website Is Costing You Clients — Here's How to Fix It",
    date: 'Apr 30, 2025',
    author: 'Jacob Brikho',
    slug: 'website-costing-you-clients',
    cover: '/blog/website-costing-you-clients/cover.jpg',
    readMins: 4,
    excerpt:
      'If your site is slow, clunky on mobile, or hard to update, it is quietly turning prospects away. Here is what a growth-focused redesign looks like in 2025.',
    body: [
      { type: 'p', text: 'Is your website helping your business — or quietly hurting it? For most prospects it’s the first impression they’ll ever get. If it loads slowly, frustrates them on mobile, or feels hard to use, they don’t call to complain. They just leave, and you never know it happened.' },
      { type: 'h', text: 'Why smart businesses are redesigning in 2025' },
      { type: 'p', text: 'Today’s customers expect speed and a flawless mobile experience. The complaints we hear most from new clients are always the same: the site is slow, it’s a hassle to update, it looks dated, and it simply doesn’t convert.' },
      { type: 'h', text: 'Web design that works — built for growth' },
      { type: 'p', text: 'We build custom Webflow sites that are fast, secure, and responsive, delivered in about three weeks. Every build includes SEO optimization, revision rounds, hosting, and monthly updates — with optional add-ons as you grow.' },
      { type: 'h', text: 'Built for Michigan and Florida businesses' },
      { type: 'p', text: 'We specialize in Metro Detroit and South Florida, pairing local market knowledge with a relentless focus on conversion — and full agency support for branding and marketing when you need it.' },
      { type: 'h', text: 'Pricing that makes sense' },
      { type: 'ul', items: [
        'Design packages start at $3,000',
        'Hosting from $150/month, including one hour of updates',
        'Additional edits at $125/hour',
        'SEO add-on from $500/month',
      ] },
      { type: 'p', text: 'Let’s launch something you’re proud of. Book a free consultation and we’ll show you exactly where your current site is leaking clients — and how to plug the gaps.' },
    ],
  },
  {
    title: 'Vaunt: Building Brands with Purpose and Passion',
    date: 'Nov 19, 2024',
    author: 'Jacob Brikho',
    slug: 'vaunt-building-brands',
    cover: '/blog/vaunt-building-brands/cover.jpg',
    readMins: 4,
    excerpt:
      'A look at who we are, where we came from, and the values behind the work — local Detroit roots, global reach, and a partner mindset.',
    body: [
      { type: 'p', text: 'Vaunt isn’t just an agency — we’re a growth partner. We pair local Detroit expertise with global reach, helping businesses grow through strategic marketing, brand building, and websites designed to perform.' },
      { type: 'h', text: 'The Vaunt origin story' },
      { type: 'p', text: 'Our founder, Jacob Brikho, started building businesses at 15. He launched Vaunt in 2018 to close a real gap: affordable, high-quality marketing for Michigan businesses that were being overlooked or overcharged. Since then the team has run omnichannel campaigns and brand strategy across a wide range of industries.' },
      { type: 'h', text: 'Why Vaunt?' },
      { type: 'p', text: 'We believe a small, sharp team can deliver outsized impact — and hundreds of completed projects back that up. A few values guide everything we do:' },
      { type: 'ul', items: [
        'An ownership mindset — we treat your business like our own',
        'Results-driven strategy over vanity metrics',
        'Brand clarity that makes you memorable',
        'Tailored solutions, never cookie-cutter',
        'Honest, accessible pricing',
      ] },
      { type: 'h', text: 'A clear vision for the future' },
      { type: 'p', text: 'We focus on small and medium-sized businesses across Southeast Michigan, staying lean so we can move fast and cut the overhead that slows bigger shops down. Our reputation is built one client success at a time.' },
      { type: 'h', text: 'Our mission' },
      { type: 'p', text: 'Elevate user experiences through design, build marketing that actually targets the right people, ship informative websites, grow brand recognition, and deliver value that resonates with the audiences our clients care about.' },
      { type: 'p', text: 'Let’s grow together. Whether you’re clarifying your brand, expanding into new markets, or rebuilding your online presence, we’d love to help.' },
    ],
  },
]

export interface TeamMember {
  name: string
  role: string
}

// Spec §8
export const team: TeamMember[] = [
  { name: 'Jacob Brikho', role: 'Founder, CEO' },
  { name: 'Peter Shamoon', role: 'COO' },
  { name: 'Fasih Zia', role: 'Lead Developer' },
  { name: 'Ali Behraz', role: 'CRM Specialist' },
  { name: 'Afraz Khan', role: 'Automation Expert' },
  { name: 'Rhyannah Sanchai', role: 'Graphic Designer' },
  { name: 'Mohsin Shojah', role: 'SEO Expert' },
  { name: 'You?', role: "We're Hiring" },
]
