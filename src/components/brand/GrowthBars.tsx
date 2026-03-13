"use client";

import { cn } from "@/lib/utils";

interface GrowthBarsProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  className?: string;
}

const sizes = {
  sm: { width: 6, gap: 3, heights: [12, 18, 24, 30], rx: 1 },
  md: { width: 10, gap: 5, heights: [20, 30, 44, 56], rx: 2 },
  lg: { width: 14, gap: 7, heights: [28, 44, 60, 76], rx: 2 },
  xl: { width: 20, gap: 10, heights: [40, 60, 84, 108], rx: 3 },
};

export function GrowthBars({ size = "md", animated = false, className }: GrowthBarsProps) {
  const cfg = sizes[size];
  const totalWidth = cfg.width * 4 + cfg.gap * 3;
  const totalHeight = cfg.heights[3] + 4;

  const bars = [
    { height: cfg.heights[0], color: "url(#b1)", delay: "0ms" },
    { height: cfg.heights[1], color: "url(#b2)", delay: "100ms" },
    { height: cfg.heights[2], color: "url(#b3)", delay: "200ms" },
    { height: cfg.heights[3], color: "url(#b4)", delay: "300ms" },
  ];

  return (
    <svg
      width={totalWidth}
      height={totalHeight}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      className={cn(className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="b1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="b2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <linearGradient id="b3" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
        <linearGradient id="b4" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>
      </defs>
      {bars.map((bar, i) => (
        <rect
          key={i}
          x={i * (cfg.width + cfg.gap)}
          y={totalHeight - bar.height}
          width={cfg.width}
          height={bar.height}
          rx={cfg.rx}
          fill={bar.color}
          className={animated ? "bar-animate" : ""}
          style={animated ? { animationDelay: bar.delay } : undefined}
        />
      ))}
    </svg>
  );
}
