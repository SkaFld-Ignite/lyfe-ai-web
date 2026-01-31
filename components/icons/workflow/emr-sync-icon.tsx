import { cn } from "@/lib/utils";

interface EmrSyncIconProps {
  className?: string;
}

/**
 * EMR Sync Icon - represents bidirectional sync with EMR systems
 * Two database/EMR icons with bidirectional arrows between them
 */
export function EmrSyncIcon({ className }: EmrSyncIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-16 h-16", className)}
      aria-hidden="true"
    >
      {/* Background circle with gradient */}
      <circle cx="32" cy="32" r="30" fill="url(#sync-bg)" opacity="0.1" />

      {/* Left EMR/Database icon - Lyfe AI */}
      <g transform="translate(6, 18)">
        {/* Database cylinder */}
        <ellipse cx="12" cy="4" rx="10" ry="4" fill="url(#lyfe-gradient)" stroke="#10b981" strokeWidth="1.5" />
        <path
          d="M2 4 L2 24 A10 4 0 0 0 22 24 L22 4"
          fill="url(#lyfe-gradient)"
          stroke="#10b981"
          strokeWidth="1.5"
        />
        <ellipse cx="12" cy="24" rx="10" ry="4" fill="none" stroke="#10b981" strokeWidth="1.5" />
        {/* Middle divider lines */}
        <ellipse cx="12" cy="11" rx="10" ry="3" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.5" />
        <ellipse cx="12" cy="17" rx="10" ry="3" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.5" />
        {/* Lyfe AI label */}
        <text x="12" y="28" fontSize="4" fill="#10b981" textAnchor="middle" fontWeight="bold">LYFE</text>
      </g>

      {/* Right EMR/Database icon - EMR System */}
      <g transform="translate(36, 18)">
        {/* Database cylinder */}
        <ellipse cx="12" cy="4" rx="10" ry="4" fill="url(#emr-gradient)" stroke="#0ea5e9" strokeWidth="1.5" />
        <path
          d="M2 4 L2 24 A10 4 0 0 0 22 24 L22 4"
          fill="url(#emr-gradient)"
          stroke="#0ea5e9"
          strokeWidth="1.5"
        />
        <ellipse cx="12" cy="24" rx="10" ry="4" fill="none" stroke="#0ea5e9" strokeWidth="1.5" />
        {/* Middle divider lines */}
        <ellipse cx="12" cy="11" rx="10" ry="3" fill="none" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.5" />
        <ellipse cx="12" cy="17" rx="10" ry="3" fill="none" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.5" />
        {/* EMR label */}
        <text x="12" y="28" fontSize="4" fill="#0ea5e9" textAnchor="middle" fontWeight="bold">EMR</text>
      </g>

      {/* Bidirectional sync arrows */}
      {/* Top arrow - right to left (data coming in) */}
      <g>
        <line x1="36" y1="28" x2="28" y2="28" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
        <polyline points="30,25 27,28 30,31" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Bottom arrow - left to right (data going out) */}
      <g>
        <line x1="28" y1="36" x2="36" y2="36" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <polyline points="34,33 37,36 34,39" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Sync indicator dots */}
      <circle cx="32" cy="28" r="1.5" fill="#059669" />
      <circle cx="32" cy="36" r="1.5" fill="#10b981" />

      {/* Circular arrow suggesting continuous sync */}
      <path
        d="M32 22 A6 6 0 0 1 38 28"
        fill="none"
        stroke="#059669"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M32 42 A6 6 0 0 1 26 36"
        fill="none"
        stroke="#10b981"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />

      <defs>
        <linearGradient id="sync-bg" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="lyfe-gradient" x1="0" y1="0" x2="0" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#d1fae5" />
          <stop offset="100%" stopColor="#a7f3d0" />
        </linearGradient>
        <linearGradient id="emr-gradient" x1="0" y1="0" x2="0" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>
      </defs>
    </svg>
  );
}
