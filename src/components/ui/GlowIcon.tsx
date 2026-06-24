interface GlowIconProps {
  /** File name (without extension) in /public/icons. */
  name: string
  /** Rendered square size in px. */
  size?: number
  className?: string
}

/**
 * Renders one of the brand's glowing 3D icons from /public/icons. All icons are
 * transparent PNGs (the few that shipped on black were converted to straight
 * alpha), so they composite cleanly on any background — no blend hacks.
 */
export default function GlowIcon({ name, size = 48, className = '' }: GlowIconProps) {
  return (
    <img
      src={`/icons/${name}.png`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      draggable={false}
      className={`select-none object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
