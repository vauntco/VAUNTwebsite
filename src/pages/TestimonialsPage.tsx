import Seo from '../lib/Seo'
import { webPage, breadcrumb } from '../lib/schema'
import PageHero from '../components/layout/PageHero'
import Testimonials from '../components/sections/Testimonials'
import ContactSection from '../components/sections/ContactSection'

export default function TestimonialsPage() {
  return (
    <>
      <Seo
        title="Testimonials — Real Voices, Real Results"
        path="/testimonials"
        description="Real voices, real results. Hear from the Oakland County and Metro Detroit brands Vaunt has helped look better, grow faster, and market smarter."
        jsonLd={[
          webPage({
            title: 'Testimonials — Real Voices, Real Results | VAUNT',
            description:
              'Hear from the Oakland County and Metro Detroit brands Vaunt has helped grow.',
            path: '/testimonials',
          }),
          breadcrumb([{ name: 'Testimonials', path: '/testimonials' }]),
        ]}
      />
      <PageHero
        eyebrow="Testimonials"
        title={<><span className="text-glow">Real</span> Voices, <span className="text-glow">Real</span> Results</>}
        intro="Don't take our word for it — here's what our clients have to say."
      />
      <Testimonials showHeading={false} />
      <ContactSection />
    </>
  )
}
