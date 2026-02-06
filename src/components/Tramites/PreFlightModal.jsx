
import React, { useEffect } from 'react';
import { X, CheckCircle, ExternalLink, AlertTriangle } from 'lucide-react';
import './PreFlightModal.css';

const PreFlightModal = ({ tramite, isOpen, onClose }) => {
    if (!isOpen || !tramite) return null;

    useEffect(() => {
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleConfirm = () => {
        window.open(tramite.urlDestino, '_blank', 'noopener,noreferrer');
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="modal-header">
                    <div className="modal-icon-wrapper" style={{ backgroundColor: `${tramite.color}20`, color: tramite.color }}>
                        <AlertTriangle size={32} />
                    </div>
                    <h2>Antes de ir al sitio oficial del {tramite.institucion}...</h2>
                    <p className="modal-subtitle">Asegúrate de tener lo siguiente a la mano para completar tu trámite de <strong>{tramite.titulo}</strong> sin interrupciones.</p>
                </div>

                <div className="modal-body">
                    <div className="checklist-container">
                        <h3>Requisitos necesarios:</h3>
                        <ul className="checklist">
                            {tramite.requisitos.map((req, index) => (
                                <li key={index} className="checklist-item">
                                    <label className="checkbox-label">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="checkbox-text">{req}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn-secondary" onClick={onClose}>
                        Cancelar
                    </button>
                    <button className="btn-primary" onClick={handleConfirm} style={{ backgroundColor: tramite.color }}>
                        <span>¡Tengo todo listo! Ir al trámite</span>
                        <ExternalLink size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PreFlightModal;
