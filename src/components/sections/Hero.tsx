import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'
import Eyebrow from '../ui/Eyebrow'
import Magnet from '../motion/Magnet'
import PortfolioCard from '../ui/PortfolioCard'
import HeroForm from '../forms/HeroForm'
import { featuredItems } from '../../data/portfolio'

interface Placement {
  pos: string
  rot: string
  float: string
  zi: string
  glow?: boolean
  blur?: boolean
  dim?: string
  compact?: boolean
  hide?: string
}

const placements: Placement[] = [
  { pos: 'left-1/2 top-1/2 w-[clamp(250px,30vw,400px)] -translate-x-1/2 -translate-y-1/2', rot: '0deg', float: '0s', zi: 'z-30', glow: true },
  { pos: 'left-[2%] top-[8%] w-[clamp(170px,17vw,250px)]', rot: '-9deg', float: '1.1s', zi: 'z-20', dim: 'opacity-80', compact: true },
  { pos: 'right-[1%] top-[15%] w-[clamp(170px,17vw,250px)]', rot: '8deg', float: '0.5s', zi: 'z-20', dim: 'opacity-80', compact: true },
  { pos: 'left-[12%] bottom-[2%] w-[clamp(150px,13vw,200px)]', rot: '-5deg', float: '1.7s', zi: 'z-10', blur: true, dim: 'opacity-55', compact: true, hide: 'hidden md:block' },
  { pos: 'right-[10%] bottom-[0%] w-[clamp(150px,13vw,200px)]', rot: '6deg', float: '0.3s', zi: 'z-10', blur: true, dim: 'opacity-55', compact: true, hide: 'hidden md:block' },
]

export default function Hero() {
  const reduce = useReducedMotion()
  const cards = featuredItems.slice(0, placements.length)

  // Cursor spotlight across the whole hero.
  const sectionRef = useRef<HTMLElement>(null)
  const spotX = useMotionValue(-400)
  const spotY = useMotionValue(-400)
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${spotX}px ${spotY}px, rgba(29,155,240,0.10), transparent 72%)`

  // Cluster parallax tilt.
  const stageRef = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 120, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-12, 12]), { stiffness: 120, damping: 20 })

  function onSectionMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce || !sectionRef.current) return
    const r = sectionRef.current.getBoundingClientRect()
    spotX.set(e.clientX - r.left)
    spotY.set(e.clientY - r.top)
  }
  function onStageMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !stageRef.current) return
    const r = stageRef.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  function onStageLeave() {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={onSectionMove}
      className="relative overflow-hidden pb-12 pt-32 sm:pt-36 lg:pb-20 lg:pt-40"
    >
      {!reduce && <motion.div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: spotlight }} />}

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
            Stunning websites, brands, and marketing systems — built end to end in Detroit,
            shipped everywhere.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center gap-4"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.24 }}
          >
            <HeroForm />
            <Link to="/work" className="inline-flex items-center gap-1.5 text-sm text-ink-secondary transition-colors hover:text-white">
              or see the work <ArrowDown size={14} />
            </Link>
          </motion.div>
        </div>

        {/* floating portfolio cluster — the centerpiece (Spec §4.4) */}
        <div
          ref={stageRef}
          onMouseMove={onStageMove}
          onMouseLeave={onStageLeave}
          className="perspective-1400 relative mx-auto mt-14 h-[360px] max-w-5xl sm:h-[440px] lg:mt-16 lg:h-[520px]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-glow-blob opacity-60 blur-2xl"
          />
          <motion.div className="preserve-3d absolute inset-0" style={reduce ? undefined : { rotateX, rotateY }}>
            {cards.map((item, i) => {
              const p = placements[i]
              return (
                <div key={item.id} className={`absolute ${p.pos} ${p.zi} ${p.hide ?? ''}`}>
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
