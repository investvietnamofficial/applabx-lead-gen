import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-[var(--brand-primary)] text-white',
        success: 'bg-[var(--brand-accent)] text-white',
        warning: 'bg-[var(--brand-gold)] text-white',
        outline: 'border border-[var(--border)] text-[var(--brand-gray)] bg-white',
        secondary: 'bg-[var(--brand-light-secondary)] text-[var(--brand-gray)]',
        primary: 'bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
