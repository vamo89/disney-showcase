import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'disneyapi.dev',
      },
      {
        hostname: 'static.wikia.nocookie.net',
      },
    ],
  },
};

export default nextConfig;
