// app/download/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Smartphone, 
  Download, 
  Wrench, 
  Heart, 
  Zap, 
  Globe,
  Shield,
  Sparkles,
  Star
} from "lucide-react";

export default function DownloadPage() {
  // URL for QR code (replace with your actual app download link)
  const appDownloadUrl = "https://fixmend.com/download/app";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(appDownloadUrl)}`;

  const features = [
    {
      icon: <Wrench className="w-6 h-6 text-emerald-400" />,
      title: "Fix Any Device",
      description: "Access 200+ repair guides for smartphones, laptops, and wearables."
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      title: "Save Favorites",
      description: "Bookmark your most-used repair guides for quick access."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "AI Diagnostics",
      description: "Get instant troubleshooting help from our AI assistant."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: "Global Community",
      description: "Join 50K+ repairers from 120+ countries."
    }
  ];

  const steps = [
    { icon: <Smartphone className="w-5 h-5" />, label: "1. Scan QR Code" },
    { icon: <Download className="w-5 h-5" />, label: "2. Download APK" },
    { icon: <Shield className="w-5 h-5" />, label: "3. Install & Enjoy" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* ہیرو سیکشن */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-500/10 p-5 rounded-3xl border border-emerald-500/30 backdrop-blur-sm">
              <Download className="w-14 h-14 text-emerald-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Get the <span className="text-emerald-400">FixMend</span> App
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Repair your devices on the go. Download the FixMend app and join the 
            global repair revolution.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
              <Smartphone className="w-4 h-4 text-emerald-400" /> Android &amp; iOS
            </span>
            <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
              <Heart className="w-4 h-4 text-pink-400" /> 100% Free
            </span>
            <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
              <Sparkles className="w-4 h-4 text-yellow-400" /> Offline Guides
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ڈاؤن لوڈ کا مرکزی حصہ */}
      {/* ============================================================ */}
      <section className="py-8 md:py-12 px-4 border-t border-slate-800/50 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* بائیں جانب: QR Code */}
            <div className="flex flex-col items-center">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center w-full max-w-sm">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-emerald-400" />
                  Scan to Download
                </h3>
                <div className="bg-white p-3 rounded-xl inline-block">
                  <Image 
                    src={qrCodeUrl} 
                    alt="Download QR Code" 
                    className="w-48 h-48 md:w-56 md:h-56"
                    width={250}
                    height={250}
                    unoptimized
                  />
                </div>
                <p className="text-xs text-slate-400 mt-4">
                  Scan with your phone camera to download instantly
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex items-center text-xs text-slate-400">
                      <span className="bg-slate-700/30 p-1 rounded-full">{step.icon}</span>
                      <span className="ml-1 hidden sm:inline">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* دائیں جانب: ڈاؤن لوڈ لنکس */}
            <div className="space-y-6">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Direct Download</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center justify-between w-full px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5" />
                      <span>Android APK</span>
                    </div>
                    <Download className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-between w-full px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all border border-slate-600"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.523 16.109c-.051.098-.108.202-.164.306-.413.779-.858 1.708-1.476 1.708-.618 0-.809-.458-1.624-.458-.816 0-1.027.458-1.624.458-.618 0-1.088-.979-1.5-1.754-.832-1.568-1.514-3.763-1.514-5.943 0-2.001 1.234-3.055 2.342-3.055.618 0 1.126.408 1.5.408.373 0 .984-.468 1.69-.468.704 0 1.311.398 1.623.996.283.52.225 1.082.081 1.48-.275.725-.799 1.348-.799 2.063 0 .813.493 1.408 1.072 1.862.214.168.453.336.685.504.225.163.436.329.618.509.507.499.883 1.084 1.086 1.722zM15.913 5.65c.466-.532.746-1.226.746-1.92 0-.126-.006-.252-.019-.376-.519-.025-1.117.362-1.471.804-.314.392-.594.914-.594 1.53 0 .139.012.277.032.408.504.045 1.052-.307 1.306-.446z"/>
                      </svg>
                      <span>App Store</span>
                    </div>
                    <Download className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-between w-full px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all border border-slate-600"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.371 3.874C3.503 4.23 3 5.115 3 6.073v11.854c0 .958.503 1.843 1.371 2.199L15.523 12 4.371 3.874zm16.257 7.514L6.887 2.087 16.257 12 6.887 21.913l13.741-7.525c.877-.48.877-1.684 0-2.164z"/>
                      </svg>
                      <span>Google Play</span>
                    </div>
                    <Download className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-xs text-slate-500 mt-4 text-center">
                  🔒 All downloads are safe and verified. Free for everyone.
                </p>
              </div>

              <div className="bg-emerald-500/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-4 text-center">
                <p className="text-sm text-slate-300">
                  <span className="text-emerald-400 font-semibold">Coming soon:</span> iOS App Store, Google Play Store
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ایپ کی خصوصیات */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Why Download the <span className="text-emerald-400">App</span>?
            </h2>
            <p className="text-slate-400">Everything you love about FixMend, now in your pocket.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-all">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-white text-lg">{feature.title}</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* صارفین کے جائزے (Testimonials) */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-4 border-y border-slate-800/50 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What Our <span className="text-emerald-400">Users</span> Say
            </h2>
            <p className="text-slate-400">Real reviews from real people</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">A</div>
                <div>
                  <p className="font-semibold text-white">Ali R.</p>
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400" />)}
                  </div>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                &quot;FixMend saved my laptop! The app makes it so easy to follow repair steps. Highly recommended!&quot;
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold">S</div>
                <div>
                  <p className="font-semibold text-white">Sophia M.</p>
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400" />)}
                  </div>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                &quot;I fixed my iPhone screen using this app. The step-by-step guide was so clear. Thank you FixMend!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* آخری کال ٹو ایکشن (CTA) */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-emerald-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-100 h-100 bg-pink-500/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <div className="bg-emerald-500/20 p-3 rounded-full border border-emerald-500/30">
              <Download className="w-12 h-12 text-emerald-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Repair <span className="text-emerald-400">Anywhere</span>?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Download the FixMend app today and carry the world&apos;s largest repair library in your pocket.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-emerald-500/30 hover:scale-105 duration-300"
            >
              <Smartphone className="w-5 h-5" />
              Get the App
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-10 py-4 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold rounded-2xl transition-all border border-slate-700 backdrop-blur-sm hover:scale-105 duration-300"
            >
              <Wrench className="w-5 h-5" />
              Browse Online
            </Link>
          </div>
          <p className="mt-6 text-slate-500 text-xs flex items-center justify-center gap-1">
            <Heart className="w-3 h-3 text-pink-400" /> 100% Free. No hidden charges.
          </p>
        </div>
      </section>

    </div>
  );
}