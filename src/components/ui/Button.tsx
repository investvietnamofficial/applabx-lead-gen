import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)] shadow-md hover:shadow-lg hover:-translate-y-0.5',
        secondary:
          'border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white',
        accent:
          'bg-[var(--brand-accent)] text-white hover:bg-[var(--brand-accent-dark)] shadow-md hover:shadow-lg',
        ghost:
          'text-[var(--brand-gray)] hover:text-[var(--brand-dark)] hover:bg-[var(--brand-light-secondary)]',
        outline:
          'border border-[var(--border)] bg-white hover:bg-[var(--brand-light)] text-[var(--brand-dark)]',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 shadow-md',
        link:
          'text-[var(--brand-primary)] underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-3 text-xs',
        md: 'h-11 px-5 text-sm',
        lg: 'h-14 px-8 text-base',
        xl: 'h-16 px-10 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
