// Vaunt Marketing System — Spec §7.6 (verbatim).

export interface VmsBlock {
  index: string
  title: string
  body: string
  kicker: string
  /** Glowing 3D icon in /public/icons (mapped from VMS.png). */
  glow: string
}

export const vmsBlocks: VmsBlock[] = [
  {
    index: '01',
    title: 'Be Seen. Be Chosen. Be Remembered.',
    body: 'The Vaunt Marketing System brings your business to life online — connecting your SMART Website, social media, reputation management, and SEO into one seamless ecosystem. Your site adapts, your reviews grow, your posts stay active, and your brand stays visible across every platform that matters.',
    kicker: 'When people search, scroll, or share — they find you first.',
    glow: 'website',
  },
  {
    index: '02',
    title: 'Your Customer Command Center',
    body: 'All your conversations, contacts, and bookings live in one place. The built-in CRM organizes pipelines, automates reminders, manages calendars, and segments lists for smarter follow-ups. No more scattered tools or missed opportunities, just one connected system for your entire customer journey.',
    kicker: 'Where organization meets opportunity.',
    glow: 'audience',
  },
  {
    index: '03',
    title: 'Automate. Engage. Grow.',
    body: "Once your system is live, it works for you. It reactivates past customers, sends offers, manages campaigns, and follows up instantly. From promos, newsletters, reactivation campaigns, and flash sales to targeted text and email automations, your marketing keeps moving even when you're not.",
    kicker: 'Make your list work for you.',
    glow: 'marketing',
  },
  {
    index: '04',
    title: 'Done For You. Built To Scale.',
    body: "More than software — it's execution with expertise behind it. Our team plans, builds, and adapts your marketing through ongoing campaigns, creative strategy, and automation that keeps improving over time. It's an evolving engine that moves with your business and the market around it.",
    kicker: 'Real people. Real strategy. Real growth.',
    glow: 'crm-ppl',
  },
]

export interface VmsRow {
  feature: string
  replaces: string
  savings: string
}

// Spec §7.6 comparison table — verbatim, 16 rows.
export const vmsRows: VmsRow[] = [
  { feature: 'CRM & Pipeline Management', replaces: 'HubSpot, Pipedrive', savings: '$99/mo' },
  { feature: 'Unlimited Sales Funnels', replaces: 'ClickFunnels, Kartra', savings: '$297/mo' },
  { feature: 'Website Builder', replaces: 'Wix, Squarespace, WordPress', savings: '$29/mo' },
  { feature: 'Surveys & Forms', replaces: 'Typeform, Google Forms, JotForm', savings: '$49/mo' },
  { feature: 'Email Marketing', replaces: 'Mailchimp, Constant Contact, HubSpot', savings: '$99/mo' },
  { feature: '2-Way SMS Marketing', replaces: 'SimpleTexting, Twilio, Podium', savings: '$99/mo' },
  { feature: 'Booking & Appointments', replaces: 'Calendly, Acuity', savings: '$29/mo' },
  { feature: 'Workflow Automations', replaces: 'Zapier, HubSpot, ActiveCampaign', savings: '$169/mo' },
  { feature: 'Courses / Products', replaces: 'Kajabi, Teachable', savings: '$99/mo' },
  { feature: 'Call Tracking', replaces: 'CallRail, CallTrackingMetrics', savings: '$49/mo' },
  { feature: 'Reputation Management', replaces: 'Birdeye, Podium', savings: '$159/mo' },
  { feature: 'Tracking & Analytics', replaces: 'Google Analytics Pro, AgencyAnalytics', savings: '$299/mo' },
  { feature: 'Communities', replaces: 'Skool, Circle', savings: '$89/mo' },
  { feature: 'Document Signing', replaces: 'PandaDoc, DocuSign', savings: '$47/mo' },
  { feature: 'Payment Processing & Invoicing', replaces: 'Stripe standalone, QuickBooks Payments, Square', savings: '$79/mo + fees' },
]

export const vmsTotals = {
  monthly: '$1,690+/mo',
  summary: 'Total replaced value ≈ $1,690+/mo.',
}
