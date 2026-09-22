import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Global rotating-globe backdrop, kept OFF the critical path.
 *
 * The 13 MB video is never part of the initial render: we wait until the
 * browser is idle after first paint before mounting the <video>, and we skip
 * it entirely for reduced-motion users. The page's base background (#05070a)
 * fills the gap until the first frame paints, so there's no flash. The fixed
 * `-z-10` placement + legibility wash match the previous inline markup so
 * opaque sections still paint over it and glass sections show it through.
 */
export default function GlobeVideo() {
  const reduce = useReducedMotion()
  const [show, setShow] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Pause the globe during active scroll: compositing a live full-screen video
  // under 40+ backdrop-filter cards is what makes scrolling stutter. It resumes
  // ~200ms after scrolling stops, so it still animates when the page is still.
  useEffect(() => {
    if (!show) return
    let timer: number | undefined
    const onScroll = () => {
      const v = videoRef.current
      if (v && !v.paused) v.pause()
      if (timer) clearTimeout(timer)
      timer = window.setTimeout(() => {
        videoRef.current?.play().catch(() => {})
      }, 200)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (timer) clearTimeout(timer)
    }
  }, [show])

  useEffect(() => {
    if (reduce) return
    // Respect metered/slow connections — the globe is decorative, not worth 13 MB.
    const conn = (navigator as { connection?: { saveData?: boolean; effectiveType?: string } }).connection
    if (conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType ?? ''))) return
    const ric = window.requestIdleCallback
    let idleId: number | undefined
    let timer: number | undefined
    const mount = () => setShow(true)
    if (typeof ric === 'function') {
      idleId = ric(mount)
    } else {
      timer = window.setTimeout(mount, 200)
    }
    return () => {
      if (idleId !== undefined) window.cancelIdleCallback?.(idleId)
      if (timer !== undefined) clearTimeout(timer)
    }
  }, [reduce])

  return (
    <>
      {show && (
        <video
          ref={videoRef}
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 h-full w-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        >
          <source src="/hero-globe.mp4" type="video/mp4" />
        </video>
      )}
      {/* legibility wash over the globe (keeps text readable on content pages) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-[rgba(5,7,10,0.58)]" />
    </>
  )
}
