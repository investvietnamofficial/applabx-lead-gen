# Placeholders — AppLabx Lead Generation Website

> This file documents every item that requires real content before production launch.
> Do NOT publish with fabricated data. Each section explains what to add and why.

---

## Critical (Required Before Launch)

### 1. Client Logos — `TrustBar.tsx`
**Why**: Showing "Company A, Company B" placeholders damages credibility.
**Action**: Add real SVG/PNG logos to `public/logos/` and set `SHOW_PLACEHOLDER = false`.
**Files**: `src/components/sections/TrustBar.tsx`

### 2. Client Testimonials — `TestimonialsSection.tsx`
**Why**: Fabricated testimonials are a trust and legal liability.
**Action**: Collect genuine testimonials from real clients with written consent.
Set `SHOW_TESTIMONIALS = true` and populate `realTestimonials[]`.
**Files**: `src/components/sections/TestimonialsSection.tsx`

### 3. Case Study Data — `CaseStudiesPreview.tsx` + `case-studies/page.tsx`
**Why**: Fabricated metrics ("250+ leads", "4.2x ROI") are unverifiable and misleading.
**Action**: Write up real case studies with real (or carefully labelled) metrics.
Set `SHOW_CASE_STUDIES = true` and populate `realCaseStudies[]`.
**Files**:
- `src/components/sections/CaseStudiesPreview.tsx`
- `src/app/case-studies/page.tsx`

### 4. Calendly Booking URL — `contact/page.tsx`
**Why**: "Book a Strategy Call" CTAs point to `#` — conversion is zero.
**Action**: Get a Calendly account → create a 30-min strategy call event →
replace `#` with the Calendly link.
Set `NEXT_PUBLIC_CALENDLY_URL` in Cloudflare Pages env vars.
**Files**: `src/app/contact/page.tsx`

### 5. Contact Form Email (Resend) — `functions/api/contact.ts`
**Why**: Contact submissions are logged but not emailed without Resend configured.
**Action**:
1. Create Resend account: https://resend.com
2. Add and verify your sending domain (DNS verification)
3. Set env vars in Cloudflare Pages dashboard:
   - `RESEND_API_KEY=re_xxxxx`
   - `CONTACT_TO_EMAIL=hello@applabx.com`
   - `CONTACT_FROM_EMAIL=contact@applabx.com`

### 6. Hero Stats — `Hero.tsx`
**Why**: "500+ Clients", "10M+ Leads", "3.2x ROI" are fabricated.
**Action**: Replace with verified, real numbers from your actual client data.
Update `STATS[]` in `src/components/sections/Hero.tsx`.

---

## Important (Recommended Before Launch)

### 7. Pricing Tiers — `pricing/page.tsx`
**Why**: Placeholder pricing ("From $2,000/month") may not reflect actual pricing.
**Action**: Verify and update all tier prices and feature lists.
**Files**: `src/app/pricing/page.tsx`

### 8. Team / Founder Bios — `about/page.tsx`
**Why**: Placeholder team cards look unprofessional and damage trust.
**Action**: Add real founder bio, photo, and team member profiles (with consent).
**Files**: `src/app/about/page.tsx`

### 9. Integration Logos — `IntegrationsSection.tsx`
**Why**: Text-based category list (with no real logos) is less credible than a logo grid.
**Action**: Add SVG logos for integrations to `public/logos/` and set `SHOW_PLACEHOLDER = false`.
**Files**: `src/components/sections/IntegrationsSection.tsx`

### 10. Newsletter Email (Resend) — `functions/api/newsletter.ts`
**Why**: Newsletter submissions are logged but not emailed without Resend.
**Action**: Same Resend account as #5. Set additional env var:
- `NEWSLETTER_TO=hello@applabx.com`
**Files**: `functions/api/newsletter.ts`

### 11. Office Addresses — `contact/page.tsx`
**Why**: Placeholder addresses look unprofessional.
**Action**: Add real office addresses for Singapore and Vietnam.
**Files**: `src/app/contact/page.tsx`

---

## Country Pages

### 12. Country Case Studies — `CountryPageTemplate.tsx`
**Why**: Country pages show empty case study sections.
**Action**: Add real case studies per country once available.
**Files**: `src/components/sections/CountryPageTemplate.tsx`

### 13. Country Market Stats — `CountryPageTemplate.tsx`
**Why**: Stats sidebar shows "⚠️ Verify" for GDP, B2B market size, etc.
**Action**: Source real stats from World Bank, IMF, or local government data.
**Files**: `src/components/sections/CountryPageTemplate.tsx`

---

## Resources / Content Hub

### 14. Guides — `resources/page.tsx`
**Why**: "⚠️ PLACEHOLDER" sections are visible in production.
**Action**: Write and publish real lead generation guides before launch.
**Files**: `src/app/resources/page.tsx`

### 15. Templates — `resources/page.tsx`
**Action**: Create and upload real downloadable templates (ICP worksheet, outreach sequences, etc.).

### 16. Checklists — `resources/page.tsx`
**Action**: Create and upload real downloadable checklists.

### 17. Blog Articles — `resources/page.tsx`
**Action**: Write and publish at least 3 real articles before launch.

---

## Privacy Policy, Terms, Cookies

**Why**: Footer links to `/privacy`, `/terms`, `/cookies` — all return 404.
**Action**: Create these pages before launch. Required for legal compliance and SEO.

---

## CRM / Analytics (Optional)

### 18. Google Analytics 4
Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Cloudflare Pages env vars.

### 19. Cloudflare Turnstile (Contact Form Anti-Spam)
Set real keys in Cloudflare Pages env vars:
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`

---

## Summary Checklist

| Priority | Item | File(s) |
|---|---|---|
| 🔴 Critical | Calendly URL | `contact/page.tsx` |
| 🔴 Critical | Resend API key | Cloudflare Pages env vars |
| 🔴 Critical | Client logos | `TrustBar.tsx` |
| 🔴 Critical | Real testimonials | `TestimonialsSection.tsx` |
| 🔴 Critical | Real case studies | `CaseStudiesPreview.tsx`, `case-studies/page.tsx` |
| 🔴 Critical | Verified hero stats | `Hero.tsx` |
| 🟡 Important | Pricing tiers | `pricing/page.tsx` |
| 🟡 Important | Team / founder bios | `about/page.tsx` |
| 🟡 Important | Integration logos | `IntegrationsSection.tsx` |
| 🟡 Important | Newsletter Resend | Cloudflare Pages env vars |
| 🟡 Important | Office addresses | `contact/page.tsx` |
| 🟡 Important | Legal pages | `privacy/page.tsx`, `terms/page.tsx`, `cookies/page.tsx` |
| 🟢 Nice-to-have | GA4 | Cloudflare Pages env vars |
| 🟢 Nice-to-have | Turnstile | Cloudflare Pages env vars |
| 🟢 Nice-to-have | Country case studies | `CountryPageTemplate.tsx` |
| 🟢 Nice-to-have | Resources content | `resources/page.tsx` |
