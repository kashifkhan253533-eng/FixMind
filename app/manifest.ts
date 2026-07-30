// app/manifest.ts
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    // ============================================================
    // ✅ Required (لازمی)
    // ============================================================
    name: "FixMend - Repair Your World. Save the Planet.",
    short_name: "FixMend",
    start_url: "/",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],

    // ============================================================
    // ⭐ Recommended (تجویز کردہ)
    // ============================================================
    id: "FixMend",
    description: "Free repair guides, cheap spare parts, and AI-powered diagnostics for your gadgets.",
    orientation: "portrait",
    display: "standalone",
    theme_color: "#0f172a",
    background_color: "#0f172a",
    screenshots: [
      {
        src: "/screenshot-1.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "FixMend Homepage - Search and find repair guides",
      },
      {
        src: "/screenshot-2.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Device Repair Guides - Step-by-step instructions",
      },
      {
        src: "/screenshot-3.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Video Tutorials - 5,000+ repair videos",
      },
      {
        src: "/screenshot-4.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Dashboard - Track your repair progress",
      },
      {
        src: "/screenshot-5.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Device Details - Specs and repair options",
      },
    ],

    // ============================================================
    // 📂 Optional (اختیاری) – صرف وہی جو Next.js سپورٹ کرتا ہے
    // ============================================================
    lang: "en",
    scope: "/",
    dir: "ltr",
    categories: ["technology", "education", "utilities"],
    display_override: ["window-controls-overlay", "minimal-ui"],
    shortcuts: [
      {
        name: "Search Devices",
        short_name: "Search",
        description: "Find repair guides for your device",
        url: "/devices",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Watch Videos",
        short_name: "Videos",
        description: "Watch repair tutorials",
        url: "/videos",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Unlock Phone",
        short_name: "Unlock",
        description: "Unlock your device",
        url: "/unlock",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "My Dashboard",
        short_name: "Dashboard",
        description: "View your repair progress",
        url: "/dashboard",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
    ],
    share_target: {
      action: "/share-target",
      method: "GET",
      params: {
        title: "title",
        text: "text",
        url: "url",
      },
    },
    launch_handler: {
      client_mode: "auto",
    },
    prefer_related_applications: false,
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=com.fixmend.app",
      },
    ],
  };
}