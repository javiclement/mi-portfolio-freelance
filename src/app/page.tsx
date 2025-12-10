import dynamic from 'next/dynamic'; // Importamos dynamic para carga diferida
import { HeroSection } from "./components/hero-section";

// CARGA DIFERIDA (LAZY LOADING)
// Estos componentes no son críticos para la primera pintura (LCP).
// Al cargarlos con dynamic(), Next.js divide el código en trozos más pequeños (chunks)
// y solo los descarga cuando son necesarios, ahorrando ancho de banda inicial.
const ServicesGrid = dynamic(() => import('./components/services-grid').then(mod => mod.ServicesGrid));
const TechStack = dynamic(() => import('./components/tech-stack').then(mod => mod.TechStack));
const Portfolio = dynamic(() => import('./components/portfolio').then(mod => mod.Portfolio));
const ContactForm = dynamic(() => import('./components/contact-form').then(mod => mod.ContactForm));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* El Hero se mantiene con importación estática porque es lo primero que ve el usuario (LCP) */}
      <HeroSection />

      {/* El resto de secciones se cargarán progresivamente */}
      <TechStack />
      <ServicesGrid />
      <Portfolio />
      <ContactForm />
    </div>
  );
}