"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { DynamicBackground } from "@/components/DynamicBackground/DynamicBackground";
import { BackgroundSlideshow } from "@/components/Background/BackgroundSlideshow";
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
            <section className="relative min-h-[60vh] overflow-hidden bg-asphalt-dark">
                <BackgroundSlideshow />
                <DynamicBackground variant="hero" />
                <div className="container relative flex min-h-[60vh] items-center">
                    <div ref={heroContentRef} className="max-w-3xl pb-16 pt-32 lg:pt-40">
                        <span className="hero-animate mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-red">
                            Our Portfolio
                        </span>
                        <h1 className="hero-animate heading-xl mb-6 text-white drop-shadow-sm">
                            Projects That <span className="text-brand-red">Speak</span> Quality
                        </h1>
                        <p className="hero-animate body-lg text-white/90">
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
                        <Link
                            href="https://wa.me/917695850762"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 rounded-sm bg-brand-red px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-steel-dark hover:text-white"
                        >
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Get Free Quote
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
