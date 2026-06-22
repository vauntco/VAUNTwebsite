import AnimatedText from '../motion/AnimatedText'
import FadeIn from '../motion/FadeIn'

export default function MoreThanAgency() {
  return (
    <section className="relative border-y border-[var(--hairline)] py-20 sm:py-28">
      <div className="container-v text-center">
        <AnimatedText
          as="h2"
          text="MORE THAN AN AGENCY."
          className="text-section font-display font-bold uppercase tracking-tight"
        />
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-secondary">
            Strategy, design, and a marketing system that runs your growth — under one roof.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
