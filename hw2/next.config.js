/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT_ID: "940765966329-38h5g0s8e79mbg0tf7vo42n46r8i7si1.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    NEXTAUTH_URL: "http://localhost:3000",
    JWT_SECRET: "XPayVI1gdHcH/31/cu5/ts0MjA/Ib77wB+ykNUauG3U="
  },
}

module.exports = nextConfig
