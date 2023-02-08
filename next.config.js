/** @type {import('next').NextConfig} */
let dotenv = require("dotenv");
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:
      process.env.ENV === "PROD"
        ? ["lnf.iiita.ac.in"]
        : [
            "smf-file-storage.s3.ap-south-1.amazonaws.com",
            "localhost",
            "172.19.12.25",
            "172.19.14.254",
          ],
    unoptimized: true,
  },
  env: {
    API_URL: process.env["API"],
  },
};

module.exports = nextConfig;
