/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    swcMinify:true,
    optimizeFonts:true,
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'abramov-shop-server-s9l0.onrender.com'
            },
        ],
        minimumCacheTTL:1500000
    }
};


module.exports = nextConfig

