import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'li' | 'span'
}

const EASE = [0.25, 0.1, 0.25, 1] as const

/** Scroll-triggered fade/slide-in. Reduced motion → renders in place, no animation. */
export default function FadeIn({ children, className, delay = 0, y = 28, as = 'div' }: FadeInProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
  }

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}
