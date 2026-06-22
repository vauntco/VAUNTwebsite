import SectionHeading from '../ui/SectionHeading'
import FadeIn from '../motion/FadeIn'
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

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {smartFeatures.map((feature, i) => {
            const Icon = feature.icon
            const wide = i === 0 // first item spans wider for rhythm
            return (
              <FadeIn
                key={feature.name}
                delay={(i % 4) * 0.05}
                className={wide ? 'sm:col-span-2 lg:col-span-1 xl:col-span-2' : ''}
              >
                <div className="glass glow-hover flex h-full items-start gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[rgba(120,180,255,0.06)] text-brand-bright">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">{feature.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-secondary">{feature.line}</p>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
