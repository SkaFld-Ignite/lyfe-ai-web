import { ImageResponse } from "next/og"

export function GET(request: Request) {
  const url = new URL(request.url)
  const title =
    url.searchParams.get("title") || "Lyfe AI - Complete Patient Stories"

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)",
        }}
      >
        <div tw="flex flex-col items-center justify-center p-12">
          {/* Logo placeholder */}
          <div tw="flex items-center mb-8">
            <div tw="text-white text-6xl font-bold tracking-tight">
              Lyfe AI
            </div>
          </div>
          {/* Title */}
          <h1 tw="flex flex-col text-4xl font-bold tracking-tight text-center text-white max-w-4xl">
            {title}
          </h1>
          {/* Tagline */}
          <p tw="text-xl text-blue-100 mt-6 text-center max-w-3xl">
            AI-powered medical records aggregation for healthcare providers
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
