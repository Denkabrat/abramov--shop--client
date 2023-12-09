/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    swcMinify:true,
    optimizeFonts:true,
    images:{
        domains: ['abramov-shopserver-production.up.railway.app'],
        minimumCacheTTL:1500000
    }
};


module.exports = nextConfig

