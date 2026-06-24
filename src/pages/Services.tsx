import Seo from '../lib/Seo'
import { webPage, breadcrumb } from '../lib/schema'
import PageHero from '../components/layout/PageHero'
import Services from '../components/sections/Services'
import VmsSection from '../components/sections/VmsSection'
import ContactSection from '../components/sections/ContactSection'

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Marketing & Web Design Services in Oakland County, MI"
        path="/services"
        description="Full-service marketing in West Bloomfield & Oakland County, MI: web design, branding, AI marketing, social media, photo/video, lead generation, SEO, print, reputation management and consulting."
        jsonLd={[
          webPage({
            title: 'Marketing & Web Design Services in Oakland County, MI | VAUNT',
            description:
              'Full-service marketing in West Bloomfield & Oakland County, MI: web design, branding, SEO, lead generation and more.',
            path: '/services',
            type: 'CollectionPage',
          }),
          breadcrumb([{ name: 'Services', path: '/services' }]),
        ]}
      />
      <PageHero
        eyebrow="Services"
        title={<>Your <span className="text-glow">One-Stop</span> Shop</>}
        intro="Creative solutions to help you achieve the perfect digital and physical brand presence. As a full-service agency, we provide bespoke designs and digital strategies that grow your reach, drive traffic, and boost engagement."
      />
      <Services showHeading={false} />
      <VmsSection />
      <ContactSection />
    </>
  )
}
