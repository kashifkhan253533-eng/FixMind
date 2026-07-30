// app/contact/page.tsx
"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Heart,
  MessageCircle,
  Clock,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Globe,
  Users,
  Wrench  // ✅ نیا: Wrench شامل کیا گیا
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* 1. ہیرو سیکشن – جذباتی آغاز */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 text-center overflow-hidden">
        {/* پس منظر میں نرم روشنی */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-linear-to-br from-emerald-500/20 to-pink-500/20 p-5 rounded-3xl border border-emerald-500/30 backdrop-blur-sm">
              <MessageCircle className="w-14 h-14 text-emerald-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Let&apos;s <span className="text-emerald-400">Connect</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to hear from you! Whether you have a question, feedback, 
            or just want to say hello—we&apos;re here to listen.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
              <Clock className="w-4 h-4 text-emerald-400" /> Response within 24h
            </span>
            <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
              <Heart className="w-4 h-4 text-pink-400" /> We care about you
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. رابطے کی معلومات (Contact Cards) */}
      {/* ============================================================ */}
      <section className="py-8 md:py-12 border-y border-slate-800/50 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-all group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-500/20 transition-all">
                <Mail className="w-7 h-7 text-emerald-400" />
              </div>
              <h4 className="font-semibold text-white text-sm">Email</h4>
              <p className="text-slate-400 text-xs mt-1">support@fixmend.com</p>
              <p className="text-slate-500 text-[10px] mt-1">We reply within 24h</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-all group">
              <div className="w-14 h-14 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-pink-500/20 transition-all">
                <Phone className="w-7 h-7 text-pink-400" />
              </div>
              <h4 className="font-semibold text-white text-sm">Phone</h4>
              <p className="text-slate-400 text-xs mt-1">+92 300 1234567</p>
              <p className="text-slate-500 text-[10px] mt-1">Mon-Fri, 9AM-6PM</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-all group">
              <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-all">
                <MapPin className="w-7 h-7 text-purple-400" />
              </div>
              <h4 className="font-semibold text-white text-sm">Location</h4>
              <p className="text-slate-400 text-xs mt-1">Pakistan</p>
              <p className="text-slate-500 text-[10px] mt-1">Serving the world 🌍</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-all group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-all">
                <Globe className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white text-sm">Global Reach</h4>
              <p className="text-slate-400 text-xs mt-1">120+ Countries</p>
              <p className="text-slate-500 text-[10px] mt-1">Uniting repairers worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. کانٹیکٹ فارم + سائیڈ انفو */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            
            {/* بائیں جانب: فارم (5 میں سے 3 حصے) */}
            <div className="md:col-span-3">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message 💬</h2>
                <p className="text-slate-400 text-sm mb-6">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                {isSuccess ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-emerald-400">Message Sent! 🎉</h3>
                    <p className="text-slate-300 mt-2">
                      Thank you for reaching out! We&apos;ll get back to you within 24 hours.
                    </p>
                    <p className="text-slate-500 text-sm mt-2 flex items-center justify-center gap-1">
                      <Heart className="w-4 h-4 text-pink-400" /> We appreciate you!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your question, feedback, or concern..."
                        required
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-2xl shadow-emerald-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-slate-500 text-xs text-center">
                      <Sparkles className="w-3 h-3 text-emerald-400 inline mr-1" />
                      We typically respond within 24 hours. Your privacy is important to us.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* دائیں جانب: مددگار معلومات (5 میں سے 2 حصے) */}
            <div className="md:col-span-2 space-y-6">
              {/* چھوٹی ٹیم کا کارڈ */}
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
                  <Heart className="w-4 h-4 text-pink-400 inline mr-2" />
                  Our Promise
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">We&apos;ll reply within 24 hours</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">100% free, no hidden charges</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Your data is safe with us</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">We listen and we care ❤️</p>
                  </div>
                </div>
              </div>

              {/* دلچسپ حقائق */}
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
                  <Users className="w-4 h-4 text-emerald-400 inline mr-2" />
                  Community Stats
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-700/30 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-emerald-400">50K+</p>
                    <p className="text-[10px] text-slate-400">Active Users</p>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-pink-400">4.9⭐</p>
                    <p className="text-[10px] text-slate-400">Avg. Rating</p>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-purple-400">120+</p>
                    <p className="text-[10px] text-slate-400">Countries</p>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-blue-400">10K+</p>
                    <p className="text-[10px] text-slate-400">Devices Saved</p>
                  </div>
                </div>
              </div>

              {/* براہ راست لنک */}
              <Link
                href="/"
                className="flex items-center justify-between bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 hover:border-emerald-500/40 transition-all group"
              >
                <div>
                  <p className="text-sm font-medium text-white">Need help fixing?</p>
                  <p className="text-xs text-slate-400">Visit our repair guides</p>
                </div>
                <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. نقشہ (Map – Placeholder) */}
      {/* ============================================================ */}
      <section className="py-8 md:py-12 border-y border-slate-800/50 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden">
            <div className="bg-slate-700/30 h-64 md:h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <p className="text-slate-400 text-sm">📍 We&apos;re everywhere</p>
                <p className="text-slate-500 text-xs mt-1">Pakistan • Global Community</p>
              </div>
            </div>
            <div className="p-4 text-center border-t border-slate-700/50">
              <p className="text-xs text-slate-500">
                🌍 FixMend is a global platform. Our team works from Pakistan to serve the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. آخری کال ٹو ایکشن (CTA) */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-pink-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-100 h-100 bg-emerald-500/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <Heart className="w-12 h-12 text-pink-400 fill-pink-400/20 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Can&apos;t Wait to <span className="text-emerald-400">Hear From You</span>
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Your voice matters to us. Whether it&apos;s feedback, a question, or 
            just a hello—reach out and let&apos;s make the world a better place, 
            one repair at a time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:support@fixmend.com"
              className="inline-flex items-center gap-2 px-10 py-4 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-emerald-500/30 hover:scale-105 duration-300"
            >
              <Mail className="w-5 h-5" />
              Email Us Directly
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-10 py-4 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold rounded-2xl transition-all border border-slate-700 backdrop-blur-sm hover:scale-105 duration-300"
            >
              <Wrench className="w-5 h-5" />
              Start Repairing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}