/** @type {import('next').NextConfig} */
import "./config/env.mjs"
import "@ssp/utils/src/env/env.mjs"

const nextConfig = {
  transpilePackages: ["@ssp/api", "@ssp/auth", "@ssp/db", "@ssp/emails", "@ssp/ui", "@ssp/utils"],
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ipfs.io",
        port: "",
        pathname: "/ipfs/**"
      },
      {
        protocol: "https",
        hostname: "www.gamerpower.com",
        port: "",
        pathname: "/offers/**"
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**"
      },
      {
        protocol: "http",
        hostname: "localhost:3000",
        port: "",
        pathname: "/a/**"
      }
    ]
  }
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },]
}

export default nextConfig
