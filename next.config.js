/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io', 'files.cdn.printful.com'],
    deviceSizes: [480, 600, 768, 900, 1024, 1152, 1280, 1440],
  },
  env: {
    SANITY_DATASET: process.env.SANITY_DATASET, 
    SANITY_ID: process.env.SANITY_ID, 
    SANITY_TOKEN: process.env.SANITY_TOKEN, 
    PRINTFUL_API_KEY: process.env.PRINTFUL_API_KEY, 
    NEXT_PUBLIC_SNIPCART_API_KEY: process.env.NEXT_PUBLIC_SNIPCART_API_KEY, 
    SITE_URL: process.env.SITE_URL, 
  }
}

module.exports = nextConfig
