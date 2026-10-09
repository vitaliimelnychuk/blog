/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/books',
        destination: '/recommendations',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
