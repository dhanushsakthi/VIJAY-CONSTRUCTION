"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { DynamicBackground } from "@/components/DynamicBackground/DynamicBackground";

const benefits = [
    "30+ Years of Experience",
    "4.9★ Google Rating",
    "50+ Projects Completed",
    "Transparent Pricing",
    "On-Time Delivery",
    "Quality Guarantee",
];

export function LandingContent() {
    const contentRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "",
        location: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (contentRef.current) {
            const elements = contentRef.current.querySelectorAll(".animate-in");
            gsap.fromTo(
                elements,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    delay: 0.3,
                    ease: "power3.out",
                }
            );
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            <DynamicBackground variant="hero" />

            <div className="container relative flex min-h-screen items-center py-20">
                <div
                    ref={contentRef}
                    className="grid w-full gap-12 lg:grid-cols-2 lg:gap-16"
                >
                    {/* Left Content */}
                    <div className="flex flex-col justify-center pt-16 lg:pt-0">
                        {/* Badge */}
                        <div className="animate-in mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
                            </span>
                            <span className="text-sm font-medium text-white">
                                Limited Time Offer
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="animate-in mb-6 font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                            Build Your Dream Home in{" "}
                            <span className="text-brand-green">Yercaud & Salem</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="animate-in mb-8 text-lg text-white/70 md:text-xl">
                            Get a <strong className="text-brand-red">FREE consultation</strong> and
                            quote from the region&apos;s most trusted construction company with
                            <strong className="text-brand-green"> 4.9★ rating</strong>.
                        </p>

                        {/* Benefits */}
                        <div className="animate-in mb-8 grid grid-cols-2 gap-3">
                            {benefits.map((benefit) => (
                                <div key={benefit} className="flex items-center gap-2">
                                    <svg
                                        className="h-5 w-5 flex-shrink-0 text-brand-green"
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
                                    <span className="text-sm text-white/80">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* Trust Indicators */}
                        <div className="animate-in flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
                            <div className="text-center">
                                <div className="font-display text-3xl font-bold text-white">
                                    55+
                                </div>
                                <div className="text-xs uppercase tracking-wider text-concrete">
                                    Happy Clients
                                </div>
                            </div>
                            <div className="h-12 w-px bg-white/20" />
                            <div className="text-center">
                                <div className="font-display text-3xl font-bold text-white">
                                    50+
                                </div>
                                <div className="text-xs uppercase tracking-wider text-concrete">
                                    Projects
                                </div>
                            </div>
                            <div className="h-12 w-px bg-white/20" />
                            <div className="text-center">
                                <div className="flex items-center gap-1 font-display text-3xl font-bold text-white">
                                    4.9
                                    <svg
                                        className="h-6 w-6 fill-yellow-400"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <div className="text-xs uppercase tracking-wider text-concrete">
                                    Google Rating
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="animate-in">
                        <div className="rounded-sm bg-white p-6 shadow-2xl md:p-8 lg:p-10">
                            {isSubmitted ? (
                                <div className="py-12 text-center">
                                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-green text-white">
                                        <svg
                                            className="h-10 w-10"
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
                                    </div>
                                    <h3 className="mb-3 font-display text-2xl font-bold text-steel-dark">
                                        Thank You!
                                    </h3>
                                    <p className="mb-6 text-concrete-dark">
                                        Your request has been submitted successfully. Our team will
                                        contact you within 24 hours.
                                    </p>
                                    <a
                                        href="tel:+917695850762"
                                        className="inline-flex items-center gap-2 font-semibold text-brand-red hover:underline"
                                    >
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
                                        Call us now: 76958 50762
                                    </a>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-6 text-center">
                                        <h2 className="mb-2 font-display text-2xl font-bold text-steel-dark">
                                            Get Your Free Quote
                                        </h2>
                                        <p className="text-sm text-concrete-dark">
                                            Fill in your details and we&apos;ll get back to you within 24 hours
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="mb-2 block text-sm font-medium text-steel-dark"
                                            >
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full rounded-sm border border-concrete-light px-4 py-3 text-steel-dark transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="mb-2 block text-sm font-medium text-steel-dark"
                                            >
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full rounded-sm border border-concrete-light px-4 py-3 text-steel-dark transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                                                placeholder="Your contact number"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="service"
                                                className="mb-2 block text-sm font-medium text-steel-dark"
                                            >
                                                What do you need? *
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                required
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full rounded-sm border border-concrete-light px-4 py-3 text-steel-dark transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="new-home">Build New Home</option>
                                                <option value="commercial">Commercial Building</option>
                                                <option value="renovation">Renovation</option>
                                                <option value="consultation">Just Consultation</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="location"
                                                className="mb-2 block text-sm font-medium text-steel-dark"
                                            >
                                                Project Location
                                            </label>
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                className="w-full rounded-sm border border-concrete-light px-4 py-3 text-steel-dark transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                                                placeholder="City/Area in Yercaud or Salem"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full rounded-sm bg-brand-red py-4 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-brand-red-dark hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg
                                                        className="h-5 w-5 animate-spin"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        />
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        />
                                                    </svg>
                                                    Processing...
                                                </span>
                                            ) : (
                                                "Get Free Quote Now"
                                            )}
                                        </button>
                                    </form>

                                    <p className="mt-4 text-center text-xs text-concrete">
                                        By submitting, you agree to be contacted by our team.
                                        <br />
                                        We respect your privacy and never share your information.
                                    </p>
                                </>
                            )}
                        </div>

                        {/* Urgency */}
                        <div className="mt-4 text-center">
                            <p className="text-sm text-white/60">
                                ⚡ Limited slots available for January 2026 projects
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to main site link */}
            <div className="absolute left-0 right-0 top-4 z-10">
                <div className="container">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
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
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to Website
                    </Link>
                </div>
            </div>
        </div>
    );
}
