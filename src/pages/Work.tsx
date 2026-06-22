import Seo from '../lib/Seo'
import PageHero from '../components/layout/PageHero'
import PortfolioGrid from '../components/ui/PortfolioGrid'
import LogoMarquee from '../components/sections/LogoMarquee'
import ContactSection from '../components/sections/ContactSection'

export default function Work() {
  return (
    <>
      <Seo
        title="Selected Work"
        path="/work"
        description="A look at selected work from Vaunt — websites, branding, and print built to attract, convert, and grow."
      />
      <PageHero
        eyebrow="Selected Work"
        title={<>The Work That <span className="text-glow">Speaks.</span></>}
        intro="A cross-section of the brands we've built, refreshed, and grown."
      />
      <section className="pb-12">
        <div className="container-v">
          <PortfolioGrid />
        </div>
      </section>
      <LogoMarquee />
      <ContactSection />
    </>
  )
}
