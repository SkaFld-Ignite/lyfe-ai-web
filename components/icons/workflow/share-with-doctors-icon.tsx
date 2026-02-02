"use client"

import * as React from "react"

interface ShareWithDoctorsIconProps {
  className?: string
}

export function ShareWithDoctorsIcon({ className }: ShareWithDoctorsIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "w-16 h-16"}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="shareGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="personGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      {/* Central document/record */}
      <rect
        x="22"
        y="20"
        width="20"
        height="24"
        rx="2"
        fill="url(#shareGradient)"
        opacity="0.9"
      />
      <rect x="26" y="26" width="12" height="2" rx="1" fill="white" />
      <rect x="26" y="31" width="10" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="26" y="36" width="8" height="2" rx="1" fill="white" opacity="0.5" />

      {/* Share arrows going outward */}
      <g stroke="url(#shareGradient)" strokeWidth="2" fill="none" strokeLinecap="round">
        {/* Arrow to left (doctor 1) */}
        <path d="M22 32 L12 32" />
        <polyline points="16,28 12,32 16,36" />

        {/* Arrow to right (doctor 2) */}
        <path d="M42 32 L52 32" />
        <polyline points="48,28 52,32 48,36" />
      </g>

      {/* Doctor 1 (left) - stethoscope person */}
      <g fill="url(#personGradient)">
        <circle cx="8" cy="50" r="6" opacity="0.2" />
        <circle cx="8" cy="48" r="4" />
        <path
          d="M2 58 C2 54 5 52 8 52 C11 52 14 54 14 58"
          fill="url(#personGradient)"
        />
        {/* Stethoscope hint */}
        <circle cx="10" cy="45" r="1.5" stroke="url(#personGradient)" strokeWidth="1" fill="none" />
      </g>

      {/* Doctor 2 (right) - stethoscope person */}
      <g fill="url(#personGradient)">
        <circle cx="56" cy="50" r="6" opacity="0.2" />
        <circle cx="56" cy="48" r="4" />
        <path
          d="M50 58 C50 54 53 52 56 52 C59 52 62 54 62 58"
          fill="url(#personGradient)"
        />
        {/* Stethoscope hint */}
        <circle cx="54" cy="45" r="1.5" stroke="url(#personGradient)" strokeWidth="1" fill="none" />
      </g>

      {/* Checkmark indicating success */}
      <circle cx="32" cy="52" r="6" fill="#2563eb" opacity="0.2" />
      <path
        d="M29 52 L31 54 L35 50"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
