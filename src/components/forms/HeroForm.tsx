import { useState, type FormEvent } from 'react'
import { ArrowRight, ChevronDown, CheckCircle2, Loader2 } from 'lucide-react'
import FormConsent from './FormConsent'
import { services } from '../../data/services'
import { trackLeadConversion } from '../../lib/analytics'
import { submitLead } from '../../lib/ghl'

// Mirror the live service list, plus catch-alls for VMS and undecided visitors.
const NEEDS = [...services.map((s) => s.name), 'CRM / VMS', 'Not sure yet']

type Status = 'idle' | 'submitting' | 'success'

/** Compact "I'm ___ — ___. I need ___" quick-start form (hero CTA). */
export default function HeroForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus('submitting')
    try {
      await submitLead({
        firstName: String(data.name ?? ''),
        email: String(data.email ?? ''),
        comments: `Service needed: ${data.need}`,
        formType: 'Hero Inquiry',
      })
    } catch {
      /* non-blocking — still acknowledge the lead */
    }
    trackLeadConversion()
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="glass glow mx-auto flex max-w-xl items-center gap-3 p-5 text-left sm:mx-0">
        <CheckCircle2 className="shrink-0 text-brand-bright" size={26} />
        <div>
          <p className="font-display font-semibold text-white">Got it — talk soon.</p>
          <p className="text-sm text-ink-secondary">We&apos;ll reply within one business day.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass glow mx-auto max-w-xl p-4 text-left sm:mx-0 sm:p-5">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-3 text-base sm:text-lg">
        <span className="text-ink-secondary">I&apos;m</span>
        <input
          name="name"
          required
          aria-label="Your name"
          placeholder="your name"
          autoComplete="name"
          className="field-inline w-28 flex-1"
        />
        <span className="text-ink-tertiary">—</span>
        <input
          name="email"
          type="email"
          required
          aria-label="Your email"
          placeholder="you@brand.com"
          autoComplete="email"
          className="field-inline w-44 flex-1"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3 text-base sm:text-lg">
        <span className="text-ink-secondary">I need</span>
        <span className="relative inline-flex items-center">
          <select name="need" aria-label="What you need" defaultValue="Web Design" className="field-inline font-semibold">
            {NEEDS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <ChevronDown size={15} className="pointer-events-none -ml-5 text-brand-bright" />
        </span>

        <button type="submit" disabled={status === 'submitting'} className="btn-cta ml-auto mt-1 disabled:opacity-60">
          {status === 'submitting' ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending
            </>
          ) : (
            <>
              Start a Project <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>

      <div className="mt-3">
        <FormConsent compact />
      </div>
    </form>
  )
}
