"use client";


interface DynamicBackgroundProps {
    variant?: "hero" | "section" | "overlay";
    className?: string;
    showGrid?: boolean;
}

export function DynamicBackground({
    variant = "hero",
    className = "",
    showGrid = true,
}: DynamicBackgroundProps) {
    const overlays = {
        hero: "bg-black/50",
        section: "bg-black/20 backdrop-blur-[2px]", // Significantly reduced opacity and blur
        overlay: "bg-black/60",
    };

    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
        >
            {/* Base Overlay */}
            <div className={`absolute inset-0 transition-colors duration-700 ${overlays[variant]}`} />

            {/* Construction Grid Pattern */}
            {showGrid && (
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #37474F 1px, transparent 1px),
                            linear-gradient(to bottom, #37474F 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                    }}
                />
            )}

            {/* Subtle Dots Pattern */}
            {showGrid && (
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'radial-gradient(#C62828 0.5px, transparent 0.5px)',
                        backgroundSize: '20px 20px',
                    }}
                />
            )}

            {variant === "hero" && (
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
            )}

            {/* Corner Accents for a 'Blueprint' feel */}
            {variant === "hero" && (
                <>
                    <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-brand-red/20" />
                    <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-brand-red/20" />
                    <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-brand-red/20" />
                    <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-brand-red/20" />
                </>
            )}
        </div>
    );
}
