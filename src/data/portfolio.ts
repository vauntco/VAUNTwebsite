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
  { id: 'eflo', title: 'EFLO / EFLOVAPE', category: 'Websites', note: "World's First Electric Filter Tip", blurb: 'Product brand and e-commerce experience for a first-of-its-kind device.', tags: ['Website', 'Product'], hue: 192, featured: true, thumbnail: '/portfolio/eflo/thumb.jpg', gallery: { hero: '/portfolio/eflo/full.jpg' } },
  { id: 'pearled-detailing', title: 'Pearled Detailing', category: 'Websites', note: 'Mobile Auto Detailing in Commerce Township', blurb: 'Conversion-focused site for a mobile auto-detailing service.', tags: ['Website', 'Automotive'], hue: 4, featured: true, thumbnail: '/portfolio/pearled-detailing/thumb.jpg', gallery: { hero: '/portfolio/pearled-detailing/full.jpg' } },
  { id: 'execlangser', title: 'Executive Language Services', category: 'Websites', note: 'We Speak Your Language', blurb: 'Full brand + website redesign for a language services firm.', tags: ['Website', 'Branding'], hue: 212, featured: true, thumbnail: '/portfolio/execlangser/thumb.jpg', gallery: { hero: '/portfolio/execlangser/full.jpg' } },
  { id: 'ayar-roofing-web', title: 'Ayar Roofing', category: 'Websites', note: 'Roofing & exterior experts', blurb: 'Lead-driven site for a residential and commercial roofing company.', tags: ['Website', 'Roofing'], hue: 30, featured: true, thumbnail: '/portfolio/ayar-roofing-web/thumb.jpg', gallery: { hero: '/portfolio/ayar-roofing-web/full.jpg' } },
  { id: 'epicurus', title: 'Epicurus', category: 'Websites', note: 'Luxury watches & jewelry', blurb: 'Refined storefront for a high-end watch and jewelry brand.', tags: ['Website', 'Luxury'], hue: 264, featured: true, thumbnail: '/portfolio/epicurus/thumb.jpg', gallery: { hero: '/portfolio/epicurus/full.jpg' } },
  { id: 'metroparcel', title: 'Metro Parcel & Freight', category: 'Websites', note: 'When Time Matters, Our Team Delivers', blurb: 'Conversion-focused logistics site built to book freight.', tags: ['Website', 'Logistics'], hue: 200, featured: true, thumbnail: '/portfolio/metroparcel/thumb.jpg', gallery: { hero: '/portfolio/metroparcel/full.jpg' } },
  { id: 'sporeshield-web', title: 'Spore Shield', category: 'Websites', note: 'Michigan mold-testing experts', blurb: 'Trust-building site for a certified mold-inspection service.', tags: ['Website', 'Home Services'], hue: 140, featured: true, thumbnail: '/portfolio/sporeshield-web/thumb.jpg', gallery: { hero: '/portfolio/sporeshield-web/full.jpg' } },
  { id: 'friendswhocare', title: 'Friends Who Care', category: 'Websites', note: 'In-home health care, since 1982', blurb: 'Trust-building site for a long-standing home-care provider.', tags: ['Website', 'Healthcare'], hue: 168, featured: false, thumbnail: '/portfolio/friendswhocare/thumb.jpg', gallery: { hero: '/portfolio/friendswhocare/full.jpg' } },
  { id: 'matrix-collision', title: 'Matrix Auto Collision', category: 'Websites', note: 'Auto body & collision repair', blurb: 'Service site for a full-service collision repair shop.', tags: ['Website', 'Automotive'], hue: 6, featured: false, thumbnail: '/portfolio/matrix-collision/thumb.jpg', gallery: { hero: '/portfolio/matrix-collision/full.jpg' } },
  { id: 'boxwoods', title: 'Boxwoods & More', category: 'Websites', note: 'Garden & landscaping', blurb: 'Storefront and brand for a garden and landscaping supplier.', tags: ['Website', 'Retail'], hue: 132, featured: false, thumbnail: '/portfolio/boxwoods/thumb.jpg', gallery: { hero: '/portfolio/boxwoods/full.jpg' } },
  { id: 'coldshelf-web', title: 'Cold Shelf', category: 'Websites', note: 'Commercial cooling solutions', blurb: 'Product-led site for a commercial refrigeration brand.', tags: ['Website', 'Industrial'], hue: 205, featured: false, thumbnail: '/portfolio/coldshelf-web/thumb.jpg', gallery: { hero: '/portfolio/coldshelf-web/full.jpg' } },
  { id: 'safe-sound-web', title: 'Safe & Sound GPS', category: 'Websites', note: 'GPS tracking & fleet management', blurb: 'Marketing site for a GPS tracking and fleet-management provider.', tags: ['Website', 'SaaS'], hue: 210, featured: false, thumbnail: '/portfolio/safe-sound-web/thumb.jpg', gallery: { hero: '/portfolio/safe-sound-web/full.jpg' } },
  { id: 'ace-cctv', title: 'ACE CCTV', category: 'Websites', note: 'Security & surveillance', blurb: 'Lead-gen site for a security camera and surveillance installer.', tags: ['Website', 'Security'], hue: 218, featured: false, thumbnail: '/portfolio/ace-cctv/thumb.jpg', gallery: { hero: '/portfolio/ace-cctv/full.jpg' } },
  { id: 'vikinglaser', title: 'Viking Laser Manufacturing', category: 'Websites', note: 'Laser Focused On Your Project', blurb: 'Capabilities-driven site for a precision manufacturer.', tags: ['Website', 'Manufacturing'], hue: 8, featured: false, thumbnail: '/portfolio/vikinglaser/thumb.jpg', gallery: { hero: '/portfolio/vikinglaser/full.jpg' } },
  { id: 'ticketcare', title: 'Ticket Care', category: 'Websites', note: 'Like it never happened', blurb: 'Clean legal-services site built to capture and convert leads.', tags: ['Website', 'Legal'], hue: 222, featured: false, thumbnail: '/portfolio/ticketcare/thumb.jpg', gallery: { hero: '/portfolio/ticketcare/full.jpg' } },
  { id: 'gregdavis', title: 'Greg Davis Landscapes', category: 'Websites', note: 'Your Vision, Our Expertise', blurb: 'Portfolio-led site for a landscape design studio.', tags: ['Website', 'Landscaping'], hue: 110, featured: false, thumbnail: '/portfolio/gregdavis/thumb.jpg', gallery: { hero: '/portfolio/gregdavis/full.jpg' } },
  { id: 'maples', title: 'Maples Bar & Bistro', category: 'Websites', note: 'Neighborhood bar & bistro', blurb: 'Atmosphere-forward site with menu, story, and reservations.', tags: ['Website', 'Restaurant'], hue: 28, featured: false, thumbnail: '/portfolio/maples/thumb.jpg', gallery: { hero: '/portfolio/maples/full.jpg' } },
  { id: 'saltandlight', title: 'Salt & Light Child Care', category: 'Websites', note: 'Where Little Ones Feel Right at Home', blurb: 'Warm, welcoming site for a family child-care center.', tags: ['Website', 'Education'], hue: 44, featured: false, thumbnail: '/portfolio/saltandlight/thumb.jpg', gallery: { hero: '/portfolio/saltandlight/full.jpg' } },
  { id: 'tagbuddy', title: 'TagBuddy', category: 'Websites', note: "Assistive product — \"I'm Lia\"", blurb: 'Product site for an assistive device that keeps people connected.', tags: ['Website', 'Product'], hue: 286, featured: false },
  { id: 'lonero', title: 'Lonero', category: 'Branding', note: 'Technology brand', blurb: 'Brand identity system for a technology company.', tags: ['Branding', 'Tech'], hue: 240, featured: false },
  { id: 'reaperpacks', title: 'DCG Sports / Reaper Packs', category: 'Branding', note: 'Esports / gaming', blurb: 'Bold identity for an esports and gaming label.', tags: ['Branding', 'Gaming'], hue: 348, featured: false },
  { id: 'morty-mintz', title: 'Morty Mintz', category: 'Print', note: 'Product packaging', blurb: 'Bold, character-driven mylar packaging for a novelty snack brand.', tags: ['Packaging', 'Print'], hue: 132, featured: false, gallery: { hero: '/portfolio/morty-mintz/bag.jpg' } },
  { id: 'chameleon', title: 'Chameleon', category: 'Print', note: 'Product packaging', blurb: 'Premium packaging with custom illustration and hand-drawn lettering.', tags: ['Packaging', 'Print'], hue: 162, featured: false, gallery: { hero: '/portfolio/chameleon/bag.jpg' } },
  { id: 'moldscope', title: 'Mold Scope Testing', category: 'Print', note: 'Apparel & collateral', blurb: 'A full branded system — custom apparel, a retractable banner, and a direct-mail postcard for a mold-testing service.', tags: ['Apparel', 'Print'], hue: 190, featured: false, gallery: { hero: '/portfolio/moldscope/apparel.jpg', shots: ['/portfolio/moldscope/postcard.jpg', '/portfolio/moldscope/banner.jpg'] } },
  { id: 'kalasho-boys', title: 'Kalasho Boys Transport', category: 'Print', note: 'Transport branding', blurb: 'Logo, business cards, and fleet branding for a transport company.', tags: ['Branding', 'Print'], hue: 24, featured: false, gallery: { hero: '/portfolio/kalasho-boys/cards.jpg', shots: ['/portfolio/kalasho-boys/presentation.jpg'] } },
  { id: 'sporeshield-print', title: 'Spore Shield', category: 'Print', note: 'Cards & brochure', blurb: 'Business cards and a tri-fold brochure for a mold-testing service.', tags: ['Brochure', 'Print'], hue: 140, featured: false, gallery: { hero: '/portfolio/sporeshield/brochure.jpg', shots: ['/portfolio/sporeshield/cards.jpg'] } },
  { id: 'coldshelf', title: 'Cold Shelf', category: 'Print', note: 'Brochure & cards', blurb: 'A product brochure and business cards for a commercial cooling solutions company.', tags: ['Brochure', 'Print'], hue: 205, featured: false, gallery: { hero: '/portfolio/coldshelf/brochure.jpg', shots: ['/portfolio/coldshelf/cards.jpg'] } },
  { id: 'healing-arts', title: 'Healing Arts', category: 'Print', note: 'Banner & cards', blurb: 'A retractable trade-show banner and business cards for a physical therapy and recovery studio.', tags: ['Banner', 'Print'], hue: 220, featured: false, gallery: { hero: '/portfolio/healing-arts/banner.jpg', shots: ['/portfolio/healing-arts/cards.jpg'] } },
  { id: 'execlangser-print', title: 'Executive Language Services', category: 'Print', note: 'Cards & banner', blurb: 'Business cards and a trade-show banner for a language services firm.', tags: ['Business Cards', 'Print'], hue: 214, featured: false, gallery: { hero: '/portfolio/execlangser-print/cards.jpg', shots: ['/portfolio/execlangser-print/banner.jpg'] } },
  { id: 'ayar-roofing', title: 'Ayar Roofing', category: 'Print', note: 'Business cards', blurb: 'Clean, professional business cards for a roofing contractor.', tags: ['Business Cards', 'Print'], hue: 30, featured: false, gallery: { hero: '/portfolio/avas-roofing/cards.jpg' } },
  { id: 'revive-restoration', title: 'Revive Restoration', category: 'Print', note: 'Recruitment flyer', blurb: 'A bilingual “join the team” recruitment flyer for a restoration company.', tags: ['Flyer', 'Print'], hue: 198, featured: false, gallery: { hero: '/portfolio/revive-restoration/flyer.jpg' } },
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
