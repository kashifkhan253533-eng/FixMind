// components/ui/ThemeToggle.tsx
"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // ✅ Theme apply کرنے کا فنکشن
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(newTheme);
    localStorage.setItem("fixmend_theme", newTheme);
  };

  // ✅ پہلی بار لوڈ ہونے پر theme چیک کریں
  useEffect(() => {
    // ✅ Hydration safety - only run on client
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const saved = localStorage.getItem("fixmend_theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = saved || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  // ✅ Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // ✅ Hydration mismatch سے بچنے کے لیے placeholder
  if (!mounted) {
    return (
      <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700 w-9 h-9 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-all border border-slate-700 hover:border-slate-600"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}