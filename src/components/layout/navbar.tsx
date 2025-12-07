"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

// Enlaces de navegación incluyendo el Blog
const navLinks = [
  { name: "Servicios", href: "/#services" },
  { name: "Stack", href: "/#stack" },
  { name: "Proyectos", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/60 backdrop-blur-xl border-white/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO / MARCA */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Smartphone className="w-6 h-6 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Nativiza<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Menú Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-all shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)]"
          >
            Iniciar Proyecto
          </Link>
        </div>

        {/* Botón Menú Móvil */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}