"use client";

import { useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProviderProps {
    children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        // Sync Lenis with GSAP ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(1000, 16);

        // Handle anchor links
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a[href^="#"]');
            if (anchor) {
                e.preventDefault();
                const href = anchor.getAttribute("href");
                if (href) {
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        lenis.scrollTo(targetElement as HTMLElement, {
                            offset: -100,
                            duration: 1.5,
                        });
                    }
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);
        // Refresh ScrollTrigger after a short delay to ensure everything is loaded
        const timeoutId = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);
        return () => {
            clearTimeout(timeoutId);
            lenis.destroy();
            document.removeEventListener("click", handleAnchorClick);
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
        };
    }, []);

    return <>{children}</>;
}
