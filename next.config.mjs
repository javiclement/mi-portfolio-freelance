/** @type {import('next').NextConfig} */
const nextConfig = {
  // Eliminamos configuración de imágenes de Sanity ya que no se usa
  images: {
    remotePatterns: [],
  },
  experimental: {
    // Mantenemos la optimización de librerías
    optimizePackageImports: ['lucide-react', 'framer-motion', 'date-fns'],
    
    // CONFIGURACIÓN AGRESIVA DE CSS
    optimizeCss: {
      // 'pruneSource': true fuerza a que los estilos inyectados se borren del archivo externo.
      // Si el archivo es pequeño, esto a menudo elimina la necesidad de cargar el .css bloqueante por completo.
      pruneSource: true,
    },
  },
};

export default nextConfig;