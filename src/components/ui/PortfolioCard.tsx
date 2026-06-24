import { ArrowUpRight } from 'lucide-react'
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
  // Only website projects get the browser-window chrome; branding/print use a clean border.
  const isWebsite = item.category === 'Websites'

  return (
    <figure
      className={`group/card relative flex flex-col overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-card ${
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
      {/* media / placeholder — clean 16:9 screenshot crop, no chrome */}
      <div className="relative aspect-video w-full overflow-hidden">
        {thumb ? (
          <img
            src={thumb}
            alt={`${item.title} — ${item.note}`}
            loading="lazy"
            className={`h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-[1.03] ${isWebsite ? 'object-top' : 'object-center'}`}
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

        {/* hover affordance — glassmorphic arrow, only on the hovered card */}
        {interactive && (
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-0 backdrop-blur-[3px] transition-opacity duration-300 group-hover/card:opacity-100">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-[0_8px_30px_-6px_rgba(29,155,240,0.55)] backdrop-blur-md transition-transform duration-300 scale-90 group-hover/card:scale-100">
              <ArrowUpRight size={24} strokeWidth={2.25} />
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
              <ArrowUpRight size={15} className="transition-transform group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
            </span>
          )}
        </figcaption>
      )}
    </figure>
  )
}
