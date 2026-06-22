// Single source of truth for NAP, social, SEO defaults (Spec §1, §13, §15).
export const site = {
  name: 'Vaunt',
  legalName: 'Vaunt LLC',
  brandName: 'Vaunt Marketing & Design',
  domain: 'https://www.vaunt.co',
  founded: 2018,
  tagline: 'More Than An Agency.',
  secondaryTagline: 'Detroit Based, Global Reach.',
  mission:
    'A full-service, innovative agency on a mission to drive growth and deliver standout results. We help brands thrive through strategic marketing, brand building, and website design.',
  phone: '(248) 955-2428',
  phoneHref: 'tel:+12489552428',
  smsStopNumber: '+1 248-955-2428',
  emails: {
    info: 'info@vaunt.co',
    jacob: 'jacob@vaunt.co',
    staff: 'staff@vaunt.co',
  },
  hq: '5553 Victoria Dr., West Bloomfield, MI 48322',
  locations: ['Bloomfield, MI', 'Fort Lauderdale, FL'],
  serviceArea: 'Serving Southeast Michigan and Southeast Florida for 8+ years.',
  social: {
    instagram: 'https://instagram.com/vaunt_co',
    linkedin: 'https://linkedin.com/company/vauntco',
    youtube: 'https://youtube.com/@vaunt_co',
  },
  seo: {
    defaultTitle: 'Digital Marketing Services in Michigan | VAUNT',
    titleTemplate: '%s | VAUNT',
    description:
      'VAUNT is an innovative full-stack marketing agency helping brands grow through strategic marketing, brand building, and high-impact website design.',
    // TODO(Jacob): export a PNG version for widest social support; SVG works for most crawlers.
    ogImage: 'https://www.vaunt.co/og-image.svg',
  },
} as const

export type Site = typeof site
