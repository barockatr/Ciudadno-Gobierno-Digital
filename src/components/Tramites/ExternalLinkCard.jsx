import { ExternalLink, FileText, ChevronRight } from 'lucide-react';
import './ExternalLinkCard.css';

export default function ExternalLinkCard({ service, onClick }) {
    return (
        <div className="external-card" onClick={onClick}>
            <div className="card-top">
                <div className="card-icon-wrapper">
                    <FileText size={24} />
                </div>
                <div className="external-badge">
                    <ExternalLink size={14} /> Sitio Oficial
                </div>
            </div>

            <div className="card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>

            <div className="card-footer">
                <span className="category-tag">{service.category}</span>
                <button className="action-btn">
                    Iniciar <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}
