import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import Seo from '../lib/Seo'
import { absUrl, breadcrumb, faqPage, webPage, ORG_ID } from '../lib/schema'
import PageHero from '../components/layout/PageHero'
import FadeIn from '../components/motion/FadeIn'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import PortfolioCard from '../components/ui/PortfolioCard'
import Lightbox from '../components/ui/Lightbox'
import GlowIcon from '../components/ui/GlowIcon'
import Testimonials from '../components/sections/Testimonials'
import ContactSection from '../components/sections/ContactSection'
import { site } from '../data/site'
import { getService } from '../data/services'
import { portfolioItems, type PortfolioItem } from '../data/portfolio'

const PATH = '/web-design-michigan'

const SEO_TITLE = 'Website Design in Michigan — Custom Websites by VAUNT'
const SEO_DESCRIPTION =
  'Michigan website design agency building fast, SEO-ready custom websites that turn visitors into customers. Based in West Bloomfield, serving Metro Detroit and all of Michigan. Sites from $1,500.'

// Michigan-flavored client work shown on this page (all real Michigan projects).
const FEATURED_IDS = [
  'sporeshield-web',
  'ayar-roofing-web',
  'pearled-detailing',
  'metroparcel',
  'matrix-collision',
  'vikinglaser',
]

// Statewide service area — Vaunt is HQ'd in West Bloomfield and works remotely
// with businesses across the state.
const MICHIGAN_AREAS = [
  'Detroit',
  'West Bloomfield',
  'Farmington Hills',
  'Novi',
  'Troy',
  'Birmingham',
  'Bloomfield Hills',
  'Royal Oak',
  'Southfield',
  'Commerce Township',
  'Ann Arbor',
  'Grand Rapids',
  'Lansing',
  'Flint',
  'Sterling Heights',
  'Warren',
  'Livonia',
  'Dearborn',
  'Kalamazoo',
  'Traverse City',
]

const michiganFaqs = [
  {
    q: 'How much does website design cost in Michigan?',
    a: 'Our websites start at $1,500, with pricing increasing based on complexity, number of pages, and custom design features. Every quote is personalized — contact us and we will scope it with you on a quick call.',
  },
  {
    q: 'Do you work with businesses outside Metro Detroit?',
    a: 'Yes. We are headquartered in West Bloomfield and most of our clients are in Metro Detroit and Oakland County, but we design and launch websites for businesses across all of Michigan — everything is handled remotely with the same process, communication, and results.',
  },
  {
    q: 'How long does a website take to build?',
    a: 'Most projects launch in 2–4 weeks depending on scope. We handle strategy, design, copy, and development end to end, so you are never stuck coordinating multiple vendors.',
  },
  {
    q: 'Will my website show up on Google?',
    a: 'Every site we build ships with an SEO framework — clean structure, fast load times, and on-page SEO built in from day one. For businesses that want to actively rank and grow, we also offer ongoing SEO and marketing through the Vaunt Marketing System.',
  },
  {
    q: 'Will I own my website?',
    a: 'Yes — your website is owned by you, not rented. We also offer hosting, security, and maintenance packages so it stays fast, safe, and online without you lifting a finger.',
  },
  {
    q: 'Can you redesign my existing Michigan business website?',
    a: 'We prefer to rebuild from scratch because it produces the best result, but we take on redesign and editing projects at our discretion. Reach out and we will assess your current site honestly.',
  },
]

