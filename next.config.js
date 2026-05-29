/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [60, 75],
  },
  async redirects() {
    return [
      {
        source: '/avtoelektronika',
        destination: '/avtoelektrika',
        statusCode: 301,
      },
    ];
  },
  async headers() {
    // Permissive but real hardening. script/style use 'unsafe-inline' because Next.js
    // ships inline bootstrap scripts and Tailwind injects styles; all other sources are
    // locked to 'self'. There are no third-party scripts on this site.
    const contentSecurityPolicy = [
      "default-src 'self'",
      "img-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      "script-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join('; ');

    return [
      {
        source: '/:path*',
        headers: [
          {key: 'Content-Security-Policy', value: contentSecurityPolicy},
          {key: 'X-Content-Type-Options', value: 'nosniff'},
          {key: 'X-Frame-Options', value: 'SAMEORIGIN'},
          {key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
          {key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()'},
          {key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload'},
        ],
      },
    ];
  },
}

module.exports = nextConfig
