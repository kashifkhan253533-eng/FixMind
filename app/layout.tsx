// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // ✅ Default import (درست)
import "./globals.css";

// ============================================================
// Layout Components
// ============================================================
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/context/AuthContext";

// ============================================================
// ✅ UI کمپوننٹس
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
// ✅ SEO Metadata
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
    google: "google-site-verification: google94ff76944902b60e.html",
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
        {/* ✅ Service Worker Registration (PWA) */}
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/sw.js')
                .then(() => console.log('✅ Service Worker registered'))
                .catch((err) => console.log('❌ Service Worker registration failed:', err));
            }
          `}
        </Script>

        {/* ✅ AuthProvider - پوری ایپ کو wrap کرتا ہے */}
        <AuthProvider>
          {/* ✅ Navbar */}
          <Navbar />

          {/* ✅ Theme Toggle */}
          <div className="fixed top-20 right-4 z-40">
            <ThemeToggle />
          </div>

          {/* ✅ Main Content */}
          <main className="flex-1 pt-16">
            {/* ✅ Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumbs />
            </div>

            {/* ✅ Page Content */}
            {children}

            {/* ✅ Newsletter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <Newsletter />
            </div>
          </main>

          {/* ✅ Footer */}
          <Footer />

          {/* ✅ Back to Top */}
          <BackToTop />

          {/* ✅ Cookie Banner */}
          <CookieBanner />

          {/* ✅ AI ChatBot */}
          <ChatBot />
        </AuthProvider>
      </body>
    </html>
  );
}
