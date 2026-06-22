import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import PortfolioGrid from '../ui/PortfolioGrid'
import Button from '../ui/Button'
import FadeIn from '../motion/FadeIn'

export default function PortfolioPreview() {
  return (
    <section id="portfolio" className="section-pad relative">
      <div className="container-v">
        <SectionHeading
          eyebrow="Portfolio"
          title="Let Our Work Speak"
          intro="Judge for yourself. Our work speaks volumes, showcasing unmatched attention to detail. We take pride in every project we deliver."
        />

        <PortfolioGrid limit={6} />

        <FadeIn className="mt-12 flex justify-center" delay={0.1}>
          <Button to="/portfolio" variant="ghost">
            View Full Portfolio <ArrowRight size={17} />
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
