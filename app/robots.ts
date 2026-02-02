import { baseUrl } from "@/app/sitemap"

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
          "/_next/",
          "/checkout/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/auth/", "/dashboard/", "/checkout/"],
      },
      {
        userAgent: "Googlebot-Video",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}sitemap.xml`,
  }
}
