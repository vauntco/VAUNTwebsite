// Single entry point for every Vaunt website form → one GoHighLevel workflow.
//
// All three forms (contact, hero quick-start, newsletter) POST to the same
// inbound-webhook URL. The GHL "Website > Contact us Form" workflow maps the
// nested `payload.data.*` keys below, so the shape here must match those keys
// exactly. `Form Type` distinguishes which form a lead came from.
const WEBHOOK = import.meta.env.VITE_GHL_WEBHOOK_URL as string | undefined

export type GhlFormType = 'Contact' | 'Hero Inquiry' | 'Newsletter'

export interface GhlLead {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  company?: string
  website?: string
  comments?: string
  formType: GhlFormType
}

/** Whether a webhook endpoint is configured (env var present). */
export const ghlConfigured = Boolean(WEBHOOK)

/**
 * POST a lead to the Vaunt GHL inbound webhook.
 * Returns false (without throwing) when no endpoint is configured, so callers
 * can still acknowledge the visitor. Throws on a network/HTTP failure.
 */
export async function submitLead(lead: GhlLead): Promise<boolean> {
  if (!WEBHOOK) return false
  const res = await fetch(WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      payload: {
        data: {
          'First Name': lead.firstName ?? '',
          'Last Name': lead.lastName ?? '',
          Email: lead.email ?? '',
          Phone: lead.phone ?? '',
          Company: lead.company ?? '',
          Website: lead.website ?? '',
          Comments: lead.comments ?? '',
          'Form Type': lead.formType,
        },
      },
    }),
  })
  if (!res.ok) throw new Error(`Request failed (${res.status})`)
  return true
}
