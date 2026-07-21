import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Search, Home, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '404 — Page Not Found | AppLabx',
  description: 'The page you are looking for does not exist or has been moved.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Container>
        <div className="max-w-lg mx-auto text-center py-20">
          {/* 404 visual */}
          <div className="relative mb-8 inline-block">
            <div className="text-[10rem] font-bold leading-none text-[var(--brand-light)] select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-[var(--brand-primary)]/10 flex items-center justify-center">
                <Search className="w-10 h-10 text-[var(--brand-primary)]" />
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-[var(--brand-dark)] mb-3">
            Page not found
          </h1>
          <p className="text-[var(--brand-gray)] mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist, has been moved, or the URL is
            incorrect. Try heading back to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link href="/">
              <Button variant="primary" size="lg">
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="text-sm text-[var(--brand-gray-light)]">
            <p>Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {['Services', 'Industries', 'Countries', 'Pricing', 'Case Studies'].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(' ', '-')}`}
                  className="px-3 py-1 rounded-full border border-[var(--border)] text-sm text-[var(--brand-gray)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
