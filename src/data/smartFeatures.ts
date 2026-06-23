import {
  Smartphone,
  Lock,
  FileText,
  Search,
  Plug,
  ShoppingCart,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export interface SmartFeature {
  name: string
  line: string
  /** Glowing 3D icon in /public/icons. */
  glow: string
  /** Vector fallback. */
  icon: LucideIcon
}

// Spec §7.5 — verbatim feature list.
export const smartFeatures: SmartFeature[] = [
  { name: 'Responsive Design', line: 'Looks flawless on any device.', glow: 'responsive', icon: Smartphone },
  { name: 'Full Setup & Security', line: 'Everything handled, from SSL to backups.', glow: 'security', icon: Lock },
  { name: 'Blog CMS', line: 'Publish, update, and grow your brand effortlessly.', glow: 'blog', icon: FileText },
  { name: 'SEO Framework', line: 'Built to rank, fast and discoverable.', glow: 'seo', icon: Search },
  { name: 'Smart Integrations', line: 'All your tools, finally connected.', glow: 'integrations', icon: Plug },
  { name: 'eCommerce Ready', line: 'Add checkout or ordering systems anytime.', glow: 'ecommerce', icon: ShoppingCart },
  { name: 'Lead Systems', line: 'Automations that convert interest into sales.', glow: 'lead-funnel', icon: Workflow },
]
