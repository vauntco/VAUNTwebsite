import Seo from '../lib/Seo'
import PageHero from '../components/layout/PageHero'
import { site } from '../data/site'

/**
 * Honest placeholder legal pages. Real binding policy text is provided by Jacob —
 * we don't invent legal language here.
 * TODO(Jacob): replace the body with Vaunt's finalized Terms / Privacy Policy.
 */
export function Terms() {
  return (
    <>
      <Seo title="Terms & Conditions" path="/terms" description="Vaunt LLC Terms & Conditions." />
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <LegalBody>
        <p>
          These Terms &amp; Conditions govern your use of {site.domain} and the services provided by
          {' '}{site.legalName}. By using this site you agree to these terms. The full, finalized
          terms are available on request — contact us at{' '}
          <a className="text-brand-bright" href={`mailto:${site.emails.info}`}>{site.emails.info}</a>.
        </p>
        <h2>Messaging consent</h2>
        <p>
          By submitting a form on this site you agree to receive marketing, transactional, and
          informational messages from Vaunt and its partners about Digital Marketing. These messages
          may include texts, calls, or prerecorded/artificial voice messages, sent via phone system,
          CRM, or ATDS. You confirm that you are using a number you own and provided, and that you can
          unsubscribe anytime by texting &apos;STOP&apos; to {site.smsStopNumber}. Message frequency
          may vary. This consent applies even if you are on a Do Not Call list. You must be at least
          18 years old. Msg &amp; data rates may apply.
        </p>
      </LegalBody>
    </>
  )
}

export function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" path="/privacy" description="Vaunt LLC Privacy Policy." />
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <LegalBody>
        <p>
          {site.legalName} respects your privacy. We collect the information you submit through our
          forms (such as name, email, phone, company, and website) solely to respond to your inquiry
          and provide our services. We do not sell your personal information.
        </p>
        <p>
          The full, finalized Privacy Policy is available on request. For any privacy questions or to
          request deletion of your data, contact us at{' '}
          <a className="text-brand-bright" href={`mailto:${site.emails.info}`}>{site.emails.info}</a>{' '}
          or {site.phone}.
        </p>
      </LegalBody>
    </>
  )
}

function LegalBody({ children }: { children: React.ReactNode }) {
  return (
    <section className="section-pad pt-6">
      <div className="container-v">
        <div className="prose-vaunt mx-auto max-w-2xl space-y-5 text-ink-secondary [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white">
          {children}
        </div>
      </div>
    </section>
  )
}
