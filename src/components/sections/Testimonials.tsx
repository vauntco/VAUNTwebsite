import { Star, Quote } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import FadeIn from '../motion/FadeIn'
import { testimonials } from '../../data/content'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={15} className="fill-brand-bright text-brand-bright" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative border-t border-[var(--hairline)]">
      <div className="container-v">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              <span className="text-glow">Real</span> Voices, <span className="text-glow">Real</span> Results
            </>
          }
          intro="Don't take our word for it — here's what our clients have to say."
        />

        {/*
          GHL reviews widget mounts here on the live site (Spec §5).
          TODO(Jacob): paste the GoHighLevel reviews widget script/snippet.
          The cards below are the static fallback until then.
        */}
        <div id="ghl-reviews-widget" aria-hidden className="hidden" />

        <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={(i % 3) * 0.06}>
              <figure className="glass glow-hover p-6">
                <Quote size={26} className="text-brand/40" />
                <blockquote className="mt-3 text-sm leading-relaxed text-ink-secondary">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-[var(--hairline)] pt-4">
                  <div>
                    <p className="font-display text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-ink-tertiary">{t.org}</p>
                  </div>
                  <Stars count={t.stars} />
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
