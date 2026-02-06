
import HeroSlider from '../components/HeroSlider';
import { Search } from 'lucide-react';

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
                    <div style={{ maxWidth: '600px', margin: '2rem auto 0', position: 'relative' }}>
                        <Search size={20} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                        <input
                            type="text"
                            placeholder="Buscar trámite o servicio..."
                            style={{
                                width: '100%',
                                padding: '1rem 1rem 1rem 3.5rem',
                                borderRadius: '99px',
                                border: '1px solid #cbd5e1',
                                outline: 'none',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
                                fontSize: '1.1rem',
                                transition: 'all 0.2s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                            onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                        />
                    </div>
                </div>
            </section>

            {/* 2. Sección Slider (Reubicado) */}
            <section className="container" style={{ marginBottom: '4rem' }}>
                <h2 style={{
                    marginBottom: '1.5rem',
                    color: '#334155',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    paddingLeft: '0.5rem',
                    borderLeft: '4px solid var(--color-accent)'
                }}>
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
                        <img src={getImg(UNSPLASH_IDS.card1)} alt="Trámites" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Gestión de Documentos</h3>
                            <p style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>
                                Solicita y renueva tus documentos oficiales desde la comodidad de tu hogar.
                            </p>
                            <button onClick={navigateToTramites} className="btn" style={{ color: 'var(--color-accent)', fontWeight: 600, padding: 0 }}>Ver más →</button>
                        </div>
                    </div>

                    <div className="card">
                        <img src={getImg(UNSPLASH_IDS.card2)} alt="Impuestos" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Pago de Impuestos</h3>
                            <p style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>
                                Realiza tus pagos de servicios y contribuciones de manera segura y transparente.
                            </p>
                            <a href="#" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Ver más →</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={getImg(UNSPLASH_IDS.card3)} alt="Salud" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Servicios de Salud</h3>
                            <p style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>
                                Agenda citas médicas y consulta tu historial clínico digitalmente.
                            </p>
                            <a href="#" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Ver más →</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
