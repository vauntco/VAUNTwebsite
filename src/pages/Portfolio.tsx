import { Navigate } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { site } from '../data/site'

/**
 * /portfolio is merged into /work. Keep the URL alive: prerender a meta-refresh
 * + canonical to /work, and client-redirect after hydration.
 */
export default function Portfolio() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/work" />
        <link rel="canonical" href={`${site.domain}/work`} />
        <title>Work | VAUNT</title>
      </Head>
      <Navigate to="/work" replace />
    </>
  )
}
