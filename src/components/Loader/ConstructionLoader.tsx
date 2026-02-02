"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export function ConstructionLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const loaderRef = useRef<HTMLDivElement>(null);
    const blueprintRef = useRef<SVGSVGElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const progressTextRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Main animation timeline
        const tl = gsap.timeline({
            onUpdate: function () {
                const prog = this.progress() * 100;
                // Direct DOM updates to avoid re-renders
                if (progressRef.current) {
                    progressRef.current.style.width = `${prog}%`;
                }
                if (progressTextRef.current) {
                    progressTextRef.current.innerText = `${Math.round(prog)}%`;
                }
            },
            onComplete: () => {
                // Hold for a moment so the 100% state is clearly visible
                gsap.to(loaderRef.current, {
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.5, // Mandatory pause at 100%
                    ease: "power2.inOut",
                    onComplete: () => setIsLoading(false),
                });
            },
        });

        // Blueprint lines drawing animation
        if (blueprintRef.current) {
            const paths = blueprintRef.current.querySelectorAll(".blueprint-path");

            // Set initial state for all paths
            paths.forEach((path) => {
                const length = (path as SVGPathElement).getTotalLength();
                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length,
                    opacity: 1
                });
            });

            // 1. Draw Ground and Main Structure
            tl.to(
                paths,
                {
                    strokeDashoffset: 0,
                    duration: 3, // Slower drawing for more impact
                    stagger: {
                        amount: 2,
                        from: "start"
                    },
                    ease: "none", // Linear drawing feels more technical/blueprint-like
                },
                0
            );
        }

        // Text reveal - starts when drawing is halfway done
        if (textRef.current) {
            tl.fromTo(
                textRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                },
                1.5
            );
        }

        return () => {
            tl.kill();
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 text-center will-change-opacity"
            style={{ backgroundColor: "#E8E4E0" }}
            aria-label="Loading"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
        >
            {/* Main Construction Animation */}
            <div className="relative flex h-[280px] w-full max-w-[320px] items-center justify-center lg:h-[350px] lg:max-w-[400px]">
                <svg
                    ref={blueprintRef}
                    viewBox="0 0 240 240"
                    className="h-full w-full"
                    style={{ willChange: "transform, opacity" }}
                >
                    {/* Ground Line */}
                    <line className="blueprint-path" x1="20" y1="210" x2="220" y2="210" stroke="#333333" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Tree on Left */}
                    <path className="blueprint-path" d="M45 210 L45 140" stroke="#444444" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <circle className="blueprint-path" cx="45" cy="130" r="10" stroke="#444444" strokeWidth="1.5" fill="none" />
                    <circle className="blueprint-path" cx="35" cy="115" r="8" stroke="#444444" strokeWidth="1.5" fill="none" />
                    <circle className="blueprint-path" cx="55" cy="112" r="9" stroke="#444444" strokeWidth="1.5" fill="none" />
                    <circle className="blueprint-path" cx="45" cy="100" r="7" stroke="#444444" strokeWidth="1.5" fill="none" />

                    {/* Ground Floor Structure (4 Panels) */}
                    <path className="blueprint-path" d="M80 210 L80 150 L180 150 L180 210" stroke="#333333" strokeWidth="2" fill="none" strokeLinejoin="round" />
                    <line className="blueprint-path" x1="105" y1="150" x2="105" y2="210" stroke="#333333" strokeWidth="1.5" />
                    <line className="blueprint-path" x1="130" y1="150" x2="130" y2="210" stroke="#333333" strokeWidth="1.5" />
                    <line className="blueprint-path" x1="155" y1="150" x2="155" y2="210" stroke="#333333" strokeWidth="1.5" />

                    {/* Door Detail (Inside panels) */}
                    <rect className="blueprint-path" x="87" y="165" width="12" height="35" stroke="#666666" strokeWidth="1" fill="none" />
                    <rect className="blueprint-path" x="112" y="165" width="12" height="35" stroke="#666666" strokeWidth="1" fill="none" />
                    <rect className="blueprint-path" x="137" y="165" width="12" height="35" stroke="#666666" strokeWidth="1" fill="none" />
                    <rect className="blueprint-path" x="162" y="165" width="12" height="35" stroke="#666666" strokeWidth="1" fill="none" />

                    {/* Middle Floor Horizontal Slabs */}
                    <line className="blueprint-path" x1="75" y1="150" x2="185" y2="150" stroke="#222222" strokeWidth="3.5" />
                    <line className="blueprint-path" x1="75" y1="95" x2="185" y2="95" stroke="#222222" strokeWidth="3.5" />

                    {/* Middle Floor Walls */}
                    <path className="blueprint-path" d="M80 150 L80 95 M180 95 L180 150" stroke="#333333" strokeWidth="2" fill="none" />
                    <line className="blueprint-path" x1="113" y1="95" x2="113" y2="150" stroke="#333333" strokeWidth="1.5" />
                    <line className="blueprint-path" x1="147" y1="95" x2="147" y2="150" stroke="#333333" strokeWidth="1.5" />

                    {/* Balcony Railings (Drawn sequentially) */}
                    <line className="blueprint-path" x1="80" y1="135" x2="180" y2="135" stroke="#222222" strokeWidth="1.5" />
                    <line className="blueprint-path" x1="85" y1="135" x2="85" y2="150" stroke="#555555" strokeWidth="1" />
                    <line className="blueprint-path" x1="95" y1="135" x2="95" y2="150" stroke="#555555" strokeWidth="1" />
                    <line className="blueprint-path" x1="105" y1="135" x2="105" y2="150" stroke="#555555" strokeWidth="1" />
                    <line className="blueprint-path" x1="115" y1="135" x2="115" y2="150" stroke="#555555" strokeWidth="1" />
                    <line className="blueprint-path" x1="125" y1="135" x2="125" y2="150" stroke="#555555" strokeWidth="1" />
                    <line className="blueprint-path" x1="135" y1="135" x2="135" y2="150" stroke="#555555" strokeWidth="1" />
                    <line className="blueprint-path" x1="145" y1="135" x2="145" y2="150" stroke="#555555" strokeWidth="1" />
                    <line className="blueprint-path" x1="155" y1="135" x2="155" y2="150" stroke="#555555" strokeWidth="1" />
                    <line className="blueprint-path" x1="165" y1="135" x2="165" y2="150" stroke="#555555" strokeWidth="1" />
                    <line className="blueprint-path" x1="175" y1="135" x2="175" y2="150" stroke="#555555" strokeWidth="1" />

                    {/* Top Floor Windows */}
                    <path className="blueprint-path" d="M85 95 L85 45 L175 65 L175 95" stroke="#333333" strokeWidth="2" fill="none" strokeLinejoin="round" />
                    <line className="blueprint-path" x1="115" y1="95" x2="115" y2="52" stroke="#333333" strokeWidth="1.5" />
                    <line className="blueprint-path" x1="145" y1="95" x2="145" y2="58" stroke="#333333" strokeWidth="1.5" />

                    {/* Slanted Roof Line (Peak Left) */}
                    <path className="blueprint-path" d="M75 40 L185 68" stroke="#222222" strokeWidth="4" fill="none" strokeLinecap="round" />

                    {/* Chimney Detail */}
                    <path className="blueprint-path" d="M165 63 L165 52 L175 52 L175 65" stroke="#333333" strokeWidth="1.5" fill="none" strokeLinejoin="round" />

                    {/* Roof Accent Lines */}
                    <line className="blueprint-path" x1="85" y1="45" x2="85" y2="30" stroke="#666666" strokeWidth="1.2" />
                    <line className="blueprint-path" x1="100" y1="48" x2="100" y2="35" stroke="#666666" strokeWidth="1" />
                    <line className="blueprint-path" x1="120" y1="52" x2="120" y2="40" stroke="#666666" strokeWidth="1" />
                </svg>
            </div>

            {/* Company Info and Slogan */}
            <div ref={textRef} className="mt-8">
                <h1 className="font-display text-2xl font-black uppercase tracking-widest lg:text-3xl" style={{ color: "#C62828" }}>
                    VIJAY <span style={{ color: "#333333" }}>CONSTRUCTIONS</span>
                </h1>
                <p className="mt-2 font-mono text-sm tracking-[0.2em] font-medium" style={{ color: "#666666" }}>
                    U dream We build
                </p>

                {/* Progress Bar Container */}
                <div className="mx-auto mt-10 w-64">
                    <div className="relative h-1.5 w-full overflow-hidden rounded-full" style={{ backgroundColor: "#D1CBC5" }}>
                        <div
                            ref={progressRef}
                            className="absolute left-0 top-0 h-full rounded-full transition-none"
                            style={{
                                width: `0%`,
                                background: "linear-gradient(90deg, #C62828, #2E7D32)",
                            }}
                        />
                    </div>
                    {/* Percentage Display */}
                    <div className="mt-3 flex justify-between font-mono text-[10px] font-bold tracking-tighter text-concrete-600">
                        <span className="uppercase opacity-50">Blueprint Drawing</span>
                        <span ref={progressTextRef}>0%</span>
                    </div>
                </div>
            </div>

            {/* Background Texture Overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] grayscale"
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/graphy.png')" }} />
        </div>
    );
}
