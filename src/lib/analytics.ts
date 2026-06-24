// Google Ads conversion tracking.
//
// These two conversion actions used to fire on every page load (old Webflow
// footer code), which counted every visit as a conversion. They now fire ONLY
// on a successful lead-form submission — i.e. an actual lead. The gtag/GA4/Ads
// base setup lives in index.html.
const ADS_LEAD_CONVERSIONS = [
  'AW-17056640214/SRF6CI-6uIIbENbZnsU_',
  'AW-17056640214/3egsCIq7uIIbENbZnsU_',
] as const

type Gtag = (...args: unknown[]) => void

/**
 * Fire the Google Ads lead conversions. Safe to call anywhere: it's a no-op
 * during SSR/prerender and if gtag hasn't loaded (e.g. blocked by an ad
 * blocker). Call on a confirmed contact / lead-form submission only.
 */
export function trackLeadConversion(): void {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: Gtag }).gtag
  if (typeof gtag !== 'function') return
  for (const sendTo of ADS_LEAD_CONVERSIONS) {
    gtag('event', 'conversion', { send_to: sendTo })
  }
}
