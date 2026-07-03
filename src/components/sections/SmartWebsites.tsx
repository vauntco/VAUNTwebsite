import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import FadeIn from '../motion/FadeIn'
import GlowIcon from '../ui/GlowIcon'
import { smartFeatures } from '../../data/smartFeatures'

export default function SmartWebsites() {
  return (
    <section id="smart-websites" className="section-pad relative border-y border-[var(--hairline)] bg-[var(--bg-elevated)]">
      <div className="container-v">
        <SectionHeading
          eyebrow="Smart Website"
          title={
            <>
              Designed to Impress.<br className="hidden sm:block" />{' '}
              <span className="text-glow">Built to Perform.</span>
            </>
          }
          intro="Not just a website — a SMART Website. Built to attract, convert, and grow with your business."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {smartFeatures.map((feature, i) => {
            const wide = i === smartFeatures.length - 1 // last item closes the grid full-width
            return (
              <FadeIn key={feature.name} delay={(i % 2) * 0.06} className={wide ? 'sm:col-span-2' : ''}>
                <div className={`glass glow-hover flex h-full items-center gap-6 p-7 ${wide ? 'sm:justify-center sm:gap-8' : ''}`}>
                  <GlowIcon name={feature.glow} size={96} className="shrink-0" />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{feature.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary sm:text-[15px]">{feature.line}</p>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn className="mt-10 text-center">
          <Link
            to="/web-design-michigan"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-bright transition-colors hover:text-white"
          >
            Website design for businesses across Michigan <ArrowRight size={15} />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
