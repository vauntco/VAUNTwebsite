import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import type { PortfolioItem } from '../../data/portfolio'

interface Shot {
  src?: string
  label: string
  kind: 'long' | 'mobile' | 'wide'
}

function buildShots(item: PortfolioItem): Shot[] {
  const g = item.gallery
  if (g?.hero || g?.shots?.length) {
    const shots: Shot[] = []
    if (g.hero) shots.push({ src: g.hero, label: 'Homepage', kind: 'long' })
    g.shots?.forEach((s, i) => shots.push({ src: s, label: `View ${i + (g.hero ? 2 : 1)}`, kind: 'wide' }))
    return shots
  }
  // Placeholder set until real screenshots are provided.
  return [
    { label: 'Homepage', kind: 'long' },
    { label: 'Mobile', kind: 'mobile' },
    { label: 'Detail', kind: 'wide' },
  ]
}

function gradient(hue: number) {
  return `radial-gradient(120% 90% at 25% 0%, hsla(${hue},90%,60%,0.22) 0%, transparent 55%), linear-gradient(160deg,#11151c 0%, #0a0d13 100%)`
}

/** Faux website skeleton used while real screenshots aren't loaded yet. */
function Placeholder({ item, shot }: { item: PortfolioItem; shot: Shot }) {
  if (shot.kind === 'mobile') {
    return (
      <div className="flex justify-center px-4 py-10">
        <div className="w-[290px] overflow-hidden rounded-[34px] border-4 border-[#1a2130] shadow-glow">
          <div style={{ background: gradient(item.hue) }} className="flex h-[620px] flex-col p-5">
            <div className="mx-auto mb-6 h-1.5 w-16 rounded-full bg-white/20" />
            <div className="font-display text-lg font-bold text-white">{item.title}</div>
            <div className="mt-1 text-xs text-ink-secondary">{item.note}</div>
            <div className="mt-6 space-y-3">
              {[88, 70, 100, 60].map((w, i) => (
                <div key={i} className="h-3 rounded bg-white/10" style={{ width: `${w}%` }} />
              ))}
            </div>
            <div className="mt-6 h-32 rounded-xl bg-white/5" />
            <div className="mt-auto h-10 w-32 rounded-full bg-brand/40" />
          </div>
        </div>
      </div>
    )
  }
  const rows = shot.kind === 'long' ? 7 : 2
  return (
    <div style={{ background: gradient(item.hue) }} className="w-full p-6 sm:p-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between">
          <div className="font-display text-xl font-bold text-white">{item.title}</div>
          <div className="hidden gap-2 sm:flex">
            {['Home', 'About', 'Services', 'Contact'].map((n) => (
              <span key={n} className="text-[11px] text-ink-secondary">{n}</span>
            ))}
          </div>
        </div>
        <div className="mt-10 h-2 w-24 rounded bg-brand/50" />
        <div className="mt-4 h-10 w-3/4 rounded bg-white/15" />
        <div className="mt-3 h-4 w-1/2 rounded bg-white/10" />
        <div className="mt-8 h-48 rounded-2xl bg-white/5" />
        {Array.from({ length: rows }).map((_, r) => (
          <div key={r} className="mt-8 grid grid-cols-3 gap-4">
            {[0, 1, 2].map((c) => (
              <div key={c} className="space-y-2">
                <div className="h-24 rounded-xl bg-white/5" />
                <div className="h-3 rounded bg-white/10" />
                <div className="h-3 w-2/3 rounded bg-white/10" />
              </div>
            ))}
          </div>
        ))}
        <p className="mt-10 text-center text-xs text-ink-tertiary">Screenshot coming soon</p>
      </div>
    </div>
  )
}

function ShotView({ item, shot }: { item: PortfolioItem; shot: Shot }) {
  if (shot.src) {
    return <img src={shot.src} alt={`${item.title} — ${shot.label}`} className="block w-full" />
  }
  return <Placeholder item={item} shot={shot} />
}

function Thumb({ item, shot }: { item: PortfolioItem; shot: Shot }) {
  return (
    <div className="aspect-[4/3] w-full overflow-hidden lg:aspect-video" style={{ background: gradient(item.hue) }}>
      {shot.src ? (
        <img src={shot.src} alt="" className="h-full w-full object-cover object-top" />
      ) : (
        <div className="flex h-full items-center justify-center">
          <span className="font-display text-xs font-semibold text-white/80">{shot.label}</span>
        </div>
      )}
    </div>
  )
}

export default function Lightbox({ item, onClose }: { item: PortfolioItem | null; onClose: () => void }) {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const closeRef = useRef<HTMLButtonElement>(null)
  const shots = item ? buildShots(item) : []

  useEffect(() => {
    setActive(0)
  }, [item?.id])

  useEffect(() => {
    if (!item) return
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') setActive((a) => Math.min(a + 1, shots.length - 1))
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') setActive((a) => Math.max(a - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [item, onClose, shots.length])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="lightbox"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} gallery`}
        >
          <div className="absolute inset-0 bg-[rgba(3,5,8,0.86)] backdrop-blur-md" onClick={onClose} />

          <motion.div
            className="relative z-10 flex max-h-[92dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-elevated)] shadow-glow-lg lg:flex-row"
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close gallery"
              className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[rgba(5,7,10,0.65)] text-white backdrop-blur transition hover:bg-[rgba(120,180,255,0.2)]"
            >
              <X size={18} />
            </button>

            {/* scrollable main view */}
            <div className="relative min-h-[40dvh] flex-1 overflow-y-auto overscroll-contain bg-[#05070a]">
              <ShotView item={item} shot={shots[active] ?? shots[0]} />
            </div>

            {/* thumbnail rail */}
            <div className="flex shrink-0 gap-3 overflow-x-auto border-t border-[var(--hairline)] bg-[var(--bg-elevated)] p-3 lg:w-48 lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:border-l lg:border-t-0 lg:p-4">
              <div className="hidden lg:mb-1 lg:block">
                <h3 className="font-display text-base font-semibold leading-tight text-white">{item.title}</h3>
                <p className="mt-1 text-xs text-ink-secondary">{item.note}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span key={t} className="rounded-full border border-[var(--glass-border)] px-2 py-0.5 text-[10px] uppercase tracking-wide text-brand-bright">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {shots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show ${s.label}`}
                  aria-current={i === active}
                  className={`relative w-28 shrink-0 overflow-hidden rounded-lg border transition lg:w-full ${
                    i === active ? 'border-brand shadow-glow-sm' : 'border-[var(--glass-border)] opacity-60 hover:opacity-100'
                  }`}
                >
                  <Thumb item={item} shot={s} />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-2 py-1 text-left text-[10px] font-medium text-white">
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
