import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQS = [
    {
        question: "¿Cómo busco un trámite en el portal?",
        answer: "Tienes dos formas: (1) Usa la barra de búsqueda en la página de Inicio escribiendo palabras clave como 'pasaporte', 'CURP' o 'cita médica'. (2) Ve a la sección 'Trámites' y navega por institución (IMSS, SAT, SRE, etc.) o escribe en la barra de búsqueda del directorio."
    },
    {
        question: "¿El portal realiza trámites directamente?",
        answer: "No. Este portal es un directorio centralizado e informativo. Su función es orientarte y prepararte antes de ir al sitio oficial del gobierno. Al hacer clic en un trámite, verás los requisitos necesarios y luego serás redirigido de forma segura al sitio oficial de la institución correspondiente (IMSS, SAT, SRE, etc.)."
    },
    {
        question: "¿El Asistente Virtual tiene acceso a mis datos personales?",
        answer: "No. El Asistente IA (powered by Groq / LLaMA 3) sólo responde preguntas en texto sobre trámites y servicios gubernamentales. No tiene acceso a tu CURP, RFC, historial médico ni ningún dato personal. Es un chat informativo de uso general."
    },
    {
        question: "¿Dónde veo los requisitos de un trámite antes de ir?",
        answer: "Cuando seleccionas cualquier trámite en el directorio, aparece un modal con la lista de requisitos necesarios. Puedes marcar cada uno como checklist para asegurarte de tener todo listo antes de visitar el sitio oficial. Esto evita viajes en vano."
    },
    {
        question: "¿Qué hago si el enlace oficial del gobierno no funciona?",
        answer: "Los sitios gubernamentales pueden tener mantenimientos programados o cambios de URL. Si un enlace falla: (1) Intenta unos minutos después. (2) Pregunta al Asistente IA indicando el trámite que necesitas, él puede orientarte. (3) Visita directamente gob.mx que es el portal central del gobierno mexicano."
    },
    {
        question: "¿Los datos que ingreso en el portal se guardan o comparten?",
        answer: "Este portal no almacena ningún dato en servidores propios. Toda la información que consultas o el texto que escribes en el chat permanece en tu sesión local del navegador. Al cerrar o recargar la página, el historial del chat se borra automáticamente."
    },
    {
        question: "¿Puedo usar el portal desde mi celular?",
        answer: "Sí, el portal está diseñado con un layout responsivo adaptado para dispositivos móviles. Puedes navegar, buscar trámites y usar el asistente IA desde cualquier smartphone con acceso a internet."
    }
];

export default function Ayuda() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '0.5rem', textAlign: 'center' }}>Centro de Ayuda</h1>
                <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem' }}>
                    Preguntas frecuentes sobre el uso del Portal Ciudadano Digital.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {FAQS.map((faq, i) => (
                        <div
                            key={i}
                            className="card"
                            style={{
                                padding: '0',
                                overflow: 'hidden',
                                border: openIndex === i ? '1px solid var(--color-primary)' : '1px solid #e2e8f0',
                                transition: 'border-color 0.2s'
                            }}
                        >
                            <button
                                onClick={() => toggle(i)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '1.25rem 1.5rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    gap: '1rem'
                                }}
                            >
                                <span style={{
                                    fontSize: '0.95rem',
                                    fontWeight: '600',
                                    color: openIndex === i ? 'var(--color-primary)' : '#334155'
                                }}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    size={20}
                                    style={{
                                        flexShrink: 0,
                                        color: '#64748b',
                                        transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.2s'
                                    }}
                                />
                            </button>

                            {openIndex === i && (
                                <div style={{
                                    padding: '0 1.5rem 1.25rem',
                                    color: '#475569',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.7',
                                    borderTop: '1px solid #f1f5f9'
                                }}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <h3>¿No encuentras lo que buscas?</h3>
                    <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                        Nuestro asistente virtual está listo para ayudarte las 24 horas.
                    </p>
                    <button
                        className="btn btn-primary"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                        onClick={() => document.querySelector('.chatbot-toggle')?.click()}
                    >
                        <MessageCircle size={18} />
                        Abrir Chat IA
                    </button>
                </div>
            </div>
        </div>
    );
}
