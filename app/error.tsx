// app/error.tsx
"use client"; // 🛠️ یہ لائن لازمی ہے تاکہ Next.js اسے Client Component سمجھے

import { useEffect } from "react";
import { Wrench, RotateCcw, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // یہاں آپ Error کو کسی Logging سروس (جیسے Sentry) میں بھیج سکتے ہیں
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 to-slate-900 text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        
        {/* آئیکن */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-500/10 p-4 rounded-full border border-red-500/20">
            <AlertTriangle className="w-16 h-16 text-red-400" />
          </div>
        </div>

        {/* خرابی کا عنوان */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Oops! Something <span className="text-red-400">Went Wrong</span>
        </h1>
        
        {/* تفصیل */}
        <p className="text-slate-400 mb-2">
          We apologize for the inconvenience. Our team has been notified.
        </p>
        <p className="text-slate-500 text-sm mb-8">
          Error: {error.message || "Unknown error occurred"}
        </p>

        {/* بٹنز */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
          >
            <RotateCcw className="w-5 h-5" />
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700"
          >
            <Wrench className="w-5 h-5" />
            Go Home
          </Link>
        </div>

        {/* اضافی مدد */}
        <p className="mt-8 text-slate-600 text-xs">
          If this problem persists, please contact us at{" "}
          <a href="mailto:support@fixmend.com" className="text-emerald-400 hover:underline">
            support@fixmend.com
          </a>
        </p>
      </div>
    </div>
  );
}