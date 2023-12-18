/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "freelancers-hub.ca",
      },
    ],
  },
}

module.exports = nextConfig
