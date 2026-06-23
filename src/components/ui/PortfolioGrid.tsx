import { useCallback, useMemo, useState } from 'react'
import { portfolioItems, portfolioFilters, type PortfolioItem, type PortfolioCategory } from '../../data/portfolio'
import PortfolioCard from './PortfolioCard'
import TiltCard from '../motion/TiltCard'
import Lightbox from './Lightbox'

interface PortfolioGridProps {
  items?: PortfolioItem[]
  showFilters?: boolean
  limit?: number
}

export default function PortfolioGrid({
  items = portfolioItems,
  showFilters = true,
  limit,
}: PortfolioGridProps) {
  const [active, setActive] = useState<'All' | PortfolioCategory>('All')
  const [openItem, setOpenItem] = useState<PortfolioItem | null>(null)
  const closeLightbox = useCallback(() => setOpenItem(null), [])

  const filtered = useMemo(() => {
    const base = active === 'All' ? items : items.filter((i) => i.category === active)
    return limit ? base.slice(0, limit) : base
  }, [active, items, limit])

  return (
    <div>
      {showFilters && (
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {portfolioFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                active === f
                  ? 'border-brand bg-[rgba(120,180,255,0.12)] text-white shadow-glow-sm'
                  : 'border-[var(--glass-border)] text-ink-secondary hover:text-white'
              }`}
              aria-pressed={active === f}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {/* Re-keying each card by the active filter remounts it so the entrance
          animation replays on filter change. CSS entrance (card-rise) so cards
          always end visible regardless of JS animation timing. */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <div
            key={`${active}-${item.id}`}
            className={`card-rise ${item.featured && i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            style={{ animationDelay: `${(i % 3) * 60}ms` }}
          >
            <TiltCard className="h-full" max={7}>
              <PortfolioCard item={item} className="glow-hover h-full" onOpen={() => setOpenItem(item)} />
            </TiltCard>
          </div>
        ))}
      </div>

      <Lightbox item={openItem} onClose={closeLightbox} />
    </div>
  )
}
