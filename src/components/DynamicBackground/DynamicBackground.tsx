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
        hero: "bg-black/20 backdrop-blur-[1px]",
        section: "bg-white/40 backdrop-blur-sm",
        overlay: "bg-black/40",
    };

    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
        >
            <div className={`absolute inset-0 transition-colors duration-700 ${overlays[variant]}`} />

            {variant === "hero" && (
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/20 to-transparent" />
            )}
        </div>
    );
}
