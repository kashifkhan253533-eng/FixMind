// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // ✅ class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          bg: "#f8fafc",
          surface: "#ffffff",
          text: "#0f172a",
          muted: "#64748b",
          border: "#e2e8f0",
        },
        // Dark mode colors
        dark: {
          bg: "#0f172a",
          surface: "#1e293b",
          text: "#f8fafc",
          muted: "#94a3b8",
          border: "#334155",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;