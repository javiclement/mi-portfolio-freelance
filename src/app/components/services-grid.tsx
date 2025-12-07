"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Layout, 
  Zap, 
  ArrowUpRight,
  Mail, // Icono nuevo
  BarChart3 // Icono nuevo para analítica
} from "lucide-react";

const services = [
  {
    title: "Webs Next.js High-End",
    description: "Velocidad extrema y SEO perfecto. Desarrollo a medida con la tecnología que usan las grandes startups. Ideal para escalar.",
    icon: Zap,
    colSpan: "md:col-span-2", 
    bgGradient: "from-indigo-500/20 to-blue-500/20",
    badge: "Premium",
  },
  {
    title: "Campañas Mailing",
    description: "Diseño y envío de newsletters profesionales. Precios imbatibles (vía AWS). Incluye diseño responsive y reporte detallado de clics y aperturas.",
    icon: Mail,
    colSpan: "md:col-span-1", 
    bgGradient: "from-orange-500/20 to-red-500/20",
    badge: "Nuevo",
  },
  {
    title: "Web to App (Flutter)",
    description: "Convierto tu web actual en una App Nativa (iOS/Android). Fideliza a tus clientes con notificaciones push directas a su bolsillo.",
    icon: Smartphone,
    colSpan: "md:col-span-1", 
    bgGradient: "from-violet-500/20 to-fuchsia-500/20",
    badge: "Retención",
  },
  {
    title: "Webs WordPress",
    description: "La solución económica para pymes. Webs autogestionables y rápidas de lanzar para que tengas presencia online ya.",
    icon: Layout,
    colSpan: "md:col-span-2", 
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    badge: "Estándar",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
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
            Servicios <span className="text-primary">Estratégicos</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Desde el desarrollo hasta la captación. Herramientas pensadas para hacer crecer tu negocio real.
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
              className={`group relative p-8 rounded-3xl border border-white/10 bg-surface/50 hover:bg-surface hover:border-white/20 transition-all duration-300 overflow-hidden ${service.colSpan} hover:-translate-y-1`}
            >
              {/* Gradiente Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              />

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center gap-3">
                    {service.badge && (
                        <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                            {service.badge}
                        </span>
                    )}
                    <ArrowUpRight className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                </div>
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