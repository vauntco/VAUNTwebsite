import { Check, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import FadeIn from '../motion/FadeIn'
import Button from '../ui/Button'
import { vmsBlocks, vmsRows, vmsTotals } from '../../data/vms'

export default function VmsSection() {
  return (
    <section id="vms" className="section-pad relative overflow-hidden">
      {/* featured glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[600px] w-[900px] -translate-x-1/2 bg-glow-blob opacity-30 blur-3xl"
      />
      <div className="container-v relative">
        <SectionHeading
          eyebrow="Vaunt Marketing System"
          title={
            <>
              Cancel, Save, <span className="text-glow">and Organize.</span>
            </>
          }
          intro="One system that replaces your entire stack of marketing tools — and the team to run it."
        />

        {/* Four narrative blocks */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {vmsBlocks.map((block, i) => (
            <FadeIn key={block.index} delay={(i % 2) * 0.08}>
              <div className="glass glow-hover flex h-full flex-col p-7">
                <span className="font-display text-3xl font-bold tabular-nums text-brand/40">
                  {block.index}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{block.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">{block.body}</p>
                <p className="mt-4 text-sm font-medium italic text-brand-bright">{block.kicker}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Comparison table */}
        <FadeIn className="mt-12" delay={0.1}>
          <div className="glass glow overflow-hidden">
            <div className="border-b border-[var(--hairline)] p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-white">Cancel, Save, and Organize.</h3>
              <p className="mt-2 text-sm text-ink-secondary">
                Everything VMS replaces — and what you stop paying for.
              </p>
            </div>

            {/* header row (desktop) */}
            <div className="hidden grid-cols-[2.2fr_2.6fr_1fr_auto] gap-4 border-b border-[var(--hairline)] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-ink-tertiary sm:grid sm:px-8">
              <span>Feature</span>
              <span>Replaces</span>
              <span className="text-right">Savings</span>
              <span className="w-12 text-center">VMS</span>
            </div>

            <ul>
              {vmsRows.map((row) => (
                <li
                  key={row.feature}
                  className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 border-b border-[var(--hairline)] px-6 py-4 last:border-0 transition-colors hover:bg-[rgba(120,180,255,0.04)] sm:grid-cols-[2.2fr_2.6fr_1fr_auto] sm:px-8"
                >
                  <span className="font-medium text-white">{row.feature}</span>
                  <span className="order-3 col-span-2 text-sm text-ink-secondary sm:order-none sm:col-span-1">
                    {row.replaces}
                  </span>
                  <span className="text-right text-sm font-semibold tabular-nums text-ink-secondary">
                    {row.savings}
                  </span>
                  <span className="flex w-12 justify-center justify-self-end sm:justify-self-center">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(29,155,240,0.15)] text-brand-bright shadow-[0_0_14px_var(--glow-blue)]">
                      <Check size={16} strokeWidth={2.5} />
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            {/* totals */}
            <div className="flex flex-col items-start justify-between gap-4 bg-[rgba(120,180,255,0.05)] p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <p className="text-sm text-ink-secondary">Total replaced value</p>
                <p className="font-display text-2xl font-bold text-white">
                  {vmsTotals.monthly}{' '}
                  <span className="text-base font-medium text-ink-secondary">
                    + a {vmsTotals.app} branded app
                  </span>
                </p>
              </div>
              <Button to="/contact">
                See VMS in action <ArrowRight size={17} />
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
