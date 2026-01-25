"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { DynamicBackground } from "@/components/DynamicBackground/DynamicBackground";
import { AnimatedSection } from "@/components/UI/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "residential",
        title: "Residential Construction",
        subtitle: "Building Dream Homes",
        description: "From cozy family homes to luxurious villas, we create living spaces that combine comfort, style, and durability. Our residential projects feature premium materials, modern designs, and meticulous attention to detail.",
        features: [
            "Custom home design and construction",
            "Villa and bungalow projects",
            "Multi-story residential buildings",
            "Premium finishing and interiors",
            "Energy-efficient construction",
            "Earthquake-resistant structures",
        ],
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    },
    {
        id: "commercial",
        title: "Commercial Building",
        subtitle: "Spaces That Inspire Success",
        description: "We construct commercial spaces that enhance productivity and make powerful impressions. Our commercial projects are designed for functionality, aesthetics, and long-term value.",
        features: [
            "Office buildings and complexes",
            "Retail and shopping spaces",
            "Industrial facilities",
            "Warehouses and logistics centers",
            "Hospitality projects",
            "Mixed-use developments",
        ],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    },
    {
        id: "renovation",
        title: "Renovation & Remodeling",
        subtitle: "Transforming Existing Spaces",
        description: "Give your property a new life with our expert renovation services. We modernize, expand, and enhance existing structures while preserving their essential character.",
        features: [
            "Complete home renovations",
            "Kitchen and bathroom remodeling",
            "Structural modifications",
            "Extension and additions",
            "Interior redesign",
            "Exterior facelift",
        ],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
    },
    {
        id: "civil",
        title: "Civil Engineering",
        subtitle: "Engineering Excellence",
        description: "Our civil engineering expertise covers the full spectrum of infrastructure development. From site analysis to project completion, we deliver engineered solutions that stand the test of time.",
        features: [
            "Structural design and analysis",
            "Site development and grading",
            "Foundation engineering",
            "Road and pavement construction",
            "Drainage and sewage systems",
            "Project consulting",
        ],
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    },
];

export function ServicesContent() {
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
                        <span className="hero-animate mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-red">
                            Our Services
                        </span>
                        <h1 className="hero-animate heading-xl mb-6 text-steel-dark">
                            Comprehensive <span className="text-brand-red">Construction</span> Solutions
                        </h1>
                        <p className="hero-animate body-lg text-concrete-dark">
                            From concept to completion, we offer end-to-end construction and civil engineering
                            services tailored to your unique requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services List */}
            {services.map((service, index) => (
                <AnimatedSection
                    key={service.id}
                    id={service.id}
                    className={`section ${index % 2 === 0 ? "bg-white" : "bg-concrete-50"}`}
                >
                    <div className="container">
                        <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                            <div className={`order-2 ${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}>
                                <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-lg">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </div>
                            <div className={`order-1 flex flex-col justify-center ${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}>
                                <span className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
                                    {service.subtitle}
                                </span>
                                <h2 className="heading-md mb-4 text-steel-dark">{service.title}</h2>
                                <p className="body-md mb-6 text-concrete-dark">{service.description}</p>

                                <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm text-steel">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-red transition-colors hover:text-brand-red-dark"
                                >
                                    Get a Quote
                                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            ))}

            {/* CTA Section */}
            <section className="relative overflow-hidden bg-brand-red py-20">
                <div className="container relative">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="heading-md mb-6 text-white">
                            Need a Custom Solution?
                        </h2>
                        <p className="body-md mb-8 text-white/80">
                            We understand that every project is unique. Contact us to discuss your
                            specific requirements and get a tailored solution.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-sm bg-white px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-brand-red shadow-lg transition-all hover:bg-steel-dark hover:text-white">
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
