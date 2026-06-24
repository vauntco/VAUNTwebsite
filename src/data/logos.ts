// Client logos — real marks from "companies that trust us", processed to white
// silhouettes (backgrounds removed, trimmed) in /public/logos. Rendered inside
// glass cards in LogoMarquee.

export interface ClientLogo {
  name: string
  src: string
  /** Dark logos that would vanish on the dark glass — shown on a light card instead (full color, no filter). */
  lightCard?: boolean
}

export const clientLogos: ClientLogo[] = [
  { name: 'Viking Laser', src: '/logos/viking-laser.png' },
  { name: 'Lawrence Tech', src: '/logos/lawrence-tech.png' },
  { name: 'Michigan Basements', src: '/logos/michigan-basements.png' },
  { name: 'DRYmedic Restoration', src: '/logos/drymedic.png' },
  { name: 'Reaper Packs', src: '/logos/reaper-packs.png' },
  { name: 'Ticket Care', src: '/logos/ticket-care.png' },
  { name: 'Jeremy A. Yaldo', src: '/logos/jeremy-yaldo.png', lightCard: true },
  { name: 'The Catholic Curator', src: '/logos/catholic-curator.png', lightCard: true },
  { name: 'ER Doc Urgent Care', src: '/logos/er-doc-urgent-care.png' },
  { name: 'Smart Wash', src: '/logos/smart-wash.png', lightCard: true },
  { name: 'Wireless Monkey', src: '/logos/wireless-monkey.png' },
  { name: 'Blockstar Labs', src: '/logos/blockstar-labs.png' },
  { name: 'Amplus', src: '/logos/amplus.png' },
  { name: 'ZEUS', src: '/logos/zeus.png' },
  { name: "Pete's Tech Help", src: '/logos/petes-tech-help.png' },
  { name: 'Matrix Auto Collision', src: '/logos/matrix-collision.png' },
  { name: 'Planet Materials', src: '/logos/planet-materials.png' },
  { name: "Tweny's Landscape", src: '/logos/twenys-landscape.png', lightCard: true },
  { name: 'EFLO', src: '/logos/eflo.png' },
  { name: 'Executive Language Services', src: '/logos/executive-language.png' },
  { name: 'Veritas', src: '/logos/veritas.png' },
  { name: 'Arctic Blast', src: '/logos/arctic-blast.png' },
  { name: 'Epicurus', src: '/logos/epicurus.png' },
  { name: 'Brikho Law', src: '/logos/brikho-law.png' },
  { name: 'Healing Arts', src: '/logos/healing-arts.png' },
  { name: "Jonna's Market", src: '/logos/jonnas-market.png' },
  { name: 'Friends Who Care', src: '/logos/friends-who-care.png' },
  { name: 'Salt & Light', src: '/logos/salt-and-light.png' },
  { name: 'Spore Shield', src: '/logos/spore-shield.png' },
  { name: 'Cold Shelf', src: '/logos/cold-shelf.png' },
  { name: 'Dreamz Restoration', src: '/logos/dreamz-restoration.png' },
  { name: 'Metro Parcel & Freight', src: '/logos/metro-parcel.png' },
  { name: 'Power Rentals', src: '/logos/power-rentals.png' },
  { name: 'Greg Davis Landscapes', src: '/logos/greg-davis.png', lightCard: true },
  { name: 'Upon Arrival Deliveries', src: '/logos/upon-arrival.png', lightCard: true },
  { name: 'TagBuddy', src: '/logos/tagbuddy.png' },
  { name: 'Ayar Roofing', src: '/logos/avas-roofing.png' },
  { name: 'Revive Restoration', src: '/logos/revive-restoration.png', lightCard: true },
  { name: 'Safe & Sound GPS', src: '/logos/safe-sound-gps.png', lightCard: true },
  { name: 'Mold Scope', src: '/logos/mold-scope.png' },
]
