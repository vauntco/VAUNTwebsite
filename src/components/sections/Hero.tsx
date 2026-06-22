import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import Eyebrow from '../ui/Eyebrow'
import Magnet from '../motion/Magnet'
import PortfolioCard from '../ui/PortfolioCard'
import { featuredItems } from '../../data/portfolio'

interface Placement {
  pos: string
  rot: string
  float: string
  z: string
  glow?: boolean
  blur?: boolean
  dim?: string
  compact?: boolean
  hide?: string
}

const placements: Placement[] = [
  { pos: 'left-1/2 top-1/2 w-[clamp(250px,30vw,400px)] -translate-x-1/2 -translate-y-1/2', rot: '0deg', float: '0s', z: 'z-30', glow: true },
  { pos: 'left-[2%] top-[8%] w-[clamp(170px,17vw,250px)]', rot: '-9deg', float: '1.1s', z: 'z-20', dim: 'opacity-80', compact: true },
  { pos: 'right-[1%] top-[15%] w-[clamp(170px,17vw,250px)]', rot: '8deg', float: '0.5s', z: 'z-20', dim: 'opacity-80', compact: true },
  { pos: 'left-[12%] bottom-[2%] w-[clamp(150px,13vw,200px)]', rot: '-5deg', float: '1.7s', z: 'z-10', blur: true, dim: 'opacity-55', compact: true, hide: 'hidden md:block' },
  { pos: 'right-[10%] bottom-[0%] w-[clamp(150px,13vw,200px)]', rot: '6deg', float: '0.3s', z: 'z-10', blur: true, dim: 'opacity-55', compact: true, hide: 'hidden md:block' },
]

export default function Hero() {
  const reduce = useReducedMotion()
  const cards = featuredItems.slice(0, placements.length)

  return (
    <section className="relative overflow-hidden pb-12 pt-32 sm:pt-36 lg:pb-20 lg:pt-40">
      <div className="container-v">
        {/* headline block */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Eyebrow>Website Design</Eyebrow>
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
            Stunning websites that blend form and function, enhancing user experience
            while reflecting your brand&apos;s identity and driving conversions.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.24 }}
          >
            <Button to="/services/web-design">
              Learn More <ArrowRight size={17} />
            </Button>
            <Button to="/contact" variant="ghost">
              Let&apos;s Talk
            </Button>
          </motion.div>
        </div>

        {/* floating portfolio cluster — the centerpiece (Spec §4.4) */}
        <div className="relative mx-auto mt-14 h-[360px] max-w-5xl sm:h-[440px] lg:mt-20 lg:h-[520px]">
          {/* ambient glow under cluster */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-glow-blob opacity-50 blur-2xl"
          />
          {cards.map((item, i) => {
            const p = placements[i]
            return (
              <div key={item.id} className={`absolute ${p.pos} ${p.z} ${p.hide ?? ''}`}>
                <Magnet strength={p.glow ? 0.3 : 0.18}>
                  <div className="animate-float" style={{ animationDelay: p.float }}>
                    <div
                      style={{ transform: `rotate(${p.rot})` }}
                      className={`${p.glow ? 'glow rounded-2xl' : ''} ${p.blur ? 'blur-[1.5px]' : ''} ${p.dim ?? ''}`}
                    >
                      <PortfolioCard item={item} compact={p.compact} />
                    </div>
                  </div>
                </Magnet>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
