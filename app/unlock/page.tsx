// app/unlock/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  Shield,
  Lock,
  Unlock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Search,
  Wrench,
  Users,
  Star,
  ChevronRight,
  Sparkles,
  Clock,
  Eye,
  Download,
  FileText,
  Zap
} from "lucide-react";

// ============================================================
// Types
// ============================================================
interface UnlockMethod {
  id: number;
  brand: string;
  model: string;
  method: string;
  difficulty: "Easy" | "Medium" | "Hard";
  time: string;
  steps: string[];
  tools: string[];
  warning?: string;
  videoId?: string;
  apkDownload?: string;
}

// ============================================================
// 🔓 مکمل انلاک ڈیٹا (تمام برانڈز + بغیر Google Account)
// ============================================================
const unlockData: UnlockMethod[] = [
  // ============================================================
  // 1. GOOGLE ACCOUNT والے طریقے
  // ============================================================
  {
    id: 1,
    brand: "Samsung",
    model: "Samsung Galaxy (All Models)",
    method: "Find My Mobile (Samsung Account)",
    difficulty: "Easy",
    time: "5-10 min",
    tools: ["Samsung Account", "Internet Connection"],
    steps: [
      "Step 1: Visit findmymobile.samsung.com",
      "Step 2: Login with your Samsung account credentials",
      "Step 3: Select the locked device from the list",
      "Step 4: Click on 'Unlock' or 'Unlock Screen'",
      "Step 5: The screen will be unlocked remotely"
    ],
    warning: "⚠️ Requires Samsung account login"
  },
  {
    id: 2,
    brand: "Apple",
    model: "iPhone (All Models)",
    method: "iCloud Unlock (Apple ID)",
    difficulty: "Easy",
    time: "5-10 min",
    tools: ["Apple ID", "Internet Connection"],
    steps: [
      "Step 1: Go to iCloud.com and sign in with Apple ID",
      "Step 2: Click on 'Find iPhone'",
      "Step 3: Select the locked iPhone from the list",
      "Step 4: Click on 'Erase iPhone' and confirm",
      "Step 5: The device will be wiped and unlocked"
    ],
    warning: "⚠️ This will erase all data on the device"
  },
  {
    id: 3,
    brand: "Google",
    model: "All Android Devices",
    method: "Google Find My Device",
    difficulty: "Easy",
    time: "5-10 min",
    tools: ["Google Account", "Internet Connection"],
    steps: [
      "Step 1: Go to android.com/find and sign in",
      "Step 2: Select the locked device",
      "Step 3: Click on 'Erase Device' and confirm",
      "Step 4: The device will be reset and unlocked"
    ],
    warning: "⚠️ This will erase all data on the device"
  },
  {
    id: 4,
    brand: "Xiaomi",
    model: "Xiaomi (All Models)",
    method: "Mi Account Unlock",
    difficulty: "Easy",
    time: "5-10 min",
    tools: ["Xiaomi Account", "Internet Connection"],
    steps: [
      "Step 1: Go to i.mi.com and sign in",
      "Step 2: Select the locked device",
      "Step 3: Click on 'Unlock' or 'Erase Data'",
      "Step 4: The device will be unlocked"
    ],
    warning: "⚠️ This will erase all data on the device"
  },
  {
    id: 5,
    brand: "Oppo",
    model: "Oppo (All Models)",
    method: "Oppo Cloud Unlock",
    difficulty: "Easy",
    time: "5-10 min",
    tools: ["Oppo Account", "Internet Connection"],
    steps: [
      "Step 1: Visit cloud.oppo.com and sign in",
      "Step 2: Select the locked device",
      "Step 3: Click on 'Find Device' → 'Erase Data'",
      "Step 4: The device will be unlocked"
    ],
    warning: "⚠️ This will erase all data on the device"
  },
  {
    id: 6,
    brand: "Vivo",
    model: "Vivo (All Models)",
    method: "Vivo Cloud Unlock",
    difficulty: "Easy",
    time: "5-10 min",
    tools: ["Vivo Account", "Internet Connection"],
    steps: [
      "Step 1: Visit vivo.com and sign in",
      "Step 2: Select the locked device",
      "Step 3: Click on 'Unlock' or 'Erase Data'",
      "Step 4: The device will be unlocked"
    ],
    warning: "⚠️ This will erase all data on the device"
  },
  {
    id: 7,
    brand: "Realme",
    model: "Realme (All Models)",
    method: "Realme Cloud Unlock",
    difficulty: "Easy",
    time: "5-10 min",
    tools: ["Realme Account", "Internet Connection"],
    steps: [
      "Step 1: Visit cloud.realme.com and sign in",
      "Step 2: Select the locked device",
      "Step 3: Click on 'Find Device' → 'Erase Data'",
      "Step 4: The device will be unlocked"
    ],
    warning: "⚠️ This will erase all data on the device"
  },

  // ============================================================
  // 2. 🚀 بغیر GOOGLE ACCOUNT کے انلاک (Master Bypass)
  // ============================================================
  {
    id: 100,
    brand: "Universal",
    model: "All Android (7.0 - 11.0)",
    method: "🔓 TalkBack Bypass (No Account)",
    difficulty: "Easy",
    time: "5-10 min",
    tools: ["WiFi Connection"],
    steps: [
      "Step 1: On the Google verification screen, tap the text field",
      "Step 2: Press and hold the 'Spacebar' key for 3 seconds",
      "Step 3: Release and press the volume up/down button to enable TalkBack",
      "Step 4: Draw an 'L' shape on the screen to open the TalkBack menu",
      "Step 5: Navigate to 'Settings' and go to 'Accessibility'",
      "Step 6: Disable TalkBack and install a file manager via USB",
      "Step 7: Reset the device and skip the Google verification"
    ],
    warning: "⚠️ Works on Android 7-11. Newer versions need OTG method."
  },
  {
    id: 101,
    brand: "Universal",
    model: "All Android (12.0 & Above)",
    method: "🔓 OTG APK Bypass (No Account)",
    difficulty: "Medium",
    time: "10-15 min",
    tools: ["OTG Cable", "USB Drive", "PC/Laptop"],
    apkDownload: "/download/frp-bypass.apk",
    steps: [
      "Step 1: Download the FRP Bypass APK (link above)",
      "Step 2: Copy the APK to a USB drive",
      "Step 3: Connect the USB drive to the phone via OTG cable",
      "Step 4: On the verification screen, use the 'Emergency Call' button",
      "Step 5: Dial *#*#83781#*#* to open settings",
      "Step 6: Navigate to 'Storage' and install the APK",
      "Step 7: Open the app and click 'Bypass FRP'",
      "Step 8: Restart the phone and skip Google sign-in"
    ],
    warning: "⚠️ Download the APK from the link provided above."
  },
  {
    id: 102,
    brand: "Samsung",
    model: "Samsung Galaxy (All Models)",
    method: "🔓 Emergency Call Bypass (No Account)",
    difficulty: "Easy",
    time: "5-8 min",
    tools: ["None"],
    steps: [
      "Step 1: On the lock screen, tap 'Emergency Call'",
      "Step 2: Tap the 'Emergency Contacts' icon",
      "Step 3: Tap 'Add Contact' to open the contact list",
      "Step 4: Type any random letters in the search bar",
      "Step 5: Long-press the text field and select 'Share'",
      "Step 6: Select 'Gmail' or 'Messages' to open the app",
      "Step 7: Use the app's menu to navigate to phone settings",
      "Step 8: Reset the phone or create a new user to bypass the lock"
    ],
    warning: "⚠️ Works on most Samsung devices. Newer models may block this."
  },
  {
    id: 103,
    brand: "Xiaomi",
    model: "Xiaomi / Redmi / Poco (All Models)",
    method: "🔓 Mi Flash Tool Bypass (Wipes Data)",
    difficulty: "Hard",
    time: "15-20 min",
    tools: ["PC/Laptop", "USB Cable", "Mi Flash Tool"],
    steps: [
      "Step 1: Download and install 'Mi Flash Tool' on your PC",
      "Step 2: Download the official ROM for your phone model",
      "Step 3: Power off the phone and boot into 'Fastboot Mode'",
      "Step 4: Connect the phone to the PC via USB cable",
      "Step 5: Open Mi Flash Tool and select the ROM folder",
      "Step 6: Click 'Flash' and wait for the process to complete",
      "Step 7: The phone will restart with no lock screen"
    ],
    warning: "⚠️ This will completely erase ALL data (photos, contacts, apps)"
  },
  {
    id: 104,
    brand: "OnePlus",
    model: "OnePlus / Oppo / Realme",
    method: "🔓 Quick Settings Bypass (No Account)",
    difficulty: "Easy",
    time: "3-5 min",
    tools: ["None"],
    steps: [
      "Step 1: On the lock screen, pull down the Quick Settings panel",
      "Step 2: Tap the 'Settings' gear icon (if available)",
      "Step 3: If not available, tap the 'Edit' pencil icon",
      "Step 4: Drag the 'Settings' toggle to the main panel",
      "Step 5: Open Settings and go to 'System' → 'Reset'",
      "Step 6: Select 'Erase All Data' (Factory Reset)",
      "Step 7: The phone will reset and unlock completely"
    ],
    warning: "⚠️ This will erase all data. Only works on ColorOS/OxygenOS 12 and below."
  },
  {
    id: 105,
    brand: "Universal",
    model: "Any Android Device",
    method: "🔓 Full Factory Reset (Hardware Keys)",
    difficulty: "Easy",
    time: "10-15 min",
    tools: ["None"],
    steps: [
      "Step 1: Power off the phone completely",
      "Step 2: Press and hold 'Volume Up + Power' button",
      "Step 3: Release when the Recovery Mode menu appears",
      "Step 4: Navigate to 'Wipe Data/Factory Reset'",
      "Step 5: Press the Power button to confirm",
      "Step 6: Confirm again and wait for the reset to finish",
      "Step 7: Select 'Reboot System Now'. The phone will unlock"
    ],
    warning: "⚠️ THIS WILL COMPLETELY WIPE YOUR PHONE!"
  },
  {
    id: 106,
    brand: "Samsung",
    model: "Samsung Galaxy (Android 9+)",
    method: "🔓 Samsung FRP Bypass (OTG + APK)",
    difficulty: "Medium",
    time: "10-15 min",
    tools: ["OTG Cable", "USB Drive", "PC"],
    apkDownload: "/download/samsung-frp-bypass.apk",
    steps: [
      "Step 1: Download the Samsung FRP Bypass APK",
      "Step 2: Copy to USB drive and connect via OTG",
      "Step 3: On the verification screen, tap 'Emergency Call'",
      "Step 4: Dial *#0*# to open the diagnostic menu",
      "Step 5: Select 'Sensor' → 'HRM' → 'Back' to access settings",
      "Step 6: Install the APK from the USB drive",
      "Step 7: Run the app and click 'Bypass FRP'",
      "Step 8: Restart the device and set up without Google account"
    ],
    warning: "⚠️ Works on Samsung Android 9-12. Tested on most Galaxy models."
  },

  // ============================================================
  // 3. آئی فون کے لیے (محدود)
  // ============================================================
  {
    id: 200,
    brand: "Apple",
    model: "iPhone (All Models)",
    method: "🔓 Recovery Mode Restore (Wipes All)",
    difficulty: "Medium",
    time: "20-30 min",
    tools: ["PC/Mac", "USB Cable", "iTunes/Finder"],
    steps: [
      "Step 1: Connect iPhone to computer via USB",
      "Step 2: Put iPhone into Recovery Mode",
      "Step 3: Open iTunes or Finder on your computer",
      "Step 4: Click on 'Restore iPhone' when prompted",
      "Step 5: Confirm and wait for the restore to complete",
      "Step 6: Set up as new iPhone (no lock screen)"
    ],
    warning: "⚠️ This will completely wipe your iPhone. Cannot bypass iCloud Lock."
  },
  {
    id: 201,
    brand: "Apple",
    model: "iPhone (All Models)",
    method: "🔓 DNS iCloud Bypass (Temporary)",
    difficulty: "Hard",
    time: "15-20 min",
    tools: ["WiFi", "DNS Server Address"],
    steps: [
      "Step 1: On the Activation Lock screen, tap 'Next'",
      "Step 2: Connect to WiFi and tap 'Next' again",
      "Step 3: On the Terms & Conditions screen, tap 'Cancel'",
      "Step 4: Tap 'About WiFi' and click the 'i' icon next to WiFi network",
      "Step 5: Scroll down to DNS and change it to: 104.154.51.7",
      "Step 6: Tap 'Back' and then 'Next' to bypass activation"
    ],
    warning: "⚠️ This is a temporary bypass. Device may relock after restart."
  },
];

