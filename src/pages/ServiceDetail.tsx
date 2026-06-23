import { Link } from 'react-router-dom'
import { Check, ArrowRight, ArrowLeft } from 'lucide-react'
import Seo from '../lib/Seo'
import PageHero from '../components/layout/PageHero'
import FadeIn from '../components/motion/FadeIn'
import Button from '../components/ui/Button'
import GlowIcon from '../components/ui/GlowIcon'
import BrandGlyph from '../components/ui/BrandGlyph'
import ContactSection from '../components/sections/ContactSection'
import { getService, services, type ServiceFeature, type ChannelItem } from '../data/services'

/** Glow icon if available, else the vector fallback in a glass tile. */
function FeatureMedia({ feature, size = 56 }: { feature: ServiceFeature; size?: number }) {
  if (feature.glow) return <GlowIcon name={feature.glow} size={size} />
  const Icon = feature.icon ?? Check
  return (
    <span
      className="flex items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[rgba(120,180,255,0.06)] text-brand-bright"
      style={{ width: size, height: size }}
    >
      <Icon size={size * 0.46} strokeWidth={1.6} />
    </span>
  )
}

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = getService(slug)
  if (!service) return null
  const related = services.filter((s) => s.slug !== slug).slice(0, 3)
  const channelsAsCards = service.channels?.items.some((i) => i.desc)

  return (
    <>
      <Seo title={service.name} path={`/services/${service.slug}`} description={service.short} />
      <PageHero eyebrow="Service" title={service.name} intro={service.lead}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button to="/contact">
            Start a Project <ArrowRight size={16} />
          </Button>
          <Button to="/work" variant="ghost">
            See Our Work
          </Button>
        </div>
      </PageHero>

      {/* pitch + expanded overview + proof chips */}
      <section className="pt-2">
        <div className="container-v">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl font-bold italic text-glow sm:text-3xl">{service.pitch}</p>
            <div className="mt-6 space-y-4">
              {service.overview.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-secondary">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {service.outcomes.map((o) => (
                <span
                  key={o}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--glass-border)] bg-[rgba(120,180,255,0.06)] px-3.5 py-1.5 text-sm text-ink-secondary"
                >
                  <Check size={14} className="text-brand-bright" strokeWidth={3} />
                  {o}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FEATURES — SMART-Website flyer layout for web design, grid for the rest */}
      {service.flyer ? (
        <section className="section-pad mt-12 border-y border-[var(--hairline)] bg-[var(--bg-elevated)]">
          <div className="container-v">
            <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl">
              {service.featuresTitle}
            </h2>
            <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* framed website mockup (mirrors the flyer) */}
              <FadeIn className="order-2 lg:order-1">
                <div className="glass glow relative overflow-hidden p-3">
                  <div className="mb-2 flex items-center gap-1.5 px-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
                  </div>
                  <img
                    src="/icons/website-mockup.png"
                    alt="SMART Website mockup — Intelligence & Performance"
                    loading="lazy"
                    className="w-full rounded-xl"
                  />
                </div>
              </FadeIn>

              {/* feature list */}
              <div className="order-1 space-y-2 lg:order-2">
                {service.features.map((f, i) => (
                  <FadeIn key={f.title} delay={i * 0.05}>
                    <div className="glass glow-hover flex items-center gap-5 p-5">
                      <FeatureMedia feature={f} size={156} />
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-secondary">{f.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="section-pad pt-12">
          <div className="container-v">
            <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl">
              {service.featuresTitle}
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {service.features.map((f, i) => (
                <FadeIn key={f.title} delay={(i % 2) * 0.06}>
                  <div className="glass glow-hover flex h-full items-start gap-4 p-6">
                    <FeatureMedia feature={f} size={56} />
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{f.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CHANNELS / PLATFORMS — descriptive cards (lead gen) or a logo strip */}
      {service.channels && (
        <section className={`section-pad pt-4 ${service.flyer ? '' : ''}`}>
          <div className="container-v">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{service.channels.title}</h2>
              {service.channels.intro && (
                <p className="mx-auto mt-3 max-w-xl text-ink-secondary">{service.channels.intro}</p>
              )}
            </div>

            {channelsAsCards ? (
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {service.channels.items.map((c, i) => (
                  <FadeIn key={c.name} delay={(i % 3) * 0.06} className="h-full">
                    <div className="glass glow-hover flex h-full flex-col p-6">
                      <ChannelMark item={c} />
                      <h3 className="mt-4 font-display text-base font-semibold text-white">{c.name}</h3>
                      {c.desc && <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{c.desc}</p>}
                    </div>
                  </FadeIn>
                ))}
              </div>
            ) : (
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                {service.channels.items.map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-3 rounded-2xl border border-[var(--glass-border)] bg-[rgba(255,255,255,0.03)] px-5 py-3 text-base font-medium text-white"
                  >
                    <span className="text-white/90">
                      {c.brand ? <BrandGlyph brand={c.brand} size={32} /> : c.glow ? <GlowIcon name={c.glow} size={36} /> : null}
                    </span>
                    {c.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA band */}
      <section className="pb-4">
        <div className="container-v">
          <FadeIn className="glass glow flex flex-col items-center gap-5 p-8 text-center sm:p-12">
            <h2 className="font-display text-3xl font-bold text-white">
              Let&apos;s build something <span className="text-glow">that performs.</span>
            </h2>
            <p className="max-w-xl text-ink-secondary">{service.short}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact">Let&apos;s Talk</Button>
              <Button to="/work" variant="ghost">
                See Our Work
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* related services */}
      <section className="section-pad pt-12">
        <div className="container-v">
          <h3 className="font-display text-sm uppercase tracking-[0.2em] text-ink-tertiary">Explore more services</h3>
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

/** Logo or glow-icon header used on the descriptive channel cards. */
function ChannelMark({ item }: { item: ChannelItem }) {
  if (item.brand) {
    return (
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[rgba(120,180,255,0.06)] text-white">
        <BrandGlyph brand={item.brand} size={40} />
      </span>
    )
  }
  if (item.glow) return <GlowIcon name={item.glow} size={68} />
  const Icon = item.icon ?? Check
  return (
    <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[rgba(120,180,255,0.06)] text-brand-bright">
      <Icon size={32} strokeWidth={1.6} />
    </span>
  )
}
