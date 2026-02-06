
export const TRAMITES = [
    // IMSS
    {
        id: "imss-cita",
        titulo: "Cita Médica Familiar",
        institucion: "IMSS",
        categoria: "IMSS",
        icono: "Stethoscope",
        urlDestino: "https://citamedicadigital.imss.gob.mx/",
        descripcion: "Agenda tu consulta de medicina familiar o dental.",
        tiempoEstimado: "5 min",
        requisitos: ["CURP", "NSS", "Correo electrónico"],
        color: "var(--color-imss, #107c10)"
    },
    {
        id: "imss-alta",
        titulo: "Alta en Clínica",
        institucion: "IMSS",
        categoria: "IMSS",
        icono: "Hospital",
        urlDestino: "https://serviciosdigitales.imss.gob.mx/portal-web/portal",
        descripcion: "Date de alta en tu clínica o UMF más cercana.",
        tiempoEstimado: "5 min",
        requisitos: ["CURP", "Código Postal", "NSS"],
        color: "var(--color-imss, #107c10)"
    },
    {
        id: "imss-semanas",
        titulo: "Semanas Cotizadas",
        institucion: "IMSS",
        categoria: "IMSS",
        icono: "Calendar",
        urlDestino: "https://serviciosdigitales.imss.gob.mx/semanascotizadas-web/usuarios/Ingreso",
        descripcion: "Consulta tu historial de cotización ante el IMSS.",
        tiempoEstimado: "3 min",
        requisitos: ["CURP", "NSS", "Correo electrónico"],
        color: "var(--color-imss, #107c10)"
    },
    {
        id: "imss-vigencia",
        titulo: "Vigencia de Derechos",
        institucion: "IMSS",
        categoria: "IMSS",
        icono: "CheckCircle",
        urlDestino: "https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/vigencia",
        descripcion: "Verifica si estás dado de alta y vigente para recibir servicio.",
        tiempoEstimado: "2 min",
        requisitos: ["CURP", "NSS", "Correo electrónico"],
        color: "var(--color-imss, #107c10)"
    },

    // SRE
    {
        id: "sre-pasaporte-primera",
        titulo: "Pasaporte Primera Vez",
        institucion: "SRE",
        categoria: "SRE",
        icono: "Plane",
        urlDestino: "https://citas.sre.gob.mx/",
        descripcion: "Agenda tu cita para obtener tu pasaporte por primera vez.",
        tiempoEstimado: "15 min",
        requisitos: ["Cuenta SRE", "CURP Certificada", "Acta de Nacimiento"],
        color: "var(--color-sre, #13322b)"
    },
    {
        id: "sre-pasaporte-renovacion",
        titulo: "Renovación Pasaporte",
        institucion: "SRE",
        categoria: "SRE",
        icono: "RefreshCw",
        urlDestino: "https://citas.sre.gob.mx/",
        descripcion: "Programa la renovación de tu documento de viaje.",
        tiempoEstimado: "10 min",
        requisitos: ["Pasaporte anterior", "Cuenta puls SRE"],
        color: "var(--color-sre, #13322b)"
    },

    // SAT
    {
        id: "sat-constancia",
        titulo: "Constancia de Situación Fiscal",
        institucion: "SAT",
        categoria: "SAT",
        icono: "FileText",
        urlDestino: "https://www.sat.gob.mx/aplicacion/53027/genera-tu-constancia-de-situacion-fiscal",
        descripcion: "Genera tu documento fiscal actualizado.",
        tiempoEstimado: "5 min",
        requisitos: ["RFC", "Contraseña o e.firma"],
        color: "var(--color-sat, #9d2449)"
    },
    {
        id: "sat-rfc",
        titulo: "Inscripción al RFC",
        institucion: "SAT",
        categoria: "SAT",
        icono: "UserPlus",
        urlDestino: "https://www.sat.gob.mx/personas/tramites-del-rfc",
        descripcion: "Inscríbete en el RFC con tu CURP.",
        tiempoEstimado: "8 min",
        requisitos: ["CURP", "Domicilio", "Correo"],
        color: "var(--color-sat, #9d2449)"
    },

    // SEGOB / RENAPO
    {
        id: "curp-consulta",
        titulo: "Consulta de CURP",
        institucion: "RENAPO",
        categoria: "SEGOB",
        icono: "Fingerprint",
        urlDestino: "https://www.gob.mx/curp/",
        descripcion: "Consulta y descarga tu clave única.",
        tiempoEstimado: "2 min",
        requisitos: ["Datos personales"],
        color: "var(--color-gob, #b38e5d)"
    },
    {
        id: "acta-nacimiento",
        titulo: "Acta de Nacimiento",
        institucion: "Registro Civil",
        categoria: "SEGOB",
        icono: "Baby",
        urlDestino: "https://www.gob.mx/ActaNacimiento/",
        descripcion: "Descarga tu copia certificada.",
        tiempoEstimado: "5 min",
        requisitos: ["CURP", "Pago en línea"],
        color: "var(--color-gob, #b38e5d)"
    }
];

export const CATEGORIAS = [
    { id: 'IMSS', label: 'IMSS', color: '#107c10', desc: 'Salud y Seguridad Social' },
    { id: 'SRE', label: 'SRE', color: '#13322b', desc: 'Pasaportes y Viajes' },
    { id: 'SAT', label: 'SAT', color: '#9d2449', desc: 'Impuestos y RFC' },
    { id: 'SEGOB', label: 'SEGOB', color: '#b38e5d', desc: 'Identidad y Registro' },
];
