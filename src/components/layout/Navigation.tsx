'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'AI Engine', href: '#engine' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/86 backdrop-blur border-b border-[#E8E4D9]">
      <nav className="max-w-[1180px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline" aria-label="AppLabx">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#12805C] to-[#0A4A38] flex items-center justify-center text-white font-bold text-base">
            AX
          </span>
          <span>
            <span className="block text-lg font-bold text-[#191A17] leading-none">AppLabx</span>
            <span className="block text-[10.5px] font-semibold text-[#6B6C64] uppercase tracking-widest leading-none mt-0.5">Lead Generation</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#3C3D38] hover:text-[#0B6E4F] no-underline transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#0B6E4F] text-white font-semibold text-xs shadow-sm hover:bg-[#0A4A38] transition-colors no-underline"
          >
            Book a Strategy Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#191A17] rounded-lg hover:bg-[#F3F1EA] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-t border-[#E8E4D9] px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-[#3C3D38] hover:text-[#0B6E4F] no-underline py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center px-5 py-2.5 rounded-full bg-[#0B6E4F] text-white font-semibold text-sm no-underline mt-2"
          >
            Book a Strategy Call
          </Link>
        </div>
      )}
    </header>
  )
}
