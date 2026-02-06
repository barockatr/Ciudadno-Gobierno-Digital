import { NEWS_DATA, getNewsImage } from '../data/newsData';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import './Noticias.css';

export default function Noticias() {
    return (
        <div className="news-page-container">
            <div className="news-header">
                <h1>Sala de Prensa</h1>
                <p>Mantente informado con los últimos comunicados y avisos oficiales.</p>
            </div>

            <div className="news-grid">
                {NEWS_DATA.map((item) => (
                    <article key={item.id} className="news-card">
                        <div className="news-image-container">
                            <img src={getNewsImage(item.image)} alt={item.title} />
                            <div className="news-category-badge">{item.category}</div>
                        </div>

                        <div className="news-content">
                            <div className="news-meta">
                                <Calendar size={14} />
                                <span>{item.date}</span>
                            </div>

                            <h2>{item.title}</h2>
                            <p>{item.summary}</p>

                            <button className="read-more-btn">
                                Leer comunicado <ArrowRight size={16} />
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
