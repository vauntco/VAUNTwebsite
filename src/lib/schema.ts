// Per-page schema.org builders. The site-wide entities (Organization, LocalBusiness,
// WebSite, Person) live as a single @graph in index.html and are referenced here by
// @id so per-page nodes stay small and never duplicate the business facts.
import { site } from '../data/site'

const D = site.domain

export const ORG_ID = `${D}/#organization`
export const LOCALBUSINESS_ID = `${D}/#localbusiness`
export const WEBSITE_ID = `${D}/#website`
export const PERSON_ID = `${D}/#founder-jacob-brikho`

/** Absolute URL for a route path ("/" → domain root). */
export function absUrl(path: string): string {
  if (!path || path === '/') return `${D}/`
  return `${D}${path.startsWith('/') ? path : `/${path}`}`
}

export interface Crumb {
  name: string
  path: string
}

/** BreadcrumbList — always lead with Home. */
export function breadcrumb(crumbs: Crumb[], id = '#breadcrumb') {
  const items = [{ name: 'Home', path: '/' }, ...crumbs]
  return {
    '@type': 'BreadcrumbList',
    '@id': `${D}/${id}`,
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absUrl(c.path),
    })),
  }
}

/** Generic WebPage node tied to the site + (optionally) a breadcrumb on the same page. */
export function webPage(opts: {
  title: string
  description: string
  path: string
  type?: string
  primaryImage?: string
}) {
  const url = absUrl(opts.path)
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.title,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': LOCALBUSINESS_ID },
    inLanguage: 'en-US',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: opts.primaryImage ?? site.seo.ogImage,
    },
  }
}

/** Service node — provider is the org, areaServed is the local footprint. */
export function serviceSchema(opts: {
  name: string
  slug: string
  description: string
  serviceType?: string
}) {
  const url = absUrl(`/services/${opts.slug}`)
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: opts.name,
    serviceType: opts.serviceType ?? opts.name,
    description: opts.description,
    url,
    provider: { '@id': ORG_ID },
    areaServed: [
      { '@type': 'AdministrativeArea', name: `${site.serviceCounty}, Michigan` },
      ...site.serviceAreaCities.map((c) => ({ '@type': 'City', name: `${c}, MI` })),
    ],
  }
}

/** BlogPosting / Article node for a migrated post. */
export function blogPostingSchema(post: {
  title: string
  slug: string
  excerpt: string
  date: string
  author: string
  cover: string
  readMins?: number
}) {
  const url = absUrl(`/blog/${post.slug}`)
  let iso = post.date
  const parsed = new Date(post.date)
  if (!Number.isNaN(parsed.getTime())) iso = parsed.toISOString()
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: url,
    datePublished: iso,
    dateModified: iso,
    image: `${D}${post.cover}`,
    author: { '@type': 'Person', name: post.author, '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  }
}

/** FAQPage from Q/A pairs. */
export function faqPage(faqs: { q: string; a: string }[], id = '#faq') {
  return {
    '@type': 'FAQPage',
    '@id': `${D}/${id}`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}
