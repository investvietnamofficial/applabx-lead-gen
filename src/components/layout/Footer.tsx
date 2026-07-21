'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { footerLinks, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'
import { ArrowRight, Mail, Globe, MessageCircle, Users, CheckCircle, AlertCircle } from 'lucide-react'

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: new URLSearchParams({ email }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Subscription failed. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-emerald-400">
        <CheckCircle className="w-5 h-5" />
        <span className="text-sm">You&apos;re subscribed!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 w-full md:w-auto" noValidate>
      <div className="relative flex-1 md:w-80">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--brand-gray-light)] pointer-events-none" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading'}
          placeholder="Enter your email"
          aria-label="Email address for newsletter"
          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-[var(--brand-gray-light)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors disabled:opacity-50"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] rounded-lg font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
      >
        {status === 'loading' ? 'Subscribing...' : (
          <>Subscribe <ArrowRight className="w-4 h-4" /></>
        )}
      </button>
      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-400 text-sm absolute -bottom-6 left-0">
          <AlertCircle className="w-4 h-4" />
          <span>{errorMsg}</span>
        </div>
      )}
    </form>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--brand-dark)] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <Container className="py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay updated with our newsletter</h3>
              <p className="text-[var(--brand-gray-light)]">
                Get the latest lead generation insights delivered to your inbox.
              </p>
            </div>
            <div className="relative w-full md:w-auto">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold text-white">AppLabx</span>
            </Link>
            <p className="text-[var(--brand-gray-light)] text-sm leading-relaxed mb-6">
              {SITE_DESCRIPTION}
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/applabx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[var(--brand-primary)] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Users className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/applabx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[var(--brand-primary)] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/applabx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[var(--brand-primary)] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">{footerLinks.services.title}</h4>
            <ul className="space-y-3">
              {footerLinks.services.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[var(--brand-gray-light)] hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">{footerLinks.industries.title}</h4>
            <ul className="space-y-3">
              {footerLinks.industries.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[var(--brand-gray-light)] hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">{footerLinks.company.title}</h4>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[var(--brand-gray-light)] hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">{footerLinks.resources.title}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[var(--brand-gray-light)] hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[var(--brand-gray-light)] text-sm">
              © {currentYear} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--brand-gray-light)] hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
