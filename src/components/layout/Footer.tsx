import { Link, useLocation } from 'react-router-dom'
import { Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { site } from '../../data/site'
import { footerLinks } from '../../data/navigation'
import { services } from '../../data/services'

export default function Footer() {
  const year = new Date().getFullYear()
  // The unlisted /book page hides the phone number (video-call bookings only).
  const showPhone = useLocation().pathname !== '/book'

  return (
    <footer className="relative mt-8 border-t border-[var(--hairline)] bg-[var(--bg-elevated)]">
      <div className="container-v py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <Logo size={40} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-secondary">
              {site.mission}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-ink-secondary">
              {showPhone && (
                <a href={site.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Phone size={15} className="text-brand-bright" /> {site.phone}
                </a>
              )}
              <a href={`mailto:${site.emails.info}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Mail size={15} className="text-brand-bright" /> {site.emails.info}
              </a>
              <span className="inline-flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-brand-bright" />
                {site.brandName} · West Bloomfield, MI
              </span>
            </div>
            <div className="mt-6">
              <Button to="/contact">Let&apos;s Talk</Button>
            </div>
          </div>

          {/* Links */}
          <FooterCol title="Company">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          {/* Services */}
          <FooterCol title="Services">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="transition-colors hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </FooterCol>

          {/* Locations + social */}
          <FooterCol title="Locations">
            {site.locations.map((loc) => (
              <li key={loc}>{loc}</li>
            ))}
            <li className="pt-4">
              <div className="flex gap-3">
                <SocialIcon href={site.social.instagram} label="Instagram"><Instagram size={18} /></SocialIcon>
                <SocialIcon href={site.social.linkedin} label="LinkedIn"><Linkedin size={18} /></SocialIcon>
                <SocialIcon href={site.social.youtube} label="YouTube"><Youtube size={18} /></SocialIcon>
              </div>
            </li>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--hairline)] pt-6 text-xs text-ink-tertiary sm:flex-row">
          <p>
            © Vaunt LLC {year} · All Rights Reserved ·{' '}
            <Link to="/terms" className="hover:text-ink-secondary">Terms &amp; Conditions</Link> ·{' '}
            <Link to="/privacy" className="hover:text-ink-secondary">Privacy Policy</Link>
          </p>
          <p className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_8px_var(--glow-blue)]" />
            Powered By Vaunt
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-xs uppercase tracking-[0.2em] text-ink-tertiary">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ink-secondary">{children}</ul>
    </div>
  )
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] text-ink-secondary transition-all hover:border-brand hover:text-white hover:shadow-glow-sm"
    >
      {children}
    </a>
  )
}
