"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface DynamicBackgroundProps {
    variant?: "hero" | "section" | "overlay";
    className?: string;
}

const backgrounds = [
    {
        id: 1,
        gradient: "linear-gradient(135deg, rgba(253, 252, 245, 0.7) 0%, rgba(245, 245, 240, 0.4) 50%, rgba(253, 252, 245, 0.7) 100%)",
        pattern: "blueprint",
    },
    {
        id: 2,
        gradient: "linear-gradient(135deg, rgba(245, 247, 248, 0.7) 0%, rgba(232, 230, 217, 0.4) 50%, rgba(245, 247, 248, 0.7) 100%)",
        pattern: "construction",
    },
    {
        id: 3,
        gradient: "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(240, 242, 245, 0.4) 50%, rgba(255, 255, 255, 0.7) 100%)",
        pattern: "steel",
    },
    {
        id: 4,
        gradient: "linear-gradient(135deg, rgba(248, 249, 250, 0.7) 0%, rgba(233, 236, 239, 0.4) 50%, rgba(248, 249, 250, 0.7) 100%)",
        pattern: "grid",
    },
];

export function DynamicBackground({
    variant = "hero",
    className = "",
}: DynamicBackgroundProps) {
    const [currentBg, setCurrentBg] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Change background every 5 seconds
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Smooth crossfade animation
        bgRefs.current.forEach((ref, index) => {
            if (ref) {
                gsap.to(ref, {
                    opacity: index === currentBg ? 1 : 0,
                    duration: 1.5,
                    ease: "power2.inOut",
                });
            }
        });
    }, [currentBg]);

    const getPatternStyle = (pattern: string) => {
        switch (pattern) {
            case "blueprint":
                return {
                    backgroundImage: `
            linear-gradient(to right, rgba(46, 125, 50, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(46, 125, 50, 0.08) 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px",
                };
            case "construction":
                return {
                    backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(198, 40, 40, 0.03) 10px,
              rgba(198, 40, 40, 0.03) 20px
            )
          `,
                };
            case "steel":
                return {
                    backgroundImage: `
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)
          `,
                    backgroundSize: "20px 20px",
                };
            case "grid":
                return {
                    backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(46, 125, 50, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(198, 40, 40, 0.05) 0%, transparent 50%)
          `,
                };
            default:
                return {};
        }
    };

    const heightClass =
        variant === "hero" ? "min-h-screen" : variant === "section" ? "h-full" : "";

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 overflow-hidden ${heightClass} ${className}`}
        >
            {backgrounds.map((bg, index) => (
                <div
                    key={bg.id}
                    ref={(el) => { bgRefs.current[index] = el; }}
                    className="absolute inset-0 transition-opacity"
                    style={{
                        opacity: index === 0 ? 1 : 0,
                        background: bg.gradient,
                    }}
                >
                    {/* Pattern overlay */}
                    <div className="absolute inset-0" style={getPatternStyle(bg.pattern)} />
                </div>
            ))}

            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full opacity-30"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(198, 40, 40, 0.2) 0%, transparent 70%)",
                        animation: "float 20s ease-in-out infinite",
                    }}
                />
                <div
                    className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full opacity-30"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(46, 125, 50, 0.2) 0%, transparent 70%)",
                        animation: "float 25s ease-in-out infinite reverse",
                    }}
                />
            </div>

            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Vignette overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 100%)",
                }}
            />

            <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.95);
          }
          75% {
            transform: translate(20px, 30px) scale(1.05);
          }
        }
      `}</style>
        </div>
    );
}
