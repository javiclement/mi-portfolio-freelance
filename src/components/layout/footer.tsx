import Link from "next/link";
import { Github, Send, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 mt-auto relative overflow-hidden">
      {/* Luz ambiental sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        
        {/* Izquierda: Copyright y Legal */}
        <div className="flex flex-col md:items-start items-center gap-4">
          <div className="flex gap-6 text-xs text-slate-500 font-medium">
            <Link href="/legal/privacidad" className="hover:text-slate-300 transition-colors">Privacidad</Link>
            <Link href="/legal/cookies" className="hover:text-slate-300 transition-colors">Cookies</Link>
            <Link href="/legal/aviso-legal" className="hover:text-slate-300 transition-colors">Aviso Legal</Link>
          </div>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Nativiza. Diseño y código con pasión. Todos los derechos reservados.
          </p>
        </div>

        {/* Derecha: Sección Conecta (Social) */}
        <div className="flex items-center gap-6">
          <span className="text-xs font-bold text-slate-500 tracking-widest uppercase hidden md:block">Conecta</span>
          <div className="flex gap-3">
            {[
              { icon: Send, href: "https://t.me/javivisanph" },
              { icon: Github, href: "https://github.com/javiclement" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/javiclement/" },
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}