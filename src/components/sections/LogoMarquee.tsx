import SectionHeading from '../ui/SectionHeading'
import Marquee from '../ui/Marquee'
import { clientLogos, type ClientLogo } from '../../data/logos'

/** A client logo card — always full color, no filters. Dark logos get a light card so they stay visible. */
function LogoCard({ name, src, lightCard }: ClientLogo) {
  return (
    <div
      className={`group/logo glow-hover flex h-[96px] w-[190px] items-center justify-center rounded-[20px] border px-6 ${
        lightCard
          ? 'border-white/25 bg-white/92'
          : 'border-[var(--glass-border)] bg-[var(--surface-glass)] backdrop-blur-md'
      }`}
    >
      <img src={src} alt={name} loading="lazy" draggable={false} className="max-h-[48px] max-w-full object-contain" />
    </div>
  )
}

export default function LogoMarquee() {
  const third = Math.ceil(clientLogos.length / 3)
  const rowA = clientLogos.slice(0, third)
  const rowB = clientLogos.slice(third, third * 2)
  const rowC = clientLogos.slice(third * 2)

  return (
    <section id="clients" className="section-pad relative">
      <div className="container-v">
        <SectionHeading
          eyebrow="Clients"
          title="Trusted by Industry Leaders"
          intro="We've had the pleasure of working with prominent brands across various industries, trusted to drive meaningful growth, enhance visibility, and elevate their presence in today's competitive market."
        />
      </div>

      <div className="mt-14 flex flex-col gap-5">
        <Marquee items={rowA.map((l) => <LogoCard key={l.src} {...l} />)} duration={62} />
        <Marquee items={rowB.map((l) => <LogoCard key={l.src} {...l} />)} duration={70} reverse />
        <Marquee items={rowC.map((l) => <LogoCard key={l.src} {...l} />)} duration={64} />
      </div>
    </section>
  )
}