export default function WebDesignMichigan() {
  const [openItem, setOpenItem] = useState<PortfolioItem | null>(null)
  const webDesign = getService('web-design')
  const featured = FEATURED_IDS.map((id) => portfolioItems.find((p) => p.id === id)).filter(
    (p): p is PortfolioItem => !!p,
  )

  return (
    <>
      <Seo
        title={SEO_TITLE}
        noTitleTemplate
        path={PATH}
        description={SEO_DESCRIPTION}
        jsonLd={[
          {
            '@type': 'Service',
            '@id': `${absUrl(PATH)}#service`,
            name: 'Website Design in Michigan',
            serviceType: 'Website Design',
            description: SEO_DESCRIPTION,
            url: absUrl(PATH),
            provider: { '@id': ORG_ID },
            areaServed: { '@type': 'State', name: 'Michigan' },
          },
          webPage({ title: SEO_TITLE, description: SEO_DESCRIPTION, path: PATH }),
          breadcrumb([{ name: 'Website Design Michigan', path: PATH }]),
          faqPage(michiganFaqs, 'web-design-michigan#faq'),
        ]}
      />

      <PageHero
        eyebrow="Michigan Web Design Agency"
        title={
          <>
            Website Design in <span className="text-brand-bright">Michigan</span>
          </>
        }
        intro={
          <>
            Custom, conversion-focused websites for Michigan businesses — designed in West
            Bloomfield, launched statewide. Fast, SEO-ready, and built to turn visitors into
            customers, starting at $1,500.
          </>
        }
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button to="/contact">
            Get a Free Quote <ArrowRight size={16} />
          </Button>
          <Button to="/work" variant="ghost">
            See Our Work
          </Button>
        </div>
      </PageHero>

      {/* Trust stats */}
      <section className="section-pad pt-4">
        <div className="container-v">
          <FadeIn>
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { n: `Since ${site.founded}`, label: 'Building Michigan brands' },
                { n: '40+', label: 'Companies that trust us' },
                { n: '$1,500', label: 'Custom sites starting at' },
                { n: '2–4 wks', label: 'Typical launch time' },
              ].map((s) => (
                <div key={s.label} className="glass px-5 py-6 text-center">
                  <div className="font-display text-2xl font-bold text-white">{s.n}</div>
                  <div className="mt-1 text-xs text-ink-secondary">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Vaunt for Michigan web design */}
      <section className="section-pad pt-6">
        <div className="container-v">
          <SectionHeading
            eyebrow="Why Vaunt"
            title="A Michigan web design company that builds for results"
          />
          <FadeIn className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-ink-secondary">
            <p>
              Vaunt is a Michigan website design and marketing agency headquartered in West
              Bloomfield, in the heart of Oakland County. Since {site.founded} we&apos;ve designed,
              written, and built websites for Michigan businesses of every kind — roofers and
              restoration companies, law firms and language schools, manufacturers, logistics
              companies, auto shops, salons, and startups.
            </p>
            <p>
              We don&apos;t sell templates. Every project is a custom{' '}
              <Link to="/services/web-design" className="text-brand-bright hover:underline">
                SMART Website
              </Link>{' '}
              — designed around your brand, engineered to load fast, structured to rank on Google,
              and wired into the tools you already use. Strategy, design, copywriting, and
              development are all handled in-house, end to end.
            </p>
            <p>
              And because a website is only as good as the business it brings in, every build can
              plug straight into the{' '}
              <Link to="/vms" className="text-brand-bright hover:underline">
                Vaunt Marketing System
              </Link>{' '}
              — our all-in-one CRM, automation, and lead-generation platform — so the leads your
              new site captures actually get followed up, booked, and closed.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Michigan work */}
      <section className="section-pad pt-6">
        <div className="container-v">
          <SectionHeading
            eyebrow="Recent Work"
            title="Websites we've built for Michigan businesses"
            intro="A few recent launches — click any project to view the full site."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item, i) => (
              <FadeIn key={item.id} delay={(i % 3) * 0.06}>
                <PortfolioCard item={item} onOpen={() => setOpenItem(item)} />
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-10 text-center">
            <Button to="/work" variant="ghost">
              View the Full Portfolio <ArrowRight size={16} />
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* What's inside every build */}
      {webDesign && (
        <section className="section-pad pt-6">
          <div className="container-v">
            <SectionHeading
              eyebrow="What's Included"
              title="Inside every Michigan SMART Website"
              intro="Every site we ship comes standard with the features most agencies charge extra for."
            />
            <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
              {webDesign.features.map((f, i) => (
                <FadeIn key={f.title} delay={(i % 2) * 0.05}>
                  <div className="glass flex h-full items-start gap-4 p-5">
                    {f.glow && <GlowIcon name={f.glow} size={64} />}
                    <div>
                      <h3 className="font-display text-base font-semibold text-white">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-secondary">{f.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service area */}
      <section className="section-pad pt-6">
        <div className="container-v">
          <SectionHeading
            eyebrow="Statewide"
            title="Serving businesses across Michigan"
            intro="Headquartered in West Bloomfield — working with clients from Metro Detroit to the whole state, fully remote-friendly."
          />
          <FadeIn className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {MICHIGAN_AREAS.map((city) => (
              <span
                key={city}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-ink-secondary"
              >
                <MapPin size={13} className="text-brand-bright" />
                {city}, MI
              </span>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Social proof */}
      <Testimonials />

      {/* FAQ — static markup so every answer is crawlable */}
      <section className="section-pad pt-6">
        <div className="container-v">
          <SectionHeading
            eyebrow="FAQs"
            title="Michigan website design, answered"
            intro="The questions Michigan business owners ask us most."
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {michiganFaqs.map((f, i) => (
              <FadeIn key={f.q} delay={(i % 4) * 0.04}>
                <div className="glass px-6 py-5">
                  <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{f.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <Lightbox item={openItem} onClose={() => setOpenItem(null)} />
    </>
  )
}
