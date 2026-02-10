"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { DynamicBackground } from "@/components/DynamicBackground/DynamicBackground";
import { BackgroundSlideshow } from "@/components/Background/BackgroundSlideshow";
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
    { year: "2020", title: "Milestone Achievement", description: "Completed 50+ projects with 55+ satisfied clients." },
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
            <section className="relative min-h-[60vh] overflow-hidden bg-asphalt-dark">
                <BackgroundSlideshow />
                <DynamicBackground variant="hero" />
                <div className="container relative flex min-h-[60vh] items-center">
                    <div ref={heroContentRef} className="max-w-3xl pb-16 pt-32 lg:pt-40">
                        <span className="hero-animate mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-red">
                            About Us
                        </span>
                        <h1 className="hero-animate heading-xl mb-6 text-white drop-shadow-sm">
                            Building Trust, <span className="text-brand-red-light">Brick by Brick</span>
                        </h1>
                        <p className="hero-animate body-lg text-white/90 drop-shadow-sm">
                            With over 30 years of experience, Vijay Constructions has been transforming
                            the landscape of Yercaud and Salem with quality construction that stands the test of time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <AnimatedSection className="section">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="relative">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
                                <Image
                                    src="/images/visiting-card.png"
                                    alt="Vijay Constructions Visiting Card"
                                    width={800}
                                    height={500}
                                    className="h-full w-full object-contain bg-white"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
                            </div>
                            {/* Stats Float */}
                            <div className="absolute -bottom-6 -right-6 hidden lg:block bg-white/90 backdrop-blur-md rounded-lg p-6 border border-white/40 shadow-xl max-w-xs">
                                <p className="font-display text-4xl font-bold text-brand-red mb-1">30+</p>
                                <p className="text-sm font-medium text-steel-dark">Years of Building Excellence in Yercaud & Salem</p>
                            </div>
                        </div>

                        <div className="bg-white/60 backdrop-blur-md rounded-lg p-8 border border-white/40 shadow-lg">
                            <h2 className="heading-md mb-6 text-steel-dark">
                                Our <span className="text-brand-red">Story</span>
                            </h2>
                            <p className="body-md mb-6 text-concrete-dark">
                                Founded by <span className="font-semibold text-steel-dark whitespace-nowrap">G.Mathialagan (Founder)</span> and led by <span className="font-semibold text-steel-dark whitespace-nowrap">M.VIJAYANAND <span className="text-xs font-normal opacity-80">M.E., Ph.D</span> (CEO)</span>, Vijay Constructions has been a cornerstone of development in the Yercaud and Salem region for over three decades.
                            </p>
                            <p className="body-md mb-6 text-concrete-dark">
                                What started as a vision to provide quality homes has grown into a premier civil engineering and construction firm, known for our integrity, craftsmanship, and unwavering commitment to client satisfaction.
                            </p>
                            <p className="body-md text-concrete-dark">
                                We specialize in both residential and commercial projects, bringing a blend of traditional values and modern engineering to every structure we build.
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Core Values */}
            <AnimatedSection className="section">
                <div className="container">
                    <div className="mb-12 text-center lg:mb-16 bg-white/60 backdrop-blur-md rounded-lg p-6 border border-white/40 max-w-4xl mx-auto shadow-sm">
                        <h2 className="heading-md mb-4 text-steel-dark">
                            Core <span className="text-brand-red">Values</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-concrete-dark">
                            The principles that guide our every project and interaction
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Quality",
                                description: "We never compromise on materials or workmanship. Excellence is our standard.",
                                icon: (
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Integrity",
                                description: "Transparency and honesty in all our dealings. We build trust along with homes.",
                                icon: (
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Innovation",
                                description: "Embracing modern techniques while respecting traditional wisdom.",
                                icon: (
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )
                            }
                        ].map((value, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-sm bg-white/60 backdrop-blur-md p-8 shadow-lg border border-white/40 transition-transform duration-300 hover:-translate-y-1">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="mb-3 font-display text-xl font-bold text-steel-dark group-hover:text-brand-red transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-concrete-dark">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Leadership */}
            <AnimatedSection className="section">
                <div className="container">
                    <div className="mx-auto max-w-4xl text-center mb-16 bg-white/60 backdrop-blur-md rounded-lg p-6 border border-white/40 shadow-sm">
                        <h2 className="heading-md mb-4 text-steel-dark">
                            Our <span className="text-brand-red">Leadership</span>
                        </h2>
                        <p className="body-md text-concrete-dark">
                            Guided by experienced visionaries
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                        {/* Founder */}
                        <div className="group relative overflow-hidden rounded-sm bg-white/60 backdrop-blur-md shadow-xl border border-white/40">
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <Image
                                    src="/images/founder-photo.jpg"
                                    alt="G.Mathialagan - Founder & Civil Engineer"
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                                <h3 className="font-display text-2xl font-bold mb-1 text-white">G.Mathialagan</h3>
                                <p className="text-brand-red-light font-medium tracking-wider text-sm uppercase mb-4">Founder & Civil Engineer</p>
                                <p className="text-white/90 text-sm">
                                    With over 30 years of experience in civil engineering and construction, leading Vijay Constructions with a vision for quality and excellence.
                                </p>
                            </div>
                        </div>

                        {/* CEO */}
                        <div className="group relative overflow-hidden rounded-sm bg-white/60 backdrop-blur-md shadow-xl border border-white/40">
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <Image
                                    src="/images/ceo-vijayanand.jpg"
                                    alt="M.VIJAYANAND, M.E., Ph.D - CEO"
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                                <h3 className="font-display text-2xl font-bold mb-1 whitespace-nowrap text-white">M.VIJAYANAND <span className="text-sm font-normal opacity-80">M.E., Ph.D</span></h3>
                                <p className="text-brand-red-light font-medium tracking-wider text-sm uppercase mb-4">CEO</p>
                                <p className="text-white/90 text-sm">
                                    Driving innovation and operational excellence, ensuring every project meets the highest standards of modern construction and client expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Timeline Section */}
            <AnimatedSection className="section bg-concrete-100/40 backdrop-blur-sm">
                <div className="container">
                    <div className="mb-12 text-center lg:mb-16">
                        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-red">
                            Our Journey
                        </span>
                        <h2 className="heading-lg mb-4 text-steel-dark">
                            Milestones <span className="text-brand-red">Achieved</span>
                        </h2>
                    </div>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 top-0 h-full w-0.5 bg-concrete-200 md:left-1/2 md:-translate-x-1/2" />

                        <div className="space-y-8">
                            {timeline.map((item, index) => (
                                <div
                                    key={item.year}
                                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={`ml-12 flex-1 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                                        <div className="rounded-sm bg-white p-6 shadow-sm">
                                            <span className="text-2xl font-bold text-brand-red">{item.year}</span>
                                            <h3 className="mb-2 font-display text-lg font-bold text-steel-dark">{item.title}</h3>
                                            <p className="text-sm text-concrete-dark">{item.description}</p>
                                        </div>
                                    </div>
                                    {/* Dot */}
                                    <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-red bg-steel-dark md:left-1/2 md:-translate-x-1/2">
                                        <div className="h-3 w-3 rounded-full bg-brand-red" />
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
                            <Link
                                href="https://wa.me/917695850762"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 rounded-sm bg-brand-green px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-steel-dark hover:text-white"
                            >
                                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
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
