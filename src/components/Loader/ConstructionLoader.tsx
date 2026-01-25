"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export function ConstructionLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const loaderRef = useRef<HTMLDivElement>(null);
    const blueprintRef = useRef<SVGSVGElement>(null);
    const beamsRef = useRef<HTMLDivElement>(null);
    const foundationRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        // Main animation timeline
        const tl = gsap.timeline({
            onComplete: () => {
                // Fade out loader
                gsap.to(loaderRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.inOut",
                    onComplete: () => setIsLoading(false),
                });
            },
        });

        // Blueprint lines drawing animation
        if (blueprintRef.current) {
            const paths = blueprintRef.current.querySelectorAll(".blueprint-path");
            paths.forEach((path) => {
                const length = (path as SVGPathElement).getTotalLength();
                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length,
                });
            });

            tl.to(
                blueprintRef.current.querySelectorAll(".blueprint-path"),
                {
                    strokeDashoffset: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out",
                },
                0
            );
        }

        // Steel beams sliding in
        if (beamsRef.current) {
            const beams = beamsRef.current.querySelectorAll(".steel-beam-loader");
            tl.fromTo(
                beams,
                { scaleX: 0, transformOrigin: "left center" },
                {
                    scaleX: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power3.out",
                },
                0.3
            );
        }

        // Foundation rising
        if (foundationRef.current) {
            tl.fromTo(
                foundationRef.current,
                { scaleY: 0, transformOrigin: "bottom center" },
                {
                    scaleY: 1,
                    duration: 0.8,
                    ease: "power2.out",
                },
                0.6
            );
        }

        // Text reveal
        if (textRef.current) {
            tl.fromTo(
                textRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                },
                0.8
            );
        }

        // Hold for a moment then complete
        tl.to({}, { duration: 0.3 });

        return () => {
            clearInterval(progressInterval);
            tl.kill();
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-asphalt-dark"
            aria-label="Loading"
            role="progressbar"
            aria-valuenow={Math.min(progress, 100)}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(46, 125, 50, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(46, 125, 50, 0.3) 1px, transparent 1px)
            `,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            {/* Main Construction Animation */}
            <div className="relative flex h-[250px] w-[300px] items-center justify-center">
                {/* Blueprint SVG - Modern House from Visiting Card */}
                <svg
                    ref={blueprintRef}
                    viewBox="0 0 240 220"
                    className="absolute h-full w-full"
                    style={{ filter: "drop-shadow(0 0 10px rgba(46, 125, 50, 0.3))" }}
                >
                    {/* Decorative Tree on left */}
                    <path
                        className="blueprint-path"
                        d="M35 200 L35 150"
                        stroke="#2E7D32"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />
                    {/* Tree branches */}
                    <circle className="blueprint-path" cx="35" cy="140" r="8" stroke="#2E7D32" strokeWidth="1.5" fill="none" />
                    <circle className="blueprint-path" cx="28" cy="130" r="6" stroke="#2E7D32" strokeWidth="1.5" fill="none" />
                    <circle className="blueprint-path" cx="42" cy="128" r="7" stroke="#2E7D32" strokeWidth="1.5" fill="none" />
                    <circle className="blueprint-path" cx="35" cy="120" r="6" stroke="#2E7D32" strokeWidth="1.5" fill="none" />
                    <circle className="blueprint-path" cx="30" cy="115" r="4" stroke="#2E7D32" strokeWidth="1.5" fill="none" />
                    <circle className="blueprint-path" cx="40" cy="112" r="5" stroke="#2E7D32" strokeWidth="1.5" fill="none" />

                    {/* Main Building Structure */}
                    {/* Left wall */}
                    <path
                        className="blueprint-path"
                        d="M60 200 L60 90"
                        stroke="#2E7D32"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />
                    {/* Right wall */}
                    <path
                        className="blueprint-path"
                        d="M180 200 L180 70"
                        stroke="#2E7D32"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />

                    {/* Slanted Roof */}
                    <path
                        className="blueprint-path"
                        d="M55 90 L180 45"
                        stroke="#2E7D32"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                    />
                    <path
                        className="blueprint-path"
                        d="M180 45 L190 48"
                        stroke="#2E7D32"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />

                    {/* Top floor - Glass windows */}
                    <rect
                        className="blueprint-path"
                        x="65"
                        y="95"
                        width="50"
                        height="30"
                        stroke="#2E7D32"
                        strokeWidth="1.5"
                        fill="none"
                    />
                    {/* Window divisions */}
                    <line className="blueprint-path" x1="78" y1="95" x2="78" y2="125" stroke="#2E7D32" strokeWidth="1" />
                    <line className="blueprint-path" x1="90" y1="95" x2="90" y2="125" stroke="#2E7D32" strokeWidth="1" />
                    <line className="blueprint-path" x1="102" y1="95" x2="102" y2="125" stroke="#2E7D32" strokeWidth="1" />

                    {/* Top floor right section */}
                    <rect
                        className="blueprint-path"
                        x="120"
                        y="75"
                        width="55"
                        height="25"
                        stroke="#2E7D32"
                        strokeWidth="1.5"
                        fill="none"
                    />
                    <line className="blueprint-path" x1="140" y1="75" x2="140" y2="100" stroke="#2E7D32" strokeWidth="1" />
                    <line className="blueprint-path" x1="155" y1="75" x2="155" y2="100" stroke="#2E7D32" strokeWidth="1" />

                    {/* Floor separator 1 */}
                    <line
                        className="blueprint-path"
                        x1="60"
                        y1="130"
                        x2="180"
                        y2="130"
                        stroke="#2E7D32"
                        strokeWidth="1.5"
                    />

                    {/* Middle floor - Balcony with railings */}
                    <rect
                        className="blueprint-path"
                        x="65"
                        y="135"
                        width="110"
                        height="30"
                        stroke="#2E7D32"
                        strokeWidth="1.5"
                        fill="none"
                    />
                    {/* Balcony railing vertical bars */}
                    <line className="blueprint-path" x1="75" y1="165" x2="75" y2="175" stroke="#2E7D32" strokeWidth="1" />
                    <line className="blueprint-path" x1="85" y1="165" x2="85" y2="175" stroke="#2E7D32" strokeWidth="1" />
                    <line className="blueprint-path" x1="95" y1="165" x2="95" y2="175" stroke="#2E7D32" strokeWidth="1" />
                    <line className="blueprint-path" x1="105" y1="165" x2="105" y2="175" stroke="#2E7D32" strokeWidth="1" />
                    <line className="blueprint-path" x1="115" y1="165" x2="115" y2="175" stroke="#2E7D32" strokeWidth="1" />
                    <line className="blueprint-path" x1="125" y1="165" x2="125" y2="175" stroke="#2E7D32" strokeWidth="1" />
                    <line className="blueprint-path" x1="135" y1="165" x2="135" y2="175" stroke="#2E7D32" strokeWidth="1" />
                    <line className="blueprint-path" x1="145" y1="165" x2="145" y2="175" stroke="#2E7D32" strokeWidth="1" />
                    <line className="blueprint-path" x1="155" y1="165" x2="155" y2="175" stroke="#2E7D32" strokeWidth="1" />
                    <line className="blueprint-path" x1="165" y1="165" x2="165" y2="175" stroke="#2E7D32" strokeWidth="1" />
                    {/* Balcony railing horizontal */}
                    <line className="blueprint-path" x1="70" y1="175" x2="170" y2="175" stroke="#2E7D32" strokeWidth="1.5" />

                    {/* Ground floor - Garage door */}
                    <rect
                        className="blueprint-path"
                        x="65"
                        y="180"
                        width="110"
                        height="20"
                        stroke="#2E7D32"
                        strokeWidth="1.5"
                        fill="none"
                    />
                    {/* Garage door horizontal lines */}
                    <line className="blueprint-path" x1="65" y1="185" x2="175" y2="185" stroke="#2E7D32" strokeWidth="0.8" />
                    <line className="blueprint-path" x1="65" y1="190" x2="175" y2="190" stroke="#2E7D32" strokeWidth="0.8" />
                    <line className="blueprint-path" x1="65" y1="195" x2="175" y2="195" stroke="#2E7D32" strokeWidth="0.8" />

                    {/* Ground line */}
                    <line
                        className="blueprint-path"
                        x1="25"
                        y1="200"
                        x2="200"
                        y2="200"
                        stroke="#2E7D32"
                        strokeWidth="2"
                    />
                </svg>

                {/* Steel Beams */}
                <div
                    ref={beamsRef}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                >
                    <div
                        className="steel-beam-loader absolute left-[15%] top-[40%] h-2 w-[70%] rounded-sm"
                        style={{
                            background:
                                "linear-gradient(90deg, #C62828 0%, #EF5350 50%, #C62828 100%)",
                            boxShadow: "0 2px 10px rgba(198, 40, 40, 0.4)",
                        }}
                    />
                    <div
                        className="steel-beam-loader absolute left-[20%] top-[55%] h-2 w-[60%] rounded-sm"
                        style={{
                            background:
                                "linear-gradient(90deg, #C62828 0%, #EF5350 50%, #C62828 100%)",
                            boxShadow: "0 2px 10px rgba(198, 40, 40, 0.4)",
                        }}
                    />
                    <div
                        className="steel-beam-loader absolute left-[25%] top-[70%] h-2 w-[50%] rounded-sm"
                        style={{
                            background:
                                "linear-gradient(90deg, #C62828 0%, #EF5350 50%, #C62828 100%)",
                            boxShadow: "0 2px 10px rgba(198, 40, 40, 0.4)",
                        }}
                    />
                </div>

                {/* Foundation Slab */}
                <div
                    ref={foundationRef}
                    className="absolute bottom-0 h-4 w-[85%] rounded-t-sm"
                    style={{
                        background:
                            "linear-gradient(180deg, #616161 0%, #424242 50%, #212121 100%)",
                        boxShadow: "0 -2px 15px rgba(0, 0, 0, 0.3)",
                    }}
                />
            </div>

            {/* Company Name and Progress */}
            <div ref={textRef} className="mt-8 text-center">
                <h1 className="font-display text-2xl font-bold tracking-wider text-white">
                    VIJAY{" "}
                    <span className="text-brand-green">CONSTRUCTIONS</span>
                </h1>
                <p className="mt-2 font-mono text-xs tracking-widest text-concrete">
                    BUILDING EXCELLENCE
                </p>

                {/* Progress Bar */}
                <div className="mx-auto mt-6 h-1 w-48 overflow-hidden rounded-full bg-steel-dark">
                    <div
                        className="h-full rounded-full transition-all duration-300 ease-out"
                        style={{
                            width: `${Math.min(progress, 100)}%`,
                            background: "linear-gradient(90deg, #C62828, #2E7D32)",
                        }}
                    />
                </div>
                <p className="mt-2 font-mono text-xs text-concrete-dark">
                    {Math.min(Math.round(progress), 100)}%
                </p>
            </div>
        </div>
    );
}
