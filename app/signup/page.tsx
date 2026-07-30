// app/signup/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  ArrowRight,
  CheckCircle,
  Wrench,
  Heart,
  Sparkles,
  Globe,
  Shield
} from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match! 🔒");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters! 🔑");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      
      // ✅ Save user data to localStorage
      localStorage.setItem("fixmend_user", JSON.stringify({ name: formData.name, email: formData.email }));
      localStorage.setItem("fixmend_email", formData.email);
      localStorage.setItem("fixmend_password", formData.password);
      
      setIsSuccess(true);
      
      // ✅ **یہاں تبدیلی: Login کی بجائے Login Page پر جائیں**
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="relative">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-emerald-500/30 rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="bg-emerald-500/10 p-5 rounded-3xl border border-emerald-500/30 animate-bounce">
                  <CheckCircle className="w-20 h-20 text-emerald-400" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-3">
                Account Created! 🎉
              </h2>
              <p className="text-slate-300 mb-2">
                Your account has been successfully created.
              </p>
              <p className="text-slate-400 text-sm">
                Redirecting you to login page...
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-8 h-8 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden flex items-center justify-center px-4 py-20">
      
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          <div className="hidden md:block space-y-6 pt-8">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500/10 p-3 rounded-2xl border border-emerald-500/20">
                <Wrench className="w-10 h-10 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Fix<span className="text-emerald-400">Mend</span></h2>
                <p className="text-slate-400 text-sm">Join the repair revolution</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-pink-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Join 50K+ Repairers</h4>
                  <p className="text-slate-400 text-xs">Be part of our growing global family</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Globe className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Global Community</h4>
                  <p className="text-slate-400 text-xs">Connect with repairers in 120+ countries</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">100% Free</h4>
                  <p className="text-slate-400 text-xs">No hidden charges. Ever.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800/50 pt-6">
              <p className="text-slate-500 text-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                Already a member?{" "}
                <Link href="/login" className="text-emerald-400 hover:underline font-medium">
                  Login here
                </Link>
              </p>
            </div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">Create Your <span className="text-emerald-400">Account</span></h1>
              <p className="text-slate-400 text-sm mt-1">Start your repair journey today</p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 mb-4">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 pl-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </div>

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
                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Min 6 characters"
                    required
                    minLength={6}
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

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 pl-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
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
                    Creating Account...
                  </>
                ) : (
                  <>
                    <User className="w-5 h-5" />
                    Create Account
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-slate-500 text-xs text-center">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="text-emerald-400 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-emerald-400 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-800/50 text-center md:hidden">
              <p className="text-slate-400 text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-emerald-400 font-semibold hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}