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
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  slug: string
  name: string
  /** Verbatim card description (Spec §7.3). */
  short: string
  /** Lead paragraph for the detail page (grounded in the spec). */
  lead: string
  icon: LucideIcon
  /** What's included — drawn from the SMART feature + capability lists (Spec §7.5, §7.3). */
  includes: string[]
}

export const services: Service[] = [
  {
    slug: 'web-design',
    name: 'Web Design',
    short:
      "Stunning websites that blend form and function, enhancing user experience while reflecting your brand's identity and driving conversions.",
    lead:
      'Not just a website — a SMART Website. Built to attract, convert, and grow with your business, with form and function working together to reflect your brand and drive conversions.',
    icon: Monitor,
    includes: [
      'Responsive design that looks flawless on any device',
      'Full setup & security — SSL to backups, all handled',
      'Blog CMS so you can publish and grow effortlessly',
      'SEO framework built to rank, fast and discoverable',
    ],
  },
  {
    slug: 'branding',
    name: 'Branding',
    short:
      'Crafting unique brands that resonate. We develop compelling identities that connect with your audience, build trust, and set you apart in the market.',
    lead:
      'We develop compelling identities that connect with your audience, build trust, and set you apart in the market — from logo and palette to a complete brand standard.',
    icon: Sparkles,
    includes: [
      'Logo and visual identity systems',
      'Brand standards and guidelines',
      'Messaging and positioning',
      'Collateral and brand applications',
    ],
  },
  {
    slug: 'ai-marketing',
    name: 'AI Marketing',
    short:
      'Harness AI to optimize your marketing. We use data-driven insights to target the right audience, boost engagement, and drive results.',
    lead:
      'Harness AI to optimize your marketing. We use data-driven insights to target the right audience, boost engagement, and drive measurable results.',
    icon: BrainCircuit,
    includes: [
      'Audience targeting with data-driven insights',
      'Workflow automations that convert interest into sales',
      'Campaign optimization and testing',
      'Smart integrations across your tools',
    ],
  },
  {
    slug: 'social-media',
    name: 'Social Media',
    short:
      "Boost your brand's presence with tailored social media strategies. We create engaging content that connects, builds community, and drives growth.",
    lead:
      "Boost your brand's presence with tailored social media strategies. We create engaging content that connects, builds community, and drives growth.",
    icon: Share2,
    includes: [
      'Content strategy and calendar',
      'Engaging content creation',
      'Community building and management',
      'Performance reporting',
    ],
  },
  {
    slug: 'photo-video',
    name: 'Photo/Video',
    short:
      "Capture your brand's story with stunning visuals. We create high-quality photo and video content that engages and elevates your brand.",
    lead:
      "Capture your brand's story with stunning visuals. We create high-quality photo and video content that engages and elevates your brand.",
    icon: Camera,
    includes: [
      'Brand photoshoots',
      'Product and lifestyle photography',
      'Short-form and long-form video',
      'Content for web and social',
    ],
  },
  {
    slug: 'lead-generation',
    name: 'Lead Generation',
    short:
      'Drive quality leads with targeted strategies. We capture and nurture prospects, turning interest into lasting business relationships.',
    lead:
      'Drive quality leads with targeted strategies. We capture and nurture prospects, turning interest into lasting business relationships.',
    icon: Target,
    includes: [
      'Lead capture funnels and forms',
      'Nurture automations',
      'Email & SMS campaigns',
      'Pipeline tracking',
    ],
  },
  {
    slug: 'seo',
    name: 'SEO',
    short: 'Built to rank, fast and discoverable.',
    lead:
      'Built to rank, fast and discoverable. We structure your site and content so the right customers find you first when they search, scroll, or share.',
    icon: Search,
    includes: [
      'SEO framework built into every site',
      'On-page optimization',
      'Local search visibility',
      'Performance and Core Web Vitals',
    ],
  },
  {
    slug: 'print',
    name: 'Print',
    short:
      'Bring your brand to life with captivating print. We design materials that reflect your identity, engage your audience, and leave a lasting impression.',
    lead:
      'Bring your brand to life with captivating print. We design materials that reflect your identity, engage your audience, and leave a lasting impression.',
    icon: Printer,
    includes: [
      'Business cards and stationery',
      'Brochures and one-sheets',
      'Signage and large format',
      'Packaging and brand collateral',
    ],
  },
  {
    slug: 'reputation-management',
    name: 'Reputation Management',
    short: 'Automated reviews and reputation that builds trust.',
    lead:
      'Automated reviews and reputation that build trust. Your reviews grow and your brand stays visible across every platform that matters.',
    icon: ShieldCheck,
    includes: [
      'Automated review requests',
      'Review monitoring and response',
      'Reputation across key platforms',
      'GHL reviews integration',
    ],
  },
  {
    slug: 'consulting',
    name: 'Consulting',
    short: 'Expert guidance to help you market smarter.',
    lead:
      'Expert guidance to help you market smarter. We bring strategy, design, and a marketing system together so your growth runs on a plan, not guesswork.',
    icon: Compass,
    includes: [
      'Marketing strategy and roadmap',
      'Brand and growth audits',
      'Channel and campaign planning',
      'Ongoing advisory',
    ],
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
