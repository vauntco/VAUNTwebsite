import { MapPin } from 'lucide-react'
import FadeIn from '../motion/FadeIn'
import Eyebrow from '../ui/Eyebrow'
import { site } from '../../data/site'

export default function GlobalReach() {
  return (
    <section id="global-reach" className="section-pad relative overflow-hidden">
      <div className="container-v">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <Eyebrow>Detroit Based, Global Reach</Eyebrow>
            <h2 className="text-section mt-5 font-display font-bold uppercase italic">
              Detroit Based,<br />
              <span className="text-glow">Global Reach.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-secondary sm:text-lg">
              Rooted in Detroit&apos;s innovative spirit, we bring local expertise with a worldwide
              impact. Our strategies are crafted to reach audiences far and wide, helping your brand
              grow beyond borders.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {site.locations.map((loc) => (
                <span
                  key={loc}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[rgba(120,180,255,0.05)] px-4 py-2 text-sm text-white"
                >
                  <MapPin size={15} className="text-brand-bright" /> {loc}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* glowing globe */}
          <FadeIn delay={0.1} className="relative mx-auto w-full max-w-md">
            <Globe />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function Globe() {
  return (
    <div className="relative aspect-square w-full">
      <div aria-hidden className="absolute inset-0 bg-glow-blob opacity-40 blur-2xl" />
      <svg viewBox="0 0 400 400" className="relative h-full w-full" role="img" aria-label="Stylized globe showing Vaunt's Michigan and Florida locations connected by a glowing arc">
        <defs>
          <radialGradient id="globe-fill" cx="40%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#11151c" />
            <stop offset="100%" stopColor="#05070a" />
          </radialGradient>
          <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#45B6FF" />
            <stop offset="100%" stopColor="#1D9BF0" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="200" r="150" fill="url(#globe-fill)" stroke="rgba(120,180,255,0.25)" strokeWidth="1" />

        {/* meridians */}
        {[0, 1, 2, 3].map((i) => (
          <ellipse
            key={`m${i}`}
            cx="200"
            cy="200"
            rx={150 - i * 38}
            ry="150"
            fill="none"
            stroke="rgba(120,180,255,0.12)"
            strokeWidth="1"
          />
        ))}
        {/* parallels */}
        {[1, 2, 3, 4, 5].map((i) => (
          <line
            key={`p${i}`}
            x1="50"
            x2="350"
            y1={50 + i * 50}
            y2={50 + i * 50}
            stroke="rgba(120,180,255,0.1)"
            strokeWidth="1"
            strokeDasharray="2 5"
          />
        ))}

        {/* connecting arc MI -> FL */}
        <path d="M168 150 Q 235 200 210 268" fill="none" stroke="url(#arc-grad)" strokeWidth="2" strokeLinecap="round" className="animate-pulse-glow" />

        {/* pins */}
        <Pin x={168} y={150} label="MI" />
        <Pin x={210} y={268} label="FL" />
      </svg>
    </div>
  )
}

function Pin({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="10" fill="rgba(29,155,240,0.2)" className="animate-pulse-glow" />
      <circle cx={x} cy={y} r="4.5" fill="#45B6FF" />
      <text x={x + 14} y={y + 4} fill="#fff" fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
        {label}
      </text>
    </g>
  )
}
