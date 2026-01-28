"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { DynamicBackground } from "@/components/DynamicBackground/DynamicBackground";
import { AnimatedSection } from "@/components/UI/AnimatedSection";
import { projects } from "@/lib/data/projects";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Residential", "Commercial", "Renovation"];



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
                        <span className="hero-animate mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-red">
                            Our Portfolio
                        </span>
                        <h1 className="hero-animate heading-xl mb-6 text-steel-dark">
                            Projects That <span className="text-brand-red">Speak</span> Quality
                        </h1>
                        <p className="hero-animate body-lg text-concrete-dark">
                            Explore our collection of completed projects across residential, commercial,
                            and renovation categories in Yercaud and Salem region.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter & Projects Grid */}
            <AnimatedSection className="section bg-white/40 backdrop-blur-sm">
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
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                                className="project-item group relative block overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={450}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute left-4 top-4">
                                        <span className="inline-block rounded-sm bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="mb-2 font-display text-xl font-bold text-steel-dark group-hover:text-brand-red">
                                        {project.title}
                                    </h3>
                                    <p className="mb-4 line-clamp-2 text-sm text-concrete-dark">{project.description}</p>

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
                                            {project.year || (project.details && project.details.year)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                            </svg>
                                            {project.area || (project.details && project.details.area)}
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-red transition-all duration-500 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <section className="relative overflow-hidden bg-concrete-100 py-20">
                <div className="container relative">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="heading-md mb-6 text-steel-dark">
                            Ready to Start Your Project?
                        </h2>
                        <p className="body-md mb-8 text-concrete-dark">
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
