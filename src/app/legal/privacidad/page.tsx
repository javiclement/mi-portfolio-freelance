import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Nativiza",
  description: "Cómo gestionamos tus datos personales en Nativiza.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de Privacidad</h1>
        
        <h3>1. Responsable del Tratamiento</h3>
        <p>
          Los datos personales recabados a través de este sitio web son responsabilidad de <strong>Francisco Javier Clement Navarro</strong> (Nativiza), con domicilio en José Bernad Amorós, 95, 03205 Elche.
        </p>

        <h3>2. Finalidad del tratamiento</h3>
        <p>Tratamos la información que nos facilitan las personas interesadas con el fin de:</p>
        <ul>
          <li><strong>Formulario de Contacto:</strong> Gestionar el envío de la información que nos soliciten y mantener el contacto profesional.</li>
          <li><strong>Analítica Web:</strong> Comprender cómo los usuarios interactúan con nuestra web para mejorar nuestros servicios (a través de Google Analytics 4).</li>
        </ul>

        <h3>3. Legitimación</h3>
        <p>
          La base legal para el tratamiento de sus datos es el <strong>consentimiento</strong>. Al rellenar los formularios o aceptar las cookies, usted da su consentimiento expreso para el tratamiento de sus datos personales.
        </p>

        <h3>4. Destinatarios</h3>
        <p>
          Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal. No obstante, compartimos datos con proveedores de servicios esenciales como:
        </p>
        <ul>
          <li><strong>Netlify:</strong> Proveedor de hosting y gestión de formularios.</li>
          <li><strong>Google Analytics:</strong> Servicio de analítica web.</li>
        </ul>

        <h3>5. Derechos</h3>
        <p>
          Usted tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, enviando un email a <a href="mailto:javiclement@gmail.com" className="text-indigo-500 hover:underline">javiclement@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}