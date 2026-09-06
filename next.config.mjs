/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    if (process.env.NEXT_PUBLIC_CUSTOM_DOMAIN) {
      return [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: '(.*)\\.vercel\\.app',
            },
          ],
          destination: `${process.env.NEXT_PUBLIC_CUSTOM_DOMAIN}/:path*`,
          permanent: 301,
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
