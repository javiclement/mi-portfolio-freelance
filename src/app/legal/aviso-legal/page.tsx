import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Nativiza",
  description: "Información legal y datos identificativos de Nativiza.",
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Aviso Legal</h1>
        
        <h3>1. Datos Identificativos</h3>
        <p>
          En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
        </p>
        <ul className="list-none pl-0 space-y-2">
          <li><strong>Titular:</strong> Francisco Javier Clement Navarro (en adelante, "Nativiza")</li>
          <li><strong>DNI:</strong> 48372735D</li>
          <li><strong>Domicilio:</strong> José Bernad Amorós, 95, 03205 Elche (Alicante), España</li>
          <li><strong>Email de contacto:</strong> <a href="mailto:javiclement@gmail.com" className="text-indigo-500 hover:underline">javiclement@gmail.com</a></li>
        </ul>

        <h3>2. Usuarios</h3>
        <p>
          El acceso y/o uso de este portal de Nativiza atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
        </p>

        <h3>3. Uso del portal</h3>
        <p>
          Nativiza proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Nativiza a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal.
        </p>

        <h3>4. Propiedad Intelectual e Industrial</h3>
        <p>
          Nativiza por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
        </p>
      </div>
    </div>
  );
}