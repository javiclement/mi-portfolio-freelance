"use client";

import { motion, Variants } from "framer-motion";

const technologies = [
  { name: "Next.js 14", category: "Framework" },
  { name: "React", category: "Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Framer Motion", category: "Animation" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100 } 
  },
};

export function TechStack() {
  return (
    <section id="stack" className="py-20 border-y border-white/5 bg-black/20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-10">
          Potenciado por tecnología moderna
        </p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
            >
              <span className="text-slate-300 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}