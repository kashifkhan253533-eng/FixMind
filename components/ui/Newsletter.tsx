// components/ui/Newsletter.tsx
"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type NewsletterStatus = "idle" | "loading" | "success" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<NewsletterStatus>("idle");
  const [message, setMessage] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    if (!email || !validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setMessage("You're subscribed! 🎉");
      setEmail("");
      
      // Reset after 4 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 4000);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  const isDisabled = status === "loading";

  return (
    <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
      <h3 className="text-lg font-semibold text-white mb-1">📧 Subscribe to Newsletter</h3>
      <p className="text-slate-400 text-sm mb-4">
        Get the latest repair tips and guides in your inbox.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error" || status === "success") {
              setStatus("idle");
              setMessage("");
            }
          }}
          placeholder="Enter your email..."
          className="flex-1 bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm disabled:opacity-50"
          disabled={isDisabled}
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={isDisabled}
          className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
          aria-label="Subscribe"
        >
          {status === "loading" ? (
            <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              Subscribe
            </>
          )}
        </button>
      </form>

      {/* Messages */}
      {status === "success" && (
        <div className="mt-3 text-emerald-400 text-sm flex items-center justify-center gap-2 animate-in fade-in duration-300">
          <CheckCircle className="w-4 h-4" />
          <span>{message}</span>
        </div>
      )}

      {status === "error" && (
        <div className="mt-3 text-red-400 text-sm flex items-center justify-center gap-2 animate-in fade-in duration-300">
          <AlertCircle className="w-4 h-4" />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}