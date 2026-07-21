'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const data: { success: boolean; message?: string; error?: string } = await res.json()

      if (data.success) {
        setState('success')
        setMessage(data.message || 'Thank you! We will be in touch within 24 hours.')
        form.reset()
      } else {
        setState('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setState('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-xl font-semibold text-[var(--brand-dark)]">Message sent!</h3>
        <p className="text-[var(--brand-gray)] max-w-md">{message}</p>
        <Button
          variant="outline"
          onClick={() => setState('idle')}
          className="mt-4"
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Contact form" noValidate>
      {/* Honeypot — hidden from real users, bots will fill it */}
      <input
        type="text"
        name="_honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
      />

      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="cf-name" className="block text-sm font-medium text-[var(--brand-dark)] mb-1.5">
              Full Name <span className="text-red-500" aria-label="required">*</span>
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              minLength={2}
              disabled={state === 'loading'}
              placeholder="John Smith"
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--brand-dark)] placeholder:text-[var(--brand-gray-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition-all disabled:opacity-50"
            />
          </div>
          <div>
            <label htmlFor="cf-email" className="block text-sm font-medium text-[var(--brand-dark)] mb-1.5">
              Work Email <span className="text-red-500" aria-label="required">*</span>
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              disabled={state === 'loading'}
              placeholder="john@company.com"
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--brand-dark)] placeholder:text-[var(--brand-gray-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition-all disabled:opacity-50"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="cf-company" className="block text-sm font-medium text-[var(--brand-dark)] mb-1.5">
              Company <span className="text-red-500" aria-label="required">*</span>
            </label>
            <input
              id="cf-company"
              name="company"
              type="text"
              required
              minLength={2}
              disabled={state === 'loading'}
              placeholder="Acme Corp"
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--brand-dark)] placeholder:text-[var(--brand-gray-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition-all disabled:opacity-50"
            />
          </div>
          <div>
            <label htmlFor="cf-phone" className="block text-sm font-medium text-[var(--brand-dark)] mb-1.5">
              Phone <span className="text-[var(--brand-gray-light)]">(optional)</span>
            </label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              disabled={state === 'loading'}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--brand-dark)] placeholder:text-[var(--brand-gray-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition-all disabled:opacity-50"
            />
          </div>
        </div>

        <div>
          <label htmlFor="cf-service" className="block text-sm font-medium text-[var(--brand-dark)] mb-1.5">
            Service of Interest
          </label>
          <select
            id="cf-service"
            name="service"
            disabled={state === 'loading'}
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--brand-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition-all disabled:opacity-50"
          >
            <option value="">Select a service...</option>
            <option value="b2b-lead-generation">B2B Lead Generation</option>
            <option value="appointment-setting">Appointment Setting</option>
            <option value="cold-email-outreach">Cold Email Outreach</option>
            <option value="linkedin-outreach">LinkedIn Outreach</option>
            <option value="seo-lead-generation">SEO Lead Generation</option>
            <option value="content-marketing">Content Marketing</option>
            <option value="ai-sales-automation">AI Sales Automation</option>
            <option value="crm-automation">CRM Automation</option>
            <option value="account-based-marketing">Account-Based Marketing</option>
            <option value="demand-generation">Demand Generation</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="cf-budget" className="block text-sm font-medium text-[var(--brand-dark)] mb-1.5">
            Monthly Budget
          </label>
          <select
            id="cf-budget"
            name="budget"
            disabled={state === 'loading'}
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--brand-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition-all disabled:opacity-50"
          >
            <option value="">Select budget range...</option>
            <option value="under-2k">Under $2,000/month</option>
            <option value="2k-5k">$2,000 – $5,000/month</option>
            <option value="5k-10k">$5,000 – $10,000/month</option>
            <option value="10k-25k">$10,000 – $25,000/month</option>
            <option value="25k+">$25,000+/month</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="cf-message" className="block text-sm font-medium text-[var(--brand-dark)] mb-1.5">
            How can we help? <span className="text-red-500" aria-label="required">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            minLength={10}
            rows={4}
            disabled={state === 'loading'}
            placeholder="Tell us about your goals, current challenges, or what you're looking for..."
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--brand-dark)] placeholder:text-[var(--brand-gray-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition-all resize-none disabled:opacity-50"
          />
        </div>

        {/* Error message */}
        {state === 'error' && (
          <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-100" role="alert">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{message}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button
            type="submit"
            size="lg"
            disabled={state === 'loading'}
            className="w-full sm:w-auto min-w-[160px]"
          >
            {state === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
          <div className="flex items-center gap-2 text-sm text-[var(--brand-gray)]">
            <CheckCircle className="w-4 h-4 text-[var(--brand-accent)]" />
            <span>We respond within 24 hours</span>
          </div>
        </div>

        <p className="text-xs text-[var(--brand-gray-light)]">
          By submitting, you agree to our{' '}
          <a href="/privacy" className="underline hover:text-[var(--brand-primary)]">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  )
}
