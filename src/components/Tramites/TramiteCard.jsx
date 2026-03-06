
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import './TramiteCard.css';

const TramiteCard = ({ tramite, onClick }) => {
    const IconComponent = LucideIcons[tramite.icono] || LucideIcons.FileText;

    const pillStyle = {
        backgroundColor: tramite.color || '#333',
        color: 'white'
    };

    return (
        <motion.div
            className="tramite-card"
            onClick={onClick}
            style={{ '--inst-color': tramite.color || '#3b82f6' }}
            variants={typeof onClick !== 'undefined' ? undefined : undefined} // will be handled by parent stagger if passed
            whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
            whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
        >
            {/* Línea de color izquierda manejada vía CSS var(--inst-color) */}

            {/* 1. Etiqueta Superior (Pill) */}
            <div className="card-top-bar">
                <div className="card-icon-pill">
                    <IconComponent size={18} />
                </div>
                <span className="institution-pill" style={pillStyle}>
                    {tramite.institucion}
                </span>
            </div>

            {/* 2. Titulo */}
            <h3 className="tramite-title">{tramite.titulo}</h3>

            {/* 3. Descripcion */}
            <p className="tramite-description">{tramite.descripcion}</p>

            {/* 4. Footer de Tiempo */}
            <div className="tramite-footer">
                <div className="time-est">
                    <Clock size={15} className="clock-icon" />
                    <span>{tramite.tiempoEstimado}</span>
                </div>
                <span className="tramite-cta">Ver requisitos →</span>
            </div>
        </motion.div>
    );
};

export default TramiteCard;
