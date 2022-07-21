/** @type {import('next').NextConfig} */
const serverAddress = 'http://localhost:8080';
const nextConfig = {
  reactStrictMode: true,
  async rewrites(){
    return [
      {
        source: '/rsu/:path*',
        destination: `${serverAddress}/rsu/:path*`
      },
      {
        source: '/intersection/:path*',
        destination: `${serverAddress}/intersection/:path*`
      }
    ]
  }
}

module.exports = nextConfig