import Seo from '../lib/Seo'
import PageHero from '../components/layout/PageHero'
import Services from '../components/sections/Services'
import VmsSection from '../components/sections/VmsSection'
import ContactSection from '../components/sections/ContactSection'

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        path="/services"
        description="Full-service marketing: web design, branding, AI marketing, social media, photo/video, lead generation, SEO, print, reputation management, and consulting."
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
