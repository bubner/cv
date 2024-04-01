/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
            {
                source: '/:path*',
                destination: '/',
            },
        ]
    },
    reactStrictMode: false
}

module.exports = nextConfig
