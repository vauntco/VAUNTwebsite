import Marquee from '../ui/Marquee'
import { techStack } from '../../data/logos'
import Eyebrow from '../ui/Eyebrow'

function TechChip({ name }: { name: string }) {
  return (
    <span className="flex items-center whitespace-nowrap rounded-full border border-[var(--glass-border)] bg-[rgba(255,255,255,0.02)] px-5 py-2 text-sm font-medium text-ink-secondary transition-colors hover:text-white">
      {name}
    </span>
  )
}

export default function TechStack() {
  return (
    <section className="py-16">
      <div className="container-v text-center">
        <Eyebrow>Our Toolkit</Eyebrow>
      </div>
      <div className="mt-8">
        <Marquee items={techStack.map((t) => <TechChip key={t} name={t} />)} duration={42} />
      </div>
      <div className="container-v mt-6 text-center">
        <span className="inline-flex items-center gap-2 text-xs text-ink-tertiary">
          <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_8px_var(--glow-blue)]" />
          Built with Claude Code
        </span>
      </div>
    </section>
  )
}
