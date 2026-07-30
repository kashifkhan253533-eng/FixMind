// app/devices/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Smartphone, Laptop, Tablet, Headphones, Wrench, Gamepad2, Monitor, Watch } from "lucide-react";
import { devicesData } from "@/lib/devices";

// ============================================================
// Helper: Get category icon
// ============================================================
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Smartphone": return <Smartphone className="w-5 h-5 text-emerald-400" />;
    case "Laptop": return <Laptop className="w-5 h-5 text-emerald-400" />;
    case "Tablet": return <Tablet className="w-5 h-5 text-emerald-400" />;
    case "Accessories": return <Headphones className="w-5 h-5 text-emerald-400" />;
    case "Smartwatch": return <Watch className="w-5 h-5 text-emerald-400" />;
    case "Gaming": return <Gamepad2 className="w-5 h-5 text-emerald-400" />;
    case "Smart Home": return <Monitor className="w-5 h-5 text-emerald-400" />;
    case "Networking": return <Wrench className="w-5 h-5 text-emerald-400" />;
    default: return <Wrench className="w-5 h-5 text-emerald-400" />;
  }
};

// ============================================================
// Main Component
// ============================================================
export default function DevicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(devicesData.map(d => d.category)))];

  // Filter devices
  const filteredDevices = devicesData.filter(device => {
    const matchesSearch = device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          device.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || device.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* ہیرو سیکشن */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All <span className="text-emerald-400">Devices</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Browse through {devicesData.length}+ devices and find the right repair guide for you.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by device name or brand..."
                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl py-3 px-4 pl-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* کیٹیگری فلٹرز */}
      {/* ============================================================ */}
      <section className="px-4 pb-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  selectedCategory === cat
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                    : "bg-slate-800/30 text-slate-400 border-slate-700 hover:text-white hover:border-slate-600"
                }`}
              >
                {cat === "Smartphone" && "📱 "}
                {cat === "Laptop" && "💻 "}
                {cat === "Tablet" && "📋 "}
                {cat === "Accessories" && "🎧 "}
                {cat === "Smartwatch" && "⌚ "}
                {cat === "Gaming" && "🎮 "}
                {cat === "Smart Home" && "🏠 "}
                {cat === "Networking" && "📶 "}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ڈیوائسز کی فہرست */}
      {/* ============================================================ */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-slate-400">
              Showing <span className="text-white font-semibold">{filteredDevices.length}</span> devices
            </p>
          </div>

          {filteredDevices.length === 0 ? (
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 text-center">
              <Search className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">No devices found</h3>
              <p className="text-slate-400 text-sm mt-2">
                Try adjusting your search or filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredDevices.map((device) => (
                <Link
                  key={device.id}
                  href={`/device/${device.id}`}
                  className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-5 hover:border-emerald-500/30 transition-all group hover:scale-[1.02] duration-200"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-3xl">{device.image}</span>
                    <span className="text-xs text-slate-500 bg-slate-700/30 px-2 py-0.5 rounded-full">
                      {device.category}
                    </span>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {device.name}
                    </h3>
                    <p className="text-xs text-slate-400">{device.brand}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[10px] text-slate-500">
                      {getCategoryIcon(device.category)}
                    </div>
                    <span className="text-xs text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      View Guide <ArrowRight className="w-3 h-3" />
                    </span>
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