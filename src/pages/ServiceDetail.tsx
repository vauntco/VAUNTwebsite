import { Link } from 'react-router-dom'
import { Check, ArrowRight, ArrowLeft } from 'lucide-react'
import Seo from '../lib/Seo'
import PageHero from '../components/layout/PageHero'
import FadeIn from '../components/motion/FadeIn'
import Button from '../components/ui/Button'
import ContactSection from '../components/sections/ContactSection'
import { getService, services } from '../data/services'

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = getService(slug)
  if (!service) return null
  const Icon = service.icon
  const related = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <Seo
        title={service.name}
        path={`/services/${service.slug}`}
        description={service.short}
      />
      <PageHero
        eyebrow="Service"
        title={service.name}
        intro={service.lead}
      >
        <Button to="/contact">
          Start a Project <ArrowRight size={16} />
        </Button>
      </PageHero>

      <section className="section-pad pt-6">
        <div className="container-v">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <FadeIn className="glass glow p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[rgba(120,180,255,0.06)] text-brand-bright">
                <Icon size={26} strokeWidth={1.6} />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold text-white">What&apos;s included</h2>
              <ul className="mt-5 space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-secondary">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(29,155,240,0.15)] text-brand-bright">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.1} className="flex flex-col justify-center">
              <h2 className="font-display text-3xl font-bold text-white">
                Let&apos;s build something <span className="text-glow">that performs.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-secondary">
                {service.short}
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Button to="/contact">Let&apos;s Talk</Button>
                <Button to="/portfolio" variant="ghost">See Our Work</Button>
              </div>
            </FadeIn>
          </div>

          {/* related services */}
          <div className="mt-16">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-ink-tertiary">
              Explore more services
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {related.map((s) => {
                const RIcon = s.icon
                return (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="glass glow-hover group flex items-center gap-3 p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--glass-border)] text-brand-bright">
                      <RIcon size={18} strokeWidth={1.75} />
                    </span>
                    <span className="font-display font-semibold text-white">{s.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-white">
              <ArrowLeft size={15} /> All services
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
