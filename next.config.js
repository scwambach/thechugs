/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io', 'files.cdn.printful.com'],
    deviceSizes: [480, 600, 768, 900, 1024, 1152, 1280, 1440],
  },
  env: {
    SANITY_ID: process.env.SANITY_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
  },
}

module.exports = nextConfig
