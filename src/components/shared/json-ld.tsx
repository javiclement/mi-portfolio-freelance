export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // Define tu negocio como servicio profesional
    "name": "Nativiza", // Tu marca comercial
    "image": "https://nativiza.netlify.app/logo.png", // URL de tu logo (asegúrate de que existe en public/)
    "description": "Estudio de desarrollo freelance especializado en convertir sitios web en aplicaciones móviles nativas usando Flutter y desarrollo web High-End con Next.js.",
    "@id": "https://nativiza.netlify.app",
    "url": "https://nativiza.netlify.app",
    "telephone": "+34637762411", // Opcional: Tu teléfono de contacto
    "priceRange": "$$", // Rango de precios indicativo
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES" // Tu país
    },
    "founder": {
      "@type": "Person",
      "name": "Javi Clement",
      "jobTitle": "Lead Developer & Architect"
    },
    // Palabras clave que la IA usará para relacionarte
    "knowsAbout": [
      "Software Development",
      "Flutter",
      "Web to App Conversion",
      "Next.js",
      "Mobile Apps",
      "MVP Development",
      "Email Marketing Automation"
    ],
    // Tus servicios principales definidos explícitamente
    "offers": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web to App Conversion",
          "description": "Conversión profesional de webs a apps nativas iOS y Android con notificaciones push."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "High-End Web Development",
          "description": "Desarrollo web premium con Next.js optimizado para velocidad y SEO."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}