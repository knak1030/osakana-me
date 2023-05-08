/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  }
}

module.exports = nextConfig, withBundleAnalyzer({})
