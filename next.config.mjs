/** @type {import('next').NextConfig} */
const nextConfig = {
  // Activa la optimización de CSS Crítico para eliminar el bloqueo de renderizado
  experimental: {
    optimizeCss: true, 
    // Limpia las importaciones de estas librerías para reducir el JS inicial
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;