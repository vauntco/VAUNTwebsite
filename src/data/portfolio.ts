// Portfolio data model (Portfolio doc). Backend = repo data, no CMS.
// Media lives in /public/portfolio/* — until real screenshots are dropped in,
// `thumbnail` is undefined and a branded placeholder card renders instead.
// Swapping in real media is a one-line edit per item.

export type PortfolioCategory = 'Websites' | 'Branding' | 'Print'

export interface PortfolioItem {
  id: string
  title: string
  category: PortfolioCategory
  /** Short caption / note (Spec §10). */
  note: string
  /** Hue (0-360) used to tint the branded placeholder gradient. */
  hue: number
  featured: boolean
  /** Path under /public when a real screenshot is available. */
  thumbnail?: string
}

export const portfolioItems: PortfolioItem[] = [
  { id: 'eflo', title: 'EFLO / EFLOVAPE', category: 'Websites', note: "World's First Electric Filter Tip", hue: 192, featured: true },
  { id: 'maples', title: 'Maples Bar & Bistro', category: 'Websites', note: 'Restaurant', hue: 28, featured: false },
  { id: 'execlangser', title: 'Executive Language Services', category: 'Websites', note: 'We Speak Your Language', hue: 212, featured: true },
  { id: 'saltandlight', title: 'Salt & Light Child Care', category: 'Websites', note: 'Where Little Ones Feel Right at Home', hue: 44, featured: true },
  { id: 'epicurus', title: 'Epicurus', category: 'Websites', note: 'Luxury watches & jewelry', hue: 264, featured: true },
  { id: 'metroparcel', title: 'Metro Parcel & Freight', category: 'Websites', note: 'When Time Matters, Our Team Delivers', hue: 200, featured: true },
  { id: 'friendswhocare', title: 'Friends Who Care', category: 'Websites', note: 'In-home health care, since 1982', hue: 168, featured: false },
  { id: 'boxwoods', title: 'Boxwoods & More / Planet Materials', category: 'Websites', note: 'Garden & landscaping', hue: 132, featured: false },
  { id: 'tagbuddy', title: 'TagBuddy', category: 'Websites', note: 'Assistive product — "I\'m Lia"', hue: 286, featured: false },
  { id: 'vikinglaser', title: 'Viking Laser Manufacturing', category: 'Websites', note: 'Laser Focused On Your Project', hue: 8, featured: false },
  { id: 'ticketcare', title: 'Ticket Care', category: 'Websites', note: 'Legal — "Like it never happened"', hue: 222, featured: false },
  { id: 'gregdavis', title: 'Greg Davis Landscapes', category: 'Websites', note: 'Your Vision, Our Expertise', hue: 110, featured: false },
  { id: 'lonero', title: 'Lonero', category: 'Branding', note: 'Tech', hue: 240, featured: false },
  { id: 'reaperpacks', title: 'DCG Sports / Reaper Packs', category: 'Branding', note: 'Esports / gaming', hue: 348, featured: false },
  { id: 'printsets', title: 'Business Cards & Print Sets', category: 'Print', note: 'Brand collateral', hue: 188, featured: false },
]

export const portfolioFilters: ('All' | PortfolioCategory)[] = ['All', 'Websites', 'Branding', 'Print']

export const featuredItems = portfolioItems.filter((i) => i.featured)
