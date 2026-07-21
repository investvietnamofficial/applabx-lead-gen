import type { NextConfig } from 'next'

/**
 * Cloudflare Pages static export configuration.
 * output: 'export' generates a fully static site to /out.
 * All headers are handled by public/_headers (Cloudflare Pages convention).
 * Dynamic OG images (/og) are not compatible with static export;
 * a static og-default.png is used instead.
 */
const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages
  output: 'export',

  // Export to /out (Cloudflare Pages default build output directory)
  // Note: Cloudflare Pages also accepts '' (project root) as output.
  // Set build output directory to 'out' in Cloudflare Pages dashboard.

  images: {
    // Allow Unsplash for placeholder images
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
    // Static export requires 'custom' loader or no loader.
    // Use unoptimized for static export compatibility.
    unoptimized: true,
  },

  // Disable optimizeCss — it requires a Node.js server runtime
  experimental: {
    optimizeCss: false,
  },

  // Suppress the custom Cache-Control warning for _next/static during dev
  // (Cloudflare Pages handles caching via public/_headers)
}

export default nextConfig
