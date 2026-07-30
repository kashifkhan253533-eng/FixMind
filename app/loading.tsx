// app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 to-slate-900 text-white flex flex-col items-center justify-center">
      
      {/* اسپنر (Spinner) */}
      <div className="relative">
        {/* بیرونی رنگین دائرہ */}
        <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
        
        {/* اندرونی آئیکن */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-emerald-500/20 rounded-full"></div>
        </div>
      </div>

      {/* لوڈنگ کا متن */}
      <p className="mt-6 text-slate-400 text-sm font-medium animate-pulse">
        Loading...
      </p>
      
      {/* برانڈ کا نام (چھوٹا) */}
      <p className="mt-2 text-slate-600 text-xs">
        Fix<span className="text-emerald-400">Mend</span>
      </p>
    </div>
  );
}