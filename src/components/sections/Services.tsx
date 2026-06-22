import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import FadeIn from '../motion/FadeIn'
import { services } from '../../data/services'

export default function Services({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="services" className={showHeading ? 'section-pad' : 'pb-20'}>
      <div className="container-v">
        {showHeading && (
          <SectionHeading
            eyebrow="Services"
            title="Your One-Stop Shop"
            intro="Creative solutions to help you achieve the perfect digital and physical brand presence. As a full-service agency, we provide bespoke designs and digital strategies that grow your reach, drive traffic, and boost engagement."
          />
        )}

        <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${showHeading ? 'mt-14' : ''}`}>
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <FadeIn key={service.slug} delay={(i % 3) * 0.06}>
                <Link
                  to={`/services/${service.slug}`}
                  className="glass glow-hover group flex h-full flex-col p-6"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[rgba(120,180,255,0.06)] text-brand-bright transition-colors group-hover:bg-[rgba(120,180,255,0.12)]">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <span className="font-display text-sm font-semibold tabular-nums text-ink-tertiary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">
                    {service.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-secondary">
                    {service.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-bright">
                    Learn more
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
