interface LogoProps {
  className?: string
  withWordmark?: boolean
  size?: number
  /** 'white' for dark backgrounds (default), 'blue' for the brand-blue mark. */
  tone?: 'white' | 'blue'
}

/**
 * VAUNT wordmark — the winged-V mark + "AUNT", rebuilt from the official brand
 * asset (sharp V with swept feather wings). Monochrome, brand-accurate.
 */
export default function Logo({ className = '', withWordmark = true, size = 30, tone = 'white' }: LogoProps) {
  const color = tone === 'blue' ? 'text-brand' : 'text-white'
  return (
    <span className={`inline-flex items-end gap-[0.35em] ${color} ${className}`} aria-label="VAUNT" role="img">
      <svg
        height={size}
        viewBox="0 0 132 104"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
        style={{ filter: 'drop-shadow(0 0 14px rgba(29,155,240,0.35))' }}
      >
        {/* left wing — 3 swept feathers */}
        <path d="M40 30 L2 7 L15 9 L42 31 Z" />
        <path d="M41 36 L9 20 L20 21 L43 37 Z" />
        <path d="M43 42 L17 31 L26 32 L45 43 Z" />
        {/* right wing — mirrored */}
        <path d="M92 30 L130 7 L117 9 L90 31 Z" />
        <path d="M91 36 L123 20 L112 21 L89 37 Z" />
        <path d="M89 42 L115 31 L106 32 L87 43 Z" />
        {/* V */}
        <path d="M39 28 L66 95 L93 28 L80 28 L66 62 L52 28 Z" />
      </svg>
      {withWordmark && (
        <span
          className="font-display font-bold uppercase leading-[0.78] tracking-[0.04em]"
          style={{ fontSize: size * 0.82 }}
        >
          aunt
        </span>
      )}
    </span>
  )
}
