// app/pricing/page.tsx
"use client";

import { useState } from "react";
import { 
  CheckCircle, 
  Heart,
  Sparkles,
  ArrowRight,
  Zap,
  Globe,
  MessageCircle,
  Star
} from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      price: { monthly: "$0", yearly: "$0" },
      description: "Perfect for getting started with device repair.",
      features: [
        "Access to 1,200+ repair guides",
        "Basic AI diagnostics (5 queries/day)",
        "Community support",
        "Save 3 favorite devices",
        "Ad-supported experience"
      ],
      cta: "Get Started Free",
      ctaLink: "/signup",
      popular: false,
      color: "from-slate-600 to-slate-500"
    },
    {
      name: "Pro",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      price: { monthly: "$9.99", yearly: "$99" },
      description: "For serious repair enthusiasts and professionals.",
      features: [
        "Unlimited repair guides",
        "Advanced AI diagnostics (unlimited)",
        "Priority support (24/7)",
        "Save unlimited favorite devices",
        "Ad-free experience",
        "Exclusive Pro repair videos",
        "Download repair guides (PDF)"
      ],
      cta: "Start Pro Trial",
      ctaLink: "/signup",
      popular: true,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      name: "Enterprise",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      price: { monthly: "Custom", yearly: "Custom" },
      description: "For repair shops, schools, and organizations.",
      features: [
        "Everything in Pro",
        "Custom repair guides creation",
        "API access",
        "Team management dashboard",
        "Dedicated account manager",
        "White-labeling options",
        "Onboarding & training"
      ],
      cta: "Contact Sales",
      ctaLink: "/contact",
      popular: false,
      color: "from-blue-500 to-purple-500"
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal."
    },
    {
      question: "Is there a free trial for Pro?",
      answer: "Yes! You get a 14-day free trial of Pro. No credit card required to start."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with Pro."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* 1. ہیرو سیکشن – جذباتی آغاز */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-linear-to-br from-emerald-500/20 to-pink-500/20 p-5 rounded-3xl border border-emerald-500/30 backdrop-blur-sm">
              <Star className="w-14 h-14 text-yellow-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Pricing from the <span className="text-emerald-400">Heart</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your repair journey. Every plan helps save 
            devices and our planet—starting with <span className="text-emerald-400 font-semibold">Free</span>.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
              <Heart className="w-4 h-4 text-pink-400" /> 50K+ Happy Users
            </span>
            <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
              <Sparkles className="w-4 h-4 text-emerald-400" /> 14-Day Pro Trial
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. بلنگ ٹوگل (Monthly / Yearly) */}
      {/* ============================================================ */}
      <section className="pb-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl p-1.5 inline-flex">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                billingPeriod === "yearly"
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              Yearly <span className="text-emerald-400 text-[10px]">Save 20%</span>
            </button>
          </div>
          <p className="text-slate-500 text-xs mt-3">
            {billingPeriod === "yearly" ? "🎉 You're saving 20% with yearly billing!" : "Switch to yearly to save 20%"}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. پلانز */}
      {/* ============================================================ */}
      <section className="py-4 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            
            {plans.map((plan, i) => {
              const isPopular = plan.popular;
              const price = billingPeriod === "monthly" ? plan.price.monthly : plan.price.yearly;
              
              return (
                <div
                  key={i}
                  className={`relative bg-slate-800/40 backdrop-blur-sm border rounded-2xl p-8 transition-all hover:scale-105 duration-300 ${
                    isPopular
                      ? "border-emerald-500/50 shadow-2xl shadow-emerald-500/10"
                      : "border-slate-700 hover:border-slate-600"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-emerald-500/30">
                      Most Popular
                    </div>
                  )}

                  {/* آئیکن اور نام */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-linear-to-br ${plan.color} rounded-2xl flex items-center justify-center text-white`}>
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <p className="text-xs text-slate-400">{plan.description}</p>
                    </div>
                  </div>

                  {/* قیمت */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      {price === "Custom" ? "Custom" : price}
                    </span>
                    {price !== "Custom" && (
                      <span className="text-slate-400 text-sm ml-1">
                        / {billingPeriod === "monthly" ? "month" : "year"}
                      </span>
                    )}
                  </div>

                  {/* خصوصیات */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${
                          isPopular ? "text-emerald-400" : "text-slate-500"
                        }`} />
                        <span className={isPopular ? "text-slate-200" : "text-slate-400"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA بٹن */}
                  <Link
                    href={plan.ctaLink}
                    className={`w-full py-3.5 rounded-xl font-semibold text-center transition-all block ${
                      isPopular
                        ? "bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-2xl shadow-emerald-500/25"
                        : "bg-slate-700 hover:bg-slate-600 text-white"
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  {isPopular && (
                    <p className="text-slate-500 text-[10px] text-center mt-3">
                      🔥 14-day free trial. No credit card required.
                    </p>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. فیچرز کا موازنہ (Comparison Table) */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 border-y border-slate-800/50 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Compare <span className="text-emerald-400">All Features</span>
            </h2>
            <p className="text-slate-400">See what each plan offers at a glance.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left text-sm text-slate-400 font-medium pb-4">Feature</th>
                  <th className="text-center text-sm text-slate-400 font-medium pb-4">Free</th>
                  <th className="text-center text-sm text-emerald-400 font-medium pb-4">Pro</th>
                  <th className="text-center text-sm text-blue-400 font-medium pb-4">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="py-3 text-sm text-slate-300">Repair Guides</td>
                  <td className="text-center text-sm text-slate-400 py-3">1,200+</td>
                  <td className="text-center text-sm text-emerald-400 font-medium py-3">Unlimited</td>
                  <td className="text-center text-sm text-blue-400 font-medium py-3">Unlimited</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="py-3 text-sm text-slate-300">AI Diagnostics</td>
                  <td className="text-center text-sm text-slate-400 py-3">5/day</td>
                  <td className="text-center text-sm text-emerald-400 font-medium py-3">Unlimited</td>
                  <td className="text-center text-sm text-blue-400 font-medium py-3">Unlimited</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="py-3 text-sm text-slate-300">Ad-Free Experience</td>
                  <td className="text-center text-sm text-slate-400 py-3">❌</td>
                  <td className="text-center text-sm text-emerald-400 font-medium py-3">✅</td>
                  <td className="text-center text-sm text-blue-400 font-medium py-3">✅</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="py-3 text-sm text-slate-300">Save Favorites</td>
                  <td className="text-center text-sm text-slate-400 py-3">3</td>
                  <td className="text-center text-sm text-emerald-400 font-medium py-3">Unlimited</td>
                  <td className="text-center text-sm text-blue-400 font-medium py-3">Unlimited</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="py-3 text-sm text-slate-300">Priority Support</td>
                  <td className="text-center text-sm text-slate-400 py-3">❌</td>
                  <td className="text-center text-sm text-emerald-400 font-medium py-3">✅</td>
                  <td className="text-center text-sm text-blue-400 font-medium py-3">✅</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="py-3 text-sm text-slate-300">API Access</td>
                  <td className="text-center text-sm text-slate-400 py-3">❌</td>
                  <td className="text-center text-sm text-slate-400 py-3">❌</td>
                  <td className="text-center text-sm text-blue-400 font-medium py-3">✅</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="py-3 text-sm text-slate-300">Team Dashboard</td>
                  <td className="text-center text-sm text-slate-400 py-3">❌</td>
                  <td className="text-center text-sm text-slate-400 py-3">❌</td>
                  <td className="text-center text-sm text-blue-400 font-medium py-3">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. اکثر پوچھے گئے سوالات (FAQ) */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Frequently Asked <span className="text-emerald-400">Questions</span>
            </h2>
            <p className="text-slate-400">Everything you need to know about our pricing.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-emerald-500/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{faq.question}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. آخری کال ٹو ایکشن (CTA) */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-4 text-center relative overflow-hidden border-t border-slate-800/50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-emerald-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-100 h-100 bg-pink-500/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <div className="bg-linear-to-r from-emerald-500/20 to-pink-500/20 p-3 rounded-full border border-emerald-500/30">
              <Sparkles className="w-12 h-12 text-yellow-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your <br />
            <span className="bg-linear-to-r from-emerald-300 to-pink-300 bg-clip-text text-transparent">
              Repair Journey?
            </span>
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of happy repairers. Start for free today—no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-10 py-4 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-emerald-500/30 hover:scale-105 duration-300"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold rounded-2xl transition-all border border-slate-700 backdrop-blur-sm hover:scale-105 duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Sales
            </Link>
          </div>
          <p className="mt-6 text-slate-500 text-xs flex items-center justify-center gap-1">
            <Heart className="w-3 h-3 text-pink-400" /> 100% Free to start. Upgrade anytime.
          </p>
        </div>
      </section>

    </div>
  );
}