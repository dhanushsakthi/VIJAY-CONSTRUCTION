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
        { href: "tel:+919443232172", label: "Founder: G.MATHIALAGAN (94432 32172)" },
        { href: "tel:+917695850762", label: "CEO : M.VIJAYANAND, M.E., Ph.D (76958 50762)" },
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
                                Founder: G.MATHIALAGAN
                                <br />
                                94432 32172
                            </a>
                            <a
                                href="tel:+917695850762"
                                className="mb-3 block text-lg font-semibold text-white transition-colors hover:text-brand-red sm:text-xl whitespace-nowrap"
                            >
                                CEO : M.VIJAYANAND <span className="text-xs font-normal">M.E., Ph.D</span>
                                <br />
                                76958 50762
                            </a>
                            <p className="mb-6 text-sm text-concrete">
                                Open daily, closes at 6:00 PM
                            </p>
                        </address>
                        {/* CTA Button */}
                        <Link
                            href="https://wa.me/917695850762"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-green px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-brand-green-dark hover:shadow-lg shadow-construction"
                        >
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Get Free Quote
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
