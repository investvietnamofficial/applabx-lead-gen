/**
 * Cloudflare Pages Function: POST /api/newsletter
 *
 * Environment variables (set in Cloudflare Pages dashboard):
 *   RESEND_API_KEY    — Required for email delivery
 *   NEWSLETTER_TO     — Destination email for newsletter signups
 */

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254
}

export async function onRequestPost(context: {
  request: Request
  env: Record<string, string>
}): Promise<Response> {
  let email: string
  try {
    const raw = await context.request.text()
    if (raw.length > 500) {
      return jsonResponse({ success: false, error: 'Request too large.' }, 413)
    }
    const body = Object.fromEntries(new URLSearchParams(raw)) as { email?: string }
    email = ((body.email as string) || '').trim()
  } catch {
    return jsonResponse({ success: false, error: 'Invalid request.' }, 400)
  }

  if (!email || !validateEmail(email)) {
    return jsonResponse({ success: false, error: 'A valid email is required.' }, 422)
  }

  const resendKey = context.env.RESEND_API_KEY
  const toEmail = context.env.NEWSLETTER_TO || context.env.CONTACT_TO_EMAIL || 'hello@applabx.com'

  if (resendKey && resendKey.startsWith('re_')) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: context.env.CONTACT_FROM_EMAIL || 'contact@applabx.com',
          to: [toEmail],
          subject: `Newsletter Signup: ${email}`,
          text: `New newsletter signup: ${email}`,
        }),
      })
      if (!res.ok) {
        console.error('Resend newsletter error:', await res.text())
        return jsonResponse({ success: false, error: 'Failed to subscribe. Please try again.' }, 500)
      }

      return jsonResponse(
        { success: true, message: "You're subscribed! We'll keep you updated." },
        200
      )
    } catch (err) {
      console.error('Newsletter error:', err)
      return jsonResponse({ success: false, error: 'Failed to subscribe. Please try again.' }, 500)
    }
  } else {
    return jsonResponse(
      { success: false, error: 'Email service is not configured. Please try again later.' },
      503
    )
  }
}

export async function onRequestGet(): Promise<Response> {
  return jsonResponse({ error: 'Method not allowed.' }, 405)
}
