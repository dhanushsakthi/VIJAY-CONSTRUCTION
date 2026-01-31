import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    company: [
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Our Services" },
        { href: "/projects", label: "Projects" },
        { href: "/why-choose-us", label: "Why Choose Us" },
    ],
    services: [
        { href: "/services#residential", label: "Residential Construction" },
        { href: "/services#commercial", label: "Commercial Construction" },
        { href: "/services#renovation", label: "Renovation Services" },
        { href: "/services#civil", label: "Civil Engineering" },
    ],
    contact: [
        { href: "tel:+919443232172", label: "Founder: 94432 32172" },
        { href: "tel:+917695850762", label: "76958 50762" },
        { href: "mailto:contact@vijayconstructions.in", label: "Email Us" },
        { href: "/contact", label: "Get in Touch" },
    ],
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-steel-dark/90 backdrop-blur-md text-white">

            {/* Main Footer Content */}
            <div className="container relative pt-16 pb-16 lg:pt-48 lg:pb-20">
                <div className="grid gap-y-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-x-12">
                    {/* Brand Section */}
                    <div className="flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left">
                        <Link href="/" className="inline-block transition-transform duration-300 hover:scale-[1.02]">
                            <div className="flex items-center gap-4 flex-nowrap">
                                {/* Logo Image */}
                                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-sm transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Vijay Constructions Logo"
                                        width={48}
                                        height={48}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <div>
                                    <span className="font-display text-xl font-bold text-white sm:text-2xl tracking-wide whitespace-nowrap">VIJAY</span>
                                    <span className="ml-2 font-display text-xl font-bold text-brand-green sm:text-2xl tracking-wide whitespace-nowrap">
                                        CONSTRUCTIONS
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <p className="mt-6 max-w-sm text-sm leading-relaxed text-concrete">
                            Building excellence in Yercaud and Salem region since years. We
                            transform your vision into concrete reality with precision,
                            quality, and dedication.
                        </p>
                        {/* Rating Badge */}
                        <div className="mt-6 inline-flex items-center gap-2 rounded-sm bg-white/10 px-4 py-2">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="h-4 w-4 fill-yellow-400"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm font-semibold">4.9</span>
                            <span className="text-sm text-concrete">(55 reviews)</span>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-brand-green">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-sm text-concrete transition-colors hover:text-white"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-brand-red opacity-0 transition-opacity group-hover:opacity-100" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-brand-green">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-sm text-concrete transition-colors hover:text-white"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-brand-red opacity-0 transition-opacity group-hover:opacity-100" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-brand-green">
                            Contact
                        </h3>
                        <address className="not-italic">
                            <p className="mb-6 text-sm text-concrete">
                                256/2, 1st Street, Jerinakadu
                                <br />
                                Yercaud, Salem
                                <br />
                                Tamil Nadu – 636601
                            </p>
                            <a
                                href="tel:+919443232172"
                                className="mb-2 block text-lg font-semibold text-white transition-colors hover:text-brand-red sm:text-xl"
                            >
                                Founder: 94432 32172
                            </a>
                            <a
                                href="tel:+917695850762"
                                className="mb-3 block text-lg font-semibold text-white transition-colors hover:text-brand-red sm:text-xl"
                            >
                                76958 50762
                            </a>
                            <p className="mb-6 text-sm text-concrete">
                                Open daily, closes at 6:00 PM
                            </p>
                        </address>
                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-red px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-brand-red-dark hover:shadow-lg"
                        >
                            Get Free Quote
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
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container py-6">
                    <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                        <p className="text-sm text-concrete">
                            © {currentYear} Vijay Constructions. All rights reserved.
                        </p>
                        <p className="text-sm text-concrete">
                            Serving Yercaud & Salem region with excellence
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-green to-brand-red" />
        </footer>
    );
}
