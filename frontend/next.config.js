/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_ALCHEMY_KEY: process.env.REACT_APP_ALCHEMY_KEY,
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
  },
}

module.exports = nextConfig
