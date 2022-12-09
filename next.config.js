/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      "i.dummyjson.com",
      "img.youtube.com",
      "www.91-cdn.com",
      "www.cnet.com",
    ]
  },
}

module.exports = nextConfig
