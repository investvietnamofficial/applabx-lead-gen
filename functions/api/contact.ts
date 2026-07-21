/**
 * Cloudflare Pages Function: POST /api/contact
 *
 * Environment variables required (set in Cloudflare Pages dashboard):
 *   RESEND_API_KEY        — Resend API key (re_xxxxx). Required for email delivery.
 *   CONTACT_TO_EMAIL      — Destination email address (e.g. hello@applabx.com)
 *   CONTACT_FROM_EMAIL     — Sender address (e.g. contact@applabx.com)
 *
 * If RESEND_API_KEY is not set, submissions are logged but no email is sent.
 * The function still returns a success response to avoid leaking configuration.
 */

interface ContactPayload {
  name?: string
  email?: string
  company?: string
  phone?: string
  service?: string
  budget?: string
  message?: string
  _honeypot?: string   // bot trap — must be empty
}

const MAX_BODY_SIZE = 2000   // characters
const ALLOWED_FIELDS = ['name', 'email', 'company', 'phone', 'service', 'budget', 'message', '_honeypot']

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254
}

export async function onRequestPost(context: { request: Request; env: Record<string, string> }): Promise<Response> {
  // --- Parse body ---
  let body: ContactPayload
  try {
    const raw = await context.request.text()
    if (raw.length > MAX_BODY_SIZE) {
      return jsonResponse({ success: false, error: 'Request too large.' }, 413)
    }
    body = Object.fromEntries(new URLSearchParams(raw))
  } catch {
    return jsonResponse({ success: false, error: 'Invalid request body.' }, 400)
  }

  // --- Honeypot check ---
  if (body._honeypot && body._honeypot.trim() !== '') {
    // Silently accept — bots get a fake success
    return jsonResponse({ success: true, message: 'Thank you! We will be in touch within 24 hours.' }, 200)
  }

  // --- Field validation ---
  const errors: string[] = []

  if (!body.name || body.name.trim().length < 2) {
    errors.push('name is required (min 2 characters).')
  }
  if (!body.email || !validateEmail(body.email.trim())) {
    errors.push('a valid email address is required.')
  }
  if (!body.company || body.company.trim().length < 2) {
    errors.push('company name is required.')
  }
  if (!body.message || body.message.trim().length < 10) {
    errors.push('message is required (min 10 characters).')
  }

  if (errors.length > 0) {
    return jsonResponse({ success: false, error: errors.join(' ') }, 422)
  }

  const name = (body.name || '').trim()
  const email = (body.email || '').trim().toLowerCase()
  const company = (body.company || '').trim()
  const phone = (body.phone || '').trim()
  const service = (body.service || '').trim()
  const budget = (body.budget || '').trim()
  const message = (body.message || '').trim()

  // --- Send email via Resend (if configured) ---
  const resendKey = context.env.RESEND_API_KEY
  const toEmail = context.env.CONTACT_TO_EMAIL || 'hello@applabx.com'
  const fromEmail = context.env.CONTACT_FROM_EMAIL || 'contact@applabx.com'

  if (resendKey && resendKey.startsWith('re_')) {
    try {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          subject: `New Lead: ${name} from ${company}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <table style="border-collapse:collapse;font-family:Arial,sans-serif">
              <tr><td style="padding:6px 12px;font-weight:bold;border:1px solid #e2e8f0">Name</td><td style="padding:6px 12px;border:1px solid #e2e8f0">${escapeHtml(name)}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;border:1px solid #e2e8f0">Email</td><td style="padding:6px 12px;border:1px solid #e2e8f0">${escapeHtml(email)}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;border:1px solid #e2e8f0">Company</td><td style="padding:6px 12px;border:1px solid #e2e8f0">${escapeHtml(company)}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;border:1px solid #e2e8f0">Phone</td><td style="padding:6px 12px;border:1px solid #e2e8f0">${escapeHtml(phone || '—')}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;border:1px solid #e2e8f0">Service</td><td style="padding:6px 12px;border:1px solid #e2e8f0">${escapeHtml(service || '—')}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;border:1px solid #e2e8f0">Budget</td><td style="padding:6px 12px;border:1px solid #e2e8f0">${escapeHtml(budget || '—')}</td></tr>
              <tr><td style="padding:6px 12px;font-weight:bold;border:1px solid #e2e8f0">Message</td><td style="padding:6px 12px;border:1px solid #e2e8f0">${escapeHtml(message)}</td></tr>
            </table>
          `,
          text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone || '—'}\nService: ${service || '—'}\nBudget: ${budget || '—'}\n\nMessage:\n${message}`,
        }),
      })

      if (!resendRes.ok) {
        const errBody = await resendRes.text()
        console.error('Resend API error:', errBody)
        return jsonResponse({ success: false, error: 'Failed to send message. Please try again.' }, 500)
      }

      return jsonResponse(
        { success: true, message: 'Thank you! We will be in touch within 24 hours.' },
        200
      )
    } catch (err) {
      console.error('Contact form fetch error:', err)
      return jsonResponse({ success: false, error: 'Failed to send message. Please try again.' }, 500)
    }
  } else {
    return jsonResponse(
      { success: false, error: 'Email service is not configured. Please contact us directly at hello@applabx.com.' },
      503
    )
  }
}

// Allow GET — returns 405
export async function onRequestGet(): Promise<Response> {
  return jsonResponse({ error: 'Method not allowed.' }, 405)
}

// Basic HTML escaper to prevent XSS in email body
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
