/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    // disable font optimization
  optimizeFonts: false,
  },
};

export default nextConfig;
