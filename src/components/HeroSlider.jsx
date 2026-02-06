
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Heart, Coins, ArrowRight } from "lucide-react";
import "./HeroSlider.css";

const SLIDES = [
    {
        id: 1,
        title: "Tu Identidad Digital",
        action: "Obtener ahora",
        gradientClass: "gradient-blue-cyan",
        icon: FileText,
        iconColor: "#e0f2fe", // Light sky blue
        description: "Consulta y gestiona tu CURP y Acta de Nacimiento al instante.",
    },
    {
        id: 2,
        title: "Salud y Bienestar",
        action: "Agendar Cita",
        gradientClass: "gradient-green-emerald",
        icon: Heart,
        iconColor: "#dcfce7", // Light green
        description: "Citas médicas en el IMSS y consulta de vigencia de derechos.",
    },
    {
        id: 3,
        title: "Control Fiscal",
        action: "Ver mi RFC",
        gradientClass: "gradient-gray-slate",
        icon: Coins,
        iconColor: "#f1f5f9", // Slate 100
        description: "Mantén tus obligaciones tributarias al día con el SAT.",
    },
];

const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000); // 6 seconds for better readability
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    // Icon Animations Variants
    const iconVariants = {
        float: {
            y: [0, -15, 0],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        },
        pulse: {
            scale: [1, 1.2, 1],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        },
        bounce: {
            y: [0, -20, 0],
            transition: { duration: 1, repeat: Infinity, type: "spring", stiffness: 200 },
        },
    };

    const getIconAnimation = (id) => {
        switch (id) {
            case 1: return "float";
            case 2: return "pulse";
            case 3: return "bounce";
            default: return "";
        }
    };

    return (
        <div className="hero-slider-container">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    className={`hero-slide-background ${SLIDES[currentIndex].gradientClass}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Decorative Background Elements */}
                    <div className="bg-shape shape-1"></div>
                    <div className="bg-shape shape-2"></div>

                    {/* Glass Card */}
                    <motion.div
                        className="hero-glass-card"
                        initial={{ y: 20, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="card-content">
                            <div className="icon-container">
                                <motion.div
                                    variants={iconVariants}
                                    animate={getIconAnimation(SLIDES[currentIndex].id)}
                                    style={{ color: SLIDES[currentIndex].iconColor }}
                                >
                                    {React.createElement(SLIDES[currentIndex].icon, { size: 64, strokeWidth: 1.5 })}
                                </motion.div>
                            </div>

                            <div className="text-content">
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {SLIDES[currentIndex].title}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.9 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {SLIDES[currentIndex].description}
                                </motion.p>

                                <motion.button
                                    className="action-btn"
                                    whileHover={{ scale: 1.05, paddingRight: "1.5rem" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {SLIDES[currentIndex].action}
                                    <ArrowRight size={18} className="btn-icon" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Bullets */}
            <div className="slider-dots">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`slider-dot ${index === currentIndex ? "active" : ""}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
