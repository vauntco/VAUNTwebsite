interface LogoProps {
  className?: string
  /** Show the VAUNT wordmark next to the mark. */
  withWordmark?: boolean
  size?: number
}

/**
 * Placeholder VAUNT wordmark — a "V with wing" mark + Space Grotesk wordmark.
 * TODO(Jacob): swap in the official VAUNT logo SVG when provided (Open Items).
 */
export default function Logo({ className = '', withWordmark = true, size = 34 }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="VAUNT"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="vaunt-grad" x1="6" y1="8" x2="42" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#45B6FF" />
            <stop offset="1" stopColor="#0B63B5" />
          </linearGradient>
        </defs>
        {/* wing swoosh */}
        <path
          d="M8 9 C20 7, 34 9, 43 7 C38 13, 30 15, 23 15 L20 15 Z"
          fill="url(#vaunt-grad)"
          opacity="0.9"
        />
        {/* V */}
        <path
          d="M11 14 L24 41 L37 14 L30 14 L24 28 L18 14 Z"
          fill="url(#vaunt-grad)"
        />
      </svg>
      {withWordmark && (
        <span className="font-display text-xl font-bold tracking-tight text-white">
          VAUNT
        </span>
      )}
    </span>
  )
}
