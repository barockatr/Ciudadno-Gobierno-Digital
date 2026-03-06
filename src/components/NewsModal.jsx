import { useEffect } from 'react';
import { X, Calendar, Tag, ExternalLink } from 'lucide-react';
import './NewsModal.css';

const getNewsImage = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

export default function NewsModal({ news, onClose }) {
    if (!news) return null;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKey = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKey);
        };
    }, []);

    return (
        <div className="news-modal-overlay" onClick={onClose}>
            <div className="news-modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="news-modal-close" onClick={onClose} aria-label="Cerrar">
                    <X size={22} />
                </button>

                <div className="news-modal-image-wrapper">
                    <img src={getNewsImage(news.image)} alt={news.title} />
                    <div className="news-modal-category-badge">
                        <Tag size={12} />
                        {news.category}
                    </div>
                </div>

                <div className="news-modal-body">
                    <div className="news-modal-meta">
                        <Calendar size={14} />
                        <span>{new Date(news.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>

                    <h2>{news.title}</h2>
                    <p className="news-modal-summary">{news.summary}</p>

                    <div className="news-modal-divider" />

                    <p className="news-modal-content">{news.content}</p>

                    <div className="news-modal-footer">
                        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                            Comunicado oficial — Portal Ciudadano Digital
                        </span>
                        <button className="btn btn-primary" onClick={onClose}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                            <ExternalLink size={15} />
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
