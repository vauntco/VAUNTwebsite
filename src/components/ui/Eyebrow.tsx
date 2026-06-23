interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

/** Blue, uppercase, letter-spaced section label (Spec §2). */
export default function Eyebrow({ children, className = '' }: EyebrowProps) {
  return <span className={`eyebrow ${className}`}>{children}</span>
}
