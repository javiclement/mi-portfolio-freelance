import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { JsonLd } from "@/components/shared/json-ld"; // Crearemos esto luego

const inter = Inter({ subsets: ["latin"] });

// URL de tu dominio (cámbialo cuando compres el dominio real)
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nativiza.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Nativiza | Transformamos Webs en Apps Nativas con Flutter",
    template: "%s | Nativiza",
  },
  description:
    "Especialista Freelance en convertir Webs a Apps Móviles (iOS/Android). Desarrollo de MVPs rápidos, Flutter y estrategias de retención con Notificaciones Push.",
  keywords: [
    "Web to App",
    "Flutter Developer",
    "Convertir web a app",
    "Desarrollador Freelance",
    "MVP Startup",
    "Next.js Expert",
    "Push Notifications",
  ],
  authors: [{ name: "Javi Clement", url: BASE_URL }],
  creator: "Javi Clement",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: BASE_URL,
    title: "Nativiza | Web to App & MVP Studio",
    description: "Lanza tu App móvil en tiempo récord. Transformamos tu web actual en una experiencia nativa de alto rendimiento.",
    siteName: "Nativiza",
    images: [
      {
        url: "/og-image.jpg", // Debes crear una imagen de 1200x630 en public/
        width: 1200,
        height: 630,
        alt: "Nativiza - High End Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nativiza | Web to App Expert",
    description: "Desarrollo High-end. De Web a App en semanas, no meses.",
    images: ["/og-image.jpg"],
    creator: "@tu_usuario_twitter", // Opcional
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        {/* Inyectamos Datos Estructurados para la IA */}
        <JsonLd />
        
        <Navbar />
        <main className="min-h-screen relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}