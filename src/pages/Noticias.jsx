import { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import NewsModal from '../components/NewsModal';
import './Noticias.css';

const GNEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
const GNEWS_URL = `/api/news`;

// Mapea categorías de GNews al estilo de tu app
const mapCategory = (topic) => {
    const map = {
        'nation': 'GOBIERNO',
        'world': 'INTERNACIONAL',
        'business': 'ECONOMÍA',
        'health': 'SALUD',
        'science': 'CIENCIA',
        'education': 'EDUCACIÓN',
        'technology': 'TECNOLOGÍA',
    };
    return map[topic] || 'ACTUALIDAD';
};

export default function Noticias() {
    const [selectedNews, setSelectedNews] = useState(null);
    const [news, setNews] = useState([]);
    const [status, setStatus] = useState('loading'); // loading | success | error

    const fetchNews = async () => {
        setStatus('loading');
        try {
            const res = await fetch(GNEWS_URL);
            const data = await res.json();
            console.log('API response:', data); // 👈 temporal para debug
            if (!res.ok || !data.articles) throw new Error(data.error || 'API error');

            // Mapear respuesta de GNews al formato que espera tu app
            const mapped = data.articles.map((article, i) => ({
                id: i,
                title: article.title,
                summary: article.description || '',
                body: article.content || article.description || '',
                date: article.publishedAt,
                category: mapCategory(article.source?.name || ''),
                image: article.image || null,
                url: article.url,
                source: article.source?.name || 'Portal Ciudadano Digital',
            }));

            setNews(mapped);
            setStatus('success');
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="news-page-container">
            <div className="news-header">
                <h1>Sala de Prensa</h1>
                <p>Mantente informado con los últimos comunicados y avisos oficiales.</p>
            </div>

            {/* Estado: Cargando */}
            {status === 'loading' && (
                <div className="news-status-container">
                    <Loader2 size={36} className="spinner" />
                    <p>Cargando noticias...</p>
                </div>
            )}

            {/* Estado: Error */}
            {status === 'error' && (
                <div className="news-status-container error">
                    <AlertCircle size={36} />
                    <p>No se pudieron cargar las noticias.</p>
                    <button className="btn-retry" onClick={fetchNews}>
                        <RefreshCw size={16} /> Reintentar
                    </button>
                </div>
            )}

            {/* Estado: Éxito */}
            {status === 'success' && (
                <div className="news-grid">
                    {news.map((item, index) => (
                        <article key={item.id} className={`news-card ${index === 0 ? 'news-hero' : ''}`}>
                            <div className="news-image-container">
                                {item.image ? (
                                    <img src={item.image} alt={item.title} />
                                ) : (
                                    <div className="news-image-placeholder" />
                                )}
                                <div className="news-category-badge">{item.category}</div>
                            </div>

                            <div className="news-content">
                                <div className="news-meta">
                                    <Calendar size={14} />
                                    <span>
                                        {new Date(item.date).toLocaleDateString('es-MX', {
                                            year: 'numeric', month: 'long', day: 'numeric'
                                        })}
                                    </span>
                                </div>

                                <h2>{item.title}</h2>
                                <p>{item.summary}</p>

                                <button
                                    className="read-more-btn"
                                    onClick={() => setSelectedNews(item)}
                                >
                                    Leer comunicado <ArrowRight size={16} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            )}

            <NewsModal
                news={selectedNews}
                onClose={() => setSelectedNews(null)}
            />
        </div>
    );
}
