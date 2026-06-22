import { services } from './services'

export interface NavLink {
  label: string
  to: string
}

export interface NavItem extends NavLink {
  children?: NavLink[]
}

// Spec §6 — sticky glass nav.
export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    children: services.map((s) => ({ label: s.name, to: `/services/${s.slug}` })),
  },
  { label: 'Portfolio', to: '/portfolio' },
  {
    label: 'More',
    to: '/work',
    children: [
      { label: 'VMS', to: '/vms' },
      { label: 'Blog', to: '/blog' },
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'Work', to: '/work' },
      { label: 'Partner Program', to: '/partner-program' },
    ],
  },
]

export const footerLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
  { label: 'Blog', to: '/blog' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Partner Program', to: '/partner-program' },
  { label: 'Work', to: '/work' },
]
