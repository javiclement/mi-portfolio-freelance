"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Smartphone, Layout, Mail } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Landing Page Corporativa",
    category: "Desarrollo Web",
    description: "Web moderna para una consultora local. Optimizada para SEO y carga ultrarrápida.",
    icon: Layout,
    gradient: "from-blue-600 to-cyan-500",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    title: "E-Commerce Web to App",
    category: "App Nativa (Flutter)",
    description: "Conversión de tienda online existente a App Nativa iOS/Android. Integración de notificaciones push para ofertas.",
    icon: Smartphone,
    gradient: "from-violet-600 to-fuchsia-500",
    tags: ["Flutter", "Dart", "Push Notifications"],
    link: "#",
  },
  {
    title: "Campaña Newsletter",
    category: "Email Marketing",
    description: "Diseño y automatización de secuencia de bienvenida para e-commerce.",
    icon: Mail,
    gradient: "from-emerald-500 to-teal-400",
    tags: ["HTML Email", "Mailchimp", "Automation"],
    link: "#",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export function Portfolio() {
  return (
    <section id="projects" className="py-24 px-4 relative bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Proyectos <span className="text-primary">Recientes</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Una selección de mis últimos trabajos. Calidad y atención al detalle.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative rounded-3xl overflow-hidden bg-surface border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-all relative overflow-hidden`}>
                 {/* Noise texture overlay opcional, si tienes la imagen */}
                 <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
                 <project.icon className="absolute bottom-4 right-4 w-24 h-24 text-white/10 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="p-8">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={project.link} className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                  Ver Detalles <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}