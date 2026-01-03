/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // appDir (app router) is enabled by default in modern Next.js versions
  // Move `optimizeFonts` to top-level and remove deprecated experimental flags
  optimizeFonts: false,
};

export default nextConfig;
