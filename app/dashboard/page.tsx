// app/dashboard/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import {
  Wrench,
  Heart,
  Sparkles,
  Clock,
  ArrowRight,
  Settings,
  Star,
  Zap,
  Activity,
  PlusCircle,
  BookOpen,
  Award,
  Search
} from "lucide-react";

// Types
interface RepairHistoryItem {
  id: number;
  device: string;
  date: string;
  status: string;
  icon: string;
}

interface StreakData {
  count: number;
  lastDate: string;
}

export default function DashboardPage() {
  const { user } = useAuth();
  const userName = user?.name || "Repairer";

  // Read favorites from localStorage (read-only)
  const [favorites] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("fixmend_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Read repair history from localStorage (read-only)
  const [repairHistory] = useState<RepairHistoryItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("fixmend_repair_history");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Read streak from localStorage (read-only)
  const [streak] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    try {
      const saved = localStorage.getItem("fixmend_streak");
      if (!saved) return 0;
      const data: StreakData = JSON.parse(saved);
      const today = new Date().toDateString();
      const lastDate = new Date(data.lastDate).toDateString();
      if (today === lastDate) return data.count;
      return 0;
    } catch {
      return 0;
    }
  });

  // Stats data
  const stats = [
    {
      label: "Repairs Completed",
      value: repairHistory.length.toString(),
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      change: repairHistory.length > 0 ? `+${Math.min(repairHistory.length, 5)} this month` : "Start repairing!",
      color: "from-emerald-500/10 to-emerald-600/5"
    },
    {
      label: "Saved Favorites",
      value: favorites.length.toString(),
      icon: <Heart className="w-5 h-5 text-pink-400" />,
      change: favorites.length > 0 ? `${favorites.length} saved` : "Save your first!",
      color: "from-pink-500/10 to-pink-600/5"
    },
    {
      label: "Repair Streak",
      value: `${streak} 🔥`,
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      change: streak > 0 ? "Keep going!" : "Fix something daily!",
      color: "from-yellow-500/10 to-yellow-600/5"
    },
    {
      label: "Plan",
      value: "Pro",
      icon: <Award className="w-5 h-5 text-purple-400" />,
      change: "14-day trial",
      color: "from-purple-500/10 to-purple-600/5"
    }
  ];

  // Quick Actions – "Search Device" triggers header search
  const quickActions = [
    { label: "Search Device", icon: <Search className="w-4 h-4" />, href: "#", onClick: () => {
      const searchBtn = document.querySelector('[aria-label="Search"]');
      if (searchBtn) {
        (searchBtn as HTMLElement).click();
      }
    }},
    { label: "View Favorites", icon: <Heart className="w-4 h-4" />, href: "/dashboard/favorites" },
    { label: "Settings", icon: <Settings className="w-4 h-4" />, href: "/dashboard/settings" },
    { label: "Upgrade Plan", icon: <Star className="w-4 h-4" />, href: "/pricing" }
  ];

  const hour = new Date().getHours();
  let greeting = "Good Morning ☀️";
  if (hour >= 12 && hour < 17) greeting = "Good Afternoon 🌤️";
  else if (hour >= 17) greeting = "Good Evening 🌙";

  return (
    <div className="space-y-6">
      
      {/* Hero Section */}
      <section className="relative pt-4 pb-2 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-sm text-slate-400">{greeting}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Welcome back, <span className="text-emerald-400">{userName}</span>! 👋
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                {repairHistory.length > 0 
                  ? `You've completed ${repairHistory.length} repairs so far! Keep up the great work. 🎉`
                  : "Your repair journey starts here. Ready to fix something?"}
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25 text-sm"
            >
              <PlusCircle className="w-4 h-4" />
              New Repair
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`bg-linear-to-br ${stat.color} backdrop-blur-sm border border-slate-700 rounded-2xl p-5 hover:border-emerald-500/30 transition-all group`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <span className="text-xs text-slate-500">{stat.change}</span>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {quickActions.map((action, i) => (
                action.href ? (
                  <Link
                    key={i}
                    href={action.href}
                    className="bg-slate-700/30 hover:bg-slate-700/50 border border-slate-700 rounded-xl p-4 text-center transition-all hover:border-emerald-500/30 hover:scale-105 duration-300"
                  >
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-2 text-emerald-400">
                      {action.icon}
                    </div>
                    <p className="text-xs font-medium text-slate-300">{action.label}</p>
                  </Link>
                ) : (
                  <button
                    key={i}
                    onClick={action.onClick}
                    className="bg-slate-700/30 hover:bg-slate-700/50 border border-slate-700 rounded-xl p-4 text-center transition-all hover:border-emerald-500/30 hover:scale-105 duration-300"
                  >
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-2 text-emerald-400">
                      {action.icon}
                    </div>
                    <p className="text-xs font-medium text-slate-300">{action.label}</p>
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-400" />
                Recent Activity
              </h2>
              <span className="text-xs text-slate-400">
                {repairHistory.length} repairs total
              </span>
            </div>
            <div className="space-y-3">
              {repairHistory.length === 0 ? (
                <div className="text-center py-6 text-slate-400">
                  <Wrench className="w-8 h-8 mx-auto mb-2 text-slate-500" />
                  <p className="text-sm">No repairs yet</p>
                  <p className="text-xs mt-1">Search and fix a device to get started!</p>
                </div>
              ) : (
                repairHistory.slice(0, 5).map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between bg-slate-700/20 hover:bg-slate-700/30 rounded-xl p-3 transition-all border border-slate-700/50 hover:border-emerald-500/20"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">{activity.device}</p>
                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(activity.date).toLocaleDateString()} • {new Date(activity.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {activity.status} {activity.icon}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="px-4 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Explore 1,200+ Repair Guides</h3>
                <p className="text-slate-400 text-xs">Find step-by-step instructions for your device</p>
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all text-sm"
            >
              Start Searching
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}