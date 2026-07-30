// app/privacy/page.tsx
import Link from "next/link";
import { 
  Shield, 
  Heart, 
  Eye, 
  Lock, 
  Database,
  Cookie,
  Mail,
  Globe,
  ArrowLeft,
  Clock,
  Sparkles,
  CheckCircle
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* ہیرو سیکشن */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-500/10 p-5 rounded-3xl border border-emerald-500/30 backdrop-blur-sm">
              <Shield className="w-14 h-14 text-emerald-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Privacy <span className="text-emerald-400">Policy</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Your privacy matters to us. Learn how we collect, use, and protect your personal information.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
              <Clock className="w-4 h-4 text-emerald-400" /> Last Updated: July 28, 2026
            </span>
            <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
              <Heart className="w-4 h-4 text-pink-400" /> We value your trust
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Privacy Content */}
      {/* ============================================================ */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Quick Navigation */}
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 mb-8">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Jump to Section</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Introduction", id: "intro" },
                { label: "Information We Collect", id: "collect" },
                { label: "How We Use Your Data", id: "use" },
                { label: "Cookies", id: "cookies" },
                { label: "Data Security", id: "security" },
                { label: "Third-Party Sharing", id: "sharing" },
                { label: "Your Rights", id: "rights" },
                { label: "Contact Us", id: "contact" }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-3 py-1.5 bg-slate-700/30 hover:bg-emerald-500/20 text-xs text-slate-300 hover:text-emerald-400 rounded-lg transition-all border border-slate-700/50 hover:border-emerald-500/30"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-6">
            
            {/* 1. Introduction */}
            <section id="intro" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">1. Introduction</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Welcome to <span className="text-emerald-400 font-medium">FixMend</span>. We respect your privacy 
                and are committed to protecting your personal data. This Privacy Policy explains 
                how we collect, use, and safeguard your information when you visit our website and 
                use our services.
              </p>
              <p className="text-slate-400 text-sm mt-2">
                By using FixMend, you agree to the collection and use of information in accordance 
                with this policy.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section id="collect" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <Database className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">2. Information We Collect</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We collect the following types of information:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong>Personal Information:</strong> Name, email address, and phone number when you create an account.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong>Usage Data:</strong> Information about how you interact with our site (pages visited, time spent).</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong>Device Information:</strong> Browser type, IP address, operating system, and device identifiers.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong>Repair Data:</strong> Information about the devices you search for and repair guides you view.</span>
                </li>
              </ul>
            </section>

            {/* 3. How We Use Your Data */}
            <section id="use" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <Eye className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">3. How We Use Your Data</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>To provide, maintain, and improve our repair guides and AI diagnostics.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>To personalize your experience and save your preferences.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>To send you updates, newsletters, and promotional materials (with your consent).</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>To analyze usage patterns and enhance our platform&apos;s performance.</span>
                </li>
              </ul>
            </section>

            {/* 4. Cookies */}
            <section id="cookies" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <Cookie className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">4. Cookies</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We use cookies to enhance your experience on FixMend. Cookies are small files placed 
                on your device that help us remember your preferences and understand how you use our site.
              </p>
              <div className="mt-3 p-4 bg-slate-700/20 rounded-xl border border-slate-700">
                <p className="text-slate-400 text-sm">
                  🍪 <strong>Cookie Types:</strong> Essential, preference, analytics, and marketing cookies. 
                  You can manage your cookie preferences through your browser settings.
                </p>
              </div>
              <p className="text-slate-400 text-sm mt-2">
                For more information, see our <Link href="/cookies" className="text-emerald-400 hover:underline">Cookie Policy</Link>.
              </p>
            </section>

            {/* 5. Data Security */}
            <section id="security" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <Lock className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">5. Data Security</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We implement industry-standard security measures to protect your personal information 
                from unauthorized access, alteration, disclosure, or destruction. 
                These include encryption, secure servers, and regular security audits.
              </p>
              <p className="text-slate-400 text-sm mt-2">
                However, no method of transmission over the internet is 100% secure. We encourage you 
                to take precautions to protect your own data.
              </p>
            </section>

            {/* 6. Third-Party Sharing */}
            <section id="sharing" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <Globe className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">6. Third-Party Sharing</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We do not sell or rent your personal information to third parties. However, we may 
                share your data with trusted service providers who assist us in operating our platform, 
                such as hosting providers, analytics, and email services. These providers are bound 
                by confidentiality agreements.
              </p>
              <p className="text-slate-400 text-sm mt-2">
                We may also share aggregated, anonymized data for research or marketing purposes.
              </p>
            </section>

            {/* 7. Your Rights */}
            <section id="rights" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">7. Your Rights</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                You have the right to:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>Access, update, or delete your personal data.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>Withdraw consent for marketing communications.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>Request a copy of the data we hold about you.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>Object to certain data processing activities.</span>
                </li>
              </ul>
              <p className="text-slate-400 text-sm mt-3">
                To exercise these rights, please <Link href="/contact" className="text-emerald-400 hover:underline">contact us</Link>.
              </p>
            </section>

            {/* 8. Contact Us */}
            <section id="contact" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">8. Contact Us</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy, 
                please reach out to us:
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
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span className="text-sm text-slate-400">We are transparent and care about your privacy</span>
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}