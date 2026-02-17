/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["framer-motion"]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jerryvsan.com"
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com"
      },
      {
        protocol: "https",
        hostname: "www.youtube.com"
      }
    ]
  }
};

export default nextConfig;
