import { useEffect } from 'react'

const WIDGET_SRC =
  'https://app.vaunt.co/reputation/widgets/review_widget/JAYL1vCr5s3B70FvcZ5L?widgetId=6a3986446ee90a1a16f93843'
const SCRIPT_SRC = 'https://app.vaunt.co/reputation/assets/review-widget.js'
const SCRIPT_ID = 'ghl-review-widget-js'

/**
 * Live GoHighLevel reviews widget (Spec §5). The iframe is self-contained; the
 * GHL script auto-sizes its height. Loaded client-side once. The container keeps
 * the id #ghl-reviews-widget so GHL can target it if needed.
 */
export default function GhlReviews() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return
    const s = document.createElement('script')
    s.id = SCRIPT_ID
    s.src = SCRIPT_SRC
    s.async = true
    document.body.appendChild(s)
  }, [])

  return (
    <div id="ghl-reviews-widget" className="mx-auto w-full max-w-5xl">
      <iframe
        className="lc_reviews_widget w-full"
        src={WIDGET_SRC}
        title="Vaunt customer reviews"
        style={{ minWidth: '100%', width: '100%', border: 0 }}
        scrolling="no"
      />
    </div>
  )
}
