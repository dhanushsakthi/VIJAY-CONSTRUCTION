"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatsCounterProps {
    value: number;
    suffix?: string;
    label: string;
    delay?: number;
    decimals?: number;
    isHero?: boolean;
}

export function StatsCounter({
    value,
    suffix = "",
    label,
    delay = 0,
    decimals = 0,
    isHero = false,
}: StatsCounterProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const valueRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!containerRef.current || !valueRef.current) return;

        const trigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 90%",
            onEnter: () => {
                if (hasAnimated.current) return;
                hasAnimated.current = true;

                const target = { value: 0 };
                gsap.to(target, {
                    value: value,
                    duration: 2,
                    delay: delay,
                    ease: "power2.out",
                    onUpdate: () => {
                        if (valueRef.current) {
                            const formattedValue = decimals > 0
                                ? target.value.toFixed(decimals)
                                : Math.round(target.value).toString();
                            valueRef.current.innerText = formattedValue;
                        }
                    },
                });
            },
        });

        return () => {
            trigger.kill();
        };
    }, [value, delay, decimals]);

    return (
        <div
            ref={containerRef}
            className={`group relative overflow-hidden rounded-sm p-6 text-center transition-all duration-300 ${isHero ? "hover:bg-white/5" : "hover:bg-concrete-50"
                }`}
        >
            {/* Animated border */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-red transition-all duration-500 group-hover:w-full" />

            <div
                className={`mb-2 font-display text-4xl font-bold lg:text-5xl ${isHero ? "text-white" : "text-steel-dark"
                    }`}
            >
                <span ref={valueRef}>0</span>
                <span className={isHero ? "text-brand-red-light" : "text-brand-red"}>
                    {suffix}
                </span>
            </div>
            <p
                className={`text-sm font-medium uppercase tracking-wider ${isHero ? "text-white/70" : "text-concrete-dark"
                    }`}
            >
                {label}
            </p>
        </div>
    );
}
