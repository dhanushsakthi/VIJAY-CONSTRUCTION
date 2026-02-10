"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { DynamicBackground } from "@/components/DynamicBackground/DynamicBackground";
import { BackgroundSlideshow } from "@/components/Background/BackgroundSlideshow";
import { AnimatedSection } from "@/components/UI/AnimatedSection";
import Image from "next/image";

export function ContactContent() {
    const heroContentRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Construct WhatsApp message
        const message = `*New Inquiry from Website*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Service:* ${formData.service}
*Details:* ${formData.message}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/917695850762?text=${encodedMessage}`;

        // Simulate a small delay for better UX before redirecting
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[50vh] overflow-hidden bg-asphalt-dark">
                <BackgroundSlideshow />
                <DynamicBackground variant="hero" />
                <div className="container relative flex min-h-[50vh] items-center">
                    <div ref={heroContentRef} className="max-w-3xl pb-16 pt-32 lg:pt-40">
                        <span className="hero-animate mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-red">
                            Contact Us
                        </span>
                        <h1 className="hero-animate heading-xl mb-6 text-white drop-shadow-sm">
                            Let&apos;s Build <span className="text-brand-red-light">Together</span>
                        </h1>
                        <p className="hero-animate body-lg text-white/90 drop-shadow-sm">
                            Ready to start your construction project? Get in touch with us today
                            for a free consultation and quote.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <AnimatedSection className="section">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Contact Form */}
                        <div className="order-2 lg:order-1 bg-white/60 backdrop-blur-md rounded-lg p-8 border border-white/40 shadow-lg">
                            <h2 className="heading-md mb-6 text-steel-dark flex items-center gap-2">
                                Get a <span className="text-brand-red">Free Quote via WhatsApp</span>
                            </h2>
                            <p className="body-md mb-8 text-concrete-dark">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>

                            {isSubmitted ? (
                                <div className="rounded-sm bg-brand-green/20 p-8 text-center border border-brand-green/30">
                                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-green text-white">
                                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 font-display text-xl font-bold text-white">
                                        Thank You!
                                    </h3>
                                    <p className="text-white/80">
                                        Your message has been sent. We&apos;ll get back to you soon.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-steel-dark">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full rounded-sm border border-steel-dark/20 bg-white/50 px-4 py-3 text-steel-dark transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 placeholder:text-concrete-dark/50"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-steel-dark">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full rounded-sm border border-steel-dark/20 bg-white/50 px-4 py-3 text-steel-dark transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 placeholder:text-concrete-dark/50"
                                                placeholder="Your phone number"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-steel-dark">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full rounded-sm border border-steel-dark/20 bg-white/50 px-4 py-3 text-steel-dark transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 placeholder:text-concrete-dark/50"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="mb-2 block text-sm font-medium text-steel-dark">
                                            Service Required *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full rounded-sm border border-steel-dark/20 bg-white/50 px-4 py-3 text-steel-dark transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                                        >
                                            <option value="" className="text-black">Select a service</option>
                                            <option value="residential" className="text-black">Residential Construction</option>
                                            <option value="commercial" className="text-black">Commercial Building</option>
                                            <option value="renovation" className="text-black">Renovation & Remodeling</option>
                                            <option value="civil" className="text-black">Civil Engineering</option>
                                            <option value="other" className="text-black">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-steel-dark">
                                            Project Details *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full resize-none rounded-sm border border-steel-dark/20 bg-white/50 px-4 py-3 text-steel-dark transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 placeholder:text-concrete-dark/50"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            "Submit Inquiry"
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="order-1 lg:order-2 bg-white/60 backdrop-blur-md rounded-lg p-8 border border-white/40 h-fit shadow-lg">
                            <div className="rounded-sm bg-steel-dark p-8 text-white lg:p-10 border border-white/10">
                                <h3 className="mb-6 font-display text-2xl font-bold">Contact Information</h3>

                                {/* Founder */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-green">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-1 text-sm uppercase tracking-wider text-concrete">Founder</p>
                                        <a href="tel:+919443232172" className="text-xl font-semibold transition-colors hover:text-brand-green">
                                            G.MATHIALAGAN<br />
                                            94432 32172
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-red">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-1 text-sm uppercase tracking-wider text-concrete whitespace-nowrap">CEO : M.VIJAYANAND <span className="text-[10px] font-normal">M.E., Ph.D</span></p>
                                        <a href="tel:+917695850762" className="text-xl font-semibold transition-colors hover:text-brand-green">
                                            76958 50762
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-green">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-1 text-sm uppercase tracking-wider text-concrete">Office Address</p>
                                        <p className="font-medium">
                                            256/2, 1st Street, Jerinakadu<br />
                                            Yercaud, Salem<br />
                                            Tamil Nadu – 636601
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-1 text-sm uppercase tracking-wider text-concrete">Business Hours</p>
                                        <p className="font-medium">Open daily, closes at 6:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Google Rating */}
                            <div className="mt-8 rounded-sm bg-white/10 p-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="font-semibold">4.9</span>
                                    <span className="text-sm text-concrete">(55 reviews on Google)</span>
                                </div>
                            </div>

                            {/* Service Area */}
                            <div className="mt-6 rounded-sm border border-white/10 p-4">
                                <p className="mb-2 text-sm uppercase tracking-wider text-brand-green">Service Area</p>
                                <p className="text-sm text-concrete">
                                    We serve the entire Yercaud and Salem region in Tamil Nadu.
                                    Contact us to check if your location is covered.
                                </p>
                            </div>
                        </div>

                        {/* Map placeholder */}
                        <div className="mt-6 aspect-video overflow-hidden rounded-sm bg-concrete-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.9787851668847!2d78.20699!3d11.775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ2JzMwLjAiTiA3OMKwMTInMjUuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Vijay Constructions Location"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
}
