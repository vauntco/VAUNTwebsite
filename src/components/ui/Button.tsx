import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  /** Internal route ("/contact") or external ("https://…"). */
  to?: string
  href?: string
  variant?: 'cta' | 'ghost'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  ariaLabel?: string
}

/** Brand CTA pill / ghost button. Renders a Link, anchor, or button as needed. */
export default function Button({
  children,
  to,
  href,
  variant = 'cta',
  className = '',
  onClick,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const cls = `${variant === 'cta' ? 'btn-cta' : 'btn-ghost'} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
