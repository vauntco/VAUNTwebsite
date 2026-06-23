import { useRef, type ReactNode } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionStyle,
} from 'framer-motion'

interface TiltCardProps {
  children: ReactNode
  className?: string
  /** Max tilt in degrees. */
  max?: number
  glare?: boolean
}

/**
 * 3D cursor-tilt wrapper for glass cards. Rotates toward the pointer with a
 * spring, plus a soft moving glare. Reduced motion → renders flat.
 */
export default function TiltCard({ children, className = '', max = 9, glare = true }: TiltCardProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const hover = useMotionValue(0)

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 220, damping: 22 })
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 220, damping: 22 })
  const gx = useTransform(px, [0, 1], ['0%', '100%'])
  const gy = useTransform(py, [0, 1], ['0%', '100%'])
  const glareBg = useTransform(
    [gx, gy] as const,
    ([x, y]: string[]) => `radial-gradient(circle at ${x} ${y}, rgba(150,200,255,0.22), transparent 55%)`,
  )

  if (reduce) return <div className={className}>{children}</div>

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  function onEnter() {
    hover.set(1)
  }
  function onLeave() {
    px.set(0.5)
    py.set(0.5)
    hover.set(0)
  }

  const style: MotionStyle = { rotateX, rotateY, transformPerspective: 1000, transformStyle: 'preserve-3d' }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={style}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 rounded-[20px]"
          style={{ background: glareBg, opacity: hover, mixBlendMode: 'screen' }}
        />
      )}
    </motion.div>
  )
}
