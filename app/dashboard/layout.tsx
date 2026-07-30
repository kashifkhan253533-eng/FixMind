// app/dashboard/layout.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  LayoutDashboard,
  Heart,
  Settings,
  Wrench,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  Sparkles,
  CheckCircle,
  Trash2
} from "lucide-react";

// Notification Type
interface NotificationItem {
  id: number;
  title: string;
  message: string;
  read: boolean;
  time: string;
  type: "success" | "info" | "warning" | "welcome";
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  // Lazy initializer for notifications – no setState in useEffect
  const [notifications, setNotifications] = useState<NotificationItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("fixmend_notifications");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Mounted for hydration safety – suppress ESLint warning
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Listen for notification updates from other components (same tab)
  useEffect(() => {
    const handleNotificationUpdate = (event: CustomEvent) => {
      setNotifications(event.detail);
    };
    window.addEventListener('notification-update', handleNotificationUpdate as EventListener);
    return () => window.removeEventListener('notification-update', handleNotificationUpdate as EventListener);
  }, []);

  // Save notifications to localStorage when they change
  useEffect(() => {
    if (typeof window !== "undefined" && notifications.length > 0) {
      localStorage.setItem("fixmend_notifications", JSON.stringify(notifications));
    }
  }, [notifications]);

  // Focus search input when opened
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [showSearch]);

  const navLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />
    },
    {
      name: "Favorites",
      href: "/dashboard/favorites",
      icon: <Heart className="w-5 h-5" />
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="w-5 h-5" />
    },
    {
      name: "Repair Guides",
      href: "/",
      icon: <Wrench className="w-5 h-5" />
    }
  ];

  const isActive = (href: string) => pathname === href;

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const userName = mounted ? (user?.name || "User") : "User";
  const userInitial = mounted ? userName.charAt(0).toUpperCase() : "U";
  const unreadCount = notifications.filter(n => !n.read).length;

  // Notification Actions
  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Search handler
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 h-screen w-64 bg-slate-900 border-r border-slate-800 
          flex flex-col transition-transform duration-300 z-50
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="p-6 border-b border-slate-800">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
              <Wrench className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-xl font-bold">
              Fix<span className="text-emerald-400">Mend</span>
            </span>
          </Link>
          <p className="text-[10px] text-slate-500 mt-1">Dashboard v1.0</p>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsSidebarOpen(false)}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium
                ${
                  isActive(link.href)
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }
              `}
            >
              {link.icon}
              {link.name}
              {isActive(link.href) && (
                <span className="ml-auto w-1.5 h-6 bg-emerald-400 rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-3">
          <div className="flex items-center gap-3 px-2 py-2 rounded-xl bg-slate-800/30">
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
              {userInitial}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{userName}</p>
              <p className="text-[10px] text-slate-400 truncate">Pro Plan</p>
            </div>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        
        {/* Header with Functional Search & Notifications */}
        <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all md:hidden"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h1 className="text-lg font-semibold hidden sm:block">
              {navLinks.find((link) => isActive(link.href))?.name || "Dashboard"}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Button with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {showSearch && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowSearch(false)}
                  />
                  <div className="absolute right-0 mt-2 w-72 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-50 p-3">
                    <form onSubmit={handleSearch} className="flex gap-2">
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search devices..."
                        className="flex-1 bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                      />
                      <button
                        type="submit"
                        className="px-3 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all text-sm"
                      >
                        Go
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>

            {/* Notification Bell with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all relative"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-4.5 text-center leading-none">
                    {unreadCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowNotifications(false)}
                  />
                  <div className="absolute right-0 mt-2 w-80 md:w-96 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto">
                    <div className="p-4 border-b border-slate-700 flex items-center justify-between sticky top-0 bg-slate-800 rounded-t-xl">
                      <h3 className="font-semibold text-white">Notifications</h3>
                      {notifications.filter(n => !n.read).length > 0 && (
                        <button
                          onClick={markAllAsRead}
                          className="text-xs text-emerald-400 hover:underline"
                        >
                          Mark all read
                        </button>
                      )}
                    </div>
                    <div className="divide-y divide-slate-700/50">
                      {notifications.length === 0 ? (
                        <div className="p-6 text-center text-slate-400 text-sm">
                          <Bell className="w-8 h-8 mx-auto mb-2 text-slate-500" />
                          No notifications yet
                        </div>
                      ) : (
                        notifications.map((notif) => (
                          <div
                            key={notif.id}
                            className={`p-4 hover:bg-slate-700/30 transition-all ${!notif.read ? 'bg-emerald-500/5' : ''}`}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white">
                                  {notif.title}
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                  {notif.message}
                                </p>
                                <p className="text-[10px] text-slate-500 mt-1">
                                  {new Date(notif.time).toLocaleDateString()} • {new Date(notif.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                {!notif.read && (
                                  <button
                                    onClick={() => markAsRead(notif.id)}
                                    className="p-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                                    title="Mark as read"
                                  >
                                    <CheckCircle className="w-4 h-4" />
                                  </button>
                                )}
                                <button
                                  onClick={() => deleteNotification(notif.id)}
                                  className="p-1 text-slate-500 hover:text-red-400 transition-colors"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="hidden md:flex items-center gap-2 pl-2 border-l border-slate-700">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                {userInitial}
              </div>
              <span className="text-sm font-medium text-white">{userName}</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}