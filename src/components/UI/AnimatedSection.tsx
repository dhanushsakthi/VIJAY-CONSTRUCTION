"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";
    delay?: number;
}

export function AnimatedSection({
    children,
    className = "",
    id,
    animation = "fade",
    delay = 0,
}: AnimatedSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const element = sectionRef.current;
        let fromVars: gsap.TweenVars = { opacity: 0 };
        const toVars: gsap.TweenVars = {
            opacity: 1,
            duration: 0.8,
            delay,
            ease: "power3.out",
        };

        switch (animation) {
            case "slide-up":
                fromVars = { opacity: 0, y: 50 };
                toVars.y = 0;
                break;
            case "slide-left":
                fromVars = { opacity: 0, x: -50 };
                toVars.x = 0;
                break;
            case "slide-right":
                fromVars = { opacity: 0, x: 50 };
                toVars.x = 0;
                break;
            case "scale":
                fromVars = { opacity: 0, scale: 0.95 };
                toVars.scale = 1;
                break;
            default:
                break;
        }

        gsap.set(element, fromVars);

        const trigger = ScrollTrigger.create({
            trigger: element,
            start: "top 85%",
            onEnter: () => {
                gsap.to(element, toVars);
            },
            once: true,
        });

        return () => {
            trigger.kill();
        };
    }, [animation, delay]);

    return (
        <section ref={sectionRef} id={id} className={className}>
            {children}
        </section>
    );
}
