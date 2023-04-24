/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://next.foto-dino.de',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  generateRobotsTxt: true,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
