import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Starfield from '../ui/Starfield'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden text-ink-primary">
      {/* global rotating-globe background — fixed behind every page */}
      <video
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full object-cover opacity-80"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/hero-globe.mp4" type="video/mp4" />
      </video>
      {/* legibility wash over the globe (keeps text readable on content pages) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-[rgba(5,7,10,0.58)]" />
      <Starfield />
      {/* ambient top glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[60vh] opacity-60"
        style={{
          background:
            'radial-gradient(60% 60% at 50% -10%, rgba(29,155,240,0.18) 0%, transparent 70%)',
        }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Nav />
      <main id="main" className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
