import { HeroSection } from "./components/hero-section";
import { ServicesGrid } from "./components/services-grid";
import { TechStack } from "./components/tech-stack";
import { Portfolio } from "./components/portfolio";
import { ContactForm } from "./components/contact-form";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section (Marca Personal) */}
      <HeroSection />

      {/* 2. Tech Stack (Herramientas actuales) */}
      <TechStack />

      {/* 3. Services Grid (Servicios Simplificados) */}
      <ServicesGrid />

      {/* 4. Portfolio (Mis Proyectos) */}
      <Portfolio />

      {/* 5. Contacto (Trato directo) */}
      <ContactForm />
      
      {/* Footer Personal */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-white/5 bg-background">
        <p>© {new Date().getFullYear()} Nativiza. Diseño y código con pasión.</p>
      </footer>
    </div>
  );
}