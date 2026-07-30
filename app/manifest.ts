// app/manifest.ts
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FixMend - Repair Your World. Save the Planet.",
    short_name: "FixMend",
    description: "Free repair guides, cheap spare parts, and AI-powered diagnostics for your gadgets.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    orientation: "portrait",
    scope: "/",           // ✅ شامل کریں
    lang: "en",           // ✅ شامل کریں
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
    ],
    categories: ["technology", "education", "utilities"],
  };
}