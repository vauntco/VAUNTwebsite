import type { PortfolioItem } from '../../data/portfolio'

interface PortfolioCardProps {
  item: PortfolioItem
  className?: string
  /** Compact chrome for small floating cards. */
  compact?: boolean
}

/**
 * A portfolio tile. If `item.thumbnail` exists it shows the real screenshot;
 * otherwise it renders a branded placeholder (browser chrome + tinted gradient
 * + project name). No <a> wrapper anywhere — images only (Spec §5, §10).
 */
export default function PortfolioCard({ item, className = '', compact = false }: PortfolioCardProps) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-card ${className}`}
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
        {item.thumbnail ? (
          <img
            src={item.thumbnail}
            alt={`${item.title} — ${item.note}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center p-4 text-center"
            style={{
              background: `radial-gradient(120% 120% at 30% 10%, hsla(${item.hue},90%,60%,0.28) 0%, transparent 55%), linear-gradient(160deg, #11151c 0%, #0b0e14 100%)`,
            }}
          >
            <span
              className={`font-display font-bold leading-tight text-white ${compact ? 'text-sm' : 'text-lg'}`}
            >
              {item.title}
            </span>
            {!compact && <span className="mt-1.5 text-xs text-ink-secondary">{item.note}</span>}
          </div>
        )}
        {/* category tag */}
        <span className="absolute bottom-2 left-2 rounded-full border border-[var(--glass-border)] bg-[rgba(5,7,10,0.6)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand-bright backdrop-blur">
          {item.category}
        </span>
      </div>
    </figure>
  )
}
