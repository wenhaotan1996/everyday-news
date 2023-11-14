/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/category/trending",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "3.bp.blogspot.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
  basePath: "/news",
};

module.exports = nextConfig;
