interface VmsLogoProps {
  /** Rendered height in px (width scales with the lockup's aspect ratio). */
  size?: number
  className?: string
}

/** Official Vaunt Marketing System (VMS) logo lockup — white on transparent. */
export default function VmsLogo({ size = 66, className = '' }: VmsLogoProps) {
  return (
    <img
      src="/vms-logo.png"
      alt="Vaunt Marketing System"
      decoding="async"
      draggable={false}
      className={`block w-auto select-none ${className}`}
      style={{ height: size, filter: 'drop-shadow(0 0 16px rgba(29,155,240,0.3))' }}
    />
  )
}
