import { cn } from "@/lib/utils";

interface FragmentedRecordsIconProps {
  className?: string;
}

/**
 * Fragmented Records Icon - represents scattered medical documents
 * Uses healthcare-appropriate blues and greens with scattered document visuals
 */
export function FragmentedRecordsIcon({ className }: FragmentedRecordsIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-16 h-16", className)}
      aria-hidden="true"
    >
      {/* Background circle */}
      <circle cx="32" cy="32" r="30" fill="url(#fragmented-bg)" opacity="0.1" />

      {/* Scattered document 1 - top left, tilted */}
      <g transform="translate(8, 10) rotate(-15, 10, 12)">
        <rect
          x="0"
          y="0"
          width="16"
          height="20"
          rx="2"
          fill="url(#doc-gradient-1)"
          stroke="#2563eb"
          strokeWidth="1.5"
        />
        <line x1="3" y1="5" x2="13" y2="5" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" />
        <line x1="3" y1="9" x2="10" y2="9" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <line x1="3" y1="13" x2="11" y2="13" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </g>

      {/* Scattered document 2 - top right, tilted opposite */}
      <g transform="translate(38, 8) rotate(12, 10, 12)">
        <rect
          x="0"
          y="0"
          width="16"
          height="20"
          rx="2"
          fill="url(#doc-gradient-2)"
          stroke="#0ea5e9"
          strokeWidth="1.5"
        />
        <line x1="3" y1="5" x2="13" y2="5" stroke="#0ea5e9" strokeWidth="1" strokeLinecap="round" />
        <line x1="3" y1="9" x2="8" y2="9" stroke="#0ea5e9" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <line x1="3" y1="13" x2="12" y2="13" stroke="#0ea5e9" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </g>

      {/* Scattered document 3 - bottom center, slight tilt */}
      <g transform="translate(22, 36) rotate(5, 10, 12)">
        <rect
          x="0"
          y="0"
          width="16"
          height="20"
          rx="2"
          fill="url(#doc-gradient-3)"
          stroke="#1d4ed8"
          strokeWidth="1.5"
        />
        <line x1="3" y1="5" x2="13" y2="5" stroke="#1d4ed8" strokeWidth="1" strokeLinecap="round" />
        <line x1="3" y1="9" x2="11" y2="9" stroke="#1d4ed8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <line x1="3" y1="13" x2="9" y2="13" stroke="#1d4ed8" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </g>

      {/* Connecting dots suggesting disconnection */}
      <circle cx="32" cy="30" r="1.5" fill="#2563eb" opacity="0.5" />
      <circle cx="28" cy="26" r="1" fill="#0ea5e9" opacity="0.4" />
      <circle cx="36" cy="34" r="1" fill="#1d4ed8" opacity="0.4" />

      <defs>
        <linearGradient id="fragmented-bg" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="doc-gradient-1" x1="0" y1="0" x2="16" y2="20">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#ecfdf5" />
        </linearGradient>
        <linearGradient id="doc-gradient-2" x1="0" y1="0" x2="16" y2="20">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#f0f9ff" />
        </linearGradient>
        <linearGradient id="doc-gradient-3" x1="0" y1="0" x2="16" y2="20">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#ecfdf5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
