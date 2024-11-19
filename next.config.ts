// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      '127.0.0.1',      // Localhost
      'localhost',      // Localhost
      '192.168.161.173',  // Sizning IP manzilingiz
      // Boshqa domenlar, agar kerak bo'lsa, shu yerga qo'shing
    ],
  },
};

export default withNextIntl(nextConfig);
