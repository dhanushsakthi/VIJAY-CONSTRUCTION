"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { DynamicBackground } from "@/components/DynamicBackground/DynamicBackground";
import { BackgroundSlideshow } from "@/components/Background/BackgroundSlideshow";
import { AnimatedSection } from "@/components/UI/AnimatedSection";
import { StatsCounter } from "@/components/UI/StatsCounter";
import { ServiceCard } from "@/components/UI/ServiceCard";
import { ProjectCard } from "@/components/UI/ProjectCard";
import { TestimonialCard } from "@/components/UI/TestimonialCard";
import { ProcessStep } from "@/components/UI/ProcessStep";
import { projects as projectsData } from "@/lib/data/projects";

gsap.registerPlugin(ScrollTrigger);

// Data
const services = [
    {
        id: 1,
        title: "Residential Construction",
        description:
            "Premium homes built with precision and care. From modern villas to traditional houses.",
        icon: "home",
    },
    {
        id: 2,
        title: "Commercial Building",
        description:
            "Commercial spaces that inspire productivity. Offices, retail, and industrial facilities.",
        icon: "building",
    },
    {
        id: 3,
        title: "Renovation & Remodeling",
        description:
            "Transform your existing space with our expert renovation and remodeling services.",
        icon: "renovation",
    },
    {
        id: 4,
        title: "Civil Engineering",
        description:
            "Complete civil engineering solutions including structural design and site development.",
        icon: "engineering",
    },
];

const projects = projectsData.slice(0, 4);

const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Homeowner",
        content:
            "Vijay Constructions built our dream home with exceptional quality. Their attention to detail and commitment to timelines impressed us throughout the project.",
        rating: 5,
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Business Owner",
        content:
            "Professional team that delivered our commercial building on time and within budget. Highly recommend their services for any construction needs.",
        rating: 5,
    },
    {
        id: 3,
        name: "Anand Vijay",
        role: "Property Developer",
        content:
            "Working with Vijay Constructions has been a pleasure. Their engineering expertise and quality materials make them stand out in the industry.",
        rating: 5,
    },
];

