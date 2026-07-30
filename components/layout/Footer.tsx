// components/layout/Footer.tsx
import Link from "next/link";
import { 
  Wrench, 
  Heart, 
  X,          // 🛠️ اصلاح: 'Twitter' کی بجائے 'X' (lucide-react کا نیا نام)   // ✅ درست
  Mail, 
  Smartphone
} from "lucide-react";  // 🛠️ اصلاح: 'Globe' کو ہٹا دیا گیا (استعمال نہیں ہو رہا تھا)

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* ---------- اہم گرڈ: 4 کالم (موبائل پر 1 کالم) ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* ---------- کالم 1: برانڈ اور سوشل میڈیا ---------- */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Wrench className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-bold text-white">
                Fix<span className="text-emerald-400">Mend</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Repair Your World. Save the Planet. 
              Free repair guides, cheap spare parts, and AI-powered diagnostics for everyone.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#" 
                className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-lg transition-all"
                aria-label="X (Twitter)"
              >
                <X className="w-5 h-5" />  {/* 🛠️ اصلاح: 'Twitter' کی بجائے 'X' */}
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-lg transition-all"
                aria-label="Github"
              >
               
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-lg transition-all"
                aria-label="Youtube"
              >
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-lg transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ---------- کالم 2: کوئیک لنکس (Quick Links) ---------- */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Download App
                </Link>
              </li>
            </ul>
          </div>

          {/* ---------- کالم 3: قانونی اور مدد (Legal & Support) ---------- */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ---------- کالم 4: موبائل ایپ ڈاؤنلوڈ (App Download) ---------- */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Get the App
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Scan the QR code or download from your favorite store.
            </p>
            <div className="flex flex-col gap-3">
              {/* ڈمی QR کوڈ کی جگہ (آپ بعد میں یہاں ایک تصویر لگا سکتے ہیں) */}
              <div className="w-24 h-24 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center mx-auto md:mx-0">
                <Smartphone className="w-10 h-10 text-slate-600" />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <button className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-all flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 16.109c-.051.098-.108.202-.164.306-.413.779-.858 1.708-1.476 1.708-.618 0-.809-.458-1.624-.458-.816 0-1.027.458-1.624.458-.618 0-1.088-.979-1.5-1.754-.832-1.568-1.514-3.763-1.514-5.943 0-2.001 1.234-3.055 2.342-3.055.618 0 1.126.408 1.5.408.373 0 .984-.468 1.69-.468.704 0 1.311.398 1.623.996.283.52.225 1.082.081 1.48-.275.725-.799 1.348-.799 2.063 0 .813.493 1.408 1.072 1.862.214.168.453.336.685.504.225.163.436.329.618.509.507.499.883 1.084 1.086 1.722zM15.913 5.65c.466-.532.746-1.226.746-1.92 0-.126-.006-.252-.019-.376-.519-.025-1.117.362-1.471.804-.314.392-.594.914-.594 1.53 0 .139.012.277.032.408.504.045 1.052-.307 1.306-.446z"/></svg>
                  App Store
                </button>
                <button className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-all flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.371 3.874C3.503 4.23 3 5.115 3 6.073v11.854c0 .958.503 1.843 1.371 2.199L15.523 12 4.371 3.874zm16.257 7.514L6.887 2.087 16.257 12 6.887 21.913l13.741-7.525c.877-.48.877-1.684 0-2.164z"/></svg>
                  Google Play
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ---------- نیچے کا کاپی رائٹ والا حصہ ---------- */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for the 
            <span className="text-emerald-400 font-medium"> Right to Repair</span> movement.
          </p>
          <p className="text-slate-500 text-xs">
            © {currentYear} FixMend.com. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}