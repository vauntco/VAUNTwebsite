interface LogoProps {
  className?: string
  /** Rendered height in px (width scales with the wordmark's aspect ratio). */
  size?: number
}

/** Official VAUNT wordmark (white, transparent, trimmed to content). */
export default function Logo({ className = '', size = 36 }: LogoProps) {
  return (
    <img
      src="/vaunt-wordmark-white.png"
      alt="VAUNT"
      decoding="async"
      draggable={false}
      className={`block w-auto select-none ${className}`}
      style={{ height: size, filter: 'drop-shadow(0 0 12px rgba(29,155,240,0.28))' }}
    />
  )
}
