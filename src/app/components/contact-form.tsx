"use client";

import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, User, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import Link from "next/link"; // Importamos Link para la navegación interna

export function ContactForm() {
  // PEGA AQUÍ TU ID DE FORMSPREE (ej: "mznqkpwl")
  const [state, handleSubmit] = useForm("xnnegvgq");

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Columna de Información */}
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
                <p className="text-slate-400 text-sm">hola@nativiza.dev</p>
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

        {/* Columna del Formulario */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 min-h-[400px] flex items-center"
        >
          <AnimatePresence mode="wait">
            {state.succeeded ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full text-center space-y-4"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado!</h3>
                <p className="text-slate-400">
                  Gracias por contactar. Te responderé en menos de 24 horas.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-6 text-primary hover:text-white transition-colors text-sm font-medium"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6 w-full"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    disabled={state.submitting}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    placeholder="Tu nombre"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    disabled={state.submitting}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    placeholder="tu@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">
                    ¿En qué puedo ayudarte?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={state.submitting}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
                    placeholder="Cuéntame un poco sobre tu proyecto..."
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs" />
                </div>

                {/* CASILLA DE VERIFICACIÓN RGPD */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    id="privacy"
                    type="checkbox"
                    name="privacy"
                    required // Esto impide enviar el formulario si no se marca
                    className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-800/50 text-primary focus:ring-primary focus:ring-offset-slate-900 cursor-pointer accent-indigo-500"
                  />
                  <label htmlFor="privacy" className="text-xs text-slate-400 leading-relaxed cursor-pointer select-none">
                    He leído y acepto la{" "}
                    <Link href="/legal/privacidad" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-400/30 hover:decoration-indigo-300 transition-colors">
                      política de privacidad
                    </Link>
                    {" "}y el tratamiento de mis datos para gestionar esta solicitud.
                  </label>
                </div>

                {state.errors && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    Hubo un error al enviar. Por favor revisa los campos.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}