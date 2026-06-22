import { motion, useReducedMotion } from 'framer-motion'
import { createElement, type ReactNode } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  as?: keyof JSX.IntrinsicElements
  /** Per-character stagger in seconds. */
  stagger?: number
  delay?: number
}

/**
 * Character-by-character reveal (Spec / Motion technique). The full string is in
 * the DOM (crawlable) and announced via aria-label; individual char spans are
 * aria-hidden. Reduced motion → plain static text.
 */
export default function AnimatedText({
  text,
  className,
  as = 'span',
  stagger = 0.018,
  delay = 0,
}: AnimatedTextProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return createElement(as, { className }, text)
  }

  const words = text.split(' ')

  const content: ReactNode = (
    <motion.span
      aria-hidden
      style={{ display: 'inline-block' }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10%' }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              style={{ display: 'inline-block' }}
              variants={{
                hidden: { opacity: 0, y: '0.5em' },
                show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && ' '}
        </span>
      ))}
    </motion.span>
  )

  return createElement(as, { className, 'aria-label': text }, content)
}
