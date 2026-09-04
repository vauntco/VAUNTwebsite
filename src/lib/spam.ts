// Lightweight, key-free spam protection shared by every Vaunt form.
// Runs entirely client-side: a hidden honeypot field plus a minimum
// fill-time trap. Invisible to real visitors, no third-party service.

/** Minimum time (ms) a real human takes to fill and submit a form. */
export const MIN_FILL_MS = 2500

/**
 * True when a submission looks automated:
 *  - the honeypot field was filled (bots complete hidden inputs), or
 *  - the form was submitted implausibly fast after mount.
 * `mountedAt` is the timestamp captured when the form first rendered.
 */
export function looksLikeBot(data: Record<string, unknown>, mountedAt: number): boolean {
  if (data._gotcha) return true
  if (Date.now() - mountedAt < MIN_FILL_MS) return true
  return false
}
