/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    swcMinify:true,
    optimizeFonts:true,
    images:{
        domains: ['abramov-shop-server.onrender.com'],
        minimumCacheTTL:1500000
    }
};


module.exports = nextConfig

