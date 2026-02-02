import { getBlogPosts } from "@/lib/blog"
import { getURL } from "@/lib/utils"

export const baseUrl = getURL()

// Hidden pages - uncomment to re-enable in sitemap
// These pages are also blocked in middleware.ts and robots.ts
const HIDDEN_PAGES = ["/pricing", "/about"]

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  // Active routes (excluding hidden pages)
  const allRoutes = ["", "/blog", "/terms", "/privacy"]
  // To re-enable hidden pages, add them here: [...allRoutes, ...HIDDEN_PAGES]

  const routes = allRoutes.map(
    (route) => ({
      url: `${baseUrl}${route}`.replace(/\/+/g, "/").replace(":/", "://"),
      lastModified: new Date().toISOString().split("T")[0],
    })
  )

  return [...routes, ...blogs]
}
