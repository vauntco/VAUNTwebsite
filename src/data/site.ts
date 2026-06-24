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
  address: {
    street: '5553 Victoria Dr.',
    city: 'West Bloomfield',
    region: 'MI',
    regionName: 'Michigan',
    postalCode: '48322',
    country: 'US',
  },
  locations: ['Bloomfield, MI', 'Fort Lauderdale, FL'],
  serviceArea: 'Serving Southeast Michigan and Southeast Florida for 8+ years.',
  // Primary local-SEO target: Oakland County, MI (HQ is West Bloomfield).
  serviceCounty: 'Oakland County',
  // Cities used for areaServed schema + local content. West Bloomfield first (HQ).
  serviceAreaCities: [
    'West Bloomfield',
    'Bloomfield Hills',
    'Bloomfield Township',
    'Birmingham',
    'Farmington Hills',
    'Novi',
    'Troy',
    'Royal Oak',
    'Southfield',
    'Rochester Hills',
    'Commerce Township',
    'Walled Lake',
    'Keego Harbor',
    'Orchard Lake',
  ],
  geo: {
    lat: 42.597066,
    lng: -83.286078,
    region: 'US-MI',
    placename: 'West Bloomfield, Michigan',
  },
  social: {
    instagram: 'https://instagram.com/vaunt_co',
    linkedin: 'https://linkedin.com/company/vauntco',
    youtube: 'https://youtube.com/@vaunt_co',
  },
  seo: {
    defaultTitle: 'Web Design & Marketing Agency in West Bloomfield, MI | VAUNT',
    titleTemplate: '%s | VAUNT',
    description:
      'VAUNT is a West Bloomfield web design & digital marketing agency serving Oakland County and Metro Detroit — custom websites, branding, SEO and lead generation that convert visitors into customers.',
    // Real 1200×630 screenshot of the homepage hero (see public/og-image.jpg).
    ogImage: 'https://www.vaunt.co/og-image.jpg',
    ogImageAlt:
      'VAUNT — web design, branding and marketing agency in West Bloomfield, Michigan',
  },
} as const

export type Site = typeof site
