import SectionHeading from '../ui/SectionHeading'
import Marquee from '../ui/Marquee'
import { clientLogos, type ClientLogo } from '../../data/logos'

/** A client logo in a glass card — full color, except dark marks rendered white to stay visible. */
function LogoCard({ name, src, invert }: ClientLogo) {
  return (
    <div className="group/logo glass glow-hover flex h-[96px] w-[190px] items-center justify-center px-7">
      <img
        src={src}
        alt={name}
        loading="lazy"
        draggable={false}
        className={`max-h-[48px] max-w-full object-contain opacity-90 transition-opacity duration-300 group-hover/logo:opacity-100 ${
          invert ? '[filter:brightness(0)_invert(1)]' : ''
        }`}
      />
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
