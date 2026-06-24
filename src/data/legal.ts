// Terms & Conditions — consolidated from Vaunt's Webflow terms plus the
// messaging-consent clause from the current site. Plain-language clauses; the
// binding numbers (revisions, notice periods, fees, venue) are preserved.

export interface TermsSection {
  title: string
  paras?: string[]
  bullets?: string[]
}

export const termsUpdated = 'June 23, 2026'

export const termsIntro =
  'These Terms & Conditions ("Terms") govern the services provided by Vaunt LLC ("Vaunt," "we," or "us") and your use of vaunt.co. The specific services for any engagement are defined in the applicable Scope of Work, proposal, or invoice (the "Scope"), which is incorporated into these Terms by reference. By engaging our services, signing a proposal, authorizing payment, or using this site, you ("Client," "you") agree to these Terms.'

export const termsSections: TermsSection[] = [
  {
    title: '1. Scope of Services',
    paras: [
      'The services we provide are defined in the applicable Scope of Work, proposal, or invoice. Any work requested outside that stated scope requires a separate agreement or additional fees. Vaunt reserves the right to rely solely on the Scope document as the authoritative description of the engagement.',
    ],
  },
  {
    title: '2. Pricing & Payment',
    paras: [
      'Fees are specified in your invoice or proposal and are due upon receipt unless stated otherwise. Recurring fees are automatically charged to the authorized payment method on file. Work may be suspended for non-payment, and any additional services beyond the agreed scope are billed at our standard hourly rate.',
    ],
  },
  {
    title: '3. Revisions',
    paras: [
      'Unless your Scope specifies otherwise, each deliverable includes up to two (2) rounds of revisions. Clients subscribed to the Vaunt Marketing System (VMS) receive unlimited revisions for reasonable changes — excluding full redesigns, rebrands, or new integrations. Revisions beyond the included rounds are billed at our standard hourly rate.',
    ],
  },
  {
    title: '4. Ongoing & Additional Support Services',
    paras: [
      'Ongoing services — including hosting, maintenance, SEO, paid-media management, and post-launch support — are billed separately at the rates specified and are authorized for recurring billing upon commencement. Unless otherwise agreed in writing, non-VMS website projects require ongoing hosting and support.',
    ],
  },
  {
    title: '5. Ownership, Hosting & Platform Access',
    paras: [
      'Upon receipt of full payment, the Client owns the final deliverables. Vaunt retains ownership of its proprietary systems, templates, and processes. Clients are provided editor-level access rather than full administrative control. Migration or transfer of a project to another provider may require a one-time fee and is subject to technical feasibility.',
    ],
  },
  {
    title: '6. Client Responsibilities',
    paras: [
      'The Client agrees to provide content, feedback, and approvals in a timely manner and to pay all fees when due. If no feedback is received within five (5) business days of delivery, the relevant deliverable is deemed approved.',
    ],
  },
  {
    title: '7. Intellectual Property',
    paras: [
      'The Client affirms that it owns or is properly licensed to use all materials it provides, and agrees to indemnify and hold Vaunt harmless from any related claims. All rights to the final deliverables transfer to the Client upon full payment; Vaunt retains ownership of its pre-existing assets and internal systems.',
    ],
  },
  {
    title: '8. Limitation of Liability',
    paras: [
      'Vaunt is not liable for any indirect, incidental, or consequential damages, including loss of revenue, data, or business outcomes.',
    ],
  },
  {
    title: '9. Term & Termination',
    paras: [
      "Either party may terminate the engagement with thirty (30) days' written notice prior to the next billing cycle. All outstanding balances remain due upon termination. Vaunt may terminate immediately in the event of non-payment, breach, or unprofessional conduct.",
    ],
  },
  {
    title: '10. Refunds',
    paras: [
      'All payments are non-refundable, regardless of project stage or the reason for termination.',
    ],
  },
  {
    title: '11. Excusable Delays',
    paras: [
      'Vaunt is not responsible for delays caused by events beyond its reasonable control, including natural disasters, service outages, illness, or third-party vendor failures.',
    ],
  },
  {
    title: '12. Portfolio Usage',
    paras: [
      'Vaunt may display completed work for marketing and portfolio purposes, including on its website and social-media platforms.',
    ],
  },
  {
    title: '13. Confidentiality',
    paras: [
      'Both parties agree to protect any confidential information disclosed during the term of the engagement.',
    ],
  },
  {
    title: '14. Service Suspension for Non-Payment',
    paras: [
      'If payment is not received within fourteen (14) days of the due date, Vaunt may suspend services. Reinstatement may be subject to late or administrative fees.',
    ],
  },
  {
    title: '15. Paid Media',
    paras: [
      'Unless otherwise specified, paid-media management is billed at twenty percent (20%) of ad spend, subject to invoice minimums. Vaunt is not responsible for campaign performance, advertising-platform errors, or account suspensions imposed by those platforms.',
    ],
  },
  {
    title: '16. Print Services',
    paras: [
      'Vaunt coordinates print production with approved vendors. Design and coordination may be included in a package; printing and shipping are billed separately. Vaunt is not responsible for misprints, color variations, or carrier delays.',
    ],
  },
  {
    title: '17. Messaging Consent',
    paras: [
      "By submitting a form on this site you agree to receive marketing, transactional, and informational messages from Vaunt and its partners about digital marketing. These messages may include texts, calls, or prerecorded/artificial-voice messages, sent via phone system, CRM, or automatic telephone dialing system (ATDS). You confirm that you own and provided the number used, and that you may unsubscribe at any time by texting ‘STOP’ to +1 248-955-2428. Message frequency may vary, and message and data rates may apply. This consent applies even if you are on a Do Not Call list. You must be at least 18 years old.",
    ],
  },
  {
    title: '18. Governing Law & Venue',
    paras: [
      'These Terms are governed by the laws of the State of Michigan. The exclusive venue for any dispute arising under them is Oakland County, Michigan.',
    ],
  },
  {
    title: '19. Authority',
    paras: [
      'The individual executing the agreement or authorizing payment certifies that they are authorized to bind the Client to these Terms.',
    ],
  },
  {
    title: '20. Assignment',
    paras: [
      'Vaunt may assign, delegate, or subcontract its rights and obligations as necessary to perform the Services.',
    ],
  },
  {
    title: '21. Entire Agreement',
    paras: [
      'These Terms, together with the applicable Scope and Invoice, constitute the entire agreement between the parties. Any amendments must be made in writing and signed by both parties.',
    ],
  },
  {
    title: '22. Severability',
    paras: [
      'If any provision of these Terms is found invalid or unenforceable, the remaining provisions remain in full effect, and the parties will negotiate in good faith to replace the affected language.',
    ],
  },
  {
    title: '23. Acknowledgment',
    paras: [
      'Signing, authorizing, or submitting payment for any Vaunt service constitutes acceptance of these Terms & Conditions.',
    ],
  },
]

