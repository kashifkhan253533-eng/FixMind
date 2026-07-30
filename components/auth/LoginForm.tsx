// components/auth/LoginForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields! 📝");
      return;
    }

    // ✅ **یہاں پاسورڈ چیک کریں**
    // localStorage سے صارف کا ڈیٹا لوڈ کریں
    const storedUser = localStorage.getItem("fixmend_user");
    const storedPassword = localStorage.getItem("fixmend_password");
    const storedEmail = localStorage.getItem("fixmend_email");

    if (!storedUser) {
      setError("Account not found. Please sign up first! 🆕");
      return;
    }

    // ✅ چیک کریں کہ ای میل اور پاسورڈ درست ہے یا نہیں
    if (formData.email !== storedEmail) {
      setError("Email not found! ❌");
      return;
    }

    if (formData.password !== storedPassword) {
      setError("Incorrect password! 🔑 Try again.");
      return;
    }

    setIsSubmitting(true);

    // ✅ Success – Login
    setTimeout(() => {
      setIsSubmitting(false);
      const userData = JSON.parse(storedUser);
      login(userData.name, formData.email);
      router.push("/");
    }, 1000);
  };

  return (
    <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Welcome <span className="text-emerald-400">Back</span></h1>
        <p className="text-slate-400 text-sm mt-1">Login to continue fixing</p>
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
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 pl-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="password" className="block text-sm font-medium text-slate-300">
              Password *
            </label>
            <Link href="/forgot-password" className="text-xs text-emerald-400 hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 pl-12 pr-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-2xl shadow-emerald-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
              Logging in...
            </>
          ) : (
            <>
              <Mail className="w-5 h-5" />
              Login
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
          <input type="checkbox" id="remember" className="accent-emerald-500" />
          <label htmlFor="remember">Remember me</label>
        </div>
      </form>

      <div className="mt-6 pt-4 border-t border-slate-800/50 text-center">
        <p className="text-slate-400 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-emerald-400 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}