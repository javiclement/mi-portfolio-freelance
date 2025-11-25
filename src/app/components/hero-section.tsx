"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Code2, Smartphone, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background Gradients (Efecto Personal) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-40 pointer-events-none" />
      
      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-300">
              Open to Work / Disponible
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
            Creative
          </span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto]">
            Developer.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformo ideas en experiencias digitales. Especializado en crear Landing Pages modernas y <strong>convertir tu Web en una App Nativa</strong> (iOS/Android) con notificaciones push.
        </motion.p>

        <motion.div
          variants={itemVariants}
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

        {/* Stack Simplificado (Actualizado) */}
        <motion.div
          variants={itemVariants}
          className="mt-20 pt-10 border-t border-white/5 grid grid-cols-3 gap-8 md:gap-16 opacity-60"
        >
            <div className="flex flex-col items-center gap-2">
                <Code2 className="w-6 h-6 text-slate-400" />
                <span className="text-xs uppercase tracking-wider text-slate-500">Modern Web</span>
            </div>
            {/* Elemento Actualizado */}
            <div className="flex flex-col items-center gap-2">
                <Smartphone className="w-6 h-6 text-slate-400" />
                <span className="text-xs uppercase tracking-wider text-slate-500">Web to App</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Zap className="w-6 h-6 text-slate-400" />
                <span className="text-xs uppercase tracking-wider text-slate-500">Performance</span>
            </div>
        </motion.div>
      </motion.div>
    </section>
  );
}