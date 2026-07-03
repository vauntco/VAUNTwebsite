import SectionHeading from '../ui/SectionHeading'
import FadeIn from '../motion/FadeIn'
import { deskShots, mobileShots, connectedTags, type ShowcaseShot } from '../../data/vmsShowcase'

/** Browser-chrome frame around a landscape screenshot. */
function BrowserFrame({ shot, className = '' }: { shot: ShowcaseShot; className?: string }) {
  return (
    <div className={`glass glow overflow-hidden rounded-xl ${className}`}>
      {/* title bar */}
      <div className="flex items-center gap-1.5 border-b border-[var(--hairline)] bg-[rgba(255,255,255,0.03)] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 hidden truncate rounded bg-[rgba(255,255,255,0.05)] px-2 py-0.5 text-[10px] text-ink-tertiary sm:inline">
          app.vaunt.co
        </span>
      </div>
      <img src={shot.src} alt={shot.alt} loading="lazy" className="block w-full" />
    </div>
  )
}

/** iPhone-style frame around a portrait screenshot. */
function PhoneFrame({ shot, className = '' }: { shot: ShowcaseShot; className?: string }) {
  return (
    <div
      className={`relative rounded-[2rem] border border-[var(--glass-border)] bg-[#05070a] p-2 shadow-[0_18px_60px_-12px_var(--glow-blue)] ${className}`}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-10 h-4 w-1/3 -translate-x-1/2 rounded-b-xl bg-[#05070a]" />
      <img
        src={shot.src}
        alt={shot.alt}
        loading="lazy"
        className="block w-full rounded-[1.5rem]"
      />
    </div>
  )
}

/** Screenshot with a label + one-liner beneath it. */
function LabeledShot({
  children,
  label,
  line,
  delay = 0,
}: {
  children: React.ReactNode
  label: string
  line: string
  delay?: number
}) {
  return (
    <FadeIn delay={delay} className="flex flex-col">
      {children}
      <div className="mt-4 px-1">
        <h4 className="font-display text-base font-semibold text-white">{label}</h4>
        <p className="mt-1 text-sm leading-relaxed text-ink-secondary">{line}</p>
      </div>
    </FadeIn>
  )
}

/**
 * Device showcase for /vms — the live system on desktop and mobile.
 * Anchors the "one system, on the go and at your desk" story with real screenshots.
 */
export default function VmsShowcase() {
  return (
    <section id="one-system" className="section-pad relative overflow-hidden border-t border-[var(--hairline)]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 -z-0 h-[500px] w-[800px] -translate-x-1/2 bg-glow-blob opacity-20 blur-3xl"
      />
      <div className="container-v relative">
        <SectionHeading
          eyebrow="One System"
          title={
            <>
              On the go. <span className="text-glow">And at your desk.</span>
            </>
          }
          intro="See everything — leads, conversations, payments, marketing, and more — in one place. Every part connected and integrated, so nothing slips through the cracks."
        />

        {/* Hero composition: desktop dashboard with a phone overlapping */}
        <FadeIn className="relative mx-auto mt-14 max-w-5xl" delay={0.05}>
          <BrowserFrame
            shot={{
              src: '/vms/desk-dashboard.jpg',
              alt: 'Vaunt Marketing System dashboard — opportunity status, revenue, funnel, and stage distribution',
              label: 'Dashboard',
              line: '',
            }}
          />
          {/* floating phone — desktop only, keeps the mobile layout clean */}
          <div className="pointer-events-none absolute -bottom-10 -right-4 hidden w-[200px] lg:block xl:-right-10 xl:w-[230px]">
            <PhoneFrame
              shot={{
                src: '/vms/mob-home.jpg',
                alt: 'Mobile home screen with quick actions and a six-month revenue chart',
                label: 'Mobile',
                line: '',
              }}
            />
          </div>
        </FadeIn>

        {/* Connected capability strip */}
        <FadeIn className="mx-auto mt-16 max-w-3xl text-center" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {connectedTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--glass-border)] bg-[rgba(120,180,255,0.05)] px-3.5 py-1.5 text-sm font-medium text-ink-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-ink-tertiary">
            One login. Every tool talking to every other — no exports, no duct tape, no gaps.
          </p>
        </FadeIn>

        {/* At your desk — browser trio */}
        <div className="mt-20">
          <FadeIn>
            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">At your desk</h3>
            <p className="mt-2 max-w-2xl text-sm text-ink-secondary sm:text-base">
              The full command center in your browser — run the whole operation from one screen.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {deskShots.map((shot, i) => (
              <LabeledShot key={shot.label} label={shot.label} line={shot.line} delay={(i % 3) * 0.08}>
                <BrowserFrame shot={shot} />
              </LabeledShot>
            ))}
          </div>
        </div>

        {/* On the go — phone trio */}
        <div className="mt-20">
          <FadeIn>
            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">On the go</h3>
            <p className="mt-2 max-w-2xl text-sm text-ink-secondary sm:text-base">
              The same system in your pocket — reply, get paid, and close deals from the field.
            </p>
          </FadeIn>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3">
            {mobileShots.map((shot, i) => (
              <LabeledShot
                key={shot.label}
                label={shot.label}
                line={shot.line}
                delay={(i % 3) * 0.08}
              >
                <PhoneFrame shot={shot} />
              </LabeledShot>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
