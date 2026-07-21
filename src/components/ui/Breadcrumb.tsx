import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`${className}`}>
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 text-[var(--brand-gray)] hover:text-[var(--brand-primary)] transition-colors"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight className="w-4 h-4 text-[var(--brand-gray-light)] flex-shrink-0" aria-hidden="true" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-[var(--brand-gray)] hover:text-[var(--brand-primary)] transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-[var(--brand-dark)] font-medium whitespace-nowrap"
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
