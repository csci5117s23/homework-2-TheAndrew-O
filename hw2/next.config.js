/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT_ID: "940765966329-38h5g0s8e79mbg0tf7vo42n46r8i7si1.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    GITHUB_CLIENT_ID: "a24e630a74d79bc4dd09",
    GITHUB_CLIENT_SECRET:"5a027e1384c0e2eaf61960a4f931806b54dca6e7",
    NEXTAUTH_URL: "https://ohwhattodo.netlify.app",
    JWT_SECRET: "XPayVI1gdHcH/31/cu5/ts0MjA/Ib77wB+ykNUauG3U="
  },
}

module.exports = nextConfig
