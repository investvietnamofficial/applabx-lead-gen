'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { AlertTriangle, Home } from 'lucide-react'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Container>
        <div className="max-w-lg mx-auto text-center py-20">
          <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-[var(--brand-dark)] mb-3">
            Something went wrong
          </h1>
          <p className="text-[var(--brand-gray)] mb-8">
            We encountered an unexpected error. This has been logged and our team will investigate.
          </p>
          {error.digest && (
            <p className="text-xs text-[var(--brand-gray-light)] mb-6 font-mono bg-[var(--brand-light)] px-3 py-2 rounded-lg inline-block">
              Error ID: {error.digest}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={reset} variant="primary">
              Try Again
            </Button>
            <a href="/">
              <Button variant="outline">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
