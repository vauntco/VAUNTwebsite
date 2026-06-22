import { useState, type FormEvent } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

// TODO(Jacob): set VITE_GHL_NEWSLETTER_URL to the Vaunt GHL newsletter endpoint.
const NEWSLETTER_URL = import.meta.env.VITE_GHL_NEWSLETTER_URL as string | undefined

export default function Newsletter() {
  const [done, setDone] = useState(false)
  const [busy, setBusy] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const email = new FormData(e.currentTarget).get('email')
    setBusy(true)
    try {
      if (NEWSLETTER_URL) {
        await fetch(NEWSLETTER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })
      }
    } catch {
      /* swallow — non-critical, still acknowledge */
    } finally {
      setBusy(false)
      setDone(true)
    }
  }

  return (
    <section className="pb-20">
      <div className="container-v">
        <div className="glass glow flex flex-col items-center gap-6 p-8 text-center sm:p-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Subscribe</h2>
            <p className="mt-2 text-ink-secondary">
              Stay up to date with the latest industry trends, promotions, and more!
            </p>
          </div>
          {done ? (
            <p className="inline-flex items-center gap-2 text-brand-bright">
              <CheckCircle2 size={20} /> You&apos;re subscribed — thanks!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="nl-email" className="sr-only">Email address</label>
              <input
                id="nl-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="w-full rounded-full border border-[var(--glass-border)] bg-[rgba(255,255,255,0.03)] px-5 py-3 text-white placeholder-ink-tertiary outline-none transition focus:border-brand"
              />
              <button type="submit" disabled={busy} className="btn-cta shrink-0 disabled:opacity-60">
                {busy ? 'Joining…' : <>Subscribe <Send size={16} /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
