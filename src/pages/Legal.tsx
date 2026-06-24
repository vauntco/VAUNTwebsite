import Seo from '../lib/Seo'
import PageHero from '../components/layout/PageHero'
import { site } from '../data/site'
import {
  termsIntro,
  termsSections,
  privacyIntro,
  privacySections,
  termsUpdated,
  type TermsSection,
} from '../data/legal'

export function Terms() {
  return (
    <>
      <Seo title="Terms & Conditions" path="/terms" description="Vaunt LLC Terms & Conditions." />
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <LegalBody>
        <p className="text-sm text-ink-tertiary">Last updated: {termsUpdated}</p>
        <p>{termsIntro}</p>
        <Sections sections={termsSections} />
        <p>
          Questions about these Terms? Contact us at{' '}
          <a className="text-brand-bright" href={`mailto:${site.emails.info}`}>
            {site.emails.info}
          </a>{' '}
          or {site.phone}.
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
        <p className="text-sm text-ink-tertiary">Last updated: {termsUpdated}</p>
        <p>{privacyIntro}</p>
        <Sections sections={privacySections} />
      </LegalBody>
    </>
  )
}

function Sections({ sections }: { sections: TermsSection[] }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.title} className="space-y-3">
          <h2>{s.title}</h2>
          {s.paras?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {s.bullets && (
            <ul className="ml-1 space-y-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2.5">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-bright" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </>
  )
}

function LegalBody({ children }: { children: React.ReactNode }) {
  return (
    <section className="section-pad pt-6">
      <div className="container-v">
        <div className="mx-auto max-w-2xl space-y-6 text-ink-secondary [&_h2]:mt-2 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_p]:leading-relaxed [&_section]:scroll-mt-28">
          {children}
        </div>
      </div>
    </section>
  )
}
