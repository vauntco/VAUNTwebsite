import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

/** Frosted translucent panel with thin glowing blue border (Spec §4.2). */
export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={`glass ${glow ? 'glow' : ''} ${hover ? 'glow-hover' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
