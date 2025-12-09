import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer"; // <--- 1. Importamos el Footer
import { JsonLd } from "@/components/shared/json-ld";
import { AnalyticsConsent } from "@/components/layout/analytics-consent";

const inter = Inter({ subsets: ["latin"] });

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
  verification: {
    google: "PDi4fee8K7AeR25dKQ-n9D5FSpiHUtWF0wJDwsID0dI",
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
        <JsonLd />
        
        <Navbar />
        
        <main className="min-h-screen relative overflow-hidden">
          {children}
        </main>

        {/* 2. Añadimos el Footer aquí para que salga en todas las páginas */}
        <Footer />

        <AnalyticsConsent gaId="G-0SBVB8CVQR" />
      </body>
    </html>
  );
}