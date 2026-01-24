"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { DynamicBackground } from "@/components/DynamicBackground/DynamicBackground";
import { AnimatedSection } from "@/components/UI/AnimatedSection";
import { Project } from "@/lib/data/projects";

interface ProjectDetailContentProps {
    project: Project;
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
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
    }, [project.id]);

    return (
        <>
            {/* Project Hero */}
            <section className="relative min-h-[70vh] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-steel-black/70 backdrop-blur-[2px]" />
                </div>

                <div className="container relative z-10 flex min-h-[70vh] items-center">
                    <div ref={heroContentRef} className="max-w-4xl pb-16 pt-32 lg:pt-40">
                        <Link
                            href="/projects"
                            className="hero-animate mb-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-green hover:text-white transition-colors"
                        >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Portfolio
                        </Link>
                        <span className="hero-animate block mb-4 text-sm font-semibold uppercase tracking-wider text-brand-green">
                            {project.category}
                        </span>
                        <h1 className="hero-animate heading-xl mb-6 text-white">
                            {project.title}
                        </h1>
                        <div className="hero-animate flex flex-wrap gap-8 border-t border-white/10 pt-8 mt-8">
                            <div>
                                <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Location</p>
                                <p className="font-display font-semibold text-white">{project.location}</p>
                            </div>
                            {project.details.year && (
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Year</p>
                                    <p className="font-display font-semibold text-white">{project.details.year}</p>
                                </div>
                            )}
                            {project.details.area && (
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Scale</p>
                                    <p className="font-display font-semibold text-white">{project.details.area}</p>
                                </div>
                            )}
                            {project.details.status && (
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Status</p>
                                    <p className="font-display font-semibold text-brand-green">{project.details.status}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <AnimatedSection className="section bg-white">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
                        <div className="lg:col-span-2">
                            <h2 className="heading-md mb-6 text-steel-dark font-bold">
                                Project <span className="text-brand-red">Overview</span>
                            </h2>
                            <p className="body-lg text-concrete-dark mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            {project.gallery && project.gallery.length > 0 && (
                                <div className="grid gap-4 sm:grid-cols-2 mt-12">
                                    {project.gallery.map((img, idx) => (
                                        <div key={idx} className="aspect-[4/3] overflow-hidden rounded-sm group">
                                            <img
                                                src={img}
                                                alt={`${project.title} detail ${idx + 1}`}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="space-y-8">
                            <div className="rounded-sm bg-concrete-50 p-8 border-l-4 border-brand-red">
                                <h3 className="font-display text-lg font-bold text-steel-dark mb-4">Project Highlights</h3>
                                <ul className="space-y-3">
                                    {Object.entries(project.details).map(([key, value]) => (
                                        <li key={key} className="flex justify-between border-b border-concrete-200 pb-2 last:border-0">
                                            <span className="text-sm uppercase text-concrete-600">{key}</span>
                                            <span className="text-sm font-semibold text-steel-dark">{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-sm bg-steel-dark p-8 text-white">
                                <h3 className="font-display text-lg font-bold mb-4">Interested in a similar project?</h3>
                                <p className="text-sm text-concrete mb-6">
                                    Let&apos;s discuss how we can bring your architectural vision to life with the same level of precision and quality.
                                </p>
                                <Link href="/contact" className="btn btn-primary w-full text-center py-3">
                                    Get a Free Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
}
