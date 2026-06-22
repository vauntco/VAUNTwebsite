import Seo from '../lib/Seo'
import PageHero from '../components/layout/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import FadeIn from '../components/motion/FadeIn'
import Button from '../components/ui/Button'
import GlobalReach from '../components/sections/GlobalReach'
import { team } from '../data/content'
import { GraduationCap } from 'lucide-react'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description="Founded in 2018, Vaunt is a full-service, innovative agency helping businesses look better, grow faster, and market smarter. Detroit based, global reach."
      />
      <PageHero
        eyebrow="About Vaunt"
        title={<>Detroit Based, <span className="text-glow">Global Reach.</span></>}
        intro="Rooted in Detroit's innovative spirit, we bring local expertise with a worldwide impact. Our strategies are crafted to reach audiences far and wide, helping your brand grow beyond borders."
      />

      {/* Who we are */}
      <section className="section-pad pt-6">
        <div className="container-v">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <FadeIn>
              <SectionHeading
                align="left"
                eyebrow="Who We Are"
                title="Agile, Innovative, and Accountable"
              />
            </FadeIn>
            <FadeIn delay={0.1} className="space-y-5 text-base leading-relaxed text-ink-secondary">
              <p>
                Founded in 2018, Vaunt is a full-service, innovative agency on a mission to provide
                essential and advanced marketing services to businesses. From brand building and
                captivating website design to AI automation, content creation, and campaign
                strategy—we deliver the tools and execution brands need to thrive.
              </p>
              <p>
                Behind Vaunt is founder and CEO Jacob Brikho, a marketer and designer since age 15
                who has spent years honing his craft through formal education and hands-on
                experience. With a background in private equity and hundreds of successful projects
                under his belt, Jacob leads Vaunt with a clear focus:{' '}
                <span className="text-white">
                  helping businesses look better, grow faster, and market smarter.
                </span>
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad border-y border-[var(--hairline)] bg-[var(--bg-elevated)]">
        <div className="container-v">
          <SectionHeading
            eyebrow="The Team"
            title="Lean Crew, Big Impact"
            intro="Small team, big impact. Our driven leaders bring years of experience and a track record of success, with hundreds of successful projects under our belt."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={(i % 5) * 0.05}>
                <div className="glass glow-hover flex h-full flex-col items-center p-6 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[rgba(120,180,255,0.06)] font-display text-xl font-bold text-brand-bright">
                    {member.name === 'You?' ? '+' : member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">{member.name}</h3>
                  <p className="mt-1 text-xs text-ink-secondary">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-pad">
        <div className="container-v">
          <FadeIn className="glass glow mx-auto max-w-4xl p-8 sm:p-12">
            <span className="eyebrow">Founder &amp; CEO</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white">Jacob Brikho</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-secondary">
              <p>
                A born entrepreneur, Jacob began his journey as a self-taught marketer and designer
                at 15. In 2018, he founded Vaunt to leverage his extensive experience in digital
                marketing and business growth. With a background in private equity, Jacob understands
                what drives engagement, conversions, and revenue. Having worked across diverse
                industries, Jacob has led teams to craft tailored omnichannel campaigns, establish
                brand standards, and implement strategies that deliver measurable results. At Vaunt,
                the focus is on using cutting-edge marketing strategies and captivating brand design
                to supercharge brands, helping them thrive in a competitive landscape.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 border-t border-[var(--hairline)] pt-6 sm:flex-row sm:gap-8">
              <p className="inline-flex items-start gap-2 text-sm text-ink-secondary">
                <GraduationCap size={18} className="mt-0.5 shrink-0 text-brand-bright" />
                Lawrence Tech University — B.S. in Business Administration, Marketing Major, Cum Laude
              </p>
              <p className="inline-flex items-start gap-2 text-sm text-ink-secondary">
                <GraduationCap size={18} className="mt-0.5 shrink-0 text-brand-bright" />
                Draper University — Silicon Valley Entrepreneurship Intensive Program
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <GlobalReach />

      <section className="pb-24 text-center">
        <Button to="/contact">Work With Us</Button>
      </section>
    </>
  )
}
