import { getBlogPosts } from "@/lib/blog"

// Hidden pages - add back to activeRoutes to re-enable
// These pages are also blocked in middleware.ts and robots.ts
// const HIDDEN_PAGES = ["/pricing", "/about"]

// Active routes (excluding hidden pages)
const activeRoutes = ["/patients", "/blog", "/terms", "/privacy"]

// Video configuration for sitemap
const VIDEO_CONFIG = {
  title: "Lyfe AI Platform Demo - Complete Patient Stories",
  description:
    "See how Lyfe AI aggregates scattered medical records into one searchable clinical timeline. Watch how providers can access complete patient histories before appointments, eliminate duplicate tests, and make better-informed clinical decisions.",
  contentUrl:
    "https://bzbtfrlvgxhkrxlwwhu.supabase.co/storage/v1/object/public/demo-video/Lyfe%20AI%20Demo%20Video.mov",
  thumbnailUrl: "https://lyfeco.ai/images/brand/macbook-display.png",
  publicationDate: "2026-02-01T00:00:00Z",
  duration: 210, // seconds
}

export async function GET() {
  const today = new Date().toISOString().split("T")[0]
  const blogs = getBlogPosts()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://lyfeco.ai/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://lyfeco.ai/watch</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <video:video>
      <video:thumbnail_loc>${VIDEO_CONFIG.thumbnailUrl}</video:thumbnail_loc>
      <video:title>${VIDEO_CONFIG.title}</video:title>
      <video:description>${VIDEO_CONFIG.description}</video:description>
      <video:content_loc>${VIDEO_CONFIG.contentUrl}</video:content_loc>
      <video:player_loc>https://lyfeco.ai/watch</video:player_loc>
      <video:duration>${VIDEO_CONFIG.duration}</video:duration>
      <video:publication_date>${VIDEO_CONFIG.publicationDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
      <video:requires_subscription>no</video:requires_subscription>
    </video:video>
  </url>
${activeRoutes
  .map(
    (route) => `  <url>
    <loc>https://lyfeco.ai${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("\n")}
${blogs
  .map(
    (post) => `  <url>
    <loc>https://lyfeco.ai/blog/${post.slug}</loc>
    <lastmod>${post.metadata.publishedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join("\n")}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
