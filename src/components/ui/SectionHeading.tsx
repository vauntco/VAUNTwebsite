import type { ReactNode } from 'react'
import Eyebrow from './Eyebrow'
import FadeIn from '../motion/FadeIn'

interface SectionHeadingProps {
  eyebrow?: string
  /** Custom node rendered in place of the text eyebrow (e.g. a logo lockup). */
  eyebrowSlot?: ReactNode
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

/** Standard section header: eyebrow + display title + optional intro. */
export default function SectionHeading({
  eyebrow,
  eyebrowSlot,
  title,
  intro,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'
  return (
    <FadeIn className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrowSlot ?? (eyebrow && <Eyebrow>{eyebrow}</Eyebrow>)}
      <h2 className="text-section mt-5 font-display text-ink-primary">{title}</h2>
      {intro && (
        <p className={`mt-5 max-w-2xl text-base text-ink-secondary sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
          {intro}
        </p>
      )}
    </FadeIn>
  )
}
