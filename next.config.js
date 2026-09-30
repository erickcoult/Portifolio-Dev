/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/Projeto",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/Projeto/:slug",
        destination: "/projects/:slug",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      "media.graphassets.com",
      "cdn-affmn.nitrocdn.com",
      "us-west-2.graphassets.com",
    ],
  },
};

module.exports = nextConfig;
