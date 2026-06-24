import Seo from '../lib/Seo'
import { webPage, breadcrumb, faqPage } from '../lib/schema'
import { faqs } from '../data/content'
import Hero from '../components/sections/Hero'
import MoreThanAgency from '../components/sections/MoreThanAgency'
import Services from '../components/sections/Services'
import PortfolioPreview from '../components/sections/PortfolioPreview'
import SmartWebsites from '../components/sections/SmartWebsites'
import VmsSection from '../components/sections/VmsSection'
import WhyUs from '../components/sections/WhyUs'
import Testimonials from '../components/sections/Testimonials'
import LogoMarquee from '../components/sections/LogoMarquee'
import GlobalReach from '../components/sections/GlobalReach'
import TechStack from '../components/sections/TechStack'
import BlogPreview from '../components/sections/BlogPreview'
import InstagramFeed from '../components/sections/InstagramFeed'
import Faq from '../components/sections/Faq'
import ContactSection from '../components/sections/ContactSection'
import Newsletter from '../components/sections/Newsletter'

export default function Home() {
  return (
    <>
      <Seo
        jsonLd={[
          webPage({
            title: 'Web Design & Marketing Agency in West Bloomfield, MI | VAUNT',
            description:
              'West Bloomfield web design and digital marketing agency serving Oakland County and Metro Detroit.',
            path: '/',
          }),
          breadcrumb([]),
          faqPage(faqs),
        ]}
      />
      <Hero />
      <MoreThanAgency />
      <Services />
      <PortfolioPreview />
      <SmartWebsites />
      <VmsSection showTable={false} />
      <WhyUs />
      <Testimonials />
      <LogoMarquee />
      <GlobalReach />
      <TechStack />
      <BlogPreview />
      <InstagramFeed />
      <Faq />
      <ContactSection />
      <Newsletter />
    </>
  )
}
