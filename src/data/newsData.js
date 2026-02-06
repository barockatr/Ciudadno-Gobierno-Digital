export const NEWS_DATA = [
    {
        id: 1,
        title: "Campaña Nacional de Vacunación 2026",
        date: "2026-02-01",
        category: "Salud",
        image: "1576091160399-112ba8d25d1d", // Unsplash ID related to health/medical
        summary: "Inicia la jornada de refuerzo contra la influenza y COVID-19 en todos los centros de salud. Consulta los puestos más cercanos.",
        content: "La Secretaría de Salud informa que a partir del 1 de febrero..."
    },
    {
        id: 2,
        title: "Descuentos en Pago de Predial",
        date: "2026-01-28",
        category: "Impuestos",
        image: "1554224155-6726b3ff858f", // Unsplash ID related to money/docs
        summary: "Aprovecha el 15% de descuento por pago anticipado durante todo el mes de febrero. Realiza tu trámite en línea.",
        content: "El gobierno municipal invita a los contribuyentes..."
    },
    {
        id: 3,
        title: "Nueva Beca para Estudiantes de Posgrado",
        date: "2026-01-20",
        category: "Educación",
        image: "1523050854058-8df90110c9f1", // Unsplash ID related to education
        summary: "Abierta la convocatoria para becas de maestría y doctorado en áreas STEM. Revisa los requisitos completos aquí.",
        content: "El Consejo Nacional de Ciencia y Tecnología anuncia..."
    },
    {
        id: 4,
        title: "Cierre Temporal de Vialidades por Mantenimiento",
        date: "2026-02-02",
        category: "Vialidad",
        image: "1592661555519-58df2b97c234", // Construction/road
        summary: "El próximo fin de semana se realizarán obras en el puente principal. Conoce las rutas alternas para evitar contratiempos.",
        content: "La Secretaría de Obras Públicas comunica..."
    },
    {
        id: 5,
        title: "Feria del Empleo Digital",
        date: "2026-01-15",
        category: "Economía",
        image: "1486312338219-ce68d2c6f44d", // Working on laptop
        summary: "Más de 500 vacantes disponibles en el sector tecnológico. Regístrate y participa en las entrevistas virtuales.",
        content: "Como parte de la reactivación económica..."
    }
];

export const getNewsImage = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;
