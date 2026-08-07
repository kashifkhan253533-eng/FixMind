// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ❌ swcMinify: true,  // YEH HATAO - ab default hai

  // ✅ Optimize package imports
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // ✅ Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // ✅ Image optimization (updated to remotePatterns)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // ✅ Security headers
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

export default nextConfig
