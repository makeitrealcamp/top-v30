/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com', 'localhost'],
  }
}

module.exports = nextConfig
