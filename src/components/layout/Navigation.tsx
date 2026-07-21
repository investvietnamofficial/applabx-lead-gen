'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { navigationLinks, CTA_PRIMARY, services, industries, countries } from '@/lib/constants'
import {
  Menu, X, ChevronDown,
  Users, Mail, FileText, Search, Share2, Video, Target, Gift, Send, Zap,
  BarChart3, Code, Stethoscope, DollarSign, Factory, Briefcase,
  ShoppingCart, Building, GraduationCap, Scale, Truck,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Users, Mail, FileText, Search, Share2, Video, Target, Gift, Send, Zap,
  BarChart3, Code, Stethoscope, DollarSign, Factory, Briefcase,
  ShoppingCart, Building, GraduationCap, Scale, Truck,
}

interface DropdownItem {
  title: string
  href: string
  icon: string
  description: string
}

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      menuButtonRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
    setOpenDropdown(label)
  }

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  const getDropdownContent = (label: string): DropdownItem[] => {
    if (label === 'Services') return services.map(s => ({
      title: s.title, href: `/services/${s.slug}`, icon: s.icon, description: s.shortDescription,
    }))
    if (label === 'Industries') return industries.map(i => ({
      title: i.title, href: `/industries/${i.slug}`, icon: i.icon, description: i.description,
    }))
    if (label === 'Countries') return countries.map(c => ({
      title: `${c.flag} ${c.name}`, href: `/countries/${c.slug}`, icon: 'Building', description: c.description,
    }))
    if (label === 'Resources') return [
      { title: 'Guides', href: '/resources/guides', icon: 'FileText', description: 'In-depth resources to master lead generation' },
      { title: 'Blog', href: '/resources/blog', icon: 'FileText', description: 'Latest insights and strategies' },
      { title: 'Templates', href: '/resources/templates', icon: 'FileText', description: 'Ready-to-use templates and tools' },
    ]
    return []
  }

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white',
      )}
    >
      <nav className="container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="AppLabx">
            <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center" aria-hidden="true">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-[var(--brand-dark)]">AppLabx</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link) => {
              const active = isLinkActive(link.href)
              const dropdownOpen = openDropdown === link.label
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center gap-1 px-3 py-6 text-sm font-medium rounded-lg transition-colors',
                      active ? 'text-[var(--brand-primary)]' : dropdownOpen ? 'text-[var(--brand-dark)]' : 'text-[var(--brand-gray)] hover:text-[var(--brand-dark)]',
                    )}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        className={cn('w-4 h-4 transition-transform duration-200', dropdownOpen && 'rotate-180')}
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  {/* Mega Menu */}
                  {link.children && dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[640px]">
                      <div
                        className="bg-white rounded-2xl shadow-2xl border border-[var(--border)] p-6"
                        onMouseEnter={() => link.children && handleDropdownEnter(link.label)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="grid grid-cols-2 gap-3">
                          {getDropdownContent(link.label).map((item, idx) => {
                            const IconComponent = iconMap[item.icon] || Building
                            return (
                              <Link
                                key={idx}
                                href={item.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-[var(--brand-light)] transition-colors group"
                              >
                                <div className="w-10 h-10 rounded-xl bg-[var(--brand-light-secondary)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-primary)]/10 transition-colors">
                                  <IconComponent className="w-5 h-5 text-[var(--brand-gray)] group-hover:text-[var(--brand-primary)]" aria-hidden="true" />
                                </div>
                                <div>
                                  <div className="font-medium text-sm text-[var(--brand-dark)] group-hover:text-[var(--brand-primary)]">{item.title}</div>
                                  <div className="text-xs text-[var(--brand-gray)] mt-0.5 line-clamp-2">{item.description}</div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button size="md">{CTA_PRIMARY}</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--brand-dark)] rounded-lg hover:bg-[var(--brand-light)] transition-colors"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={cn(
          'fixed inset-0 top-20 bg-white z-40 lg:hidden transition-all duration-300 overflow-auto',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none',
        )}
      >
        <nav className="container py-8 px-4" aria-label="Mobile navigation">
          <div className="space-y-2">
            {navigationLinks.map((link) => (
              <div key={link.label} className="border-b border-[var(--border)]/50 pb-2">
                {link.children ? (
                  <div>
                    <div className="py-3 font-semibold text-[var(--brand-dark)]">{link.label}</div>
                    <div className="pl-4 pb-2 space-y-1">
                      {link.label === 'Services' && services.map((s) => {
                        const IconComponent = iconMap[s.icon] || Users
                        return (
                          <Link key={s.id} href={`/services/${s.slug}`} onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2 text-[var(--brand-gray)] hover:text-[var(--brand-primary)]">
                            <IconComponent className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                            <span className="text-sm">{s.title}</span>
                          </Link>
                        )
                      })}
                      {link.label === 'Industries' && industries.map((i) => {
                        const IconComponent = iconMap[i.icon] || Building
                        return (
                          <Link key={i.id} href={`/industries/${i.slug}`} onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2 text-[var(--brand-gray)] hover:text-[var(--brand-primary)]">
                            <IconComponent className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                            <span className="text-sm">{i.title}</span>
                          </Link>
                        )
                      })}
                      {link.label === 'Countries' && countries.map((c) => (
                        <Link key={c.id} href={`/countries/${c.slug}`} onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 py-2 text-[var(--brand-gray)] hover:text-[var(--brand-primary)]">
                          <span aria-hidden="true">{c.flag}</span>
                          <span className="text-sm">{c.name}</span>
                        </Link>
                      ))}
                      {link.label === 'Resources' && [
                        { label: 'Guides', href: '/resources/guides' },
                        { label: 'Blog', href: '/resources/blog' },
                        { label: 'Templates', href: '/resources/templates' },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 py-2 text-[var(--brand-gray)] hover:text-[var(--brand-primary)]">
                          <span className="text-sm">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 font-semibold text-[var(--brand-dark)] hover:text-[var(--brand-primary)]"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button size="lg" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                {CTA_PRIMARY}
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
