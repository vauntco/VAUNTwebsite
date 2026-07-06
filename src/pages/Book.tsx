import { useEffect } from 'react'
import { Clock, Video, BadgeCheck } from 'lucide-react'
import Seo from '../lib/Seo'
import PageHero from '../components/layout/PageHero'
import FadeIn from '../components/motion/FadeIn'

// GHL / LeadConnector booking widget. The iframe is self-contained; form_embed.js
// listens for postMessage height events and auto-resizes it by its id.
const BOOKING_SRC = 'https://app.vaunt.co/widget/booking/hgkS0VW9Q3ZH6VMcFFW3'
const BOOKING_IFRAME_ID = 'hgkS0VW9Q3ZH6VMcFFW3_1783370886855'
const SCRIPT_SRC = 'https://app.vaunt.co/js/form_embed.js'
const SCRIPT_ID = 'ghl-form-embed-js'

/**
 * Unlisted booking page. Reachable only via the direct /book URL Jacob shares —
 * noindex, no internal links, and excluded from the sitemap (see vite.config.ts,
 * which skips prerendered noindex pages).
 */
export default function Book() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return
    const s = document.createElement('script')
    s.id = SCRIPT_ID
    s.src = SCRIPT_SRC
    s.async = true
    document.body.appendChild(s)
  }, [])

  return (
    <>
      <Seo
        title="Book a Free Consultation"
        path="/book"
        description="Schedule a free video consultation with Vaunt."
        noindex
      />

      <PageHero
        eyebrow="Book a Call"
        title={
          <>
            Book a <span className="text-brand-bright">Free Consultation</span>
          </>
        }
        intro="Pick a time that works for you and we'll talk through your website, brand, and growth goals — no pressure, no obligation."
      />

      {/* Quick reassurance strip */}
      <section className="pb-4">
        <div className="container-v">
          <FadeIn className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: Clock, label: '30 minutes', sub: 'Quick, focused session' },
              { icon: Video, label: 'Video call', sub: 'Meet face to face' },
              { icon: BadgeCheck, label: '100% free', sub: 'No obligation to book' },
            ].map((item) => (
              <div key={item.label} className="glass flex items-center gap-3 px-5 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[rgba(120,180,255,0.06)] text-brand-bright">
                  <item.icon size={18} />
                </span>
                <span>
                  <span className="block font-display text-sm font-semibold text-white">
                    {item.label}
                  </span>
                  <span className="block text-xs text-ink-secondary">{item.sub}</span>
                </span>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Booking widget */}
      <section className="section-pad pt-6">
        <div className="container-v">
          <FadeIn className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-white p-2 shadow-glow sm:p-3">
            <iframe
              id={BOOKING_IFRAME_ID}
              src={BOOKING_SRC}
              title="Book a consultation with Vaunt"
              className="w-full"
              style={{ border: 'none', overflow: 'hidden', width: '100%', minHeight: '700px' }}
              scrolling="no"
            />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
