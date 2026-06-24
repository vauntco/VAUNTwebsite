import { Link } from 'react-router-dom'
import { site } from '../../data/site'

interface FormConsentProps {
  onPanel?: boolean
  /** Single-line micro variant for compact forms (e.g. hero). */
  compact?: boolean
}

/** TCPA/messaging consent shown under lead-form submit buttons. */
export default function FormConsent({ onPanel = false, compact = false }: FormConsentProps) {
  if (compact) {
    return (
      <p className="text-[10px] font-light leading-relaxed text-white/30">
        By submitting you consent to receive communications from Vaunt. Msg &amp; data rates may
        apply. Reply STOP to opt out.{' '}
        <Link to="/privacy" className="underline transition-colors hover:text-white/50">
          Privacy Policy
        </Link>
      </p>
    )
  }

  return (
    <p className={`text-xs leading-relaxed ${onPanel ? 'text-white/70' : 'text-ink-tertiary'}`}>
      By clicking &lsquo;SUBMIT&rsquo; I agree to receive marketing, transactional, and informational
      messages from Vaunt and its partners about Digital Marketing. These messages may include texts,
      calls, or prerecorded/artificial voice messages, sent via phone system, CRM, or ATDS. I confirm
      that I am using the number I own and provided, and that I can unsubscribe anytime by texting
      &lsquo;STOP&rsquo; to {site.smsStopNumber}. Message frequency may vary. This consent applies even
      if I am on a Do Not Call list. I am at least 18 years old and have read the{' '}
      <Link
        to="/privacy"
        className={onPanel ? 'underline transition-colors hover:text-white' : 'text-brand-bright hover:underline'}
      >
        Privacy Policy
      </Link>
      . Msg &amp; data rates may apply.
    </p>
  )
}
