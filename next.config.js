/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "freelancers-hub.ca",
      },
      {
        protocol: "https",
        hostname: "cdn-jbjfh.nitrocdn.com",
      },
      {
        protocol: "https",
        hostname: "cdn-kdmof.nitrocdn.com",
      },
    ],
  },
}

module.exports = nextConfig
