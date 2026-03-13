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
        // Brand core
        blue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB", // Azul Tecnológico principal
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        orange: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316", // Naranja Crecimiento
          600: "#EA580C",
          700: "#C2410C",
        },
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B", // Gris Analítica
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A", // Negro Profundo
          950: "#020617",
        },
        // Semantic aliases
        brand: {
          blue: "#2563EB",
          orange: "#F97316",
          dark: "#0F172A",
          gray: "#64748B",
        },
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "system-ui", "sans-serif"],
        sora: ["Sora", "system-ui", "sans-serif"],
        sans: ["Sora", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-lg": ["3rem", { lineHeight: "1.15", fontWeight: "700" }],
        "display-md": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "display-sm": ["2rem", { lineHeight: "1.25", fontWeight: "700" }],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.06) 1px, transparent 1px)",
        "gradient-blue": "linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #3B82F6 100%)",
        "gradient-dark": "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        "gradient-hero": "linear-gradient(135deg, #0F172A 0%, #0F172A 60%, #1a2744 100%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "grow-bar": "growBar 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        growBar: {
          from: { transform: "scaleY(0)", transformOrigin: "bottom" },
          to: { transform: "scaleY(1)", transformOrigin: "bottom" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