export const privacyIntro =
  'This Privacy Policy explains how Vaunt LLC ("Vaunt," "we," or "us") collects, uses, and protects information when you visit vaunt.co or use our services.'

export const privacySections: TermsSection[] = [
  {
    title: '1. Information We Collect',
    bullets: [
      'Personal information you provide — such as your name, email address, phone number, business name, and any details submitted through our forms.',
      'Usage data we collect automatically, including IP address, browser type, device information, and the pages you visit, via analytics tools such as Google Analytics.',
      'Cookies and similar tracking technologies used to improve your experience, analyze usage, and serve relevant advertising.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    bullets: [
      'Respond to your inquiries and requests',
      'Provide and deliver our marketing services',
      'Personalize and improve your experience on our website',
      'Send updates, promotional offers, and relevant communications',
      'Measure website traffic and performance',
    ],
  },
  {
    title: '3. Sharing Your Information',
    paras: [
      'We do not sell your personal data. We may share information with trusted third-party service providers — such as analytics, hosting, and CRM partners — who help us operate. These partners are required to maintain the security and confidentiality of your information.',
    ],
  },
  {
    title: '4. Cookies & Tracking',
    paras: [
      'We use cookies to remember your preferences, measure engagement and performance, and enable targeted advertising across platforms such as Google and Meta. You can modify or disable cookies at any time through your browser settings.',
    ],
  },
  {
    title: '5. Data Security',
    paras: [
      'We use industry-standard measures to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '6. Your Rights',
    paras: [
      'You may access, correct, or delete your personal information, unsubscribe from marketing communications, or ask how your data is used. To make a request, email us at info@vaunt.co.',
    ],
  },
  {
    title: '7. External Links',
    paras: [
      'Our website may link to third-party sites. We are not responsible for the privacy practices or content of those sites.',
    ],
  },
  {
    title: '8. Updates to This Policy',
    paras: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page.',
    ],
  },
  {
    title: '9. Contact Us',
    paras: [
      'Questions about this policy? Contact us at info@vaunt.co, (248) 955-2428, or Vaunt LLC, 5553 Victoria Dr., West Bloomfield, MI 48322.',
    ],
  },
]
