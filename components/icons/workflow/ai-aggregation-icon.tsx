import { cn } from "@/lib/utils";

interface AiAggregationIconProps {
  className?: string;
}

/**
 * AI Aggregation Icon - represents AI/brain processing visual
 * Central brain/neural node with connecting lines pulling data inward
 */
export function AiAggregationIcon({ className }: AiAggregationIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-16 h-16", className)}
      aria-hidden="true"
    >
      {/* Background circle with gradient */}
      <circle cx="32" cy="32" r="30" fill="url(#ai-bg)" opacity="0.1" />

      {/* Central brain/processing node */}
      <circle
        cx="32"
        cy="32"
        r="12"
        fill="url(#brain-gradient)"
        stroke="#10b981"
        strokeWidth="2"
      />

      {/* Neural network inner pattern */}
      <circle cx="32" cy="32" r="6" fill="none" stroke="#059669" strokeWidth="1" opacity="0.6" />
      <circle cx="32" cy="32" r="3" fill="#10b981" />

      {/* Incoming data nodes - outer ring */}
      {/* Top node */}
      <circle cx="32" cy="10" r="4" fill="#0ea5e9" opacity="0.8" />
      <line x1="32" y1="14" x2="32" y2="20" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Top right node */}
      <circle cx="50" cy="17" r="4" fill="#10b981" opacity="0.8" />
      <line x1="47" y1="20" x2="41" y2="25" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Right node */}
      <circle cx="54" cy="32" r="4" fill="#059669" opacity="0.8" />
      <line x1="50" y1="32" x2="44" y2="32" stroke="#059669" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Bottom right node */}
      <circle cx="50" cy="47" r="4" fill="#0ea5e9" opacity="0.8" />
      <line x1="47" y1="44" x2="41" y2="39" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Bottom node */}
      <circle cx="32" cy="54" r="4" fill="#10b981" opacity="0.8" />
      <line x1="32" y1="50" x2="32" y2="44" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Bottom left node */}
      <circle cx="14" cy="47" r="4" fill="#059669" opacity="0.8" />
      <line x1="17" y1="44" x2="23" y2="39" stroke="#059669" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Left node */}
      <circle cx="10" cy="32" r="4" fill="#0ea5e9" opacity="0.8" />
      <line x1="14" y1="32" x2="20" y2="32" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Top left node */}
      <circle cx="14" cy="17" r="4" fill="#10b981" opacity="0.8" />
      <line x1="17" y1="20" x2="23" y2="25" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Pulsing ring effect */}
      <circle
        cx="32"
        cy="32"
        r="16"
        fill="none"
        stroke="#10b981"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="4 4"
      />

      <defs>
        <linearGradient id="ai-bg" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <radialGradient id="brain-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </radialGradient>
      </defs>
    </svg>
  );
}
