import { Instagram, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import FadeIn from '../motion/FadeIn'

const IG_URL = 'https://www.instagram.com/vaunt_co/'

// Live feed widget. Instagram blocks framing of profile pages, so a live feed
// needs a 3rd-party widget (LightWidget, Behold, SnapWidget, Elfsight, …).
// Paste that widget's embed URL into VITE_INSTAGRAM_EMBED_URL to go live; until
// then the section shows the branded follow grid below.
const EMBED = import.meta.env.VITE_INSTAGRAM_EMBED_URL as string | undefined

export default function InstagramFeed() {
  return (
    <section id="instagram" className="section-pad relative">
      <div className="container-v">
        <SectionHeading
          eyebrow="Follow Us"
          title={
            <>
              The Latest <span className="text-glow">@vaunt_co</span>
            </>
          }
          intro="Fresh work, behind-the-scenes, and brand updates — follow along on Instagram."
        />

        <FadeIn className="mt-12">
          {EMBED ? (
            <div className="glass glow overflow-hidden p-2 sm:p-3">
              <iframe
                src={EMBED}
                title="Vaunt on Instagram (@vaunt_co)"
                loading="lazy"
                scrolling="no"
                className="h-[560px] w-full rounded-xl"
                style={{ border: 0 }}
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <a
                  key={i}
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vaunt on Instagram"
                  className="group/ig glass glow-hover relative flex aspect-square items-center justify-center overflow-hidden"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-25 transition-opacity duration-300 group-hover/ig:opacity-40"
                    style={{ background: 'radial-gradient(120% 120% at 30% 10%, #f9ce34 0%, #ee2a7b 45%, #6228d7 100%)' }}
                  />
                  <Instagram className="relative text-white/90 transition-transform duration-300 group-hover/ig:scale-110" size={30} />
                  <span className="absolute bottom-2 right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-[rgba(5,7,10,0.5)] text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover/ig:opacity-100">
                    <ArrowUpRight size={15} />
                  </span>
                </a>
              ))}
            </div>
          )}
        </FadeIn>

        <FadeIn className="mt-10 flex justify-center" delay={0.1}>
          <Button href={IG_URL} ariaLabel="Follow Vaunt on Instagram">
            <Instagram size={18} /> Follow @vaunt_co
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
