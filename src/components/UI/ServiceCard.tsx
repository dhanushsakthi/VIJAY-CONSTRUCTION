"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
    id: number;
    title: string;
    description: string;
    icon: string;
    delay?: number;
}

const icons: Record<string, React.ReactNode> = {
    home: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
        </svg>
    ),
    building: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
        </svg>
    ),
    renovation: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
        </svg>
    ),
    engineering: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </svg>
    ),
};

export function ServiceCard({
    id,
    title,
    description,
    icon,
    delay = 0,
}: ServiceCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;

        gsap.set(cardRef.current, { opacity: 0, y: 30 });

        const trigger = ScrollTrigger.create({
            trigger: cardRef.current,
            start: "top 85%",
            onEnter: () => {
                gsap.to(cardRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay,
                    ease: "power3.out",
                });
            },
            once: true,
        });

        return () => {
            trigger.kill();
        };
    }, [delay]);

    return (
        <div
            ref={cardRef}
            className="group relative overflow-hidden rounded-sm bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-lg lg:p-8"
        >
            {/* Background accent */}
            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-brand-green/5 transition-all duration-500 group-hover:scale-[4]" />

            {/* Icon */}
            <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-sm bg-gradient-to-br from-brand-red to-brand-red-dark text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                {icons[icon]}
            </div>

            {/* Content */}
            <h3 className="relative mb-3 font-display text-lg font-bold text-steel-dark">
                {title}
            </h3>
            <p className="relative mb-4 text-sm text-concrete-dark">{description}</p>

            {/* Link */}
            <Link
                href={`/services#${icon}`}
                className="relative inline-flex items-center gap-2 text-sm font-semibold text-brand-red transition-colors group-hover:text-brand-red-dark"
            >
                Learn More
                <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </Link>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-red to-brand-green transition-all duration-500 group-hover:w-full" />
        </div>
    );
}
