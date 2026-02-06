// Placeholder import removed


import HeroSlider from '../components/HeroSlider';

const UNSPLASH_IDS = {
    card1: "1554224155-8d04cb21cd6c",
    card2: "1517048676732-d65bc937f952",
    card3: "1517245386807-bb43f82c33c4"
};

const getImg = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

export default function Home({ navigateToTramites }) {
    return (
        <div className="page-home">
            <HeroSlider />

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
                            <a href="#" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Ver más →</a>
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
