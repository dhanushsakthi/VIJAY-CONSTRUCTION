"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TestimonialCardProps {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
    delay?: number;
}

export function TestimonialCard({
    id,
    name,
    role,
    content,
    rating,
    delay = 0,
}: TestimonialCardProps) {
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
            className="group relative overflow-hidden rounded-sm bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg lg:p-8"
        >
            {/* Quote icon */}
            <div className="absolute -right-4 -top-4 text-8xl font-serif text-brand-green/10">
                &quot;
            </div>

            {/* Rating Stars */}
            <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`h-5 w-5 ${i < rating ? "fill-yellow-400" : "fill-concrete-light"
                            }`}
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>

            {/* Content */}
            <p className="relative mb-6 text-concrete-dark">{content}</p>

            {/* Author */}
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-red-dark text-lg font-bold text-white">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-display font-bold text-steel-dark">{name}</h4>
                    <p className="text-sm text-concrete-dark">{role}</p>
                </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-red to-brand-green transition-all duration-500 group-hover:w-full" />
        </div>
    );
}
