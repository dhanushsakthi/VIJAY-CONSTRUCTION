"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
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
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority
                        className="h-full w-full object-cover"
                        sizes="100vw"
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
            <AnimatedSection className="section bg-white/40 backdrop-blur-sm">
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
                                            <Image
                                                src={img}
                                                alt={`${project.title} detail ${idx + 1}`}
                                                width={600}
                                                height={450}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="space-y-8">
                            {project.externalLink && (
                                <div className="rounded-sm bg-brand-green p-8 text-white">
                                    <h3 className="font-display text-lg font-bold mb-4">🏨 Book Your Stay</h3>
                                    <p className="text-sm text-white/90 mb-6">
                                        Experience this beautiful property yourself! Book your stay now on Booking.com.
                                    </p>
                                    <a
                                        href={project.externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full rounded-sm bg-white px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-brand-green shadow-lg transition-all duration-300 hover:bg-steel-dark hover:text-white"
                                    >
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Book Now on Booking.com
                                    </a>
                                </div>
                            )}

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
                                <Link
                                    href="https://wa.me/917695850762"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center gap-2 w-full rounded-sm bg-brand-green px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-brand-green"
                                >
                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
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
