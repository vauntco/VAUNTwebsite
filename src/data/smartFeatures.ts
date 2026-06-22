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
  icon: LucideIcon
}

// Spec §7.5 — verbatim feature list.
export const smartFeatures: SmartFeature[] = [
  { name: 'Responsive Design', line: 'Looks flawless on any device.', icon: Smartphone },
  { name: 'Full Setup & Security', line: 'Everything handled, from SSL to backups.', icon: Lock },
  { name: 'Blog CMS', line: 'Publish, update, and grow your brand effortlessly.', icon: FileText },
  { name: 'SEO Framework', line: 'Built to rank, fast and discoverable.', icon: Search },
  { name: 'Smart Integrations', line: 'All your tools, finally connected.', icon: Plug },
  { name: 'eCommerce Ready', line: 'Add checkout or ordering systems anytime.', icon: ShoppingCart },
  { name: 'Lead Systems', line: 'Automations that convert interest into sales.', icon: Workflow },
]
