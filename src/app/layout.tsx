import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Javi Clement | High-End Software Development",
  description: "Desarrollo de Apps Móviles y Web de alto impacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {/* Navbar Global */}
        <Navbar />
        
        {/* Contenido Principal */}
        <main className="min-h-screen relative overflow-hidden">
          {/* Fondo de ruido sutil o gradientes globales podrían ir aquí */}
          {children}
        </main>
      </body>
    </html>
  );
}