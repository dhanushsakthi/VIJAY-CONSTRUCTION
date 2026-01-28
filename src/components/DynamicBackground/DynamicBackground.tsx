"use client";

import { useRef } from "react";

interface DynamicBackgroundProps {
    variant?: "hero" | "section" | "overlay";
    className?: string;
}

export function DynamicBackground({
    variant = "hero",
    className = "",
}: DynamicBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const heightClass =
        variant === "hero" ? "min-h-screen" : variant === "section" ? "h-full" : "";

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 overflow-hidden pointer-events-none ${heightClass} ${className}`}
        >
            {/* Fully transparent to allow BackgroundSlideshow to show through */}
            <div className="absolute inset-0 bg-transparent" />

            {/* Subtle Vignette overlay to keep text readable */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.15) 100%)",
                }}
            />
        </div>
    );
}
