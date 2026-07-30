// app/dashboard/favorites/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Trash2, Wrench, ArrowLeft, Search, Smartphone, Laptop, Tablet, Headphones } from "lucide-react";

// ============================================================
// Types
// ============================================================
interface Device {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
}

// ============================================================
// Device Data - Same as dashboard
// ============================================================
const devicesData: Device[] = [
  { id: 1, name: "iPhone 13", brand: "Apple", category: "Smartphone", image: "📱" },
  { id: 2, name: "iPhone 14 Pro", brand: "Apple", category: "Smartphone", image: "📱" },
  { id: 3, name: "Samsung Galaxy S22", brand: "Samsung", category: "Smartphone", image: "📱" },
  { id: 4, name: "Samsung Galaxy S23 Ultra", brand: "Samsung", category: "Smartphone", image: "📱" },
  { id: 5, name: "MacBook Pro 14", brand: "Apple", category: "Laptop", image: "💻" },
  { id: 6, name: "MacBook Air M2", brand: "Apple", category: "Laptop", image: "💻" },
  { id: 7, name: "Dell XPS 13", brand: "Dell", category: "Laptop", image: "💻" },
  { id: 8, name: "iPad Pro", brand: "Apple", category: "Tablet", image: "📋" },
  { id: 9, name: "Samsung Galaxy Tab S8", brand: "Samsung", category: "Tablet", image: "📋" },
  { id: 10, name: "AirPods Pro", brand: "Apple", category: "Accessories", image: "🎧" },
];

// ============================================================
// Helper: Get category icon
// ============================================================
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Smartphone": return <Smartphone className="w-4 h-4" />;
    case "Laptop": return <Laptop className="w-4 h-4" />;
    case "Tablet": return <Tablet className="w-4 h-4" />;
    case "Accessories": return <Headphones className="w-4 h-4" />;
    default: return <Wrench className="w-4 h-4" />;
  }
};

// ============================================================
// Helper: Load favorites from localStorage (lazy initializer)
// ============================================================
const loadFavorites = (): number[] => {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem("fixmend_favorites");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

// ============================================================
// Main Component
// ============================================================
export default function FavoritesPage() {
  // ✅ Lazy initializer – no useEffect needed
  const [favorites, setFavorites] = useState<number[]>(loadFavorites);
  
  // ✅ Derive favorite devices from favorites state (no separate state needed)
  const favoriteDevices = devicesData.filter(device => favorites.includes(device.id));

  // Remove from favorites
  const removeFavorite = (deviceId: number) => {
    const updatedFavorites = favorites.filter(id => id !== deviceId);
    setFavorites(updatedFavorites);
    localStorage.setItem("fixmend_favorites", JSON.stringify(updatedFavorites));
  };

  // Clear all favorites
  const clearAllFavorites = () => {
    if (favoriteDevices.length === 0) return;
    if (confirm("Are you sure you want to remove all favorites?")) {
      setFavorites([]);
      localStorage.setItem("fixmend_favorites", JSON.stringify([]));
    }
  };

  return (
    <div className="space-y-6">
      
      {/* ============================================================ */}
      {/* ہیڈر */}
      {/* ============================================================ */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
            Your Favorites
          </h1>
          <p className="text-slate-400 text-sm">
            {favoriteDevices.length} device{favoriteDevices.length !== 1 ? 's' : ''} saved
          </p>
        </div>
        <div className="flex items-center gap-3">
          {favoriteDevices.length > 0 && (
            <button
              onClick={clearAllFavorites}
              className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-sm font-medium rounded-xl transition-all border border-red-500/20"
            >
              Clear All
            </button>
          )}
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-white text-sm font-medium rounded-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Favorites Grid */}
      {/* ============================================================ */}
      {favoriteDevices.length === 0 ? (
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-pink-500/10 p-4 rounded-full border border-pink-500/20">
              <Heart className="w-12 h-12 text-pink-400/50" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No favorites yet</h3>
          <p className="text-slate-400 max-w-md mx-auto">
            Start exploring devices and click the heart icon to save your favorites.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
          >
            <Search className="w-4 h-4" />
            Find Devices
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteDevices.map((device) => (
            <div
              key={device.id}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-5 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{device.image}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{device.name}</h3>
                    <p className="text-xs text-slate-400">{device.brand}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFavorite(device.id)}
                  className="p-2 rounded-lg text-pink-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
                  title="Remove from favorites"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-700/30 rounded-full text-xs text-slate-300">
                  {getCategoryIcon(device.category)}
                  {device.category}
                </span>
                <Link
                  href={`/?search=${encodeURIComponent(device.name)}`}
                  className="text-xs text-emerald-400 hover:underline ml-auto"
                >
                  Repair Guide →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ============================================================ */}
      {/* Stats Summary */}
      {/* ============================================================ */}
      {favoriteDevices.length > 0 && (
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-pink-500/10 px-4 py-2 rounded-xl border border-pink-500/20">
              <p className="text-sm text-slate-300">
                <span className="text-pink-400 font-bold">{favoriteDevices.length}</span> favorites saved
              </p>
            </div>
            <div className="bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20">
              <p className="text-sm text-slate-300">
                <span className="text-emerald-400 font-bold">
                  {favoriteDevices.filter(d => d.category === "Smartphone").length}
                </span> phones
              </p>
            </div>
            <div className="bg-blue-500/10 px-4 py-2 rounded-xl border border-blue-500/20">
              <p className="text-sm text-slate-300">
                <span className="text-blue-400 font-bold">
                  {favoriteDevices.filter(d => d.category === "Laptop").length}
                </span> laptops
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-xl transition-all border border-emerald-500/20"
          >
            <Search className="w-4 h-4" />
            Add More
          </Link>
        </div>
      )}

    </div>
  );
}