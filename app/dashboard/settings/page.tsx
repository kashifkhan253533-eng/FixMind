// app/dashboard/settings/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  User,
  Mail,
  Lock,
  Bell,
  Moon,
  Sun,
  LogOut,
  Save,
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff,
  Shield,
  Smartphone,
  Globe,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [saveError, setSaveError] = useState("");

  // ========== تھیم (Theme) – Lazy Initializer ==========
  // ✅ کوئی useEffect نہیں، setState کا کوئی مسئلہ نہیں
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("fixmend_theme") as "dark" | "light" | null;
    return saved || "dark";
  });

  // ========== تھیم apply کرنے کا فنکشن ==========
  const applyTheme = (newTheme: "dark" | "light") => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("fixmend_theme", newTheme);
  };

  // ========== تھیم کو لاگو کریں (صرف کلائنٹ پر) ==========
  // ✅ useEffect میں setState نہیں، صرف applyTheme کال ہوتی ہے
  useEffect(() => {
    applyTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // صرف پہلی بار چلے گا

  // ========== تھیم تبدیل کرنے کا ہینڈلر ==========
  const handleThemeChange = (newTheme: "dark" | "light") => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // ========== پروفائل فارم ==========
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "+92 300 1234567",
    bio: "Passionate repairer and tech enthusiast"
  });

  // ========== پاسورڈ فارم ==========
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  // ========== نوٹیفکیشن ترجیحات ==========
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    repairTips: true,
    communityNews: false,
    productUpdates: true
  });

  // ========== پروفائل اپ ڈیٹ ہینڈلر ==========
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveError("");
    
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }, 1500);
  };

  // ========== پاسورڈ تبدیلی ہینڈلر ==========
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess(false);

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError("New passwords don't match! 🔒");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters! 🔑");
      return;
    }

    if (passwordData.newPassword === passwordData.currentPassword) {
      setPasswordError("New password must be different from current password!");
      return;
    }

    setTimeout(() => {
      setPasswordSuccess(true);
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
      setTimeout(() => setPasswordSuccess(false), 3000);
    }, 1500);
  };

  // ========== لاگ آؤٹ ہینڈلر ==========
  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  // ========== نوٹیفکیشن تبدیلی ہینڈلر ==========
  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* ============================================================ */}
      {/* ہیڈر */}
      {/* ============================================================ */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-slate-400 text-sm">Manage your account and preferences</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <span className="text-xs text-emerald-400 flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Secure
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* سیکشن 1: پروفائل انفارمیشن */}
      {/* ============================================================ */}
      <section className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
            <User className="w-5 h-5 text-emerald-400" />
          </div>
          <h2 className="text-lg font-semibold">Profile Information</h2>
        </div>

        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-2xl font-bold text-emerald-400">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div>
              <p className="text-sm font-medium text-white">{user?.name || "User"}</p>
              <p className="text-xs text-slate-400">Pro Plan</p>
              <button className="text-xs text-emerald-400 hover:underline mt-1">
                Change Avatar
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="name"
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 pl-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 pl-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="phone"
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 pl-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-slate-300 mb-2">
                Bio
              </label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="bio"
                  type="text"
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 pl-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>
            </div>
          </div>

          {isSaved && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <p className="text-emerald-400 text-sm">Profile updated successfully! ✅</p>
            </div>
          )}

          {saveError && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <p className="text-red-400 text-sm">{saveError}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSaving}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <>
                <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                Saving...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                Save Changes
              </>
            )}
          </button>
        </form>
      </section>

      {/* ============================================================ */}
      {/* سیکشن 2: پاسورڈ تبدیل کریں */}
      {/* ============================================================ */}
      <section className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-pink-500/10 p-2 rounded-xl border border-pink-500/20">
            <Lock className="w-5 h-5 text-pink-400" />
          </div>
          <h2 className="text-lg font-semibold">Change Password</h2>
        </div>

        <form onSubmit={handlePasswordChange} className="space-y-4">
          {passwordError && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <p className="text-red-400 text-sm">{passwordError}</p>
            </div>
          )}

          {passwordSuccess && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <p className="text-emerald-400 text-sm">Password changed successfully! 🔐</p>
            </div>
          )}

          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-slate-300 mb-2">
              Current Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                id="currentPassword"
                type={showCurrentPassword ? "text" : "password"}
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                placeholder="Enter current password"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 pl-12 pr-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-slate-300 mb-2">
                New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                  placeholder="Min 6 characters"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 pl-12 pr-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                  placeholder="Re-enter new password"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 pl-12 pr-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-pink-500/25"
          >
            <Lock className="w-5 h-5" />
            Update Password
          </button>
        </form>
      </section>

      {/* ============================================================ */}
      {/* سیکشن 3: نوٹیفکیشن ترجیحات */}
      {/* ============================================================ */}
      <section className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-500/10 p-2 rounded-xl border border-blue-500/20">
            <Bell className="w-5 h-5 text-blue-400" />
          </div>
          <h2 className="text-lg font-semibold">Notification Preferences</h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-slate-700/20 rounded-xl border border-slate-700/50">
            <div>
              <p className="text-sm font-medium text-white">Email Updates</p>
              <p className="text-xs text-slate-400">Receive updates about your repairs</p>
            </div>
            <button
              onClick={() => handleNotificationChange("emailUpdates")}
              className={`w-12 h-6 rounded-full transition-all ${
                notifications.emailUpdates ? "bg-emerald-500" : "bg-slate-600"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-all ${
                  notifications.emailUpdates ? "translate-x-6" : "translate-x-0.5"
                } mt-0.5`}
              ></div>
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-700/20 rounded-xl border border-slate-700/50">
            <div>
              <p className="text-sm font-medium text-white">Repair Tips</p>
              <p className="text-xs text-slate-400">Weekly repair tips and tricks</p>
            </div>
            <button
              onClick={() => handleNotificationChange("repairTips")}
              className={`w-12 h-6 rounded-full transition-all ${
                notifications.repairTips ? "bg-emerald-500" : "bg-slate-600"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-all ${
                  notifications.repairTips ? "translate-x-6" : "translate-x-0.5"
                } mt-0.5`}
              ></div>
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-700/20 rounded-xl border border-slate-700/50">
            <div>
              <p className="text-sm font-medium text-white">Community News</p>
              <p className="text-xs text-slate-400">Updates from the global community</p>
            </div>
            <button
              onClick={() => handleNotificationChange("communityNews")}
              className={`w-12 h-6 rounded-full transition-all ${
                notifications.communityNews ? "bg-emerald-500" : "bg-slate-600"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-all ${
                  notifications.communityNews ? "translate-x-6" : "translate-x-0.5"
                } mt-0.5`}
              ></div>
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-700/20 rounded-xl border border-slate-700/50">
            <div>
              <p className="text-sm font-medium text-white">Product Updates</p>
              <p className="text-xs text-slate-400">New features and improvements</p>
            </div>
            <button
              onClick={() => handleNotificationChange("productUpdates")}
              className={`w-12 h-6 rounded-full transition-all ${
                notifications.productUpdates ? "bg-emerald-500" : "bg-slate-600"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-all ${
                  notifications.productUpdates ? "translate-x-6" : "translate-x-0.5"
                } mt-0.5`}
              ></div>
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* سیکشن 4: تھیم (Theme) – اب کام کرتا ہے! */}
      {/* ============================================================ */}
      <section className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-yellow-500/10 p-2 rounded-xl border border-yellow-500/20">
            {theme === "dark" ? <Moon className="w-5 h-5 text-yellow-400" /> : <Sun className="w-5 h-5 text-yellow-400" />}
          </div>
          <h2 className="text-lg font-semibold">Theme Preference</h2>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleThemeChange("dark")}
            className={`flex-1 p-4 rounded-xl border-2 transition-all ${
              theme === "dark"
                ? "border-emerald-500 bg-emerald-500/10"
                : "border-slate-700 hover:border-slate-600"
            }`}
          >
            <Moon className="w-6 h-6 mx-auto mb-1 text-slate-300" />
            <p className="text-sm font-medium text-white">Dark</p>
            {theme === "dark" && (
              <p className="text-[10px] text-emerald-400 mt-1">✓ Active</p>
            )}
          </button>
          <button
            onClick={() => handleThemeChange("light")}
            className={`flex-1 p-4 rounded-xl border-2 transition-all ${
              theme === "light"
                ? "border-emerald-500 bg-emerald-500/10"
                : "border-slate-700 hover:border-slate-600"
            }`}
          >
            <Sun className="w-6 h-6 mx-auto mb-1 text-yellow-400" />
            <p className="text-sm font-medium text-white">Light</p>
            {theme === "light" && (
              <p className="text-[10px] text-emerald-400 mt-1">✓ Active</p>
            )}
          </button>
        </div>
        
        {/* تھیم اب کام کرتا ہے – کنفرمیشن */}
        <div className="mt-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
          <p className="text-xs text-emerald-400 text-center flex items-center justify-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Theme is fully functional! Try switching between Dark and Light mode.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* سیکشن 5: اکاؤنٹ ایکشنز */}
      {/* ============================================================ */}
      <section className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-500/10 p-2 rounded-xl border border-red-500/20">
            <LogOut className="w-5 h-5 text-red-400" />
          </div>
          <h2 className="text-lg font-semibold">Account Actions</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleLogout}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-red-500/25"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
          <Link
            href="/dashboard"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all"
          >
            <ArrowRight className="w-5 h-5" />
            Back to Dashboard
          </Link>
        </div>
      </section>

    </div>
  );
}