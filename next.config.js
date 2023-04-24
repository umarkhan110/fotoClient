/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "assets.foto-dino.de",
      "foto-dino-bucket.s3.amazonaws.com",
      "foto-dino.de",
      "cdn.pixabay.com",
      "dino-foto.de",
    ],
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

// const dynamicImport = import('next-sitemap')
// const sitemapConfig = await dynamicImport

// module.exports = withSitemap({
//   siteUrl: 'https://next.foto-dino.de', // Replace with your site URL
//   changefreq: 'daily', // Change frequency of the pages
//   priority: 0.7, // Priority of the pages
//   generateRobotsTxt: true, // Generate a robots.txt file
//   robotsTxtOptions: {
//     policies: [
//       {
//         userAgent: '*',
//         allow: '/',
//       },
//     ],
//   },
//   images: {
//     domains: [
//       'assets.foto-dino.de',
//       'foto-dino-bucket.s3.amazonaws.com',
//       'foto-dino.de',
//       'cdn.pixabay.com',
//     ],
//     unoptimized: true,
//   },
  
// })
