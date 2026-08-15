/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isOpenNextBuild = process.env.OPENNEXT_BUILD === "1";

const nextConfig = {
  output: isOpenNextBuild ? undefined : "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  poweredByHeader: false,
  reactStrictMode: true
};

export default nextConfig;
