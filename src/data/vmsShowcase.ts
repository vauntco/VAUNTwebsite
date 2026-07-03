// Screenshots of the live Vaunt Marketing System — driving the /vms device showcase.
// Real captures optimized into /public/vms. Two clusters: desktop ("at your desk")
// and mobile ("on the go").

export interface ShowcaseShot {
  src: string
  alt: string
  label: string
  line: string
}

/** At-your-desk browser views (landscape). */
export const deskShots: ShowcaseShot[] = [
  {
    src: '/vms/desk-inbox.jpg',
    alt: 'Unified team inbox showing SMS, calls, and email threads in one view',
    label: 'Unified Inbox',
    line: 'Every call, text, and email in one thread.',
  },
  {
    src: '/vms/desk-marketing.jpg',
    alt: 'Social planner calendar with scheduled and published posts across platforms',
    label: 'Marketing & Social',
    line: 'Schedule, publish, and track every campaign.',
  },
  {
    src: '/vms/desk-documents.jpg',
    alt: 'Branded service agreement being built in the document editor',
    label: 'Proposals & E-Sign',
    line: 'Send branded agreements and get them signed.',
  },
]

/** On-the-go phone views (portrait). */
export const mobileShots: ShowcaseShot[] = [
  {
    src: '/vms/mob-comms.jpg',
    alt: 'Mobile conversation thread with a lead — SMS, call recording, and opportunity activity',
    label: 'Conversations',
    line: 'Reply to leads by text or call from anywhere.',
  },
  {
    src: '/vms/mob-payments.jpg',
    alt: 'Mobile point-of-sale keypad collecting a $200 payment',
    label: 'Payments',
    line: 'Take a payment on the spot, from your phone.',
  },
  {
    src: '/vms/mob-pipeline.jpg',
    alt: 'Mobile opportunities pipeline with lead cards and quick actions',
    label: 'Pipeline',
    line: 'Move deals forward without touching a laptop.',
  },
]

/** Capabilities the one system connects — rendered as a linked chip strip. */
export const connectedTags = [
  'Dashboard',
  'Conversations',
  'Payments',
  'Pipeline',
  'Calendars',
  'Marketing',
  'Documents',
  'Reputation',
]
