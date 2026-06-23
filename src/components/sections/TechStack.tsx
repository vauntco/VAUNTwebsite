import Marquee from '../ui/Marquee'
import Eyebrow from '../ui/Eyebrow'
import BrandGlyph from '../ui/BrandGlyph'
import { techBrands, type Brand } from '../../data/brands'

function ToolChip({ brand }: { brand: Brand }) {
  return (
    <span className="group/chip flex items-center gap-2.5 whitespace-nowrap rounded-full border border-[var(--glass-border)] bg-[rgba(255,255,255,0.02)] px-5 py-2.5 text-ink-secondary transition-all duration-300 hover:border-brand/60 hover:bg-[rgba(120,180,255,0.06)] hover:text-white hover:shadow-glow-sm">
      <span className="text-ink-tertiary transition-colors duration-300 group-hover/chip:text-brand-bright">
        <BrandGlyph brand={brand} size={20} />
      </span>
      <span className="text-sm font-medium">{brand.name}</span>
    </span>
  )
}

export default function TechStack() {
  return (
    <section className="py-16">
      <div className="container-v text-center">
        <Eyebrow>Our Toolkit</Eyebrow>
        <p className="mx-auto mt-4 max-w-md text-sm text-ink-tertiary">
          The platforms and tools we build, automate, and grow with.
        </p>
      </div>
      <div className="mt-10">
        <Marquee items={techBrands.map((b) => <ToolChip key={b.name} brand={b} />)} duration={46} />
      </div>
      <div className="container-v mt-8 text-center">
        <span className="inline-flex items-center gap-2 text-xs text-ink-tertiary">
          <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_8px_var(--glow-blue)]" />
          Built with Claude Code
        </span>
      </div>
    </section>
  )
}
