export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Nativiza",
    // Recuerda actualizar esto con la URL real de tu logo cuando lo tengas subido
    "image": "https://nativiza.netlify.app/logo.png", 
    "description": "Estudio de desarrollo freelance especializado en convertir sitios web en aplicaciones móviles nativas usando Flutter.",
    "@id": "https://nativiza.netlify.app",
    "url": "https://nativiza.netlify.app",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES"
    },
    "founder": {
      "@type": "Person",
      "name": "Javi Clement",
      "jobTitle": "Lead Developer & Architect"
    },
    "knowsAbout": [
      "Software Development",
      "Flutter",
      "Web to App Conversion",
      "Next.js",
      "Mobile Apps",
      "MVP Development"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Web to App Conversion",
        "description": "Conversión profesional de webs a apps nativas iOS y Android con notificaciones push."
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}