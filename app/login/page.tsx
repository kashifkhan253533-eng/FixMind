// app/login/page.tsx
import { Wrench, Heart, Sparkles, Shield } from "lucide-react";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden flex items-center justify-center px-4 py-20">
      
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* بائیں جانب: معلومات */}
          <div className="hidden md:block space-y-6 pt-8">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500/10 p-3 rounded-2xl border border-emerald-500/20">
                <Wrench className="w-10 h-10 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Fix<span className="text-emerald-400">Mend</span></h2>
                <p className="text-slate-400 text-sm">Welcome back, repairer</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-pink-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">We Missed You!</h4>
                  <p className="text-slate-400 text-xs">Your repair journey continues</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">50K+ Members</h4>
                  <p className="text-slate-400 text-xs">Join the global repair community</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Secure & Safe</h4>
                  <p className="text-slate-400 text-xs">Your data is protected</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800/50 pt-6">
              <p className="text-slate-500 text-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                New here?{" "}
                <Link href="/signup" className="text-emerald-400 hover:underline font-medium">
                  Create an account
                </Link>
              </p>
            </div>
          </div>

          {/* دائیں جانب: LoginForm کمپوننٹ */}
          <LoginForm />

        </div>
      </div>
    </div>
  );
}