import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Firebase Hosting doesn't support Next.js Image Optimization
  },
};

export default nextConfig;
