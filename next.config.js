/** @type {import('next').NextConfig} */

const withVideos = require('next-videos')

const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = withVideos(nextConfig)
