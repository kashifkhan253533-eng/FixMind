// app/not-found.tsx
"use client"; // Next.js 15+ میں not-found بھی Client Component ہو سکتا ہے

import Link from "next/link";
import { Wrench, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 to-slate-900 text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        
        {/* 404 نمبر بڑا اور خوبصورت */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text  from-emerald-400 to-emerald-600">
            404
          </h1>
          <div className="absolute -top-4 -right-4 bg-emerald-500/10 p-3 rounded-full border border-emerald-500/20">
            <Wrench className="w-8 h-8 text-emerald-400" />
          </div>
        </div>

        {/* عنوان */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Page Not <span className="text-emerald-400">Found</span>
        </h2>
        
        {/* تفصیل */}
        <p className="text-slate-400 mb-8 max-w-sm mx-auto">
          Oops! The page you are looking for doesn&apos;t exist or has been moved.
          <br />
          <span className="text-slate-500 text-sm">Error 404</span>
        </p>

        {/* بٹنز */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25 w-full sm:w-auto justify-center"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          
          <Link
            href="/search"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700 w-full sm:w-auto justify-center"
          >
            <Search className="w-5 h-5" />
            Search Devices
          </Link>
        </div>

        {/* مزید مدد */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <p className="text-slate-500 text-xs">
            Need help?{" "}
            <Link href="/contact" className="text-emerald-400 hover:underline">
              Contact Support
            </Link>
          </p>
        </div>

        {/* چھوٹا برانڈ نام */}
        <p className="mt-6 text-slate-600 text-xs">
          Fix<span className="text-emerald-400">Mend</span> — Repair Your World. Save the Planet.
        </p>
      </div>
    </div>
  );
}