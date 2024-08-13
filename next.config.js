// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // images: {
//   //   domains: ["cdn.tuk.dev", "tuk-cdn.s3.amazonaws.com"],
//   // },
//   images: { unoptimized: true },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set the output mode to 'export' for static site generation
  // and specify the distribution directory as 'dist'
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
  reactStrictMode: false,
  trailingSlash: true,
};

module.exports = nextConfig;
