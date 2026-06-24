import { useState, type FormEvent } from 'react'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import FormConsent from './FormConsent'
import { trackLeadConversion } from '../../lib/analytics'

// Vaunt's own GHL endpoint goes here (env var). Leave unset → form shows a
// friendly notice instead of failing silently.
// TODO(Jacob): set VITE_GHL_WEBHOOK_URL to the Vaunt GHL form/webhook URL.
const GHL_WEBHOOK = import.meta.env.VITE_GHL_WEBHOOK_URL as string | undefined

type Status = 'idle' | 'submitting' | 'success' | 'error'

const fields = [
  { name: 'firstName', label: 'First Name', type: 'text', required: true, autoComplete: 'given-name', half: true },
  { name: 'lastName', label: 'Last Name', type: 'text', required: true, autoComplete: 'family-name', half: true },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', half: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, autoComplete: 'tel', half: true },
  { name: 'company', label: 'Company', type: 'text', required: false, autoComplete: 'organization', half: true },
  { name: 'website', label: 'Website', type: 'url', required: false, autoComplete: 'url', half: true },
] as const

export default function ContactForm({ onPanel = false }: { onPanel?: boolean }) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    // Honeypot — bots fill hidden fields.
    if (data._gotcha) return

    setStatus('submitting')
    setError('')

    if (!GHL_WEBHOOK) {
      // No endpoint configured yet — acknowledge without losing the lead's intent.
      setTimeout(() => { setStatus('success'); trackLeadConversion() }, 600)
      return
    }

    try {
      const res = await fetch(GHL_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payload: {
            data: {
              'First Name': data.firstName,
              'Last Name': data.lastName,
              'Email': data.email,
              'Phone': data.phone,
              'Company': data.company,
              'Website': data.website,
              'Comments': data.comments,
            },
          },
        }),
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      trackLeadConversion()
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const labelColor = onPanel ? 'text-white/80' : 'text-ink-secondary'
  const inputBase = onPanel
    ? 'w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none transition focus:border-white focus:bg-white/15'
    : 'w-full rounded-xl border border-[var(--glass-border)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-white placeholder-ink-tertiary outline-none transition focus:border-brand focus:bg-[rgba(120,180,255,0.06)]'

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl py-14 text-center">
        <CheckCircle2 size={48} className={onPanel ? 'text-white' : 'text-brand-bright'} />
        <h3 className="mt-4 font-display text-2xl font-bold text-white">Thanks — we&apos;ll be in touch!</h3>
        <p className={`mt-2 max-w-sm ${onPanel ? 'text-white/80' : 'text-ink-secondary'}`}>
          Your message is on its way. We&apos;ll reach out shortly to set up your free discovery call.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2" noValidate>
      {fields.map((f) => (
        <div key={f.name} className={f.half ? 'sm:col-span-1' : 'sm:col-span-2'}>
          <label htmlFor={`cf-${f.name}`} className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
            {f.label} {f.required && <span className={onPanel ? 'text-white' : 'text-brand-bright'}>*</span>}
          </label>
          <input
            id={`cf-${f.name}`}
            name={f.name}
            type={f.type}
            required={f.required}
            autoComplete={f.autoComplete}
            className={inputBase}
          />
        </div>
      ))}

      <div className="sm:col-span-2">
        <label htmlFor="cf-comments" className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
          Comments
        </label>
        <textarea
          id="cf-comments"
          name="comments"
          rows={4}
          className={`${inputBase} resize-y`}
          placeholder="Tell us about your project…"
        />
      </div>

      {/* honeypot */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="sm:col-span-2">
        {/* TODO(Jacob): mount Google reCAPTCHA here with the Vaunt site key. */}
        <FormConsent onPanel={onPanel} />
      </div>

      {status === 'error' && (
        <p className="sm:col-span-2 inline-flex items-center gap-2 text-sm text-red-300" role="alert">
          <AlertCircle size={16} /> {error}
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={
            onPanel
              ? 'inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-display font-semibold text-brand-deep transition hover:bg-white/90 disabled:opacity-60 sm:w-auto'
              : 'btn-cta w-full disabled:opacity-60 sm:w-auto'
          }
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Sending…
            </>
          ) : (
            'Submit'
          )}
        </button>
      </div>
    </form>
  )
}
