import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    HOST: process.env.NEXT_PUBLIC_HOST,
    PORT: process.env.NEXT_PUBLIC_PORT
  }
};

export default nextConfig;
