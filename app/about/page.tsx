// app/about/page.tsx
import { 
  Wrench, 
  Heart, 
  Globe, 
  Leaf,
  Sparkles,
  Quote,
  MessageCircle,
  Star,
  ArrowRight,
  Compass,
  Clock,
  Smile,
  ShieldCheck,
  Handshake
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* 1. ہیرو سیکشن – جذباتی آغاز (The Emotional Hook) */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 px-4 text-center overflow-hidden">
        {/* پس منظر میں نرم، جذباتی روشنی (گلابی + سبز) */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-150 h-100 bg-emerald-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* لوگو کے بجائے ایک جذباتی آئیکن (دل + رنچ) */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-linear-to-br from-emerald-500/20 to-pink-500/20 p-5 rounded-3xl border border-emerald-500/30 backdrop-blur-sm shadow-2xl shadow-emerald-500/10">
                <Heart className="w-12 h-12 text-pink-400 absolute -top-1 -right-1 animate-pulse" />
                <Wrench className="w-14 h-14 text-emerald-400" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            We Don&apos;t Just Fix <br />
            <span className="bg-linear-to-r from-emerald-300 via-emerald-400 to-pink-400 bg-clip-text text-transparent">
              Devices. We Heal Memories.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            At FixMend, we believe every device holds a story—your work, your photos, 
            your connection to the world. We are a global family of repair enthusiasts 
            who turn broken into beautiful, and worry into relief.
          </p>

          {/* جذباتی جملہ (ستارے کی صورت) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-1 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
              <Smile className="w-4 h-4 text-emerald-400" /> 50K+ Happy Souls
            </span>
            <span className="flex items-center gap-1 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
              <Globe className="w-4 h-4 text-emerald-400" /> 120+ Countries United
            </span>
            <span className="flex items-center gap-1 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
              <Leaf className="w-4 h-4 text-emerald-400" /> 10K+ Devices Resurrected
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. کہانی کا حصہ (The Human Story) – جذباتی بیانیہ */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 border-y border-slate-800/50 bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* بائیں جانب: کہانی */}
            <div className="space-y-5 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">The Story Behind</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                It Started with a <span className="text-emerald-400">Broken Heart</span> and a <span className="text-pink-400">Soldering Iron</span>.
              </h2>
              
              <p className="text-slate-300 leading-relaxed text-lg">
                Our founder, just like you, once dropped their phone a day before an important exam. 
                All their notes, memories, and hard work—gone in a second. The repair shops asked for 
                a fortune, and the internet guides were too complex.
              </p>
              
              <p className="text-slate-400 leading-relaxed border-l-4 border-emerald-500 pl-4 italic">
                &quot;That&apos;s when we realized: <span className="text-white font-medium">repair shouldn&apos;t be a luxury.</span> 
                It should be a right. A simple, human, empowering act.&quot;
              </p>
              
              <p className="text-slate-400 leading-relaxed">
                Today, FixMend is a living, breathing community. We&apos;re not just a website; 
                we&apos;re your neighbor who knows how to fix things, your friend who guides you 
                through the tough spots, and your partner in saving this planet—one screw at a time.
              </p>
            </div>

            {/* دائیں جانب: جذباتی کارڈ (Emotion Cards) */}
            <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-all hover:scale-105 duration-300">
                <div className="w-14 h-14 bg-linear-to-br from-emerald-500/20 to-emerald-600/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-7 h-7 text-pink-400 fill-pink-400/20" />
                </div>
                <h4 className="font-bold text-white text-sm">Empathy First</h4>
                <p className="text-[10px] text-slate-400 mt-1">We feel your frustration.</p>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-all hover:scale-105 duration-300">
                <div className="w-14 h-14 bg-linear-to-br from-pink-500/20 to-pink-600/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-7 h-7 text-emerald-400" />
                </div>
                <h4 className="font-bold text-white text-sm">Clarity</h4>
                <p className="text-[10px] text-slate-400 mt-1">No jargon. Just simple steps.</p>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-all hover:scale-105 duration-300">
                <div className="w-14 h-14 bg-linear-to-br from-blue-500/20 to-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Handshake className="w-7 h-7 text-blue-400" />
                </div>
                <h4 className="font-bold text-white text-sm">Trust</h4>
                <p className="text-[10px] text-slate-400 mt-1">Verified by the community.</p>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-all hover:scale-105 duration-300">
                <div className="w-14 h-14 bg-linear-to-br from-purple-500/20 to-purple-600/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-7 h-7 text-purple-400" />
                </div>
                <h4 className="font-bold text-white text-sm">Sustainability</h4>
                <p className="text-[10px] text-slate-400 mt-1">Love for Mother Earth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. جذباتی اعداد و شمار (Emotional Stats) */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 bg-linear-to-b from-slate-950 to-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              The Impact of <span className="text-emerald-400">Our Love</span> for Repair
            </h2>
            <p className="text-slate-400 mt-2">Every number represents a smile, a saved memory, and a cleaner planet.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center group hover:border-emerald-500/50 transition-all">
              <div className="text-4xl md:text-5xl font-extrabold text-emerald-400 group-hover:scale-110 transition-transform">50K+</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-sm text-slate-300">
                <Heart className="w-4 h-4 text-pink-400 fill-pink-400" /> Lives Touched
              </div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center group hover:border-emerald-500/50 transition-all">
              <div className="text-4xl md:text-5xl font-extrabold text-emerald-400 group-hover:scale-110 transition-transform">10K+</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-sm text-slate-300">
                <Wrench className="w-4 h-4 text-emerald-400" /> Devices Saved
              </div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center group hover:border-emerald-500/50 transition-all">
              <div className="text-4xl md:text-5xl font-extrabold text-emerald-400 group-hover:scale-110 transition-transform">200K</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-sm text-slate-300">
                <Leaf className="w-4 h-4 text-green-400" /> CO₂ KG Saved
              </div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center group hover:border-emerald-500/50 transition-all">
              <div className="text-4xl md:text-5xl font-extrabold text-emerald-400 group-hover:scale-110 transition-transform">4.9⭐</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-sm text-slate-300">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> Community Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. ہمارا مشن اور جذبہ (The Mission & Vibe) */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-emerald-500/5"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:bg-slate-800/50 transition-all group">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-all">
                <MessageCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">We Listen</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We don&apos;t assume. We hear your frustrations and turn them into 
                easy, human-friendly solutions.
              </p>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:bg-slate-800/50 transition-all group">
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-500/20 transition-all">
                <Compass className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">We Guide</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Like a friend showing you the ropes, our AI and community guide you 
                step-by-step without the tech jargon.
              </p>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:bg-slate-800/50 transition-all group">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-all">
                <ShieldCheck className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">We Empower</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We don&apos;t just fix devices; we build confidence. You leave our 
                site feeling like a true hero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. کمیونٹی کی آوازیں (Community Voices) – Human Element */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Voices of Our <span className="text-emerald-400">Global Family</span>
          </h2>
          <p className="text-slate-400 mb-12">Real people, real emotions, real repairs.</p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {/* Testimonial 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 relative">
              <Quote className="w-8 h-8 text-emerald-400/30 absolute top-4 right-4" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-lg font-bold text-white shadow-lg">A</div>
                <div>
                  <h4 className="font-semibold text-white">Ali R.</h4>
                  <p className="text-xs text-slate-400">Pakistan 🇵🇰</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                &quot;FixMend saved my laptop! I thought I&apos;d lost all my 
                thesis work. The guide was so simple, a child could do it. 
                Thank you from the bottom of my heart.&quot;
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 relative">
              <Quote className="w-8 h-8 text-pink-400/30 absolute top-4 right-4" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-pink-400 to-pink-600 flex items-center justify-center text-lg font-bold text-white shadow-lg">S</div>
                <div>
                  <h4 className="font-semibold text-white">Sophia M.</h4>
                  <p className="text-xs text-slate-400">Germany 🇩🇪</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                &quot;I cried when my phone broke. All my baby photos... 
                FixMend didn&apos;t just fix my screen, they fixed my heart 
                with their AI bot. A literal lifesaver.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. آخری کال ٹو ایکشن (The Final Call – Emotional CTA) */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-4 text-center relative overflow-hidden">
        {/* پس منظر میں جذباتی گلابی اور سبز دائرے */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-emerald-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-100 h-100 bg-pink-500/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <div className="bg-linear-to-r from-emerald-500/20 to-pink-500/20 p-3 rounded-full border border-emerald-500/30">
              <Heart className="w-12 h-12 text-pink-400 fill-pink-400/20" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Ready to Start Your <br />
            <span className="bg-linear-to-r from-emerald-300 to-pink-300 bg-clip-text text-transparent">
              Repair Journey?
            </span>
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of happy repairers. It&apos;s free, it&apos;s easy, 
            and it&apos;s full of love. Let&apos;s fix the world together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-10 py-4 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-emerald-500/30 hover:scale-105 duration-300"
            >
              Let&apos;s Fix It
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold rounded-2xl transition-all border border-slate-700 backdrop-blur-sm hover:scale-105 duration-300"
            >
              Say Hello 👋
            </Link>
          </div>
          <p className="mt-6 text-slate-500 text-xs flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-400" /> 100% Free. 100% Human. 100% Love.
          </p>
        </div>
      </section>

    </div>
  );
}