/** @type {import('next').NextConfig} */

const repo = "addons";
const nextConfig = {
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  // Static export for GitHub Pages (https://nextjs.org/docs/app/building-your-application/deploying#github-pages)
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};

export default nextConfig;
