import { Maximize2, ArrowUpRight } from 'lucide-react'
import type { PortfolioItem } from '../../data/portfolio'

interface PortfolioCardProps {
  item: PortfolioItem
  className?: string
  /** Compact chrome for the small floating hero cards (image-only, no body). */
  compact?: boolean
  /** When provided, the card becomes a button that opens the gallery lightbox. */
  onOpen?: () => void
}

/**
 * Portfolio tile. Clicking opens an in-page gallery lightbox (no navigation, no
 * outbound link — Spec §5/§10). Shows a real thumbnail when available, else a
 * branded placeholder.
 */
export default function PortfolioCard({ item, className = '', compact = false, onOpen }: PortfolioCardProps) {
  const thumb = item.thumbnail ?? item.gallery?.hero
  const interactive = !!onOpen

  return (
    <figure
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-card ${
        interactive ? 'cursor-pointer' : ''
      } ${className}`}
      {...(interactive
        ? {
            role: 'button',
            tabIndex: 0,
            'aria-label': `View ${item.title} gallery`,
            onClick: onOpen,
            onKeyDown: (e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onOpen!()
              }
            },
          }
        : {})}
    >
      {/* browser chrome */}
      <div className={`flex items-center gap-1.5 border-b border-[var(--hairline)] bg-[rgba(255,255,255,0.02)] px-3 ${compact ? 'h-6' : 'h-8'}`}>
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]/70" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]/70" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]/70" />
        {!compact && (
          <span className="ml-3 truncate rounded bg-[rgba(255,255,255,0.04)] px-2 py-0.5 text-[10px] text-ink-tertiary">
            {item.id}.com
          </span>
        )}
      </div>

      {/* media / placeholder */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {thumb ? (
          <img
            src={thumb}
            alt={`${item.title} — ${item.note}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center p-4 text-center"
            style={{ background: `radial-gradient(120% 120% at 30% 10%, hsla(${item.hue},90%,60%,0.28) 0%, transparent 55%), linear-gradient(160deg, #11151c 0%, #0b0e14 100%)` }}
          >
            <span className={`font-display font-bold leading-tight text-white ${compact ? 'text-sm' : 'text-lg'}`}>
              {item.title}
            </span>
            {!compact && <span className="mt-1.5 text-xs text-ink-secondary">{item.note}</span>}
          </div>
        )}

        {/* category tag */}
        <span className="absolute bottom-2 left-2 rounded-full border border-[var(--glass-border)] bg-[rgba(5,7,10,0.6)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand-bright backdrop-blur">
          {item.category}
        </span>

        {/* hover affordance */}
        {interactive && (
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-[rgba(5,7,10,0.45)] opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[rgba(5,7,10,0.7)] px-4 py-2 text-sm font-medium text-white">
              <Maximize2 size={15} /> View gallery
            </span>
          </div>
        )}
      </div>

      {/* body (reference-style) */}
      {!compact && (
        <figcaption className="flex flex-1 flex-col p-5">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span key={t} className="rounded-full border border-[var(--hairline)] bg-[rgba(255,255,255,0.03)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-ink-secondary">
                {t}
              </span>
            ))}
          </div>
          <h3 className="mt-3 font-display text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-secondary">{item.blurb}</p>
          {interactive && (
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-bright">
              View gallery
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          )}
        </figcaption>
      )}
    </figure>
  )
}
