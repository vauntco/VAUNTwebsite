import Seo from '../lib/Seo'
import ContactSection from '../components/sections/ContactSection'
import Newsletter from '../components/sections/Newsletter'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Let's talk. Set up a free discovery call with Vaunt to explore how we can help your brand look better, grow faster, and market smarter."
      />
      <div className="pt-20" />
      <ContactSection />
      <Newsletter />
    </>
  )
}
