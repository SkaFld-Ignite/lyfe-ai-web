import { getURL } from "@/lib/utils"

const baseUrl = getURL()
const DEMO_VIDEO_URL = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || ""

export async function GET() {
  // Only include video if URL is configured
  const hasVideo = DEMO_VIDEO_URL && DEMO_VIDEO_URL.length > 0

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${hasVideo ? `  <url>
    <loc>${baseUrl}</loc>
    <video:video>
      <video:thumbnail_loc>${baseUrl}images/brand/macbook-display.png</video:thumbnail_loc>
      <video:title>Lyfe AI Platform Demo - Complete Patient Stories</video:title>
      <video:description>See how Lyfe AI aggregates scattered medical records into one searchable clinical timeline. Watch how providers can access complete patient histories before appointments.</video:description>
      <video:content_loc>${DEMO_VIDEO_URL}</video:content_loc>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>
  </url>` : `  <!-- No video URL configured. Set NEXT_PUBLIC_DEMO_VIDEO_URL to enable. -->`}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
