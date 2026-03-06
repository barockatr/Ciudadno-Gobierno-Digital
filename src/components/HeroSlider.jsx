import React from "react";
import { motion } from "framer-motion";
import { FileText, Heart, Coins, ArrowRight } from "lucide-react";
import CoverFlow3D from "./CoverFlow3D";
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
        tramiteId: "curp-consulta" // ID real de tramite
    },
    {
        id: 2,
        title: "Salud y Bienestar",
        action: "Agendar Cita",
        gradientClass: "gradient-green-emerald",
        icon: Heart,
        iconColor: "#dcfce7", // Light green
        description: "Citas médicas en el IMSS y consulta de vigencia de derechos.",
        tramiteId: "imss-cita"
    },
    {
        id: 3,
        title: "Control Fiscal",
        action: "Ver mi RFC",
        gradientClass: "gradient-gray-slate",
        icon: Coins,
        iconColor: "#f1f5f9", // Slate 100
        description: "Mantén tus obligaciones tributarias al día con el SAT.",
        tramiteId: "sat-constancia"
    },
];

const HeroSlider = ({ onAction }) => {
    // Icon Animations Variants (mantenemos para que los iconos sigan vivos)
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
        <CoverFlow3D
            items={SLIDES}
            itemWidth="800px"
            height="400px"
            translateOffset={105}
            translateUnit="%"
            autoPlayInterval={5000}
            renderItem={({ item: slide, isActive, onClick }) => (
                <div
                    className={`hero-slide-content ${slide.gradientClass}`}
                    onClick={onClick}
                >
                    {/* Decorative Background Elements */}
                    <div className="bg-shape shape-1"></div>
                    <div className="bg-shape shape-2"></div>

                    {/* Contenido de la Tarjeta */}
                    <div className="card-content">
                        <div className="text-content">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                            <button
                                className="action-btn"
                                onClick={(e) => {
                                    e.stopPropagation(); // Previene que el clic rutee la tarjeta a nivel root
                                    if (!isActive) {
                                        onClick(); // Si no es la activa, centrala
                                        return;
                                    }
                                    onAction(slide.tramiteId);
                                }}
                            >
                                {slide.action}
                                <ArrowRight size={20} className="btn-icon" />
                            </button>
                        </div>
                        <motion.div
                            className="icon-container"
                            variants={iconVariants}
                            animate={isActive ? getIconAnimation(slide.id) : ""}
                        >
                            <slide.icon size={48} color={slide.iconColor} strokeWidth={1.5} />
                        </motion.div>
                    </div>
                </div>
            )}
        />
    );
};

export default HeroSlider;
