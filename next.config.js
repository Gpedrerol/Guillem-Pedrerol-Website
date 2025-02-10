/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This ensures Next.js generates a static site
  images: {
    unoptimized: true, // Keeps images working with static exports
  },
};

module.exports = nextConfig;
