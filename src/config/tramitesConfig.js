export const TRAMITES_CONFIG = {
    CURP: {
        id: "CURP",
        title: "Consulta de CURP",
        description: "Obtén tu Clave Única de Registro de Población.",
        fields: [
            {
                name: "nombre",
                label: "Nombre(s)",
                type: "text",
                required: true,
                validation: /^[a-zA-Z\s]+$/,
                errorMsg: "El nombre solo debe contener letras.",
            },
            {
                name: "primerApellido",
                label: "Primer Apellido",
                type: "text",
                required: true,
                validation: /^[a-zA-Z\s]+$/,
                errorMsg: "El apellido solo debe contener letras.",
            },
            {
                name: "segundoApellido",
                label: "Segundo Apellido",
                type: "text",
                required: false, // Optional
                validation: /^[a-zA-Z\s]*$/,
                errorMsg: "El apellido solo debe contener letras.",
            },
            {
                name: "fechaNacimiento",
                label: "Fecha de Nacimiento",
                type: "date",
                required: true,
            },
            {
                name: "estadoNacimiento",
                label: "Estado de Nacimiento",
                type: "select",
                options: [
                    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
                    "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima",
                    "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México",
                    "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla",
                    "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora",
                    "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
                ],
                required: true,
            }
        ],
    },
    ACTA_NACIMIENTO: {
        id: "ACTA_NACIMIENTO",
        title: "Copia Certificada de Acta de Nacimiento",
        description: "Descarga una copia certificada de tu acta.",
        fields: [
            {
                name: "curp",
                label: "CURP",
                type: "text",
                required: true,
                validation: /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z\d]\d$/,
                errorMsg: "Formato de CURP inválido (Ej: ABCD900101HDFR99).",
                maxLength: 18,
            },
        ],
    },
};
