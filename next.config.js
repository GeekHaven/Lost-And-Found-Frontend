/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"smf-file-storage.s3.ap-south-1.amazonaws.com",
			"localhost",
			"6572-27-57-97-116.in.ngrok.io",
		],
	},
};

module.exports = nextConfig;
