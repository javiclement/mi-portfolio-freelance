"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, User, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const myForm = e.currentTarget;
    const formData = new FormData(myForm);

    try {
      // CAMBIO CLAVE: Enviamos la petición a "/__forms.html" en lugar de "/"
      // Esto evita que el router de Next.js intercepte el mensaje.
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        console.error("Error Netlify:", response.status, response.statusText);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error de red:", error);
      setStatus("error");
    }
  };

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
            ¿Tienes un proyecto en mente? Escríbeme y veamos cómo podemos hacerlo realidad.
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
          className="bg-surface/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 min-h-[400px] flex items-center"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
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
                  onClick={() => setStatus("idle")}
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
                // Nombre debe coincidir con __forms.html
                name="contact"
              >
                {/* Input oculto necesario para FormData */}
                <input type="hidden" name="form-name" value="contact" />

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Mensaje</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
                  ></textarea>
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    Hubo un error al enviar. Por favor intenta de nuevo.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar
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