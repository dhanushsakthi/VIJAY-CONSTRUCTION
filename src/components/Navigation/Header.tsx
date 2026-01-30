"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/why-choose-us", label: "Why Choose Us" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Header reveal animation
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.3,
                    ease: "power3.out",
                }
            );
        }
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                ref={headerRef}
                className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-[#E8E4E0]/80 shadow-construction backdrop-blur-md"
                    : "bg-transparent"
                    }`}
            >
                <div className="container">
                    <nav className="flex h-20 items-center justify-between lg:h-24">
                        {/* Logo */}
                        <Link href="/" className="group relative z-10 transition-transform duration-300 hover:scale-[1.02]">
                            <div className="flex items-center gap-3 lg:gap-5">
                                {/* Logo Image */}
                                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-sm transition-transform duration-300 group-hover:scale-105">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Vijay Constructions Logo"
                                        width={48}
                                        height={48}
                                        className="h-full w-full object-contain"
                                    />
                                    {/* Animated corner accent - adjusted for better visibility with white bg logo */}
                                    <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 bg-brand-green transition-all duration-300 group-hover:h-3 group-hover:w-3" />
                                </div>
                                {/* Logo Text */}
                                <div className={`hidden sm:flex items-center flex-nowrap transition-all duration-500 ${(pathname === "/" && !isScrolled) ? "opacity-0 translate-x-4 pointer-events-none" : "opacity-100 translate-x-0"}`}>
                                    <span
                                        className={`font-display text-xl lg:text-2xl font-bold tracking-tight whitespace-nowrap transition-colors duration-300 drop-shadow-sm ${isScrolled ? "text-steel-dark" : "text-steel-dark"}`}
                                    >
                                        VIJAY
                                    </span>
                                    <span
                                        className={`ml-2 lg:ml-3 font-display text-xl lg:text-2xl font-bold tracking-tight whitespace-nowrap transition-colors duration-300 drop-shadow-sm ${isScrolled ? "text-brand-green" : "text-brand-green"}`}
                                    >
                                        CONSTRUCTIONS
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center gap-1 lg:flex">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`group relative px-4 py-2 font-display text-sm font-medium tracking-wide transition-colors duration-300 ${pathname === link.href
                                        ? isScrolled
                                            ? "text-brand-red"
                                            : "text-brand-red"
                                        : isScrolled
                                            ? "text-steel hover:text-brand-red"
                                            : "text-steel-dark/80 hover:text-steel-dark"
                                        }`}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    {link.label.toUpperCase()}
                                    {/* Active indicator */}
                                    <span
                                        className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-brand-red transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-brand-red px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-brand-red-dark hover:shadow-xl"
                            >
                                <span className="relative z-10">Get Quote</span>
                                {/* Hover animation */}
                                <span className="absolute inset-0 -translate-x-full bg-brand-green transition-transform duration-500 ease-out group-hover:translate-x-0" />
                                <span className="absolute inset-0 translate-x-full bg-brand-green transition-transform duration-500 ease-out group-hover:translate-x-0" />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-sm transition-colors duration-300 lg:hidden ${isMobileMenuOpen
                                ? "bg-brand-red"
                                : isScrolled
                                    ? "bg-steel-dark"
                                    : "bg-white/20"
                                }`}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                        >
                            <div className="flex h-5 w-6 flex-col justify-center gap-1.5">
                                <span
                                    className={`h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                                        }`}
                                />
                                <span
                                    className={`h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "scale-x-0 opacity-0" : ""
                                        }`}
                                />
                                <span
                                    className={`h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                                        }`}
                                />
                            </div>
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-asphalt-dark/95 backdrop-blur-md lg:hidden"
                    >
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-steel-dark pt-24"
                        >

                            <div className="relative flex flex-col gap-2 px-8">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`group flex items-center gap-4 border-b border-white/10 py-4 font-display text-lg font-medium tracking-wide transition-colors ${pathname === link.href
                                                ? "text-brand-green"
                                                : "text-white hover:text-brand-green"
                                                }`}
                                        >
                                            <span
                                                className={`h-2 w-2 rounded-full transition-all duration-300 ${pathname === link.href
                                                    ? "bg-brand-green"
                                                    : "bg-white/30 group-hover:bg-brand-red"
                                                    }`}
                                            />
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Contact Info */}
                            <div className="mt-auto px-8 pb-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="rounded-sm bg-white/5 p-6"
                                >
                                    <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-brand-green">
                                        Contact Us
                                    </p>
                                    <a
                                        href="tel:+917695850762"
                                        className="mb-2 block text-2xl font-bold text-white hover:text-brand-red"
                                    >
                                        76958 50762
                                    </a>
                                    <p className="text-sm text-concrete">
                                        256/2, 1st Street, Jerinakadu
                                        <br />
                                        Yercaud, Salem - 636601
                                    </p>
                                </motion.div>
                            </div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
