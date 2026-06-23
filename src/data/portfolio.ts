// Portfolio data model (Portfolio doc). Backend = repo data, no CMS.
// Clicking a card opens an in-page lightbox gallery (no navigation, no outbound
// links — Spec §5/§10). Drop real screenshots into /public/portfolio/<id>/ and
// fill `gallery` to swap placeholders for real media.

export type PortfolioCategory = 'Websites' | 'Branding' | 'Print'

export interface PortfolioGallery {
  /** The long, full-page homepage screenshot (scrolls in the lightbox). */
  hero?: string
  /** Additional shots — mobile, interior pages, detail crops, etc. */
  shots?: string[]
}

export interface PortfolioItem {
  id: string
  title: string
  category: PortfolioCategory
  /** Short tagline shown on the card + as the lightbox subtitle. */
  note: string
  /** One-line description (reference-style card blurb). */
  blurb: string
  /** Small chips on the card. */
  tags: string[]
  /** Hue (0-360) used to tint the branded placeholder gradient. */
  hue: number
  featured: boolean
  /** Single thumbnail for the card (falls back to gallery.hero, then placeholder). */
  thumbnail?: string
  gallery?: PortfolioGallery
}

export const portfolioItems: PortfolioItem[] = [
  { id: 'eflo', title: 'EFLO / EFLOVAPE', category: 'Websites', note: "World's First Electric Filter Tip", blurb: 'Product brand and e-commerce experience for a first-of-its-kind device.', tags: ['Website', 'Product'], hue: 192, featured: true },
  { id: 'maples', title: 'Maples Bar & Bistro', category: 'Websites', note: 'Neighborhood bar & bistro', blurb: 'Atmosphere-forward site with menu, story, and reservations.', tags: ['Website', 'Restaurant'], hue: 28, featured: false },
  { id: 'execlangser', title: 'Executive Language Services', category: 'Websites', note: 'We Speak Your Language', blurb: 'Full brand + website redesign for a language services firm.', tags: ['Website', 'Branding'], hue: 212, featured: true },
  { id: 'saltandlight', title: 'Salt & Light Child Care', category: 'Websites', note: 'Where Little Ones Feel Right at Home', blurb: 'Warm, welcoming site for a family child-care center.', tags: ['Website', 'Education'], hue: 44, featured: true },
  { id: 'epicurus', title: 'Epicurus', category: 'Websites', note: 'Luxury watches & jewelry', blurb: 'Refined storefront for a high-end watch and jewelry brand.', tags: ['Website', 'Luxury'], hue: 264, featured: true },
  { id: 'metroparcel', title: 'Metro Parcel & Freight', category: 'Websites', note: 'When Time Matters, Our Team Delivers', blurb: 'Conversion-focused logistics site built to book freight.', tags: ['Website', 'Logistics'], hue: 200, featured: true },
  { id: 'friendswhocare', title: 'Friends Who Care', category: 'Websites', note: 'In-home health care, since 1982', blurb: 'Trust-building site for a long-standing home-care provider.', tags: ['Website', 'Healthcare'], hue: 168, featured: false },
  { id: 'boxwoods', title: 'Boxwoods & More', category: 'Websites', note: 'Garden & landscaping', blurb: 'Storefront and brand for a garden and landscaping supplier.', tags: ['Website', 'Retail'], hue: 132, featured: false },
  { id: 'tagbuddy', title: 'TagBuddy', category: 'Websites', note: "Assistive product — \"I'm Lia\"", blurb: 'Product site for an assistive device that keeps people connected.', tags: ['Website', 'Product'], hue: 286, featured: false },
  { id: 'vikinglaser', title: 'Viking Laser Manufacturing', category: 'Websites', note: 'Laser Focused On Your Project', blurb: 'Capabilities-driven site for a precision manufacturer.', tags: ['Website', 'Manufacturing'], hue: 8, featured: false },
  { id: 'ticketcare', title: 'Ticket Care', category: 'Websites', note: 'Like it never happened', blurb: 'Clean legal-services site built to capture and convert leads.', tags: ['Website', 'Legal'], hue: 222, featured: false },
  { id: 'gregdavis', title: 'Greg Davis Landscapes', category: 'Websites', note: 'Your Vision, Our Expertise', blurb: 'Portfolio-led site for a landscape design studio.', tags: ['Website', 'Landscaping'], hue: 110, featured: false },
  { id: 'lonero', title: 'Lonero', category: 'Branding', note: 'Technology brand', blurb: 'Brand identity system for a technology company.', tags: ['Branding', 'Tech'], hue: 240, featured: false },
  { id: 'reaperpacks', title: 'DCG Sports / Reaper Packs', category: 'Branding', note: 'Esports / gaming', blurb: 'Bold identity for an esports and gaming label.', tags: ['Branding', 'Gaming'], hue: 348, featured: false },
  { id: 'printsets', title: 'Business Cards & Print Sets', category: 'Print', note: 'Brand collateral', blurb: 'Business cards and print collateral across multiple brands.', tags: ['Print', 'Collateral'], hue: 188, featured: false },
]

/*
  EXAMPLE — once Jacob drops screenshots into /public/portfolio/eflo/:
  gallery: {
    hero: '/portfolio/eflo/home.png',                    // long full-page capture
    shots: ['/portfolio/eflo/mobile.png', '/portfolio/eflo/product.png'],
  }
*/

export const portfolioFilters: ('All' | PortfolioCategory)[] = ['All', 'Websites', 'Branding', 'Print']

export const featuredItems = portfolioItems.filter((i) => i.featured)
