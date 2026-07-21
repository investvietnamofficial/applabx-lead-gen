import { cn } from '@/lib/utils'

interface ContentBlockProps {
  eyebrow?: string
  title: string
  subtitle?: string
  children: React.ReactNode
  variant?: 'default' | 'white' | 'highlight' | 'dark' | 'muted'
  align?: 'left' | 'center'
  className?: string
  icon?: React.ElementType
  id?: string
}

export function ContentBlock({
  eyebrow,
  title,
  subtitle,
  children,
  variant = 'default',
  align = 'left',
  className,
  icon: Icon,
  id,
}: ContentBlockProps) {
  const variantStyles = {
    default: 'bg-white',
    white: 'bg-white',
    highlight: 'bg-[var(--brand-light)]',
    dark: 'bg-[var(--brand-dark)] text-white',
    muted: 'bg-[var(--brand-light-secondary)]',
  }

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
  }

  const headingColorClass = (variant === 'dark') ? 'text-white' : 'text-[var(--brand-dark)]'

  return (
    <section
      id={id}
      className={cn('py-16 md:py-20', variantStyles[variant], className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={cn(alignmentClasses[align], align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-4xl')}>
          {/* Eyebrow */}
          {eyebrow && (
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
              {eyebrow}
            </span>
          )}

          {/* Icon + Title Row */}
          {(Icon || title) && (
            <div className="flex items-start gap-4 mb-6">
              {Icon && (
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[var(--brand-primary)]" />
                </div>
              )}
              <div className={cn(Icon ? '' : 'w-full')}>
                <h2 className={cn('text-2xl md:text-3xl font-bold', headingColorClass)}>
                  {title}
                </h2>
              </div>
            </div>
          )}

          {/* Subtitle */}
          {subtitle && (
            <p className={cn(
              'text-lg mb-8 leading-relaxed',
              variant === 'dark' ? 'text-white/80' : 'text-[var(--brand-gray)]'
            )}>
              {subtitle}
            </p>
          )}

          {/* Body Content */}
          <div className={cn(
            'prose-custom',
            variant === 'dark' ? 'text-white/90 [&_p]:text-white/90 [&_li]:text-white/90 [&_h3]:text-white' : ''
          )}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
