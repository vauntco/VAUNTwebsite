import Seo from '../lib/Seo'
import { webPage, breadcrumb } from '../lib/schema'
import PageHero from '../components/layout/PageHero'
import PortfolioGrid from '../components/ui/PortfolioGrid'
import LogoMarquee from '../components/sections/LogoMarquee'
import ContactSection from '../components/sections/ContactSection'

export default function Work() {
  return (
    <>
      <Seo
        title="Our Work — Web Design & Branding Portfolio"
        path="/work"
        description="See our work: websites, branding, and print for businesses across West Bloomfield, Oakland County and Metro Detroit. Judge for yourself — our portfolio shows unmatched attention to detail."
        jsonLd={[
          webPage({
            title: 'Our Work — Web Design & Branding Portfolio | VAUNT',
            description:
              'Websites, branding, and print for businesses across Oakland County and Metro Detroit, MI.',
            path: '/work',
            type: 'CollectionPage',
          }),
          breadcrumb([{ name: 'Work', path: '/work' }]),
        ]}
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
      <LogoMarquee />
      <ContactSection />
    </>
  )
}
