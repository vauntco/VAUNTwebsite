import SectionHeading from '../ui/SectionHeading'
import Marquee from '../ui/Marquee'
import { clientLogos } from '../../data/logos'

function LogoWord({ name }: { name: string }) {
  return (
    <span className="cursor-default whitespace-nowrap font-display text-lg font-semibold text-ink-tertiary/70 transition-all duration-300 hover:text-white hover:[text-shadow:0_0_18px_var(--glow-blue)]">
      {name}
    </span>
  )
}

export default function LogoMarquee() {
  const half = Math.ceil(clientLogos.length / 2)
  const rowA = clientLogos.slice(0, half)
  const rowB = clientLogos.slice(half)

  return (
    <section id="clients" className="section-pad relative">
      <div className="container-v">
        <SectionHeading
          eyebrow="Clients"
          title="Trusted by Industry Leaders"
          intro="We've had the pleasure of working with prominent brands across various industries, trusted to drive meaningful growth, enhance visibility, and elevate their presence in today's competitive market."
        />
      </div>

      <div className="mt-14 flex flex-col gap-6">
        <Marquee items={rowA.map((l) => <LogoWord key={l} name={l} />)} duration={55} />
        <Marquee items={rowB.map((l) => <LogoWord key={l} name={l} />)} duration={55} reverse />
      </div>
    </section>
  )
}
