import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapeo semántico de nuestros Design Tokens
        background: "#020617", // Slate-950
        foreground: "#f8fafc", // Slate-50 (AQUÍ ESTABA EL ERROR, FALTABA ESTA LÍNEA)
        surface: "#0f172a",    // Slate-900
        primary: {
          DEFAULT: "#6366f1", // Indigo-500
          hover: "#4f46e5",   // Indigo-600
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#8b5cf6", // Violet-500
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#1e293b", // Slate-800
          foreground: "#94a3b8", // Slate-400
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #1e293b 0deg, #0f172a 180deg, #1e293b 360deg)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;