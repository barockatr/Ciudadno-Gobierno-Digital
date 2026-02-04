export default function Ayuda() {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Centro de Ayuda</h1>
                <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem' }}>
                    ¿Tienes dudas? Aquí encontrarás las respuestas a las preguntas más frecuentes.
                </p>

                <div className="card" style={{ padding: '2rem' }}>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Preguntas Frecuentes</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            "¿Cómo recupero mi contraseña?",
                            "¿Dónde puedo pagar mis servicios?",
                            "¿Cuáles son los horarios de atención?",
                            "¿Cómo contacto a soporte técnico?"
                        ].map((q, i) => (
                            <div key={i} style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#334155' }}>{q}</h3>
                                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <h3>¿No encuentras lo que buscas?</h3>
                    <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                        Nuestro asistente virtual está listo para ayudarte las 24 horas.
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => document.querySelector('.chatbot-toggle')?.click()}
                    >
                        Abrir Chat
                    </button>
                </div>
            </div>
        </div>
    );
}
