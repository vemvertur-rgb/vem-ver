import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant =
  | 'primary'
  | 'whatsapp'
  | 'outline'
  | 'light'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/90',

  whatsapp:
    'bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90',

  outline:
    'border border-primary/30 bg-card text-primary hover:bg-primary/5',

  light:
    'border border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
}

export const ctaClass = (
  variant: Variant = 'primary',
  className?: string,
) =>
  cn(
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-5 [&_svg]:shrink-0',
    variants[variant],
    className,
  )

type CtaLinkProps = {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  external?: boolean
  ariaLabel?: string
}

export function CtaLink({
  href,
  children,
  variant = 'primary',
  className,
  external = false,
  ariaLabel,
}: CtaLinkProps) {
  const classes = ctaClass(
    variant,
    className,
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </Link>
  )
}
