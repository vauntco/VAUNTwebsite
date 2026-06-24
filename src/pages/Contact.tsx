import Seo from '../lib/Seo'
import { webPage, breadcrumb } from '../lib/schema'
import ContactSection from '../components/sections/ContactSection'
import Newsletter from '../components/sections/Newsletter'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact — Free Discovery Call"
        path="/contact"
        description="Let's talk. Book a free discovery call with Vaunt in West Bloomfield, MI to explore how we can help your Oakland County business look better, grow faster, and market smarter."
        jsonLd={[
          webPage({
            title: 'Contact — Free Discovery Call | VAUNT',
            description:
              'Book a free discovery call with Vaunt — web design & marketing in West Bloomfield, MI.',
            path: '/contact',
            type: 'ContactPage',
          }),
          breadcrumb([{ name: 'Contact', path: '/contact' }]),
        ]}
      />
      <div className="pt-20" />
      <ContactSection />
      <Newsletter />
    </>
  )
}
