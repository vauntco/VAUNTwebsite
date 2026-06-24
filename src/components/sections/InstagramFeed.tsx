import { useEffect } from 'react'
import { Instagram } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import FadeIn from '../motion/FadeIn'

const IG_URL = 'https://www.instagram.com/vaunt_co/'
const SCRIPT_ID = 'elfsight-platform-js'

/** Live Instagram feed for @vaunt_co via the Elfsight widget. */
export default function InstagramFeed() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) {
      // Re-scan the DOM on client-side route changes.
      ;(window as unknown as { eapps?: { Platform?: { initWidgetsFromBuffer?: () => void } } }).eapps?.Platform?.initWidgetsFromBuffer?.()
      return
    }
    const s = document.createElement('script')
    s.id = SCRIPT_ID
    s.src = 'https://elfsightcdn.com/platform.js'
    s.async = true
    document.body.appendChild(s)
  }, [])

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
          <div className="elfsight-app-69154e80-c8ff-46cb-bc7c-955feaa91f44" data-elfsight-app-lazy />
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
