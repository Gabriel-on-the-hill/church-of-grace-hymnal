/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://church-of-grace-hymnal.vercel.app',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    outDir: './public',
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
    // Generate all hymn pages
    additionalPaths: async (config) => {
        const result = [];
        // Add all 75 hymn pages
        for (let i = 1; i <= 75; i++) {
            result.push({
                loc: `/hymn/${i}`,
                changefreq: 'monthly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            });
        }
        // Add all category pages (assuming 8 categories)
        for (let i = 1; i <= 8; i++) {
            result.push({
                loc: `/category/${i}`,
                changefreq: 'monthly',
                priority: 0.7,
                lastmod: new Date().toISOString(),
            });
        }
        return result;
    },
};
