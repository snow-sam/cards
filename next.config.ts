import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  env: {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
  }
};

export default nextConfig;
