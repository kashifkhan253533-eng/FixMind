// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ============================================================
// Layout Components
// ============================================================
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/context/AuthContext";

// ============================================================
// ✅ نئے UI کمپوننٹس (جو ہم نے بنائے ہیں)
// ============================================================
import ChatBot from "@/components/ui/ChatBot";
import ThemeToggle from "@/components/ui/ThemeToggle";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Newsletter from "@/components/ui/Newsletter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ============================================================
// ✅ SEO Metadata (Google کے لیے بہتر)
// ============================================================
export const metadata: Metadata = {
  title: "FixMend - Repair Your World. Save the Planet.",
  description: "Free repair guides, cheap spare parts, and AI-powered diagnostics for your gadgets.",
  keywords: "repair, fix, electronics, smartphone, laptop, tablet, DIY, guide, tutorial",
  authors: [{ name: "FixMend Team" }],
  openGraph: {
    title: "FixMend - Repair Your World. Save the Planet.",
    description: "Free repair guides, cheap spare parts, and AI-powered diagnostics for your gadgets.",
    url: "https://fixmend.com",
    siteName: "FixMend",
    images: [
      {
        url: "https://fixmend.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FixMend - Repair Your World. Save the Planet.",
    description: "Free repair guides, cheap spare parts, and AI-powered diagnostics for your gadgets.",
    images: ["https://fixmend.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // 🆕 Google Search Console کے لیے
  },
};

// ============================================================
// ✅ Layout
// ============================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white min-h-screen flex flex-col`}
      >
        {/* ✅ AuthProvider - پوری ایپ کو wrap کرتا ہے */}
        <AuthProvider>
          {/* ✅ Navbar - ہر صفحے پر اوپر */}
          <Navbar />

          {/* ✅ Theme Toggle - ڈارک/لائٹ موڈ کا بٹن */}
          <div className="fixed top-20 right-4 z-40">
            <ThemeToggle />
          </div>

          {/* ✅ Main Content */}
          <main className="flex-1 pt-16">
            {/* ✅ Breadcrumbs - راستہ دکھانے والا نیویگیشن */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumbs />
            </div>

            {/* ✅ Page Content */}
            {children}

            {/* ✅ Newsletter - ہر صفحے کے نیچے (اختیاری) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <Newsletter />
            </div>
          </main>

          {/* ✅ Footer - ہر صفحے پر نیچے */}
          <Footer />

          {/* ✅ Back to Top - اسکرول کرنے پر ظاہر ہوگا */}
          <BackToTop />

          {/* ✅ Cookie Banner - صارف کی رضایت کے لیے */}
          <CookieBanner />

          {/* ✅ AI ChatBot - ہر صفحے پر موجود ہوگا */}
          <ChatBot />
        </AuthProvider>
      </body>
    </html>
  );
}