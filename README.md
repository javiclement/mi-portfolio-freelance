🏗 Project Blueprint: Tech Agency Portfolio

Estado: Fase 1 (Setup & Cimientos)
Estilo: Minimalismo Tecnológico (Dark Mode Predominant)

🎨 Design Tokens

1. Paleta de Colores (Tailwind Mapping)

El diseño se basará en un "Dark Mode" elegante por defecto, utilizando la escala de grises profundos para evitar el negro puro (#000000) que cansa la vista.

Background Base (bg-background): slate-950 (#020617) - Un azul grisáceo muy profundo.

Surface / Cards (bg-surface): slate-900 (#0f172a) con opacidad para glassmorphism.

Primary Accent (text-primary, bg-primary): indigo-500 (#6366f1) a violet-600 (#7c3aed). Usaremos gradientes lineales sutiles.

Text Main (text-foreground): slate-50 (#f8fafc).

Text Muted (text-muted): slate-400 (#94a3b8).

Borders (border-white/10): Líneas muy sutiles, casi imperceptibles.

2. Tipografía

Font Family: Inter (Google Fonts) o Geist Sans (Next.js default).

Headings: Tracking tight (letras más juntas) para un look moderno.

Body: Tracking normal, leading-relaxed para legibilidad.

3. Efectos (Glassmorphism)

Glass Standard: bg-white/5 backdrop-blur-lg border border-white/10.

Glass Hover: bg-white/10 transition-all duration-300.

📂 Estructura de Directorios (Next.js App Router)

/src
  /app
    /components      # Componentes específicos de rutas
      /hero-section.tsx
      /services-grid.tsx
    layout.tsx       # Root Layout (Fuentes, Metadata, Navbar global)
    page.tsx         # Home Page
    globals.css      # Tailwind imports & Custom CSS variables
  /components
    /ui              # Componentes base (Botones, Inputs, Cards)
    /layout          # Navbar, Footer
    /shared          # Componentes reusables (Logo, IconWrappers)
  /lib
    utils.ts         # cn() helper para Tailwind merge
  /public
    /assets          # Imágenes estáticas



✅ To-Do List (Roadmap)

FASE 1: SETUP & CIMIENTOS

$$x$$

 Definir Design Tokens (Blueprint).

$$x$$

 Configurar tailwind.config.ts.

$$x$$

 Inicializar proyecto Next.js.

$$x$$

 Limpiar archivos boilerplate (page.tsx, globals.css).

$$x$$

 Crear layout.tsx base con fuentes y metadatos.

$$x$$

 Crear Navbar Component con efecto Glassmorphism.

FASE 2: HOME & HERO

$$$$

 Diseño Sección Hero (H1, Subtitle, CTA).

$$$$

 Integrar Framer Motion (Fade-in effects).

$$$$

 Fondo abstracto (Gradients/Mesh).

FASE 3: SERVICIOS

$$$$

 Crear componente Bento Grid.

$$$$

 Implementar iconos Lucide.

$$$$

 Carrusel de Tech Stack.

FASE 4: FINALIZACIÓN

$$$$

 Sección Portfolio.

$$$$

 Formulario de Contacto (Netlify setup).

$$$$

 Build & Deploy.