// ============================================================
// Helper Functions
// ============================================================
const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
    case "Medium": return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";
    case "Hard": return "text-red-400 bg-red-500/10 border-red-500/20";
    default: return "text-slate-400 bg-slate-500/10 border-slate-500/20";
  }
};

const brands = ["All", "Universal", "Samsung", "Apple", "Xiaomi", "Oppo", "Vivo", "Realme", "OnePlus", "Google"];

// ============================================================
// Main Component
// ============================================================
export default function UnlockPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedMethod, setSelectedMethod] = useState<UnlockMethod | null>(null);

  // Filter methods
  const filteredMethods = unlockData.filter((method) => {
    const matchesSearch =
      method.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      method.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      method.method.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand === "All" || method.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* ہیرو سیکشن */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">🔓 Unlock Any Phone</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Unlock Your <span className="text-emerald-400">Phone</span>
            <br />
            <span className="text-slate-300 text-2xl md:text-3xl">No Account? No Password? No Problem.</span>
          </h1>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Forgot your password? Locked out of your phone? 
            <span className="text-emerald-400 font-medium"> We've got you covered.</span>
            <span className="block text-sm text-slate-400 mt-1">18+ unlock methods • All brands • All Android versions</span>
          </p>

          {/* Search Bar */}
          <div className="mt-8 w-full max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search by brand or model... e.g. "Samsung Galaxy S23"'
                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <Unlock className="w-4 h-4 text-emerald-400" />
              <span><strong className="text-white">18</strong> Unlock Methods</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span><strong className="text-white">10</strong> Brands Supported</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span><strong className="text-white">100%</strong> Free Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Brand Filters */}
      {/* ============================================================ */}
      <section className="px-4 pb-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  selectedBrand === brand
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                    : "bg-slate-800/30 text-slate-400 border-slate-700 hover:text-white hover:border-slate-600"
                }`}
              >
                {brand === "All" ? "📱 All Brands" : brand}
              </button>
            ))}
          </div>
          <div className="mt-3 text-center text-xs text-slate-500">
            <span className="bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
              🔓 <span className="text-yellow-400">Master Bypass</span> = No Google Account Required
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Unlock Methods Grid */}
      {/* ============================================================ */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-slate-400">
              Showing <span className="text-white font-semibold">{filteredMethods.length}</span> methods
            </p>
            <Link
              href="/download"
              className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <Download className="w-3 h-3" />
              Download APK Tools
            </Link>
          </div>

          {filteredMethods.length === 0 ? (
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-12 text-center">
              <Lock className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">No methods found</h3>
              <p className="text-slate-400 text-sm mt-2">
                Try adjusting your search or brand filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredMethods.map((method) => (
                <div
                  key={method.id}
                  className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-5 hover:border-emerald-500/30 transition-all hover:scale-[1.02] duration-200 flex flex-col"
                >
                  {/* Brand & Model */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-slate-700/30 rounded-full text-[10px] font-medium text-slate-400">
                        {method.brand}
                      </span>
                      <h3 className="font-semibold text-white text-base mt-1.5">{method.model}</h3>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${getDifficultyColor(method.difficulty)}`}>
                      {method.difficulty}
                    </span>
                  </div>

                  {/* Method Name */}
                  <p className="text-sm text-emerald-400 mt-2">{method.method}</p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mt-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {method.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Wrench className="w-3.5 h-3.5" />
                      {method.tools.length} tools
                    </span>
                    {method.apkDownload && (
                      <span className="flex items-center gap-1 text-emerald-400">
                        <Download className="w-3 h-3" />
                        APK
                      </span>
                    )}
                  </div>

                  {/* Warning */}
                  {method.warning && (
                    <div className="mt-3 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <p className="text-[10px] text-yellow-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {method.warning}
                      </p>
                    </div>
                  )}

                  {/* View Steps Button */}
                  <button
                    onClick={() => setSelectedMethod(method)}
                    className="mt-4 w-full py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-xl transition-all border border-emerald-500/20 flex items-center justify-center gap-2"
                  >
                    <Unlock className="w-4 h-4" />
                    View Steps
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* Method Detail Modal */}
      {/* ============================================================ */}
      {selectedMethod && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setSelectedMethod(null)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 animate-in fade-in zoom-in duration-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-slate-700/30 rounded-full text-xs font-medium text-slate-400">
                      {selectedMethod.brand}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${getDifficultyColor(selectedMethod.difficulty)}`}>
                      {selectedMethod.difficulty}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mt-2">{selectedMethod.model}</h2>
                  <p className="text-emerald-400 text-sm">{selectedMethod.method}</p>
                </div>
                <button
                  onClick={() => setSelectedMethod(null)}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-all"
                >
                  ✕
                </button>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-4 p-3 bg-slate-800/30 rounded-xl">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedMethod.time}
                </span>
                <span className="flex items-center gap-1">
                  <Wrench className="w-3.5 h-3.5" />
                  Tools: {selectedMethod.tools.join(", ")}
                </span>
                {selectedMethod.apkDownload && (
                  <Link
                    href={selectedMethod.apkDownload}
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download APK
                  </Link>
                )}
              </div>

              {/* Steps */}
              <h3 className="font-semibold text-white text-sm mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Step-by-Step Instructions
              </h3>
              <div className="space-y-2">
                {selectedMethod.steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2.5 bg-slate-800/30 rounded-xl hover:bg-slate-700/30 transition-all"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate-300">{step}</span>
                  </div>
                ))}
              </div>

              {/* Warning */}
              {selectedMethod.warning && (
                <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                  <p className="text-xs text-yellow-400 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {selectedMethod.warning}
                  </p>
                </div>
              )}

              <button
                onClick={() => setSelectedMethod(null)}
                className="mt-4 w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
              >
                Got it, Close
              </button>
            </div>
          </div>
        </>
      )}

      {/* ============================================================ */}
      {/* Bottom CTA */}
      {/* ============================================================ */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto bg-linear-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-3xl p-8 md:p-12 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Lock className="w-6 h-6 text-emerald-400" />
                Still Locked?
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Visit our repair guides or contact us for professional help.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/devices"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
              >
                Browse Devices
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all border border-slate-600"
              >
                Contact Support
              </Link>
              <Link
                href="/download"
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all border border-slate-600"
              >
                <Download className="w-4 h-4 inline mr-1" />
                Download Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}