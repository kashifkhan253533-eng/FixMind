// app/cookies/page.tsx
import Link from "next/link";
import { 
  Cookie,
  Heart, 
  Eye, 
  Shield, 
  Settings,
  Globe,
  ArrowLeft,
  Clock,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* ہیرو سیکشن */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-150 h-100 bg-yellow-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-500/10 p-5 rounded-3xl border border-yellow-500/30 backdrop-blur-sm">
              <Cookie className="w-14 h-14 text-yellow-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Cookie <span className="text-yellow-400">Policy</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We use cookies to enhance your experience on FixMend. Learn how we use them and 
            how you can control your preferences.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
              <Clock className="w-4 h-4 text-emerald-400" /> Last Updated: July 28, 2026
            </span>
            <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
              <Heart className="w-4 h-4 text-pink-400" /> We value your privacy
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Cookie Content */}
      {/* ============================================================ */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Quick Navigation */}
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 mb-8">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Jump to Section</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "What Are Cookies?", id: "what" },
                { label: "Types of Cookies", id: "types" },
                { label: "How We Use Cookies", id: "use" },
                { label: "Third-Party Cookies", id: "third" },
                { label: "Your Choices", id: "choices" },
                { label: "Manage Cookies", id: "manage" },
                { label: "Contact Us", id: "contact" }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-3 py-1.5 bg-slate-700/30 hover:bg-yellow-500/20 text-xs text-slate-300 hover:text-yellow-400 rounded-lg transition-all border border-slate-700/50 hover:border-yellow-500/30"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Cookie Sections */}
          <div className="space-y-6">
            
            {/* 1. What Are Cookies? */}
            <section id="what" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-500/10 p-2 rounded-xl border border-yellow-500/20">
                  <Info className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-xl font-bold">1. What Are Cookies?</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. 
                They help us remember your preferences, understand how you use our platform, 
                and improve your experience. Cookies are essential for many features of modern 
                websites to function properly.
              </p>
              <div className="mt-3 p-4 bg-slate-700/20 rounded-xl border border-slate-700">
                <p className="text-slate-400 text-sm flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-yellow-400" />
                  <span>Cookies do not harm your device and cannot access your personal files.</span>
                </p>
              </div>
            </section>

            {/* 2. Types of Cookies We Use */}
            <section id="types" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-500/10 p-2 rounded-xl border border-yellow-500/20">
                  <Settings className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-xl font-bold">2. Types of Cookies We Use</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We use the following categories of cookies:
              </p>
              <div className="mt-3 space-y-3">
                <div className="bg-slate-700/20 rounded-xl p-4 border border-slate-700">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Essential Cookies
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Necessary for the website to function properly. These enable core features 
                    like authentication, security, and session management.
                  </p>
                </div>
                <div className="bg-slate-700/20 rounded-xl p-4 border border-slate-700">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Preference Cookies
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Remember your preferences and settings, such as language, theme, and 
                    saved favorites.
                  </p>
                </div>
                <div className="bg-slate-700/20 rounded-xl p-4 border border-slate-700">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Analytics Cookies
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Help us understand how users interact with our platform, which pages are 
                    visited most, and how we can improve our services.
                  </p>
                </div>
                <div className="bg-slate-700/20 rounded-xl p-4 border border-slate-700">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Marketing Cookies
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Used to deliver relevant advertisements and track the effectiveness of 
                    our marketing campaigns.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. How We Use Cookies */}
            <section id="use" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-500/10 p-2 rounded-xl border border-yellow-500/20">
                  <Eye className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-xl font-bold">3. How We Use Cookies</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We use cookies for the following purposes:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span>To keep you logged in and maintain your session.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span>To remember your preferences and settings.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span>To analyze website traffic and usage patterns.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span>To personalize content and recommendations.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span>To deliver targeted advertising and measure campaign performance.</span>
                </li>
              </ul>
            </section>

            {/* 4. Third-Party Cookies */}
            <section id="third" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-500/10 p-2 rounded-xl border border-yellow-500/20">
                  <Globe className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-xl font-bold">4. Third-Party Cookies</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We may allow third-party service providers to place cookies on your device. 
                These providers include:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span><strong>Analytics Providers:</strong> Google Analytics, Plausible, or similar tools.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span><strong>Advertising Partners:</strong> Google AdSense, or other ad networks.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span><strong>Social Media:</strong> Social sharing buttons from platforms like Twitter, Facebook, etc.</span>
                </li>
              </ul>
              <p className="text-slate-400 text-sm mt-3">
                These third-party services have their own privacy policies and cookie policies. 
                We encourage you to review them.
              </p>
            </section>

            {/* 5. Your Choices */}
            <section id="choices" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-500/10 p-2 rounded-xl border border-yellow-500/20">
                  <Shield className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-xl font-bold">5. Your Choices</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                You have control over how cookies are used on your device:
              </p>
              <div className="mt-3 space-y-3">
                <div className="bg-slate-700/20 rounded-xl p-4 border border-slate-700">
                  <h4 className="font-semibold text-white">Browser Settings</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    You can configure your browser to block or delete cookies. Each browser 
                    has different settings:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-400">
                    <li>• Chrome: Settings → Privacy → Cookies</li>
                    <li>• Firefox: Preferences → Privacy & Security → Cookies</li>
                    <li>• Safari: Preferences → Privacy → Cookies</li>
                    <li>• Edge: Settings → Cookies & Site Permissions</li>
                  </ul>
                </div>
                <div className="bg-slate-700/20 rounded-xl p-4 border border-slate-700">
                  <h4 className="font-semibold text-white">Cookie Consent</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    When you first visit FixMend, you will see a cookie banner where you can 
                    accept or reject non-essential cookies. You can change your preferences 
                    at any time.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Manage Cookies */}
            <section id="manage" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-500/10 p-2 rounded-xl border border-yellow-500/20">
                  <Settings className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-xl font-bold">6. Manage Cookies</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                You can manage your cookie preferences in the following ways:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span>Click the cookie icon at the bottom left of the page to update your settings.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span>Adjust your browser settings to block specific cookies.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  <span>Use the &quot;Do Not Track&quot; feature in your browser.</span>
                </li>
              </ul>
              <div className="mt-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <p className="text-yellow-400 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Note: Disabling essential cookies may affect the functionality of the website.
                </p>
              </div>
            </section>

            {/* 7. Contact Us */}
            <section id="contact" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-500/10 p-2 rounded-xl border border-yellow-500/20">
                  <Cookie className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-xl font-bold">7. Contact Us</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                If you have any questions about our Cookie Policy, please reach out to us:
              </p>
              <div className="mt-3 p-4 bg-slate-700/20 rounded-xl border border-slate-700">
                <p className="text-slate-300 text-sm">
                  📧 Email: <a href="mailto:support@fixmend.com" className="text-emerald-400 hover:underline">support@fixmend.com</a>
                </p>
                <p className="text-slate-400 text-sm mt-1">
                  🌍 Website: <Link href="/" className="text-emerald-400 hover:underline">fixmend.com</Link>
                </p>
                <p className="text-slate-400 text-sm mt-1">
                  📍 Location: Pakistan (Serving the world)
                </p>
              </div>
            </section>

          </div>

          {/* ============================================================ */}
          {/* Bottom CTA */}
          {/* ============================================================ */}
          <div className="mt-10 bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-slate-400">We are transparent about how we use cookies</span>
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all"
              >
                <Shield className="w-4 h-4" />
                Privacy Policy
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}