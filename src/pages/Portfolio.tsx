import Seo from '../lib/Seo'
import PageHero from '../components/layout/PageHero'
import PortfolioGrid from '../components/ui/PortfolioGrid'
import ContactSection from '../components/sections/ContactSection'

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio"
        path="/portfolio"
        description="See the work. Websites, branding, and print from Vaunt — judge for yourself. Our work speaks volumes, showcasing unmatched attention to detail."
      />
      <PageHero
        eyebrow="Portfolio"
        title={<>Let Our <span className="text-glow">Work</span> Speak</>}
        intro="Judge for yourself. Our work speaks volumes, showcasing unmatched attention to detail. We take pride in every project we deliver."
      />
      <section className="pb-12">
        <div className="container-v">
          <PortfolioGrid />
        </div>
      </section>
      <ContactSection />
    </>
  )
}
