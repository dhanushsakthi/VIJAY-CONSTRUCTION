"use client";


interface DynamicBackgroundProps {
    variant?: "hero" | "section" | "overlay";
    className?: string;
}

export function DynamicBackground({
    variant = "hero",
    className = "",
}: DynamicBackgroundProps) {
    const overlays = {
        hero: "bg-white/20",
        section: "bg-white/40 backdrop-blur-sm",
        overlay: "bg-black/60",
    };

    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
        >
            <div className={`absolute inset-0 transition-colors duration-700 ${overlays[variant]}`} />

            {variant === "hero" && (
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/40 to-transparent" />
            )}
        </div>
    );
}
