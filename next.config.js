/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  images: {
    domains: ['unsplash.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },

  // Enable static exports for specific pages while keeping SSR for others
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig
