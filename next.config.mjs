/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;


const withImages = require('next-images');

module.exports = withImages({
  images: {
    domains: ['your-image-host.com'],
  },
  env: {
    GITHUB_API_URL: process.env.GITHUB_API_URL,
  },
  webpack: (config) => {
    // Configurações personalizadas para o webpack
    return config;
  },
});