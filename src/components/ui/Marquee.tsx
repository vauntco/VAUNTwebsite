import type { ReactNode } from 'react'

interface MarqueeProps {
  items: ReactNode[]
  reverse?: boolean
  /** Seconds for one full loop. */
  duration?: number
  className?: string
  itemClassName?: string
}

/**
 * Infinite horizontal marquee. The track is duplicated and translated -50% so
 * the loop is seamless. Pauses on hover; edges masked. Reduced motion handled
 * globally (animation frozen) — content stays readable.
 */
export default function Marquee({
  items,
  reverse = false,
  duration = 40,
  className = '',
  itemClassName = '',
}: MarqueeProps) {
  const track = [...items, ...items]
  return (
    <div className={`marquee-mask group relative w-full overflow-hidden ${className}`}>
      <div
        className={`flex w-max items-center gap-12 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } group-hover:[animation-play-state:paused]`}
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        {track.map((item, i) => (
          <div key={i} className={`flex shrink-0 items-center ${itemClassName}`} aria-hidden={i >= items.length}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
