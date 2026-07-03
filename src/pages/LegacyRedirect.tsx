import { Navigate } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { site } from '../data/site'

/**
 * Redirect for dead Webflow-era URLs still in Google's index (/showcase, /post/*,
 * /author/*, old /portfolio/* slugs, /testimonials/*). Same pattern as /portfolio →
 * /work: canonical + meta-refresh when prerendered, client redirect after hydration.
 */
export default function LegacyRedirect({ to, title = 'VAUNT' }: { to: string; title?: string }) {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${to}`} />
        <link rel="canonical" href={`${site.domain}${to === '/' ? '' : to}`} />
        <title>{title}</title>
      </Head>
      <Navigate to={to} replace />
    </>
  )
}
