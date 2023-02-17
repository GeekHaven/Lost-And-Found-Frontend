/** @type {import('next').NextConfig} */
let dotenv = require("dotenv");
const withPWA = require("next-pwa");
dotenv.config();

const nextConfig = withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: false,
});

module.exports = nextConfig({
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
});
