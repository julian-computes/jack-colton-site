/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Needed for static HTML export
    unoptimized: true
  }
}

module.exports = nextConfig
