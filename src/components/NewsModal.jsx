import { useEffect } from 'react';
import { X, Calendar, Tag, ExternalLink } from 'lucide-react';
import './NewsModal.css';

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
                    {news.image ? (
                        <img src={news.image} alt={news.title} />
                    ) : (
                        <div className="news-modal-image-placeholder" />
                    )}
                    <div className="news-modal-category-badge">
                        <Tag size={12} />
                        {news.category}
                    </div>
                </div>

                <div className="news-modal-body">
                    <div className="news-modal-meta">
                        <Calendar size={14} />
                        <span>{new Date(news.date).toLocaleDateString('es-MX', {
                            year: 'numeric', month: 'long', day: 'numeric'
                        })}</span>
                    </div>

                    <h2>{news.title}</h2>
                    <p className="news-modal-summary">{news.summary}</p>

                    {news.body && news.body !== news.summary && (
                        <>
                            <div className="news-modal-divider" />
                            <p className="news-modal-content">{news.body}</p>
                        </>
                    )}

                    <div className="news-modal-footer">
                        <span className="news-modal-source">
                            {news.source || 'Portal Ciudadano Digital'}
                        </span>
                        <div className="news-modal-actions">
                            {news.url && (
                                <a
                                    href={news.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-modal-link"
                                >
                                    <ExternalLink size={14} />
                                    Ver nota completa
                                </a>
                            )}
                            <button className="btn-modal-close" onClick={onClose}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
