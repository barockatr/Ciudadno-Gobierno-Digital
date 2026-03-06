import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./CoverFlow3D.css";

const CoverFlow3D = ({
    items = [],
    renderItem,
    autoPlayInterval = 5000,
    itemWidth = "800px",
    height = "400px",
    translateOffset = 105, // Porcentaje o pixeles fijos, por defecto 105%
    translateUnit = "%", // '%' o 'px'
    onActiveChange // Callback para notificar la tarjeta central
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Notificar al padre cuando cambia el activeIndex
    useEffect(() => {
        if (onActiveChange && items.length > 0) {
            onActiveChange(items[activeIndex]);
        }
    }, [activeIndex, items, onActiveChange]);

    // Auto-play con Pausa Inteligente al Hover
    useEffect(() => {
        if (!autoPlayInterval || isHovered) return;

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, autoPlayInterval);
        return () => clearInterval(timer);
    }, [activeIndex, items.length, autoPlayInterval, isHovered]);

    if (!items || items.length === 0) return null;

    return (
        <div
            className="coverflow-wrapper"
            style={{ height }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* 1. El Escenario (La Perspectiva) */}
            <div className="coverflow-container">
                {items.map((item, index) => {
                    // 3. Las Matemáticas del Espacio (El Offset)
                    let offset = index - activeIndex;

                    // Ajuste para carrusel infinito (lógica simplificada para listas pequeñas)
                    // Calcula la distancia más corta en un círculo
                    const half = Math.floor(items.length / 2);
                    if (offset > half) offset -= items.length;
                    if (offset < -half) offset += items.length;

                    // 4. La Transformación Dinámica
                    const direction = Math.sign(offset);
                    const absOffset = Math.abs(offset);

                    // Cálculos 3D
                    // Separación lateral basada en las props paramétricas
                    const translateX = offset * translateOffset;
                    const scale = absOffset === 0 ? 1.15 : 0.85; // 3. Toque de Llenado: 1.15 scale
                    // Tarjetas laterales giran 35deg hacia el centro
                    const rotateY = absOffset === 0 ? 0 : direction * -35;
                    const zIndex = 100 - absOffset;
                    const blurValue = absOffset === 0 ? 0 : 4;

                    // Solo mostramos el centro y 1 item adyacente por lado en el DOM visible para performance
                    const isVisible = absOffset <= 1;

                    return (
                        <motion.div
                            key={index}
                            className={`coverflow-slide`}
                            style={{
                                maxWidth: itemWidth,
                                // Permitir clics en la tarjeta central y en las laterales visibles
                                pointerEvents: isVisible ? 'auto' : 'none'
                            }}
                            initial={false}
                            animate={{
                                x: `${translateX}${translateUnit}`,
                                scale,
                                rotateY: `${rotateY}deg`,
                                zIndex,
                                filter: `blur(${blurValue}px)`,
                                opacity: isVisible ? (absOffset === 0 ? 1 : 0.6) : 0
                            }}
                            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                            onClick={() => {
                                if (absOffset !== 0) {
                                    setActiveIndex(index);
                                }
                            }}
                        >
                            {/* Render prop patter: delegamos el renderizado interno */}
                            {renderItem({
                                item,
                                isActive: absOffset === 0,
                                onClick: () => {
                                    if (absOffset !== 0) {
                                        setActiveIndex(index);
                                    }
                                }
                            })}
                        </motion.div>
                    );
                })}
            </div>

            {/* Dots Navigation */}
            <div className="coverflow-dots">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`coverflow-dot ${activeIndex === index ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Ir a slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoverFlow3D;
