import SectionHeading from '../ui/SectionHeading'
import FadeIn from '../motion/FadeIn'
import GhlReviews from './GhlReviews'

/** showHeading=false on the /testimonials page (PageHero already carries the title). */
export default function Testimonials({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="testimonials" className="section-pad relative border-t border-[var(--hairline)]">
      <div className="container-v">
        {showHeading && (
          <SectionHeading
            eyebrow="Testimonials"
            title={
              <>
                <span className="text-glow">Real</span> Voices, <span className="text-glow">Real</span> Results
              </>
            }
            intro="Don't take our word for it — here's what our clients have to say."
          />
        )}

        {/* Live GoHighLevel reviews widget (Spec §5). */}
        <FadeIn className={showHeading ? 'mt-12' : ''}>
          <GhlReviews />
        </FadeIn>
      </div>
    </section>
  )
}
