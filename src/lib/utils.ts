import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number | Date): string {
  if (!input) return "Fecha desconocida";
  
  const date = new Date(input);
  
  // Si la fecha es inválida, devolvemos una cadena vacía o un texto seguro
  if (isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString("es-ES", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}