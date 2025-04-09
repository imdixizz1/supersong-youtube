// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['admin.compares360.com'], // ✅ add your image domain here
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
