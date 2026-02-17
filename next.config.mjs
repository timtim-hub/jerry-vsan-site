/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["framer-motion"]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jerryvsan.com",
        pathname: "/_astro/**"
      }
    ]
  }
};

export default nextConfig;
