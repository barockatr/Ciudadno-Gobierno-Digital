const NOTICIAS = [
    {
        title: "Nueva actualización en el sistema de citas",
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
        date: "2026-02-01"
    },
    {
        title: "Informe de transparencia 2025 disponible",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
        date: "2026-01-28"
    },
    {
        title: "Programas de apoyo social abiertos",
        img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=400&q=80",
        date: "2026-01-25"
    }
];

export default function Noticias() {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>Últimas Noticias</h1>
            <div style={{ display: 'grid', gap: '2rem' }}>
                {NOTICIAS.map((n, i) => (
                    <div key={i} className="card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <img src={n.img} alt="Noticia" style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <small style={{ color: '#64748b' }}>{n.date}</small>
                            <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{n.title}</h2>
                            <p style={{ color: '#475569' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
