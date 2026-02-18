# 🏛️ Sistema de Gestión de Servicios Ciudadanos - Gobierno Digital

> **Centraliza trámites gubernamentales en una sola plataforma moderna, accesible y eficiente.**

[![Ver Demo en Vivo](https://img.shields.io/badge/Ver_Demo_En_Vivo-FF0000?style=for-the-badge&logo=vercel&logoColor=white)](https://ciudadno-gobierno-digital.vercel.app/)
[![Reportar Bug](https://img.shields.io/badge/Reportar_Bug-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/barockatr/Ciudadno-Gobierno-Digital/issues)

![Dashboard Preview](https://via.placeholder.com/800x450.png?text=Vista+Previa+del+Dashboard+Ciudadano)

## 📌 El Problema
Los ciudadanos enfrentan dificultades al navegar por múltiples sitios web gubernamentales dispersos y obsoletos para realizar trámites esenciales.
**Solución:** Esta plataforma centraliza servicios como CURP, Actas de Nacimiento y Citas SAT en una interfaz de usuario unificada, intuitiva y accesible, mejorando drásticamente la experiencia del ciudadano.

## ✨ Características Clave

* **🤖 Asistente Ciudadano con IA:** Integración con **Groq API** (Llama 3/Mixtral) para respuestas instantáneas (<1s latencia) sobre dudas de trámites.
* **📱 Diseño Responsivo:** Interfaz adaptada a móviles usando **TailwindCSS**, pensando en ciudadanos que acceden desde celulares básicos.
* **🔍 Búsqueda Centralizada:** Motor de búsqueda para filtrar entre decenas de servicios gubernamentales (SAT, CURP, IMSS).
* **⚡ Rendimiento Optimizado:** Carga inmediata gracias a **Vite** y gestión de estado eficiente.

## 🛠️ Stack Tecnológico

El proyecto está construido con tecnologías modernas para garantizar rendimiento y escalabilidad:

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) **Frontend Library**
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) **Build Tool & Dev Server**
- ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) **Utility-First CSS Framework**
- ![Groq](https://img.shields.io/badge/Groq-AI-orange?style=for-the-badge) **AI Integration for Chatbot**
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white) **Animations**
- ![Lucide React](https://img.shields.io/badge/Lucide_React-F05032?style=for-the-badge) **Icons**

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
    Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:
    ```env
    VITE_GROQ_API_KEY=tu_api_key_aqui
    ```

4.  **Correr el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    
    Abre tu navegador en `http://localhost:5173` para ver la aplicación.

## 📸 Capturas de Pantalla

### Dashboard Principal
Una vista clara de todos los servicios disponibles.
![Dashboard](https://via.placeholder.com/600x400.png?text=Dashboard+Principal)

### Asistente Virtual (Chatbot via Groq)
Un asistente impulsado por IA para resolver dudas en tiempo real.
![Chatbot](https://via.placeholder.com/300x500.png?text=Asistente+Virtual)

## 💻 Implementación Técnica

Este proyecto demuestra buenas prácticas en desarrollo frontend moderno:

### ⚡ Manejo de Asincronía (Async/Await)
Utilizamos `async/await` para gestionar operaciones que toman tiempo, como las consultas a la API de Inteligencia Artificial (Groq). Esto evita bloquear la interfaz de usuario mientras esperamos la respuesta del servidor, garantizando una experiencia fluida.
*   **Ejemplo:** `sendMessageToGroq` en `src/services/groqService.js`.

### 🛡️ Gestión de Errores (Try/Catch)
Implementamos bloques `try/catch` robustos en nuestras llamadas a servicios externos. Si la API falla o hay problemas de red, capturamos el error y mostramos un mensaje amigable al usuario en lugar de dejar que la aplicación colapse.
*   **Ejemplo:** Manejo de errores de conexión en el servicio del chatbot.

### 🔑 Seguridad de API Keys
Las credenciales sensibles nunca se exponen en el código fuente (`hardcoded`). Utilizamos variables de entorno (`.env`) accesibles solo a través de `import.meta.env.VITE_GROQ_API_KEY`. Esto protege la clave API y sigue las mejores prácticas de seguridad para aplicaciones Vite.

### 🧩 Manejo de Estado (Hooks)
Aprovechamos al máximo los Hooks de React para una gestión de estado eficiente y reactiva:
*   **`useState`**: Para controlar estados locales como la visibilidad del chatbot (`isOpen`), el historial de mensajes (`messages`), y los filtros de búsqueda de trámites.
*   **`useEffect`**: Para manejar efectos secundarios como el scroll automático al recibir nuevos mensajes o la comunicación entre componentes (event listeners).

---
*Desarrollado para mejorar la interacción ciudadano-gobierno.*
