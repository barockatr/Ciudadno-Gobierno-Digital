
import HeroSlider from '../components/HeroSlider';
import { Search } from 'lucide-react';
import './Home.css';

const UNSPLASH_IDS = {
    card1: "1554224155-8d04cb21cd6c",
    card2: "1517048676732-d65bc937f952",
    card3: "1517245386807-bb43f82c33c4"
};

const getImg = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

export default function Home({ navigateToTramites }) {
    return (
        <div className="page-home">
            {/* 1. Static Hero Principal */}
            <section className="hero">
                <div className="container">
                    <h1>Bienvenido a tu Portal Ciudadano</h1>
                    <p>Realiza tus trámites de gobierno de forma rápida y segura.</p>

                    {/* Barra de Búsqueda Centrada */}
                    <div className="search-container">
                        <Search size={20} className="search-icon-home" />
                        <input
                            type="text"
                            placeholder="Buscar trámite o servicio..."
                            className="search-input-home"
                        />
                    </div>
                </div>
            </section>

            {/* 2. Sección Slider (Reubicado) */}
            <section className="container" style={{ marginBottom: '4rem' }}>
                <h2 className="section-title">
                    Novedades y Destacados
                </h2>
                <div style={{ maxWidth: '100%', margin: '0 auto' }}>
                    <HeroSlider />
                </div>
            </section>

            {/* 3. Servicios Destacados (Original) */}
            <section className="container" style={{ paddingBottom: '4rem' }}>
                <h2 style={{ marginBottom: '2rem', color: 'var(--color-primary)' }}>Servicios Destacados</h2>
                <div className="grid-3">
                    <div className="card">
                        <img src={getImg(UNSPLASH_IDS.card1)} alt="Trámites" className="card-img-home" />
                        <div className="card-content">
                            <h3>Gestión de Documentos</h3>
                            <p>
                                Solicita y renueva tus documentos oficiales desde la comodidad de tu hogar.
                            </p>
                            <button onClick={navigateToTramites} className="btn card-action">Ver más →</button>
                        </div>
                    </div>

                    <div className="card">
                        <img src={getImg(UNSPLASH_IDS.card2)} alt="Impuestos" className="card-img-home" />
                        <div className="card-content">
                            <h3>Pago de Impuestos</h3>
                            <p>
                                Realiza tus pagos de servicios y contribuciones de manera segura y transparente.
                            </p>
                            <a href="#" className="card-action">Ver más →</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={getImg(UNSPLASH_IDS.card3)} alt="Salud" className="card-img-home" />
                        <div className="card-content">
                            <h3>Servicios de Salud</h3>
                            <p>
                                Agenda citas médicas y consulta tu historial clínico digitalmente.
                            </p>
                            <a href="#" className="card-action">Ver más →</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
