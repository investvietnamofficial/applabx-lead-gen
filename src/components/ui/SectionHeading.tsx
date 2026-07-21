import { cn } from '@/lib/utils'
import Link from 'next/link'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  children?: React.ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  children,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
  }

  return (
    <div className={cn('mb-12', alignmentClasses[align], className)}>
      {eyebrow && (
        <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
          {eyebrow}
        </span>
      )}
      <h2 className="heading-2 text-[var(--brand-dark)] mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-[var(--brand-gray)] max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}

interface SectionHeadingWithLinkProps extends SectionHeadingProps {
  linkText?: string
  linkHref?: string
}

export function SectionHeadingWithLink({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  linkText = 'Learn More',
  linkHref = '#',
  className,
  children,
}: SectionHeadingWithLinkProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
  }

  return (
    <div className={cn('mb-12', alignmentClasses[align], className)}>
      {eyebrow && (
        <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
          {eyebrow}
        </span>
      )}
      <h2 className="heading-2 text-[var(--brand-dark)] mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-[var(--brand-gray)] max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <Link
        href={linkHref}
        className="inline-flex items-center gap-2 mt-6 text-[var(--brand-primary)] font-medium hover:gap-3 transition-all"
      >
        {linkText}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
      {children}
    </div>
  )
}
