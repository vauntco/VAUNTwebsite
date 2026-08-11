import FadeIn from '../motion/FadeIn'
import type { ShowcaseShot } from '../../data/vmsShowcase'

/** Browser-chrome frame around a landscape screenshot. */
export function BrowserFrame({ shot, className = '' }: { shot: ShowcaseShot; className?: string }) {
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
export function PhoneFrame({ shot, className = '' }: { shot: ShowcaseShot; className?: string }) {
  return (
    <div
      className={`relative rounded-[2rem] border border-[var(--glass-border)] bg-[#05070a] p-2 shadow-[0_18px_60px_-12px_var(--glow-blue)] ${className}`}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-10 h-4 w-1/3 -translate-x-1/2 rounded-b-xl bg-[#05070a]" />
      <img src={shot.src} alt={shot.alt} loading="lazy" className="block w-full rounded-[1.5rem]" />
    </div>
  )
}

const DASHBOARD_SHOT: ShowcaseShot = {
  src: '/vms/desk-dashboard.jpg',
  alt: 'Vaunt Marketing System dashboard — opportunity status, revenue, funnel, and stage distribution',
  label: 'Dashboard',
  line: '',
}

const MOBILE_SHOT: ShowcaseShot = {
  src: '/vms/mob-home.jpg',
  alt: 'Mobile home screen with quick actions and a six-month revenue chart',
  label: 'Mobile',
  line: '',
}

/**
 * The signature VMS device composition: desktop dashboard in a browser frame
 * with the mobile app floating over the corner. Shared by the /vms showcase
 * and the homepage VMS section.
 */
export default function VmsDeviceHero({ className = '', delay = 0.05 }: { className?: string; delay?: number }) {
  return (
    <FadeIn className={`relative mx-auto max-w-5xl ${className}`} delay={delay}>
      <BrowserFrame shot={DASHBOARD_SHOT} />
      {/* floating phone — desktop only, keeps the mobile layout clean */}
      <div className="pointer-events-none absolute -bottom-10 -right-4 hidden w-[200px] lg:block xl:-right-10 xl:w-[230px]">
        <PhoneFrame shot={MOBILE_SHOT} />
      </div>
    </FadeIn>
  )
}
