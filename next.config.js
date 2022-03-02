module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/blog/post/:slug': { page: '/blog/post/[slug]' },
      '/portfolio': { page: '/portfolio'},
    }
  },
  images: {
    domains: ["media.graphcms.com"],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en-US"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en-US",
  },
};
