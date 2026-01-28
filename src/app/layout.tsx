import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ConstructionLoader } from "@/components/Loader/ConstructionLoader";
import { SmoothScrollProvider } from "@/components/Providers/SmoothScrollProvider";
import { Header } from "@/components/Navigation/Header";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://vijayconstructions.in"),
    title: {
        default: "Vijay Constructions | Premier Civil Engineering & Real Estate Builders in Yercaud, Salem",
        template: "%s | Vijay Constructions",
    },
    description:
        "Vijay Constructions - Leading civil engineering and real estate construction company in Yercaud & Salem, Tamil Nadu. 4.9★ rated with 55+ reviews. Quality residential & commercial construction services.",
    keywords: [
        "Vijay Constructions",
        "construction company Yercaud",
        "civil engineering Salem",
        "real estate builders Tamil Nadu",
        "residential construction Yercaud",
        "commercial construction Salem",
        "building contractors",
        "construction services",
    ],
    authors: [{ name: "Vijay Constructions" }],
    creator: "Vijay Constructions",
    publisher: "Vijay Constructions",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://vijayconstructions.in",
        siteName: "Vijay Constructions",
        title: "Vijay Constructions | Premier Civil Engineering in Yercaud & Salem",
        description:
            "Transform your vision into reality with Vijay Constructions. 4.9★ rated construction company offering quality residential & commercial building services in Yercaud and Salem region.",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Vijay Constructions - Building Dreams in Yercaud & Salem",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Vijay Constructions | Civil Engineering Excellence",
        description:
            "Premier construction company in Yercaud & Salem. 4.9★ rated with 55+ reviews.",
        images: ["/images/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
};

// JSON-LD Structured Data
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "LocalBusiness",
            "@id": "https://vijayconstructions.in/#business",
            name: "Vijay Constructions",
            description:
                "Leading civil engineering and real estate construction company in Yercaud & Salem, Tamil Nadu.",
            url: "https://vijayconstructions.in",
            telephone: "+91-76958-50762",
            address: {
                "@type": "PostalAddress",
                streetAddress: "256/2, 1st Street, Jerinakadu",
                addressLocality: "Yercaud",
                addressRegion: "Tamil Nadu",
                postalCode: "636601",
                addressCountry: "IN",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: "11.7750",
                longitude: "78.2090",
            },
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                ],
                opens: "09:00",
                closes: "18:00",
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "55",
            },
            priceRange: "₹₹₹",
            image: "https://vijayconstructions.in/images/logo.png",
            sameAs: [],
        },
        {
            "@type": "ConstructionBusiness",
            "@id": "https://vijayconstructions.in/#construction",
            name: "Vijay Constructions",
            description:
                "Expert civil engineering and construction services for residential and commercial projects.",
            areaServed: [
                {
                    "@type": "City",
                    name: "Yercaud",
                },
                {
                    "@type": "City",
                    name: "Salem",
                },
            ],
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Construction Services",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Residential Construction",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Commercial Construction",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Renovation Services",
                        },
                    },
                ],
            },
        },
    ],
};

import { BackgroundSlideshow } from "@/components/Background/BackgroundSlideshow";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#C62828" />
            </head>
            <body className="antialiased">
                <BackgroundSlideshow />
                <ConstructionLoader />
                <SmoothScrollProvider>
                    <Header />
                    <main id="main-content">{children}</main>
                    <Footer />
                </SmoothScrollProvider>
            </body>
        </html>
    );
}
