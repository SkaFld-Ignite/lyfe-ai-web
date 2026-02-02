import { getBlogPosts } from "@/lib/blog"

// Hidden pages - add back to activeRoutes to re-enable
// These pages are also blocked in middleware.ts and robots.ts
// const HIDDEN_PAGES = ["/pricing", "/about"]

// Active routes (excluding hidden pages)
const activeRoutes = ["/blog", "/terms", "/privacy"]

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
    <video:video>
      <video:thumbnail_loc>https://lyfeco.ai/images/brand/macbook-display.png</video:thumbnail_loc>
      <video:title>Lyfe AI Platform Demo - Complete Patient Stories</video:title>
      <video:description>See how Lyfe AI aggregates scattered medical records into one searchable clinical timeline. Watch how providers can access complete patient histories before appointments.</video:description>
      <video:content_loc>https://bzbtfrlvgxhkrxlwwhu.supabase.co/storage/v1/object/public/demo-video/Lyfe%20AI%20Demo%20Video.mov</video:content_loc>
      <video:publication_date>2026-02-01</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
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
