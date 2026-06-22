import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { navItems } from '../../data/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on route change.
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-[var(--hairline)] bg-[rgba(5,7,10,0.72)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-v flex h-[68px] items-center justify-between" aria-label="Primary">
        <Link to="/" aria-label="VAUNT home" className="rounded-md">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              {item.children ? (
                <>
                  <button
                    className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-ink-secondary transition-colors hover:text-white"
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute left-1/2 top-full w-60 -translate-x-1/2 pt-3">
                      <ul className="glass glow overflow-hidden p-2">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <Link
                              to={child.to}
                              className="block rounded-lg px-3 py-2 text-sm text-ink-secondary transition-colors hover:bg-[rgba(120,180,255,0.08)] hover:text-white"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm transition-colors hover:text-white ${
                      isActive ? 'text-white' : 'text-ink-secondary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button to="/contact">Let&apos;s Talk</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="container-v max-h-[calc(100dvh-68px)] overflow-y-auto pb-10 pt-2">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-[var(--hairline)]">
                  <Link
                    to={item.to}
                    className="block py-3 font-display text-lg text-white"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="-mt-1 grid grid-cols-2 gap-x-4 gap-y-1 pb-3">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <Link to={child.to} className="block py-1.5 text-sm text-ink-secondary">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button to="/contact" className="w-full">
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
