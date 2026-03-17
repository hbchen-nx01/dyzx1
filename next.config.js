/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'dyzx.us.ci'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
