# 🚀 App Ciudadano: Plataforma de Gobierno Digital Moderno

> Una **Aplicación de Alto Rendimiento** diseñada para revolucionar la interacción ciudadano-gobierno mediante mecánicas inmersivas, automatización IA y excelencia visual en el ecosistema React moderno.

<p align="center">
  <img src="Docs/Images/hero-home.png" alt="Landing Page de App Ciudadano" width="800">
</p>

<p align="center">
  <img src="Docs/Images/servicios-destacados.png" alt="Vista principal mostrando los servicios destacados" width="800">
</p>

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Groq](https://img.shields.io/badge/Groq_SDK-orange?style=for-the-badge)

---

## 🚀 Despliegue (Live Demo)

Puedes ver la aplicación funcionando aquí: [Ver Demo](https://ciudadno-gobierno-digital.vercel.app/)

> **⚠️ Nota sobre despliegue:** 
> Esta plataforma es una **SPA puramente Frontend** distribuida globalmente en Vercel. 
> Integrada con APIs externas (Groq Ecosystem y GNews) que responden fluidamente en tiempo real. 
> ¡Disfruta de una experiencia gubernamental ultraligera y sin fricciones! ⚡

---

## 🤖 Asistente Virtual: Motor de Apoyo Ciudadano (Highlight Principal)

<p align="center">
  <img src="Docs/Images/chat-bot-ia.png" alt="Interfaz del Chatbot impulsado por Groq resolviendo dudas ciudadanas" width="800">
</p>

El corazón interactivo de la aplicación es su Asistente Ciudadano, un chatbot especializado impulsado por Modelos de Lenguaje Grandes (LLMs) diseñado para resolver instantáneamente laberintos burocráticos y dudas sobre trámites complejos.

- **Integración Ultrarrápida con Groq:** Consumo de modelos LLM (Llama 3/Mixtral) a través del SDK de Groq, ofreciendo respuestas contextuales con la latencia más baja del mercado y un tiempo de inferencia ultrarrápido.
- **Flujo de Asistencia Conversacional:** Interfaz tipo chat con gestión de estados asíncronos (`loading` y *typing indicators*) para mimetizar una experiencia operativa humana y deductiva.
- **Micro-interacciones y VFX:** Botón de acción flotante (FAB) omnipresente con notificaciones sutiles, desenfoques de fondo dinámicos (*backdrop-filter*) en los modales y animaciones espaciales para mantener al usuario enfocado.
- **Prompt Engineering Gubernamental:** El motor base está pre-configurado con restricciones (system prompts) para actuar exclusivamente como un asesor jurídico y cívico especializado en trámites mexicanos, acotando "alucinaciones" de la IA.

---

## 🛠️ Architecture Insights: Rendimiento como Single Page App

Para maximizar el rendimiento de la aplicación y la agilidad del ecosistema, se ejecutó una arquitectura orientada al frontend ligero: **un rediseño de portal cívico sin un monolito backend tradicional.**

- **Zero Boilerplate de Estado Global:** El estado operativo se gestiona a nivel de árbol de componentes usando hooks reactivos nativos (`useState`, `useEffect`, `useRef`), descartando Redux o Zustand para priorizar un bundle inicial minúsculo.
- **Topología Desacoplada de APIs Externas:** La orquestación de datos transcurre directamente conectándose a microservicios externos estandarizados (GNews REST API y Groq SDK), volviendo interfaces tradicionalmente estáticas en entornos de consumo vivo.
- **Enrutado Pre-Calculado (Declarativo):** Transiciones instantáneas entre rutas críticas ("Home", "Trámites", "Noticias") impulsadas por React Router, proveyendo al usuario transiciones continuas sin parpadeos ni recargas de página (SPA Pura).

---

## ✨ High-Fidelity UX/UI & Features

<p align="center">
  <img src="Docs/Images/tramites.png" alt="Demostración visual del layout con CoverFlow 3D" width="800">
</p>

- **Glassmorphism & Vanilla CSS:** Arquitectura UI 100% customizada sin depender de frameworks coercitivos como Tailwind. Uso avanzado de transparencias, `backdrop-filter`, refracciones de luz CSS y variables de entorno para una UI gubernamental que irradie modernidad.
- **Directorio Espacial 3D (CoverFlow):** Malla o Listado de paginación erradicados en favor de una implementación matemática de CoverFlow Inmersivo. Una ingeniería visual que gestiona la distribución, rotación en eje Y y escala de tarjetas para navegar trámites tangibles.
- **Dashboard de Noticias Oficiales:** Layout editorial alimentado con REST API de GNews. Integración de modales envolventes para la lectura en tiempo real.
<p align="center">
  <img src="Docs/Images/noticias.png" alt="Portal de Noticias en tiempo real" width="800">
</p>
- **Onboarding Interactivo (Pre-Flight Modal):** Capa defensiva de experiencia de usuario. Antes de redirigir a un ciudadano a oscuros sitios de gobierno antiguos, es recibido por módulos de checklist y prerrequisitos transparentes.

---

## 🛡️ Robustez y Resiliencia

Diseñado bajo la firme filosofía de ofrecer claridad técnica ante la falla de red o de sistema.

- **Error Catching en APIs de Alto Riesgo:** Intercepción global y granular a peticiones `async/await` de GNews y Groq mediante bloques `try/catch` extensivos para aplastar excepciones no manejadas.
- **Fallback UI & Carga Controlada:** Si la red metropolitana o la conexión del ciudadano colapsan temporalmente, el ecosistema despliega interfaces de carga ("Skeleton UIs") o mensajes de reintento graciosos, bloqueando elegantemente las "Pantallas en Blanco de la Muerte" y previendo la frustración.

---

## 🚀 Roadmap Evolutivo

✅ **Características Clave (Completadas):** 
- Arquitectura Interfaz 100% Premium con Glassmorphism.
- Asistente Legal Gubernamental automatizado con Groq IA.
- Directorio Espacial interactivo 3D (CoverFlow Algorithm).
- Consumo en vivo y lectura modular de RSS/Noticias Oficiales.

🔮 **Próximos Pasos (En Desarrollo):**
- 👤 **Capa BFF de Seguridad (Backend For Frontend):** Integración de entorno Node.js Express como puente (Proxy) para blindar y ocultar las API Keys expuestas bajo el paradigma del lado del cliente.
- 🌐 **Soporte Offline Robusto (PWA):** Despliegue de "Service Workers" que encripten cachés de listados de Prerrequisitos de Trámites, accesibles sin red móvil (vital para accesibilidad).
- 📈 **Autenticación "Identidad Ciudadana":** Identificación OAuth 2.0 y base relacional PostgreSQL/Supabase, emparejando usuarios con su propio expediente de "Trámites Frecuentes".
- 🎇 **Motor de Búsqueda Semántica Vectorial:** Sustitución de la coincidencia abstracta (String matching) de la caja de búsqueda por Embeddings de similitud vectorial para que el ciudadano busque por intención (Ej: *"Tengo que manejar un auto"* → *"Trámite de Licencias"*).

---

## ⚙️ Instalación y Despliegue Local

Sigue estos pasos para correr el proyecto completamente en un anillo de pruebas locales. Necesitarás tener Node.js instalado.

### 1. Clonar el repositorio
```bash
git clone https://github.com/barockatr/Ciudadno-Gobierno-Digital.git
cd Ciudadno-Gobierno-Digital
```

---

### 2. Variables de Entorno y Arquitectura de Pases (API Keys)

Encontrarás un archivo `.env.example` en la raíz. Copia su anatomía y genera tu clave privada `.env`:

```bash
VITE_GROQ_API_KEY=tu_api_key_de_groq_aqui
VITE_GNEWS_API_KEY=tu_api_key_de_gnews_aqui
```

> Obtén gratuitamente estas credenciales creando cuentas desarrolladoras en Groq Developer Console y GNews API. 🟢

---

### 3. Iniciar el Motor Frontend (React + Vite)

Desde la raíz de la terminal instalaremos core dependencies y orquestaremos el Web Server en caliente (HMR):

```bash
npm install
npm run dev
```

> La suite administrativa y el ecosistema completo se ejecutará en **`http://localhost:5173`** 🚀

---

> **Nota Crítica de Despliegue Front Vibe:** Si al pulsar en el apartado 'Asistente IA' o 'Noticias' vislumbras advertencias o faltas de carga, audita inmediatamente la consistencia de tu archivo `.env`.
