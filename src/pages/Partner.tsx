import Seo from '../lib/Seo'
import PageHero from '../components/layout/PageHero'
import FadeIn from '../components/motion/FadeIn'
import Button from '../components/ui/Button'
import { Handshake, Repeat, Users } from 'lucide-react'

const perks = [
  { icon: Handshake, title: 'Refer & Earn', copy: 'Send business our way and get rewarded when your referrals become clients.' },
  { icon: Repeat, title: 'White-Label Ready', copy: 'Resell our websites, branding, and the Vaunt Marketing System under your own banner.' },
  { icon: Users, title: 'Real Support', copy: 'A dedicated team that plans, builds, and delivers — so you can scale without the overhead.' },
]

export default function Partner() {
  return (
    <>
      <Seo
        title="Partner Program"
        path="/partner-program"
        description="Partner with Vaunt. Refer business, white-label our work, and grow together with a full-service marketing team behind you."
      />
      <PageHero
        eyebrow="Partner Program"
        title={<>Let&apos;s Grow <span className="text-glow">Together.</span></>}
        intro="Agencies, freelancers, and consultants — partner with Vaunt to deliver more for your clients without expanding your team."
      >
        <Button to="/contact">Become a Partner</Button>
      </PageHero>

      <section className="section-pad pt-6">
        <div className="container-v">
          <div className="grid gap-5 md:grid-cols-3">
            {perks.map((perk, i) => {
              const Icon = perk.icon
              return (
                <FadeIn key={perk.title} delay={i * 0.08}>
                  <div className="glass glow-hover h-full p-8 text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[rgba(120,180,255,0.06)] text-brand-bright">
                      <Icon size={26} strokeWidth={1.6} />
                    </span>
                    <h2 className="mt-6 font-display text-xl font-semibold text-white">{perk.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{perk.copy}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
          <FadeIn className="mt-12 text-center" delay={0.1}>
            <p className="mx-auto max-w-xl text-ink-secondary">
              Program details and reward structures are shared on a quick intro call. Reach out and
              we&apos;ll tailor a partnership that works for you.
            </p>
            <div className="mt-6">
              <Button to="/contact">Let&apos;s Talk</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
