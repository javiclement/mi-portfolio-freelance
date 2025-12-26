import { Metadata } from "next";
import dynamic from 'next/dynamic';
import { HeroSection } from "./components/hero-section";
import { LatestPosts } from "./components/latest-posts"; // <--- Importamos el nuevo componente

// CARGA DIFERIDA DE COMPONENTES
const ServicesGrid = dynamic(() => import('./components/services-grid').then(mod => mod.ServicesGrid));
const TechStack = dynamic(() => import('./components/tech-stack').then(mod => mod.TechStack));
const Portfolio = dynamic(() => import('./components/portfolio').then(mod => mod.Portfolio));
const ContactForm = dynamic(() => import('./components/contact-form').then(mod => mod.ContactForm));

// --- NUEVA CONFIGURACIÓN SEO ESPECÍFICA PARA LA HOME ---
export const metadata: Metadata = {
  title: "Nativiza | Desarrollo Web High-End y Apps Nativas",
  description: "Transformamos tu negocio digital. Expertos en convertir Webs a Apps con Flutter, desarrollo Next.js de alto rendimiento y estrategias de retención.",
  alternates: {
    canonical: "https://nativiza.vercel.app", // Evita contenido duplicado
  },
  openGraph: {
    title: "Nativiza - Tu Partner Tecnológico",
    description: "Lanza tu App móvil en tiempo récord. Auditoría gratuita de tu proyecto web actual.",
    url: "https://nativiza.vercel.app",
    siteName: "Nativiza",
    images: [
      {
        url: "/og-image.jpg", // Asegúrate de tener una imagen 'og-image.jpg' en tu carpeta public/
        width: 1200,
        height: 630,
        alt: "Nativiza Agencia Digital",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TechStack />
      <ServicesGrid />
      <Portfolio />
      
      {/* SECCIÓN AÑADIDA: Últimos artículos del blog */}
      <LatestPosts />
      
      <ContactForm />
      
    </div>
  );
}