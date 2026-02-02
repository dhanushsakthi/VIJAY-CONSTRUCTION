"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
    id: number;
    title: string;
    category: string;
    image: string;
    location: string;
    delay?: number;
}

export function ProjectCard({
    id,
    title,
    category,
    image,
    location,
    delay = 0,
}: ProjectCardProps) {
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
        <Link href={`/projects/${id}`}>
            <div
                ref={cardRef}
                className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-sm"
            >
                {/* Image */}
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-steel-dark via-steel-dark/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Category Badge */}
                <div className="absolute left-4 top-4">
                    <span className="inline-block rounded-sm bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                        {category}
                    </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                        <h3 className="mb-2 font-display text-xl font-bold text-white">
                            {title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-white/70">
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            {location}
                        </div>

                        {/* View Project Link */}
                        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-red opacity-0 transition-all duration-300 group-hover:opacity-100">
                            View Project
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
                        </div>
                    </div>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-brand-red/20 transition-all duration-500 group-hover:scale-[3] group-hover:bg-brand-red/30" />
            </div>
        </Link>
    );
}
