import type { ReactNode } from 'react'
import Eyebrow from '../ui/Eyebrow'
import FadeIn from '../motion/FadeIn'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  children?: ReactNode
}

/** Consistent top-of-page header for inner pages. */
export default function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-10 pt-32 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[420px] w-[760px] -translate-x-1/2 bg-glow-blob opacity-25 blur-3xl"
      />
      <div className="container-v relative text-center">
        <FadeIn className="mx-auto flex max-w-3xl flex-col items-center">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="text-hero mt-5 font-display font-bold uppercase italic" style={{ fontSize: 'clamp(2.4rem,6vw,4.5rem)' }}>
            {title}
          </h1>
          {intro && <p className="mx-auto mt-6 max-w-2xl text-base text-ink-secondary sm:text-lg">{intro}</p>}
          {children && <div className="mt-8">{children}</div>}
        </FadeIn>
      </div>
    </section>
  )
}
