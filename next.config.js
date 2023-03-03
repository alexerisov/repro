/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  compiler: {
    styledComponents: false,
    emotion: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: true,
  swcMinify: true,

  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

module.exports = nextConfig;
