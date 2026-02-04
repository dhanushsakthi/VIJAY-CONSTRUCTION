"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
    "/images/backgrounds/forest-hq-1.jpg",
    "/images/backgrounds/bg-3.png",
    "/images/backgrounds/construction-site-hq-1.png",
    "/images/backgrounds/yercaud-mountain-hq-1.png",
    "/images/backgrounds/modern-luxury-villa-v2.png",
];

export const BackgroundSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000); // 6 seconds interval for a steadier feel

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1.05 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 2.5, ease: "easeInOut" },
                        scale: { duration: 10, ease: "linear" }
                    }}
                    className="absolute inset-0 w-full h-full will-change-transform"
                >
                    <Image
                        src={images[currentIndex]}
                        alt="Vijay Constructions Background"
                        fill
                        priority={currentIndex === 0}
                        className="object-cover object-center"
                        sizes="100vw"
                        quality={100}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