const stats = [
    { value: 55, suffix: "+", label: "Happy Clients" },
    { value: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
    { value: 50, suffix: "+", label: "Projects Completed" },
    { value: 30, suffix: "+", label: "Years Experience" },
];

const processSteps = [
    {
        step: 1,
        title: "Consultation",
        description: "We discuss your vision, requirements, and budget to understand your needs.",
    },
    {
        step: 2,
        title: "Design & Planning",
        description: "Our engineers create detailed plans and 3D visualizations for your approval.",
    },
    {
        step: 3,
        title: "Construction",
        description: "Expert execution with quality materials and skilled craftsmanship.",
    },
    {
        step: 4,
        title: "Handover",
        description: "Final inspection, documentation, and handing over the keys to your dream.",
    },
];

export default function HomePage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const heroContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Hero content animation
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
                    delay: 0.5,
                    ease: "power3.out",
                }
            );
        }

        // Parallax effect on hero
        if (heroRef.current) {
            gsap.to(heroRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
                y: -150,
                opacity: 0.5,
            });
        }
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[100dvh] lg:overflow-hidden bg-asphalt-dark">
                <BackgroundSlideshow />
                <DynamicBackground variant="hero" />

                {/* Hero Content */}
                <div className="container relative flex min-h-[100dvh] items-center">
                    <div
                        ref={heroContentRef}
                        className="max-w-4xl pb-32 pt-32 lg:pb-24 lg:pt-40"
                    >
                        {/* Badge */}
                        <div className="hero-animate mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                            <span className="flex h-2 w-2 rounded-full bg-brand-green-light">
                                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-brand-green-light opacity-75" />
                            </span>
                            <span className="text-sm font-medium text-white/80">
                                Serving Yercaud & Salem Region
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="hero-animate heading-xl mb-6 text-white drop-shadow-sm">
                            U dream{" "}
                            <span className="relative inline-block text-brand-green-light">
                                We build
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="hero-animate body-lg mb-8 max-w-2xl text-white/90 drop-shadow-sm">
                            Premier civil engineering and construction company transforming
                            visions into reality. With{" "}
                            <span className="font-semibold text-brand-red-light">4.9★ rating</span>{" "}
                            and{" "}
                            <span className="font-semibold text-brand-green-light">55+ happy clients</span>,
                            we deliver quality that stands the test of time.
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero-animate flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-brand-red px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Free Quote
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
                                </span>
                                <span className="absolute inset-0 -translate-x-full bg-brand-red-dark transition-transform duration-500 group-hover:translate-x-0" />
                            </Link>

                            <Link
                                href="/projects"
                                className="group inline-flex items-center justify-center rounded-sm border-2 border-white/30 px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/10"
                            >
                                <span className="flex items-center gap-2">
                                    View Projects
                                    <svg
                                        className="h-4 w-4 transition-transform group-hover:rotate-45"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </span>
                            </Link>
                        </div>

                        {/* Contact Quick Info */}
                        <div className="hero-animate mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
                            <a
                                href="tel:+917695850762"
                                className="group flex items-center gap-3 text-white transition-colors hover:text-brand-green-light"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-brand-green/20">
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </span>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/50">
                                        Call Us
                                    </p>
                                    <p className="font-display font-semibold">76958 50762</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-3 text-white">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                                    <svg
                                        className="h-5 w-5"
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
                                </span>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/50">
                                        Location
                                    </p>
                                    <p className="font-display font-semibold">Yercaud, Salem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            {/* Stats Section */}
            <section className="relative z-10 lg:-mt-20">
                <div className="container">
                    <div className="grid gap-4 rounded-sm bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-2xl sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
                        {stats.map((stat, index) => (
                            <StatsCounter key={index} {...stat} delay={index * 0.1} isHero />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <AnimatedSection className="section bg-white/40 backdrop-blur-sm">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Content */}
                        <div className="flex flex-col justify-center">
                            <span className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-green">
                                About Vijay Constructions
                            </span>
                            <h2 className="heading-lg mb-2 text-steel-dark">
                                Er.M.Vijayanand <span className="text-brand-red text-sm font-normal block mt-1">M.E., Ph.D. — CEO</span>
                            </h2>
                            <h3 className="heading-md mb-6 text-steel">
                                Building Excellence in <span className="text-brand-green">Yercaud & Salem</span>
                            </h3>
                            <p className="body-md mb-6 text-concrete-dark">
                                Vijay Constructions is a premier civil engineering and real
                                estate construction company serving the Yercaud and Salem
                                region. With years of expertise and a commitment to quality, we
                                transform architectural visions into lasting structures.
                            </p>
                            <p className="body-md mb-8 text-concrete-dark">
                                Our team of skilled engineers and craftsmen combines traditional
                                building wisdom with modern construction techniques to deliver
                                projects that exceed expectations.
                            </p>

                            {/* Features */}
                            <div className="mb-8 grid gap-4 sm:grid-cols-2">
                                {[
                                    "Quality Materials",
                                    "Expert Engineers",
                                    "Timely Delivery",
                                    "Transparent Pricing",
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/10">
                                            <svg
                                                className="h-4 w-4 text-brand-green"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-sm font-medium text-steel-dark">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-red transition-colors hover:text-brand-red-dark"
                            >
                                Learn More About Us
                                <svg
                                    className="h-4 w-4 transition-transform group-hover:translate-x-2"
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
                            </Link>
                        </div>

                        {/* Image Grid */}
                        <div className="relative grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                                        alt="Construction site"
                                        width={400}
                                        height={300}
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="aspect-square overflow-hidden rounded-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                                        alt="Construction work"
                                        width={400}
                                        height={400}
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                            </div>
                            <div className="mt-8 space-y-4">
                                <div className="aspect-square overflow-hidden rounded-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                                        alt="Building project"
                                        width={400}
                                        height={400}
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=800&q=80"
                                        alt="Completed project"
                                        width={400}
                                        height={300}
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-brand-red text-white shadow-lg">
                                    <span className="font-display text-3xl font-bold">30+</span>
                                    <span className="text-xs uppercase tracking-wider">
                                        Years
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Services Section */}
            <AnimatedSection className="section bg-concrete-50/40 backdrop-blur-sm">
                <div className="container">
                    <div className="mb-12 text-center lg:mb-16">
                        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-green">
                            What We Do
                        </span>
                        <h2 className="heading-lg mb-4 text-steel-dark">
                            Our <span className="text-brand-red">Services</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-concrete-dark">
                            Comprehensive construction and civil engineering solutions
                            tailored to your needs
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <ServiceCard key={service.id} {...service} delay={index * 0.1} />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/services"
                            className="btn btn-primary inline-flex items-center gap-2"
                        >
                            View All Services
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
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </AnimatedSection>

            {/* Process Section */}
            <AnimatedSection className="section bg-concrete-100/40 backdrop-blur-sm">
                <div className="container">
                    <div className="mb-12 text-center lg:mb-16">
                        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-green">
                            How We Work
                        </span>
                        <h2 className="heading-lg mb-4 text-steel-dark">
                            Our <span className="text-brand-red">Process</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-concrete-dark">
                            A systematic approach to delivering excellence in every project
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {processSteps.map((step, index) => (
                            <ProcessStep
                                key={step.step}
                                {...step}
                                isLast={index === processSteps.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Projects Section */}
            <AnimatedSection className="section bg-white/40 backdrop-blur-sm">
                <div className="container">
                    <div className="mb-12 flex flex-col items-center justify-between gap-6 lg:mb-16 lg:flex-row">
                        <div>
                            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-green">
                                Our Portfolio
                            </span>
                            <h2 className="heading-lg text-steel-dark">
                                Featured <span className="text-brand-red">Projects</span>
                            </h2>
                        </div>
                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-steel-dark transition-colors hover:text-brand-red"
                        >
                            View All Projects
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-2"
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
                        </Link>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} {...project} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Testimonials Section */}
            <AnimatedSection className="section bg-concrete-50/40 backdrop-blur-sm">
                <div className="container">
                    <div className="mb-12 text-center lg:mb-16">
                        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-green">
                            Testimonials
                        </span>
                        <h2 className="heading-lg mb-4 text-steel-dark">
                            What Our <span className="text-brand-red">Clients Say</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-concrete-dark">
                            Don&apos;t just take our word for it - hear from our satisfied clients
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={testimonial.id}
                                {...testimonial}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <section className="relative overflow-hidden bg-brand-red pt-20 pb-12 lg:pt-24 lg:pb-40">

                <div className="container relative">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="heading-lg mb-6 text-white">
                            Ready to Build Your Dream?
                        </h2>
                        <p className="body-lg mb-8 text-white/80">
                            Contact us today for a free consultation and quote. Let&apos;s bring
                            your vision to life with quality construction.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group rounded-sm bg-white px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-brand-red shadow-lg transition-all duration-300 hover:bg-steel-dark hover:text-white"
                            >
                                Get Free Quote
                            </Link>
                            <a
                                href="tel:+917695850762"
                                className="group flex items-center gap-2 rounded-sm border-2 border-white px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-brand-red"
                            >
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
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
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
