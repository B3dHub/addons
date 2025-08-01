/** @type {import('next').NextConfig} */

const repo = 'addons';
const nextConfig = {
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};

export default nextConfig;
