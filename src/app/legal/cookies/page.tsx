import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | Nativiza",
  description: "Información sobre las cookies que utilizamos.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de Cookies</h1>
        
        <p>
          En <strong>Nativiza</strong> utilizamos cookies propias y de terceros para mejorar nuestros servicios mediante el análisis de sus hábitos de navegación.
        </p>

        <h3>¿Qué son las cookies?</h3>
        <p>
          Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación.
        </p>

        <h3>Cookies utilizadas en este sitio web</h3>
        <ul>
          <li><strong>Google Analytics 4:</strong> Cookies analíticas para medir el tráfico y comportamiento de los usuarios en la web de forma anónima.</li>
          <li><strong>Técnicas:</strong> Cookies necesarias para recordar si has aceptado o rechazado el banner de cookies.</li>
        </ul>

        <h3>Gestión de cookies</h3>
        <p>
          Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador.
        </p>
        
        <p className="mt-8 text-sm text-slate-500">
          Para más información sobre el tratamiento de sus datos, consulte nuestra <Link href="/legal/privacidad" className="text-indigo-500 hover:underline">Política de Privacidad</Link>.
        </p>
      </div>
    </div>
  );
}