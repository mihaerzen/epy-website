/** @type {import('next').NextConfig} */
const nextConfig = {
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
