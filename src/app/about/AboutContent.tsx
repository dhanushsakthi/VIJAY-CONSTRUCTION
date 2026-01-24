"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { DynamicBackground } from "@/components/DynamicBackground/DynamicBackground";
import { AnimatedSection } from "@/components/UI/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

const values = [
    {
        icon: "quality",
        title: "Quality First",
        description: "We never compromise on materials or workmanship, ensuring structures that stand the test of time.",
    },
    {
        icon: "integrity",
        title: "Integrity",
        description: "Transparent pricing, honest communication, and ethical business practices in every project.",
    },
    {
        icon: "innovation",
        title: "Innovation",
        description: "Combining traditional building wisdom with modern construction techniques and technologies.",
    },
    {
        icon: "safety",
        title: "Safety",
        description: "Strict adherence to safety protocols protecting our workers and your investment.",
    },
];

const timeline = [
    { year: "2009", title: "Company Founded", description: "Started with a vision to transform construction in Yercaud region." },
    { year: "2012", title: "First Major Project", description: "Completed our first residential complex, establishing our reputation." },
    { year: "2016", title: "Commercial Expansion", description: "Expanded services to include commercial construction projects." },
    { year: "2020", title: "Milestone Achievement", description: "Completed 100+ projects with 55+ satisfied clients." },
    { year: "2024", title: "Industry Recognition", description: "Achieved 4.9★ Google rating, becoming the region's preferred builder." },
];

const icons: Record<string, React.ReactNode> = {
    quality: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
    ),
    integrity: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    ),
    innovation: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    ),
    safety: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
        </svg>
    ),
};

export function AboutContent() {
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
                            About Us
                        </span>
                        <h1 className="hero-animate heading-xl mb-6 text-white">
                            Building Trust, <span className="text-brand-green">Brick by Brick</span>
                        </h1>
                        <p className="hero-animate body-lg text-white/70">
                            With over 15 years of experience, Vijay Constructions has been transforming
                            the landscape of Yercaud and Salem with quality construction that stands the test of time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <AnimatedSection className="section bg-white">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-green">
                                Our Story
                            </span>
                            <h2 className="heading-md mb-6 text-steel-dark">
                                From Humble Beginnings to <span className="text-brand-red">Regional Leaders</span>
                            </h2>
                            <p className="body-md mb-6 text-concrete-dark">
                                Vijay Constructions was founded with a simple yet powerful vision: to build
                                structures that not only meet the highest standards of quality but also
                                reflect the aspirations of our clients.
                            </p>
                            <p className="body-md mb-6 text-concrete-dark">
                                Starting from a small team of dedicated professionals, we have grown into
                                one of the most trusted construction companies in the Yercaud and Salem
                                region. Our journey has been marked by unwavering commitment to excellence,
                                integrity, and customer satisfaction.
                            </p>
                            <p className="body-md text-concrete-dark">
                                Today, with over 100 completed projects and a 4.9-star Google rating from
                                55+ satisfied clients, we continue to build not just structures, but lasting
                                relationships with our clients.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] overflow-hidden rounded-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                                    alt="Construction team at work"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            {/* Accent box */}
                            <div className="absolute -bottom-8 -left-8 hidden rounded-sm bg-brand-red p-8 text-white shadow-lg lg:block">
                                <div className="font-display text-4xl font-bold">15+</div>
                                <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Values Section */}
            <AnimatedSection className="section bg-concrete-50">
                <div className="container">
                    <div className="mb-12 text-center lg:mb-16">
                        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-green">
                            What Drives Us
                        </span>
                        <h2 className="heading-lg mb-4 text-steel-dark">
                            Our Core <span className="text-brand-red">Values</span>
                        </h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className="group rounded-sm bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/10 text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white">
                                    {icons[value.icon]}
                                </div>
                                <h3 className="mb-2 font-display text-lg font-bold text-steel-dark">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-concrete-dark">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Timeline Section */}
            <AnimatedSection className="section bg-steel-dark">
                <div className="container">
                    <div className="mb-12 text-center lg:mb-16">
                        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-green">
                            Our Journey
                        </span>
                        <h2 className="heading-lg mb-4 text-white">
                            Milestones <span className="text-brand-red">Achieved</span>
                        </h2>
                    </div>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 top-0 h-full w-0.5 bg-white/20 md:left-1/2 md:-translate-x-1/2" />

                        <div className="space-y-8">
                            {timeline.map((item, index) => (
                                <div
                                    key={item.year}
                                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={`ml-12 flex-1 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                                        <div className="rounded-sm bg-white/5 p-6 backdrop-blur-sm">
                                            <span className="text-2xl font-bold text-brand-green">{item.year}</span>
                                            <h3 className="mb-2 font-display text-lg font-bold text-white">{item.title}</h3>
                                            <p className="text-sm text-concrete">{item.description}</p>
                                        </div>
                                    </div>
                                    {/* Dot */}
                                    <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-green bg-steel-dark md:left-1/2 md:-translate-x-1/2">
                                        <div className="h-3 w-3 rounded-full bg-brand-green" />
                                    </div>
                                    {/* Empty space for alignment */}
                                    <div className="hidden flex-1 md:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="section bg-white">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="heading-md mb-6 text-steel-dark">
                            Ready to Build with <span className="text-brand-red">Excellence</span>?
                        </h2>
                        <p className="body-md mb-8 text-concrete-dark">
                            Let&apos;s discuss your project and see how we can bring your vision to life
                            with quality construction.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="btn btn-primary">
                                Get Free Quote
                            </Link>
                            <Link href="/projects" className="btn btn-secondary">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
}
