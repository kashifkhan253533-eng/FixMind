// app/forgot-password/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, CheckCircle, Wrench, Sparkles, Copy } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [resetLink, setResetLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const fakeToken = "dummy_token_" + Date.now();
      const link = `${window.location.origin}/reset-password?token=${fakeToken}`;
      setResetLink(link);
      console.log("🔗 Reset Password Link:", link);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(resetLink);
    alert("Reset link copied to clipboard! 📋");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-20">
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
          
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-500/10 p-3 rounded-2xl border border-emerald-500/20">
              <Wrench className="w-8 h-8 text-emerald-400" />
            </div>
          </div>

          {isSubmitted ? (
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-400">Reset Link Generated! 🔗</h3>
              <p className="text-slate-300 mt-2 text-sm">
                We&apos;ve generated a reset link for <strong>{email}</strong>
              </p>
              
              <div className="mt-4 p-3 bg-slate-900/50 border border-slate-700 rounded-xl flex items-center justify-between gap-2">
                <p className="text-xs text-emerald-400 font-mono truncate w-48 md:w-56">
                  {resetLink}
                </p>
                <button 
                  onClick={copyToClipboard}
                  className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all"
                  title="Copy link"
                >
                  <Copy className="w-4 h-4 text-slate-300" />
                </button>
              </div>
              
              <p className="text-slate-500 text-xs mt-2">
                💡 Click the link above or copy it to reset your password.
                <br />(Since we are in development, no real email is sent.)
              </p>

              <Link
                href="/reset-password?token=demo_token"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25 w-full justify-center"
              >
                Go to Reset Password Page →
              </Link>

              <Link
                href="/login"
                className="inline-flex items-center gap-2 mt-3 px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-all w-full justify-center"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Login
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Reset <span className="text-emerald-400">Password</span></h1>
                <p className="text-slate-400 text-sm mt-1">
                  Enter your email and we&apos;ll generate a reset link
                </p>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 mb-4">
                  <p className="text-red-400 text-sm text-center">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 pl-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-2xl shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                      Generating Link...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Generate Reset Link
                    </>
                  )}
                </button>

                <p className="text-center text-sm">
                  <Link href="/login" className="text-emerald-400 hover:underline flex items-center justify-center gap-1">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Login
                  </Link>
                </p>
              </form>

              <div className="mt-4 text-center">
                <p className="text-slate-500 text-xs flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  No real email sent (Dev Mode)
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}