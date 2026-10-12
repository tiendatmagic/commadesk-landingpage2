/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/commadesk/logo_commadesk.webp',
        destination: '/commadesk/logo_CommaDesk.webp',
      },
      {
        source: '/commadesk/logo_commadesk.png',
        destination: '/commadesk/logo_CommaDesk.png',
      },
    ];
  },
};

export default nextConfig;
