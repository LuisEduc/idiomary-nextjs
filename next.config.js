module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["admin.idiomary.com"],
  },

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
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
