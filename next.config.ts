import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,

  // Turbopack configuration for Next.js 16
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
