import { gsap } from "gsap";

export const EASE_CONSTRUCTION = "power3.out";
export const EASE_MECHANICAL = "expo.out";

export const STAGGER_DEFAULT = 0.15;
export const DURATION_NORMAL = 0.8;

export const ANIMATION_VARIANTS = {
    fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1, duration: DURATION_NORMAL, ease: EASE_CONSTRUCTION },
    },
    slideUp: {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0, duration: DURATION_NORMAL, ease: EASE_CONSTRUCTION },
    },
    slideLeft: {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0, duration: DURATION_NORMAL, ease: EASE_CONSTRUCTION },
    },
    slideRight: {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0, duration: DURATION_NORMAL, ease: EASE_CONSTRUCTION },
    },
    scaleUp: {
        from: { opacity: 0, scale: 0.95 },
        to: { opacity: 1, scale: 1, duration: DURATION_NORMAL, ease: EASE_CONSTRUCTION },
    },
    blueprint: {
        from: { strokeDashoffset: 1000, opacity: 0 },
        to: { strokeDashoffset: 0, opacity: 1, duration: 1.5, ease: "power2.inOut" },
    },
};

export const revealAnimation = (element: Element | null, variant: keyof typeof ANIMATION_VARIANTS = "slideUp", delay = 0) => {
    if (!element) return;

    const { from, to } = ANIMATION_VARIANTS[variant];
    gsap.fromTo(element, from, { ...to, delay });
};
