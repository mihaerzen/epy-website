/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [60, 75],
  },
  async redirects() {
    return [
      {
        source: '/avtoelektronika',
        destination: '/avtoelektrika',
        statusCode: 301,
      },
    ];
  },
}

module.exports = nextConfig
