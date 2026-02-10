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
            <section className="relative min-h-[60vh] overflow-hidden bg-asphalt-dark">
                <BackgroundSlideshow />
                <DynamicBackground variant="hero" />
                <div className="container relative flex min-h-[60vh] items-center">
                    <div ref={heroContentRef} className="max-w-3xl pb-16 pt-32 lg:pt-40">
                        <span className="hero-animate mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-red">
                            Our Services
                        </span>
                        <h1 className="hero-animate heading-xl mb-6 text-white drop-shadow-sm">
                            Comprehensive <span className="text-brand-red">Construction</span> Solutions
                        </h1>
                        <p className="hero-animate body-lg text-white/90">
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
                    className={`section ${index % 2 === 0 ? "bg-white/40 backdrop-blur-sm" : "bg-concrete-50/40 backdrop-blur-sm"}`}
                >
                    <div className="container">
                        <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                            <div className={`order-2 ${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}>
                                <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-lg">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={800}
                                        height={600}
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
                                    href="https://wa.me/917695850762"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-red transition-colors hover:text-brand-red-dark"
                                >
                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Get a Quote
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
                        <Link
                            href="https://wa.me/917695850762"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-sm bg-brand-green px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-steel-dark hover:text-white"
                        >
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
