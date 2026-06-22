import { useEffect, useRef } from 'react'

/**
 * Faint, slow-drifting starfield (Spec §4.1). Canvas-based, client-only.
 * Respects prefers-reduced-motion (renders a static field, no animation loop).
 * Sits fixed behind all content at very low opacity.
 */
export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let stars: { x: number; y: number; z: number; r: number }[] = []

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = window.innerWidth * dpr
      canvas!.height = window.innerHeight * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(160, Math.floor((window.innerWidth * window.innerHeight) / 12000))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * 0.6 + 0.4,
        r: Math.random() * 1.3 + 0.3,
      }))
    }

    function draw() {
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (const s of stars) {
        if (!reduce) {
          s.y += s.z * 0.06
          if (s.y > window.innerHeight) {
            s.y = 0
            s.x = Math.random() * window.innerWidth
          }
        }
        const twinkle = reduce ? 1 : 0.6 + 0.4 * Math.sin((Date.now() / 1400) * s.z + s.x)
        ctx!.beginPath()
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${150 + s.z * 90}, ${190 + s.z * 50}, 255, ${0.18 * s.z * twinkle})`
        ctx!.fill()
      }
      if (!reduce) raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  )
}
