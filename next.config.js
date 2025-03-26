/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'media.graphassets.com',
      'cdn-affmn.nitrocdn.com',
      'us-west-2.graphassets.com',
    ],
  },
}

module.exports = nextConfig
