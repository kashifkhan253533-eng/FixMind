// app/verify-email/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  ArrowRight,
  Wrench,
  Sparkles
} from "lucide-react";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("fixmend_email_verified") === "true";
  });
  const [isResending, setIsResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [error, setError] = useState("");

  // ✅ Define verifyEmail function before using it
  const verifyEmail = async (verificationToken: string) => {
    setIsVerifying(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      setIsVerifying(false);
      if (verificationToken.length > 5) {
        setIsVerified(true);
        localStorage.setItem("fixmend_email_verified", "true");
      } else {
        setError("Invalid verification link. Please try again or request a new one.");
      }
    }, 1500);
  };

  // ✅ Run verification if token is present – suppress ESLint warning
  useEffect(() => {
    if (token) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      verifyEmail(token);
    }
  }, [token]);

  const resendVerification = () => {
    setIsResending(true);
    setError("");
    setResendSuccess(false);

    setTimeout(() => {
      setIsResending(false);
      setResendSuccess(true);
      setTimeout(() => setResendSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-20">
      
      {/* Background glow */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
          
          {/* Logo / Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-500/10 p-3 rounded-2xl border border-emerald-500/20">
              <Wrench className="w-8 h-8 text-emerald-400" />
            </div>
          </div>

          {isVerified ? (
            // ========== Verified State ==========
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-emerald-400">Email Verified! 🎉</h2>
              <p className="text-slate-300 mt-2 text-sm">
                Your email has been successfully verified. You can now log in to your account.
              </p>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25 w-full justify-center"
              >
                <ArrowRight className="w-4 h-4" />
                Go to Login
              </Link>
            </div>
          ) : (
            // ========== Not Verified ==========
            <>
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Verify Your <span className="text-emerald-400">Email</span></h1>
                <p className="text-slate-400 text-sm mt-1">
                  {token
                    ? "We're verifying your email address..."
                    : "A verification link was sent to your email."}
                </p>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {resendSuccess && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <p className="text-emerald-400 text-sm">Verification email resent! Check your inbox.</p>
                </div>
              )}

              {isVerifying ? (
                // Loading state
                <div className="text-center py-8">
                  <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mx-auto"></div>
                  <p className="text-slate-400 text-sm mt-4">Verifying your email...</p>
                </div>
              ) : (
                // Normal state
                <>
                  <div className="bg-slate-700/20 rounded-xl p-4 mb-6 flex items-center gap-3 border border-slate-700">
                    <Mail className="w-6 h-6 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-sm text-slate-300">
                        {token
                          ? "We're checking your verification link."
                          : "We've sent a verification link to your email address."}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {token
                          ? "This should only take a moment."
                          : "Please click the link in the email to verify your account."}
                      </p>
                    </div>
                  </div>

                  {!token && (
                    <button
                      onClick={resendVerification}
                      disabled={isResending}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isResending ? (
                        <>
                          <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <RefreshCw className="w-4 h-4" />
                          Resend Verification Email
                        </>
                      )}
                    </button>
                  )}

                  <div className="mt-4 text-center text-sm text-slate-400">
                    <p className="flex items-center justify-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      Already verified?{" "}
                      <Link href="/login" className="text-emerald-400 hover:underline">
                        Login here
                      </Link>
                    </p>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}