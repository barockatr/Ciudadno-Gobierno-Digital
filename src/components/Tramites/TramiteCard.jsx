
import React from 'react';
import { Clock } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import './TramiteCard.css';

const TramiteCard = ({ tramite, onClick }) => {
    // Dynamically get the icon component, default to FileText if not found
    const IconComponent = LucideIcons[tramite.icono] || LucideIcons.FileText;

    // Use institution color for the pill
    const pillStyle = {
        backgroundColor: tramite.color || '#333',
        color: 'white'
    };

    return (
        <div className="tramite-card" onClick={onClick}>
            {/* 1. Etiqueta Superior (Pill) */}
            <div className="card-top-bar">
                <span className="institution-pill" style={pillStyle}>
                    {tramite.institucion}
                </span>
                {/* Optional: Icon subtle in background or corner? For now, sticking strictly to requirements */}
            </div>

            {/* 2. Titulo */}
            <h3 className="tramite-title">{tramite.titulo}</h3>

            {/* 3. Descripcion */}
            <p className="tramite-description">{tramite.descripcion}</p>

            {/* 4. Footer de Tiempo */}
            <div className="tramite-footer">
                <div className="time-est">
                    <Clock size={16} className="clock-icon" />
                    <span>{tramite.tiempoEstimado}</span>
                </div>
            </div>
        </div>
    );
};

export default TramiteCard;
