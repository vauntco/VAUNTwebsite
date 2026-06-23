import { useCallback, useMemo, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
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
  const reduce = useReducedMotion()
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

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1], delay: reduce ? 0 : (i % 3) * 0.04 }}
              className={item.featured && i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <TiltCard className="h-full" max={7}>
                <PortfolioCard item={item} className="glow-hover h-full" onOpen={() => setOpenItem(item)} />
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Lightbox item={openItem} onClose={closeLightbox} />
    </div>
  )
}
