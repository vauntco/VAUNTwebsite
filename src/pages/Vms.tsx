import Seo from '../lib/Seo'
import { webPage, breadcrumb } from '../lib/schema'
import PageHero from '../components/layout/PageHero'
import VmsLogo from '../components/ui/VmsLogo'
import VmsSection from '../components/sections/VmsSection'
import VmsShowcase from '../components/sections/VmsShowcase'
import SmartWebsites from '../components/sections/SmartWebsites'
import ContactSection from '../components/sections/ContactSection'

export default function Vms() {
  return (
    <>
      <Seo
        title="Vaunt Marketing System (VMS)"
        path="/vms"
        description="The Vaunt Marketing System replaces your entire stack of marketing tools — CRM, funnels, email/SMS, reviews, automations — and the team to run it. Cancel, save, and organize."
        jsonLd={[
          webPage({
            title: 'Vaunt Marketing System (VMS) | VAUNT',
            description:
              'One system that replaces your entire stack of marketing tools — CRM, funnels, email/SMS, reviews and automations.',
            path: '/vms',
          }),
          breadcrumb([{ name: 'VMS', path: '/vms' }]),
        ]}
      />
      <PageHero
        eyebrowSlot={<VmsLogo size={80} className="mb-2" />}
        title={<>Cancel, Save, <span className="text-glow">and Organize.</span></>}
        intro="One system that replaces your entire stack of marketing tools — and the team to run it."
      />
      <VmsSection showHeading={false} />
      <VmsShowcase />
      <SmartWebsites />
      <ContactSection />
    </>
  )
}
