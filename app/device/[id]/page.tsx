// app/device/[id]/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Wrench,
  Heart,
  ArrowLeft,
  Star,
  Clock,
  CheckCircle,
  Smartphone,
  Laptop,
  Tablet,
  Headphones,
  ExternalLink,
  Share2,
  Shield
} from "lucide-react";
import { devicesData } from "@/lib/devices";
import { repairGuides } from "@/lib/repairGuides";

// ============================================================
// Types
// ============================================================
interface Device {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
  description?: string;
  price?: string;
  releaseYear?: number;
  specs?: string[];
}

// ============================================================
// Helper: Get category icon
// ============================================================
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Smartphone": return <Smartphone className="w-5 h-5" />;
    case "Laptop": return <Laptop className="w-5 h-5" />;
    case "Tablet": return <Tablet className="w-5 h-5" />;
    case "Accessories": return <Headphones className="w-5 h-5" />;
    case "Smartwatch": return <Smartphone className="w-5 h-5" />;
    case "Gaming": return <Smartphone className="w-5 h-5" />;
    case "Smart Home": return <Smartphone className="w-5 h-5" />;
    case "Networking": return <Smartphone className="w-5 h-5" />;
    default: return <Wrench className="w-5 h-5" />;
  }
};

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
// Main Component
// ============================================================
export default function DevicePage() {
  const params = useParams();
  const id = parseInt(params.id as string);

  // ✅ Lazy initializer for device
  const [device] = useState<Device | null>(() => {
    const found = devicesData.find(d => d.id === id);
    return found || null;
  });

  // ✅ Lazy initializer for favorite status (reads localStorage)
  const [isFavorite, setIsFavorite] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      const saved = localStorage.getItem("fixmend_favorites");
      if (saved) {
        const favs = JSON.parse(saved);
        return favs.includes(id);
      }
    } catch {
      // ignore
    }
    return false;
  });

  // ✅ Filter repair guides for this specific device
  const deviceGuides = repairGuides.filter(guide => guide.deviceId === id);

  // Toggle favorite
  const toggleFavorite = () => {
    const newFavorite = !isFavorite;
    setIsFavorite(newFavorite);

    const saved = localStorage.getItem("fixmend_favorites");
    let favs: number[] = saved ? JSON.parse(saved) : [];
    
    if (newFavorite) {
      favs.push(id);
    } else {
      favs = favs.filter(f => f !== id);
    }
    
    localStorage.setItem("fixmend_favorites", JSON.stringify(favs));
  };

  // Add repair to history
  const addRepair = () => {
    if (!device) return;

    const newRepair = {
      id: Date.now(),
      device: device.name,
      date: new Date().toISOString(),
      status: "Completed",
      icon: "✅"
    };

    const saved = localStorage.getItem("fixmend_repair_history");
    let history = saved ? JSON.parse(saved) : [];
    history = [newRepair, ...history];
    localStorage.setItem("fixmend_repair_history", JSON.stringify(history));

    // Add notification
    const notif = {
      id: Date.now(),
      title: "Repair Completed! 🎉",
      message: `You successfully repaired a ${device.name}. Great job!`,
      read: false,
      time: new Date().toISOString(),
      type: "success" as const
    };
    const savedNotifs = localStorage.getItem("fixmend_notifications");
    let notifs = savedNotifs ? JSON.parse(savedNotifs) : [];
    notifs = [notif, ...notifs];
    localStorage.setItem("fixmend_notifications", JSON.stringify(notifs));
    window.dispatchEvent(new CustomEvent('notification-update', { detail: notifs }));

    // Update streak
    const today = new Date().toDateString();
    const savedStreak = localStorage.getItem("fixmend_streak");
    let streakData = { count: 1, lastDate: new Date().toISOString() };
    
    if (savedStreak) {
      const data = JSON.parse(savedStreak);
      const lastDate = new Date(data.lastDate).toDateString();
      if (today === lastDate) {
        streakData = data;
      } else if (new Date(data.lastDate).getTime() + 86400000 === new Date(today).getTime()) {
        streakData = { count: data.count + 1, lastDate: new Date().toISOString() };
      }
    }
    localStorage.setItem("fixmend_streak", JSON.stringify(streakData));

    alert(`✅ ${device.name} repair added to your history!`);
  };

  if (!device) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold">Device Not Found</h2>
          <p className="text-slate-400 mt-2">The device you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* ہیرو سیکشن */}
      {/* ============================================================ */}
      <section className="relative pt-12 pb-8 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white text-sm font-medium rounded-xl transition-all mb-6 border border-slate-700 hover:border-slate-600"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* بائیں جانب: ڈیوائس کی معلومات */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl">{device.image}</span>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{device.name}</h1>
                  <p className="text-slate-400">{device.brand}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-700/30 rounded-full text-xs text-slate-300">
                  {getCategoryIcon(device.category)}
                  {device.category}
                </span>
                {device.releaseYear && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-700/30 rounded-full text-xs text-slate-300">
                    <Clock className="w-3 h-3" />
                    {device.releaseYear}
                  </span>
                )}
                {device.price && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500/10 rounded-full text-xs text-emerald-400 border border-emerald-500/20">
                    {device.price}
                  </span>
                )}
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                {device.description}
              </p>

              {/* Specs */}
              {device.specs && device.specs.length > 0 && (
                <div className="bg-slate-800/30 rounded-xl border border-slate-700 p-4 mb-6">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {device.specs.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={toggleFavorite}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all ${
                    isFavorite
                      ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                      : "bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-pink-400' : ''}`} />
                  {isFavorite ? "Favorited" : "Add to Favorites"}
                </button>
                <button
                  onClick={addRepair}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
                >
                  <Wrench className="w-5 h-5" />
                  Fix It
                </button>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ 
                        title: device.name, 
                        text: `Check out ${device.name} on FixMend`, 
                        url: window.location.href 
                      });
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl transition-all border border-slate-700"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* دائیں جانب: Quick Stats */}
            <div className="space-y-4">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Popularity</span>
                    <span className="text-white font-medium flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      4.8/5
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Repair Guides</span>
                    <span className="text-white font-medium">{deviceGuides.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Community Repairs</span>
                    <span className="text-white font-medium">1,234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Difficulty Rating</span>
                    <span className="text-white font-medium">Medium</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-500/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 text-center">
                <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300">
                  <span className="text-emerald-400 font-semibold">Verified Guides</span>
                  <br />
                  All repair guides are community verified
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Repair Guides Section – صرف اس ڈیوائس کے لیے گائیڈز */}
      {/* ============================================================ */}
      <section className="py-8 px-4 border-t border-slate-800/50 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Wrench className="w-6 h-6 text-emerald-400" />
            Repair Guides for {device.name}
          </h2>

          {deviceGuides.length === 0 ? (
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 text-center">
              <p className="text-slate-400">No repair guides available for this device yet.</p>
              <p className="text-slate-500 text-sm mt-2">Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {deviceGuides.map((guide) => (
                <Link
                  key={guide.id}
                  href={`/repair-guide/${guide.id}`}
                  className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl p-5 hover:border-emerald-500/30 transition-all group block"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-white">{guide.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-400">
                        <span className={`px-2 py-0.5 rounded-full border ${getDifficultyColor(guide.difficulty)}`}>
                          {guide.difficulty}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {guide.time}
                        </span>
                        <span>{guide.steps} steps</span>
                      </div>
                    </div>
                    <div className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg transition-all text-emerald-400 border border-emerald-500/20">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-slate-500">Parts needed:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {guide.parts.map((part, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-slate-700/30 rounded-full text-slate-400">
                          {part}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}