// components/ui/BackToTop.tsx
"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // ✅ Mounted state (hydration mismatch سے بچنے کے لیے)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!mounted) return null;

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-2xl shadow-emerald-500/30 hover:scale-110 transition-all duration-200 border border-emerald-400/30 animate-in fade-in zoom-in"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}