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
        background: "#020617", // Slate-950
        foreground: "#f8fafc", // Slate-50
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
      // Añadimos configuración para el plugin de tipografía (prose)
      typography: {
        DEFAULT: {
          css: {
            color: '#94a3b8', // slate-400
            'h1, h2, h3, h4': {
              color: '#f8fafc', // slate-50
              fontWeight: '700',
            },
            strong: {
              color: '#f8fafc',
            },
            a: {
              color: '#6366f1', // primary
              '&:hover': {
                color: '#4f46e5',
              },
            },
            code: {
              color: '#8b5cf6', // secondary
            },
          },
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
  plugins: [
    require('@tailwindcss/typography'), // Activamos el plugin aquí
  ],
};
export default config;