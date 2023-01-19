/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"smf-file-storage.s3.ap-south-1.amazonaws.com",
			"localhost",
			"172.19.12.25",
		],
	},
};

module.exports = nextConfig;
