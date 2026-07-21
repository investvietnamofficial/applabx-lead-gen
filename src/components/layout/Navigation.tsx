'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { navigationLinks, CTA_PRIMARY, services, industries, countries } from '@/lib/constants'

interface DropdownItem {
  title: string
  href: string
  icon: string
  description: string
}
import {
  Menu,
  X,
  ChevronDown,
  Users,
  Mail,
  FileText,
  Search,
  Share2,
  Video,
  Target,
  Gift,
  Send,
  Zap,
  BarChart3,
  Code,
  Stethoscope,
  DollarSign,
  Factory,
  Briefcase,
  ShoppingCart,
  Building,
  GraduationCap,
  Scale,
  Truck,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Users,
  Mail,
  FileText,
  Search,
  Share2,
  Video,
  Target,
  Gift,
  Send,
  Zap,
  BarChart3,
  Code,
  Stethoscope,
  DollarSign,
  Factory,
  Briefcase,
  ShoppingCart,
  Building,
  GraduationCap,
  Scale,
  Truck,
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleDropdownEnter = (label: string) => {
    setOpenDropdown(label)
  }

  const handleDropdownLeave = () => {
    setOpenDropdown(null)
  }

  const getDropdownContent = (label: string): DropdownItem[] => {
    switch (label) {
      case 'Services':
        return services.map((service) => ({
          title: service.title,
          href: `/services/${service.slug}`,
          icon: service.icon,
          description: service.shortDescription,
        }))
      case 'Industries':
        return industries.map((industry) => ({
          title: industry.title,
          href: `/industries/${industry.slug}`,
          icon: industry.icon,
          description: industry.description,
        }))
      case 'Countries':
        return countries.map((country) => ({
          title: `${country.flag} ${country.name}`,
          href: `/countries/${country.slug}`,
          icon: 'Globe',
          description: country.description,
        }))
      case 'Resources':
        return [
          { title: 'Guides', href: '/resources/guides', icon: 'FileText', description: 'In-depth resources to master lead generation' },
          { title: 'Blog', href: '/resources/blog', icon: 'FileText', description: 'Latest insights and strategies' },
          { title: 'Templates', href: '/resources/templates', icon: 'FileText', description: 'Ready-to-use templates and tools' },
        ]
      default:
        return []
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white'
      )}
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-[var(--brand-dark)]">
              AppLabx
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && handleDropdownEnter(link.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={cn(
                    'flex items-center gap-1 text-sm font-medium text-[var(--brand-gray)] hover:text-[var(--brand-dark)] transition-colors py-6',
                    openDropdown === link.label && 'text-[var(--brand-dark)]'
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform',
                        openDropdown === link.label && 'rotate-180'
                      )}
                    />
                  )}
                </button>

                {/* Mega Menu Dropdown */}
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]">
                    <div className="bg-white rounded-xl shadow-xl border border-[var(--border)] p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {getDropdownContent(link.label).map((item: DropdownItem, idx) => {
                          const IconComponent = iconMap[item.icon] || iconMap['Users']
                          return (
                            <Link
                              key={idx}
                              href={item.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-[var(--brand-light)] transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-[var(--brand-light-secondary)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-primary)]/10 transition-colors">
                                <IconComponent className="w-5 h-5 text-[var(--brand-gray)] group-hover:text-[var(--brand-primary)]" />
                              </div>
                              <div>
                                <div className="font-medium text-sm text-[var(--brand-dark)] group-hover:text-[var(--brand-primary)] transition-colors">
                                  {item.title}
                                </div>
                                <div className="text-xs text-[var(--brand-gray)] mt-0.5 line-clamp-2">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button size="md">{CTA_PRIMARY}</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--brand-dark)]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-20 bg-white z-40 lg:hidden transition-all duration-300 overflow-auto',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <div className="container mx-auto py-8 px-4">
          <div className="space-y-6">
            {navigationLinks.map((link) => (
              <div key={link.label} className="border-b border-[var(--border)] pb-4">
                {link.children ? (
                  <>
                    <div className="flex items-center justify-between py-2">
                      <span className="font-semibold text-[var(--brand-dark)]">
                        {link.label}
                      </span>
                    </div>
                    <div className="pl-4 space-y-3 mt-2">
                      {link.label === 'Services' &&
                        services.map((service) => {
                          const IconComponent = iconMap[service.icon] || iconMap['Users']
                          return (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 text-[var(--brand-gray)] hover:text-[var(--brand-primary)]"
                            >
                              <IconComponent className="w-4 h-4" />
                              {service.title}
                            </Link>
                          )
                        })}
                      {link.label === 'Industries' &&
                        industries.map((industry) => {
                          const IconComponent = iconMap[industry.icon] || iconMap['Building']
                          return (
                            <Link
                              key={industry.id}
                              href={`/industries/${industry.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 text-[var(--brand-gray)] hover:text-[var(--brand-primary)]"
                            >
                              <IconComponent className="w-4 h-4" />
                              {industry.title}
                            </Link>
                          )
                        })}
                      {link.label === 'Countries' &&
                        countries.map((country) => (
                          <Link
                            key={country.id}
                            href={`/countries/${country.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 text-[var(--brand-gray)] hover:text-[var(--brand-primary)]"
                          >
                            <span>{country.flag}</span>
                            {country.name}
                          </Link>
                        ))}
                      {link.label === 'Resources' &&
                        [
                          { label: 'Guides', href: '/resources/guides' },
                          { label: 'Blog', href: '/resources/blog' },
                          { label: 'Templates', href: '/resources/templates' },
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 text-[var(--brand-gray)] hover:text-[var(--brand-primary)]"
                          >
                            {item.label}
                          </Link>
                        ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 font-semibold text-[var(--brand-dark)] hover:text-[var(--brand-primary)]"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button size="lg" className="w-full">
                {CTA_PRIMARY}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
