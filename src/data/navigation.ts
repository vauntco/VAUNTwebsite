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
  { label: 'Work', to: '/work' },
  { label: 'VMS', to: '/vms' },
  { label: 'Resources', to: '/blog' },
]

// Testimonials + Partner Program live in the footer only (removed from the nav bar).
export const footerLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
  { label: 'Resources', to: '/blog' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Partner Program', to: '/partner-program' },
]
