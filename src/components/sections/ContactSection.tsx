import { Phone, Mail, MapPin } from 'lucide-react'
import FadeIn from '../motion/FadeIn'
import ContactForm from '../forms/ContactForm'
import { site } from '../../data/site'

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-v">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-[28px] p-7 shadow-glow-lg sm:p-10 lg:p-14"
            style={{
              background:
                'linear-gradient(160deg, #1DA0F2 0%, #1273C9 55%, #0B63B5 100%)',
            }}
          >
            {/* subtle inner texture */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{ background: 'radial-gradient(80% 60% at 90% 0%, rgba(255,255,255,0.35), transparent 60%)' }}
            />
            <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              {/* left — copy + contact */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                  Contact Us
                </span>
                <h2 className="mt-4 font-display text-4xl font-bold uppercase italic text-white sm:text-5xl">
                  Let&apos;s Talk
                </h2>
                <p className="mt-4 max-w-sm text-white/85">
                  We&apos;d love to hear more about your project! Let&apos;s set up a free discovery
                  call to explore how we can help.
                </p>
                <div className="mt-8 flex flex-col gap-3 text-white/90">
                  <a href={site.phoneHref} className="inline-flex items-center gap-3 transition hover:text-white">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15"><Phone size={16} /></span>
                    {site.phone}
                  </a>
                  <a href={`mailto:${site.emails.info}`} className="inline-flex items-center gap-3 transition hover:text-white">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15"><Mail size={16} /></span>
                    {site.emails.info}
                  </a>
                  <span className="inline-flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15"><MapPin size={16} /></span>
                    {site.locations.join(' · ')}
                  </span>
                </div>
              </div>

              {/* right — form */}
              <div className="rounded-2xl bg-[rgba(5,7,10,0.18)] p-5 backdrop-blur-sm sm:p-7">
                <ContactForm onPanel />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
