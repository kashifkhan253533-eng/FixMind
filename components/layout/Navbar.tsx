// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  Wrench,
  Menu,
  X,
  LogIn,
  UserPlus,
  LogOut,
  Settings,
  Heart,
  LayoutDashboard,
  ChevronDown,
  Sparkles
} from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ✅ صرف کلائنٹ پر mounted true ہوگا (ہائیڈریشن فکس کے لیے)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "Devices", href: "/devices" },
  { name: "Videos", href: "/videos" },
   { name: "Unlock", href: "/unlock" }, // 🆕 اب یہ درست صفحہ پر جائے گا
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "Download", href: "/download" },
];
  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    setIsOpen(false);
    router.push("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Wrench className="w-7 h-7 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold text-white">
              Fix<span className="text-emerald-400">Mend</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
              >
                {link.name}
              </Link>
            ))}

            <div className="w-px h-6 bg-slate-700 mx-2"></div>

            {mounted ? (
              <>
                {user ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 transition-all"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                        {user.name?.charAt(0)?.toUpperCase() || "U"}
                      </div>
                      <span className="text-sm font-medium text-white max-w-25 truncate">
                        {user.name || "User"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          isProfileOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isProfileOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-40"
                          onClick={() => setIsProfileOpen(false)}
                        />
                        <div className="absolute right-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-50 py-2">
                          <div className="px-4 py-3 border-b border-slate-700">
                            <p className="text-sm font-semibold text-white">{user.name}</p>
                            <p className="text-xs text-slate-400 truncate flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-yellow-400" />
                              Pro Plan
                            </p>
                          </div>
                          <Link
                            href="/dashboard"
                            onClick={() => setIsProfileOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700/50 transition-all"
                          >
                            <LayoutDashboard className="w-4 h-4" />
                            Dashboard
                          </Link>
                          <Link
                            href="/dashboard/favorites"
                            onClick={() => setIsProfileOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700/50 transition-all"
                          >
                            <Heart className="w-4 h-4 text-pink-400" />
                            Favorites
                          </Link>
                          <Link
                            href="/dashboard/settings"
                            onClick={() => setIsProfileOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700/50 transition-all"
                          >
                            <Settings className="w-4 h-4" />
                            Settings
                          </Link>
                          <div className="border-t border-slate-700 my-1"></div>
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-all"
                          >
                            <LogOut className="w-5 h-5" />
                            Logout
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all flex items-center gap-1"
                    >
                      <LogIn className="w-4 h-4" />
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="ml-1 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-1"
                    >
                      <UserPlus className="w-4 h-4" />
                      Sign Up
                    </Link>
                  </>
                )}
              </>
            ) : (
              <div className="w-32 h-8"></div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
            >
              {link.name}
            </Link>
          ))}

          <div className="border-t border-slate-700 my-2"></div>

          {mounted && user ? (
            <>
              <div className="flex items-center gap-3 px-4 py-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  {user.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{user.name}</p>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-yellow-400" />
                    Pro Plan
                  </p>
                </div>
              </div>
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/favorites"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
              >
                Favorites
              </Link>
              <Link
                href="/dashboard/settings"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
              >
                Settings
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all"
              >
                Logout
              </button>
            </>
          ) : mounted ? (
            <>
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-emerald-500/25"
              >
                <UserPlus className="w-4 h-4" />
                Sign Up
              </Link>
            </>
          ) : null}
        </div>
      )}
    </nav>
  );
}