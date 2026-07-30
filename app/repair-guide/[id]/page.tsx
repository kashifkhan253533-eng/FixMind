// app/repair-guide/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Wrench,
  Clock,
  AlertTriangle,
  CheckCircle,
  Sparkles,
  Globe,
  ChevronDown
} from "lucide-react";
import { repairGuides } from "@/lib/repairGuides";

// ============================================================
// Helper: Get difficulty color
// ============================================================
const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
    case "Medium": return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";
    case "Hard": return "text-red-400 bg-red-500/10 border-red-500/20";
    default: return "text-slate-400 bg-slate-500/10 border-slate-500/20";
  }
};

// ============================================================
// Language options
// ============================================================
const languages = [
  { code: "en", name: "English" },
  { code: "ur", name: "اردو" },
  { code: "hi", name: "हिन्दी" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "zh-CN", name: "中文" },
  { code: "ar", name: "العربية" },
  { code: "pt", name: "Português" },
  { code: "ru", name: "Русский" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "it", name: "Italiano" },
  { code: "nl", name: "Nederlands" },
  { code: "tr", name: "Türkçe" },
];

// ============================================================
// Types for Google Translate
// ============================================================
declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (options: unknown, elementId: string) => void;
        translatePage?: (lang: string) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

// ============================================================
// Main Component
// ============================================================
export default function RepairGuidePage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  
  const guide = repairGuides.find(g => g.id === id);
  
  const [currentStep, setCurrentStep] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [translateLoaded, setTranslateLoaded] = useState(false);
  const [reloadTrigger, setReloadTrigger] = useState(false);

  // ✅ Load Google Translate script (only once)
  useEffect(() => {
    if (document.querySelector("#google-translate-script")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTranslateLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);

    window.googleTranslateElementInit = function () {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: languages.map((l) => l.code).join(","),
            layout: 0, // SIMPLE layout
          },
          "google_translate_element"
        );
       
        setTranslateLoaded(true);
      }
    };

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  // ✅ Handle language change: set cookie and reload
  useEffect(() => {
    if (reloadTrigger && selectedLang) {
      document.cookie = `googtrans=/en/${selectedLang}; path=/`;
      window.location.reload();
    }
  }, [reloadTrigger, selectedLang]);

  // ✅ Change language
  const changeLanguage = (langCode: string) => {
    setSelectedLang(langCode);
    setIsLangOpen(false);

    if (window.google?.translate?.translatePage) {
      window.google.translate.translatePage(langCode);
      return;
    }

    setReloadTrigger(true);
  };

  if (!guide) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold">Guide Not Found</h2>
          <p className="text-slate-400 mt-2">The repair guide you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const progress = showAll ? 100 : ((currentStep + 1) / guide.guideSteps.length) * 100;
  const deviceName = guide.title.replace(/ Replacement| Fix| Repair/g, "").trim();

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* 1. ہیرو اور ہیڈر */}
      {/* ============================================================ */}
      <section className="relative pt-12 pb-6 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Back Button & Language Selector */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <Link
              href={`/device/${guide.deviceId}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white text-sm font-medium rounded-xl transition-all border border-slate-700"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Device
            </Link>

            {/* 🌐 Language Selector */}
            <div className="relative flex items-center gap-3">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white text-sm font-medium rounded-xl transition-all border border-slate-700"
              >
                <Globe className="w-4 h-4" />
                <span>{languages.find(l => l.code === selectedLang)?.name || "English"}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLangOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsLangOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto py-2 top-full">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm transition-all hover:bg-slate-700/50 ${
                          selectedLang === lang.code ? "text-emerald-400 bg-emerald-500/10" : "text-slate-300"
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Google Translate Widget (Hidden) */}
              <div id="google_translate_element" className="hidden"></div>
            </div>
          </div>

          {/* Title & Meta */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{guide.title}</h1>
              <p className="text-sm text-slate-400 mt-1">
                Complete step-by-step guide for <span className="text-emerald-400">{deviceName}</span>
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-3 text-sm">
                <span className={`px-3 py-1 rounded-full border ${getDifficultyColor(guide.difficulty)}`}>
                  {guide.difficulty}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-4 h-4" /> {guide.time}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Wrench className="w-4 h-4" /> {guide.tools.length} Tools
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <CheckCircle className="w-4 h-4" /> {guide.guideSteps.length} Steps
                </span>
              </div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-2 text-center">
              <p className="text-2xl font-bold text-emerald-400">{Math.round(progress)}%</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">Complete</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-700/30 rounded-full h-2 mt-4">
            <div className="bg-emerald-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
          </div>

          {/* Translation Notice */}
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
            <Globe className="w-3 h-3" />
            <span>
              Select a language above to translate this guide.
              {!translateLoaded && (
                <span className="text-yellow-400 ml-1">(Loading translator...)</span>
              )}
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. Tools & Parts */}
      {/* ============================================================ */}
      <section className="px-4 pb-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4" /> Tools Needed
            </h3>
            <div className="flex flex-wrap gap-2">
              {guide.tools.map((tool, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-700/30 rounded-full text-xs text-slate-300 border border-slate-700/50">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4" /> Parts Required
            </h3>
            <div className="flex flex-wrap gap-2">
              {guide.parts.map((part, idx) => (
                <span key={idx} className="px-3 py-1 bg-emerald-500/10 rounded-full text-xs text-emerald-400 border border-emerald-500/20">
                  {part}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. Overview */}
      {/* ============================================================ */}
      <section className="px-4 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">📋 Guide Overview</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              This guide will walk you through the complete process of <strong>{guide.title.toLowerCase()}</strong> 
              for your <strong>{deviceName}</strong>. Follow each step carefully to ensure a successful repair.
              Always take proper safety precautions before starting.
            </p>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Time: {guide.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded-full text-xs ${getDifficultyColor(guide.difficulty)}`}>
                  {guide.difficulty}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>{guide.guideSteps.length} Steps</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-emerald-400" />
                <span>{guide.tools.length} Tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. Steps - تفصیلی مراحل */}
      {/* ============================================================ */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Warning Box */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4 mb-6 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-yellow-400">⚠️ Safety Warning</p>
              <p className="text-xs text-slate-400">
                Always power off your device and disconnect the battery before starting. 
                Use proper tools to avoid damage. Follow each step carefully. 
                If you&apos;re unsure about any step, stop and seek professional help.
              </p>
            </div>
          </div>

          {/* Steps List */}
          <div className="space-y-4">
            {guide.guideSteps.map((step, index) => {
              const isCompleted = index <= currentStep;
              const isCurrent = index === currentStep && !showAll;
              const [title, description] = step.includes("\n📍 ")
                ? step.split("\n📍 ")
                : [step, ""];

              return (
                <div
                  key={index}
                  onClick={() => {
                    if (!showAll) {
                      setCurrentStep(index);
                    }
                  }}
                  className={`
                    group flex items-start gap-4 p-5 rounded-xl border transition-all cursor-pointer
                    ${isCompleted && !showAll ? 'bg-emerald-500/5 border-emerald-500/30' : 'bg-slate-800/20 border-slate-700/50'}
                    ${isCurrent ? 'ring-2 ring-emerald-500 shadow-lg shadow-emerald-500/10' : 'hover:border-slate-600'}
                    ${showAll ? 'bg-slate-800/20 border-slate-700/50 hover:border-slate-600' : ''}
                  `}
                >
                  {/* Step Number */}
                  <div className={`
                    shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all
                    ${isCompleted && !showAll ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-400'}
                    ${isCurrent ? 'ring-2 ring-emerald-500' : ''}
                  `}>
                    {isCompleted && !showAll ? <CheckCircle className="w-5 h-5" /> : index + 1}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <p className={`font-medium ${isCompleted && !showAll ? 'text-slate-200' : 'text-slate-300'}`}>
                      {title}
                    </p>
                    {description && (
                      <p className={`text-xs mt-1 leading-relaxed ${isCompleted && !showAll ? 'text-slate-400' : 'text-slate-500'}`}>
                        📍 {description}
                      </p>
                    )}
                    {isCompleted && !showAll && index < guide.guideSteps.length - 1 && (
                      <p className="text-xs text-emerald-400/70 mt-1">✅ This step is complete</p>
                    )}
                  </div>

                  {/* Status */}
                  {!showAll && isCurrent && (
                    <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full shrink-0 border border-emerald-500/20">
                      Current
                    </span>
                  )}
                  {!showAll && isCompleted && !isCurrent && index < guide.guideSteps.length - 1 && (
                    <span className="text-[10px] font-medium text-emerald-400 shrink-0">✅ Done</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-400">
                <span className="text-emerald-400 font-bold">{currentStep + 1}</span> / {guide.guideSteps.length} steps
              </span>
              <span className="text-xs text-slate-500">
                ({Math.round(progress)}% complete)
              </span>
            </div>

            <div className="flex gap-3 flex-wrap">
              {!showAll && currentStep < guide.guideSteps.length - 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25 text-sm"
                >
                  Next Step →
                </button>
              )}
              {!showAll && currentStep === guide.guideSteps.length - 1 && (
                <button
                  onClick={() => setShowAll(true)}
                  className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25 text-sm flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Show All Steps
                </button>
              )}
              {showAll && (
                <button
                  onClick={() => {
                    setShowAll(false);
                    setCurrentStep(0);
                  }}
                  className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all text-sm"
                >
                  Reset Progress
                </button>
              )}
            </div>
          </div>

          {/* Completion */}
          {showAll && (
            <div className="mt-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white">🎉 Guide Complete!</h3>
              <p className="text-slate-400 text-sm mt-1">
                You&apos;ve viewed all steps for this repair.
                <span className="block text-emerald-400 text-xs mt-1">
                  Remember: Take your time and double-check each step.
                </span>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                <Link
                  href={`/device/${guide.deviceId}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Device
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all"
                >
                  <Wrench className="w-4 h-4" /> Search More
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}