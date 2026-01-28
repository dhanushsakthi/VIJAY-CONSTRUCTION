"use strict";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/images/backgrounds/bg-1.png",
    "/images/backgrounds/bg-2.png",
    "/images/backgrounds/bg-3.png",
    "/images/backgrounds/bg-4.png",
    "/images/backgrounds/bg-5.png",
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
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.25, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${images[currentIndex]})` }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/60" />
            <div className="absolute inset-0 backdrop-blur-[1px]" />
        </div>
    );
};
