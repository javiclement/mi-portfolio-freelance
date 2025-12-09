import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { JsonLd } from "@/components/shared/json-ld";

const inter = Inter({ subsets: ["latin"] });

// URL de producción
const BASE_URL = "https://nativiza.netlify.app"; 

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Nativiza | Experto en Web to App y Next.js",
    template: "%s | Nativiza",
  },
  description: "Desarrollador Freelance especializado en convertir Webs a Apps Nativas (Flutter), crear Landing Pages de alto rendimiento y estrategias de Email Marketing.",
  keywords: ["Nativiza", "Freelance", "Desarrollador Web", "Flutter", "Web to App", "Next.js", "Email Marketing"],
  authors: [{ name: "Javi Clement", url: BASE_URL }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: BASE_URL,
    title: "Nativiza - Servicios Digitales High-End",
    description: "Transforma tu negocio digital. De Web a App en tiempo récord.",
    siteName: "Nativiza",
  },
  robots: {
    index: true,
    follow: true,
  },
  // --- VERIFICACIÓN DE GOOGLE ---
  verification: {
    google: "PDi4fee8K7AeR25dKQ-n9D5FSpiHUtWF0wJDwsID0dI", // <--- Pega aquí el código que te dio Search Console (solo el código, no la etiqueta completa)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {/* Componente invisible para SEO en IA */}
        <JsonLd />
        
        <Navbar />
        <main className="min-h-screen relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}