// components/ui/CookieBanner.tsx
"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ✅ Check if user has already accepted cookies (client-side only)
    if (typeof window !== "undefined") {
      const accepted = localStorage.getItem("fixmend_cookies_accepted");
      if (!accepted) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsVisible(true);
      }
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("fixmend_cookies_accepted", "true");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("fixmend_cookies_accepted", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-t border-slate-700 p-4 md:p-6 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3 text-sm text-slate-300">
          <Cookie className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-white">🍪 We use cookies</p>
            <p className="text-slate-400 text-xs max-w-2xl">
              We use cookies to enhance your experience, analyze traffic, and personalize content.
              By continuing, you agree to our{" "}
              <Link href="/privacy" className="text-emerald-400 hover:underline transition-colors">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/cookies" className="text-emerald-400 hover:underline transition-colors">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={declineCookies}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-xl transition-all border border-slate-600"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-emerald-500/25"
          >
            Accept All
          </button>
          <button
            onClick={acceptCookies}
            className="p-2 rounded-lg hover:bg-slate-700 transition-all text-slate-400 hover:text-white"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}