import { Head } from 'vite-react-ssg'
import { site } from '../data/site'

interface SeoProps {
  title?: string
  description?: string
  /** Path only, e.g. "/about". Combined with the canonical domain. */
  path?: string
  noTitleTemplate?: boolean
  ogImage?: string
  ogImageAlt?: string
  /** "website" (default) or "article" for blog posts. */
  ogType?: 'website' | 'article'
  /** Keep a page out of the index (e.g. 404). */
  noindex?: boolean
  /** Article metadata — only emitted when ogType === "article". */
  article?: { published?: string; modified?: string; author?: string }
  /** Per-page schema.org node(s). Wrapped in a single @graph and prerendered. */
  jsonLd?: object | object[]
}

/**
 * Per-route head tags. vite-react-ssg (react-helmet-async) injects these into the
 * prerendered HTML so every page ships a real <title>, meta description, canonical,
 * OG/Twitter tags and structured data (Spec §15 — this is why we prerender).
 */
export default function Seo({
  title,
  description = site.seo.description,
  path = '/',
  noTitleTemplate = false,
  ogImage = site.seo.ogImage,
  ogImageAlt = site.seo.ogImageAlt,
  ogType = 'website',
  noindex = false,
  article,
  jsonLd,
}: SeoProps) {
  const fullTitle = !title
    ? site.seo.defaultTitle
    : noTitleTemplate
      ? title
      : site.seo.titleTemplate.replace('%s', title)

  const canonical = `${site.domain}${path === '/' ? '' : path}`
  const imageType = ogImage.endsWith('.png')
    ? 'image/png'
    : ogImage.endsWith('.svg')
      ? 'image/svg+xml'
      : 'image/jpeg'

  const graph = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : null

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, follow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="VAUNT" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:type" content={imageType} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />

      {/* Article metadata */}
      {ogType === 'article' && article?.published && (
        <meta property="article:published_time" content={article.published} />
      )}
      {ogType === 'article' && article?.modified && (
        <meta property="article:modified_time" content={article.modified} />
      )}
      {ogType === 'article' && article?.author && (
        <meta property="article:author" content={article.author} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Local geo signals (business area) */}
      <meta name="geo.region" content={site.geo.region} />
      <meta name="geo.placename" content={site.geo.placename} />

      {graph && (
        <script type="application/ld+json">
          {JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}
        </script>
      )}
    </Head>
  )
}
