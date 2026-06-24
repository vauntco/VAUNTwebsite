import {
  Monitor,
  Sparkles,
  BrainCircuit,
  Share2,
  Camera,
  Target,
  Search,
  Printer,
  ShieldCheck,
  Compass,
  Palette,
  MessageSquare,
  LayoutTemplate,
  BookOpen,
  Image,
  Video,
  MonitorPlay,
  CreditCard,
  FileText,
  Flag,
  Package,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { brand, type Brand } from './brands'

/** One feature / capability inside a service. */
export interface ServiceFeature {
  title: string
  desc: string
  /** Glowing 3D icon in /public/icons (preferred). */
  glow?: string
  /** Vector fallback when no glow icon fits the idea. */
  icon?: LucideIcon
}

/** A platform / channel shown with its real logo (or a glow icon when it has none). */
export interface ChannelItem {
  name: string
  brand?: Brand
  glow?: string
  icon?: LucideIcon
  /** When present, channels render as descriptive cards instead of a logo strip. */
  desc?: string
}

export interface ServiceChannels {
  title: string
  intro?: string
  items: ChannelItem[]
}

export interface Service {
  slug: string
  name: string
  /** Verbatim card description (Spec §7.3) — used on the home/services grid. */
  short: string
  /** Lead paragraph for the detail-page hero. */
  lead: string
  icon: LucideIcon
  /** Big statement under the title (echoes the brand flyers). */
  pitch: string
  /** Expanded body copy — one or two paragraphs. */
  overview: string[]
  /** Heading above the feature grid (replaces the old "What's included"). */
  featuresTitle: string
  features: ServiceFeature[]
  channels?: ServiceChannels
  /** Short proof chips. */
  outcomes: string[]
  /** Web Design uses the SMART-Website flyer layout. */
  flyer?: boolean
  /** SEO overrides — else derived from name + short + locality in ServiceDetail. */
  seoTitle?: string
  seoDescription?: string
}

export const services: Service[] = [
  {
    slug: 'web-design',
    name: 'Web Design',
    seoTitle: 'Web Design in West Bloomfield & Oakland County, MI',
    seoDescription:
      'Custom, conversion-focused web design for West Bloomfield & Oakland County, MI businesses. Fast, SEO-ready SMART Websites that turn visitors into customers — starting at $1,500.',
    short:
      "Stunning websites that blend form and function, enhancing user experience while reflecting your brand's identity and driving conversions.",
    lead:
      'Not just a website — a SMART Website. Built to attract, convert, and grow with your business.',
    icon: Monitor,
    flyer: true,
    pitch: 'Designed to Impress. Built to Perform.',
    overview: [
      "Your website is your first impression, your best salesperson, and the one storefront that's open 24/7. We don't build brochures — we build SMART Websites engineered to attract the right visitors, hold their attention, and turn them into customers.",
      'Every site is custom-designed around your brand, wired into the tools you already use, and built on a foundation that loads fast, ranks well, and scales as you grow. Strategy, design, copy, and development — handled end to end.',
    ],
    featuresTitle: 'Inside a SMART Website',
    features: [
      { title: 'Responsive Design', glow: 'responsive', desc: 'Pixel-perfect on every screen — desktop, tablet, and phone — so you never lose a visitor to a broken layout.' },
      { title: 'Full Setup & Security', glow: 'security', desc: 'Hosting, SSL, daily backups, and updates all handled for you. Your site stays fast, safe, and online.' },
      { title: 'Blog CMS', glow: 'blog', desc: 'Publish articles, update pages, and grow your brand yourself — no developer required.' },
      { title: 'SEO Framework', glow: 'seo', desc: 'Clean structure, fast load times, and on-page SEO built in from day one so customers find you first.' },
      { title: 'Smart Integrations', glow: 'integrations', desc: 'Your CRM, booking, payments, and marketing tools — finally connected and talking to each other.' },
      { title: 'eCommerce Ready', glow: 'ecommerce', desc: 'Add a store, checkout, or online ordering whenever you’re ready to start selling.' },
      { title: 'Lead Systems', glow: 'lead-funnel', desc: 'Forms, funnels, and automations that capture interest and turn it into booked work.' },
    ],
    channels: {
      title: 'Built on the platforms you trust',
      intro: 'From classic CMS to modern app stacks — we build on whatever fits your goals best.',
      items: [
        { name: 'WordPress', brand: brand.wordpress },
        { name: 'Webflow', brand: brand.webflow },
        { name: 'Shopify', brand: brand.shopify },
        { name: 'Next.js', brand: brand.nextjs },
        { name: 'React', brand: brand.react },
        { name: 'Vite', brand: brand.vite },
        { name: 'Replit', brand: brand.replit },
        { name: 'Lovable', brand: brand.lovable },
        { name: 'Figma', brand: brand.figma },
      ],
    },
    outcomes: ['Custom design — never a template', 'Mobile-first & lightning fast', 'Built to rank and convert', 'Owned by you, not rented'],
  },
  {
    slug: 'branding',
    name: 'Branding',
    short:
      'Crafting unique brands that resonate. We develop compelling identities that connect with your audience, build trust, and set you apart in the market.',
    lead:
      'We craft identities that are instantly recognizable, deeply consistent, and impossible to ignore.',
    icon: Sparkles,
    pitch: 'Be Seen. Be Chosen. Be Remembered.',
    overview: [
      "A brand is more than a logo — it's the feeling people get when they see your name. We build identities that are instantly recognizable, consistent across every touchpoint, and built to stick in your customers' minds.",
      'From naming and logo design to color, typography, and voice, we deliver a complete system your business can apply everywhere with confidence — online, in print, and in person.',
    ],
    featuresTitle: 'What we build',
    features: [
      { title: 'Logo & Identity', icon: Sparkles, desc: 'A primary logo, variations, and marks designed to look sharp at any size, on any background.' },
      { title: 'Color & Typography', icon: Palette, desc: 'A distinctive palette and type system that set the tone and make you recognizable at a glance.' },
      { title: 'Brand Standards', icon: BookOpen, desc: 'A guidelines document covering color, type, spacing, and usage so your brand stays consistent everywhere.' },
      { title: 'Messaging & Voice', icon: MessageSquare, desc: 'Taglines, positioning, and a voice that says who you are and why you matter — clearly.' },
      { title: 'Collateral & Applications', icon: LayoutTemplate, desc: 'Cards, social templates, signage, and assets so your brand shows up polished, every time.' },
    ],
    channels: {
      title: 'Crafted in',
      items: [
        { name: 'Figma', brand: brand.figma },
        { name: 'Photoshop', brand: brand.photoshop },
        { name: 'Illustrator', brand: brand.illustrator },
      ],
    },
    outcomes: ['Memorable and ownable', 'Consistent across every channel', 'Built to scale with you'],
  },
  {
    slug: 'ai-marketing',
    name: 'AI Marketing',
    short:
      'Harness AI to optimize your marketing. We use data-driven insights to target the right audience, boost engagement, and drive results.',
    lead:
      'AI paired with proven strategy — reaching the right people at the right time, and automating the follow-up.',
    icon: BrainCircuit,
    pitch: 'Automate. Engage. Grow.',
    overview: [
      "Marketing works best when it runs on data and never sleeps. We pair AI with proven strategy to reach the right people, at the right time, with the right message — and automate the follow-up so no opportunity slips through.",
      'From audience targeting to automated nurture sequences, we build a marketing engine that learns, optimizes, and keeps moving your business forward even when you’re off the clock.',
    ],
    featuresTitle: 'How it works',
    features: [
      { title: 'Audience Targeting', glow: 'dashboard', desc: 'Data-driven targeting that puts your message in front of the people most likely to buy.' },
      { title: 'Workflow Automations', glow: 'lead-funnel', desc: 'Automated sequences that reactivate past customers, nurture new leads, and follow up instantly.' },
      { title: 'Campaign Optimization', glow: 'analytics', desc: 'Continuous testing and tuning across channels so every dollar works harder.' },
      { title: 'Smart Integrations', glow: 'integrations', desc: 'Your tools connected into one system — leads, messages, and data in one place.' },
    ],
    channels: {
      title: 'Powered by',
      items: [
        { name: 'ChatGPT', brand: brand.chatgpt },
        { name: 'n8n', brand: brand.n8n },
        { name: 'Make', brand: brand.make },
        { name: 'Zapier', brand: brand.zapier },
        { name: 'GoHighLevel', brand: brand.ghl },
      ],
    },
    outcomes: ['Less manual work', 'Faster follow-up', 'More from every lead'],
  },
  {
    slug: 'social-media',
    name: 'Social Media',
    short:
      "Boost your brand's presence with tailored social media strategies. We create engaging content that connects, builds community, and drives growth.",
    lead:
      'We plan, create, and manage content that builds a following and keeps your brand top of mind.',
    icon: Share2,
    pitch: 'Show up. Stand out. Stay top of mind.',
    overview: [
      "Your audience is scrolling right now — we make sure they stop on you. We plan, create, and manage social content that builds a following, sparks engagement, and keeps your brand front and center.",
      'From strategy and content calendars to design and community management, we handle the day-to-day so you stay consistent without lifting a finger.',
    ],
    featuresTitle: 'What we handle',
    features: [
      { title: 'Content Strategy & Calendar', glow: 'dashboard', desc: 'A clear plan and posting calendar mapped to your goals — no more guessing what to post.' },
      { title: 'Content Creation', glow: 'marketing', desc: 'Scroll-stopping graphics, captions, and short-form video designed for each platform.' },
      { title: 'Community Management', glow: 'audience', desc: 'We engage your audience, reply to comments, and build a real community around your brand.' },
      { title: 'Performance Reporting', glow: 'analytics', desc: 'Clear monthly reporting on what’s working so the strategy keeps improving.' },
    ],
    channels: {
      title: 'Where we post',
      items: [
        { name: 'Instagram', brand: brand.instagram },
        { name: 'TikTok', brand: brand.tiktok },
        { name: 'Facebook', brand: brand.facebook },
        { name: 'LinkedIn', brand: brand.linkedin },
        { name: 'YouTube', brand: brand.youtube },
      ],
    },
    outcomes: ['Consistent presence', 'Real engagement', 'Content that converts'],
  },
  {
    slug: 'photo-video',
    name: 'Photo/Video',
    short:
      "Capture your brand's story with stunning visuals. We create high-quality photo and video content that engages and elevates your brand.",
    lead:
      'High-quality photo and video that show your brand at its best and make people feel something.',
    icon: Camera,
    pitch: 'Tell your story in stunning detail.',
    overview: [
      "People remember what they see. We capture high-quality photo and video that show your brand at its best — and make people feel something.",
      'From product and lifestyle shoots to social-ready short-form video, we produce content that elevates your brand across your website, ads, and feeds.',
    ],
    featuresTitle: 'What we produce',
    features: [
      { title: 'Brand Photoshoots', icon: Camera, desc: 'On-brand photography that captures your team, your space, and your personality.' },
      { title: 'Product & Lifestyle', icon: Image, desc: 'Crisp product shots and lifestyle imagery that make people want what you offer.' },
      { title: 'Short & Long-Form Video', icon: Video, desc: 'Reels, ads, and brand films edited to stop the scroll and hold attention.' },
      { title: 'Ready for Web & Social', icon: MonitorPlay, desc: 'Delivered in the right formats for your site, your ads, and every platform.' },
    ],
    channels: {
      title: 'Made for',
      items: [
        { name: 'Instagram', brand: brand.instagram },
        { name: 'TikTok', brand: brand.tiktok },
        { name: 'YouTube', brand: brand.youtube },
      ],
    },
    outcomes: ['Premium visuals', 'On-brand every time', 'Built for the scroll'],
  },
  {
    slug: 'lead-generation',
    name: 'Lead Generation',
    short:
      'Drive quality leads with targeted strategies. We capture and nurture prospects, turning interest into lasting business relationships.',
    lead:
      'We run the channels that put you in front of ready-to-buy customers — and capture every one automatically.',
    icon: Target,
    pitch: 'Turn attention into booked work.',
    overview: [
      "Leads are the lifeblood of your business. We build and run the systems that put you in front of ready-to-buy customers, capture them automatically, then nurture every one until they’re ready to say yes.",
      'We run proven acquisition channels side by side, track every lead in one pipeline, and follow up by email and text so nothing falls through the cracks.',
    ],
    featuresTitle: 'Capture, nurture, and track',
    features: [
      { title: 'Lead Capture Funnels', glow: 'lead-funnel', desc: 'High-converting landing pages and forms engineered to turn clicks into contacts.' },
      { title: 'Nurture Automations', glow: 'dashboard', desc: 'Automated email & SMS sequences that follow up instantly and keep every lead warm.' },
      { title: 'Pipeline Tracking', glow: 'analytics', desc: 'Every lead tracked from first touch to closed deal inside your CRM.' },
    ],
    channels: {
      title: 'Channels we run',
      intro: 'A full mix of acquisition channels, run together so leads come from every direction.',
      items: [
        { name: 'Google Local Services (LSA)', brand: brand.googleLSA, desc: 'Google-screened, pay-per-lead ads that put you at the very top of local search with the “Google Guaranteed” badge.' },
        { name: 'Google Ads', brand: brand.googleAds, desc: 'Search and display campaigns that capture customers the exact moment they’re looking for what you offer.' },
        { name: 'Meta Ads', brand: brand.meta, desc: 'Facebook & Instagram campaigns that find — and retarget — your ideal customers where they spend their time.' },
        { name: 'Direct Lead Generators', glow: 'lead-funnel', icon: Target, desc: 'Landing pages and funnels built to convert paid and organic traffic into booked calls and form fills.' },
        { name: 'Referral Networks', glow: 'audience', icon: Users, desc: 'Partner and referral systems that turn happy customers and partners into a steady, low-cost lead source.' },
      ],
    },
    outcomes: ['More qualified leads', 'Instant follow-up', 'Every lead tracked'],
  },
  {
    slug: 'seo',
    name: 'SEO',
    seoTitle: 'SEO Services in West Bloomfield & Oakland County, MI',
    seoDescription:
      'Local SEO and search optimization for Oakland County, MI businesses. Rank higher on Google, get found by nearby customers, and grow organic leads month over month.',
    short:
      'Built to rank, fast and discoverable. We structure your site and content so the right customers find you first when they search.',
    lead:
      'When customers search, you want to be the first name they see — so we build you to rank.',
    icon: Search,
    pitch: 'Get found first.',
    overview: [
      "When customers search, you want to be the first name they see. We structure your site and content so search engines understand it, trust it, and rank it — bringing steady, compounding traffic you don't pay per click for.",
      'From technical foundations and page speed to local visibility and on-page optimization, we cover the full picture so the right customers find you when it matters most.',
    ],
    featuresTitle: 'What we optimize',
    features: [
      { title: 'On-Page SEO', glow: 'seo', desc: 'Titles, structure, and content optimized around the terms your customers actually search for.' },
      { title: 'Local Search', glow: 'website', desc: 'Google Business Profile and local signals tuned so you show up in your area and on the map.' },
      { title: 'Technical & Core Web Vitals', glow: 'dashboard', desc: 'Fast load times, clean code, and a crawlable structure that search engines reward.' },
      { title: 'Content That Ranks', glow: 'blog', desc: 'Helpful, keyword-driven content that earns rankings and answers customer questions.' },
    ],
    channels: {
      title: 'Tuned for',
      items: [
        { name: 'Google', brand: brand.google },
        { name: 'Google Business', brand: brand.googleBusiness },
        { name: 'Search Console', brand: brand.searchConsole },
        { name: 'Analytics', brand: brand.analytics },
      ],
    },
    outcomes: ['Higher rankings', 'More organic traffic', 'Found in local search'],
  },
  {
    slug: 'print',
    name: 'Print',
    short:
      'Bring your brand to life with captivating print. We design materials that reflect your identity, engage your audience, and leave a lasting impression.',
    lead:
      'A great printed piece is something people hold, keep, and remember — designed with the same polish as everything online.',
    icon: Printer,
    pitch: 'Make a lasting impression — in hand.',
    overview: [
      "In a digital world, physical still matters. A great printed piece is something people hold, keep, and remember. We design print that carries your brand with the same polish as everything online.",
      'From business cards and brochures to signage and packaging, we handle design and production so every piece looks unmistakably you.',
    ],
    featuresTitle: 'What we design',
    features: [
      { title: 'Business Cards & Stationery', icon: CreditCard, desc: 'Cards, letterhead, and stationery that make every handoff feel premium.' },
      { title: 'Brochures & One-Sheets', icon: FileText, desc: 'Printed pieces that tell your story and sell at a glance.' },
      { title: 'Signage & Large Format', icon: Flag, desc: 'Banners, signs, and displays that get you noticed in the real world.' },
      { title: 'Packaging & Collateral', icon: Package, desc: 'Branded packaging and collateral that turn a product into an experience.' },
    ],
    channels: {
      title: 'Crafted in',
      items: [
        { name: 'Illustrator', brand: brand.illustrator },
        { name: 'Photoshop', brand: brand.photoshop },
      ],
    },
    outcomes: ['Print-ready files', 'On-brand and consistent', 'Production handled'],
  },
  {
    slug: 'reputation-management',
    name: 'Reputation Management',
    short:
      'Automated reviews and reputation that build trust. Your reviews grow and your brand stays visible across every platform that matters.',
    lead:
      "Today's customers check reviews before they ever call — we make sure what they find builds trust.",
    icon: ShieldCheck,
    pitch: 'Reviews that build trust on autopilot.',
    overview: [
      "Today's customers check reviews before they ever call, so we make sure what they find builds trust. Our system automatically asks happy customers for reviews and helps you respond to every one.",
      'More five-star reviews, across every platform that matters, with monitoring and responses handled — so your reputation keeps growing while you focus on the work.',
    ],
    featuresTitle: 'How it works',
    features: [
      { title: 'Automated Review Requests', glow: 'lead-funnel', desc: 'Every happy customer gets an automatic, perfectly-timed ask by text and email.' },
      { title: 'Monitoring & Response', glow: 'security', desc: 'New reviews flow into one place so nothing is missed and every review gets a reply.' },
      { title: 'Multi-Platform Reputation', glow: 'check', desc: 'Grow and manage reviews across Google, Facebook, and the platforms your customers trust.' },
      { title: 'Built Into Your CRM', glow: 'dashboard', desc: 'Reviews connect to your VMS so requests, replies, and ratings all live in one system.' },
    ],
    channels: {
      title: 'Manages reviews on',
      items: [
        { name: 'Google', brand: brand.google },
        { name: 'Facebook', brand: brand.facebook },
        { name: 'Yelp', brand: brand.yelp },
        { name: 'GoHighLevel', brand: brand.ghl },
      ],
    },
    outcomes: ['More 5-star reviews', 'Nothing missed', 'Trust that converts'],
  },
  {
    slug: 'consulting',
    name: 'Consulting',
    short:
      'Expert guidance to help you market smarter. We bring strategy, design, and a marketing system together so your growth runs on a plan, not guesswork.',
    lead:
      'Sometimes you don’t need more tools — you need a clear plan and someone who’s done it before.',
    icon: Compass,
    pitch: 'A plan, not guesswork.',
    overview: [
      "Sometimes you don't need more tools — you need a clear plan and someone who's done it before. We bring strategy, design, and a marketing system together so your growth runs on a roadmap, not guesswork.",
      'We audit where you are, map where you’re going, and stay in your corner as an ongoing partner to keep you moving.',
    ],
    featuresTitle: 'What you get',
    features: [
      { title: 'Marketing Strategy & Roadmap', glow: 'dashboard', desc: 'A clear, prioritized plan that ties your goals to the channels that will get you there.' },
      { title: 'Brand & Growth Audits', glow: 'seo', desc: 'An honest review of your brand, site, and funnel — with the gaps and the opportunities.' },
      { title: 'Channel & Campaign Planning', glow: 'marketing', desc: 'The right mix of channels, budgets, and campaigns mapped to your stage and market.' },
      { title: 'Ongoing Advisory', glow: 'audience', desc: 'A partner on call to review results, adjust the plan, and keep momentum.' },
    ],
    channels: {
      title: 'We run on',
      items: [
        { name: 'ClickUp', brand: brand.clickup },
        { name: 'GoHighLevel', brand: brand.ghl },
      ],
    },
    outcomes: ['Clear direction', 'Prioritized actions', 'A partner in your corner'],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

// Full capability list from the proposal "What We Do" (Spec §7.3).
export const capabilities = [
  'Web Design',
  'Branding',
  'AI Marketing',
  'Social Media',
  'Photo/Video',
  'Workflow Automations',
  'Email/SMS Marketing',
  'Lead Generation',
  'SEO',
  'Print',
  'Reputation Management',
  'Consulting',
  'CRM',
  'Payment Processing',
]
