"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export function ConstructionLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const loaderRef = useRef<HTMLDivElement>(null);
    const blueprintRef = useRef<SVGSVGElement>(null);
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
                    duration: 0.8,
                    stagger: 0.04,
                    ease: "power2.out",
                },
                0
            );
        }

        // Add a slight pause after drawing is complete
        tl.to({}, { duration: 0.5 });
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
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
            style={{ backgroundColor: "#E8E4E0" }}
            aria-label="Loading"
            role="progressbar"
            aria-valuenow={Math.min(progress, 100)}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            {/* Subtle Grid Background - REMOVED for image clarity */}

            {/* Main Construction Animation */}
            <div className="relative flex h-[250px] w-[300px] items-center justify-center">
                {/* Blueprint SVG - Modern House from Visiting Card */}
                <svg
                    ref={blueprintRef}
                    viewBox="0 0 240 240"
                    className="absolute h-full w-full"
                    style={{ filter: "drop-shadow(0 0 8px rgba(90, 90, 90, 0.2))" }}
                >
                    {/* Ground Line */}
                    <line className="blueprint-path" x1="20" y1="210" x2="220" y2="210" stroke="#5A5A5A" strokeWidth="2" />

                    {/* Tree on Left */}
                    <path className="blueprint-path" d="M45 210 L45 140" stroke="#5A5A5A" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <circle className="blueprint-path" cx="45" cy="130" r="10" stroke="#5A5A5A" strokeWidth="1.5" fill="none" />
                    <circle className="blueprint-path" cx="35" cy="115" r="8" stroke="#5A5A5A" strokeWidth="1.5" fill="none" />
                    <circle className="blueprint-path" cx="55" cy="112" r="9" stroke="#5A5A5A" strokeWidth="1.5" fill="none" />
                    <circle className="blueprint-path" cx="45" cy="100" r="7" stroke="#5A5A5A" strokeWidth="1.5" fill="none" />

                    {/* 1. GROUND FLOOR (4 Panels) */}
                    {/* Bottom floor outline/pillars */}
                    <path className="blueprint-path" d="M80 210 L80 150 L180 150 L180 210" stroke="#5A5A5A" strokeWidth="2" fill="none" />
                    {/* 4 Panel Divisions */}
                    <line className="blueprint-path" x1="105" y1="150" x2="105" y2="210" stroke="#5A5A5A" strokeWidth="1.5" />
                    <line className="blueprint-path" x1="130" y1="150" x2="130" y2="210" stroke="#5A5A5A" strokeWidth="1.5" />
                    <line className="blueprint-path" x1="155" y1="150" x2="155" y2="210" stroke="#5A5A5A" strokeWidth="1.5" />
                    {/* Inner Panel details */}
                    <rect className="blueprint-path" x="87" y="160" width="12" height="40" stroke="#5A5A5A" strokeWidth="0.8" fill="none" opacity="0.6" />
                    <rect className="blueprint-path" x="112" y="160" width="12" height="40" stroke="#5A5A5A" strokeWidth="0.8" fill="none" opacity="0.6" />
                    <rect className="blueprint-path" x="137" y="160" width="12" height="40" stroke="#5A5A5A" strokeWidth="0.8" fill="none" opacity="0.6" />
                    <rect className="blueprint-path" x="162" y="160" width="12" height="40" stroke="#5A5A5A" strokeWidth="0.8" fill="none" opacity="0.6" />

                    {/* 2. MIDDLE FLOOR (3 Panels + Balcony) */}
                    {/* Horizontal Slabs */}
                    <line className="blueprint-path" x1="75" y1="150" x2="185" y2="150" stroke="#5A5A5A" strokeWidth="3" />
                    <line className="blueprint-path" x1="75" y1="95" x2="185" y2="95" stroke="#5A5A5A" strokeWidth="3" />
                    {/* Main Structure (Peaked roof makes top part different) */}
                    <path className="blueprint-path" d="M80 150 L80 95 L180 95 L180 150" stroke="#5A5A5A" strokeWidth="2" fill="none" />

                    {/* 3 Window Panels behind railing */}
                    <line className="blueprint-path" x1="113" y1="95" x2="113" y2="150" stroke="#5A5A5A" strokeWidth="1.5" />
                    <line className="blueprint-path" x1="147" y1="95" x2="147" y2="150" stroke="#5A5A5A" strokeWidth="1.5" />

                    {/* Balcony Railings */}
                    <line className="blueprint-path" x1="80" y1="135" x2="180" y2="135" stroke="#5A5A5A" strokeWidth="1.5" />
                    {[85, 95, 105, 115, 125, 135, 145, 155, 165, 175].map((x) => (
                        <line key={x} className="blueprint-path" x1={x} y1="135" x2={x} y2="150" stroke="#5A5A5A" strokeWidth="0.8" />
                    ))}

                    {/* 3. TOP FLOOR (3 Windows + Slanted Roof) */}
                    {/* Windows */}
                    <path className="blueprint-path" d="M85 95 L85 45 L175 65 L175 95" stroke="#5A5A5A" strokeWidth="2" fill="none" />
                    {/* Interior Window divisions */}
                    <line className="blueprint-path" x1="115" y1="95" x2="115" y2="52" stroke="#5A5A5A" strokeWidth="1" />
                    <line className="blueprint-path" x1="145" y1="95" x2="145" y2="58" stroke="#5A5A5A" strokeWidth="1" />

                    {/* Slanted Roof Line (Peak on Left) */}
                    <path className="blueprint-path" d="M75 40 L185 68" stroke="#5A5A5A" strokeWidth="3" fill="none" strokeLinecap="round" />
                    {/* Chimney/Right Roof Detail */}
                    <path className="blueprint-path" d="M165 63 L165 55 L175 55" stroke="#5A5A5A" strokeWidth="1.5" fill="none" />

                    {/* Roof Accent Lines */}
                    <line className="blueprint-path" x1="85" y1="45" x2="85" y2="35" stroke="#5A5A5A" strokeWidth="1" />
                    <line className="blueprint-path" x1="100" y1="48" x2="100" y2="40" stroke="#5A5A5A" strokeWidth="0.8" />
                    <line className="blueprint-path" x1="120" y1="52" x2="120" y2="44" stroke="#5A5A5A" strokeWidth="0.8" />
                </svg>
            </div>

            {/* Company Name and Progress */}
            <div ref={textRef} className="mt-8 text-center">
                <h1 className="font-display text-2xl font-bold tracking-wider" style={{ color: "#C62828" }}>
                    VIJAY{" "}
                    <span style={{ color: "#333333" }}>CONSTRUCTIONS</span>
                </h1>
                <p className="mt-2 font-mono text-xs tracking-widest" style={{ color: "#666666" }}>
                    U dream We build
                </p>

                {/* Progress Bar */}
                <div className="mx-auto mt-6 h-1 w-48 overflow-hidden rounded-full" style={{ backgroundColor: "#CCCCCC" }}>
                    <div
                        className="h-full rounded-full transition-all duration-300 ease-out"
                        style={{
                            width: `${Math.min(progress, 100)}%`,
                            background: "linear-gradient(90deg, #C62828, #2E7D32)",
                        }}
                    />
                </div>
                <p className="mt-2 font-mono text-xs" style={{ color: "#666666" }}>
                    {Math.min(Math.round(progress), 100)}%
                </p>
            </div>
        </div>
    );
}
