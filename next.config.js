/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // ✅ disables default image optimization for static export
  },
};

module.exports = nextConfig;