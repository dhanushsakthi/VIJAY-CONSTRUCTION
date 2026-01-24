"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { DynamicBackground } from "@/components/DynamicBackground/DynamicBackground";
import { AnimatedSection } from "@/components/UI/AnimatedSection";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Residential", "Commercial", "Renovation"];

const projects = [
    {
        id: 1,
        title: "Modern Villa Complex",
        category: "Residential",
        description: "Luxurious 5-villa complex with contemporary design and premium amenities.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        location: "Yercaud",
        year: "2024",
        area: "12,000 sq.ft",
    },
    {
        id: 2,
        title: "Commercial Plaza",
        category: "Commercial",
        description: "Multi-story commercial complex with modern office spaces and retail outlets.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        location: "Salem",
        year: "2023",
        area: "25,000 sq.ft",
    },
    {
        id: 3,
        title: "Luxury Apartments",
        category: "Residential",
        description: "Premium apartment complex with 24 units featuring modern amenities.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        location: "Yercaud",
        year: "2023",
        area: "35,000 sq.ft",
    },
    {
        id: 4,
        title: "Office Complex",
        category: "Commercial",
        description: "State-of-the-art office building with sustainable design features.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        location: "Salem",
        year: "2022",
        area: "18,000 sq.ft",
    },
    {
        id: 5,
        title: "Heritage Home Renovation",
        category: "Renovation",
        description: "Complete restoration of a traditional home with modern upgrades.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        location: "Yercaud",
        year: "2022",
        area: "4,500 sq.ft",
    },
    {
        id: 6,
        title: "Family Residence",
        category: "Residential",
        description: "Custom-designed family home with open-plan living and landscaped gardens.",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        location: "Salem",
        year: "2021",
        area: "3,200 sq.ft",
    },
    {
        id: 7,
        title: "Retail Shopping Center",
        category: "Commercial",
        description: "Modern shopping center with multiple retail spaces and parking facilities.",
        image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&h=600&fit=crop",
        location: "Salem",
        year: "2021",
        area: "42,000 sq.ft",
    },
    {
        id: 8,
        title: "Bungalow Remodeling",
        category: "Renovation",
        description: "Complete interior and exterior renovation of a 20-year-old bungalow.",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        location: "Yercaud",
        year: "2020",
        area: "2,800 sq.ft",
    },
];

export function ProjectsContent() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const heroContentRef = useRef<HTMLDivElement>(null);
    const projectsGridRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const filtered = activeFilter === "All"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

        setFilteredProjects(filtered);

        // Animate grid items
        if (projectsGridRef.current) {
            const items = projectsGridRef.current.querySelectorAll(".project-item");
            gsap.fromTo(
                items,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                }
            );
        }
    }, [activeFilter]);

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] overflow-hidden">
                <DynamicBackground variant="hero" />
                <div className="container relative flex min-h-[60vh] items-center">
                    <div ref={heroContentRef} className="max-w-3xl pb-16 pt-32 lg:pt-40">
                        <span className="hero-animate mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-green">
                            Our Portfolio
                        </span>
                        <h1 className="hero-animate heading-xl mb-6 text-white">
                            Projects That <span className="text-brand-green">Speak</span> Quality
                        </h1>
                        <p className="hero-animate body-lg text-white/70">
                            Explore our collection of completed projects across residential, commercial,
                            and renovation categories in Yercaud and Salem region.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter & Projects Grid */}
            <AnimatedSection className="section bg-white">
                <div className="container">
                    {/* Filter Buttons */}
                    <div className="mb-12 flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`rounded-sm px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider transition-all ${activeFilter === category
                                    ? "bg-brand-red text-white shadow-lg"
                                    : "bg-concrete-100 text-steel hover:bg-concrete-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div
                        ref={projectsGridRef}
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="project-item group relative overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute left-4 top-4">
                                        <span className="inline-block rounded-sm bg-brand-green px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="mb-2 font-display text-xl font-bold text-steel-dark group-hover:text-brand-red">
                                        {project.title}
                                    </h3>
                                    <p className="mb-4 text-sm text-concrete-dark">{project.description}</p>

                                    {/* Meta info */}
                                    <div className="flex flex-wrap gap-4 text-xs text-concrete">
                                        <span className="flex items-center gap-1">
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {project.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {project.year}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                            </svg>
                                            {project.area}
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-red to-brand-green transition-all duration-500 group-hover:w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <section className="relative overflow-hidden bg-steel-dark py-20">
                <div className="container relative">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="heading-md mb-6 text-white">
                            Ready to Start Your Project?
                        </h2>
                        <p className="body-md mb-8 text-concrete">
                            Join our list of satisfied clients. Let&apos;s build something amazing together.
                        </p>
                        <Link href="/contact" className="btn btn-primary">
                            Get Free Quote
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
