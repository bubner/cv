/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
            {
                source: "/:path*",
                destination: "/",
            },
        ];
    },
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "wakatime.com",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
