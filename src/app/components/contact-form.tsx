"use client";

import { motion } from "framer-motion";
import { Send, Mail, User } from "lucide-react";

export function ContactForm() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
        </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cuéntame tu <br />
            <span className="text-primary">Idea</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-md">
            ¿Tienes un proyecto en mente? Escríbeme y veamos cómo podemos hacerlo realidad. Sin intermediarios.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                    <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-slate-400 text-sm">javiclement@gmail.com</p>
                </div>
            </div>
            
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                    <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h4 className="text-white font-medium">Disponibilidad</h4>
                    <p className="text-slate-400 text-sm">Aceptando nuevos proyectos</p>
                </div>
            </div>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface/50 backdrop-blur-md p-8 rounded-3xl border border-white/10"
        >
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Nombre</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Tu nombre"
                />
            </div>
            
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="tu@email.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">¿En qué puedo ayudarte?</label>
                <textarea 
                    name="message" 
                    id="message" 
                    rows={4}
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Cuéntame un poco sobre tu proyecto..."
                ></textarea>
            </div>

            <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
            >
                <Send className="w-5 h-5" />
                Enviar Mensaje
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}