/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    allowedDevOrigins: ['localhost:3000', 'localhost:3001', '192.168.*:3000', '192.168.*:3001', '10.*:3000', '10.*:3001'],
  },
}

export default nextConfig
