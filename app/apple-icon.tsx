import { ImageResponse } from "next/og"

export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          borderRadius: "22%",
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              id="shadow"
              x="0"
              y="0"
              width="47"
              height="47"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.145 0 0 0 0 0.388 0 0 0 0 0.922 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
          <g filter="url(#shadow)">
            <path
              d="M42.3122 16.818H31.7847C29.4592 16.818 27.5738 14.9327 27.5738 12.6071V2.07959H19.1519V12.6071C19.1519 14.554 19.5923 16.3981 20.379 18.0451C18.732 17.2584 16.8878 16.818 14.9409 16.818H4.41345V25.2399H14.9409C17.2665 25.2399 19.1519 27.1253 19.1519 29.4509V39.9784H27.5738V29.4509C27.5738 27.504 27.1334 25.6598 26.3467 24.0128C27.9937 24.7995 29.8378 25.2399 31.7847 25.2399H42.3122V16.818Z"
              fill="#2563EB"
            />
          </g>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
