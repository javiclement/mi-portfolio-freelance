"use client";

import { motion, Variants } from "framer-motion";
import { 
  LayoutTemplate, 
  Smartphone, // Icono para móvil
  Mail, 
  Rocket, 
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    title: "Webs Corporativas",
    description: "Landing pages y sitios web modernos diseñados para convertir. Rápidos, bonitos y responsive (Next.js).",
    icon: LayoutTemplate,
    colSpan: "md:col-span-2", // Bloque Grande
    bgGradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Email Marketing",
    description: "Automatización de newsletters y diseño de plantillas HTML para fidelizar a tus clientes.",
    icon: Mail,
    colSpan: "md:col-span-1", // Bloque Pequeño
    bgGradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "De Web a App Móvil",
    description: "Convierto tu web actual en una App Nativa (iOS y Android) usando Flutter. Especialista en integrar Notificaciones Push para fidelizar usuarios.",
    icon: Smartphone,
    colSpan: "md:col-span-1", // Bloque Pequeño
    bgGradient: "from-cyan-500/20 to-sky-500/20",
  },
  {
    title: "MVPs Rápidos",
    description: "Valida tu idea de negocio sin gastar una fortuna. Desarrollo Prototipos Funcionales (Web o App) enfocados en lo esencial para salir al mercado rápido.",
    icon: Rocket,
    colSpan: "md:col-span-2", // Bloque Grande (Le damos importancia a esto)
    bgGradient: "from-violet-500/20 to-purple-500/20",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Mis <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Soluciones tecnológicas adaptadas a la realidad de tu negocio.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative p-8 rounded-3xl border border-white/10 bg-surface/50 hover:bg-surface hover:border-white/20 transition-colors overflow-hidden ${service.colSpan}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              />

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}