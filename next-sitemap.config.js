/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || "https://your-domain.com",
	generateRobotsTxt: true, // generates robots.txt
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				disallow: "/",
			},
		],
	},
	exclude: ["/server-sitemap.xml"], // exclude any dynamic routes
	generateIndexSitemap: false,
}
