# 🏛️ Sistema de Gestión de Servicios Ciudadanos - Gobierno Digital

> **Centraliza trámites gubernamentales en una sola plataforma moderna, accesible y eficiente.**

[![Ver Demo en Vivo](https://img.shields.io/badge/Ver_Demo_En_Vivo-FF0000?style=for-the-badge&logo=vercel&logoColor=white)](https://ciudadno-gobierno-digital.vercel.app/)
[![Reportar Bug](https://img.shields.io/badge/Reportar_Bug-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/barockatr/Ciudadno-Gobierno-Digital/issues)

![Dashboard Preview](Docs/Images/hero-home.png)

## 📌 El Problema
Los ciudadanos enfrentan dificultades al navegar por múltiples sitios web gubernamentales dispersos y obsoletos para realizar trámites esenciales.
**Solución:** Esta plataforma centraliza servicios como CURP, Actas de Nacimiento y Citas SAT en una interfaz de usuario unificada, intuitiva y accesible (SPA), mejorando drásticamente la experiencia del ciudadano mediante micro-interacciones y UI Premium.

## ✨ Características Clave (Capacidades Actuales)

* **🤖 Asistente Ciudadano con IA:** Integración con **Groq SDK** (Llama 3/Mixtral) para respuestas instantáneas (<1s latencia) sobre dudas de trámites en lenguaje natural.
* **🌐 Directorio Dinámico (CoverFlow 3D):** Filtra y clasifica servicios gubernamentales usando una experiencia visual inmersiva usando matemáticas 3D y Framer Motion.
* **📰 Portal de Noticias en Tiempo Real:** Consumo de la API de **GNews** para alimentar comunicados oficiales con un layout editorial adaptable y modales de lectura estéticos.
* **�️ Onboarding Interactivo (Pre-Flight Modal):** Antes de redirigir al ciudadano a sitios externos institucionales complejos, se le presenta un "Checklist" interactivo de requisitos para evitar frustraciones.
* **💎 Diseño Glassmorphism Premium:** Uso extensivo de filtros de desenfoque (`backdrop-filter`), máscaras translúcidas y CSS Grid moderno para una experiencia limpia y nativa.

![Funcionalidad 3D/Modal](Docs/Images/tramites.png)

## 🛠️ Stack Tecnológico y Arquitectura

El proyecto es una **Single Page Application (SPA)** puramente Frontend, sin bases de datos ni backend propio, construida para ser ultraligera:

- ![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) **Core Framework**
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) **Build Tool & Dev Server** (Módulos ES Nativos)
- ![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=for-the-badge&logo=react-router&logoColor=white) **Enrutamiento Declarativo**
- ![CSS3](https://img.shields.io/badge/CSS3_Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white) **Estilado:** Vainilla CSS robusto con Variables CSS, Flexbox y Grid (Sin Tailwind, control atómico perfecto).
- ![Groq](https://img.shields.io/badge/Groq_SDK-orange?style=for-the-badge) **Integración LLM para Chatbot**
- ![GNews](https://img.shields.io/badge/GNews_API-00A651?style=for-the-badge) **Fuente de Noticias en Tiempo Real**
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion_12-0055FF?style=for-the-badge&logo=framer&logoColor=white) **Animaciones y Transiciones de Layout**
- ![Lucide React](https://img.shields.io/badge/Lucide_React-F05032?style=for-the-badge) **Iconografía Consistente**

## 🚀 Instalación Rápida

Sigue estos pasos para ejecutar el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/barockatr/Ciudadno-Gobierno-Digital.git
    cd Ciudadno-Gobierno-Digital
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example` (Importante para que las APIs funcionen):
    ```env
    VITE_GROQ_API_KEY=tu_api_key_de_groq_aqui
    VITE_GNEWS_API_KEY=tu_api_key_de_gnews_aqui
    ```

4.  **Correr el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    
    Abre tu navegador en `http://localhost:5173` para ver la aplicación.

## 📸 Capturas de Pantalla

### Dashboard Principal y Directorio 3D
Una vista clara y dinámica de todos los servicios disponibles.
![Dashboard](Docs/Images/servicios-destacados.png)

### Asistente Virtual (Chatbot via Groq)
Un asistente impulsado por IA para resolver dudas en tiempo real.
![Chatbot](Docs/Images/chat-bot-ia.png)

### Portal de Noticias
Consumo de comunicados oficiales en tiempo real desde fuentes gubernamentales.
![Noticias](Docs/Images/noticias.png)

## 💻 Implementación Técnica y Buenas Prácticas

### ⚡ Manejo de Asincronía y APIs Externas
Uso intensivo de `fetch` nativo para GNews y el SDK oficial para Groq, gestionando estados complejos de UI (`loading`, `error`, `success`) mediante `async/await` para no bloquear el hilo principal.

### 🛡️ Gestión de Errores (Try/Catch)
Implementación de UI de contingencia (fallbacks). Si la API de noticias falla, se muestra un componente de error interactivo con opción de "Reintentar", evitando pantallas blancas.

### 🔑 Seguridad de API Keys (Punto Crítico)
Actualmente el proyecto expone lógica de conexión a Groq y GNews del lado del cliente mediante `import.meta.env`. **Para despliegue a producción real, esto requiere una migración a un Backend for Frontend (BFF)**.

### 🧩 Manejo de Estado (Hooks)
El estado de la aplicación es puramente local usando los Hooks nativos de React (`useState`, `useEffect`), descartando Redux o Zustand para mantener el bundle final ultraligero y el rendimiento inmediato.

---

## 🏗️ Arquitectura y Estructura del Proyecto

El sistema está diseñado bajo un esquema modular y escalable usando Vite:

- `src/components/`: Componentes atómicos (Navbar, Modales de Noticias, Chatbot, CoverFlow3D) fuertemente acoplados a sus respectivos archivos `.css`.
- `src/pages/`: Vistas completas enrutadas (`Home`, `Tramites`, `Noticias`).
- `src/services/`: Capa de abstracción (`groqService.js`). Centraliza el prompt maestro de la IA.
- `src/data/`: Fuentes de verdad *Mockeadas* / Estáticas (`tramites.js`, `servicesData.js`) listas para ser reemplazadas por llamadas a una Base de Datos real.

---

## 🗺️ Roadmap (Próximas Mejoras y Escalabilidad)

Si bien la plataforma actual funge como una maqueta interactiva funcional de alta fidelidad, para escalar a un servicio masivo se contempla el siguiente roadmap:

#### 🔙 Arquitectura y Backend
- [ ] **Desarrollo de BFF (Backend for Frontend):** Migrar las llamadas de Groq y GNews a Node.js/Express para ocultar las API Keys y mejorar la seguridad.
- [ ] **Sistema de Caché (Redis):** Cachear las respuestas de noticias y algunos prompts de IA repetitivos para escalar a miles de usuarios sin saturar la cuota de las APIs.
- [ ] **Bases de Datos Real:** Migrar `tramites.js` a PostgreSQL/Supabase para editar servicios desde un panel administrativo.

#### � Producto y Funcionalidades Ciudadanas
- [ ] **Autenticación Ciudadana:** Integrar con sistemas de identidad digital (OAuth / Auth0) para crear el dashboard "Mis Trámites Realizados".
- [ ] **Buscador Semántico (RAG/Embeddings):** Mejorar la búsqueda para que entienda intenciones. Si el usuario escribe "quiero manejar", sugerir "Licencia de Conducir B1".
- [ ] **Agendado de Citas Nativas:** Expandir el `PreFlightModal` para conectarse a las agendas institucionales reales y apartar fechas desde la misma app.
- [ ] **Soporte Offline (PWA):** Configurar Service Workers con `vite-plugin-pwa` para que los ciudadanos puedan consultar requisitos sin conexión a internet.
- [ ] **Accesibilidad (a11y) y Multi-idioma:** Integrar Web Speech API (texto a voz) soporte `i18next` para dialectos indígenas nativos y extranjeros.

---

## 👨‍💻 Autor

**Antonio**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](TU_LINKEDIN_REAL)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/barockatr)

---
*Desarrollado para descentralizar y revolucionar la interacción ciudadano-gobierno en México.*
