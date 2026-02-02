export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/watch"],
        disallow: [
          "/api/",
          "/auth/",
          "/dashboard/",
          "/checkout/",
          "/pricing/",
          "/about/",
        ],
      },
      {
        // Googlebot-Video specific rules for video indexing
        userAgent: "Googlebot-Video",
        allow: ["/", "/watch"],
      },
    ],
    sitemap: "https://lyfeco.ai/sitemap.xml",
  }
}
