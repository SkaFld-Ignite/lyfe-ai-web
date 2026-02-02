export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
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
        userAgent: "Googlebot-Video",
        allow: "/",
      },
    ],
    sitemap: "https://lyfeco.ai/sitemap.xml",
  }
}
