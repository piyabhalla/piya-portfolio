/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Ignore ESLint during Vercel builds
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

export default nextConfig;