/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['hklneaqitsbgwwyiuhkw.supabase.co'],
    }
}

module.exports = nextConfig
