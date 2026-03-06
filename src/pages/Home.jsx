
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import PreFlightModal from '../components/Tramites/PreFlightModal';
import { TRAMITES } from '../data/tramites';
import { Search } from 'lucide-react';
import './Home.css';

const UNSPLASH_IDS = {
    card1: "1554224155-8d04cb21cd6c",
    card2: "1517048676732-d65bc937f952",
    card3: "1517245386807-bb43f82c33c4"
};

const getImg = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

// Datos base de servicios
const SERVICES = [
    { img: '1554224155-8d04cb21cd6c', badge: 'Documentos', title: 'Gestión de Documentos', desc: 'Solicita y renueva tus documentos oficiales desde casa.', route: '/tramites' },
    { img: '1517048676732-d65bc937f952', badge: 'SAT', title: 'Pago de Impuestos', desc: 'Realiza tus pagos de contribuciones de forma segura.', route: '/tramites?q=sat' },
    { img: '1517245386807-bb43f82c33c4', badge: 'IMSS', title: 'Servicios de Salud', desc: 'Agenda citas médicas y consulta tu historial clínico.', route: '/tramites?q=imss' },
    { img: '1449965408869-eaa3f722e40d', badge: 'Movilidad', title: 'Movilidad y Vehículos', desc: 'Licencias, tenencias, multas y emplacamiento.', route: '/tramites?q=movilidad' },
    { img: '1436491865332-7a61a109cc05', badge: 'SRE', title: 'Pasaportes y Viajes', desc: 'Agenda tu cita para tramitar o renovar el pasaporte.', route: '/tramites?q=pasaporte' },
];

// Triplica el array → efecto de bucle infinito antes del rebobinado
const LOOPED_SERVICES = [...SERVICES, ...SERVICES, ...SERVICES];

export default function Home() {
    const navigate = useNavigate();
    const [selectedTramite, setSelectedTramite] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // 1. El Ancla — referencia al contenedor del carrusel
    const carouselRef = useRef(null);

    // 2. El Motor — arranca al montar, se limpia al desmontar
    useEffect(() => {
        const CARD_WIDTH = 260;  // px — debe coincidir con flex-basis en CSS
        const GAP = 20;   // px — gap del carrusel
        const STEP = CARD_WIDTH + GAP;
        const INTERVAL = 3000; // ms — avanza cada 3 segundos

        const timer = setInterval(() => {
            const el = carouselRef.current;
            if (!el) return;

            // 3. Lógica de Movimiento y Rebobinado
            const arrivedAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

            if (arrivedAtEnd) {
                // Regresa al inicio con scroll suave
                el.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Avanza exactamente una tarjeta
                el.scrollBy({ left: STEP, behavior: 'smooth' });
            }
        }, INTERVAL);

        // 4. Prevención de fugas de memoria — limpia el timer al desmontar
        return () => clearInterval(timer);
    }, []); // [] → se ejecuta solo una vez al montar

    const handleSliderAction = (tramiteId) => {
        const tramite = TRAMITES.find(t => t.id === tramiteId);
        if (tramite) {
            setSelectedTramite(tramite);
        } else {
            navigate('/tramites');
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const q = searchQuery.trim();
        if (q) {
            navigate(`/tramites?q=${encodeURIComponent(q)}`);
        } else {
            navigate('/tramites');
        }
    };

    return (
        <div className="page-home">
            {/* 1. Static Hero Principal */}
            <section className="hero">
                <div className="container">
                    <h1>Bienvenido a tu Portal Ciudadano</h1>
                    <p>Realiza tus trámites de gobierno de forma rápida y segura.</p>

                    {/* Barra de Búsqueda Funcional */}
                    <form className="search-container" onSubmit={handleSearch}>
                        <Search size={20} className="search-icon-home" />
                        <input
                            type="text"
                            placeholder="Buscar trámite o servicio..."
                            className="search-input-home"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="search-btn-home">Buscar</button>
                    </form>
                </div>
            </section>

            {/* 2. Sección Slider */}
            <section className="container" style={{ marginBottom: '4rem' }}>
                <h2 className="section-title">
                    Novedades y Destacados
                </h2>
                <div style={{ maxWidth: '100%', margin: '0 auto' }}>
                    <HeroSlider onAction={handleSliderAction} />
                </div>
            </section>

            {/* 3. Servicios Destacados — Carrusel Auto-Scroll */}
            <section className="container services-section">
                <div className="section-header-row">
                    <h2 className="section-title-inline">Servicios Destacados</h2>
                    <button onClick={() => navigate('/tramites')} className="see-all-link">
                        Ver todos →
                    </button>
                </div>

                {/* ref={carouselRef} → El Ancla para el motor de auto-scroll */}
                <div className="services-carousel" ref={carouselRef}>
                    {LOOPED_SERVICES.map((svc, idx) => (
                        <div className="service-card" key={idx}>
                            <div className="service-card-img-wrapper">
                                <img
                                    src={`https://images.unsplash.com/photo-${svc.img}?auto=format&fit=crop&w=800&q=80`}
                                    alt={svc.title}
                                />
                                <div className="service-card-badge">{svc.badge}</div>
                            </div>
                            <div className="service-card-body">
                                <h3>{svc.title}</h3>
                                <p>{svc.desc}</p>
                                <button
                                    onClick={() => navigate(svc.route)}
                                    className="service-card-btn"
                                >
                                    Explorar →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <PreFlightModal
                tramite={selectedTramite}
                isOpen={!!selectedTramite}
                onClose={() => setSelectedTramite(null)}
            />
        </div>
    );
}
