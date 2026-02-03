"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
    "/images/backgrounds/forest-hq-1.jpg",
    "/images/backgrounds/modern-villa-hq-1.png",
    "/images/backgrounds/yercaud-mountain-hq-1.png",
];

export const BackgroundSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5 seconds interval

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
            <AnimatePresence>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1.05 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{
                        opacity: { duration: 2, ease: "easeInOut" },
                        scale: { duration: 8, ease: "linear" }
                    }}
                    className="absolute inset-0 w-full h-full will-change-transform"
                >
                    <Image
                        src={images[currentIndex]}
                        alt="Vijay Constructions Background"
                        fill
                        priority={currentIndex === 0}
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                        quality={95}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
