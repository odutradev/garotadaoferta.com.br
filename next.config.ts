import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    if (config.module?.rules) {
      config.module.rules.push({ test: /\.svg$/i, type: 'asset/resource' })
    }
    return config
  },
}

export default nextConfig
