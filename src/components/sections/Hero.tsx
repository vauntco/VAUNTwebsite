import { useRef, useState } from 'react'
import { motion, useReducedMotion, useMotionValue, useMotionTemplate } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Eyebrow from '../ui/Eyebrow'
import Button from '../ui/Button'
import Marquee from '../ui/Marquee'
import PortfolioCard from '../ui/PortfolioCard'
import Lightbox from '../ui/Lightbox'
import HeroForm from '../forms/HeroForm'
import { portfolioItems, type PortfolioItem } from '../../data/portfolio'

// Website screenshots for the scrolling showcase — equal weight, crisp, no blur.
const sites = portfolioItems.filter((p) => p.category === 'Websites')
const half = Math.ceil(sites.length / 2)
const rowA = sites.slice(0, half)
const rowB = sites.slice(half)

function SiteCard({ item, onOpen }: { item: (typeof sites)[number]; onOpen: () => void }) {
  return (
    <div className="w-[clamp(240px,72vw,340px)]">
      <PortfolioCard item={item} compact onOpen={onOpen} />
    </div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const [openItem, setOpenItem] = useState<PortfolioItem | null>(null)

  // Cursor spotlight across the whole hero.
  const sectionRef = useRef<HTMLElement>(null)
  const spotX = useMotionValue(-400)
  const spotY = useMotionValue(-400)
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${spotX}px ${spotY}px, rgba(29,155,240,0.10), transparent 72%)`

  function onSectionMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce || !sectionRef.current) return
    const r = sectionRef.current.getBoundingClientRect()
    spotX.set(e.clientX - r.left)
    spotY.set(e.clientY - r.top)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={onSectionMove}
      className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-40"
    >
      {!reduce && (
        <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
      )}

      {/* foreground (global globe video sits behind, from Layout) */}
      <div className="relative z-10">
        <div className="container-v">
          {/* headline block */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Eyebrow>Website Design · Branding · Marketing</Eyebrow>
          </motion.div>

          <motion.h1
            className="text-hero mt-6 font-display font-bold uppercase italic"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
          >
            Designed to <span className="text-glow not-italic sm:italic">Captivate</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-base text-ink-secondary sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.16 }}
          >
            Stunning websites, brands, and marketing systems — built end to end in Detroit, shipped everywhere.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.24 }}
          >
            <Button to="/contact">
              Start a Project <ArrowRight size={16} />
            </Button>
            <Button to="/work" variant="ghost">
              See the Work
            </Button>
          </motion.div>
        </div>
      </div>

      {/* scrolling portfolio showcase — equal-weight, crisp, two rows */}
      <motion.div
        className="relative mt-14 lg:mt-16"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 bg-glow-blob opacity-50 blur-3xl"
        />
        <div className="relative space-y-4">
          <Marquee items={rowA.map((item) => <SiteCard key={item.id} item={item} onOpen={() => setOpenItem(item)} />)} duration={55} itemClassName="px-0" />
          <Marquee items={rowB.map((item) => <SiteCard key={item.id} item={item} onOpen={() => setOpenItem(item)} />)} reverse duration={65} itemClassName="px-0" />
        </div>
      </motion.div>

      {/* moved quick-start form — now below the website visuals */}
      <div className="container-v">
        <motion.div
          className="mx-auto mt-16 max-w-xl text-center"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.36 }}
        >
          <p className="mb-4 font-display text-sm uppercase tracking-[0.18em] text-brand-bright">
            Tell us what you need
          </p>
          <HeroForm />
        </motion.div>
      </div>
      </div>

      <Lightbox item={openItem} onClose={() => setOpenItem(null)} />
    </section>
  )
}
