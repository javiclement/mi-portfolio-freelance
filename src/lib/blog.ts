import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
};

export function getAllPosts(): Post[] {
  // 1. Verificamos si la carpeta existe
  if (!fs.existsSync(postsDirectory)) {
    console.log('❌ La carpeta de posts no existe:', postsDirectory);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    // Ignorar archivos que no sean .mdx
    if (!fileName.endsWith('.mdx')) return null;

    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    let fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // --- ZONA DE DEPURACIÓN Y LIMPIEZA ---
    
    // FIX SUPREMO: Eliminar BOM (Byte Order Mark) si existe y limpiar espacios
    fileContents = fileContents.replace(/^\uFEFF/, '').trim();

    console.log(`\n🔍 Analizando: ${fileName}`);
    console.log(`   Contenido bruto (inicio): ${JSON.stringify(fileContents.slice(0, 50))}`);
    
    const { data, content } = matter(fileContents);
    
    console.log(`   Datos detectados:`, data);
    // ---------------------------

    return {
      slug,
      content,
      // Valores por defecto para evitar errores si falla la lectura
      title: data.title || 'SIN TÍTULO DETECTADO',
      date: data.date || '', 
      description: data.description || 'Sin descripción',
      tags: data.tags || [],
    };
  }).filter((post): post is Post => post !== null);

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    let fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // FIX SUPREMO TAMBIÉN AQUÍ
    fileContents = fileContents.replace(/^\uFEFF/, '').trim();
    
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags || [],
    };
  } catch (error) {
    return null;
  }
}