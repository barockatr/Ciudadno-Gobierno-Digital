import { X, CheckCircle, ExternalLink, AlertTriangle } from 'lucide-react';
import './PreparationModal.css';

export default function PreparationModal({ service, onClose, onConfirm }) {
    if (!service) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="modal-header">
                    <div className="icon-badge">
                        <ExternalLink size={28} />
                    </div>
                    <h2>Estás a un paso</h2>
                    <p>Vas a ser redirigido al sitio oficial: <strong>{service.title}</strong></p>
                </div>

                <div className="modal-body">
                    {service.specialRequirement && (
                        <div className="special-req-alert">
                            <AlertTriangle size={18} />
                            <div>
                                <strong>REQUISITO PREVIO:</strong> {service.specialRequirement.text}
                                <a href={service.specialRequirement.url} target="_blank" rel="noopener noreferrer" className="special-req-link">
                                    Registrarse en Llave MX <ExternalLink size={12} />
                                </a>
                            </div>
                        </div>
                    )}
                    <div className="checklist-container">
                        <h3><CheckCircle size={18} className="check-icon-title" /> ¿Tienes todo listo?</h3>
                        <ul className="requirements-list">
                            {service.requirements.map((req, index) => (
                                <li key={index}>
                                    <div className="bullet-point"></div>
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="info-note">
                        <AlertTriangle size={16} />
                        <small>Te recomendamos tener buena conexión a internet y evitar recargar la página oficial durante el proceso.</small>
                    </div>
                </div>

                <div className="modal-actions">
                    <button className="btn-cancel" onClick={onClose}>
                        Cancelar
                    </button>
                    <button className="btn-confirm" onClick={onConfirm}>
                        Ir al sitio oficial <ExternalLink size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
