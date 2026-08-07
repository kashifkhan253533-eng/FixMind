// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Enable SWC minification for faster builds
  swcMinify: true,

  // ✅ Optimize package imports
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // ✅ Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // ✅ Image optimization
  images: {
    domains: ['img.youtube.com', 'i.ytimg.com'],
    formats: ['image/avif', 'image/webp'],
  },

  // ✅ Security headers (fallback if _headers doesn't work)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig;
