module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["admin.idiomary.com"],
  },
  
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
    ]
  },

}
