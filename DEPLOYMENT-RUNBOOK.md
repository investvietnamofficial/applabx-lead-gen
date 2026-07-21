# AppLabx Lead Gen — Deployment Runbook

> Gilbert, follow these steps in order. Estimated time: 30–45 minutes.

---

## Architecture

**Static Cloudflare Pages export** — `output: 'export'` generates a fully static site to `/out`.
No Node.js server required. All pages are pre-rendered HTML. Contact form handled by
a Cloudflare Pages Function (`/functions/api/contact.ts`).

---

## Step 1 — Git Setup

```bash
cd "/Users/gilbertneo/Desktop/My Apps/applabx-lead-gen"

# Check current remotes
git remote -v

# If no remote set up yet, add one:
# (use investvietnamofficial account per your memory)
git remote add investvn https://github.com/investvietnamofficial/applabx-lead-gen.git
# or:
git remote add origin https://github.com/investvietnamofficial/applabx-lead-gen.git

# Verify
git remote -v
```

---

## Step 2 — Verify the Build

```bash
cd "/Users/gilbertneo/Desktop/My Apps/applabx-lead-gen"
npm run build

# Expected output: 43 routes generated, /out directory created
# Check: ls out/ | head -20
```

If the build fails, fix errors before proceeding.

---

## Step 3 — Cloudflare Pages Dashboard Setup

### 3a. Create project
1. Go to https://dash.cloudflare.com → Workers & Pages → Create application → Pages → Connect to Git
2. Connect your GitHub account and select the `applabx-lead-gen` repository

### 3b. Configure build settings
| Setting | Value |
|---|---|
| **Production branch** | `main` |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Root directory** | `/` |
| **Node.js version** | `20` |

### 3c. Add environment variables
In **Settings → Environment variables → Production**:

| Variable | Value | Notes |
|---|---|---|
| `RESEND_API_KEY` | `re_xxxxx` | **Required** — get from resend.com |
| `CONTACT_TO_EMAIL` | `hello@applabx.com` | Where form submissions go |
| `CONTACT_FROM_EMAIL` | `contact@applabx.com` | Must be verified in Resend |
| `NEXT_PUBLIC_CALENDLY_URL` | `https://calendly.com/your-link` | Replace with real Calendly |
| `NEXT_TELEMETRY_DISABLED` | `1` | Disable Next.js telemetry |

### 3d. Trigger first deployment
- Push to GitHub triggers automatically, OR
- Click **Retry deployment** in the Cloudflare Pages dashboard

### 3e. Note the preview URL
Note the `[project].pages.dev` URL — you'll use this to verify before setting up the custom domain.

---

## Step 4 — DNS + Custom Domain

### 4a. Add DNS CNAME record
In Cloudflare Dashboard → DNS for `applabx.com` zone:

| Field | Value |
|---|---|
| Type | `CNAME` |
| Name | `lead-gen-agency` |
| Target | `[project].pages.dev` |
| Proxy status | **Proxied** (orange cloud) |

### 4b. Configure custom domain in Cloudflare Pages
**After DNS propagates** (may take up to 24 hours, usually faster):

In Cloudflare Pages → project → Settings → Custom domains:
- Add: `lead-gen-agency.applabx.com`
- Cloudflare will automatically provision an SSL certificate

---

## Step 5 — Contact Form Verification

```bash
# Test the contact form submission
curl -X POST https://lead-gen-agency.applabx.com/api/contact \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Test+User&email=test@example.com&company=Test+Co&message=This+is+a+test+submission"
```

Expected: `{"success":true,"message":"Thank you! We will be in touch within 24 hours."}`

If you get an error, check:
1. `RESEND_API_KEY` is set in Cloudflare Pages environment variables
2. The sender email domain is verified in Resend

---

## Step 6 — Production Verification

```bash
# Verify key pages
for path in "/" "/services" "/industries" "/countries" "/pricing" \
            "/case-studies" "/about" "/contact" "/resources" \
            "/services/b2b-lead-generation" "/industries/saas" \
            "/countries/singapore" "/sitemap.xml" "/robots.txt"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "https://lead-gen-agency.applabx.com${path}")
  echo "${code} ${path}"
done
```

All should return `200`. Sitemap and robots.txt should also return `200`.

---

## Step 7 — Content Placeholders

See `PLACEHOLDERS.md` for a complete list of content that must be replaced
before the site is considered production-ready.

Key items:
- ⚠️ Client logos (TrustBar.tsx)
- ⚠️ Testimonials (TestimonialsSection.tsx)
- ⚠️ Case study data (case-studies/page.tsx)
- ⚠️ Team/founder bios (about/page.tsx)
- ⚠️ Calendly URL (contact/page.tsx)
- ⚠️ Real pricing tiers (pricing/page.tsx)
- ⚠️ Integration logos (IntegrationsSection.tsx)
- ⚠️ Resend API key (Cloudflare Pages env vars)

---

## File Structure

```
applabx-lead-gen/
├── public/
│   ├── _headers           ← Cloudflare security + cache headers
│   ├── favicon.svg
│   ├── og-default.svg    ← Static OG image
│   ├── sitemap.xml        ← Static sitemap (generated at build time)
│   └── robots.txt        ← Static robots file
├── functions/
│   └── api/
│       ├── contact.ts    ← Cloudflare Pages Function: POST /api/contact
│       └── newsletter.ts  ← Cloudflare Pages Function: POST /api/newsletter
├── src/
│   ├── app/
│   │   ├── page.tsx      ← Homepage (15 sections)
│   │   ├── about/
│   │   ├── case-studies/
│   │   ├── contact/
│   │   ├── countries/     ← 10 country SEO pages
│   │   ├── industries/    ← 9 industry pages
│   │   ├── pricing/
│   │   ├── resources/
│   │   ├── services/     ← 10 service pages
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/        ← Navigation, Footer, Layout
│   │   ├── sections/     ← 18 reusable section components
│   │   └── ui/           ← Button, Container, SectionHeading, Badge, SchemaMarkup
│   └── lib/
│       ├── constants.ts   ← All site data (services, industries, countries)
│       ├── utils.ts
│       └── seo.ts         ← Schema.org helpers
├── next.config.ts        ← output: 'export' — static site
├── .env.example          ← All required env vars documented
├── .wrangler.toml         ← (informational — Cloudflare Pages uses dashboard)
└── DEPLOYMENT-RUNBOOK.md ← This file
```

---

## Troubleshooting

### Build fails with "Image optimization requires a Node.js server"
- `unoptimized: true` is set in `next.config.ts` — this is correct for static export.
- Do NOT remove it.

### Contact form returns 500
- Check `RESEND_API_KEY` is set in Cloudflare Pages dashboard
- Check sender domain is verified in Resend
- Check `CONTACT_TO_EMAIL` is set

### Custom domain shows SSL error
- Wait for SSL certificate to provision (up to 15 minutes after adding custom domain)
- Ensure DNS is proxied (orange cloud) not DNS-only (grey cloud)

### CSP blocks fonts or scripts
- Edit `public/_headers` and adjust the `Content-Security-Policy` directive
- Current CSP: `default-src 'self'` with allowlists for fonts.googleapis.com, images.unsplash.com, resend.com, and Calendly

### .html extension in URLs (e.g. /about.html)
- This is expected for static Cloudflare Pages exports. The `_headers` wildcard `/*.html` applies no-cache headers. URLs without `.html` work via Cloudflare's default file resolution.
