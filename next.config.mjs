/** @type {import('next').NextConfig} */
const nextConfig = {
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
