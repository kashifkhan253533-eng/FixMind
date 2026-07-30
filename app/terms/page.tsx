// app/terms/page.tsx
import Link from "next/link";
import { 
  Wrench, 
  Heart, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Users,
  Globe,
  Lock,
  ArrowLeft,
  Scale,
  Clock,
  Zap
} from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* ہیرو سیکشن – جذباتی آغاز */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-500/10 p-5 rounded-3xl border border-emerald-500/30 backdrop-blur-sm">
              <Scale className="w-14 h-14 text-emerald-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Terms of <span className="text-emerald-400">Service</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our commitment to you. Read on to understand how we build trust and 
            protect your rights while you repair the world with us.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
              <Clock className="w-4 h-4 text-emerald-400" /> Last Updated: July 28, 2026
            </span>
            <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
              <Heart className="w-4 h-4 text-pink-400" /> Built with love
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Terms Content */}
      {/* ============================================================ */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Quick Navigation */}
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 mb-8">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Jump to Section</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Introduction", id: "intro" },
                { label: "Acceptance", id: "acceptance" },
                { label: "Services", id: "services" },
                { label: "User Responsibilities", id: "responsibilities" },
                { label: "Intellectual Property", id: "ip" },
                { label: "Limitation of Liability", id: "liability" },
                { label: "Termination", id: "termination" },
                { label: "Contact", id: "contact" }
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

          {/* Terms Sections */}
          <div className="space-y-6">
            
            {/* 1. Introduction */}
            <section id="intro" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <FileText className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">1. Introduction</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Welcome to <span className="text-emerald-400 font-medium">FixMend</span>. By using our platform, 
                you agree to these Terms of Service. FixMend is a community-driven platform 
                that provides repair guides, AI diagnostics, and connects users with affordable 
                spare parts and repair solutions.
              </p>
              <p className="text-slate-400 text-sm mt-2">
                These terms apply to all users of the FixMend website, mobile application, and 
                any associated services.
              </p>
            </section>

            {/* 2. Acceptance of Terms */}
            <section id="acceptance" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">2. Acceptance of Terms</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                By accessing or using FixMend, you agree to be bound by these Terms of Service 
                and our <Link href="/privacy" className="text-emerald-400 hover:underline">Privacy Policy</Link>. 
                If you do not agree to these terms, please do not use our platform.
              </p>
              <p className="text-slate-400 text-sm mt-2">
                We reserve the right to update or modify these terms at any time. Changes will be 
                effective immediately upon posting. Your continued use of the platform constitutes 
                your acceptance of the updated terms.
              </p>
            </section>

            {/* 3. Services */}
            <section id="services" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <Wrench className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">3. Our Services</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                FixMend provides the following services:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong>Repair Guides:</strong> Free, step-by-step instructions for repairing various devices.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong>AI Diagnostics:</strong> Smart troubleshooting assistance for common device issues.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong>Parts Marketplace:</strong> Links to affordable spare parts from trusted vendors.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong>Community Support:</strong> Connect with other repair enthusiasts worldwide.</span>
                </li>
              </ul>
            </section>

            {/* 4. User Responsibilities */}
            <section id="responsibilities" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">4. User Responsibilities</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                As a user of FixMend, you agree to:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>Provide accurate and truthful information when creating an account.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>Follow safety guidelines when attempting repairs. FixMend is not responsible for any damage caused.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>Respect other community members and their contributions.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>Not use the platform for any illegal or harmful activities.</span>
                </li>
              </ul>
            </section>

            {/* 5. Intellectual Property */}
            <section id="ip" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <Lock className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">5. Intellectual Property</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                All content on FixMend, including guides, text, graphics, logos, and software, 
                is the property of FixMend or its content suppliers and is protected by copyright laws.
              </p>
              <p className="text-slate-400 text-sm mt-2">
                You may not reproduce, distribute, or create derivative works from our content 
                without explicit permission. However, you are free to share our guides with proper 
                attribution to FixMend.
              </p>
            </section>

            {/* 6. Limitation of Liability */}
            <section id="liability" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <AlertCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">6. Limitation of Liability</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                FixMend provides repair guides and information &quot;as is&quot; without any warranties. 
                We do our best to ensure accuracy, but we cannot guarantee that all information 
                is error-free.
              </p>
              <div className="mt-3 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
                <p className="text-slate-400 text-sm">
                  ⚠️ <strong>Important:</strong> Repairing devices carries inherent risks. 
                  FixMend is not liable for any damage, injury, or loss resulting from repairs 
                  attempted using our guides. Always exercise caution and consider professional 
                  assistance when unsure.
                </p>
              </div>
            </section>

            {/* 7. Termination */}
            <section id="termination" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">7. Termination</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We reserve the right to suspend or terminate your account if you violate these 
                Terms of Service. You may also close your account at any time by contacting us.
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Upon termination, your access to FixMend services will cease, but any content 
                you have contributed may remain on the platform.
              </p>
            </section>

            {/* 8. Contact Us */}
            <section id="contact" className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <Globe className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">8. Contact Us</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                If you have any questions about these Terms of Service, please reach out to us:
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
              <Heart className="w-5 h-5 text-pink-400" />
              <span className="text-sm text-slate-400">We believe in transparency and trust</span>
              <Heart className="w-5 h-5 text-pink-400" />
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