import { HeartHandshake, Lightbulb, Clock } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import FadeIn from '../motion/FadeIn'
import TiltCard from '../motion/TiltCard'
import { whyUsPillars } from '../../data/content'

const icons = [HeartHandshake, Lightbulb, Clock]

export default function WhyUs() {
  return (
    <section id="why-us" className="section-pad">
      <div className="container-v">
        <SectionHeading
          eyebrow="Why Us?"
          title="Dedicated To Your Success"
          intro="We are committed to helping you achieve your goals by providing tailored solutions, expert guidance, and unwavering support every step of the way. Your success is our top priority."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {whyUsPillars.map((pillar, i) => {
            const Icon = icons[i]
            return (
              <FadeIn key={pillar.name} delay={i * 0.08} className="h-full">
                <TiltCard className="h-full" max={7}>
                  <div className="glass glow-hover preserve-3d h-full p-8 text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[rgba(120,180,255,0.06)] text-brand-bright" style={{ transform: 'translateZ(34px)' }}>
                      <Icon size={26} strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-semibold text-white" style={{ transform: 'translateZ(20px)' }}>{pillar.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{pillar.copy}</p>
                  </div>
                </TiltCard>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
