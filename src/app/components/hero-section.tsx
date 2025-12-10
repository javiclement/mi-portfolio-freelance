"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Code2, Smartphone, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  // Variantes solo para elementos no críticos (decoración, botones)
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20">
      {/* Fondo estático para renderizado rápido */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-40 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center z-10">
        
        {/* Badge: Animación CSS nativa (animate-fade-in) definida en tailwind.config */}
        <div className="flex justify-center mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-300">
              Open to Work / Disponible
            </span>
          </div>
        </div>

        {/* Título Principal: SIN Framer Motion para el LCP. 
            Usamos CSS puro para asegurar que Google lo lee al instante. */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
            Creative
          </span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto]">
            Developer.
          </span>
        </h1>

        {/* Subtítulo: CSS Animation */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          Transformo ideas en experiencias digitales. Especializado en crear Landing Pages modernas y <strong>convertir tu Web en una App Nativa</strong> (iOS/Android) con notificaciones push.
        </p>

        {/* Botones: Aquí sí podemos usar Framer Motion porque no son texto LCP crítico */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="group relative px-8 py-4 rounded-full bg-primary text-white font-semibold transition-all hover:bg-primary-hover hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] flex items-center gap-2"
          >
            Hablemos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="#projects"
            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Ver Mi Trabajo
          </Link>
        </motion.div>

        {/* Stack: Animación diferida con Framer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 0.6, transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
          }}
          className="mt-20 pt-10 border-t border-white/5 grid grid-cols-3 gap-8 md:gap-16"
        >
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
                <Code2 className="w-6 h-6 text-slate-400" />
                <span className="text-xs uppercase tracking-wider text-slate-500">Modern Web</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
                <Smartphone className="w-6 h-6 text-slate-400" />
                <span className="text-xs uppercase tracking-wider text-slate-500">Web to App</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
                <Zap className="w-6 h-6 text-slate-400" />
                <span className="text-xs uppercase tracking-wider text-slate-500">Performance</span>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}