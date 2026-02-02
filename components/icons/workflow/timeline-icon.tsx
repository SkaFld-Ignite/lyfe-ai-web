import { cn } from "@/lib/utils";

interface TimelineIconProps {
  className?: string;
}

/**
 * Timeline Icon - represents unified clinical timeline
 * Horizontal timeline with connected events showing organized data
 */
export function TimelineIcon({ className }: TimelineIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-16 h-16", className)}
      aria-hidden="true"
    >
      {/* Background circle with gradient */}
      <circle cx="32" cy="32" r="30" fill="url(#timeline-bg)" opacity="0.1" />

      {/* Main timeline line */}
      <line
        x1="8"
        y1="32"
        x2="56"
        y2="32"
        stroke="url(#timeline-line-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Timeline event 1 - leftmost */}
      <g>
        <circle cx="14" cy="32" r="5" fill="#2563eb" />
        <circle cx="14" cy="32" r="2" fill="white" />
        {/* Event card above */}
        <rect x="8" y="14" width="12" height="10" rx="2" fill="white" stroke="#2563eb" strokeWidth="1" />
        <line x1="10" y1="18" x2="18" y2="18" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <line x1="10" y1="21" x2="16" y2="21" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        {/* Connector line */}
        <line x1="14" y1="24" x2="14" y2="27" stroke="#2563eb" strokeWidth="1" />
      </g>

      {/* Timeline event 2 */}
      <g>
        <circle cx="28" cy="32" r="5" fill="#1d4ed8" />
        <circle cx="28" cy="32" r="2" fill="white" />
        {/* Event card below */}
        <rect x="22" y="40" width="12" height="10" rx="2" fill="white" stroke="#1d4ed8" strokeWidth="1" />
        <line x1="24" y1="44" x2="32" y2="44" stroke="#1d4ed8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <line x1="24" y1="47" x2="30" y2="47" stroke="#1d4ed8" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        {/* Connector line */}
        <line x1="28" y1="37" x2="28" y2="40" stroke="#1d4ed8" strokeWidth="1" />
      </g>

      {/* Timeline event 3 */}
      <g>
        <circle cx="42" cy="32" r="5" fill="#0ea5e9" />
        <circle cx="42" cy="32" r="2" fill="white" />
        {/* Event card above */}
        <rect x="36" y="14" width="12" height="10" rx="2" fill="white" stroke="#0ea5e9" strokeWidth="1" />
        <line x1="38" y1="18" x2="46" y2="18" stroke="#0ea5e9" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <line x1="38" y1="21" x2="44" y2="21" stroke="#0ea5e9" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        {/* Connector line */}
        <line x1="42" y1="24" x2="42" y2="27" stroke="#0ea5e9" strokeWidth="1" />
      </g>

      {/* Timeline event 4 - rightmost */}
      <g>
        <circle cx="54" cy="32" r="5" fill="#2563eb" />
        <circle cx="54" cy="32" r="2" fill="white" />
        {/* Event card below */}
        <rect x="48" y="40" width="12" height="10" rx="2" fill="white" stroke="#2563eb" strokeWidth="1" />
        <line x1="50" y1="44" x2="58" y2="44" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <line x1="50" y1="47" x2="56" y2="47" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        {/* Connector line */}
        <line x1="54" y1="37" x2="54" y2="40" stroke="#2563eb" strokeWidth="1" />
      </g>

      {/* Highlight glow around current event */}
      <circle cx="42" cy="32" r="8" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" />

      <defs>
        <linearGradient id="timeline-bg" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="timeline-line-gradient" x1="8" y1="32" x2="56" y2="32">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
