export const GOVERNMENT_SERVICES = [
    {
        id: "curp",
        title: "Consulta de CURP",
        description: "Obtén tu Clave Única de Registro de Población.",
        requirements: [
            "Conocer tu nombre completo y fecha de nacimiento",
            "O tener tu CURP a la mano si solo quieres imprimirla"
        ],
        targetUrl: "https://www.gob.mx/curp/",
        category: "Identidad"
    },
    {
        id: "acta-nacimiento",
        title: "Acta de Nacimiento",
        description: "Consulta y descarga tu copia certificada del acta de nacimiento.",
        requirements: [
            "CURP del solicitante",
            "Datos de filiación (nombre de padre/madre)",
            "Tarjeta bancaria para realizar el pago en línea"
        ],
        targetUrl: "https://www.miregistrocivil.gob.mx/",
        specialRequirement: {
            text: "Requiere cuenta Llave MX para ingresar",
            url: "https://www.llave.gob.mx/oauth.xhtml?client_id=202503261449479476&redirect_url=https%3A%2F%2Fwww.miregistrocivil.gob.mx%2FcallbackLlave.xhtml&state=PN5SNkD3WcOucXDq28TLL9adtYSnGijOvabCmdYzxu9Tuek1qBMAWoif5LkNkc2N_1"
        },
        category: "Registro Civil"
    },
    {
        id: "sat-citas",
        title: "Citas SAT",
        description: "Agenda una cita para trámites presenciales en el SAT.",
        requirements: [
            "RFC",
            "Correo electrónico personal",
            "Saber exactamente qué trámite vas a realizar"
        ],
        targetUrl: "https://citas.sat.gob.mx/",
        category: "Impuestos"
    },
    {
        id: "cedula",
        title: "Cédula Profesional",
        description: "Tramita tu cédula profesional electrónica.",
        requirements: [
            "e.firma vigente",
            "Tarjeta bancaria para pago",
            "Institución educativa debe haber emitido el título electrónico"
        ],
        targetUrl: "https://www.gob.mx/cedulaprofesional",
        category: "Educación"
    },
    {
        id: "pasaporte",
        title: "Citas Pasaporte",
        description: "Programa tu cita para tramitar o renovar el pasaporte.",
        requirements: [
            "Cuenta en el portal de citas SRE",
            "CURP certificada",
            "Correo electrónico"
        ],
        targetUrl: "https://citas.sre.gob.mx/",
        category: "Viajes"
    }
];
