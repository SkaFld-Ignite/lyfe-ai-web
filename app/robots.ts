import { getURL } from "@/lib/utils"

const baseUrl = getURL()

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
          "/pricing/",
          "/about/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/auth/", "/dashboard/", "/checkout/", "/pricing/", "/about/"],
      },
      {
        userAgent: "Googlebot-Video",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}sitemap.xml`,
  }
}
