"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { DynamicBackground } from "@/components/DynamicBackground/DynamicBackground";
import { AnimatedSection } from "@/components/UI/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
    {
        icon: "experience",
        title: "30+ Years Experience",
        description: "Over three decades of construction excellence in Yercaud and Salem region.",
    },
    {
        icon: "quality",
        title: "Premium Quality",
        description: "We use only the finest materials and employ skilled craftsmen for every project.",
    },
    {
        icon: "rating",
        title: "4.9★ Google Rating",
        description: "Consistently high ratings from 55+ satisfied clients who trust our work.",
    },
    {
        icon: "timeline",
        title: "On-Time Delivery",
        description: "We respect your time and deliver projects within agreed timelines.",
    },
    {
        icon: "pricing",
        title: "Transparent Pricing",
        description: "No hidden costs. Clear, upfront pricing with detailed breakdowns.",
    },
    {
        icon: "support",
        title: "End-to-End Support",
        description: "From design to handover, we guide you through every step of the process.",
    },
];

const guarantees = [
    "Quality materials with certified standards",
    "Skilled and trained workforce",
    "Adherence to safety protocols",
    "Regular progress updates",
    "Post-completion support",
    "Warranty on workmanship",
];

const icons: Record<string, React.ReactNode> = {
    experience: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    quality: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
    ),
    rating: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
    ),
    timeline: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
    ),
    pricing: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    support: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    ),
};

export function WhyChooseUsContent() {
    const heroContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (heroContentRef.current) {
            const elements = heroContentRef.current.querySelectorAll(".hero-animate");
            gsap.fromTo(
                elements,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    delay: 0.3,
                    ease: "power3.out",
                }
            );
        }
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] overflow-hidden">
                <DynamicBackground variant="hero" />
                <div className="container relative flex min-h-[60vh] items-center">
                    <div ref={heroContentRef} className="max-w-3xl pb-16 pt-32 lg:pt-40">
                        <span className="hero-animate mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-green">
                            Why Choose Us
                        </span>
                        <h1 className="hero-animate heading-xl mb-6 text-white">
                            The <span className="text-brand-green">Vijay Constructions</span> Difference
                        </h1>
                        <p className="hero-animate body-lg text-white/70">
                            Discover what sets us apart and why we are the preferred construction
                            partner for families and businesses in Yercaud and Salem.
                        </p>
                    </div>
                </div>
            </section>

            {/* Reasons Grid */}
            <AnimatedSection className="section bg-white">
                <div className="container">
                    <div className="mb-12 text-center lg:mb-16">
                        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-green">
                            Our Strengths
                        </span>
                        <h2 className="heading-lg mb-4 text-steel-dark">
                            Why Clients <span className="text-brand-red">Trust Us</span>
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {reasons.map((reason, index) => (
                            <div
                                key={reason.title}
                                className="group rounded-sm border border-concrete-light bg-white p-8 transition-all duration-300 hover:border-brand-green hover:shadow-lg"
                            >
                                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 text-brand-red transition-all duration-300 group-hover:bg-brand-red group-hover:text-white">
                                    {icons[reason.icon]}
                                </div>
                                <h3 className="mb-3 font-display text-xl font-bold text-steel-dark">
                                    {reason.title}
                                </h3>
                                <p className="text-concrete-dark">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Comparison Section */}
            <AnimatedSection className="section bg-concrete-50">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-green">
                                Our Promise
                            </span>
                            <h2 className="heading-md mb-6 text-steel-dark">
                                Quality <span className="text-brand-red">Guaranteed</span>
                            </h2>
                            <p className="body-md mb-8 text-concrete-dark">
                                At Vijay Constructions, quality isn&apos;t just a word—it&apos;s our commitment to you.
                                Every project we undertake comes with our guarantee of excellence in materials,
                                workmanship, and service.
                            </p>

                            <ul className="space-y-4">
                                {guarantees.map((guarantee) => (
                                    <li key={guarantee} className="flex items-center gap-4">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-white">
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="font-medium text-steel-dark">{guarantee}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="relative">
                                <div className="aspect-square w-80 rounded-full border-8 border-brand-green/20 p-8">
                                    <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-brand-green text-center text-white">
                                        <span className="mb-2 font-display text-6xl font-bold">100%</span>
                                        <span className="text-lg uppercase tracking-wider">Satisfaction</span>
                                        <span className="text-sm opacity-80">Guarantee</span>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-red text-white shadow-lg">
                                    <div className="text-center">
                                        <span className="block font-display text-xl font-bold">4.9</span>
                                        <span className="text-xs">★ Rating</span>
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-full bg-steel-dark text-white shadow-lg">
                                    <div className="text-center">
                                        <span className="block font-display text-lg font-bold">55+</span>
                                        <span className="text-[10px]">Clients</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Process Overview */}
            <AnimatedSection className="section bg-steel-dark">
                <div className="container">
                    <div className="mb-12 text-center lg:mb-16">
                        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-green">
                            Our Approach
                        </span>
                        <h2 className="heading-lg mb-4 text-white">
                            Simple, <span className="text-brand-red">Transparent</span> Process
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { step: "01", title: "Consultation", desc: "Share your vision and requirements with our team." },
                            { step: "02", title: "Planning", desc: "We create detailed plans and provide transparent quotes." },
                            { step: "03", title: "Execution", desc: "Quality construction with regular progress updates." },
                        ].map((item) => (
                            <div key={item.step} className="group text-center">
                                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/20 font-display text-3xl font-bold text-brand-green transition-all group-hover:border-brand-green group-hover:bg-brand-green group-hover:text-white">
                                    {item.step}
                                </div>
                                <h3 className="mb-2 font-display text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-concrete">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <section className="relative overflow-hidden bg-brand-red py-20">
                <div className="container relative">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="heading-md mb-6 text-white">
                            Experience the Difference
                        </h2>
                        <p className="body-md mb-8 text-white/80">
                            Ready to work with a construction partner who truly cares about your project?
                            Let&apos;s start the conversation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="rounded-sm bg-white px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-brand-red shadow-lg transition-all hover:bg-steel-dark hover:text-white">
                                Get Free Quote
                            </Link>
                            <a href="tel:+917695850762" className="flex items-center gap-2 rounded-sm border-2 border-white px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-brand-red">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
