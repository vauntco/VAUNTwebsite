import { Head } from 'vite-react-ssg'
import { site } from '../data/site'

interface SeoProps {
  title?: string
  description?: string
  /** Path only, e.g. "/about". Combined with the canonical domain. */
  path?: string
  noTitleTemplate?: boolean
  ogImage?: string
}

/**
 * Per-route head tags. vite-react-ssg injects these into the prerendered HTML
 * so every page ships a real <title>, meta description, canonical and OG tags
 * (Spec §15 — this is why we prerender).
 */
export default function Seo({
  title,
  description = site.seo.description,
  path = '/',
  noTitleTemplate = false,
  ogImage = site.seo.ogImage,
}: SeoProps) {
  const fullTitle = !title
    ? site.seo.defaultTitle
    : noTitleTemplate
      ? title
      : site.seo.titleTemplate.replace('%s', title)

  const canonical = `${site.domain}${path === '/' ? '' : path}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="VAUNT" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
