"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export function CookieBanner({ onAccept, onDeny }: { onAccept: () => void, onDeny: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Comprobamos si ya hay una decisión guardada
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Si no hay decisión, mostramos el banner tras un pequeño retraso
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "granted");
    setShow(false);
    onAccept();
  };

  const handleDeny = () => {
    localStorage.setItem("cookie_consent", "denied");
    setShow(false);
    onDeny();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:max-w-md z-50 bg-slate-900/95 backdrop-blur shadow-2xl border border-white/10 p-6 rounded-2xl text-sm text-slate-300"
        >
          <h3 className="text-white font-bold mb-2">🍪 Privacidad y Cookies</h3>
          <p className="mb-4 leading-relaxed">
            Usamos cookies para mejorar tu experiencia y analizar el tráfico. 
            Puedes aceptar o rechazar el seguimiento.
            <br />
            <Link href="/legal/cookies" className="text-primary hover:underline mt-1 inline-block">
              Leer política
            </Link>
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleDeny}
              className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white font-medium transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg text-white font-bold transition-colors shadow-lg shadow-primary/20"
            >
              Aceptar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}